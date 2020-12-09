
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import { initStorage, Storage } from '../../../utils/Storage';
import "react-day-picker/lib/style.css";
import { portfolioCreate, portfolioCreateVariables, PortfolioCreateInput, pcategoryList_pCategoryList_data, portfolioUpdate, portfolioUpdateVariables, PortfolioUpdateInput, portfolioDelete, portfolioDeleteVariables, UserRole } from '../../../types/api';
import { useMutation, } from '@apollo/client';
import { IPortfolio } from "types/interface";
import { usePcategory } from "hook/usePcatList";
import { BoardWrite } from "components/board/Write";
import { getOperationName } from "@apollo/client/utilities";
import { usePortfolioFind } from "hook/usePortfolioFind";
import { isUnLoaded, IUseBoardData, useBoard } from "hook/useBoard";
import { toOps } from "../../../utils/formatter";
import { omits } from "../../../utils/omit";
import { PORTFOLIO_CREATE, PORTFOLIO_DELETE, PORTFOLIO_UPDAET, PORT_FOLIO_LIST } from "../../../apollo/gql/portfolio";

interface IProp {
    context: ITourWriteWrapContext;
}

export const PortFolioWrite: React.FC<IProp> = ({ context }) => {
    const router = useRouter();
    const { createFn, portfolio, mode, pcategories, updateFn, id, deleteFn } = context;;
    const boardHook = useBoard({
        ...portfolio,
        categoryId: portfolio?.pCategory?._id
    })
    const { boardData, loadKey, loadKeyAdd, setBoardData, validater: { validate } } = boardHook
    const categoryList = toOps(pcategories, "_id", "label");

    const handleUpdate = () => {
        if (validate())
            updateFn(id!, {
                ...boardData,
                pCategoryId: boardData.categoryId
            })
    }

    const handleDelete = () => {
        deleteFn(id!);
    }

    const handleCreate = () => {
        if (validate())
            createFn({
                ...boardData,
                pCategoryId: boardData.categoryId
            })
    }

    const handleTempSave = () => {
        Storage?.saveLocal("portfolioWrite", boardData);
    }

    const handleCancel = () => {
        router.push("/portfolio")
    }

    const handleLoad = () => {
        const saveData = Storage?.getLocalObj<IUseBoardData>("portfolioWrite");
        if (!isUnLoaded(saveData)) {
            setBoardData(saveData);
            loadKeyAdd();
        }
    }

    useEffect(() => {
        initStorage()
    }, [])

    return <BoardWrite
        boardHook={boardHook}
        key={loadKey}
        mode={mode}
        onCancel={handleCancel}
        categoryList={categoryList}
        onCreate={handleCreate}
        onDelete={handleDelete}
        onEdit={handleUpdate}
        onSave={handleTempSave}
        onLoad={handleLoad}
        opens={{
            category: true,
            files: false,
            subTitle: false,
            summary: true,
            thumb: true,
            title: true
        }}
    // WriteInjection={
    // <div>
    //     <div>
    //         <div className="write_type">
    //             <div className="title">카테고리</div>
    //             <div className="input_form">
    //                 <span style={{
    //                     marginRight: "30px"
    //                 }} className="category r3">
    //                     <select onChange={handleCatChange} value={editCategory} name="category_srl">
    //                         {categoryList.map(cat =>
    //                             <option value={cat._id} key={cat._id}>
    //                                 {cat.label}
    //                             </option>
    //                         )}
    //                         <option value="">
    //                             선택없음
    //                         </option>
    //                     </select>
    //                 </span>
    //                 {/* <button style={{ whiteSpace: "nowrap" }} className="btn medium" onClick={handleDeleteCategory}>카테고리삭제</button> */}
    //             </div>
    //         </div>
    //     </div>
    //     <div className="write_type">
    //         <div className="title">카테고리추가</div>
    //         <div className="input_form">
    //             <input style={{
    //                 marginRight: "30px"
    //             }} type="text" className="inputText w50 fix" onChange={(e) => {
    //                 const v = e.currentTarget.value;
    //                 setNewCat(v);
    //             }} value={newCat} />
    //             <button className="btn medium" onClick={handleAddCategory}>추가</button>
    //         </div>
    //     </div>
    // </div>
    // } 
    >

    </BoardWrite>
};


export type TCreateFn = (params: PortfolioCreateInput) => void;
export type TUpdateFn = (id: string, params: PortfolioUpdateInput) => void;
export type TDeleteFn = (id: string) => void;

interface IProp {
    isExperience?: boolean;
    mode?: "edit" | "create"
}

interface ITourWriteWrapContext {
    createFn: TCreateFn;
    updateFn: TUpdateFn;
    deleteFn: TDeleteFn;
    portfolio?: IPortfolio;
    pcategories: pcategoryList_pCategoryList_data[];
    findLoading: boolean;
    createLoading: boolean;
    mode: "create" | "edit"
    id?: string;
}


//수정하고 나면 수정한 내용을 그대로 덮어버리면 안됨. 핑크로드의 승인이 필요함.
export const PortFolioWriteWrap: React.FC<IProp> = ({ isExperience }) => {
    // if(!roleCheck([UserRole.admin ,UserRole.manager])) return <Page404/>;
    const router = useRouter(); // => 넥스트에서는 변경
    const id = router.query.id?.[0] as string | undefined;

    const refetchQueries = [getOperationName(PORT_FOLIO_LIST) || ""];

    const [portfoliotUpdateMu, { loading: updateLoading }] = useMutation<portfolioUpdate, portfolioUpdateVariables>(PORTFOLIO_UPDAET, {
        onCompleted: ({ PortfolioUpdate }) => {
            if (PortfolioUpdate.ok) {
                const id = PortfolioUpdate.data!._id;
                router.push(`/portfolio/view/${id}`)
            }
        },
        refetchQueries,
        awaitRefetchQueries: true
    })

    const [portfoliotCreateMu, { loading: createLoading }] = useMutation<portfolioCreate, portfolioCreateVariables>(PORTFOLIO_CREATE, {
        onCompleted: ({ PortfolioCreate }) => {
            if (PortfolioCreate.ok) {
                const id = PortfolioCreate.data!._id;
                router.push(`/portfolio/view/${id}`)
            }
        },
        refetchQueries: [getOperationName(PORT_FOLIO_LIST) || ""],
        awaitRefetchQueries: true
    })

    const [portfoliotDeleteMu] = useMutation<portfolioDelete, portfolioDeleteVariables>(PORTFOLIO_DELETE, {
        onCompleted: ({ PortfolioDelete }) => {
            if (PortfolioDelete.ok)
                router.push(`/portfolio`)
        },
        refetchQueries: [getOperationName(PORT_FOLIO_LIST) || ""],
    })

    const { item: portfolio, loading: findLoading } = usePortfolioFind(id);

    const { pcategories, loading: pcategoryLoading } = usePcategory();

    const createFn: TCreateFn = (params: PortfolioCreateInput) => {
        portfoliotCreateMu({
            variables: {
                params: omits(params, ["categoryId", "files"])
            }
        })
    }

    const deleteFn: TDeleteFn = (id: string) => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            portfoliotDeleteMu({
                variables: {
                    id
                }
            })
    }

    const updateFn = (id: string, params: PortfolioUpdateInput) => {
        portfoliotUpdateMu({
            variables: {
                params: omits(params, ["categoryId", "files"]),
                id
            }
        })
    }

    if (createLoading || findLoading) return null;

    const context: ITourWriteWrapContext = {
        createFn,
        updateFn,
        deleteFn,
        portfolio,
        findLoading,
        createLoading,
        pcategories,
        mode: !id ? "create" : "edit",
        id
    }

    if (findLoading || pcategoryLoading) return null;
    return <PortFolioWrite context={context} />;
};


export default PortFolioWriteWrap;