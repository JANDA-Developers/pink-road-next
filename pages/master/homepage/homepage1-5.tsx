import { MasterLayout } from 'layout/MasterLayout';
import React from 'react';
import Link from "next/link";

interface IProp { }

export const MsHomepageA: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in ">
            <h4>홈페이지 설정</h4>
            <div className="in_content">
                <div className="tab-nav">
                    <ul>
                        <li><Link href="/master/homepage"><a>기본설정</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-2"><a>SMS설정</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-3"><a>카카오비즈톡</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-4"><a>약관설정</a></Link></li>
                        <li className="on"><Link href="/master/homepage/homepage1-5"><a>게시판설정리</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-6"><a>정산설정</a></Link></li>
                    </ul>
                </div>
                <div className="con homepage board">
                    <div className="fin">
                        <div className="float_left">
                        </div>
                        <div className="float_right">
                            <button type="submit" className="btn medium">저장하기</button>
                        </div>
                    </div>
                    <div className="design_table">
                        <div className="block_box">
                            <h5>게시판 카테고리 설정</h5>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">공지사항</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <ul className="list">
                                            <li>공지<i className="del"></i></li>
                                            <li>안내<i className="del"></i></li>
                                        </ul>
                                        <input className="w30" placeholder="" type="text" />
                                        <button className="btn">추가</button>
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">QnA</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <ul className="list">
                                            <li>여행<i className="del"></i></li>
                                            <li>체험<i className="del"></i></li>
                                            <li>파트너<i className="del"></i></li>
                                            <li>예약<i className="del"></i></li>
                                        </ul>
                                        <input className="w30" placeholder="" type="text" />
                                        <button className="btn">추가</button>
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">고객문의</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <ul className="list">
                                            <li>예약<i className="del"></i></li>
                                            <li>체험<i className="del"></i></li>
                                            <li>여향<i className="del"></i></li>
                                            <li>취소/환불<i className="del"></i></li>
                                            <li>정산<i className="del"></i></li>
                                        </ul>
                                        <input className="w30" placeholder="" type="text" />
                                        <button className="btn">추가</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="fin">
                        <div className="float_left">
                        </div>
                        <div className="float_right">
                            <button type="submit" className="btn medium">저장하기</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </MasterLayout >
};

export default MsHomepageA;