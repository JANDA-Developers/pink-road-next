import { MasterLayout } from 'layout/MasterLayout';
import React from 'react';
import Link from "next/link";
import { HomepageTopNav } from '../../../components/topNav/MasterTopNav';

interface IProp { }

export const MsHomepageA: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in ">
            <h4>홈페이지 설정</h4>
            <div className="in_content">
                <HomepageTopNav />
                <div className="con homepage kakaobiztalk">
                    <div className="alignment">
                        <div className="left_div">
                            <ul className="board_option">
                                <li className="on"><a href="/">전체<strong>46</strong></a></li>
                                <li><a href="/">예약<strong>23</strong></a></li>
                                <li><a href="/">회원<strong>23</strong></a></li>
                                <li><a href="/">정산<strong>23</strong></a></li>
                            </ul>
                        </div>
                        <div className="right_div">

                            <select className="sel01">
                                <option>최신순 &uarr;</option>
                                <option>최신순 &darr;</option>
                            </select>
                        </div>
                    </div>
                    <div className="talk-list">

                    </div>
                </div>
            </div>
        </div>
    </MasterLayout >
};

export default MsHomepageA;