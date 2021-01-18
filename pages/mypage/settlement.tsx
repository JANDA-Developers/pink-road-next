import CalendarIcon from 'components/common/icon/CalendarIcon';
import { Paginater } from 'components/common/Paginator';
import { PurChasedItem } from 'components/mypage/PurchasedItem';
import dayjs from 'dayjs';
import { MypageLayout } from 'layout/MypageLayout';
import React, { useContext, useState } from 'react';
import { BookingModal } from '../../components/bookingModal/BookingModal';
import SortSelect from '../../components/common/SortMethod';
import { ViewCount } from '../../components/common/ViewCount';
import { MasterModal } from '../../components/masterModal/MasterModal';
import { SearchBar } from '../../components/searchBar/SearchBar';
import { LastMonthBooking } from '../../components/static/LastMonthBooking';
import { ThisMonthBooking } from '../../components/static/ThisMonthBooking';
import { ThisMonthPayAmt } from '../../components/static/ThisMonthPayAmt';
import { useCustomCount } from '../../hook/useCount';
import { useDateFilter } from '../../hook/useSearch';
import { useSettlementList } from '../../hook/useSettlement';
import { Fsettlement, ProductStatus } from '../../types/api';
import { ALLOW_ALLOW_SELLERS } from '../../types/const';
import { productStatus, settlementStatus } from '../../utils/enumToKr';
import { autoComma, autoHypenPhone } from '../../utils/formatter';
import { openModal } from '../../utils/popUp';
import { auth, compose } from '../../utils/with';

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
    const { items, filter, setFilter, viewCount, setViewCount, setSort, sort, pageInfo } = useSettlementList()
    const [target] = useState<Fsettlement | null>(null);
    const { filterEnd, filterStart, hanldeCreateDateChange } = useDateFilter({
        filter,
        setFilter
    });

    const [code, setCode] = useState("");
    const [productId, setProductId] = useState("");

    const { salesofLastMonth, salesOfThisMonth, settleAvaiableAmount, cancelReturnPrice } = useCustomCount(["salesofLastMonth", "salesofLastMonth", "settleAvaiableAmount", "cancelReturnPrice"])

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
        setProductId(_id);
        setTimeout(() => {
            openModal("#BookingModal")()
        }, 1000)
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
                            <strong>정산 가능 금액 (받을 수 있는 금액) </strong>
                            {/* 계산법: 상태가 Ready인 Settlement들의 정산금액 */}
                            <div><strong>{autoComma(settleAvaiableAmount)}</strong>원</div>
                        </li>
                        <li>
                            <strong>취소 환수금</strong>
                            {/* 계산법: Settlement의 취소 환수금들의 합산  */}
                            <div><strong>{autoComma(cancelReturnPrice)}</strong>원</div>
                            <strong>예약취소 환수금</strong>
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
                        } onDateChange={() => { }} defaultRange={{}} />
                    <div className="search_box">
                        <div className="jul4">
                            <div className="title">날짜</div>
                            <div className="text">
                                <ul className="day_ul">
                                    <li className="on">
                                        <span>이번달</span>
                                    </li>
                                    <li className="on">
                                        <span>저번달</span>
                                    </li>
                                    <li>
                                        <span>6개월</span>
                                    </li>
                                    <li>
                                        <span>1년</span>
                                    </li>
                                </ul>
                                <div className="input_box">
                                    <input type="text" className="day w100" />
                                    <CalendarIcon />
                                </div>
                                ~
                                 <div className="input_box">
                                    <input type="text" className="day w100" />
                                    <CalendarIcon />
                                </div>
                            </div>
                        </div>
                        <div className="jul1">
                            <div>
                                <select className="option">
                                    <option>상품코드</option>
                                    <option>상품명</option>
                                    <option>예약자</option>
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
                                        <input type="checkbox" name="agree" id="agree0" title="전체선택" />
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
                                            <div className="th05">{dayjs(item.requestDate).format("YYYY.MM.DD")}</div>
                                            <div className="th06">{item}</div>
                                            <div className="th07"><strong className="ok">{settlementStatus(item.status)}</strong></div>
                                            <div onClick={handleOpenModal(item.product._id)} className="th08"><i className="btn">상세보기</i></div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <div className="boardNavigation">
                                <div className="float_left">
                                    <div className="pagenate_mini">
                                        <div className="page_btn first"><i className="jandaicon-arr4-left"></i></div>
                                        <div className="count"><strong>1</strong> / 10</div>
                                        <div className="page_btn end"><i className="jandaicon-arr4-right"></i></div>
                                    </div>
                                </div>

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


        {/* popup-상세보기 */}
        <BookingModal code={code} />
        {/* 마스터모달 */}
        <MasterModal productId={productId} />
    </MypageLayout >
};



export default auth(ALLOW_ALLOW_SELLERS)(MySettlement)
