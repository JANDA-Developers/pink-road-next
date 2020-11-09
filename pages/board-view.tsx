import React from 'react';
import { CommentWrite } from 'components/comment/CommentWrite';

interface IProp { }

export const BoardView: React.FC<IProp> = () => {
    return <div className="board_box">
        <div className="w1200">
            <div className="xe_content">
                <div className="xe_top">
                    <div className="h3_top">
                        <span className="category ct_02">안내</span>
                    </div>
                    <h3>이번주 행사 안내드립니다.</h3>
                    <div className="footer_txt">
                        <span>
                            작성자<strong> 관리자</strong>
                        </span>
                        <span>2020.02.02 11:00</span>
                        <span>
                            댓글 <strong>0</strong>건
                        </span>
                        <span>
                            조회수 <strong>3423</strong>회
                        </span>
                    </div>
                    {/*<div className="menu">
    <span><i className="flaticon-more-1"></i></span>
    <ul className="option_box">
        <li><span onClick="location.href = '';">공유하기</span></li>
        <li><span onClick="location.href = '';">비공개 전환하기</span></li>
    </ul>
      </div>*/}
                </div>
                <div className="in_box">
                    <p>
                        안녕하세요~ 핑크로더 여러분~~~!!!!
                        <br />
                        이번주에 열리는 "모두함께해요!!"행사를 사전에 알려드립니다.
                        <br />
                        <br />
                        <img src="/img/detail_img01.jpg" alt="??" />
                    </p>
                    <div className="download_box">
                        <ul>
                            <li>
                                <a href="/">
                                    <i className="flaticon-folder-15" />
                                        다운_받아_가세요.jpg
                                    <i className="end jandaicon-check" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="comment_box">
                    <div className="list_comment">
                        <h3>
                            댓글 <strong>4</strong>{" "}
                        </h3>
                        <ul>

                        </ul>
                        <div className="boardNavigation tc">
                            <div className="pagenate_mini">
                                <div className="page_btn first">
                                    <i className="jandaicon-arr4-left" />
                                </div>
                                <div className="count">
                                    <strong>1</strong> / 10
                </div>
                                <div className="page_btn end">
                                    <i className="jandaicon-arr4-right" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <CommentWrite user={{}} onSubmit={() => { }} />
                </div>
                <div className="boardNavigation">
                    <div className="float_left">
                        <button type="button" className="btn medium">
                            목록
            </button>
                    </div>
                    <div className="float_right">
                        <button type="submit" className="btn medium pointcolor">
                            수정
            </button>
                        <button type="submit" className="btn medium">
                            삭제
            </button>
                    </div>
                </div>
                <div className="board_list_mini">
                    <ul>
                        <li className="first">
                            <span>
                                <i className="flaticon-cloud-computing" />
                                    이전글
                                <i className="flaticon-command" />
                            </span>
                            <div>행사를 합니다~!!!!!</div>
                        </li>
                        <li>
                            <span>
                                <i className="flaticon-cloud-computing" />
                다음글
                                <i className="flaticon-command" />
                            </span>
                            <div>입금자 확인중입니다.</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>;
};

export default BoardView;
