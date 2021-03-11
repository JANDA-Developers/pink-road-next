import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { BoardView } from "components/board/View";
import { Fanswer, Fquestion } from 'types/api';
import { useQuestionDelete, useQuestionFindById } from '../../../../hook/useQuestion';
import PageLoading from '../../../Loading';
import Page404 from '../../../404';
import { CommentWrite } from '../../../../components/comment/CommentWrite';
import { AppContext } from '../../../_app';
import Comment from '../../../../components/comment/Comment';
import { useAnswerCreate, useAnswerDelete, useAnswerUpdate } from '../../../../hook/useAnswer';
import PageDeny from '../../../Deny';

interface IProp {
}

export const QuestionDetail: React.FC<IProp> = () => {
    const router = useRouter();
    const questionId = router.query.id as string;
    const { myProfile, isManager } = useContext(AppContext);
    const [createAnswerMu] = useAnswerCreate();
    const [answerDeleteMu] = useAnswerDelete();
    const [answerUpdateMu] = useAnswerUpdate();
    const [questionDeleteMu] = useQuestionDelete({
        onCompleted: ({ QuestionDelete }) => {
            if (QuestionDelete.ok) toList();
        }
    })


    const { item: question, error } = useQuestionFindById(questionId);
    const myQuestion = question?.author?._id === myProfile?._id;
    const myProdQuestion = question?.product?.author?._id === myProfile?._id;

    if (question && !question.isOpen && !isManager && !myQuestion && !myProdQuestion) {
        return <PageDeny />
    }

    console.log({ myProdQuestion });
    2
    if (error) return <Page404 />
    if (!question) return <PageLoading />
    const { title, thumb, createdAt, contents, subTitle, _id, product, author, isOpen } = question;
    const isMyProduct = myProfile?._id === product?.author?._id;


    const toDetail = () => {
        router.push(`/member/question/write/${_id}`)
    }

    const toList = () => {
        router.push(`/member/question/`)
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
                questionId
            }
        })
    }

    const handleAnswer = (content: string) => {
        createAnswerMu({
            variables: {
                params: {
                    content
                },
                questionId
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
                questionId
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
            writer={author?.name || ""}
            title={title}
            subTitle={subTitle || ""}
            onDelete={handleDelete}
            onEdit={toDetail}
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
                {isMyProduct && <CommentWrite defaultContent={""} title={`${title} : ` + myProfile?.name} onSubmit={handleAnswer} />}
            </div>
        }
    </div>
};


export default QuestionDetail;