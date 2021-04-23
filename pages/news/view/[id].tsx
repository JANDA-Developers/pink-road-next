import { useRouter } from 'next/router';
import React from 'react';
import { BoardView, IBoardMoveData } from "components/board/View";
import { Fnews } from 'types/api';
import Page404 from 'pages/404';
import { useNewsDelete, useNewsFindById } from '../../../hook/useNews';
import { nameOf } from '../../../utils/enumToKr';

interface IProp {
    item: Fnews
    next?: IBoardMoveData,
    prev?: IBoardMoveData
}

export const NewsDetail: React.FC<IProp> = ({ item, next, prev }) => {
    const router = useRouter();
    const { isOpen, title, thumb, createdAt, contents, _id, subTitle, author,type } = item;

    const toDetail = () => {
        router.push(`/news/write/${_id}`)
    }
    const toList = () => {
        router.push(`/news?type=` + type);
    }


    const [newsDelete] = useNewsDelete({
        onCompleted: ({ NewsDelete }) => {
            if (NewsDelete.ok) toList();
        }
    })

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            newsDelete({
                variables: {
                    id: _id
                }
            })
    }

    return <BoardView
        isOpen={!!isOpen}
        authorId={author?._id || ""}
        onList={toList}
        thumb={thumb}
        content={contents}
        next={next}
        prev={prev}
        writer={nameOf(author)}
        title={title}
        subTitle={subTitle || ""}
        onDelete={handleDelete}
        onEdit={toDetail}
        createAt={createdAt}
    />
};

export const NewsDetailWrap: React.FC<IProp> = () => {
    const { query } = useRouter()
    const id = query.id as string;

    const { item, loading, next, prev } = useNewsFindById(id)

    if (loading) return null;
    if (!item) return <Page404 />;

    return <NewsDetail prev={prev} next={next} item={item} />
}

export default NewsDetailWrap;