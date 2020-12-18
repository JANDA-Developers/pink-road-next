import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';
import { useBookingList } from '../../hook/useBooking';
import PaymentLayout from '../../layout/PaymentLayout';
import PageLoading from '../../pages/Loading';
import { autoComma, card_hypen } from '../../utils/formatter';
import { getFromUrl } from '../../utils/url';

interface IProp { }

export const JDpayCompleteUI: React.FC<IProp> = () => {
    const groupCode = getFromUrl("groupCode");
    const { items, getLoading } = useBookingList({
        initialFilter: {
            groupCode_eq: groupCode
        }
    })

    if (getLoading) return <PageLoading />
    return <PaymentLayout>
        <div className="payment_box">
            <div className="head">
                <h2><i>예약</i>이 완료되었습니다.</h2>
            </div>
            {items.map(booking =>
                <div key={booking._id} className="table">
                    <div className="payment_tr">
                        <div className="payemnt_th">
                            예약상품
                        </div>
                        <div className="payemnt_td">
                            [{booking.product.code}]
                            {booking.product.title}
                        </div>
                    </div>
                    <div className="tr">
                        <div className="th">
                            예약번호
                        </div>
                        <div className="payemnt_td">
                            {booking.code}
                        </div>
                    </div>
                    <div className="tr">
                        <div className="th">
                            결제정보
                </div>
                        <div className="payemnt_td">
                            <span>결제수단</span>
                            <span>{booking.payment?.PayMethod}{` `}{card_hypen(booking.payment?.CardNo || "")}</span>
                            <span>일시불</span>
                            <span>승인일시:{dayjs(booking.payment?.AuthDate || undefined).format("YYYY.MM.DD")}</span>
                        </div>
                    </div>
                    <div className="tr">
                        <div className="th">
                            결제금액
                </div>
                        <div className="payemnt_td">
                            <strong>{autoComma(booking.payment?.Amt || 0)}원</strong>
                        </div>
                    </div>
                </div>
            )}
            <div className="btn_box">
                <Link href="/mypage/purchase"><a className="btn">구매내역 확인하기</a></Link>
                <Link href="/"><a className="btn">홈으로</a></Link>
            </div>
        </div>
    </PaymentLayout>
};
