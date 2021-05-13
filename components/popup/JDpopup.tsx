import React from "react";
import { IUsePopups } from "../../hook/usePopups";
import { MobilePopup } from "./MobilePopup";
import { JDPCpopup } from "./PCPopup";

interface IProp {
    popupHook: IUsePopups;
}

export const JDpopup: React.FC<IProp> = ({ popupHook }) => {
    return (
        <div>
            {popupHook.popups.map((pop) => (
                <JDPCpopup {...popupHook} popup={pop} key={pop._id} />
            ))}
            <MobilePopup {...popupHook} />
        </div>
    );
};
