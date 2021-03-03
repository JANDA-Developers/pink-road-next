import CalendarIcon from 'components/common/icon/CalendarIcon';
import { MypageLayout } from 'layout/MypageLayout';
import { Paginater } from 'components/common/Paginator';
import React, { useState } from 'react';
import { SearchBar } from '../../components/searchBar/SearchBar';
import { useDateFilter } from '../../hook/useSearch';
import { BookingStatus, _BookingFilter, _BookingSort, _ProductFilter } from '../../types/api';
import { useBookingList } from '../../hook/useBooking';
import Excel from '../../components/excel/Execel';
import { useIdSelecter } from '../../hook/useIdSelecter';
import { SingleSortSelect } from '../../components/common/SortSelect';
import { ViewCount } from '../../components/common/ViewCount';
import { BookingStatusBadge } from '../../components/Status/StatusBadge';
import { yyyymmdd } from '../../utils/yyyymmdd';
import { payMethodToKR, productStatus } from '../../utils/enumToKr';
import { useSingleSort } from '../../hook/useSort';
import { autoComma } from '../../utils/formatter';
import { useQueryFilter } from '../../hook/useQueryFilter';
import { ALLOW_LOGINED, BG } from '../../types/const';
import { auth } from '../../utils/with';
import { getExcelByBookings } from '../../utils/getExcelData';

interface IProp { }

const popupOpen = () => {
    $('#Popup01').css({
        'display': 'flex'
    });

}
const popupClose = () => {
    $('#Popup01').css({
        'display': 'none'
    });
}

export const MyReservation: React.FC<IProp> = () => {
    const { filter: filterProduct, setOR: setProductOR } = useQueryFilter<_ProductFilter>({})
    const { items, viewCount, setViewCount, filter, setFilter, setOR, sort, setSort, pageInfo, setPage } = useBookingList(undefined, {
        overrideVariables: {
        }
    });
    const [searchType, setSearchType] = useState<"code" | "title" | "name">("code");
    const { isChecked, check, selectAll, unSelectAll, isAllSelected } = useIdSelecter(items.map(item => item._id));
    const singleSortHook = useSingleSort(sort, setSort)

    const { hanldeCreateDateChange, filterEnd, filterStart } = useDateFilter({
        filter,
        setFilter,
        dateKey: "createdAt",
    });

    const doSearch = (search: string) => {
        setProductOR(["title_contains", "keyWards_contains"], search);
    }

    const handleSatus = (status?: BookingStatus) => () => {
        setFilter({
            ...filter,
            status_eq: status
        })
    }

    const checkStatusOn = (status?: BookingStatus) => filter.status_eq === status ? "check on" : "check"

    return <MypageLayout>
        <div className="in reservation_div">
            <h4>예약관리</h4>
            <div className="paper_div">
                <div className="con_top">
                    <h6>상세검색</h6>
                    <SearchBar
                        defaultRange={{}}
                        filterStart={filterStart}
                        filterEnd={filterEnd}
                        doSearch={doSearch} Status={
                            <div className="jul4">
                                <div className="title">상태</div>
                                <div className="text">
                                    <span onClick={handleSatus(undefined)} className={checkStatusOn(undefined)}>전체</span>
                                    <span onClick={handleSatus(BookingStatus.READY)} className={checkStatusOn(BookingStatus.READY)}>예약대기</span>
                                    <span onClick={handleSatus(BookingStatus.COMPLETE)} className={checkStatusOn(BookingStatus.COMPLETE)}>예약완료</span>
                                    <span onClick={handleSatus(BookingStatus.CANCEL)} className={checkStatusOn(BookingStatus.CANCEL)}>예약취소</span>
                                </div>
                            </div>
                        }
                        SearchSelect={
                            <select value={searchType} onChange={(e) => {
                                const val = e.currentTarget.value;
                                setSearchType(val as any);
                            }} className="option">
                                <option value={"code"}>상품코드</option>
                                <option value={"title"}>상품명</option>
                                <option value={"name"}>예약자</option>
                            </select>
                        }
                        onDateChange={hanldeCreateDateChange}
                    />
                </div>
                <div className="con_bottom">
                    <div className="con_box">
                        <div className="alignment">
                            <div className="left_div"><span className="infotxt">총 <strong>{pageInfo.totalCount}</strong>건</span></div>
                            <div className="right_div">
                                <ul className="board_option">
                                    <li onClick={selectAll}><a>모두선택</a></li>
                                    <li onClick={unSelectAll}><a>모두선택 해제</a></li>
                                    <li><Excel data={getExcelByBookings(items)} element={<a>엑셀파일</a>} /></li>
                                </ul>
                                <SingleSortSelect {...singleSortHook} >
                                    <option value={_BookingSort.productStartDate_desc}>출발일 &uarr;</option>
                                    <option value={_BookingSort.productStartDate_asc}>출발일 &darr;</option>
                                </SingleSortSelect>
                                <ViewCount onChange={setViewCount} value={viewCount} />
                            </div>
                        </div>
                        <div className="master__table fuction_list_mini">
                            <div className="thead">
                                <div className="t01">
                                    <span className="checkbox">
                                        <input checked={isAllSelected} onClick={selectAll} type="checkbox" name="agree" id="agree0" title="전체선택" />
                                        <label htmlFor="agree0" />
                                    </span>
                                </div>
                                <div className="t02">예약번호</div>
                                <div className="t04">상품정보</div>
                                <div className="t05">예약자</div>
                                <div className="t06">금액</div>
                                <div className="t07">상태</div>
                            </div>
                            <div className="tbody">
                                {items.map(item =>
                                    <div key={item._id} className="td">
                                        <div className="t01">
                                            <span onClick={() => { check(item._id) }} className="checkbox">
                                                <input checked={isChecked(item._id)} type="checkbox" name="agree" id="agree1" title="개별선택" />
                                                <label htmlFor="agree1" />
                                            </span>
                                        </div>
                                        <div className="t02">
                                            <div className="align">
                                                <span className="r-number"><i className="m_title">예약번호:</i>{item.code}</span>
                                            </div>
                                        </div>
                                        <div className="t04">
                                            <div className="img" style={BG(item?.product?.images?.[0]?.uri || "")} ></div>
                                            <div className="info goods__info_title">
                                                <span className="ct">{item.product.title}</span><span className="g-number">상품번호: {item.product.code}</span>
                                                <strong className="title">{item.product.title}</strong>
                                                <div className="txt">
                                                    <span className="s-day">출발일: {yyyymmdd(item.product.startDate)}</span>
                                                    <span className="where">출발장소: {item.product.startPoint}</span>

                                                    <span className="r-day">예약일: {yyyymmdd(item.createdAt)}</span>

                                                    <span className="goods-state1">확정여부: {productStatus(item.product.status)}({item.product.compeltePeopleCnt}/{item.product.maxMember})</span>
                                                    <span className="goods-state2">상품상태: {productStatus(item.product.status)}</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="t05">
                                            <div className="align">
                                                <span className="name"><i className="m_title">예약자:</i>{item.name}</span>
                                                <span className="ph">{item.phoneNumber}</span>
                                                <span className="men">예약인원: 총 {item.totalCount}명<br />(성인{item.adultCount}/ {item.kidCount} / 유아{item.babyCount} )</span>
                                            </div>
                                        </div>
                                        <div className="t06">
                                            <div className="align">
                                                <strong className="money"><i className="m_title">금액:</i>{autoComma(item.bookingPrice)}원</strong>
                                                <span className="pay">결제종류: {payMethodToKR(item.payment?.payMethod)}</span>
                                                <span className="pay-day">결제일: {yyyymmdd(item.payment?.createdAt)}</span>
                                            </div>
                                        </div>
                                        <div className="t07">
                                            <div className="align">
                                                <BookingStatusBadge status={item.status!} />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <Paginater setPage={setPage} pageInfo={pageInfo} />
                    </div>
                </div>
            </div>
        </div>

        {/* popup-상세보기 = 마스터>예약관리>예약.결제관리 상세보기와 같음*/}

    </MypageLayout >
};

export default auth(ALLOW_LOGINED)(MyReservation);