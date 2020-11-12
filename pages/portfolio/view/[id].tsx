import { useQuery } from '@apollo/client';
import dayjs from 'dayjs';
import { usePortfolioFind } from 'hook/usePortfolioFind';
import { useRouter } from 'next/router';
import React from 'react';
import EditorRendererProvider from 'react-editorjs-renderer';
import { IPortfolio } from 'types/interface';

interface IProp {
    item: IPortfolio
}

export const PorfolioDetail: React.FC<IProp> = ({ item }) => {
    const { title, subTitle, thumb, createdAt, updatedAt, content } = item;
    const createString = dayjs(createdAt).format("YYYY.MM.DD HH:mm");
    const updateString = dayjs(updatedAt).format("YYYY.MM.DD HH:mm");

    return <div>
        <h3>{title}</h3>
        <span>{createString}</span>
        <span>{updateString}</span>
        <span>{subTitle}</span>
        <img src={thumb.uri} alt={thumb.name} />
        <EditorRendererProvider data={content} />
    </div>
};

export const PorfolioDetailWrap: React.FC<IProp> = () => {
    const { query } = useRouter();
    const id = query.id;
    console.log(id)
    const { item, loading } = usePortfolioFind(id)

    if (loading) return null;

    return <PorfolioDetail item={item} />
}

export default PorfolioDetailWrap;