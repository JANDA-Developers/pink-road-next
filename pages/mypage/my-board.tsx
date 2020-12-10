import React, { useContext, useState } from 'react';
import { MypageLayout } from '../../layout/MypageLayout';
import { ONLY_LOGINED } from '../../types/const';
import { AppContext } from '../_app';
import { auth } from '../../utils/with';
import { boardFindByEmail_BoardFindByEmail_data } from '../../types/api';
import dayjs from 'dayjs';
import isEmpty from '../../utils/isEmpty';
import { ViewCount } from '../../components/common/ViewCount';
import { SortSelect } from '../../components/common/SortSelect';
import { autoComma } from '../../utils/formatter';
import { changeVal } from '../../utils/eventValueExtracter';
import { generateClientPaging } from '../../utils/generateClientPaging';
import { IuseBoardFindByEmail, useBoardFindByEmail } from '../../hook/useBoardFindByEmail';

interface IProp {
    boardWrapContext: IuseBoardFindByEmail;
}

export const MyPageBoard: React.FC<IProp> = ({ boardWrapContext }) => {
    const { boards, loading, setFilter, setSort } = boardWrapContext;
    const [view, setView] = useState(4);
    const paging = generateClientPaging(boards || [], view);

    const handleThisMonth = () => {

    }

    const handleLastMonth = () => {

    }

    const handleHalfYesr = () => {

    }

    const handleYear = () => {

    }

    const handleSortChange = () => {

    }

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
                                    <li onClick={handleThisMonth} className="on">
                                        <span>이번달</span>
                                    </li>
                                    <li onClick={handleLastMonth} className="on">
                                        <span>저번달</span>
                                    </li>
                                    <li onClick={handleHalfYesr}>
                                        <span>6개월</span>
                                    </li>
                                    <li onClick={handleYear}>
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
                            <div className="left_div">총 <strong>{autoComma(boards.length)}</strong>개</div>
                            <div className="right_div">
                                <SortSelect onChange={handleSortChange} sort={ } />
                                <ViewCount value={view} onChange={setView} />
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
                                    {boards.map((board, index) =>
                                        <li key={board._id}>
                                            <div className="th02">{board.boardType}</div>
                                            <div className="th03">{index}</div>
                                            <div className="th04"><a href="/">{board.title}<i className="q_ok">{board.questionStatus}</i></a></div>
                                            <div className="th05">{dayjs(board.createdAt).format("YYYY.MM.DD hh:mm")}</div>
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
                            {/* <Paginater pageInfo={pageInfo} /> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </MypageLayout>
};


export const MypageBoardWrap = () => {
    const { myProfile } = useContext(AppContext)
    const { email } = myProfile!;
    const boardFindByEmailHook = useBoardFindByEmail(email);
    const mypageBoardWrapContext = boardFindByEmailHook;

    return <MyPageBoard boardWrapContext={mypageBoardWrapContext} />
}

export default auth(MypageBoardWrap)(ONLY_LOGINED);