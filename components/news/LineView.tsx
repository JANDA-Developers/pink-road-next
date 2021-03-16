import dayjs from 'dayjs';
import { url } from 'inspector';
import React from 'react';
import { Fnews } from '../../types/api';
import { BG } from '../../types/const';

interface IProp {
    news: Fnews
    index: number;
}

export const LineNewsView: React.FC<IProp> = ({ news, index }) => {
    const { title, author, createdAt, viewCount, thumb } = news;
    return <li>
        <div className="td01">{index}</div>
        <div className="td02"><span className="img" style={BG(thumb?.uri || "")} /></div>
        <div className="td03">
            <span className="title">{title}</span>
            <span className="id">{author?.name}</span>
            <span className="count">조회[{viewCount}]</span>
        </div>
        <div className="td04">{dayjs(createdAt).format("YYYY.MM.DD hh:mm")}</div>
    </li>;
};
