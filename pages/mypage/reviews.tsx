import React from "react";
import { MypageLayout } from "../../layout/MypageLayout";
import { ALLOW_LOGINED } from "../../types/const";
import { auth } from "../../utils/with";
import dayjs from "dayjs";
import isEmpty from "../../utils/isEmpty";
import { ViewCount } from "../../components/common/ViewCount";
import { SingleSortSelect } from "../../components/common/SortSelect";
import { autoComma } from "../../utils/formatter";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { useDateFilter } from "../../hook/useSearch";
import { useSingleSort } from "../../hook/useSort";
import { Change } from "../../components/loadingList/LoadingList";
import { useRouter } from "next/router";
import { isOpenKr } from "../../utils/enumToKr";
import { generateClientPaging } from "../../utils/generateClientPaging";
import { Paginater } from "../../components/common/Paginator";
import { useProductReviewList } from "../../hook/useReview";
import {
    IModalInfo,
    ReviewModal,
} from "../../components/reviewModal/ReviewModal";
import { useModal } from "../../hook/useModal";

interface IProp {}

export const MyPageBoardReviews: React.FC<IProp> = () => {
    const rotuer = useRouter();
    const {
        items,
        filter,
        setFilter,
        sort,
        setSort,
        viewCount,
        setViewCount,
        setUniqFilter,
        getLoading,
    } = useProductReviewList();
    const { filterStart, filterEnd, hanldeCreateDateChange } = useDateFilter({
        filter,
        setFilter,
    });

    const modalHook = useModal<IModalInfo>();

    const singoeSort = useSingleSort(sort, setSort);

    const doSearch = (search: string) => {
        setUniqFilter("title_contains", ["title_contains"], search);
    };

    const { slice, paging, setPage } = generateClientPaging(items, viewCount);

    return (
        <MypageLayout>
            <div className="in myboard_box">
                <h4>나의 게시글</h4>
                <button>전체</button>
                <button>답변</button>
                <button>미답변</button>
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
                                        총{" "}
                                        <strong>
                                            {autoComma(items.length)}
                                        </strong>
                                        개
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
                                        <div className="th02">게시판</div>
                                        <div className="th03">공개</div>
                                        <div className="th04">제목</div>
                                        <div className="th05">생성일</div>
                                    </div>
                                    <div className="tbody">
                                        <ul>
                                            {slice.map((item, index) => (
                                                <li
                                                    onClick={() => {
                                                        modalHook.openModal({
                                                            reviewId: item._id,
                                                        });
                                                    }}
                                                    key={item._id}
                                                >
                                                    <div className="th02">
                                                        {item.boardType}
                                                    </div>
                                                    <div className="th03">
                                                        {isOpenKr(
                                                            !!item.isOpen
                                                        )}
                                                    </div>
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
                                        pageInfo={paging}
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
