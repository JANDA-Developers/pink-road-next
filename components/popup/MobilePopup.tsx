import React from "react";
import Slider from "react-slick";
import { IUsePopups } from "../../hook/usePopups";
import isEmpty from "../../utils/isEmpty";
import { MobilePopupSlide } from "./MobilePopupSlide";
import { ismobile, tomorrowStart } from "./PCPopup";

interface IPopUpProps extends IUsePopups {}

export const MobilePopup: React.FC<IPopUpProps> = ({ popups, closePopup }) => {
    const closeAll = (time?: Date) => () => {
        targetPopups.forEach((tp) => {
            closePopup(tp._id, time);
        });
    };
    const targetPopups = popups
        .sort((popA, popB) => popA.priority - popB.priority)
        .filter((popup) => popup.isOpen && popup.useMobile);

    if (!ismobile) return null;
    if (isEmpty(targetPopups)) return null;
    return (
        <div className="JDpopupMobile">
            <div className="JDpopupMobile__contents">
                <Slider>
                    {targetPopups.map((popup) => (
                        <div className="JDpopupMobile__slide">
                            <MobilePopupSlide
                                className="JDpopupMobile__slideInner"
                                {...popup}
                                key={popup._id + "popupSlide"}
                                dangerouslySetInnerHTML={{
                                    __html: popup.content || "",
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="JDpopupMobile__bottomController">
                <div
                    className="JDpopupMobile__dayCloser"
                    onClick={closeAll(tomorrowStart)}
                >
                    오늘하루 보지않기
                </div>
                <div className="JDpopupMobile__close" onClick={closeAll()}>
                    닫기
                </div>
            </div>
        </div>
    );
};
