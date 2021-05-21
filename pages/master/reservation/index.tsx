import React from 'react';
import ReservationMaster from '../../../components/reservation/ReservationMaster';
import { ReservationTable } from '../../../components/reservation/ReservationTable';
import { useCustomCount } from '../../../hook/useCount';
import { BookingStatus } from '../../../types/api';
import { ALLOW_ADMINS } from '../../../types/const';
import { auth } from '../../../utils/with';

interface IProp { }
export const MsReservationMain: React.FC<IProp> = () => {
    const {
        cancelReqBookingCountMaster,
        compeltedBookingCountMaster,
        readyBookingCountMaster,
        cancelBookingCountMaster
    } = useCustomCount(["cancelReqBookingCountMaster", "compeltedBookingCountMaster", "readyBookingCountMaster", "cancelBookingCountMaster"]);

    return <ReservationMaster
        Table={ReservationTable}
        FilterBtn={({ handlers: { checkOnByhand, byhandFilter, filterByStatus, filterByReq, checkOnByStatus, checkOnByReq } }) => <ul className="board_option">
            <li onClick={byhandFilter(undefined)} className={checkOnByhand(undefined)}><a>전체</a></li>
            <li onClick={byhandFilter(false)} className={checkOnByhand(false)}><a>온라인예약</a></li>
            <li onClick={byhandFilter(true)} className={checkOnByhand(true)}><a>수기등록</a></li>
            <li onClick={filterByStatus(BookingStatus.READY)} className={checkOnByStatus(BookingStatus.READY)}><a>대기예약<strong>{readyBookingCountMaster}</strong></a></li>
            <li onClick={filterByStatus(BookingStatus.COMPLETE)} className={checkOnByStatus(BookingStatus.COMPLETE)}><a>완료예약<strong>{compeltedBookingCountMaster}</strong></a> </li>
            <li onClick={filterByStatus(BookingStatus.CANCEL)} className={checkOnByStatus(BookingStatus.CANCEL)}><a>취소예약<strong>{cancelBookingCountMaster}</strong></a></li>
            <li onClick={filterByReq(true)} className={checkOnByReq(true)}><a>취소요청<strong>{cancelReqBookingCountMaster}</strong></a></li>
        </ul>}
/>
};

export default auth(ALLOW_ADMINS)(MsReservationMain);