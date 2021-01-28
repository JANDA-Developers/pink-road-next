import { useRouter } from 'next/router';
import React from 'react';
import { BoardView } from "components/board/View";
import { useQnaDelete, useQnaFindById } from '../../../../hook/useQna';
import PageLoading from '../../../Loading';
import Page404 from '../../../404';
import { auth } from '../../../../utils/with';
import { ALLOW_ADMINS } from '../../../../types/const';

interface IProp {
}

export const QnaDetail: React.FC<IProp> = () => {
    const router = useRouter();
    const qnaId = router.query.id as string;
    const [qnaDeleteMu] = useQnaDelete({
        onCompleted: ({ QnaDelete }) => {
            if (QnaDelete.ok) toList();
        }
    })
    const { item: qna, error } = useQnaFindById(qnaId);

    if (error) return <Page404 />
    if (!qna) return <PageLoading />

    const { title, thumb, createdAt, contents, subTitle, _id, } = qna;


    const toDetail = () => {
        router.push(`/member/qna/write/${_id}`)
    }

    const toList = () => {
        router.push(`/member/qna/`)
    }

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            qnaDeleteMu({
                variables: {
                    id: _id
                }
            })
    }

    return <div>
        <BoardView
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
    </div>
};


export default auth(ALLOW_ADMINS)(QnaDetail);