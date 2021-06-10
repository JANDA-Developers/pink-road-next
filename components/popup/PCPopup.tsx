import dayjs from "dayjs";
import React, { useContext, useEffect, useRef } from "react";
import { IPopupBox, IUsePopups } from "../../hook/usePopups";
import { dragElement } from "../../utils/draggable";
import popupwindow from "../../utils/popupwindow";
import { Draggable } from "../draggable/Draggable";

interface IPopUp extends IUsePopups {
    popup: IPopupBox;
}

export const tomorrowStart = dayjs().add(1, "d").startOf("day").toDate();
export const ismobile =
    typeof window === "undefined" ? false : window.innerWidth < 500;

export const JDPCpopup: React.FC<IPopUp> = ({
    popups,
    closePopup,
    popup,
    openPopup,
}) => {
    const closeTill = (closeTill?: Date) => () => {
        closePopup(popup._id, closeTill);
    };
    const withoutCurtain = false;

    if (!popup.isOpen) return null;
    if (ismobile) return null;
    if (!popup.usePc) return null;

    const hasLink = !!popup.link;

    const left = popup.style.left;
    const top = popup.style.top;

    const maxWidth = `calc(100vw - ${left}px)`;
    const maxHeight = `calc(100vh - ${top}px)`;
    const cursor = hasLink ? "pointer" : "auto";
    const zIndex = 100 * (popup.priority || 1);

    popup.style = {
        ...popup.style,
        maxWidth,
        maxHeight,
        cursor,
        zIndex,
    };

    const handleClick = () => {
        if (popup.link)
            window.open(popup.link, popup.linkBehavior || undefined);
    };

    return (
        <Draggable
            defaultPos={{
                x: left,
                y: top,
            }}
            Handler={(handleMouseDown) => (
                <div
                    className="JDpopup__handler"
                    onMouseDown={handleMouseDown}
                ></div>
            )}
            id={popup._id + "popup"}
            onClick={handleClick}
            className={`JDpopup ${popup.isOpen && "JDpopup--open"}`}
        >
            <div className="JDpopup__box">
                <div style={popup.style} className="JDpopup__boxContent">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: popup.content || "",
                        }}
                    />
                </div>
                <div id="handler" className="JDpopup__bottomController">
                    <div
                        className="JDpopup__dayCloser"
                        onClick={closeTill(tomorrowStart)}
                    >
                        오늘하루 보지않기
                    </div>
                    <div className="JDpopup__close" onClick={closeTill()}>
                        닫기
                    </div>
                </div>
            </div>
        </Draggable>
    );
};
