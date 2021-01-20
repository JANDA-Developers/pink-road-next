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
import { getUniqFilter, setUniqFilter } from "../../../utils/filter";
import { MasterAlignMent } from "../../../components/master/MasterAlignMent";
import { useIdSelecter } from "../../../hook/useIdSelecter";
import { useSingleSort } from "../../../hook/useSort";
import { SingleSortSelect } from "../../../components/common/SortSelect";
import settlement from "../../mypage/settlement";
import { yyyymmdd } from "../../../utils/yyyymmdd";
import { autoComma } from "../../../utils/formatter";

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
    const { selecteAll, isChecked } = useIdSelecter(items.map(item => item._id));
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
                <div className="tab-nav">
                    <ul>
                        <li><Link href="/master/reservation"><a>예약·결제관리</a></Link></li>
                        <li><Link href="/master/reservation/reservation1-2"><a>취소·환불관리</a></Link></li>
                        <li className="on"><Link href="/master/reservation/reservation1-3"><a>매출·정산관리</a></Link></li>
                        {/* <li><Link href="/master/reservation/reservation1-4"><a>예약수기등록관리</a></Link></li> */}
                    </ul>
                </div>
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
                        handleSelectAll={selecteAll}
                        BoardOption={
                            <ul className="board_option">
                                <li className="on"><a href="/">전체<strong>46</strong></a></li>
                                <li><a href="/">여행<strong>23</strong></a></li>
                                <li><a href="/">체험<strong>23</strong></a></li>
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
                                    <span className="ct">문화</span> <span className="g-number">상품번호: PINK-{item.product.code}</span>
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
                                    <span className="sum01">수수료 및 공제(-) {autoComma(item.totalFee)}}원</span>
                                    <span className="sum03">정산금액: {autoComma(item.settlementPrice)}}원</span>
                                </div>
                            </div>
                            <div className="t07">
                                <div className="align">
                                    <strong onClick={ }><span className="sel no">지급보류</span></strong>
                                </div>
                            </div>
                            <div className="t08">
                                <div className="align">
                                    <button className="btn small" onClick={popupOpen}>상세보기</button>
                                    <button className="btn small">정산완료</button>
                                    <button className="btn small off">지급보류</button>
                                    <button className="btn small off">정산대기</button>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* <Paginater pageNumber={10} totalPageCount={20} /> */}

                    <div className="fin ifMobile">
                        <div className="float_left">
                            <button type="submit" className="btn medium">전체선택</button>
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

        {/* popup-상세보기 */}
        < div id="Popup01" className="popup_bg_full" >
            <div className="in_txt master_popup">
                <a className="close_icon" onClick={popupClose}>
                    <i className="flaticon-multiply"></i>
                </a>
                <div className="page">
                    <h3>예약 상세정보</h3>
                    <div className="info_txt">
                        <span className="g-number">상품번호: PK-034982</span>
                        <span className="goods-state1 st01">확정여부: <i>출발확정</i></span>{/* 출발확정/출발미정 */}
                        <span className="r-day">출발일: 2020.08.26</span>
                        <span className="goods-state2">상품상태: 예약진행중</span>
                        <button className="btn"><i className="flaticon-print mr5"></i>프린터</button>
                        <button className="btn mr5"><i className="flaticon-download mr5"></i>엑셀저장</button>
                    </div>

                    <div className="info_table goodsinfo">
                        <div className="tr">
                            <div className="top04">
                                <div className="img" style={{ backgroundImage: 'url(/img/store_01.jpg)' }} ></div>
                                <div className="info">
                                    <span className="ct">문화</span>
                                    <strong className="title">떠나요~거제도~!!!!!!!!!!!!!!!!</strong>
                                    <div className="txt">
                                        <div className="subTitle">대가야의 역사를 체험하고 느껴보는 여행</div>
                                        <ul className="tag">
                                            <li>#거제도</li>
                                            <li>#1박2일</li>
                                            <li>#꽃나들이</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div className="top05">
                                <div className="align">
                                    <span className="s-day">출발일: 2020.9.9</span>
                                    <span className="where">출발장소: 부산대학교 앞</span>
                                    <span className="people">인원: 40명 (성인30/유아10/소아0)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="info_page">
                        <div className="left_div">
                            <h4>결제 정보</h4>
                            <div className="info_table w50">
                                <div className="tr">
                                    <div className="th01">
                                        결제건수
                                </div>
                                    <div className="td01">
                                        <span>43</span>
                                    </div>
                                    <div className="th02">
                                        결제금액
                                </div>
                                    <div className="td02">
                                        <span className="blue_font">43,444,3333원</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="right_div">
                            <h4>환불 정보</h4>
                            <div className="info_table w50">
                                <div className="tr">
                                    <div className="th01">
                                        환불건수
                                    </div>
                                    <div className="td01">
                                        <span>3</span>
                                    </div>
                                    <div className="th02">
                                        환불금액
                                </div>
                                    <div className="td02">
                                        <span className="red_font">- 45,433,000원</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="info_page">
                        <div className="full_div">
                            <h4>
                                파트너 정보
                        </h4>
                            <div className="info_table partnerinfo">
                                <div className="tr">
                                    <div className="th01">
                                        파트너명
                                    </div>
                                    <div className="td01">
                                        <span>푸른여행</span>
                                    </div>
                                    <div className="th02">
                                        아이디
                                </div>
                                    <div className="td02">
                                        <span>zozozo@gmail.com</span>
                                    </div>
                                    <div className="th03">
                                        담당자
                                </div>
                                    <div className="td03">
                                        <span>김하나 (<a href="tel:">010-3333-3333</a> )</span>
                                    </div>
                                    <div className="th04">
                                        정산계좌
                                </div>
                                    <div className="td04">
                                        <span>(부산은행)2324-23423-234 / 김호인</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="info_page">
                        <div className="full_div">
                            <h4>
                                예약자 정보
                            </h4>
                            <div className="info_table peoplelist">
                                <div className="top_info">
                                    <span className="tt">예약인원</span>
                                    <span>총 40명 ( 성인30 / 소아10 / 유아0 )</span>
                                    <span className="float_right">예약완료 38명 / 예약취소 10명 / 예약대기 2명</span>
                                </div>
                                <div className="tr">

                                    <div className="pp01">
                                        1
                                </div>
                                    <div className="th">예약번호</div>
                                    <div className="td"><span>R-83729</span></div>
                                    <div className="th">예약상태</div>
                                    <div className="td"><span className="blue_font">예약완료</span></div>
                                    <div className="th">예약자명</div>
                                    <div className="td"><span>홍언니</span></div>
                                    <div className="th">연락처</div>
                                    <div className="td"><a href="tel:010-0000-0000">010-0000-0000</a></div>
                                    <div className="th">성별</div>
                                    <div className="td"><span>여성</span></div>
                                    <div className="th">나이</div>
                                    <div className="td"><span>1988-03-03 (만 32세)</span></div>
                                    <div className="th">결제금액</div>
                                    <div className="td"><span>30,000원</span></div>
                                    <div className="th">메모</div>
                                    <div className="td"><span>------------------------------------------------</span></div>
                                </div>

                                <div className="tr end">
                                    <div className="sum">
                                        <ul>
                                            <li><span>합계금액</span>300,000원</li>
                                            <li><span>수수료</span>(-)34,058원</li>
                                            <li><span>환수금</span>(-)134,058원</li>
                                            <li><span>부가가치세</span>(-)4,058원</li>
                                        </ul>
                                    = 정산금액 : <strong>250,000원</strong>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="info_page">
                        <h4>메모</h4>
                        <div className="write_comment">
                            <div className="comment_layout">
                                <ul className="text_box">
                                    <li>
                                        <div className="txta w100">
                                            <textarea style={{ height: "100px;" }} placeholder="메모는 꼼꼼하게 체크는 정확하게"></textarea>
                                        </div>
                                    </li>
                                    <li className="tr count">0/3000</li>
                                </ul>
                                <div className="text_box_bottom">
                                    <div className="float_left w50">
                                        <span><i className="jandaicon-info2"></i>기존의 메모를 삭제하시면 되돌릴 수 없습니다. 신중하게 입력해 주세요.</span>
                                    </div>
                                    <div className="btn_send float_right"><button className="comment_btn">저장</button> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fin ifMobile">
                        <div className="float_left">
                            <button type="submit" className="btn medium">정산완료</button>
                            <button type="submit" className="btn medium">정산대기</button>
                            <button type="submit" className="btn medium">지급보류</button>
                        </div>
                        <div className="float_right">
                            <button type="submit" className="btn medium">수정하기</button>
                            <button type="submit" className="btn medium">저장하기</button>
                            <Link href=""><a className="btn medium">상품수정 하러가기</a></Link>{/* 상품수정폼 가기 */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </MasterLayout >
};

export default MsReservationB;