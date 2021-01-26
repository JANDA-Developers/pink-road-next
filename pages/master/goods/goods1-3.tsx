import { useState } from "react";
import { MasterLayout } from 'layout/MasterLayout';
import { Paginater } from 'components/common/Paginator';
import { SearcfInfoBox } from 'components/common/SearcfInfoBox';
import CalendarIcon from 'components/common/icon/CalendarIcon';
import React from 'react';
import Link from "next/link";
import ReactTooltip from 'react-tooltip';
import { useSettlementList } from '../../../hook/useSettlement';
import { useCustomCount } from '../../../hook/useCount';
import { MasterSearchBar } from '../../../components/master/MasterSearchBar';
import { useDateFilter } from '../../../hook/useSearch';
import { getUniqFilter } from "../../../utils/filter";
import { MasterAlignMent } from "../../../components/master/MasterAlignMent";
import { useIdSelecter } from "../../../hook/useIdSelecter";
import { useSingleSort } from "../../../hook/useSort";
import { SingleSortSelect } from "../../../components/common/SortSelect";
import settlement from "../../mypage/settlement";
import { yyyymmdd } from "../../../utils/yyyymmdd";
import { autoComma } from "../../../utils/formatter";
import { GoodsTopNav } from "../../../components/topNav/MasterTopNav";

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

type TuniqSearch = "sellerName_eq" | "productCode_eq" | "productName_contains";

export const MsReservationB: React.FC<IProp> = () => {
    const [searchType, setSearchType] = useState<TuniqSearch>("productName_contains");
    const { items, filter, setFilter, viewCount, setViewCount, sort, setSort } = useSettlementList();
    const { settlementRequestCountMaster, settlementReadyCountMater, settlementCompleteCountMaster, totalSettlementCount } = useCustomCount(["settlementRequestCountMaster", "settlementReadyCountMater", "settlementCompleteCountMaster", "totalSettlementCount"]);
    const { filterEnd, filterStart, hanldeCreateDateChange, setDateKey } = useDateFilter({ filter, setFilter });
    const { selectAll, isChecked } = useIdSelecter(items.map(item => item._id));
    const singleSort = useSingleSort(sort, setSort);

    const doSearch = (search: string) => {
        const _filter = getUniqFilter(
            filter,
            searchType,
            ["sellerName_eq", "productCode_eq", "productName_contains"],
            search
        )
        setFilter({
            ..._filter
        })
    }

    return <MasterLayout>
        <div className="in ">
            <h4>예약관리</h4>
            <div className="in_content">
                <GoodsTopNav />
                <div className="con reservation calculate">
                    <div className="con_box_top pb5">
                        <div className="top_info_number">
                            <ul className="ln3">
                                <li>
                                    <strong>{totalSettlementCount}</strong>
                                    <span>전체</span>
                                </li>
                                <li>
                                    <strong>{settlementRequestCountMaster}</strong>
                                    <span>정산요청</span>
                                </li>
                                <li>
                                    <strong>{settlementCompleteCountMaster}</strong>
                                    <span>정산완료</span>
                                </li>
                            </ul>
                        </div>
                        <MasterSearchBar
                            filterEnd={filterEnd}
                            filterStart={filterStart}
                            onDateChange={hanldeCreateDateChange}
                            defaultRange={{}}
                            doSearch={doSearch}
                            Option={
                                <select value={searchType} onChange={(e) => {
                                    const type = e.currentTarget.value;
                                    setSearchType(type as TuniqSearch);
                                }} className="option">
                                    <option value={"productName_contain"}>상품명</option>
                                    <option value={"productCode_eq"}>상품번호</option>
                                    <option value={"sellerName_eq"}>파트너명</option>
                                </select>}
                        />
                    </div>
                    <MasterAlignMent
                        Sort={
                            <SingleSortSelect {...singleSort} />
                        }
                        setViewCount={setViewCount}
                        viewCount={viewCount}
                        handleSelectAll={selectAll}
                        LeftDiv={
                            <ul className="board_option">
                                <li className="on"><a >전체<strong>46</strong></a></li>
                                <li><a >여행<strong>23</strong></a></li>
                                <li><a >체험<strong>23</strong></a></li>
                            </ul>
                        }
                    />
                </div>
                <div className="master__table">
                    <div className="thead">
                        <div className="t01">
                            <span className="checkbox">
                                <input type="checkbox" name="agree" id="agree0" title="전체선택" />
                                <label htmlFor="agree0" />
                            </span>
                        </div>
                        <div className="t02">유형</div>
                        <div className="t03">정산계좌</div>
                        <div className="t04">상품</div>
                        <div className="t05">인원</div>
                        <div className="t06">금액</div>
                        <div className="t07">정산</div>
                        <div className="t08">관리</div>
                    </div>
                    {items.map(item =>
                        <div key={item._id} className="tbody">
                            <div className="t01">
                                <span className="checkbox">
                                    <input checked={isChecked(item._id)} type="checkbox" name="agree" id="agree1" title="개별선택" />
                                    <label htmlFor="agree1" />
                                </span>
                            </div>
                            <div className="t02">
                                <div className="align">
                                    <span className="goods-ct"><i className="m_title">유형:</i>{item.product.type}</span>
                                </div>
                            </div>
                            <div className="t03">
                                <div className="align">
                                    <span className="bank">({item.seller.bank_name})<br /><i className="m_title"> / </i>{item.seller.account_number}<br /><i className="m_title"> / </i>예금주:{item.seller.name}</span>
                                </div>
                            </div>
                            <div className="t04">
                                <div className="info">
                                    <span className="ct goods__info_title">문화</span> <span className="g-number">상품번호: PINK-{item.product.code}</span>
                                    <strong className="title">{item.product.title}</strong>
                                    <div className="txt">
                                        <span className="s-day">출발일: {yyyymmdd(item.product.startDate)}</span>
                                        <span className="where">출발장소: {item.product.startPoint}</span>

                                        <span className="men">가격: 성인:{autoComma(item.product.adult_price)}/소아{autoComma(item.product.kids_price)}/유아:{autoComma(item.product.baby_price)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="t05">
                                <div className="align">
                                    <strong className="total_men"><i className="m_title">인원:</i>{item.product.compeltePeopleCnt}명</strong>
                                    <span className="all_men">(성인{item.product.bookerSummary.adultCount}/소아{item.product.bookerSummary.kidsCount}/유아{item.product.bookerSummary.babyCount})</span>
                                </div>
                            </div>
                            <div className="t06">
                                <div className="align">
                                    <strong className="money"><i className="m_title">합계금액:{autoComma(item.totalPrice)}</i>원</strong>
                                    <span className="sum01">수수료 및 공제(-) {autoComma(item.totalFee)}원</span>
                                    <span className="sum03">정산금액: {autoComma(item.settlementPrice)}원</span>
                                </div>
                            </div>
                            <div className="t07">
                                <div className="align">
                                    <strong onClick={() => { }}><span className="sel no">지급보류</span></strong>
                                </div>
                            </div>
                            <div className="t08">
                                <div className="align">
                                    <button className="btn small" onClick={popupOpen}>상세보기</button>
                                    <button className="btn small" >정산완료</button>
                                    <button className="btn small off">지급보류</button>
                                    <button className="btn small off">정산대기</button>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* <Paginater pageNumber={10} totalPageCount={20} /> */}

                    <div className="fin ifMobile">
                        <div className="float_left">
                            <button onClick={selectAll} type="submit" className="btn medium">전체선택</button>
                        </div>
                        <div className="float_right">
                            <button type="submit" className="btn medium">정산완료</button>
                            <button type="submit" className="btn medium">정산대기</button>
                            <button type="submit" className="btn medium">지급보류</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        <SearcfInfoBox />

        {/* popup-상세보기[마스터 모달] */}
    </MasterLayout >
};

export default MsReservationB;