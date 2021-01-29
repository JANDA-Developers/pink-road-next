import React from 'react';
import ReservationMaster from '../../../components/reservation/ReservationMaster';
import { ReservationTable } from '../../../components/reservation/ReservationTable';

interface IProp { }
export const MsReservationMain: React.FC<IProp> = () => {
    return <ReservationMaster
        Table={ReservationTable}
        FilterBtn={({ handlers: { checkOnByhand, byhandFilter } }) => <ul className="board_option">
            <li onClick={byhandFilter(undefined)} className={checkOnByhand(undefined)}><a >전체</a></li>
            <li onClick={byhandFilter(false)} className={checkOnByhand(false)}><a >온라인예약</a></li>
            <li onClick={byhandFilter(true)} className={checkOnByhand(true)}><a >수기등록</a></li>
        </ul>}
    />
};

export default MsReservationMain;