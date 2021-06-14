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
import { isOpenKr } from "../../../utils/enumToKr";
import { Paginater } from "../../../components/common/Paginator";
import { useProductReviewList } from "../../../hook/useReview";
import {
    IModalInfo,
    ReviewModal,
} from "../../../components/reviewModal/ReviewModal";
import { useModal } from "../../../hook/useModal";
import { AppContext } from "../../_app";
import Link from "next/link";
import { MyBoardViewBoardNav } from "../../../components/topNav/MasterTopNav";

interface IProp {}

export const MyPageBoardReviews: React.FC<IProp> = () => {
    const { myProfile } = useContext(AppContext);
    const {
        items,
        pageInfo,
        filter,
        setFilter,
        sort,
        setSort,
        viewCount,
        setViewCount,
        setUniqFilter,
        getLoading,
        setPage,
        page,
    } = useProductReviewList({
        fixingFilter: {
            OR: [
                {
                    productAuthorId_eq: myProfile._id,
                },
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

    const modalHook = useModal<IModalInfo>();

    const singoeSort = useSingleSort(sort, setSort);

    const doSearch = (search: string) => {
        setUniqFilter("title_contains", ["title_contains"], search);
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
                                        <span className="infotxt">
                                            총
                                            <strong>
                                                {autoComma(pageInfo.totalCount)}
                                            </strong>
                                            개
                                        </span>
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
                                                    onClick={() => {
                                                        modalHook.openModal({
                                                            reviewId: item._id,
                                                        });
                                                    }}
                                                    key={item._id}
                                                >
                                                    <div className="th04">
                                                        <a>{item.title}</a>
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
            <ReviewModal {...modalHook} />
        </MypageLayout>
    );
};

export default auth(ALLOW_LOGINED)(MyPageBoardReviews);
