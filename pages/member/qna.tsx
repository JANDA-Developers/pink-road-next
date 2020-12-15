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
                    <h2 className="title">자주하는 질문</h2>
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
                        <Link href="/member/qna"><a>자주하는 질문</a></Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="qna_box w1200">
            <ul className="subtop_nav">
                <li><Link href="/member/notice"><a>공지사항</a></Link></li>
                <li className="on"><Link href="/member/qna"><a>자주하는 질문</a></Link></li>
                <li><Link href="/member/inquiry"><a>고객문의</a></Link></li>
            </ul>
            <div className="board_qna">

                <div className="alignment">
                    <div className="left_div">
                        <ul className="board_option">
                            <li className="on"><a href="/">전체<strong>46</strong></a></li>
                            <li><a href="/">여행<strong>23</strong></a></li>
                            <li><a href="/">체험<strong>23</strong></a></li>
                            <li><a href="/">회원<strong>23</strong></a></li>
                        </ul>
                    </div>
                    <div className="right_div">
                    </div>
                </div>

                <div className="dl">
                    <div className="dt"><span><i className="Q"></i>여행</span>문의는 어디서 하죠? <i className="jandaicon-arr4-bottom"></i></div>
                    <div className="dd panel-collapse collapse in">
                        <div className="form">
                            <i className="A"></i>
                            <p>문의는 고객문의 게시판에서 해주세요.문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요</p>
                        </div>
                    </div>
                </div>

                <div className="dl active">{/* active 추가시 열림 이벤트 */}
                    <div className="dt"><span><i className="Q"></i>여행</span>문의는 어디서 하죠? <i className="jandaicon-arr4-bottom"></i></div>
                    <div className="dd panel-collapse collapse in">
                        <div className="form">
                            <i className="A"></i>
                            <p>문의는 고객문의 게시판에서 해주세요.문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요</p>
                        </div>
                    </div>
                </div>





            </div>

            <div className="fin mt30 mb100">
                <div className="float_left">
                    <button type="submit" className="btn medium">새글쓰기</button>
                </div>
                <div className="float_right">
                    <button type="submit" className="btn medium">새글쓰기</button>
                </div>
            </div>


        </div>
    </div >;
};

export default QnaTable;