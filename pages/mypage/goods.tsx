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
                                <span className="infotxt">총 <strong>22,222</strong>건</span>
                            </div>
                            <div className="right_div">
                                <select className="sel01">
                                    <option>출발일 &uarr;</option>
                                    <option>출발일 &darr;</option>
                                    <option>개시일 &uarr;</option>
                                    <option>개시일 &darr;</option>
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
                                <div className="th02">유형</div>
                                <div className="th03">개시일</div>
                                <div className="th04">상품</div>
                                <div className="th05">출발일</div>
                                <div className="th06">누적</div>
                                <div className="th07">상태</div>
                                <div className="th08">관리</div>
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
                                        <div className="th02"><span className="m_title">유형: </span>여행</div>
                                        <div className="th03"><span className="m_title">개시일: </span>2020.03.03</div>
                                        <div className="th04">
                                            <div className="img" style={{ backgroundImage: 'url(/img/store_01.jpg)' }} ></div>
                                            <div className="info">
                                                <span className="ct">문화</span><span className="g-number">상품번호: PK-034982</span>
                                                <strong className="title">떠나요~거제도~!!!!!!!!!!!!!!!!</strong>
                                            </div>
                                        </div>
                                        <div className="th05"><span className="m_title">출발일: </span>2020.02.02</div>
                                        <div className="th06">
                                            {/* 단위 : 명 */}
                                            <span className="m_title">누적: </span>
                                            <span className="people">성인 2</span>
                                            <span className="m_title"> / </span>
                                            <span className="people">소아 0</span>
                                            <span className="m_title"> / </span>
                                            <span className="people">유아 4</span>
                                        </div>
                                        <div className="th07">
                                            {/* 단위 : 건 */}
                                            <span className="m_title">상태: </span>
                                            <span className="present">예약 0</span>
                                            <span className="m_title"> / </span>
                                            <span className="present">취소 0</span>
                                            <span className="m_title"> / </span>
                                            <span className="present">환불 0</span>
                                        </div>
                                        <div className="th08">
                                            <i className="btn">상품수정</i>{/*글수정으로 가기 */}
                                            <i className="btn">예약자명단</i>{/* POPUP */}
                                            <i className="btn">예약등록</i>{/* POPUP */}
                                            <i className="btn">정산신청</i>{/* POPUP */}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="th01">
                                            <span className="checkbox check2">
                                                <input type="checkbox" name="agree" id="agree1" title="개별선택" />
                                                <label htmlFor="agree1" />
                                            </span>
                                        </div>
                                        <div className="th02"><span className="m_title">유형: </span>여행</div>
                                        <div className="th03"><span className="m_title">개시일: </span>2020.03.03</div>
                                        <div className="th04">
                                            <div className="img" style={{ backgroundImage: 'url(/img/store_01.jpg)' }} ></div>
                                            <div className="info">
                                                <span className="ct">문화</span><span className="g-number">상품번호: PK-034982</span>
                                                <strong className="title">떠나요~거제도~!!!!!!!!!!!!!!!!</strong>
                                            </div>
                                        </div>
                                        <div className="th05"><span className="m_title">출발일: </span>2020.02.02</div>
                                        <div className="th06">
                                            {/* 단위 : 명 */}
                                            <span className="m_title">누적: </span>
                                            <span className="people">성인 2</span>
                                            <span className="m_title"> / </span>
                                            <span className="people">소아 0</span>
                                            <span className="m_title"> / </span>
                                            <span className="people">유아 4</span>
                                        </div>
                                        <div className="th07">
                                            {/* 단위 : 건 */}
                                            <span className="m_title">상태: </span>
                                            <span className="present">예약 0</span>
                                            <span className="m_title"> / </span>
                                            <span className="present">취소 0</span>
                                            <span className="m_title"> / </span>
                                            <span className="present">환불 0</span>
                                        </div>
                                        <div className="th08">
                                            <i className="btn">상품수정</i>{/*글수정으로 가기 */}
                                            <i className="btn">예약자명단</i>{/* POPUP */}
                                            <i className="btn">예약등록</i>{/* POPUP */}
                                            <i className="btn">정산신청</i>{/* POPUP */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* <Paginater pageNumber={10} totalPageCount={20} /> */}
                        </div>
                        <div className="boardNavigation">
                            <div className="float_left">

                            </div>
                            <div className="float_right">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MypageLayout>
};

export default auth(MyGoods)(ONLY_LOGINED);
