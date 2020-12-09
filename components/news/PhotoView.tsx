import React from 'react';
import { Fnews } from '../../types/api';
import { BG } from '../../types/const';

interface IProp {
    news: Fnews
}

export const PhotoNewsView: React.FC<IProp> = ({ news }) => {
    return <li className="list_in">
        <div
            className="img"
            style={BG(news.thumb?.uri || "")}
        />
        <div className="title">{news.title}</div>
        <div className="txt">{news.subTitle}</div>
    </li>;
};