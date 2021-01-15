import React from 'react';
import { MypageLayout } from '../../layout/MypageLayout';
import { ALLOW_LOGINED } from '../../types/const';
import { auth } from '../../utils/with';
import dayjs from 'dayjs';
import isEmpty from '../../utils/isEmpty';
import { ViewCount } from '../../components/common/ViewCount';
import { SingleSortSelect } from '../../components/common/SortSelect';
import { autoComma } from '../../utils/formatter';
import { SearchBar } from '../../components/searchBar/SearchBar';
import { useMyBoardList } from '../../hook/useMyBoardList';
import { useDateFilter } from '../../hook/useSearch';
import { useSingleSort } from '../../hook/useSort';

interface IProp { }

export const MyPageBoard: React.FC<IProp> = () => {
    const { items, filter, setFilter, sort, setSort, viewCount, setViewCount } = useMyBoardList()

    const { filterStart, filterEnd, hanldeCreateDateChange } = useDateFilter({ filter, setFilter })

    const singoeSort = useSingleSort(sort, setSort);

    const doSearch = (search: string) => {
        const _filter = {
            ...filter
        }

        _filter["title_contains"] = search ? search : undefined;
        setFilter({
            ..._filter,
        })
    }


    return <MypageLayout>
        <div className="in myboard_box">
            <h4>나의 게시글</h4>
            <div className="paper_div">
                <div className="con_top">
                    <h6>상세검색</h6>
<<<<<<< HEAD
                    <SearchBar
                        defaultRange={{
                            from: filterStart,
                            to: filterEnd
                        }}
                        filterStart={filterStart}
                        filterEnd={filterEnd}
                        doSearch={doSearch}
                        onDateChange={hanldeCreateDateChange}
                        SearchSelect={
                            <select className="option">
                                <option>제목</option>
                            </select>}
                    />
=======
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
                                        <img src="/img/svg/search_icon.svg" alt="search icon" />
                                        <button />
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
>>>>>>> origin/design

                    <div className="con_bottom">
                        <div className="alignment">
                            <div className="left_div">총 <strong>{autoComma(items.length)}</strong>개</div>
                            <div className="right_div">
                                <SingleSortSelect {...singoeSort} />
                                <ViewCount value={viewCount} onChange={setViewCount} />
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
                                    {items.map((item, index) =>
                                        <li key={item._id}>
                                            <div className="th02">{item.boardType}</div>
                                            <div className="th03">{index}</div>
                                            <div className="th04"><a href="/">{item.title}<i className="q_ok">{item.questionStatus}</i></a></div>
                                            <div className="th05">{dayjs(item.createdAt).format("YYYY.MM.DD hh:mm")}</div>
                                        </li>
                                    )}
                                    {isEmpty(items) &&
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

export default auth(ALLOW_LOGINED)(MyPageBoard);