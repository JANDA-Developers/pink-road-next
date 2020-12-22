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
                        <li className="on"><Link href="/master/homepage/homepage1-4"><a>약관설정</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-5"><a>게시판설정</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-6"><a>정산설정</a></Link></li>
                    </ul>
                </div>
                <div className="con terms">
                    <div className="jul">
                        <h5>이용약관</h5>
                        <div className="textbox">
                            에디터자리
                        </div>
                        <div className="fin">
                            <div className="float_right">
                                <button type="submit" className="btn medium">저장하기</button>
                            </div>
                        </div>
                    </div>

                    <div className="jul">
                        <h5>개인정보수집 및 이용</h5>
                        <div className="textbox">
                            에디터자리
                        </div>
                        <div className="fin">
                            <div className="float_right">
                                <button type="submit" className="btn medium">저장하기</button>
                            </div>
                        </div>
                    </div>

                    <div className="jul">
                        <h5>개인정보 제3자 제공</h5>
                        <div className="textbox">
                            에디터자리
                        </div>
                        <div className="fin">
                            <div className="float_right">
                                <button type="submit" className="btn medium">저장하기</button>
                            </div>
                        </div>
                    </div>

                    <div className="jul">
                        <h5>여행자약관</h5>
                        <div className="textbox">
                            에디터자리
                        </div>
                        <div className="fin">
                            <div className="float_right">
                                <button type="submit" className="btn medium">저장하기</button>
                            </div>
                        </div>
                    </div>

                    <div className="jul">
                        <h5>마케팅정보 수신동의</h5>
                        <div className="textbox">
                            에디터자리
                        </div>
                        <div className="fin">
                            <div className="float_right">
                                <button type="submit" className="btn medium">저장하기</button>
                            </div>
                        </div>
                    </div>

                    <div className="jul">
                        <h5>국내여행특별약관동의</h5>
                        <div className="textbox">
                            에디터자리
                        </div>
                        <div className="fin">
                            <div className="float_right">
                                <button type="submit" className="btn medium">저장하기</button>
                            </div>
                        </div>
                    </div>

                    <div className="jul">
                        <h5>고유식별정보 수집 및 이용동의</h5>
                        <div className="textbox">
                            에디터자리
                        </div>
                        <div className="fin">
                            <div className="float_right">
                                <button type="submit" className="btn medium">저장하기</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </MasterLayout >
};

export default MsHomepageA;