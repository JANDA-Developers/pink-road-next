import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import { initStorage, Storage } from '../../../utils/Storage';
import {
    QuestionCreateInput,
    pcategoryList_pCategoryList_data,
    QuestionUpdateInput,
    Fquestion
} from '../../../types/api';
import { usePcategory } from "hook/usePcatList";
import { BoardWrite, IBoardOpen } from "components/board/Write";
import { isUnLoaded, IUseBoardData, useBoard } from "hook/useBoard";
import { omits } from "../../../utils/omit";
import { useQuestionCreate, useQuestionDelete, useQuestionUpdate, useQuestionFindById } from "../../../hook/useQuestion";
import { auth } from "../../../utils/with";
import { ONLY_LOGINED } from "../../../types/const";
import { useProductList } from "../../../hook/useProduct";
import ProductSearcherWrap from "../../../components/productSearcher/ProductSearcher";
import { Validater } from "../../../utils/validate";
import { getFromUrl } from "../../../utils/url";

interface IProp {
    // type: QUESTION_TYPE;
    context: ITourWriteWrapContext;
}

export const QuestionWrite: React.FC<IProp> = ({ context }) => {
    const router = useRouter();
    const open: IBoardOpen = {
        thumb: true,
        title: true
    };

    const productId = getFromUrl("pid");
    const { createFn, question, mode, updateFn, id, deleteFn } = context;;
    const boardHook = useBoard({
        ...question,
    }, open);
    const [productId, setProductId] = useState("");
    const { boardData, loadKey, loadKeyAdd, setBoardData, validater: { nodes } } = boardHook

    const { validate } = new Validater([
        ...nodes,
        {
            value: boardData.contents,
            failMsg: "콘텐츠 값은 필수 입니다.",
        }, {
            value: productId,
            failMsg: "상품 선택은 필수 입니다.",
        }]
    );

    const handleUpdate = () => {
        if (validate())
            updateFn(id!, {
                ...boardData,
            })
    }

    const handleDelete = () => {
        deleteFn(id!);
    }

    const handleCreate = () => {
        if (validate()) {
            const next = omits({
                ...boardData,
                productId,
            }, ["contents", "categoryId"])
            createFn(next)
        }
    }

    const handleTempSave = () => {
        Storage?.saveLocal("questionWrite", boardData);
    }

    const handleCancel = () => {
        router.back()
    }

    const handleLoad = () => {
        const saveData = Storage?.getLocalObj<IUseBoardData>("questionWrite");
        if (!isUnLoaded(saveData)) {
            setBoardData(saveData);
            loadKeyAdd();
        }
    }

    useEffect(() => {
        initStorage()
    }, [])

    return <BoardWrite
        WriteInjection={<ProductSearcherWrap
            onSelectProduct={(product) => {
                setProductId(product._id);
            }} />
        }
        boardHook={boardHook}
        key={loadKey}
        mode={mode}
        onCancel={handleCancel}
        onCreate={handleCreate}
        onDelete={handleDelete}
        onEdit={handleUpdate}
        onSave={handleTempSave}
        onLoad={handleLoad}
        opens={open}
    />
};


export type TCreateFn = (params: QuestionCreateInput) => void;
export type TUpdateFn = (id: string, params: QuestionUpdateInput) => void;
export type TDeleteFn = (id: string) => void;

interface IProp {
    mode?: "edit" | "create"
}

interface ITourWriteWrapContext {
    createFn: TCreateFn;
    updateFn: TUpdateFn;
    deleteFn: TDeleteFn;
    question?: Fquestion;
    pcategories: pcategoryList_pCategoryList_data[];
    findLoading: boolean;
    createLoading: boolean;
    mode: "create" | "edit"
    id?: string;
}

//수정하고 나면 수정한 내용을 그대로 덮어버리면 안됨. 핑크로드의 승인이 필요함.
export const QuestionWriteWrap: React.FC<IProp> = () => {
    const router = useRouter(); // => 넥스트에서는 변경
    const id = router.query.id?.[0] as string | undefined;

    const { questionUpdate, updateLoading } = useQuestionUpdate({
        onCompleted: ({ QuestionUpdate }) => {
            if (QuestionUpdate.ok) {
                const id = QuestionUpdate.data!._id;
                router.push(`/qna/view/${id}`)
            }
        },
        awaitRefetchQueries: true
    })

    const { questionCreate, createLoading } = useQuestionCreate({
        onCompleted: ({ QuestionCreate }) => {
            if (QuestionCreate.ok) {
                const id = QuestionCreate.data!._id;
                router.push(`/qna/view/${id}`)
            }
        },
        awaitRefetchQueries: true
    })

    const { questionDelete } = useQuestionDelete({
        onCompleted: ({ QuestionDelete }) => {
            if (QuestionDelete.ok)
                router.push(`/qna`)
        },
    })

    const { question, loading: findLoading } = useQuestionFindById(id);

    const { pcategories, loading: pcategoryLoading } = usePcategory();

    const createFn: TCreateFn = (params: QuestionCreateInput) => {
        questionCreate({
            params: omits(params, ["categoryId", "files"])
        })
    }

    const deleteFn: TDeleteFn = (id: string) => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            questionDelete({
                id
            })
    }

    const updateFn = (id: string, params: QuestionUpdateInput) => {
        questionUpdate({
            params: omits(params, ["categoryId", "files"]),
            id
        })
    }

    if (createLoading || findLoading) return null;

    const context: ITourWriteWrapContext = {
        createFn,
        updateFn,
        deleteFn,
        question,
        findLoading,
        createLoading,
        pcategories,
        mode: !id ? "create" : "edit",
        id
    }

    if (findLoading || pcategoryLoading) return null;



    return <QuestionWrite context={context} />;
};


export default auth(QuestionWriteWrap)(ONLY_LOGINED);