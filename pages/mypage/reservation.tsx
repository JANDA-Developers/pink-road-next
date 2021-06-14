import CalendarIcon from "components/common/icon/CalendarIcon";
import { MypageLayout } from "layout/MypageLayout";
import { Paginater } from "components/common/Paginator";
import React from "react";
import { SearchBar } from "../../components/searchBar/SearchBar";
import {
    BookingStatus,
    _BookingFilter,
    _BookingSort,
    _ProductFilter,
} from "../../types/api";
import { useBookingList } from "../../hook/useBooking";
import Excel from "../../components/excel/Execel";
import { SingleSortSelect } from "../../components/common/SortSelect";
import { ViewCount } from "../../components/common/ViewCount";
import { ALLOW_LOGINED } from "../../types/const";
import { auth } from "../../utils/with";
import { getExcelByBookings } from "../../utils/getExcelData";
import { BookingModal } from "../../components/bookingModal/BookingModal";
import {
    TBookingSearchType,
    useBookingBoard,
} from "../../hook/useBookingBoard";
import { Change } from "../../components/loadingList/LoadingList";
import { CompleteReservationTable } from "../../components/mypageReservationTable/CompleteTable";
import { CancelReservationTable } from "../../components/mypageReservationTable/CancelTable";
import { ReadyReservationTable } from "../../components/mypageReservationTable/ReadyReservationTable";
import { ReservationAllTable } from "../../components/mypageReservationTable/ReservationAllTable";

interface IProp {}

const popupOpen = () => {
    $("#Popup01").css({
        display: "flex",
    });
};

const popupClose = () => {
    $("#Popup01").css({
        display: "none",
    });
};

export const MyReservation: React.FC<IProp> = () => {
    const useBookinBoardHook = useBookingBoard();
    const {
        filterType,
        bookingModalHook,
        bookingListHook,
        checkOnStatus,
        doSearch,
        handleDetail,
        dateFilterHook,
        isTimeOverExcept,
        setFilterType,
        setIsTimeOverExcept,
        setType,
        idSelecterHook,
        singleSortHook,
    } = useBookinBoardHook;
    const {
        items,
        filter,
        setFilter,
        pageInfo,
        setViewCount,
        getLoading,
        setPage,
        viewCount,
    } = bookingListHook;
    const {
        check,
        handleCheck,
        isAllSelected,
        isChecked,
        reverseAll,
        selectAll,
        selectLength,
        selectedIds,
        setSelectedIds,
        toggle,
        toggleAll,
        unCheck,
        unSelectAll,
    } = idSelecterHook;
    const { hanldeCreateDateChange } = dateFilterHook;

    const isCancelBoard = filter.status_eq === BookingStatus.CANCEL;
    const isCompleteBoard = filter.status_eq === BookingStatus.COMPLETE;
    const isReadyBoard = filter.status_eq === BookingStatus.READY;
    const isAllBoard = filter.status_eq === undefined;

    // const { items, viewCount, setViewCount, filter, setFilter, setOR, sort, setSort, pageInfo, setPage } = useBookingList(undefined);
    // const [searchType, setSearchType] = useState<"code" | "title" | "name">("code");
    // const bookingModalHook = useModal<IBookingModalInfot>()

    // const { hanldeCreateDateChange, filterEnd, filterStart } = useDateFilter({
    //     filter,
    //     setFilter,
    //     dateKey: "createdAt",
    // });

    // const doSearch = (search: string) => {
    //     setOR(["exField__title_contains", "exField__bookerName_eq"], search);
    // }

    // const handleSatus = (status?: BookingStatus) => () => {
    //     setFilter({
    //         ...filter,
    //         status_eq: status
    //     })
    // }

    // const handleDetail = (code: string) => () => {
    //     bookingModalHook.openModal({ code: code });
    // }

    // const checkStatusOn = (status?: BookingStatus) => filter.status_eq === status ? "check on" : "check"

    return (
        <MypageLayout>
            <div className="in reservation__div">
                <h4>예약관리</h4>
                <div className="paper_div">
                    <div className="con_top">
                        <h6>상세검색</h6>
                        <SearchBar
                            defaultRange={{}}
                            filterStart={filter.createdAt_gte}
                            filterEnd={filter.createdAt_lte}
                            doSearch={doSearch}
                            Status={
                                <div className="jul4">
                                    <div className="title">상태</div>
                                    <div className="text">
                                        <span
                                            onClick={setType(undefined)}
                                            className={checkOnStatus(undefined)}
                                        >
                                            전체
                                        </span>
                                        <span
                                            onClick={setType(
                                                BookingStatus.READY
                                            )}
                                            className={checkOnStatus(
                                                BookingStatus.READY
                                            )}
                                        >
                                            예약대기
                                        </span>
                                        <span
                                            onClick={setType(
                                                BookingStatus.COMPLETE
                                            )}
                                            className={checkOnStatus(
                                                BookingStatus.COMPLETE
                                            )}
                                        >
                                            예약완료
                                        </span>
                                        <span
                                            onClick={setType(
                                                BookingStatus.CANCEL
                                            )}
                                            className={checkOnStatus(
                                                BookingStatus.CANCEL
                                            )}
                                        >
                                            예약취소
                                        </span>
                                    </div>
                                </div>
                            }
                            SearchSelect={
                                <select
                                    onChange={(e) => {
                                        const val = e.currentTarget.value;
                                        setFilterType(val as any);
                                    }}
                                    value={filterType}
                                    className="option"
                                >
                                    <option
                                        value={
                                            "exField__title_contains" as TBookingSearchType
                                        }
                                    >
                                        상품명
                                    </option>
                                    <option
                                        value={
                                            "exField__sellerName_eq" as TBookingSearchType
                                        }
                                    >
                                        판매자명
                                    </option>
                                    <option
                                        value={"code_eq" as TBookingSearchType}
                                    >
                                        예약코드
                                    </option>
                                </select>
                            }
                            onDateChange={hanldeCreateDateChange}
                        />
                    </div>
                    <div className="con_bottom">
                        <div className="con_box">
                            <div className="alignment">
                                <div className="left_div">
                                    <span className="infotxt">
                                        총{" "}
                                        <strong>{pageInfo.totalCount}</strong>건
                                    </span>
                                </div>
                                <div className="right_div">
                                    <ul className="board_option">
                                        <li onClick={selectAll}>
                                            <a>모두선택</a>
                                        </li>
                                        <li onClick={unSelectAll}>
                                            <a>모두선택 해제</a>
                                        </li>
                                        <li>
                                            <Excel
                                                data={getExcelByBookings(items)}
                                                element={<a>엑셀파일</a>}
                                            />
                                        </li>
                                    </ul>
                                    <SingleSortSelect {...singleSortHook}>
                                        <option
                                            value={
                                                _BookingSort.productStartDate_desc
                                            }
                                        >
                                            출발일 &uarr;
                                        </option>
                                        <option
                                            value={
                                                _BookingSort.productStartDate_asc
                                            }
                                        >
                                            출발일 &darr;
                                        </option>
                                    </SingleSortSelect>
                                    <ViewCount
                                        onChange={setViewCount}
                                        value={viewCount}
                                    />
                                </div>
                            </div>
                            <Change change={!getLoading}>
                                {isAllBoard && (
                                    <ReservationAllTable
                                        {...useBookinBoardHook}
                                    />
                                )}
                                {isCompleteBoard && (
                                    <CompleteReservationTable
                                        {...useBookinBoardHook}
                                    />
                                )}
                                {isReadyBoard && (
                                    <ReadyReservationTable
                                        {...useBookinBoardHook}
                                    />
                                )}
                                {isCancelBoard && (
                                    <CancelReservationTable
                                        {...useBookinBoardHook}
                                    />
                                )}
                                <Paginater
                                    setPage={setPage}
                                    pageInfo={pageInfo}
                                />
                            </Change>
                        </div>
                    </div>
                </div>
            </div>
            <BookingModal
                key={bookingModalHook.info?.code}
                {...bookingModalHook}
            />
            {/* popup-상세보기 = 마스터>예약관리>예약.결제관리 상세보기와 같음*/}
        </MypageLayout>
    );
};

export default auth(ALLOW_LOGINED)(MyReservation);
