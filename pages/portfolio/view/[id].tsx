import { usePortfolioFind } from 'hook/usePortfolioFind';
import { useRouter } from 'next/router';
import React from 'react';
import { IPortfolio } from 'types/interface';
import { BoardView } from "components/board/View";
import { useMutation } from '@apollo/client';
import { portfolioDelete, portfolioDeleteVariables } from 'types/api';
import Page404 from 'pages/404';
import { PORTFOLIO_DELETE } from '../../../apollo/gql/portfolio';

interface IProp {
    item: IPortfolio
}

export const PorfolioDetail: React.FC<IProp> = ({ item }) => {
    const router = useRouter();
    const { title, thumb, createdAt, contents, pCategory, _id } = item;

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
        onList={toList}
        thumb={thumb}
        content={contents}
        writer={"관리자"}
        title={title}
        onDelete={handleDelete}
        onEdit={toDetail}
        createAt={createdAt}
        catName={pCategory?.label} />
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