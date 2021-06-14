import React, { useContext } from "react";
import { MypageLayout } from "../../../layout/MypageLayout";
import { ALLOW_LOGINED } from "../../../types/const";
import { auth } from "../../../utils/with";
import dayjs from "dayjs";
import isEmpty from "../../../utils/isEmpty";
import { ViewCount } from "../../../components/common/ViewCount";
import { SingleSortSelect } from "../../../components/common/SortSelect";
import { autoComma } from "../../../utils/formatter";
import { SearchBar } from "../../../components/searchBar/SearchBar";
import { useDateFilter } from "../../../hook/useSearch";
import { useSingleSort } from "../../../hook/useSort";
import { Change } from "../../../components/loadingList/LoadingList";
import {
    questionList_QuestionList_data,
    QuestionStatus,
} from "../../../types/api";
import { useRouter } from "next/router";
import { isOpenKr } from "../../../utils/enumToKr";
import { Paginater } from "../../../components/common/Paginator";
import { useQuestionList } from "../../../hook/useQuestion";
import { AppContext } from "../../_app";
import { MyBoardViewBoardNav } from "../../../components/topNav/MasterTopNav";

interface IProp {}

export const MypageQuestion: React.FC<IProp> = () => {
    const { myProfile } = useContext(AppContext);
    const rotuer = useRouter();
    const {
        setPage,
        pageInfo,
        items,
        filter,
        setFilter,
        sort,
        setSort,
        viewCount,
        setViewCount,
        setUniqFilter,
        getLoading,
    } = useQuestionList({
        fixingFilter: {
            OR: [
                {
                    authorEmail_eq: myProfile.email,
                },
            ],
        },
    });
    const { filterStart, filterEnd, hanldeCreateDateChange } = useDateFilter({
        filter,
        setFilter,
    });

    const singoeSort = useSingleSort(sort, setSort);

    const doSearch = (search: string) => {
        setUniqFilter("title_contains", ["title_contains"], search);
    };

    const handleClickBoard = (item: questionList_QuestionList_data) => () => {
        rotuer.push(`/member/question/view/${item._id}`);
    };

    const checkOnStatus = (status?: QuestionStatus) =>
        filter.status_eq === status ? "on" : "";

    const handleSetFilter = (status?: QuestionStatus) => () => {
        filter.status_eq = status;
        setFilter({ ...filter });
    };

    return (
        <MypageLayout>
            <div className="in myboard__box">
                <h4>나의 게시글</h4>
                <div className="mypage__tap">
                    <MyBoardViewBoardNav />
                </div>
                <div className="paper_div">
                    <div className="con_top">
                        <h6>상세검색</h6>
                        {/* //alt="search icon"  */}
                        <SearchBar
                            defaultRange={{
                                from: filterStart,
                                to: filterEnd,
                            }}
                            filterStart={filterStart}
                            filterEnd={filterEnd}
                            doSearch={doSearch}
                            onDateChange={hanldeCreateDateChange}
                            SearchSelect={
                                <select className="option">
                                    <option>제목</option>
                                </select>
                            }
                        />
                        <Change change={!getLoading}>
                            <div className="con_bottom">
                                <div className="alignment">
                                    <div className="left_div">
                                        <span className="mr10">
                                            총{" "}
                                            <strong>
                                                {autoComma(pageInfo.totalCount)}
                                            </strong>
                                            개
                                        </span>
                                        <ul className="board_option">
                                            <li
                                                className={checkOnStatus(
                                                    undefined
                                                )}
                                                onClick={handleSetFilter(
                                                    undefined
                                                )}
                                            >
                                                <a>전체</a>
                                            </li>
                                            <li
                                                className={checkOnStatus(
                                                    QuestionStatus.COMPLETE
                                                )}
                                                onClick={handleSetFilter(
                                                    QuestionStatus.COMPLETE
                                                )}
                                            >
                                                <a>답변</a>
                                            </li>
                                            <li
                                                className={checkOnStatus(
                                                    QuestionStatus.READY
                                                )}
                                                onClick={handleSetFilter(
                                                    QuestionStatus.READY
                                                )}
                                            >
                                                <a>미답변</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="right_div">
                                        <SingleSortSelect {...singoeSort} />
                                        <ViewCount
                                            value={viewCount}
                                            onChange={setViewCount}
                                        />
                                    </div>
                                </div>
                                <div className="board_list_mini ln05">
                                    <div className="thead">
                                        <div className="th04">제목</div>
                                        <div className="th05">생성일</div>
                                    </div>
                                    <div className="tbody">
                                        <ul>
                                            {items.map((item, index) => (
                                                <li
                                                    onClick={handleClickBoard(
                                                        item
                                                    )}
                                                    key={item._id}
                                                >
                                                    <div className="th04">
                                                        <a>
                                                            {item.title}
                                                            {item.status && (
                                                                <i
                                                                    className={
                                                                        item.status ===
                                                                        QuestionStatus.READY
                                                                            ? "q_no"
                                                                            : "q_ok"
                                                                    }
                                                                >
                                                                    {
                                                                        item.status
                                                                    }
                                                                </i>
                                                            )}
                                                        </a>
                                                    </div>
                                                    <div className="th05">
                                                        {dayjs(
                                                            item.createdAt
                                                        ).format(
                                                            "YYYY.MM.DD hh:mm"
                                                        )}
                                                    </div>
                                                </li>
                                            ))}
                                            {isEmpty(items) && (
                                                <li className="no_data">
                                                    {/*게시글이 없을때*/}
                                                    <i className="jandaicon-info3" />
                                                    <span>
                                                        게시글이 없습니다.
                                                    </span>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                    <Paginater
                                        setPage={setPage}
                                        pageInfo={pageInfo}
                                    />
                                </div>
                            </div>
                        </Change>
                    </div>
                </div>
            </div>
        </MypageLayout>
    );
};

export default auth(ALLOW_LOGINED)(MypageQuestion);
