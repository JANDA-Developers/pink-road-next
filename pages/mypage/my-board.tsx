import React from 'react';
import { MypageLayout } from '../../layout/MypageLayout';
import { Paginater } from 'components/common/Paginator';

interface IProp { }

export const MyPageBoard: React.FC<IProp> = () => {
    return <MypageLayout>
        <div className="in myboard_box">
            <h4>나의 게시글</h4>
            <div className="paper_div">
                <div className="con_top">
                    <h6>상세검색</h6>
                    <div className="search_box">
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
                                    <option>제목</option>
                                    <option>게시판</option>
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
                        <div className="alignment">
                            <div className="left_div">총 <strong>22,222</strong>개</div>
                            <div className="right_div">
                                <select className="sel01">
                                    <option>작성일 &uarr;</option>
                                    <option>작성일 &darr;</option>
                                    <option>조회수 &uarr;</option>
                                    <option>조회수 &darr;</option>
                                </select>
                                <select className="sel02">
                                    <option>10개 보기</option>
                                    <option>50개 보기</option>
                                    <option>100개 보기</option>
                                </select>
                            </div>
                        </div>


                        <div className="board_list_mini ln05">
                            <div className="thead">
                                <div className="th02">게시판</div>
                                <div className="th03">번호</div>
                                <div className="th04">제목</div>
                                <div className="th05">날짜</div>
                            </div>
                            <div className="tbody">
                                <ul>
                                    <li>
                                        <div className="th02">문의하기</div>
                                        <div className="th03">23</div>
                                        <div className="th04"><a href="/">궁금한게 있어요 :) <i className="q_ok">답변완료</i></a></div>
                                        <div className="th05">2020.02.02 11:00</div>
                                    </li>
                                    <li>
                                        <div className="th02">문의하기</div>
                                        <div className="th03">23</div>
                                        <div className="th04"><a href="/">궁금한게 있어요 :) <i className="q_no">답변중</i></a></div>
                                        <div className="th05">2020.02.02 11:00</div>
                                    </li>
                                    <li className="no_data">
                                        {/*게시글이 없을때*/}
                                        <i className="jandaicon-info3" />
                                        <span>게시글이 없습니다.</span>
                                    </li>
                                </ul>

                            </div>
                            {/* <Paginater pageInfo={pageInfo} /> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </MypageLayout>
};

export default MyPageBoard;