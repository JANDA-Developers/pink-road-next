import { MasterLayout } from 'layout/MasterLayout';
import { SearcfInfoBox } from 'components/common/SearcfInfoBox';
import React, { useState } from 'react';
import { useIdSelecter } from '../../hook/useIdSelecter';
import isEmpty from '../../utils/isEmpty';
import { openModal, openModalTimeSet } from '../../utils/popUp';
import { bookingList_BookingList_data, _BookingFilter, _ProductFilter } from '../../types/api';
import { useSingleSort } from '../../hook/useSort';
import { useQueryFilter } from '../../hook/useQueryFilter';
import { useDateFilter } from '../../hook/useSearch';
import { useBookingCancel, useBookingList } from '../../hook/useBooking';
import { useBankDepositConfirm } from '../../hook/usePayment';
import { ResvTopNav } from '../topNav/MasterTopNav';
import { MasterSearchBar } from '../master/MasterSearchBar';
import { MasterAlignMent } from '../master/MasterAlignMent';
import { getExcelByBookings } from '../../utils/getExcelData';
import { SingleSortSelect } from '../common/SortSelect';
import { Prompt } from '../promptModal/Prompt';
import { useCustomCount } from '../../hook/useCount';
import { BookingModal } from '../bookingModal/BookingModal';


type UserMasterHandler = {
    handleCancelConfirm: () => void;
    handleSelectCancelConfirm: () => void;
    openBookingModal: (code: string) => void
    handlePaymentConfirm: () => void;
    openCacnelPrompt: (item: bookingList_BookingList_data) => () => void;
    checkOnByhand: (byhand?: boolean | undefined) => "on" | "";
    byhandFilter: (byhand?: boolean | undefined) => () => void;
}

export interface IReservationTableProp {
    bookingListHook: ReturnType<typeof useBookingList>
    idSelectHook: ReturnType<typeof useIdSelecter>
    handlers: UserMasterHandler
}

export interface IFilterBtnProp {
    handlers: UserMasterHandler
}

interface IProp {
    Table: React.FC<IReservationTableProp>
    FilterBtn: React.FC<IFilterBtnProp>
}

export const ReservationMaster: React.FC<IProp> = ({ Table, FilterBtn }) => {
    const { totalBookingCountMaster, readyBookingCountMaster, compeltedBookingCountMaster } = useCustomCount(["totalBookingCountMaster", "readyBookingCountMaster", "compeltedBookingCountMaster"])
    const bookingListHook = useBookingList();
    const { items, filter, setFilter, pageInfo, sort, setSort, viewCount, setViewCount, page, setPage, getLoading } = bookingListHook;
    const { setUniqFilter } = useQueryFilter<_ProductFilter>({})
    const { filterStart, filterEnd, hanldeCreateDateChange } = useDateFilter({ filter, setFilter })
    const idSelectHook = useIdSelecter(items.map(i => i._id));
    const { selectAll, selectedIds } = idSelectHook;
    const singleSort = useSingleSort(sort, setSort);
    const [bookingCancel] = useBookingCancel();
    const [bookingModalCode, setBookingModalCode] = useState<string>("");
    const [popupCancelItem, setpopupCancelItem] = useState<bookingList_BookingList_data>()
    const [paymentConfirm] = useBankDepositConfirm();


    const doSearch = (search: string) => {
        setUniqFilter(
            "title_contains",
            ["title_contains"],
            search
        )
    }
    const handleCancel = (reason: string) => {
        if (!popupCancelItem) throw Error
        bookingCancel({
            variables: {
                reason,
                bookingId: popupCancelItem._id,
            }
        })
    }

    const openCacnelPrompt = (item: bookingList_BookingList_data) => () => {
        setpopupCancelItem(item);
        openModalTimeSet("BookingCancelModal", 100)
    }


    const checkOnByhand = (byhand?: boolean) => byhand === filter.byHand_eq ? "on" : "";

    const byhandFilter = (byhand?: boolean) => () => {
        filter.byHand_eq = byhand;
        setFilter({
            ...filter
        })
    }

    const handlePaymentConfirm = () => {
        const paymentIds = items.filter(bk => selectedIds.includes(bk._id)).map(bk => bk.payment?._id || "");
        if (isEmpty(paymentIds)) return;

        paymentConfirm({
            variables: {
                paymentIds
            }
        })
    }

    const handleCancelConfirm = () => {
    }

    const handleSelectCancelConfirm = () => {
    }

    const openBookingModal = (code: string) => {
        setBookingModalCode(code);
        openModal("#BookingModal")();
    }

    const handlers = {
        openBookingModal,
        handlePaymentConfirm,
        openCacnelPrompt,
        checkOnByhand,
        byhandFilter,
        handleCancelConfirm,
        handleSelectCancelConfirm,
    }


    return <MasterLayout>
        <div className="in ">
            <h4>예약관리</h4>
            <div className="in_content">
                <ResvTopNav />
                <div className="con reservation">
                    <div className="con_box_top pb5">
                        <div className="top_info_number">
                            <ul className="ln3">
                                <li>
                                    <strong>{totalBookingCountMaster}</strong>
                                    <span>전체</span>
                                </li>
                                <li>
                                    <strong>{readyBookingCountMaster}</strong>
                                    <span>예약대기</span>
                                </li>
                                <li>
                                    <strong>{compeltedBookingCountMaster}</strong>
                                    <span>예약완료</span>
                                </li>
                            </ul>
                        </div>
                        <MasterSearchBar onDateChange={hanldeCreateDateChange} Option={
                            <select className="option">
                                <option value={undefined}>전체</option>
                                <option value={"title_contains" as keyof _ProductFilter}>상품명</option>
                                <option value={"code_eq" as keyof _ProductFilter}>상품번호</option>
                                <option value={"code_eq" as keyof _ProductFilter}>예약번호</option>
                                {/* <option value={"" as keyof _ProductFilter}>예약자명</option> */}
                                <option value={"name" as keyof _BookingFilter}>여행자명</option>
                                {/* <option value={"" as keyof _BookingFilter}>휴대번호</option> */}
                                <option value={"code_eq" as keyof _ProductFilter}>상품상태</option>
                                <option value={"code_eq" as keyof _ProductFilter}>출발여부</option>
                            </select>
                        } defaultRange={{}} doSearch={doSearch} filterEnd={filterEnd} filterStart={filterStart} />
                        <MasterAlignMent
                            LeftDiv={
                                <div>
                                    <FilterBtn handlers={handlers} />
                                </div>
                            }
                            Sort={
                                <SingleSortSelect {...singleSort} />
                            }
                            excelData={getExcelByBookings(items)}
                            viewCount={viewCount}
                            setViewCount={setViewCount}
                            handleSelectAll={selectAll}
                        />
                    </div>
                    <Table bookingListHook={bookingListHook} idSelectHook={idSelectHook} handlers={handlers} />
                </div>
            </div>
            <BookingModal code={bookingModalCode} />
            <SearcfInfoBox />
            <Prompt onSubmit={handleCancel} title="예약 취소하기" id="BookingCancelModal" />
        </div>
    </MasterLayout >
};

export default ReservationMaster;