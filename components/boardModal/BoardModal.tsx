import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useMyBoardList } from '../../hook/useMyBoardList';
import isEmpty from '../../utils/isEmpty';
import { closeModal } from '../../utils/popUp';
import { Paginater } from '../common/Paginator';
import { UserModal } from '../userModal/UserModal';

interface IProp {
    email: string;
}

export const BoardModal: React.FC<IProp> = ({ email }) => {

    const { items: boards, pageInfo, setPage } = useMyBoardList({}, {
        overrideVariables: {
            email
        }
    })

    if (!email) return null;
    return <div id="BoardModal" className="popup_bg_full">
        <div className="in_txt master_popup">
            <a className="close_icon" onClick={closeModal("#BoardModal")}>
                <i className="flaticon-multiply"></i>
            </a>
            <div className="page">
                <h3><strong>김홍홍</strong>님이 작성한 글 </h3>
                {/* 작성한글 */}
                <div className="info_page">
                    <div className="alignment">
                        <div className="left_div"><span className="infotxt">총 <strong>{pageInfo.totalCount}</strong>건</span></div>
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
                            <div className="tt01 checkbox">
                                <input type="checkbox" name="agree" id="agree-popup-0" title="모두선택" />
                                <label htmlFor="agree-popup-0" />
                            </div>
                            <div className="tt02">게시판</div>
                            <div className="tt03">번호</div>
                            <div className="tt04">제목</div>
                            <div className="tt05">날짜</div>
                        </div>
                        <div className="tbody">
                            <ul>
                                {boards.map(board =>
                                    <li key={board._id}>
                                        <div className="tt01 checkbox">
                                            <i className="checkbox">
                                                <input type="checkbox" name="agree" id="agree0" title="전체선택" />
                                                <label htmlFor="agree0" />
                                            </i>
                                        </div>
                                        <div className="tt02"><i className="m_title">게시판:</i>{board.boardType}</div>
                                        <div className="tt03"><i className="m_title">조회:</i>{board.viewCount}</div>
                                        <div className="tt04"><a >{board.title}<i className="q_ok">{board.questionStatus}</i></a></div>
                                        <div className="tt05">{dayjs(board.createdAt).format("YYYY.MM.DD hh:mm")}</div>
                                    </li>
                                )}
                                {isEmpty(boards) &&
                                    <li className="no_data">
                                        {/*게시글이 없을때*/}
                                        <i className="jandaicon-info3" />
                                        <span>게시글이 없습니다.</span>
                                    </li>
                                }
                            </ul>

                        </div>
                        <Paginater setPage={setPage} pageInfo={pageInfo} />
                    </div>

                    <div className="fin ifMobile">
                        <div className="float_left">
                            <button type="submit" className="btn medium">모두선택</button>
                        </div>
                        <div className="float_right">
                            <button type="submit" className="btn medium mr5">삭제</button>
                            <button type="submit" className="btn medium mr5">비공개전환</button>
                            <button type="submit" className="btn medium">공개전환</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
