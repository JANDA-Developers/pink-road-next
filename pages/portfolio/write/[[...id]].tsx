
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from 'react';
import { initStorage, Storage } from '../../../utils/Storage';
import "react-day-picker/lib/style.css";
import { portfolioCreate, portfolioCreateVariables, portfolioFindById, portfolioFindByIdVariables, PortfolioCreateInput, FileCreateInput, pcategoryList_pCategoryList_data, portfolioUpdate, portfolioUpdateVariables, PortfolioUpdateInput, portfolioDelete, portfolioDeleteVariables, UserRole } from '../../../types/api';
import { useMutation, useQuery } from '@apollo/client';
import { useUpload } from "hook/useUpload";
import { PORTFOLIO_CREATE, PORTFOLIO_DELETE, PORTFOLIO_UPDAET, } from "apollo/mutations";
import { PORTFOLIO_FIND_BY_ID } from "apollo/queries";
import { getDefault } from "components/portfolio/helper";
import { IPortfolio } from "types/interface";
import { usePcategory } from "hook/usePcatList";
import { usePcategoryDelete } from "hook/usePCategoryDelete";
import { BoardWrite, IBoard } from "components/board/Write";
import { usePCategoryCreate } from "hook/usePCategoryCreate";
import { AppContext } from "pages/_app";
import { roleCheck } from "utils/roleCheck";
import Page404 from "pages/404";


interface IProp {
    context: ITourWriteWrapContext;
}

export const PortFolioWrite: React.FC<IProp> = ({ context }) => {
    const router = useRouter(); // => 넥스트에서는 변경
    const { createFn, portfolio, mode, pcategories, updateFn, id, deleteFn } = context;
    const defaults = getDefault(portfolio);
    const { catDelete } = usePcategoryDelete();
    const { signleUpload } = useUpload();
    const [editCategory, setEditCategory] = useState<string>();
    const hiddenFileInput = React.useRef<HTMLInputElement>(null);

    const [loadKey, setLoadKey] = useState(0);
    const [loadData, setLoadData] = useState<typeof defaults>();


    const [newCat, setNewCat] = useState("");
    const { catCreate } = usePCategoryCreate()

    const handleAddCategory = () => {
        catCreate(newCat);
    }



    const handleUpdate = (params: Partial<IBoard>) => {
        const { content, isOpen, subTitle, summary, title, thumb } = params;
        updateFn(id, {
            content,
            isOpen,
            pCategoryId: editCategory,
            subTitle,
            summary,
            thumb,
            title,
        })
    }

    const handleDelete = () => {
        deleteFn(id);
    }

    const handleCreate = (data: Partial<IBoard>) => {
        if (!data.title) {
            alert("타이틀을 입력 해주세요");
            return;
        }
        createFn({
            pCategoryId: data.categoryId,
            title: data.title,
            content: data.content,
            isOpen: data.isOpen,
            subTitle: data.subTitle,
            summary: data.summary,
            thumb: data.thumb
        })
    }


    const handleTempSave = (data: Partial<IBoard>) => {
        try {
            Storage.saveLocal("portfolioWrite", data);
            alert("임시 저장이 완료되었습니다. 로드시 같은 디바이스로 접근 바랍니다.")
        } catch {
        } finally {
        }
    }

    const handleLoad = () => {
        const savedData: Partial<IBoard> = Storage.getLocalObj("portfolioWrite", undefined);
        if (!savedData) {
            alert("저장된 정보가 없습니다.");
            return
        }

        const { content, isOpen, subTitle, summary, thumb, title } = savedData;

        setLoadData({
            title,
            content,
            isOpen,
            subTitle: subTitle,
            summary,
            thumb,
            pCategoryId: savedData?.category?._id
        });

        setLoadKey(loadKey + 1);
    }

    const handleDeleteCategory = () => {
        if (confirm("정마로 해당 카테고리를 삭제 하시겠습니까?"))
            catDelete(editCategory)
    }
    useEffect(() => {
        initStorage()
    }, [])



    const handleCatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const nextCat = e.currentTarget.value
        setEditCategory(nextCat)
    }

    const categoryList = pcategories.map(pt => ({
        _id: pt._id,
        label: pt.label
    }))


    const data: Partial<IBoard> = loadData ? {
        author: "관리자",
        category: categoryList.find(ct => ct._id === loadData.pCategoryId) || categoryList[0],
        ...loadData
    } : {
            author: "관리자",
            category: categoryList[0],
            categoryList,
            content: defaults.content,
            isOpen: false,
            subTitle: defaults.subTitle,
            summary: defaults.summary,
            thumb: defaults.thumb,
            title: defaults.title,
        }

    return <BoardWrite key={loadKey} mode={mode}
        onCancel={() => {
            router.push("/portfolio")
        }}
        onCreate={handleCreate}
        onDelete={handleDelete}
        onEdit={handleUpdate}
        onSave={handleTempSave}
        onLoad={handleLoad}
        opens={{
            category: false,
            files: false,
            subTitle: false,
            summary: true,
            thumb: true,
            title: true
        }} WriteInjection={<div>
            <div>
                <div className="write_type">
                    <div className="title">카테고리</div>
                    <div className="input_form">
                        <span style={{
                            marginRight: "30px"
                        }} className="category r3">
                            <select onChange={handleCatChange} value={editCategory} name="category_srl">
                                {categoryList.map(cat =>
                                    <option key={cat._id}>
                                        {cat.label}
                                    </option>
                                )}
                            </select>
                        </span>
                        <button style={{ whiteSpace: "nowrap" }} className="btn medium" onClick={handleDeleteCategory}>카테고리삭제</button>
                    </div>
                </div>
            </div>
            <div className="write_type">
                <div className="title">카테고리추가</div>
                <div className="input_form">
                    <input style={{
                        marginRight: "30px"
                    }} type="text" className="inputText w50 fix" onChange={(e) => {
                        const v = e.currentTarget.value;
                        setNewCat(v);
                    }} value={newCat} />
                    <button className="btn medium" onClick={handleAddCategory}>추가</button>
                </div>
            </div>
        </div>
        } defaults={data} />
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
    portfolio: IPortfolio;
    pcategories: pcategoryList_pCategoryList_data[];
    findLoading: boolean;
    createLoading: boolean;
    mode: "create" | "edit"
    id: string;
}


//수정하고 나면 수정한 내용을 그대로 덮어버리면 안됨. 핑크로드의 승인이 필요함.
export const PortFolioWriteWrap: React.FC<IProp> = ({ isExperience }) => {
    // if(!roleCheck([UserRole.admin ,UserRole.manager])) return <Page404/>;
    const router = useRouter(); // => 넥스트에서는 변경
    const id = router.query.id?.[0] as string | undefined;

    const [portfoliotUpdateMu, { loading: updateLoading }] = useMutation<portfolioUpdate, portfolioUpdateVariables>(PORTFOLIO_UPDAET, {
        onCompleted: ({ PortfolioUpdate }) => {
            if (PortfolioUpdate.ok) {
                const id = PortfolioUpdate.data._id;
                router.push(`/portfolio/view/${id}`)
            }
        }
    })

    const [portfoliotCreateMu, { loading: createLoading }] = useMutation<portfolioCreate, portfolioCreateVariables>(PORTFOLIO_CREATE, {
        onCompleted: ({ PortfolioCreate }) => {
            if (PortfolioCreate.ok) {
                const id = PortfolioCreate.data._id;
                router.push(`/portfolio/view/${id}`)
            }
        }
    })

    const [portfoliotDeleteMu, { loading: deleteLoading }] = useMutation<portfolioDelete, portfolioDeleteVariables>(PORTFOLIO_DELETE, {
        onCompleted: ({ PortfolioDelete }) => {
            if (PortfolioDelete.ok) {
                router.push(`/portfolio`)
            }
        }
    })

    const { data, loading: findLoading } = useQuery<portfolioFindById, portfolioFindByIdVariables>(PORTFOLIO_FIND_BY_ID, {
        variables: {
            id
        },
        skip: !id
    })

    const portfolio = data?.PortfolioFindById?.data;

    const { pcategories, loading: pcategoryLoading } = usePcategory();
    const createFn: TCreateFn = (params: PortfolioCreateInput) => {
        portfoliotCreateMu({
            variables: {
                params
            }
        })
    }


    const deleteFn: TDeleteFn = (id: string) => {
        portfoliotDeleteMu({
            variables: {
                id
            }
        })
    }



    const updateFn = (id: string, params: PortfolioUpdateInput) => {
        portfoliotUpdateMu({
            variables: {
                params,
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