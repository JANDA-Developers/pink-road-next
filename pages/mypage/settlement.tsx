import CalendarIcon from 'components/common/icon/CalendarIcon';
import dayjs from 'dayjs';
import { MypageLayout } from 'layout/MypageLayout';
import React, { useState } from 'react';
import { BookingModal } from '../../components/bookingModal/BookingModal';
import { Paginater } from '../../components/common/Paginator';
import SortSelect from '../../components/common/SortMethod';
import { ViewCount } from '../../components/common/ViewCount';
import { ProductModal } from '../../components/productModal/ProductModal';
import { SearchBar } from '../../components/searchBar/SearchBar';
import { SettlementModal } from '../../components/settlementModal/SettlementModal';
import { useCustomCount } from '../../hook/useCount';
import { useIdSelecter } from '../../hook/useIdSelecter';
import { useDateFilter } from '../../hook/useSearch';
import { useSettlementList } from '../../hook/useSettlement';
import { Fsettlement } from '../../types/api';
import { ALLOW_SELLERS } from '../../types/const';
import { productStatus, settlementStatus } from '../../utils/enumToKr';
import { autoComma } from '../../utils/formatter';
import { openModal, openModalTimeSet } from '../../utils/popUp';
import { auth } from '../../utils/with';

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
const popupOpen2 = () => {
    $('#Popup02').css({
        'display': 'flex'
    });

}
const popupClose2 = () => {
    $('#Popup02').css({
        'display': 'none'
    });
}

export const MySettlement: React.FC<IProp> = () => {
    const { items, filter, setFilter, viewCount, setViewCount, setSort, sort, pageInfo, setPage } = useSettlementList()
    const [target] = useState<Fsettlement | null>(null);
    const { filterEnd, filterStart, hanldeCreateDateChange } = useDateFilter({
        filter,
        setFilter
    });
    const { selectAll, isAllSelected } = useIdSelecter(items.map(item => item._id));
    const [code, setCode] = useState("");
    const [settlementId, setSettlementId] = useState("");

    const { salesofLastMonth, salesOfThisMonth, settleAvaiableAmount, cancelReturnPrice } = useCustomCount(["salesofLastMonth", "salesofLastMonth", "salesOfThisMonth", "settleAvaiableAmount", "cancelReturnPrice"])

    const doSearch = (search: string) => {
        const _filter = {
            ...filter
        }

        // _filter["title_contains"] = search ? search : undefined;
        setFilter({
            ..._filter,
        })
    }

    const handleOpenModal = (_id: string) => () => {
        setSettlementId(_id);
        openModalTimeSet("#SettlementModal")
    }


    return <MypageLayout>
        <div className="in mypage_purchase">
            <h4>매출/정산관리</h4>
            <div className="paper_div">
                <div className="statement_div">
                    <div className="top_btn">
                        <span>통계표 상세보기</span>
                    </div>
                    <ul>
                        <li>
                            <strong>저번달 예약</strong>
                            <div><strong>{salesofLastMonth}</strong>건</div>
                        </li>
                        <li>
                            <strong>이번달 예약</strong>
                            <div><strong>{salesOfThisMonth}</strong>건</div>
                        </li>
                        <li>
                            <strong>정산 가능 금액</strong>
                            {/* 계산법: 상태가 Ready인 Settlement들의 정산금액 */}
                            <div><strong>{autoComma(settleAvaiableAmount)}</strong>원</div>
                        </li>
                        <li>
                            <strong>취소 환수금</strong>
                            {/* 계산법: Settlement의 취소 환수금들의 합산  */}
                            <div><strong>{autoComma(cancelReturnPrice)}</strong>원</div>
                        </li>
                    </ul>
                </div>
                <div className="con_top">
                    <h6>상세검색</h6>
                    <SearchBar
                        filterStart={filterStart}
                        filterEnd={filterEnd}
                        doSearch={doSearch}
                        Status={
                            <div className="jul2">
                                <div className="title">상태</div>
                                <div className="text">
                                    <span className="check on">전체</span>
                                    <span className="check">예약완료</span>
                                    <span className="check">예약취소</span>
                                </div>
                            </div>
                        }
                        SearchSelect={
                            <select className="option">
                                <option>상품코드</option>
                                <option>상품명</option>
                                <option>예약자</option>
                            </select>
                        }
                        onDateChange={() => { }} defaultRange={{}} />
                </div>
                <div className="con_bottom">
                    <div className="con_box">
                        <div className="alignment">
                            <div className="left_div">
                                총 <strong>{pageInfo.totalCount}</strong>개
                            </div>
                            <div className="right_div">
                                <SortSelect onChange={setSort} sort={sort} />
                                <ViewCount value={viewCount} onChange={setViewCount} />
                            </div>
                        </div>
                        <div className="fuction_list_mini ln08">
                            <div className="thead">
                                <div className="th01">
                                    <span className="checkbox">
                                        <input checked={isAllSelected} onClick={selectAll} type="checkbox" name="agree" id="agree0" title="전체선택" />
                                        <label htmlFor="agree0" />
                                    </span>
                                </div>
                                <div className="th02">상품코드</div>
                                <div className="th03">상품명</div>
                                <div className="th04">상품상태</div>
                                <div className="th05">정산날짜</div>
                                <div className="th06">금액</div>
                                <div className="th07">상태</div>
                                <div className="th08">상세보기</div>
                            </div>
                            <div className="tbody">
                                <ul>
                                    {items.map(item =>
                                        <li>
                                            <div className="th01"><input type="checkbox" /></div>
                                            <div className="th02">{item.product.code}</div>
                                            <div className="th03">{item.product.title}</div>
                                            <div className="th04">{productStatus(item.product?.status)}</div>
                                            <div className="th05">{item.completeDate ? dayjs(item.completeDate).format("YYYY.MM.DD") : undefined}</div>
                                            <div className="th06">{autoComma(item.totalPrice)}</div>
                                            <div className="th07"><strong className="ok">{settlementStatus(item.status)}</strong></div>
                                            <div onClick={handleOpenModal(item._id)} className="th08"><i className="btn">상세보기</i></div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <div className="boardNavigation">
                                <Paginater setPage={setPage} pageInfo={pageInfo} isMini />
                            </div>
                        </div>

                        <div className="in_fin mt30">
                            <div className="float_left">
                                <button type="submit" className="btn strong" onClick={popupOpen}>정산 계산하기</button>
                            </div>
                            <div className="float_right">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* 정산모달 */}
        <SettlementModal settlementId={settlementId} />
    </MypageLayout >
};



export default auth(ALLOW_SELLERS)(MySettlement)
