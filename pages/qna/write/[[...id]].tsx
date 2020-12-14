import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import { initStorage, Storage } from '../../../utils/Storage';
import { BoardWrite } from "components/board/Write";
import { isUnLoaded, IUseBoardData, useBoard } from "hook/useBoard";
import { omits } from "../../../utils/omit";
import { auth, compose } from "../../../utils/with";
import { ONLY_LOGINED } from "../../../types/const";
import ProductSearcherWrap from "../../../components/productSearcher/ProductSearcher";
import { Validater } from "../../../utils/validate";
import { useQuestionCreate, useQuestionDelete, useQuestionFindById, useQuestionUpdate } from "../../../hook/useQuestion";

interface IProp { }

export const QuestionWrite: React.FC<IProp> = () => {
    const router = useRouter();
    const id = router.query.id as string;
    const { loading, question } = useQuestionFindById();
    const mode = id ? "create" : "edit"
    const open = {
        thumb: true,
        title: true
    };

    const { questionUpdate } = useQuestionUpdate({
        onCompleted: ({ QuestionUpdate }) => {
            if (QuestionUpdate.ok) {
                const id = QuestionUpdate.data!._id;
                router.push(`/qna/view/${id}`)
            }
        },
        awaitRefetchQueries: true
    })

    const { questionCreate } = useQuestionCreate({
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
        if (!validate()) return;

        const params = {
            ...boardData,
        }

        questionUpdate({
            params: omits(params, ["categoryId", "files"]),
            id
        })
    }

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            questionDelete({
                id
            })
    }

    const handleCreate = () => {
        if (!validate()) return

        const next = {
            ...boardData,
            productId,
        }

        questionCreate({
            params: omits(next, ["categoryId", "files"])
        })
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



export default auth(ONLY_LOGINED)(QuestionWrite)