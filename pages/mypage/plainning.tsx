import { MypageLayout } from 'layout/MypageLayout';
import { Paginater } from 'components/common/Paginator';
import React from 'react';

interface IProp { }

export const MyPlanning: React.FC<IProp> = () => {
    return <MypageLayout>
        <div className="in myplanning_box">
            <h4>기획관리</h4>
            <div className="paper_div">
                <div className="con_top">
                    <h6>상세검색</h6>
                    <div className="search_box">
                        <div className="jul2">
                            <div className="title">범위</div>
                            <div className="text">
                                <span className="check on">제목</span>
                                <span className="check">내용</span>
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
                                    <span className="calendar">
                                        <img src="/img/svg/CalendarIcon.svg" className="svg_calendar" />
                                        <button />
                                    </span>
                                </div>
                                ~
                                 <div className="input_box">
                                    <input type="text" className="day w100" />
                                    <span className="calendar">
                                        <img src="/img/svg/CalendarIcon.svg" className="svg_calendar" />
                                        <button />
                                    </span>
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

                    <div className="con_bottom">
                        <div className="con_box">
                            <div className="alignment">
                                <div className="left_div"><span className="infotxt">총 <strong>22,222</strong>건</span></div>
                                <div className="right_div">
                                    <ul className="board_option">
                                        <li><a href="/">모두선택</a></li>
                                        <li><a href="/">모두선택 해제</a></li>
                                        <li><a href="/">엑셀파일</a></li>
                                    </ul>
                                    <select className="sel01">
                                        <option>출발일 &uarr;</option>
                                        <option>출발일 &darr;</option>
                                        <option>등록일 &uarr;</option>
                                        <option>등록일 &darr;</option>
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
                                        <span className="checkbox">
                                            <input type="checkbox" name="agree" id="agree0" title="전체선택" />
                                            <label htmlFor="agree0" />
                                        </span>
                                    </div>
                                    <div className="th02">상품코드</div>
                                    <div className="th03">상품명</div>
                                    <div className="th04">출발일</div>
                                    <div className="th05">금액</div>
                                    <div className="th06">인원수</div>
                                    <div className="th07">상태</div>
                                    <div className="th08">상세보기</div>
                                </div>
                                <div className="tbody">
                                    <ul>
                                        <li>
                                            <div className="th01">
                                                <span className="checkbox">
                                                    <input type="checkbox" name="agree" id="agree1" title="개별선택" />
                                                    <label htmlFor="agree1" />
                                                </span>
                                            </div>
                                            <div className="th02">PINK-01230</div>
                                            <div className="th03">제주도로 떠나요~ 제주도로 떠나요~제주도로 떠나요~</div>
                                            <div className="th04">2020.02.02</div>
                                            <div className="th05">
                                                <span className="people">성인 20,000</span>
                                                <span className="people">소아 1,000,000</span>
                                                <span className="people">유아 0</span>
                                            </div>
                                            <div className="th06">22</div>
                                            <div className="th07"><strong className="no">기획반려</strong></div>
                                            <div className="th08"><i className="btn">수정하기</i></div>
                                        </li>
                                        <li>
                                            <div className="th01">
                                                <span className="checkbox">
                                                    <input type="checkbox" name="agree" id="agree1" title="개별선택" />
                                                    <label htmlFor="agree1" />
                                                </span>
                                            </div>
                                            <div className="th02">PINK-01230</div>
                                            <div className="th03">제주도로 떠나요~ 제주도로 떠나요~제주도로 떠나요~</div>
                                            <div className="th04">2020.02.02</div>
                                            <div className="th05">
                                                <span className="people">성인 20,000</span>
                                                <span className="people">소아 1,000,000</span>
                                                <span className="people">유아 0</span>
                                            </div>
                                            <div className="th06">22</div>
                                            <div className="th07"><strong className="ok">기획요청</strong></div>
                                            <div className="th08"><i className="btn">수정하기</i></div>
                                        </li>
                                    </ul>
                                </div>
                                <Paginater pageNumber={10} totalPageCount={20} />
                            </div>

                            <div className="boardNavigation">
                                <div className="float_left">
                                    <div className="pagenate_mini">
                                        <a href="" className="mini_btn small">기획서 작성하기</a>
                                    </div>
                                </div>
                                <div className="float_right">
                                    <a href="" className="btn">삭제하기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MypageLayout>
};

export default MyPlanning;