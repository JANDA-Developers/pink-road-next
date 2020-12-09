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
                <div className="con design popup_setting">
                    <div className="popupst_box">
                        <div className="hang_left">
                            <div className="view_box">
                                <div className="head">
                                    <ul className="top">
                                        <li><i className="flaticon-multiply"></i></li>
                                    </ul>
                                    <div className="bottomnav">
                                        <div className="tap"></div>
                                        <div className="input">
                                            <i className="flaticon-menu"></i>
                                            <i className="flaticon-menu-1"></i>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="popup_view">
                                    <span><strong>popup01</strong><br />200px * 100px</span>
                                </div>
                            </div>
                        </div>
                        <div className="hang_right">
                            <ul className="list_setting">
                                <li className="con_toggle">
                                    <div className="title">
                                        <h5>
                                            팝업스타일
                                            <div className="switch">
                                                <input className="tgl tgl-skewed" id="cb3" type="checkbox" />
                                                <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor="cb3"></label>
                                            </div>

                                        </h5>
                                        <span className="control">
                                            <i className="flaticon-megaphone-1"></i>
                                        </span>
                                    </div>
                                    <div className="content">
                                        <div className="line">
                                            <h6>노출순서</h6>
                                            <div className="txt">
                                                <select className="w50">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="line">
                                            <h6>노출기간</h6>
                                            <div className="txt">
                                                <input type="text" className="w100" placeholder="https://" />
                                                <select className="w10">
                                                    <option>새창으로</option>
                                                    <option>현제창에서</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="line">
                                            <h6>링크연결</h6>
                                            <div className="txt">
                                                <input type="text" className="w100" placeholder="https://" />
                                                <select className="w10">
                                                    <option>새창으로</option>
                                                    <option>현제창에서</option>
                                                </select>
                                            </div>
                                        </div>




                                    </div>
                                </li>
                                <li className="add_popup">
                                    <button><i className=""></i> 팝업생성</button>
                                </li>
                            </ul>

                            <div className="">

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