import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { BoardView } from "components/board/View";
import { Fanswer } from 'types/api';
import { useQuestionDelete, useQuestionFindById } from '../../../../hook/useQuestion';
import PageLoading from '../../../Loading';
import Page404 from '../../../404';
import { CommentWrite } from '../../../../components/comment/CommentWrite';
import { AppContext } from '../../../_app';
import Comment from '../../../../components/comment/Comment';
import { useAnswerCreate, useAnswerDelete, useAnswerUpdate } from '../../../../hook/useAnswer';
import PageDeny from '../../../Deny';
import { IPromptInfo, PormptModal } from '../../../../components/promptModal/PromptModal';
import { useModal } from '../../../../hook/useModal';
import { getFromUrl } from '../../../../utils/url';

interface IProp {
}

export const QuestionDetail: React.FC<IProp> = () => {
    const router = useRouter();
    const pw = getFromUrl("pw");
    const questionId = router.query.id as string;
    const { myProfile, isManager } = useContext(AppContext);
    const [createAnswerMu] = useAnswerCreate();
    const [answerDeleteMu] = useAnswerDelete();
    const [answerUpdateMu] = useAnswerUpdate();
    const passwordModalHook = useModal<IPromptInfo>();
    const [questionDeleteMu] = useQuestionDelete({
        onCompleted: ({ QuestionDelete }) => {
            if (QuestionDelete.ok) toList();
        }
    })

    const { item: question, error } = useQuestionFindById(questionId, {
        variables: {
            id: questionId,
            password: pw
        }
    });
    const myQuestion = question?.author?._id === myProfile?._id;
    const myProdQuestion = question?.product?.author?._id === myProfile?._id;

    if (question && !question.isOpen && !isManager && !myQuestion && !myProdQuestion) {
        return <PageDeny />
    }

    if (error) return <Page404 />
    if (!question) return <PageLoading />
    const { title, thumb, createdAt, contents, subTitle, _id, product, author, isOpen } = question;
    const isMyProduct = myProfile?._id === product?.author?._id;


    const toEdit = () => {
        if (isManager || myQuestion || myProdQuestion)
            router.push(`/service/question/write/${_id}` + "?pw=" + pw)
        else {
            alert("비밀글 입니다.");
        }
    }

    const toList = () => {
        router.push(`/service/question/`)
    }

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            questionDeleteMu({
                variables: {
                    id: _id
                }
            })
    }

    const handleAnswerDelete = (answer: Fanswer) => () => {
        answerDeleteMu({
            variables: {
                id: answer._id,
                target: "question",
                targetId: questionId
            }
        })
    }

    const handleAnswer = (content: string) => {
        createAnswerMu({
            variables: {
                params: {
                    content
                },
                target: "question",
                targetId: questionId
            }
        })
    }

    const handleEdit = async (_id: string, content: string) => {
        const result = await answerUpdateMu({
            variables: {
                _id,
                params: {
                    content
                },
                target: "question",
                targetId: questionId
            }
        })

        return !!result.data?.AnswerUpdate.ok
    }

    return <div>
        <BoardView
            isOpen={!!isOpen}
            authorId={author?._id || ""}
            onList={toList}
            thumb={thumb}
            content={contents}
            writer={author?.nickName || ""}
            title={title}
            subTitle={subTitle || ""}
            onDelete={handleDelete}
            onEdit={toEdit}
            createAt={createdAt}

        />
        {(isMyProduct || isManager) &&
            <div className="w1200">
                <div className="comment_box">
                    <ul>
                        {(question.answers || []).filter(answer => !answer?.isDelete).map(answer =>
                            <Comment title={answer?.author?.name} onCompleteEdit={handleEdit} onDelete={handleAnswerDelete(answer!)} key={answer?._id}  {...answer!} />
                        )}
                    </ul>
                </div>
                {isMyProduct && <CommentWrite defaultContent={""} title={`${title} : ` + myProfile?.nickName} onSubmit={handleAnswer} />}
            </div>
        }
        <PormptModal modalHook={passwordModalHook} />
    </div>
};


export default QuestionDetail;




// 측정 Invocie 
// CRUD
// => Create 데코레이터 다는거....
