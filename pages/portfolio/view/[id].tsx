import { useRouter } from 'next/router';
import React from 'react';
import { IPortfolio } from 'types/interface';
import { BoardView } from "components/board/View";
import { useMutation } from '@apollo/client';
import { portfolioDelete, portfolioDeleteVariables } from 'types/api';
import Page404 from 'pages/404';
import { PORTFOLIO_DELETE } from '../../../apollo/gql/portfolio';
import { usePortfolioFind } from '../../../hook/usePortfolio';

interface IProp {
    item: IPortfolio
}

export const PorfolioDetail: React.FC<IProp> = ({ item }) => {
    const router = useRouter();
    const { title, isOpen, subTitle, thumb, createdAt, updatedAt, contents, category, summary, isDelete, _id, author } = item;

    const toDetail = () => {
        router.push(`/portfolio/write/${_id}`)
    }
    const toList = () => {
        router.push(`/portfolio#list`)
    }


    const [portfoliotDeleteMu, { loading: deleteLoading }] = useMutation<portfolioDelete, portfolioDeleteVariables>(PORTFOLIO_DELETE, {
        onCompleted: ({ PortfolioDelete }) => {
            if (PortfolioDelete.ok) {
                router.push(`/portfolio`)
            }
        },
    })

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            portfoliotDeleteMu({
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
        writer={author?.name || ""}
        title={title}
        onDelete={handleDelete}
        onEdit={toDetail}
        createAt={createdAt}
        catName={category?.label} />
};


export const PorfolioDetailWrap: React.FC<IProp> = () => {
    const { query } = useRouter()
    const id = query.id as string;
    const { item, loading } = usePortfolioFind(id)

    if (loading) return null;
    if (!item) return <Page404 />;

    return <PorfolioDetail item={item} />
}

export default PorfolioDetailWrap;