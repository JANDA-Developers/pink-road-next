import React from 'react';
import { MypageLayout } from '../../layout/MypageLayout';

interface IProp { }

export const MyPageBasket: React.FC<IProp> = () => {
    return <div className="in board_list mymdeal_div">
        <h4>나의 게시글</h4>
        <div className="paper_div">
            <div className="in_box">
                <div className="list_lightbox">
                    <div className="boardListForm">
                        <ul className="list_ul">
                            <li >
                                <div className="subj">20,000원</div>
                                <div className="date">2020.09.08</div>
                                <div className="info">
                                    <span>정산중</span>
                                </div>
                            </li>
                            <li >
                                <div className="subj">20,000원</div>
                                <div className="date">2020.09.08</div>
                                <div className="info">
                                    <span>정산중</span>
                                </div>
                            </li>
                            <li >
                                <div className="subj">20,000원</div>
                                <div className="date">2020.09.08</div>
                                <div className="info">
                                    <span>정산중</span>
                                </div>
                            </li>
                            <li >
                                <div className="subj">20,000원</div>
                                <div className="date">2020.09.08</div>
                                <div className="info">
                                    <span>정산중</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default MyPageBasket;