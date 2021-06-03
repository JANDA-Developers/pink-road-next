import { useRouter } from "next/router";
import React, { useContext } from "react";
import { BoardView } from "components/board/View";
import { Fanswer } from "types/api";
import {
    useQuestionDelete,
    useQuestionFindById,
} from "../../../../hook/useQuestion";
import PageLoading from "../../../Loading";
import Page404 from "../../../404";
import { CommentWrite } from "../../../../components/comment/CommentWrite";
import { AppContext } from "../../../_app";
import Comment from "../../../../components/comment/Comment";
import {
    useAnswerCreate,
    useAnswerDelete,
    useAnswerUpdate,
} from "../../../../hook/useAnswer";
import PageDeny from "../../../Deny";
import {
    IPromptInfo,
    PormptModal,
} from "../../../../components/promptModal/PromptModal";
import { useModal } from "../../../../hook/useModal";
import { getFromUrl } from "../../../../utils/url";
import isEmpty from "../../../../utils/isEmpty";
import { nameOf } from "../../../../utils/enumToKr";
import { updateURLParameter } from "../../../../utils/getUpdateUrlParam";

interface IProp {}

export const QuestionDetail: React.FC<IProp> = () => {
    const router = useRouter();
    const pw = getFromUrl("pw");
    const pid = getFromUrl("pid");
    const questionId = router.query.id as string;
    const { myProfile, isManager } = useContext(AppContext);
    const [createAnswerMu] = useAnswerCreate({
        onCompleted: ({ AnswerCreate }) => {
            if (AnswerCreate.ok) {
                alert("답변이 작성 되었습니다.");
            }
        },
    });
    const [answerDeleteMu] = useAnswerDelete();
    const [answerUpdateMu] = useAnswerUpdate();
    const passwordModalHook = useModal<IPromptInfo>();
    const [questionDeleteMu] = useQuestionDelete({
        onCompleted: ({ QuestionDelete }) => {
            if (QuestionDelete.ok) toList();
        },
    });

    const { item: question, error } = useQuestionFindById(questionId, {
        variables: {
            id: questionId,
            password: pw,
        },
    });
    const myQuestion = question?.author?._id === myProfile?._id;
    const myProdQuestion = question?.product?.author?._id === myProfile?._id;

    if (
        question &&
        !question.isOpen &&
        !isManager &&
        !myQuestion &&
        !myProdQuestion
    ) {
        return <PageDeny />;
    }

    if (error) return <Page404 />;
    if (!question) return <PageLoading />;
    const {
        title,
        thumb,
        createdAt,
        contents,
        subTitle,
        _id,
        files,
        product,
        author,
        isOpen,
    } = question;
    const isMyProduct = myProfile && myProfile?._id === product?.author?._id;

    const toEdit = () => {
        if (isManager || myQuestion || myProdQuestion)
            router.push(`/member/question/write/${_id}` + "?pw=" + pw);
        else {
            alert("비밀글 입니다.");
        }
    };

    const toList = () => {
        const page = getFromUrl("page");
        const to = updateURLParameter("/member/question", "page", page);

        if (pid) {
            location.href = `/tour/view/` + pid + "#questions";
        } else router.push(to);
    };

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            questionDeleteMu({
                variables: {
                    id: _id,
                },
            });
    };

    const handleAnswerDelete = (answer: Fanswer) => () => {
        answerDeleteMu({
            variables: {
                id: answer._id,
                target: "Question",
                targetId: questionId,
            },
        });
    };

    const handleAnswer = (content: string) => {
        createAnswerMu({
            variables: {
                params: {
                    content,
                },
                target: "Question",
                targetId: questionId,
            },
        });
    };

    const handleEdit = async (_id: string, content: string) => {
        const result = await answerUpdateMu({
            variables: {
                _id,
                params: {
                    content,
                },
                target: "Question",
                targetId: questionId,
            },
        });

        return !!result.data?.AnswerUpdate.ok;
    };

    return (
        <div>
            <BoardView
                files={files}
                isOpen={!!isOpen}
                authorId={author?._id || ""}
                onList={toList}
                thumb={thumb}
                content={contents}
                writer={nameOf(author) || ""}
                title={title}
                subTitle={subTitle || ""}
                onDelete={handleDelete}
                onEdit={toEdit}
                createAt={createdAt}
                Foot={
                    <div className="comment__div">
                        {(isMyProduct || isManager) && (
                            <div>
                                <h3>Comment</h3>
                                {!isEmpty(question.answers) && (
                                    <div className="comment_box">
                                        <ul className="comment_box_list">
                                            {question.answers
                                                .filter(
                                                    (answer) =>
                                                        !answer?.isDelete
                                                )
                                                .map((answer) => {
                                                    return (
                                                        <Comment
                                                            title={nameOf(
                                                                answer?.author
                                                            )}
                                                            onCompleteEdit={
                                                                handleEdit
                                                            }
                                                            onDelete={handleAnswerDelete(
                                                                answer!
                                                            )}
                                                            key={answer?._id}
                                                            {...answer!}
                                                        />
                                                    );
                                                })}
                                        </ul>
                                    </div>
                                )}
                                <CommentWrite
                                    defaultContent={""}
                                    title={`${title} : ` + myProfile?.nickName}
                                    onSubmit={handleAnswer}
                                />
                            </div>
                        )}
                    </div>
                }
            />

            <PormptModal modalHook={passwordModalHook} />
        </div>
    );
};

export default QuestionDetail;

// 측정 Invocie
// CRUD
// => Create 데코레이터 다는거....
