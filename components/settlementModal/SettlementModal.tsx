import React, { useState } from 'react';
import { useBookingCancel } from '../../hook/useBooking';
import { useFeePolicy } from '../../hook/useFeePolicy';
import { useSettlementFindById, useSettlementsRequest } from '../../hook/useSettlement';
import { BookingStatus, SettlementStatus } from '../../types/api';
import { bookingStatus, feePresent } from '../../utils/enumToKr';
import { autoComma } from '../../utils/formatter';
import { closeModal } from '../../utils/popUp';
import { yyyymmdd } from '../../utils/yyyymmdd';

interface IProp {
    settlementId: string;
}

export const SettlementModal: React.FC<IProp> = ({ settlementId }) => {
    const { item: settlement } = useSettlementFindById(settlementId);
    const [cancelBooking] = useBookingCancel()
    const [settlementRquest] = useSettlementsRequest({
        onCompleted: ({ SettlementRequest }) => {
            if (SettlementRequest.ok) alert("정산신청이 완료 되었습니다.");
        }
    });
    const [reason, setReason] = useState("");


    if (!settlement) return <div />
    const { product, bankFee, cancelReturnPrice, cardFee, acceptDate, cancelDate, totalFee, totalPrice, payReqPrice, jandaFee, niceCardFee, jandaCardFee, cardPrice, requestDate, bankPrice, additionFeeSum } = settlement;
    const { bookings, createdAt, startDate } = product;
    const canceldBooking = bookings.filter(bk => bk.status === BookingStatus.CANCEL);
    const { data: policy } = useFeePolicy();

    const handleCancelBooking = (bookingId: string) => {
        confirm("정말로 예약을 취소 하시겠습니까?")
        cancelBooking({
            variables: {
                bookingId,
                reason
            }
        })
    }

    const handleSettleRequest = () => {
        if (settlement.status !== SettlementStatus.REQUEST) {
            alert("현 정산은 이미 신청 상태입니다.");
            return;
        }
        settlementRquest({
            variables: {
                params: [{ price: 0, returnTargetId: "" }],
                settlementId: settlement._id
            }
        })
    }

    const bookingStatusColor = (status?: BookingStatus | null) => {
        if (status === BookingStatus.CANCEL) return "no"
        if (status === BookingStatus.COMPLETE) return "ok"
        if (status === BookingStatus.READY) return ""
        return "";
    }


    return <div id="SettlementModal" className="popup_bg_full">
        {settlement &&
            <div className="in_txt statement_popup">
                <a className="close_icon" onClick={closeModal("#SettlementModal")}>
                    <i className="flaticon-multiply"></i>
                </a>
                <div className="page">
                    <h3>정산계산</h3>
                    <div className="alignment">
                        <div className="left_div"><span className="infotxt"><i>{yyyymmdd(createdAt)} ~ {yyyymmdd(startDate)} 예약</i>이 총 <strong>{bookings.length}</strong>건</span></div>
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
                                        <div className="th07"><strong className={bookingStatusColor(bk.status)}>{bookingStatus(bk.status)}</strong>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="alignment ">
                        <div className="left_div"><span className="infotxt"><i>예약취소 환수금</i>이 총 <strong>{canceldBooking.length}</strong>건</span></div>
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
                                        <div className="th07">
                                            <strong className={bookingStatusColor(cb.status)}>{bookingStatus(cb.status)}</strong>
                                        </div>
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
                                    <div>{settlement.totalPrice}원</div>
                                </div>
                            </li>
                            <li>
                                <div className="title"><strong>카드수수료</strong> : </div>
                                <div className="body">
                                    <div>(-) {autoComma(settlement.cardFee)}원</div>
                                </div>
                            </li>
                            {policy?.addtionalFees.map((addFee, i) =>
                                <li key={"FeePolicy" + i}>
                                    <div className="title"><strong>{addFee.feeName}</strong> : </div>
                                    <div className="body">
                                        <div>(-) {feePresent(addFee)}원</div>
                                    </div>
                                </li>
                            )}
                        </ul>
                        <ul className="last_ul">
                            <li>
                                <div><i>=</i>총 정산 예상금 : <strong>{autoComma(settlement.settlementPrice)}</strong>원</div>
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
        }
    </div>
};
