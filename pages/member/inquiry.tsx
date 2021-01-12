import React from 'react';
import Link from "next/link";

interface IProp { }

export const QnaTable: React.FC<IProp> = () => {
    return <div>
        <div className="top_visual">
            <div
                className="sub_header sub_bg"
                style={{ backgroundImage: `url(/img/pr_img_06.jpg)` }}
            >
                <div className="w1200">
                    <h2 className="title">고객문의</h2>
                    {/*<p className="text">지금 여행을 떠나세요~!~~!!!!!</p>*/}
                </div>
            </div>
            <div className="header_nav">
                <ul>
                    <li className="home">
                        <a href="../main/main.html"></a>
                    </li>
                    <li className="homedeps1">Member</li>
                    <li className="homedeps2">
                        <Link href="/member/inquiry"><a>고객문의</a></Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="inquiry_box w1200">
            <ul className="subtop_nav">
                <li><Link href="/member/notice"><a>공지사항</a></Link></li>
                <li><Link href="/member/qna"><a>자주하는 질문</a></Link></li>
                <li className="on"><Link href="/member/inquiry"><a>고객문의</a></Link></li>
            </ul>
            <div>

                <div className="alignment">
                    <div className="left_div">
                        <ul className="board_option">
                            <li className="on"><a href="/">전체<strong>46</strong></a></li>
                            <li><a href="/">미답변<strong>23</strong></a></li>
                            <li><a href="/">답변완료<strong>23</strong></a></li>
                        </ul>
                    </div>
                    <div className="right_div">
                        <select className="sel01">
                            <option value="createdAt_desc">최신↑</option>
                            <option value="createdAt_asc">최신↓</option>
                            <option value="viewCount_desc">조회수</option>
                        </select>
                        <select className="sel02">
                            <option value="10">10개 보기</option>
                            <option value="50">50개 보기</option>
                            <option value="100">100개 보기</option>
                        </select>
                    </div>
                </div>

                <div className="board_list st01">
                    <div className="tbody">
                        <ul>
                            <li>
                                <div className="td01">221</div>
                                <div className="td02"><Link href="/"><a>PINK-99930</a></Link></div>
                                <div className="td03">
                                    문의합니다
                                    <object className="new" type="image/svg+xml" data="../img/svg/new.svg">new</object>
                                    <i className="q_no">미답변</i>
                                </div>
                                <div className="td04">홀리홀리</div>
                                <div className="td05">2020.02.02 11:00</div>
                            </li>
                            <li>
                                <div className="td01">221</div>
                                <div className="td02"><Link href="/"><a>PINK-99930</a></Link></div>
                                <div className="td03">문의합니다 :)<i className="q_no">미답변</i></div>
                                <div className="td04">홀리홀리</div>
                                <div className="td05">2020.02.02 11:00</div>
                            </li>
                            <li>
                                <div className="td01">221</div>
                                <div className="td02"><Link href="/"><a>PINK-99930</a></Link></div>
                                <div className="td03">문의합니다 :)<i className="q_ok">답변완료</i></div>
                                <div className="td04">홀리홀리</div>
                                <div className="td05">2020.02.02 11:00</div>
                            </li>
                            <li>
                                <div className="td01">221</div>
                                <div className="td02">-</div>
                                <div className="td03">문의합니다 :)</div>
                                <div className="td04">홀리홀리</div>
                                <div className="td05">2020.02.02 11:00</div>
                            </li>
                        </ul>

                    </div>

                </div>
                <div className="pagenate">
                    <div className="page">
                        <a href="/kor/view.do?no=170" className="page_btn first">처음</a>
                        <a href="/kor/view.do?no=170" className="page_btn prev">이전</a>
                        <a href="#none" className="on">1</a>
                        <a href="/kor/view.do?no=170" className="off">2</a>
                        <a href="/kor/view.do?no=170" className="off">3</a>
                        <a href="/kor/view.do?no=170" className="off">4</a>
                        <a href="/kor/view.do?no=170" className="off">5</a>
                        <a href="/kor/view.do?no=170" className="off">6</a>
                        <a href="/kor/view.do?no=170" className="off">7</a>
                        <a href="/kor/view.do?no=170" className="off">8</a>
                        <a href="/kor/view.do?no=170" className="off">9</a>
                        <a href="/kor/view.do?no=170" className="off">10</a>
                        <a href="/kor/view.do?no=170" className="page_btn next">다음</a>
                        <a href="/kor/view.do?no=170" className="page_btn end">마지막</a>
                    </div>
                </div>
                <div className="tl list_bottom">
                    <div className="btn_footer">
                        <button type="submit" className="btn medium pointcolor">글쓰기</button>
                    </div>
                    <div className="search_mini">
                        <div className="in">
                            <input type="text" placeholder="검색 내용을 입력해주세요." />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.94 31.44">
                                <path className="cls-5" d="M313.17,433.49l-4.86-5.31a14.48,14.48,0,0,0-1-19.41,14.55,14.55,0,0,0-10.24-4.21,14.47,14.47,0,0,0,0,28.94,14.17,14.17,0,0,0,1.72-.1,1.5,1.5,0,1,0-.35-3,11.47,11.47,0,1,1-1.38-22.86h0a11.48,11.48,0,0,1,8.14,19.56,1.49,1.49,0,0,0,0,2.12.91.91,0,0,0,.13.08,1.2,1.2,0,0,0,.15.24l5.45,5.95a1.46,1.46,0,0,0,1.1.49,1.53,1.53,0,0,0,1-.39A1.5,1.5,0,0,0,313.17,433.49Z" transform="translate(-282.62 -404.56)"></path>
                            </svg>
                        </div>
                    </div>

                </div>




            </div>
        </div>
    </div >;
};

export default QnaTable;