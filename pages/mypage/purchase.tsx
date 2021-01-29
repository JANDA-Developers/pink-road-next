import { PurChasedItem } from 'components/mypage/PurchasedItem';
import { MypageLayout } from 'layout/MypageLayout';
import React, { useState } from 'react';
import { BookingModal } from '../../components/bookingModal/BookingModal';
import SortSelect from '../../components/common/SortMethod';
import { ViewCount } from '../../components/common/ViewCount';
import { DayPickerModal } from '../../components/dayPickerModal/DayPickerModal';
import { SearchBar } from '../../components/searchBar/SearchBar';
import { useBookingList } from '../../hook/useBooking';
import { useQueryFilter } from '../../hook/useQueryFilter';
import { useDateFilter } from '../../hook/useSearch';
import { BookingStatus, _BookingFilter, _ProductFilter } from '../../types/api';
import { filterToRange, rangeToFilter } from '../../utils/filter';
import { closeModal, openModal } from '../../utils/popUp';

interface IProp { }

export const MyPagePurchase: React.FC<IProp> = () => {
    const { filter: filterProduct, setOR: setProductOR, setFilter: setProductFilter } = useQueryFilter<_ProductFilter>({})
    const { items = [], setFilter, setPage, page, filter, sort, setSort, viewCount, setViewCount } = useBookingList({}, {
        overrideVariables: {
            filterProduct
        }
    })
    const [detailCode, setDetailCode] = useState("")
    const [filterType, setFilterType] = useState<"keywards" | "productName">("keywards");
    const { hanldeCreateDateChange } = useDateFilter({
        filter,
        setFilter,
        dateKey: "createdAt",
    });

    const setType = (status?: BookingStatus) => () => {
        filter.status_eq = status;
        setFilter({ ...filter })
    }

    const doSearch = (search: string) => {
        if (filterType === "productName") {
            setProductFilter({ title_contains: search });
        }
    }

    const handleDetail = (code: string) => () => {
        setDetailCode(code);
        setTimeout(() => {
            openModal("#BookingModal")()
        }, 100)
    }

    const checkOnStatus = (status?: BookingStatus) => status === filter.status_eq ? "check on" : "check";

    return <MypageLayout>
        <div className="in mypage_purchase">
            <h4>구매내역</h4>
            <div className="paper_div">
                <div className="con_top">
                    <h6>상세검색</h6>
                    <SearchBar
                        filterStart={filter.createdAt_gte}
                        filterEnd={filter.createdAt_lte}
                        Status={
                            <div className="jul2">
                                <div className="title">상태</div>
                                <div className="text">
                                    <span onClick={setType(undefined)} className={checkOnStatus(undefined)}>전체</span>
                                    <span onClick={setType(BookingStatus.COMPLETE)} className={checkOnStatus(BookingStatus.COMPLETE)}>예약완료</span>
                                    <span onClick={setType(BookingStatus.CANCEL)} className={checkOnStatus(BookingStatus.CANCEL)}>취소예약</span>
                                </div>
                            </div>
                        }
                        //alt="search icon" 
                        SearchSelect={
                            <select onChange={(e) => {
                                const val = e.currentTarget.value;
                                setFilterType(val as any)
                            }} value={filterType} className="option">
                                <option value={"productName"}>상품명</option>
                                <option value={"keywards"}>키워드</option>
                            </select>
                        }
                        onDateChange={hanldeCreateDateChange}
                        defaultRange={{}}
                        doSearch={doSearch}
                    />
                </div>
                <div className="con_bottom">

                    <div className="con_box">
                        <div className="alignment">
                            <div className="left_div">
                                총 <strong>{(items || []).length}</strong>개
                            </div>
                            <div className="right_div">
                                <SortSelect onChange={setSort} sort={sort} />
                                <ViewCount value={viewCount} onChange={(val) => {
                                    setViewCount(val);
                                }} />
                            </div>
                        </div>
                        {/*리스트로 보기*/}
                        <div className="list selectViewList">
                            <ul className="list_ul">
                                {items.map(item =>
                                    <PurChasedItem onDetail={handleDetail(item.code)} item={item} key={item._id} />
                                )}
                            </ul>
                        </div>
                        {/* <Paginater pageNumber={10} totalPageCount={20} /> */}
                    </div>
                </div>
            </div>
        </div>
        {detailCode && <BookingModal code={detailCode} />}
        <DayPickerModal defaultRange={filterToRange(filter, "createdAt")} onSubmit={(range) => {
            closeModal("#dayPickerModal")()
            const data = rangeToFilter(range, "createdAt")
            setFilter({
                ...filter,
                ...data,
            })
        }} />
    </MypageLayout>
};

export default MyPagePurchase;