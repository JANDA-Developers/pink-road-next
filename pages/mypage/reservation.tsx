import { MypageLayout } from 'layout/MypageLayout';
import React from 'react';

interface IProp { }

export const MyPageSettlement: React.FC<IProp> = () => {
    return <MypageLayout>
        <div className="in board_list mymdeal_div">
            <h4>매출/정산관리</h4>
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
    </MypageLayout>
};

export default MyPageSettlement;