import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from 'react';
import { BoardWrite, TCategory } from "components/board/Write";
import { useBoard } from "hook/useBoard";
import { omits } from "../../../../utils/omit";
import { auth } from "../../../../utils/with";
import { ALLOW_LOGINED } from "../../../../types/const";
import { ProductSearcher } from "../../../../components/productSearcher/ProductSearcher";
import { Validater } from "../../../../utils/validate";
import { useQuestionCreate, useQuestionDelete, useQuestionFindById, useQuestionUpdate } from "../../../../hook/useQuestion";
import { getFromUrl } from "../../../../utils/url";
import { AppContext } from "../../../_app";
import { ProductSelectModal } from "../../../../components/ProductSelectModal";
import { closeModal, openModal } from "../../../../utils/popUp";

interface IProp { }

export const QuestionWrite: React.FC<IProp> = () => {
    const router = useRouter();
    const { categoriesMap } = useContext(AppContext);
    const id = router.query.id?.[0] as string;
    const { item: question } = useQuestionFindById(id);
    const mode = id ? "edit" : "create";
    const urlProductId = getFromUrl("pid") || "";
    const urlProductName = getFromUrl("name") || "";

    const categoryList = categoriesMap?.QUESTION.map((cat): TCategory => ({
        _id: cat._id,
        label: cat.label
    }))

    //아래 대충 상품캣 찾는 로직
    const productCat = categoryList.find(cat => cat.label.includes("상품"));


    const [questionUpdateMu] = useQuestionUpdate({
        onCompleted: ({ QuestionUpdate }) => {
            if (QuestionUpdate.ok) {
                const id = QuestionUpdate.data!._id;
                router.push(`/member/question/view/${id}`)
            }
        },
        awaitRefetchQueries: true
    })

    const [questionCreateMu] = useQuestionCreate({
        onCompleted: ({ QuestionCreate }) => {
            if (QuestionCreate.ok) {
                const id = QuestionCreate.data!._id;
                const pidParam = urlProductId ? "?pid=" + urlProductId : "";
                router.push(`/member/question/view/${id}` + pidParam)
            }
        },
        awaitRefetchQueries: true
    })

    const [questionDeleteMu] = useQuestionDelete({
        onCompleted: ({ QuestionDelete }) => {
            if (QuestionDelete.ok) 2
            router.push(`/member/question`)
        },
    })

    const boardHook = useBoard({
        ...question,
        categoryId: question?.category?._id || (urlProductId ? productCat?._id : undefined)
    }, { storeKey: "questionWrite" });


    const isProductMode = productCat?._id === boardHook.boardData.categoryId;

    const [productId, setProductId] = useState(urlProductId);
    const [productName, setProductName] = useState(urlProductName)
    const { boardData, loadKey, handleCancel, handleLoad, handleTempSave, setBoardData } = boardHook

    const { validate } = new Validater([
        {
            value: boardData.title,
            failMsg: "제목 값은 필수 입니다.",
        },
        {
            value: boardData.contents,
            failMsg: "콘텐츠 값은 필수 입니다.",
        },
    ]
    );

    const handleUpdate = () => {
        if (!validate()) return;

        const params = {
            ...boardData,
        }

        questionUpdateMu({
            variables: {
                params: omits(params, ["categoryId"]),
                id
            }
        })
    }

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            questionDeleteMu({
                variables: {
                    id
                }
            })
    }

    const handleCreate = () => {
        if (!validate()) return

        const next = {
            ...boardData,
            productId,
        }

        questionCreateMu({
            variables: {
                params: {
                    ...omits(next),
                    productId: productId ? productId : undefined
                }
            }
        })
    }

    useEffect(() => {
        setBoardData({
            files: question?.files || [],
            isOpen: !!question?.isOpen,
            title: question?.title,
            contents: question?.contents,
            categoryId: question?.category?._id,
        })
        setProductId(urlProductId || question?.product?._id || "")
    }, [question?._id])


    return <div>
        <BoardWrite
            className={urlProductId ? "boardWrite--categoryFix" : ""}
            categoryList={categoryList}
            WriteInjection={
                isProductMode ? <div className="write_type">
                    <div className="title">상품명</div>
                    <div className="input_form">
                        <input onFocus={openModal("#ProductSelectModal")} readOnly={!!urlProductName} id="title" value={productName} type="text" name="title" className="inputText w100" />
                    </div>
                </div> : undefined
            }
            boardHook={boardHook}
            key={loadKey + (question?._id || "") + productId}
            mode={mode}
            useTextarea
            onCancel={handleCancel}
            onCreate={handleCreate}
            onDelete={handleDelete}
            onEdit={handleUpdate}
            onSave={handleTempSave}
            onLoad={handleLoad}
            opens={{
                category: true,
                title: true,
                open: true,
                files: true,
            }}
        />
        <ProductSelectModal id="ProductSelectModal" onSelect={(pd) => {
            setProductId(pd._id);
            setProductName(pd.title);
            closeModal("#ProductSelectModal")()
        }} />
    </div>
};




export default auth(ALLOW_LOGINED)(QuestionWrite)