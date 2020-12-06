import React from 'react';
import CalendarIcon from 'components/common/icon/CalendarIcon';
import { MypageLayout } from 'layout/MypageLayout';
import { auth } from "../../utils/with";
import { ONLY_LOGINED } from '../../types/const';

interface IProp { }

export const MyGoods: React.FC<IProp> = () => {
    return <MypageLayout>
        <div className="in goods_div">
            <h4>상품관리</h4>
            <div className="paper_div">
                <div className="con_top">
                    <h6>상세검색</h6>
                    <div className="search_box">
                        <div className="jul2">
                            <div className="title">상태</div>
                            <div className="text">
                                <span className="check on">전체</span>
                                <span className="check">예약완료</span>
                                <span className="check">사용완료</span>
                            </div>
                        </div>
                        <div className="jul4">
                            <div className="title">날짜</div>
                            <div className="text">
                                <ul className="day_ul">
                                    <li className="on">
                                        <span>이번달</span>
                                    </li>
                                    <li className="on">
                                        <span>저번달</span>
                                    </li>
                                    <li>
                                        <span>6개월</span>
                                    </li>
                                    <li>
                                        <span>1년</span>
                                    </li>
                                </ul>
                                <div className="input_box">
                                    <input type="text" className="day w100" />
                                    <CalendarIcon />
                                </div>
                                ~
                                 <div className="input_box">
                                    <input type="text" className="day w100" />
                                    <CalendarIcon />
                                </div>
                            </div>
                        </div>
                        <div className="jul1">
                            <div>
                                <select className="option">
                                    <option>상품코드</option>
                                    <option>상품명</option>
                                    <option>예약자</option>
                                </select>
                                <div className="search_div">
                                    <input className="" type="text" placeholder="검색 내용을 입력해주세요." />
                                    <div className="svg_img">
                                        <img src="/img/svg/search_icon.svg" alt="검색아이콘" />
                                        <button />
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="con_bottom">

                    <div className="con_box">
                        <div className="alignment">
                            <div className="left_div">
                                총 <strong>22,222</strong>개
                            </div>
                            <div className="right_div">
                                <select className="sel01">
                                    <option>추천수</option>
                                    <option>예약수</option>
                                    <option>조회수</option>
                                </select>
                                <select className="sel02">
                                    <option>10개 보기</option>
                                    <option>50개 보기</option>
                                    <option>100개 보기</option>
                                </select>
                            </div>
                        </div>
                        <div className="fuction_list_mini ln08">
                            <div className="thead">
                                <div className="th01">
                                    <span className="checkbox check2">
                                        <input type="checkbox" name="agree" id="agree0" title="전체선택" />
                                        <label htmlFor="agree0" />
                                    </span>
                                </div>
                                <div className="th02">상품코드</div>
                                <div className="th03">상품명</div>
                                <div className="th04">예약자/연락처</div>
                                <div className="th05">예약날짜</div>
                                <div className="th06">예약금</div>
                                <div className="th07">상태</div>
                                <div className="th08">상세보기</div>
                            </div>
                            <div className="tbody">
                                <ul>
                                    <li>
                                        <div className="th01">
                                            <span className="checkbox check2">
                                                <input type="checkbox" name="agree" id="agree1" title="개별선택" />
                                                <label htmlFor="agree1" />
                                            </span>
                                        </div>
                                        <div className="th02">GUIDE-01230</div>
                                        <div className="th03">제주도로 떠나요~ </div>
                                        <div className="th04">홍나리<br />010-0100-0000</div>
                                        <div className="th05">2020.02.02</div>
                                        <div className="th06">50,000</div>
                                        <div className="th07"><strong className="ok">예약완료</strong></div>
                                        <div className="th08"><i className="btn">상세보기</i></div>
                                    </li>
                                    <li>
                                        <div className="th01">
                                            <span className="checkbox check2">
                                                <input type="checkbox" name="agree" id="agree2" title="개별선택" />
                                                <label htmlFor="agree2" />
                                            </span>
                                        </div>
                                        <div className="th02">GUIDE-01230</div>
                                        <div className="th03">제주도로 떠나요~ </div>
                                        <div className="th04">홍나리<br />010-0100-0000</div>
                                        <div className="th05">2020.02.02</div>
                                        <div className="th06">50,000</div>
                                        <div className="th07"><strong className="no">예약취소</strong></div>
                                        <div className="th08"><i className="btn">상세보기</i></div>
                                    </li>
                                </ul>
                            </div>
                            <div className="boardNavigation">
                                <div className="float_left">
                                    <div className="pagenate_mini">
                                        <div className="page_btn first"><i className="jandaicon-arr4-left"></i></div>
                                        <div className="count"><strong>1</strong> / 10</div>
                                        <div className="page_btn end"><i className="jandaicon-arr4-right"></i></div>
                                    </div>
                                </div>
                                <div className="float_right">
                                    <a href="" className="mini_btn small">예약관리시스템 바로가기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MypageLayout>
};

export default auth(MyGoods)(ONLY_LOGINED);
