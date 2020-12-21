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
                        <li><Link href="/master/homepage/homepage1-5"><a>게시판설정</a></Link></li>
                        <li className="on"><Link href="/master/homepage/homepage1-6"><a>정산설정</a></Link></li>
                    </ul>
                </div>
                <div className="con homepage terms">
                    <div className="fin">
                        <div className="float_left">
                        </div>
                        <div className="float_right">
                            <button type="submit" className="btn medium">저장하기</button>
                        </div>
                    </div>
                    <div className="design_table">
                        <div className="block_box">
                            <h5>기업파트너 - 공제금액<button className="btn float_right"><i className="flaticon-add"></i>항목추가</button></h5>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">공제항목1</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30 mr5" placeholder="항목명" type="text" />
                                        <input className="w30 mr5" placeholder="숫자만 입력해 주세요." type="text" />
                                        <select className="w10">
                                            <option>%</option>
                                            <option>원</option>
                                        </select>
                                        <p className="infotxt_gray">정산 계산시 공제 할 금액입니다. 시스템상에서는 -로 표기가 됩니다.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">공제항목2</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30 mr5" placeholder="항목명" type="text" />
                                        <input className="w30 mr5" placeholder="숫자만 입력해 주세요." type="text" />
                                        <select className="w10">
                                            <option>%</option>
                                            <option>원</option>
                                        </select>
                                        <p className="infotxt_gray">정산 계산시 공제 할 금액입니다. 시스템상에서는 -로 표기가 됩니다.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">공제항목3</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30 mr5" placeholder="항목명" type="text" />
                                        <input className="w30 mr5" placeholder="숫자만 입력해 주세요." type="text" />
                                        <select className="w10">
                                            <option>%</option>
                                            <option>원</option>
                                        </select>
                                        <p className="infotxt_gray">정산 계산시 공제 할 금액입니다. 시스템상에서는 -로 표기가 됩니다.</p>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="block_box">
                            <h5>개인파트너 - 공제금액<button className="btn float_right"><i className="flaticon-add"></i>항목추가</button></h5>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">공제항목1</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30 mr5" placeholder="항목명" type="text" />
                                        <input className="w30 mr5" placeholder="숫자만 입력해 주세요." type="text" />
                                        <select className="w10">
                                            <option>%</option>
                                            <option>원</option>
                                        </select>
                                        <p className="infotxt_gray">정산 계산시 공제 할 금액입니다. 시스템상에서는 -로 표기가 됩니다.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">공제항목2</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30 mr5" placeholder="항목명" type="text" />
                                        <input className="w30 mr5" placeholder="숫자만 입력해 주세요." type="text" />
                                        <select className="w10">
                                            <option>%</option>
                                            <option>원</option>
                                        </select>
                                        <p className="infotxt_gray">정산 계산시 공제 할 금액입니다. 시스템상에서는 -로 표기가 됩니다.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">공제항목3</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30 mr5" placeholder="항목명" type="text" />
                                        <input className="w30 mr5" placeholder="숫자만 입력해 주세요." type="text" />
                                        <select className="w10">
                                            <option>%</option>
                                            <option>원</option>
                                        </select>
                                        <p className="infotxt_gray">정산 계산시 공제 할 금액입니다. 시스템상에서는 -로 표기가 됩니다.</p>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="block_box">
                            <h5>기업파트너 - 추가금액<button className="btn float_right"><i className="flaticon-add"></i>항목추가</button></h5>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">추가항목1</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30 mr5" placeholder="항목명" type="text" />
                                        <input className="w30 mr5" placeholder="숫자만 입력해 주세요." type="text" />
                                        <select className="w10">
                                            <option>%</option>
                                            <option>원</option>
                                        </select>
                                        <p className="infotxt_gray">정산 계산시 추가할 금액입니다. 시스템상에서는 +로 표기가 됩니다.</p>

                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="block_box">
                            <h5>개인파트너 - 추가금액<button className="btn float_right"><i className="flaticon-add"></i>항목추가</button></h5>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">추가항목1</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30 mr5" placeholder="항목명" type="text" />
                                        <input className="w30 mr5" placeholder="숫자만 입력해 주세요." type="text" />
                                        <select className="w10">
                                            <option>%</option>
                                            <option>원</option>
                                        </select>
                                        <p className="infotxt_gray">정산 계산시 추가할 금액입니다. 시스템상에서는 +로 표기가 됩니다.</p>

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