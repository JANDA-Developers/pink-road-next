import { useRouter } from 'next/router';
import React from 'react';
import { BoardView } from "components/board/View";
import { Fquestion } from 'types/api';
import Page404 from 'pages/404';
import { useQuestionDelete, useQuestionFindById } from '../../../hook/useQuestion';

interface IProp {
    item: Fquestion
}

export const QuestionDetail: React.FC<IProp> = ({ item }) => {
    const router = useRouter();
    const { title, thumb, createdAt, contents, subTitle, _id } = item;

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


export const QuestionDetailWrap: React.FC<IProp> = () => {
    const { query } = useRouter()
    const id = query.id as string;
    const { question, loading } = useQuestionFindById(id)

    if (loading) return null;
    if (!question) return <Page404 />;

    return <QuestionDetail item={question} />
}

export default QuestionDetailWrap;