import dayjs from 'dayjs';
import React, { useContext, useEffect } from 'react';
import { IPopupBox, IUsePopups } from '../../hook/usePopups';
import popupwindow from '../../utils/popupwindow';
import { IPopupStyle } from '../popupconfig/PopupBox[deprecated]';

interface IPopUp extends IUsePopups {
    popup: IPopupBox
}

const tomorrowStart = dayjs().add(1, "d").startOf("day").toDate();
export const ismobile = typeof window === "undefined" ? false : window.innerWidth < 500;

export const Popup: React.FC<IPopUp> = ({ popups,closePopup, popup, openPopup }) => {
    const closeTill = (closeTill?: Date) => () => {
        closePopup(popup._id, closeTill)
    }
    const withoutCurtain = false

    if (ismobile) {
        const higherThan = popups.filter(_popup => _popup.priority! > popup.priority!)
        const opens = higherThan.filter(popup => popup.isOpen);
        if(opens.length > 0) { 
            return null;
        }
    }

    if (!popup.isOpen) return null
    if (ismobile && !popup.useMobile) return null;
    if (!ismobile && !popup.usePc) return null;

    const hasLink = !!popup.link;

    popup.priority

    const left = popup.style.left;
    const top = popup.style.top;

    const mobileMaxWidth = "90vw"; 
    const mobileMaxHeight = "80vh"; 
    const maxWidth = `calc(100vw - ${left}px)`
    const maxHeight = `calc(100vh - ${top}px)`
    const cursor = hasLink ? "pointer" : "auto";
    const zIndex = 100 * (popup.priority || 1);

    popup.style = {
        ...popup.style,
        maxWidth,
        maxHeight,
        cursor,
        zIndex
    } as IPopupStyle

    if(ismobile) {
        popup.style = {
            ...popup.style,
            maxWidth: mobileMaxWidth,
            maxHeight: mobileMaxHeight,
            cursor,
            zIndex
        } as IPopupStyle
    }

    const handleClick = () => {
        if(popup.link)
        window.open(popup.link,popup.linkBehavior || undefined);
    }

    if(ismobile) {
        return <div className={`JDpopupMobile ${popup.isOpen && "JDpopupMobile--open"}`}>
            <div style={popup.style} className="JDpopupMobile__contents">
                <div dangerouslySetInnerHTML={{ __html: popup.content || "" }} />
            </div>
            <div style={{maxWidth: mobileMaxWidth, width: popup.style.width}} className="JDpopup__mobile-bottomController">
                <div  className="JDpopup__dayCloser" onClick={closeTill(tomorrowStart)}>오늘하루 보지않기</div>
                <div className="JDpopup__close" onClick={closeTill()}>닫기</div>
            </div>
        </div>
    }

    return <div onClick={handleClick} style={popup.style} className={`JDpopup ${popup.isOpen && "JDpopup--open"}`} >
        <div className="JDpopup__box">
            <div className="JDpopup__boxContent">
                <div dangerouslySetInnerHTML={{ __html: popup.content || "" }} />
            </div>
            <div className="JDpopup__bottomController">
                <div  className="JDpopup__dayCloser" onClick={closeTill(tomorrowStart)}>오늘하루 보지않기</div>
                <div className="JDpopup__close" onClick={closeTill()}>닫기</div>
            </div>
        </div>
    </div>;
};
