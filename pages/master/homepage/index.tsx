import { MasterLayout } from 'layout/MasterLayout';
import React from 'react';
import Link from "next/link";

interface IProp { }

export const MsHomepageMain: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in ">
            <h4>홈페이지 설정</h4>
            <div className="in_content">
                <div className="tab-nav">
                    <ul>
                        <li className="on"><Link href="/master/homepage"><a>기본설정</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-2"><a>SMS관리</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-3"><a>카카오비즈톡</a></Link></li>
                    </ul>
                </div>
                <div className="con homepage">
                    <div className="fin">
                        <div className="float_left">
                        </div>
                        <div className="float_right">
                            <button type="submit" className="btn medium">저장하기</button>
                        </div>
                    </div>
                    <div className="design_table">
                        <div className="block_box">

                            <h5>검색 최적화 설정</h5>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">하단바로가기-정보01</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30 mr5" placeholder="바로가기 이름" type="text" />
                                        <input className="w50" placeholder="연결주소" type="text" />
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

export default MsHomepageMain;