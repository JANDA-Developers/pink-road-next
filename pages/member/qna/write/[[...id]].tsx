import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { BoardWrite } from "components/board/Write";
import { useBoard } from "hook/useBoard";
import { omits } from "../../../../utils/omit";
import { Validater } from "../../../../utils/validate";
import {
    useQnaCreate,
    useQnaDelete,
    useQnaFindById,
    useQnaUpdate,
} from "../../../../hook/useQna";
import { AppContext } from "../../../_app";
import { LoginModal } from "../../../../components/loginModal/LoginModal";
import { useModal } from "../../../../hook/useModal";
import { QnaTarget, QnaUpdateInput } from "../../../../types/api";

interface IProp {}

export const QnaWrite: React.FC<IProp> = () => {
    const router = useRouter();
    const id = router.query.id?.[0] as string;
    const { item: qna } = useQnaFindById(id);
    const loginModalHook = useModal();
    const [target, setTarget] = useState<QnaTarget>(
        qna?.target || QnaTarget.ALL
    );
    const isTargetAll = target === QnaTarget.ALL;
    const mode = id ? "edit" : "create";
    const { categoriesMap } = useContext(AppContext);

    const [qnaUpdateMu] = useQnaUpdate({
        onCompleted: ({ QnaUpdate }) => {
            if (QnaUpdate.ok) {
                const id = QnaUpdate.data!._id;
                router.push(`/member/qna`);
            }
        },
        awaitRefetchQueries: true,
    });

    const [qnaCreateMu] = useQnaCreate({
        onCompleted: ({ QnaCreate }) => {
            if (QnaCreate.ok) {
                router.push(`/member/qna`);
            }
        },
        awaitRefetchQueries: true,
    });

    const [qnaDeleteMu] = useQnaDelete({
        onCompleted: ({ QnaDelete }) => {
            if (QnaDelete.ok) router.push(`/member/qna`);
        },
    });

    const boardHook = useBoard(
        {
            ...qna,
        },
        { storeKey: "qnaWrite" }
    );

    const {
        boardData,
        loadKey,
        handleCancel,
        handleLoad,
        handleTempSave,
        setBoardData,
    } = boardHook;

    const { validate } = new Validater([
        {
            value: boardData.title,
            failMsg: "제목 값은 필수 입니다.",
        },
        {
            value: boardData.categoryId,
            failMsg: "카테고리 값은 필수 입니다.",
        },
        {
            value: boardData.contents,
            failMsg: "콘텐츠 값은 필수 입니다.",
        },
    ]);

    const handleUpdate = () => {
        if (!validate()) return;

        const params: QnaUpdateInput = {
            ...boardData,
            target,
        };

        qnaUpdateMu({
            variables: {
                params: omits(params, ["files"]),
                id,
            },
        });
    };

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            qnaDeleteMu({
                variables: {
                    id,
                },
            });
    };

    const handleCreate = () => {
        if (!validate()) return;

        const next = {
            ...boardData,
            target,
        };

        qnaCreateMu({
            variables: {
                params: omits(next, ["files"]),
            },
        });
    };

    useEffect(() => {
        setBoardData({
            ...(qna as any),
            categoryId: qna?.category?._id,
        });
    }, [qna?._id]);

    return (
        <div>
            <BoardWrite
                WriteInjectionTop={
                    <div>
                        <div className="write_type">
                            <div className="title">안내대상</div>
                            <div className="input_form">
                                <input
                                    onChange={(e) => {
                                        const val = e.currentTarget.value;
                                        setTarget(val as QnaTarget);
                                    }}
                                    type="radio"
                                    id="all"
                                    name="all"
                                    value={QnaTarget.ALL}
                                    checked={target === QnaTarget.ALL}
                                />
                                <label htmlFor="all">모두에게</label>
                                <input
                                    onChange={(e) => {
                                        const val = e.currentTarget.value;
                                        setTarget(val as QnaTarget.SELLER);
                                    }}
                                    type="radio"
                                    id="partner"
                                    name="partner"
                                    value={QnaTarget.SELLER}
                                    checked={target === QnaTarget.SELLER}
                                />
                                <label htmlFor="partner">파트너에게</label>
                            </div>
                        </div>
                    </div>
                }
                boardHook={boardHook}
                key={loadKey + (qna?._id || "")}
                mode={mode}
                categoryList={
                    isTargetAll ? categoriesMap.QNA : categoriesMap.EXPERIENCE
                }
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
                    files: true,
                }}
            />
            <LoginModal
                modalHook={loginModalHook}
                onLogin={() => {
                    location.reload();
                }}
            />
        </div>
    );
};

export default QnaWrite;
