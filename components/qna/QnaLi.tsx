import dayjs from 'dayjs';
import React from 'react';
import { Fquestion } from '../../types/api';
import { Econvert } from '../../types/const';
import { QStatus } from '../../types/interface';
interface IProp {
    question: Fquestion
}

export const QnaLi: React.FC<IProp> = ({ question: qs }) => {
    return <li >
        <div className="th01">{qs.no}</div>
        <div className="th02">{qs.title}<i className="q_ok">{qs.status}</i></div>
        <div className="th03">{qs.author?.nickName}</div>
        <div className="th04">{dayjs(qs.createdAt).format("YYYY.MM.DD hh:mm")}</div>
    </li>;
};
