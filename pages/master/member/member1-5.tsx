import { MasterLayout } from 'layout/MasterLayout';
import { Paginater } from 'components/common/Paginator';
import React from 'react';
import Link from "next/link";

interface IProp { }

export const MsMemberE: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in ">
            <h4>회원관리</h4>
            <div className="in_content">

                <div className="tab-nav">
                    <ul>
                        <li><Link href="/master/member"><a>개인회원</a></Link></li>
                        <li><Link href="/master/member/member1-2"><a>기업파트너 회원</a></Link></li>
                        <li><Link href="/master/member/member1-3"><a>개인파트너 회원</a></Link></li>
                        <li><Link href="/master/member/member1-4"><a>탈퇴회원</a></Link></li>
                        <li className="on"><Link href="/master/member/member1-5"><a>회원약관 설정</a></Link></li>
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
                </div>

            </div>
        </div>
    </MasterLayout >
};

export default MsMemberE;