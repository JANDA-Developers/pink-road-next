import { useRouter } from "next/router";
import React, { useEffect } from 'react';
import { initStorage, Storage } from '../../../utils/Storage';
import {
    NewsCreateInput,
    pcategoryList_pCategoryList_data,
    NewsUpdateInput,
    NEWS_TYPE,
    Fnews
} from '../../../types/api';
import { usePcategory } from "hook/usePcatList";
import { BoardWrite } from "components/board/Write";
import { isUnLoaded, IUseBoardData, useBoard } from "hook/useBoard";
import { omits } from "../../../utils/omit";
import { useNewsCreate, useNewsDelete, useNewsUpdate, useNewsFindById } from "../../../hook/useNews";
import { auth } from "../../../utils/with";
import { ONLY_LOGINED } from "../../../types/const";

interface IProp {
    // type: NEWS_TYPE;
    context: ITourWriteWrapContext;
}

export const NewsWrite: React.FC<IProp> = ({ context }) => {
    const router = useRouter();
    const { createFn, news, mode, updateFn, id, deleteFn } = context;;
    const boardHook = useBoard({
        ...news,
    });
    const { boardData, loadKey, loadKeyAdd, setBoardData, validater: { validate } } = boardHook
    const categoryOps = [{
        label: "여행이야기",
        _id: NEWS_TYPE.TRAVEL
    },
    {
        label: "뉴스보도",
        _id: NEWS_TYPE.MEDIA
    },
    {
        label: "문화이야기",
        _id: NEWS_TYPE.CULTURE
    }]

    const handleUpdate = () => {
        if (validate())
            updateFn(id!, {
                ...boardData,
                type: boardData.categoryId as NEWS_TYPE
            })
    }

    const handleDelete = () => {
        deleteFn(id!);
    }

    const handleCreate = () => {
        if (validate()) {
            const next = omits({
                ...boardData,
                content: boardData.contents,
                type: boardData.categoryId as NEWS_TYPE
            }, ["contents", "categoryId"])
            createFn(next)
        }
    }

    const handleTempSave = () => {
        Storage?.saveLocal("newsWrite", boardData);
    }

    const handleCancel = () => {
        router.push("/news")
    }

    const handleLoad = () => {
        const saveData = Storage?.getLocalObj<IUseBoardData>("newsWrite");
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
        categoryList={categoryOps}
        onCreate={handleCreate}
        onDelete={handleDelete}
        onEdit={handleUpdate}
        onSave={handleTempSave}
        onLoad={handleLoad}
        opens={{
            category: true,
            summary: true,
            thumb: true,
            title: true
        }}
    />
};


export type TCreateFn = (params: NewsCreateInput) => void;
export type TUpdateFn = (id: string, params: NewsUpdateInput) => void;
export type TDeleteFn = (id: string) => void;

interface IProp {
    mode?: "edit" | "create"
}

interface ITourWriteWrapContext {
    createFn: TCreateFn;
    updateFn: TUpdateFn;
    deleteFn: TDeleteFn;
    news?: Fnews;
    pcategories: pcategoryList_pCategoryList_data[];
    findLoading: boolean;
    createLoading: boolean;
    mode: "create" | "edit"
    id?: string;
}


//수정하고 나면 수정한 내용을 그대로 덮어버리면 안됨. 핑크로드의 승인이 필요함.
export const NewsWriteWrap: React.FC<IProp> = () => {
    const router = useRouter(); // => 넥스트에서는 변경
    const id = router.query.id?.[0] as string | undefined;
    // const type = getFromUrl("type")?.toUpperCase();
    // if (!type) return <Page404 />
    const { newsUpdate, updateLoading } = useNewsUpdate({
        onCompleted: ({ NewsUpdate }) => {
            if (NewsUpdate.ok) {
                const id = NewsUpdate.data!._id;
                router.push(`/news/view/${id}`)
            }
        },
        awaitRefetchQueries: true
    })

    const { newsCreate, createLoading } = useNewsCreate({
        onCompleted: ({ NewsCreate }) => {
            if (NewsCreate.ok) {
                const id = NewsCreate.data!._id;
                router.push(`/news/view/${id}`)
            }
        },
        awaitRefetchQueries: true
    })

    const { newsDelete } = useNewsDelete({
        onCompleted: ({ NewsDelete }) => {
            if (NewsDelete.ok)
                router.push(`/news`)
        },
    })

    const { news, loading: findLoading } = useNewsFindById(id);

    const { pcategories, loading: pcategoryLoading } = usePcategory();

    const createFn: TCreateFn = (params: NewsCreateInput) => {
        newsCreate({
            params: omits(params, ["categoryId", "files"])
        })
    }

    const deleteFn: TDeleteFn = (id: string) => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            newsDelete({
                id
            })
    }

    const updateFn = (id: string, params: NewsUpdateInput) => {
        newsUpdate({
            params: omits(params, ["categoryId", "files"]),
            id
        })
    }

    if (createLoading || findLoading) return null;

    const context: ITourWriteWrapContext = {
        createFn,
        updateFn,
        deleteFn,
        news,
        findLoading,
        createLoading,
        pcategories,
        mode: !id ? "create" : "edit",
        id
    }

    if (findLoading || pcategoryLoading) return null;

    return <NewsWrite context={context} />;
};


export default auth(NewsWriteWrap)(ONLY_LOGINED);