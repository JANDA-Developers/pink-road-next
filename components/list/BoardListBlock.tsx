import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { BoardList_BoardList_data, BoardType } from '../../types/api';
import { BG } from '../../types/const';

interface IProp {
    board: BoardList_BoardList_data
}

export const BoardListBlock: React.FC<IProp> = ({ board }) => {
    const { _id, title, subTitle, thumb, keyWards, boardType } = board;
    const router = useRouter();

    const getPath = () => {
        if (boardType === BoardType.ANNOUNCE) return "announce";
        if (boardType === BoardType.News) return "news";
        if (boardType === BoardType.PORTFOLIO) return "portfolio";
        if (boardType === BoardType.PRODUCT) return "tour";
        if (boardType === BoardType.QNA) return "qna";
        if (boardType === BoardType.QUESTION) return "question";
    }

    const link = `/${getPath()}/view/${_id}`;

    return <li className="list_in">
        <div
            className="img"
            style={BG(thumb?.uri || "")}
        />
        <div className="title">{title}</div>
        <div className="txt">{subTitle}</div>
    </li>
};
