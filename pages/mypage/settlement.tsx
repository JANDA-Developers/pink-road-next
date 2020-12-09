import CalendarIcon from 'components/common/icon/CalendarIcon';
import { Paginater } from 'components/common/Paginator';
import { PurChasedItem } from 'components/mypage/PurchasedItem';
import dayjs from 'dayjs';
import { MypageLayout } from 'layout/MypageLayout';
import React, { useContext } from 'react';
import SortSelect from '../../components/common/SortMethod';
import { ViewCount } from '../../components/common/ViewCount';
import { LastMonthBooking } from '../../components/static/LastMonthBooking';
import { ThisMonthBooking } from '../../components/static/ThisMonthBooking';
import { ThisMonthPayAmt } from '../../components/static/ThisMonthPayAmt';
import { IuseBookingList, useBookingList } from '../../hook/useBookingList';
import { usePaymentList } from '../../hook/usePayment';
import { useProductList } from '../../hook/useProduct';
import { UserRole } from '../../types/api';
import { ALLOW_SELLERS } from '../../types/const';
import { autoHypenPhone } from '../../utils/formatter';
import { auth } from '../../utils/with';
import PageLoading from '../Loading';
import { AppContext } from '../_app';

interface IProp {
    context: IMySettlementWrapContext
}

export const MySettlement: React.FC<IProp> = ({ context }) => {
    const { items, filter, getLoading, pageInfo, setFilter, setPage, setSort, setViewCount, sort, viewCount } = context;

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
                            <div><strong><LastMonthBooking /></strong>건</div>
                        </li>
                        <li>
                            <strong>이번달 예약</strong>
                            <div><strong><ThisMonthBooking /></strong>건</div>
                        </li>
                        <li>
                            <strong>이번달 정산 예정금</strong>
                            <div><strong><ThisMonthPayAmt /></strong>원</div>
                        </li>
                        <li>
                            <strong>이번달 취소 환수금</strong>
                            <div><strong>55,555</strong>원</div>
                        </li>
                    </ul>
                </div>
                <div className="con_top">
                    <h6>상세검색</h6>
                    <div className="search_box">
                        <div className="jul2">
                            <div className="title">상태</div>
                            <div className="text">
                                <span className="check on">전체</span>
                                <span className="check">예약완료</span>
                                <span className="check">예약취소</span>
                            </div>
                        </div>
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
                                        <img src="/img/svg/search_icon.svg" alt="검색아이콘" />
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
                                총 <strong>22,222</strong>개
                            </div>
                            <div className="right_div">
                                <SortSelect onChange={setSort} sort={sort} />
                                <ViewCount value={viewCount} onChange={setViewCount} />
                            </div>
                        </div>
                        <div className="fuction_list_mini ln08">
                            <div className="thead">
                                <div className="th01"><input type="checkbox" /></div>
                                <div className="th02">상품코드</div>
                                <div className="th03">상품명</div>
                                <div className="th04">예약자/연락처</div>
                                <div className="th05">예약날짜</div>
                                <div className="th06">예약금</div>
                                <div className="th07">상태</div>
                                <div className="th08">상세보기</div>
                            </div>
                            <div className="tbody">
                                <ul>
                                    {items.map(item =>
                                        <li>
                                            <div className="th01"><input type="checkbox" /></div>
                                            <div className="th02">{item.code}</div>
                                            <div className="th03">{item.product.title}</div>
                                            <div className="th04">{item.name}<br />{autoHypenPhone(item.phoneNumber)}</div>
                                            <div className="th05">{dayjs(item.createdAt).format("YYYY.MM.DD")}</div>
                                            <div className="th06">{item}</div>
                                            <div className="th07"><strong className="ok">예약완료</strong></div>
                                            <div className="th08"><i className="btn">상세보기</i></div>
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

                        <div className="in_fin">
                            <div className="float_left">
                                <button type="submit" className="btn strong">정산 계산하기</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="Popup01" className="popup_bg_full" style={{ display: 'none' }}>
            <a className="close_icon">
                <i className="flaticon-multiply"></i>
            </a>
            <div className="in_txt statement_popup">
                <h4>정산 계산</h4>
                <div className="alignment">
                    <div className="left_div"><span className="infotxt"><i>2020.10.1 ~ 2020.10.30 예약</i>이 총 <strong>5</strong>건</span></div>
                </div>
                <div className="fuction_list_mini">
                    <div className="thead">
                        <div className="th02">상품코드</div>
                        <div className="th03">상품명</div>
                        <div className="th04">예약자</div>
                        <div className="th05">예약날짜</div>
                        <div className="th06">예약금</div>
                        <div className="th07">상태</div>
                    </div>
                    <div className="tbody">
                        <ul>
                            <li>
                                <div className="th02">GUIDE-01230</div>
                                <div className="th03">제주도로 떠나요~ </div>
                                <div className="th04">홍나리</div>
                                <div className="th05">2020.02.02</div>
                                <div className="th06">50,000</div>
                                <div className="th07"><strong className="ok">예약완료</strong></div>
                            </li>
                            <li>
                                <div className="th02">GUIDE-01230</div>
                                <div className="th03">제주도로 떠나요~ </div>
                                <div className="th04">홍나리</div>
                                <div className="th05">2020.02.02</div>
                                <div className="th06">50,000</div>
                                <div className="th07"><strong className="ok">예약완료</strong></div>
                            </li>
                            <li>
                                <div className="th02">GUIDE-01230</div>
                                <div className="th03">제주도로 떠나요~ </div>
                                <div className="th04">홍나리</div>
                                <div className="th05">2020.02.02</div>
                                <div className="th06">50,000</div>
                                <div className="th07"><strong className="ok">예약완료</strong></div>
                            </li>
                            <li>
                                <div className="th02">GUIDE-01230</div>
                                <div className="th03">제주도로 떠나요~ </div>
                                <div className="th04">홍나리</div>
                                <div className="th05">2020.02.02</div>
                                <div className="th06">50,000</div>
                                <div className="th07"><strong className="ok">예약완료</strong></div>
                            </li>
                            <li>
                                <div className="th02">GUIDE-01230</div>
                                <div className="th03">제주도로 떠나요~ </div>
                                <div className="th04">홍나리</div>
                                <div className="th05">2020.02.02</div>
                                <div className="th06">50,000</div>
                                <div className="th07"><strong className="ok">예약완료</strong></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="alignment ">
                    <div className="left_div"><span className="infotxt"><i>예약취소 환수금</i>이 총 <strong>2</strong>건</span></div>
                </div>
                <div className="fuction_list_mini">
                    <div className="thead">
                        <div className="th02">상품코드</div>
                        <div className="th03">상품명</div>
                        <div className="th04">예약자</div>
                        <div className="th05">예약날짜</div>
                        <div className="th06">예약금</div>
                        <div className="th07">상태</div>
                    </div>
                    <div className="tbody">
                        <ul>
                            <li>
                                <div className="th02">GUIDE-01230</div>
                                <div className="th03">제주도로 떠나요~ </div>
                                <div className="th04">홍나리</div>
                                <div className="th05">2020.02.02</div>
                                <div className="th06">50,000</div>
                                <div className="th07"><strong className="no">예약취소</strong></div>
                            </li>
                            <li>
                                <div className="th02">GUIDE-01230</div>
                                <div className="th03">제주도로 떠나요~ </div>
                                <div className="th04">홍나리</div>
                                <div className="th05">2020.02.02</div>
                                <div className="th06">50,000</div>
                                <div className="th07"><strong className="no">예약취소</strong></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sum_div mt50">
                    <ul className="first_ul">
                        <li>
                            <div className="title"><strong>실 판매금액</strong> : </div>
                            <div className="body">
                                <div>20,000,349원</div>
                            </div>
                        </li>
                        <li>
                            <div className="title"><strong>수수료공제(5%)</strong> : </div>
                            <div className="body">

                                <div>(-) 1,000,017원</div>
                            </div>
                        </li>
                        <li>
                            <div className="title"><strong>세금공제(3.3%)</strong> : </div>
                            <div className="body">

                                <div>(-) 660,011원</div>
                            </div>
                        </li>
                        <li>
                            <div className="title"><strong>기타 공제금</strong> : </div>
                            <div className="body">
                                <div>(-) 0원</div>
                            </div>
                        </li>
                        <li>
                            <div className="title"><strong>예약취소 환급금</strong> : </div>
                            <div className="body">
                                <div>(-) 20원</div>
                            </div>
                        </li>
                    </ul>
                    <ul className="last_ul">
                        <li>
                            <div><i>=</i>총 정산 예상금 : <strong>18,340,321</strong>원</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="fade" className="fade" style={{ display: 'block;' }}></div>

    </MypageLayout>
};


interface IMySettlementWrapContext extends IuseBookingList {
    // paymentListHook: IusePaymentList
}

export const MySettlementWrap = () => {
    const { myProfile } = useContext(AppContext);
    const _id = myProfile?._id;
    const paymentListHook = usePaymentList();
    const bookingListHook = useBookingList({
        initialFilter: {
            seller_eq: _id
        }
    })

    const context = bookingListHook;
    if (context.getLoading) return <PageLoading />

    return <MySettlement context={context} />
}

export default auth(MySettlementWrap)(ALLOW_SELLERS);
