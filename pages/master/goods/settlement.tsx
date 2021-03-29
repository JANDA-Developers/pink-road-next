import { useState } from "react";
import { MasterLayout } from 'layout/MasterLayout';
import { Paginater } from 'components/common/Paginator';
import { SearcfInfoBox } from 'components/common/SearcfInfoBox';
import React from 'react';
import { useSettlementList } from '../../../hook/useSettlement';
import { useCustomCount } from '../../../hook/useCount';
import { MasterSearchBar } from '../../../components/master/MasterSearchBar';
import { useDateFilter } from '../../../hook/useSearch';
import { MasterAlignMent } from "../../../components/master/MasterAlignMent";
import { useIdSelecter } from "../../../hook/useIdSelecter";
import { useSingleSort } from "../../../hook/useSort";
import { SingleSortSelect } from "../../../components/common/SortSelect";
import { yyyymmdd } from "../../../utils/yyyymmdd";
import { autoComma } from "../../../utils/formatter";
import { checkOn, GoodsTopNav } from "../../../components/topNav/MasterTopNav";
import { SettlementStatus, _SettlementFilter } from "../../../types/api";
import { ALLOW_ADMINS } from "../../../types/const";
import { auth } from "../../../utils/with";
import { SettlementStatusBadge } from "../../../components/Status/StatusBadge";
import { SettlementModal } from "../../../components/settlementModal/SettlementModal";
import { openModal } from "../../../utils/popUp";

interface IProp { }



type TsearchType = keyof _SettlementFilter;

export const MasterSettlement: React.FC<IProp> = () => {
    const [searchType, setSearchType] = useState<TsearchType>("exField__code_eq");
    const { items, filter, setFilter, viewCount, setViewCount, sort, setSort, setUniqFilter, pageInfo, setPage } = useSettlementList({
        initialFilter: {
            status_not_eq: SettlementStatus.READY //레디인것은 아직 판매되지 않은 상품이다
        }
    });
    const { settlementRequestCountMaster, settlementReadyCountMater, settlementCompleteCountMaster, totalSettlementCount } = useCustomCount(["settlementRequestCountMaster", "settlementReadyCountMater", "settlementCompleteCountMaster", "totalSettlementCount"]);
    const { filterEnd, filterStart, hanldeCreateDateChange, setDateKey } = useDateFilter({ filter, setFilter });
    const { selectAll, isChecked } = useIdSelecter(items.map((item, i) => item._id));
    const singleSort = useSingleSort(sort, setSort);
    const [settlementId, setSettlementId] = useState("");

    const doSearch = (search: string) => {
        setUniqFilter(
            searchType as any,
            ["exField__code_eq", "exField__sellerName_eq", "exField__title_contains"],
            search
        )
    }

    const setType = (status?: SettlementStatus) => () => {
        setUniqFilter("status_eq", ["status_eq"], status)
    }

    const handleReject = () => {

    }

    const checkOnStatus = (status?: SettlementStatus) => status === filter.status_eq ? "on" : "";

    const handleOpenModal = (sid: string) => () => {
        setSettlementId(sid)
        openModal("#SettlementModal")()
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
                                    setSearchType(type as any);
                                }} className="option">
                                    <option value={"exField__title_contains" as TsearchType}>상품명</option>
                                    <option value={"exField__code_eq" as TsearchType}>상품번호</option>
                                    <option value={"exField__sellerName_eq" as TsearchType}>파트너명</option>
                                    <option value={"exField__sellerNickName_eq" as TsearchType}>파트너 닉네임</option>
                                </select>}
                        />
                        <MasterAlignMent
                            Sort={
                                <SingleSortSelect {...singleSort} />
                            }
                            setViewCount={setViewCount}
                            viewCount={viewCount}
                            handleSelectAll={selectAll}
                            LeftDiv={
                                <ul className="board_option">
                                    <li onClick={setType(undefined)} className={checkOnStatus(undefined)}><a>전체<strong>{totalSettlementCount}</strong></a></li>
                                    <li onClick={setType(SettlementStatus.REQUEST)} className={checkOn(SettlementStatus.REQUEST)}><a>요청<strong>{settlementRequestCountMaster}</strong></a></li>
                                    <li onClick={setType(SettlementStatus.COMPLETE)} className={checkOn(SettlementStatus.COMPLETE)}><a>완료<strong>{settlementCompleteCountMaster}</strong></a></li>
                                </ul>
                            }
                        />
                    </div>
                    <div className="master__table">
                        <div className="thead">
                            {/* <div className="t01">
                                <span className="checkbox">
                                    <input type="checkbox" name="agree" id="agree0" title="전체선택" />
                                    <label htmlFor="agree0" />
                                </span>
                            </div> */}
                            <div className="t02">유형</div>
                            <div className="t03">정산계좌</div>
                            <div style={{ minWidth: 300 }} className="t04">상품</div>
                            <div className="t05">인원</div>
                            <div className="t06">금액</div>
                            <div className="t07">상태</div>
                            <div className="t08">관리</div>
                        </div>
                        {items.map((item, i) =>
                            <div key={item._id} className="tbody">
                                {/* <div className="t01">
                                    <span className="checkbox">
                                        <input checked={isChecked(item._id)} type="checkbox" name="agree" id={`agree${i}`} title="개별선택" />
                                        <label htmlFor={`agree${i}`} />
                                    </span>
                                </div> */}
                                <div className="t02">
                                    <span className="goods-ct"><i className="m_title">유형:</i>{item.product.type}</span>
                                </div>
                                <div className="t03">
                                    <span className="bank">({item.seller.bank_name})<br /><i className="m_title"> / </i>{item.seller.account_number}<br /><i className="m_title"> / </i>예금주:{item.seller.name}</span>
                                </div>
                                <div style={{ minWidth: 300 }} className="t04">
                                    <div className="info goods__info_title">
                                        <span className="ct goods__info_title">문화</span> <span className="g-number">상품번호: {item.product.code}</span>
                                        <strong className="title">{item.product.title}</strong>
                                        <div className="txt">
                                            <span className="s-day">출발일: {yyyymmdd(item.product.startDate)}</span>
                                            <span className="where">출발장소: {item.product.startPoint}</span>

                                            <span className="men">가격: 성인:{autoComma(item.product.adult_price)}/소아{autoComma(item.product.kids_price)}/유아:{autoComma(item.product.baby_price)}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="t05">
                                    <strong className="total_men"><i className="m_title">인원:</i>{item.product.compeltePeopleCnt}명</strong>
                                    <span className="all_men">(성인{item.product.bookerSummary.adultCount}/소아{item.product.bookerSummary.kidsCount}/유아{item.product.bookerSummary.babyCount})</span>
                                </div>
                                <div className="t06">
                                    <strong className="money">합계금액: {autoComma(item.totalPrice)}원</strong>
                                    <span className="sum01">수수료 및 공제(-) {autoComma(item.totalFee)}원</span>
                                    <span className="sum03">정산금액: {autoComma(item.settlementPrice)}원</span>
                                </div>
                                <div className="t07">
                                    <SettlementStatusBadge status={item.status} />
                                </div>
                                <div className="t08">
                                    <button className="btn small" onClick={handleOpenModal(item._id)}>상세보기</button>
                                    {/* <button className="btn small" >정산완료</button>
                                    <button className="btn small off">지급보류</button>
                                    <button className="btn small off">정산대기</button> */}
                                </div>
                            </div>
                        )}
                        <Paginater pageInfo={pageInfo} setPage={setPage} />

                        <div className="fin ifMobile">
                            <div className="float_left">
                                {/* <button onClick={selectAll} type="submit" className="btn medium">전체선택</button> */}
                            </div>
                            <div className="float_right">
                                {/* <button type="submit" className="btn medium">정산완료</button>
                            <button type="submit" className="btn medium">정산대기</button>
                            <button type="submit" className="btn medium">지급보류</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        <SearcfInfoBox />
        <SettlementModal settlementId={settlementId} />

        {/* popup-상세보기[마스터 모달] */}
    </MasterLayout >
};

export default auth(ALLOW_ADMINS)(MasterSettlement);