import React from 'react';
import { useBookingCancel } from '../../hook/useBooking';
import { useSettlementFindById, useSettlementsRequest } from '../../hook/useSettlement';
import { BookingStatus } from '../../types/api';
import { autoComma } from '../../utils/formatter';
import { closeModal } from '../../utils/popUp';
import { yyyymmdd } from '../../utils/yyyymmdd';

interface IProp {
    targetId: string;
}

export const SettlementPopup: React.FC<IProp> = ({ targetId }) => {

    const { item: settlement } = useSettlementFindById(targetId);
    const [cancelBooking] = useBookingCancel()
    const [settlemntRquest] = useSettlementsRequest();

    if (!settlement) return <div />

    const { product, bankFee,cancelReturnPrice,cardFee,acceptDate,cancelDate,storeFee,totalFee,totalPrice,payReqPrice,jandaFee,niceCardFee,jandaCardFee,cardPrice,requestDate,bankPrice,additionFeeSum } = settlement;
    const { bookings } = product;
    const canceldBooking = bookings.filter(bk => bk.status === BookingStatus.CANCEL || bk.status ==== BookingStatus.CANCEL_COMPLETED);



    const handleCancelBooking = (bookingId:string) => {
        cancelBooking({variables:{
            bookingId,
            reason: 
        }})
    }

    const handleSettleRequest = () => {
        settlemntRquest({
            variables: {
                params: [{price:,returnTargetId:}],
                settlementId: settlement._id 
            }
        })

    }

    return <div id="SettlementModal" className="popup_bg_full">
        <div className="in_txt statement_popup">
            <a className="close_icon" onClick={closeModal("#SettlementModal")}>
                <i className="flaticon-multiply"></i>
            </a>
            <div className="page">
                <h3>정산계산</h3>
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
                            {bookings.map(bk =>
                                <li key={bk._id}>
                                    <div className="th02">{bk.code}</div>
                                    <div className="th03">{product.title}</div>
                                    <div className="th04">{bk.name}</div>
                                    <div className="th05">{yyyymmdd(bk.createdAt)}</div>
                                    <div className="th06">{autoComma(bk.bookingPrice)}원</div>
                                    <div className="th07"><strong className="ok">{bookingStatus(bk.status)}</strong></div>
                                </li>
                            )}
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
                            {canceldBooking.map(cb =>
                                <li key={cb._id + "cancel"}>
                                    <div className="th02">{cb.code}</div>
                                    <div className="th03">{product.title} </div>
                                    <div className="th04">{cb.name}</div>
                                    <div className="th05">{yyyymmdd(cb.createdAt)}</div>
                                    <div className="th06">{cb.bookingPrice}원</div>
                                    <div onClick={handleCancelBooking} className="th07"><strong className="no">예약취소</strong></div>
                                </li>
                            )}
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
                <div className="in_fin mt30">
                    <div className="float_left">
                    </div>
                    <div className="float_right">
                        <button onClick={handleSettleRequest} type="submit" className="btn strong">정산 신청하기</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
};
