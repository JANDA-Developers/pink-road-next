import { MasterLayout } from 'layout/MasterLayout';
import React from 'react';
import Link from "next/link";
import { auth } from 'utils/with';
import { ADMINS } from 'types/const';

interface IProp { }

export const MsHomepageB: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in ">
            <h4>홈페이지 설정</h4>
            <div className="in_content">
                <div className="tab-nav">
                    <ul>
                        <li><Link href="/master/homepage"><a>기본설정</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-2"><a>SMS설정</a></Link></li>
                        <li className="on"><Link href="/master/homepage/homepage1-3"><a>카카오비즈톡</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-4"><a>약관설정</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-5"><a>게시판설정</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-6"><a>정산설정</a></Link></li>
                    </ul>
                </div>
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

export default auth(ADMINS)(MsHomepageB);