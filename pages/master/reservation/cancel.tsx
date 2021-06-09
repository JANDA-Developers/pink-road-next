import React from "react";
import { CancelTable } from "../../../components/reservation/CancelTable";
import ReservationMaster from "../../../components/reservation/ReservationMaster";
import { ALLOW_ADMINS } from "../../../types/const";
import { auth } from "../../../utils/with";

interface IProp {}
export const MsReservationMain: React.FC<IProp> = () => {
    return (
        <ReservationMaster
            Table={CancelTable}
            FilterBtn={({ handlers: { checkOnByhand, byhandFilter } }) => (
                <ul className="board_option">
                    <li
                        onClick={byhandFilter(undefined)}
                        className={checkOnByhand(undefined)}
                    >
                        <a>전체</a>
                    </li>
                    <li
                        onClick={byhandFilter(false)}
                        className={checkOnByhand(false)}
                    >
                        <a>온라인예약</a>
                    </li>
                    <li
                        onClick={byhandFilter(true)}
                        className={checkOnByhand(true)}
                    >
                        <a>수기등록</a>
                    </li>
                </ul>
            )}
        />
    );
};

export default auth(ALLOW_ADMINS)(MsReservationMain);
