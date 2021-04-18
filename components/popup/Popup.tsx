import dayjs from 'dayjs';
import React, { useContext, useEffect } from 'react';
import { IPopupBox, IUsePopups } from '../../hook/usePopups';

interface IPopUp extends IUsePopups {
    popup: IPopupBox
}

//리팩토링중!!
export const Popup: React.FC<IPopUp> = ({ closePopup, popup, openPopup }) => {

    const handleClose = (notToday: boolean) => () => {
        closePopup(popup._id, notToday ? dayjs().add(1, "d").set("h", 0).toDate() : undefined)
    }

    const withoutCurtain = false
    const mobileUse = false
    const pcUse = false

    const ismobile = typeof window === "undefined" ? false : window.innerWidth < 500;

    useEffect(()=>{
        openPopup(popup);
    },[])

    if (ismobile && !mobileUse) return null;
    if (!ismobile && !pcUse) return null;

    return <div className={`JDpopup ${popup.isOpen && "JDpopup--open"}`} >
        <div style={popup.style} className="JDpopup__box">
            <div className="JDpopup__boxContent">
                <p dangerouslySetInnerHTML={{ __html: popup.content || "" }} />
                <a className="JDpopup__linker" href={popup.link || undefined} target={popup.linkBehavior as string} />
            </div>
            <div className="JDpopup__bottomController">
                <div className="JDpopup__dayCloser" onClick={handleClose(true)}>오늘하루 보지않기</div>
                <div className="JDpopup__close" onClick={handleClose(false)}>닫기</div>
            </div>
        </div>
    </div>;
};
