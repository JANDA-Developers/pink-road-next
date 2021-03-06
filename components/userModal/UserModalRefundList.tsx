import React from 'react';
import { useBookingList } from '../../hook/useBooking';
import { BookingStatus } from '../../types/api';
import { autoComma } from '../../utils/formatter';
import { yyyymmdd } from '../../utils/yyyymmdd';
import { Paginater } from '../common/Paginator';

interface IProp {
    id: string;
}

export const UserModalRefundList: React.FC<IProp> = ({ id }) => {
    const { items: bookings, pageInfo, setPage } = useBookingList({
        initialFilter: {
            OR: [{ seller_eq: id }, { booker_eq: id }],
            status_eq: BookingStatus.CANCEL
        },
        initialViewCount: 4
    })
    return <div className="info_table reservationlist">
        {bookings.map(bk =>
            <div className="tr">
                <div className="re01">
                    예약번호
            <a href="R-398234">{bk.code}</a>
                </div>
                <div className="re02">
                    상품
            </div>
                <div className="re03">
                    <a href="/">[{bk.product.code}] {bk.product.title} </a>
                </div>
                <div className="re04">
                    예약일/결제일
            </div>
                <div className="re05">
                    <span>{yyyymmdd(bk.createdAt)}/{yyyymmdd(bk.payment?.createdAt)}</span>
                </div>
                <div className="re06">
                    인원
            </div>
                <div className="re07">
                    <span>{bk.totalCount}명</span>
                </div>
                <div className="re08">
                    금액
            </div>
                <div className="re09">
                    <span>{autoComma(bk.bookingPrice)}원</span>
                </div>
            </div>
        )}
        <Paginater setPage={setPage} pageInfo={pageInfo} />
    </div>;
};
