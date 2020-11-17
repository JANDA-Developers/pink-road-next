
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import { initStorage, Storage } from '../../../utils/Storage';
import "react-day-picker/lib/style.css";
import { portfolioCreate, portfolioCreateVariables, PortfolioCreateInput, pcategoryList_pCategoryList_data, portfolioUpdate, portfolioUpdateVariables, PortfolioUpdateInput, portfolioDelete, portfolioDeleteVariables, UserRole } from '../../../types/api';
import { useMutation, } from '@apollo/client';
import { useUpload } from "hook/useUpload";
import { PORTFOLIO_CREATE, PORTFOLIO_DELETE, PORTFOLIO_UPDAET, } from "apollo/mutations";
import { PORT_FOLIO_LIST } from "apollo/queries";
import { getDefault } from "components/portfolio/helper";
import { IPortfolio } from "types/interface";
import { usePcategory } from "hook/usePcatList";
import { usePcategoryDelete } from "hook/usePCategoryDelete";
import { BoardWrite, IBoard } from "components/board/Write";
import { usePCategoryCreate } from "hook/usePCategoryCreate";
import { getOperationName } from "@apollo/client/utilities";
import { Validater } from "utils/validate";
import { usePortfolioFind } from "hook/usePortfolioFind";

interface IProp {
    context: ITourWriteWrapContext;
}

export const PortFolioWrite: React.FC<IProp> = ({ context }) => {
    const router = useRouter(); // => 넥스트에서는 변경
    const { createFn, portfolio, mode, pcategories, updateFn, id, deleteFn } = context;;
    const defaults = getDefault(portfolio);

    const categoryList = pcategories.map(pt => ({
        _id: pt._id,
        label: pt.label
    }))

    const defaultCatId = categoryList[0]?._id

    const { catDelete, loading } = usePcategoryDelete();
    const { signleUpload } = useUpload();
    const [editCategory, setEditCategory] = useState<string>(defaultCatId || "");
    const hiddenFileInput = React.useRef<HTMLInputElement>(null);

    const [loadKey, setLoadKey] = useState(0);
    const [loadData, setLoadData] = useState<typeof defaults>();

    const [newCat, setNewCat] = useState("");
    const { catCreate } = usePCategoryCreate()

    const handleAddCategory = () => {
        catCreate(newCat);
    }



    const handleUpdate = (params: Partial<IBoard>) => {
        const { contents, isOpen, subTitle, summary, title, thumb } = params;
        updateFn(id, {
            contents,
            isOpen,
            pCategoryId: editCategory,
            subTitle,
            summary,
            thumb: thumb && {
                uri: thumb.uri,
                description: thumb.description,
                extension: thumb.extension,
                fileType: thumb.fileType,
                name: thumb.name,
                owner: thumb.owner
            },
            title,
        })
    }

    const handleDelete = () => {
        deleteFn(id);
    }

    const handleCreate = (data: Partial<IBoard>) => {

        const { validate } = new Validater([{
            value: !!data.contents,
            failMsg: "콘텐츠 값은 필수 입니다.",
            id: "content"
        },
        {
            value: !!data.title,
            failMsg: "타이틀 값은 필수 입니다.",
            id: "title"
        }])

        const { thumb } = data;
        if (validate())
            createFn({
                pCategoryId: editCategory,
                title: data.title,
                contents: data.contents,
                isOpen: data.isOpen,
                subTitle: data.subTitle,
                summary: data.summary,
                thumb: thumb && {
                    uri: thumb.uri,
                    description: thumb.description,
                    extension: thumb.extension,
                    fileType: thumb.fileType,
                    name: thumb.name,
                    owner: thumb.owner
                }
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

        const { contents, isOpen, subTitle, summary, thumb, title } = savedData;

        setLoadData({
            title,
            contents,
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

    const data: Partial<IBoard> = loadData ? {
        author: "관리자",
        category: categoryList.find(ct => ct._id === loadData.pCategoryId) || categoryList[0],
        ...loadData,
        thumb: {
            uri: loadData.thumb?.uri,
            description: loadData.thumb?.description,
            fileType: loadData.thumb?.fileType,
            extension: loadData.thumb?.extension,
            name: loadData.thumb?.name,
            owner: loadData.thumb?.owner,
        }
    } : {
            author: "관리자",
            category: categoryList.find(cat => cat._id === defaults.pCategoryId),
            categoryList,
            contents: defaults.contents,
            isOpen: defaults.isOpen,
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
                                    <option value={cat._id} key={cat._id}>
                                        {cat.label}
                                    </option>
                                )}
                                <option value="">
                                    선택없음
                                </option>
                            </select>
                        </span>
                        {/* <button style={{ whiteSpace: "nowrap" }} className="btn medium" onClick={handleDeleteCategory}>카테고리삭제</button> */}
                    </div>
                </div>
            </div>
            {/* <div className="write_type">
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
            </div> */}
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

    const refetchQueries = [getOperationName(PORT_FOLIO_LIST) || ""];

    const [portfoliotUpdateMu, { loading: updateLoading }] = useMutation<portfolioUpdate, portfolioUpdateVariables>(PORTFOLIO_UPDAET, {
        onCompleted: ({ PortfolioUpdate }) => {
            if (PortfolioUpdate.ok) {
                const id = PortfolioUpdate.data._id;
                router.push(`/portfolio/view/${id}`)
            }
        },
        refetchQueries,
        awaitRefetchQueries: true
    })

    const [portfoliotCreateMu, { loading: createLoading }] = useMutation<portfolioCreate, portfolioCreateVariables>(PORTFOLIO_CREATE, {
        onCompleted: ({ PortfolioCreate }) => {
            if (PortfolioCreate.ok) {
                const id = PortfolioCreate.data._id;
                router.push(`/portfolio/view/${id}`)
            }
        },
        refetchQueries: [getOperationName(PORT_FOLIO_LIST) || ""],
        awaitRefetchQueries: true
    })

    const [portfoliotDeleteMu, { loading: deleteLoading }] = useMutation<portfolioDelete, portfolioDeleteVariables>(PORTFOLIO_DELETE, {
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
                params
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