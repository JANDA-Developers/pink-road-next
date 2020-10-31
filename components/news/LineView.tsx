import { url } from 'inspector';
import React from 'react';

interface IProp { }

export const LineView: React.FC<IProp> = () => {
    return <li>
        <div className="td01">2323</div>
        <div className="td02"><span className="img" style={{
            backgroundImage: `url("")`
        }}>썸네일이미지</span></div>
        <div className="td03">
            <span className="title">10월의 여행을 떠나요!!</span>
            <span className="id">관리자</span>
            <span className="count">조회[22]</span>
        </div>
        <div className="td04">2020.02.02 11:00</div>
    </li>;
};
