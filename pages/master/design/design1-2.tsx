import { MasterLayout } from 'layout/MasterLayout';
import React from 'react';
import Link from "next/link";

interface IProp { }

export const MsDesignA: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in ">
            <h4>디자인 설정</h4>
            <div className="in_content">
                <div className="tab-nav">
                    <ul>
                        <li><Link href="/master/design"><a>기본설정</a></Link></li>
                        <li className="on"><Link href="/master/design/design1-2"><a>배너관리</a></Link></li>
                        <li><Link href="/master/design/design1-3"><a>팝업관리</a></Link></li>
                        <li><Link href="/master/design/design1-4"><a>노출상품관리</a></Link></li>
                    </ul>
                </div>
                <div className="con design">
                    <div className="design_table">
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">사이트명</div>
                            </div>
                            <div className="t02">
                                <div className="txt"><input className="w50" placeholder="" type="text" /></div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">사이트로고</div>
                            </div>
                            <div className="t02">
                                <div className="txt"><input className="w50" type="file" /></div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">사이트로고(하단)</div>
                            </div>
                            <div className="t02">
                                <div className="txt"><input className="w50" type="file" /></div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">대표자</div>
                            </div>
                            <div className="t02">
                                <div className="txt"><input className="w50" placeholder="" type="text" /></div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">사업자등록번호</div>
                            </div>
                            <div className="t02">
                                <div className="txt"><input className="w50" placeholder="" type="text" /></div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">통신판매신고번호</div>
                            </div>
                            <div className="t02">
                                <div className="txt"><input className="w50" placeholder="" type="text" /></div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">주소</div>
                            </div>
                            <div className="t02">
                                <div className="txt">
                                    <input className="w50 mr5" placeholder="주소" type="text" />
                                    <input className="w40" placeholder="지도바로가기 URL" type=" text" />
                                </div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">계좌번호</div>
                            </div>
                            <div className="t02">
                                <div className="txt">
                                    <input className="w10 mr5" placeholder="은행" type="text" />
                                    <input className="w50 mr5" placeholder="계좌번호" type="text" />
                                    <input className="w20" placeholder="예금주" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">이메일</div>
                            </div>
                            <div className="t02">
                                <div className="txt"><input className="w50" placeholder="" type="text" /></div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">연락처</div>
                            </div>
                            <div className="t02">
                                <div className="txt"><input className="w50" placeholder="" type="text" /></div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">영업시간(콜센터)</div>
                            </div>
                            <div className="t02">
                                <div className="txt"><input className="w50" placeholder="" type="text" /></div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">카피라이터</div>
                            </div>
                            <div className="t02">
                                <div className="txt"><input className="w90" placeholder="Copyright © 2020 PINKROADER Co., Ltd. All rights reserved" type="text" /></div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">하단-정보01</div>
                            </div>
                            <div className="t02">
                                <div className="txt">
                                    <input className="w30 mr5" placeholder="제목" type="text" />
                                    <input className="w50" placeholder="내용" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">하단-정보02</div>
                            </div>
                            <div className="t02">
                                <div className="txt">
                                    <input className="w30 mr5" placeholder="제목" type="text" />
                                    <input className="w50" placeholder="내용" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">하단-정보03</div>
                            </div>
                            <div className="t02">
                                <div className="txt">
                                    <input className="w30 mr5" placeholder="제목" type="text" />
                                    <input className="w50" placeholder="내용" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className="tbody">
                            <div className="t01">
                                <div className="title">SNS-페이스북 연결</div>
                            </div>
                            <div className="t02">
                                <div className="txt">
                                    <input className="w80" placeholder="주소" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">SNS-트위터 연결</div>
                            </div>
                            <div className="t02">
                                <div className="txt">
                                    <input className="w80" placeholder="주소" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">SNS-인스타 연결</div>
                            </div>
                            <div className="t02">
                                <div className="txt">
                                    <input className="w80" placeholder="주소" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">SNS-네이버블로그 연결</div>
                            </div>
                            <div className="t02">
                                <div className="txt">
                                    <input className="w80" placeholder="주소" type="text" />
                                </div>
                            </div>
                        </div>

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
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">하단바로가기-정보02</div>
                            </div>
                            <div className="t02">
                                <div className="txt">
                                    <input className="w30 mr5" placeholder="바로가기 이름" type="text" />
                                    <input className="w50" placeholder="연결주소" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">하단바로가기-정보03</div>
                            </div>
                            <div className="t02">
                                <div className="txt">
                                    <input className="w30 mr5" placeholder="바로가기 이름" type="text" />
                                    <input className="w50" placeholder="연결주소" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <div className="title">하단바로가기-정보04</div>
                            </div>
                            <div className="t02">
                                <div className="txt">
                                    <input className="w30 mr5" placeholder="바로가기 이름" type="text" />
                                    <input className="w50" placeholder="연결주소" type="text" />
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
                <div className="fade"></div>

            </div>
        </div>
    </MasterLayout >
};

export default MsDesignA;