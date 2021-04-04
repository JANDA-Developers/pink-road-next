import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from 'react';
import { BoardWrite } from "components/board/Write";
import { useBoard } from "hook/useBoard";
import { omits } from "../../../../utils/omit";
import { Validater } from "../../../../utils/validate";
import { useQnaCreate, useQnaDelete, useQnaFindById, useQnaUpdate } from "../../../../hook/useQna";
import { AppContext } from "../../../_app";
import { LoginModal } from "../../../../components/loginModal/LoginModal";
import { useModal } from "../../../../hook/useModal";
import { ThreePhoneNumberInput } from "../../../../components/phoneNumberInput/PhoneNumberInput";

interface IProp { }

export const QnaWrite: React.FC<IProp> = () => {
    const router = useRouter();
    const id = router.query.id?.[0] as string;
    const { item: qna } = useQnaFindById(id);
    const loginModalHook = useModal();
    const mode = id ? "edit" : "create";
    const { categoriesMap } = useContext(AppContext);
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")

    const [qnaUpdateMu] = useQnaUpdate({
        onCompleted: ({ QnaUpdate }) => {
            if (QnaUpdate.ok) {
                const id = QnaUpdate.data!._id;
                router.push(`/member/qna`)
            }
        },
        awaitRefetchQueries: true
    })

    const [qnaCreateMu] = useQnaCreate({
        onCompleted: ({ QnaCreate }) => {
            if (QnaCreate.ok) {
                router.push(`/member/qna`)
            }
        },
        awaitRefetchQueries: true
    })

    const [qnaDeleteMu] = useQnaDelete({
        onCompleted: ({ QnaDelete }) => {
            if (QnaDelete.ok)
                router.push(`/member/qna`)
        },
    })

    const boardHook = useBoard({
        ...qna
    }, { storeKey: "qnaWrite" });

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

        qnaUpdateMu({
            variables: {
                params: omits(params, ["files"]),
                id
            }
        })
    }

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            qnaDeleteMu({
                variables: {
                    id
                }
            })
    }

    const handleCreate = () => {
        if (!validate()) return

        const next = {
            ...boardData,
        }

        qnaCreateMu({
            variables: {
                params: omits(next, ["files"])
            }
        })
    }


    useEffect(() => {
        setBoardData({
            ...qna as any,
            categoryId: qna?.category?._id
        })
    }, [qna?._id])

    return <div>
        <BoardWrite
            WriteInjection={
                <div>
                    <div className="write_type">
                        <div className="title">패스워드</div>
                        <div className="input_form">
                            <input
                                onChange={(e) => {
                                    const val = e.currentTarget.value
                                    setPassword(val)
                                }}
                                value={password}
                                type="text"
                                name="summary"
                                className="inputText w100"
                            />
                        </div>
                    </div>
                    <div className="write_type">
                        <div className="title">성함</div>
                        <div className="input_form">
                            <input
                                onChange={(e) => {
                                    const val = e.currentTarget.value
                                    setPassword(val)
                                }}
                                value={password}
                                type="text"
                                name="summary"
                                className="inputText w100"
                            />
                        </div>
                    </div>
                    <div className="write_type">
                        <div className="title">연락처</div>
                        <div className="input_form">
                            <ThreePhoneNumberInput
                                onChange={() => { }}
                                value={{
                                    one: "",
                                    three: "",
                                    two: ""
                                }} />
                        </div>
                    </div>
                </div>
            }
            boardHook={boardHook}
            key={loadKey + (qna?._id || "")}
            mode={mode}
            categoryList={categoriesMap.QNA}
            onCancel={handleCancel}
            onCreate={handleCreate}
            onDelete={handleDelete}
            onEdit={handleUpdate}
            onSave={handleTempSave}
            onLoad={handleLoad}
            opens={{
                title: true,
                category: true,
                open: true,
                files: true
            }}
        />
        <LoginModal modalHook={loginModalHook} onLogin={() => {
            location.reload();
        }} />
    </div>
};

export default QnaWrite