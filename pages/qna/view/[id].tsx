import { useRouter } from 'next/router';
import React from 'react';
import { BoardView } from "components/board/View";
import { Fquestion } from 'types/api';
import { useQuestionDelete, useQuestionFindById } from '../../../hook/useQuestion';
import PageLoading from '../../Loading';
import Page404 from '../../404';

interface IProp {
}

export const QuestionDetail: React.FC<IProp> = () => {
    const router = useRouter();
    const id = router.query.id as string;
    const { question, loading } = useQuestionFindById(id);
    if (loading) return <PageLoading />
    if (!question) return <Page404 />
    const { title, thumb, createdAt, contents, subTitle, _id } = question;

    const toDetail = () => {
        router.push(`/qna/write/${_id}`)
    }
    const toList = () => {
        router.push(`/question#list`)
    }


    const { questionDelete } = useQuestionDelete({
        onCompleted: ({ QuestionDelete }) => {
            if (QuestionDelete.ok) toList();
        }
    })

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            questionDelete({
                id: _id
            })
    }

    return <BoardView
        onList={toList}
        thumb={thumb}
        content={contents}
        writer={"관리자"}
        title={title}
        subTitle={subTitle || ""}
        onDelete={handleDelete}
        onEdit={toDetail}
        createAt={createdAt}
    />
};


export default QuestionDetail;