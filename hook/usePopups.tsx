import ReactDOMServer from 'react-dom/server';
import { useReducer, useState } from "react";
import { IPopupStyle } from "../components/popupconfig/PopupBox"
import { BG } from '../types/const';
import { Fmodal } from '../types/api';
import { Ipopup, ISet } from '../types/interface';



export const covertPer = (parent: number, px: number) => px / parent * 100
export const covertPx = (parent: number, per: number) => per / 100 * parent

interface Iintegrated extends IPopupStyle {
    perWidth: number;
    perHeight: number;
    perTop: number;
    perLeft: number;
}

const getOpenParam = (left: number, top: number, width: number, height: number) => `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=${width},height=${height},left=${left},top=${top}`




export interface IUsePopups extends ReturnType<typeof usePopups> { }
//뭐가 필요한지 알았으니 구조에 대해서 다시 생각해 봐야겠다.
export const usePopups = (defaultModals: Ipopup[], wrapperId: string) => {
    const [popups, _setPopups] = useState<Fmodal[]>(defaultModals)
    const [selectedIndex, setSelcetedIndex] = useState<number>(0);
    const [hideIds, setHideIds] = useState<string[]>([]);
    const selectedPopup = popups[selectedIndex] || undefined;

    const setPopups = (pp: any) => {
        _setPopups(pp);
    }

    const changeToPercentage = (view: IPopupStyle) => {
        const { offsetWidth, offsetHeight } = document.getElementById(wrapperId)!;
        const perWidth = covertPer(offsetWidth, view.width)
        const perLeft = covertPer(offsetWidth, view.left)
        const perHeight = covertPer(offsetHeight, view.height)
        const perTop = covertPer(offsetHeight, view.top)

        return { perWidth, perHeight, perTop, perLeft }
    }

    const changeAllToPercentage = () => {
        const result = popups.map(popup => changeToPercentage(popup.style));
        const integratedInfo = popups.map((v, i) => ({ ...v, ...result[i] }))
        return integratedInfo;
    }

    const getMarkUp = (popup: Ipopup) => <html>
        <head>
            <title>{popup.title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
            <link rel="stylesheet" href="http://localhost:3000/popup.css" />
        </head>
        <body>
            <div className="ck-content" dangerouslySetInnerHTML={{ __html: popup.content || "" }} style={{ ...BG(popup.style.backgroundImage || ""), backgroundSize: "cover", height: "100%" }} />
        </body>
    </html>

    const view = (popup: Fmodal) => {
        const hides = hideIds.filter(id => id !== popup._id);
        setHideIds([...hides])
    }

    const hide = (popup: Fmodal) => {
        hideIds.push(popup._id);
        setHideIds([...hideIds]);
    }

    const handleHideToggle = (popup: Fmodal) => () => {

        if (hideIds.includes(popup._id)) {
            view(popup);
        } else {
            hide(popup);
        }
    }



    const openPercentage = (popup: Ipopup) => {
        const { perHeight, perLeft, perTop, perWidth } = changeToPercentage(popup.style);
        const w = window.screen.availWidth * perWidth / 100;
        const h = window.screen.availHeight * perHeight / 100;
        const l = window.screen.availWidth * perLeft / 100;
        const t = window.screen.availHeight * perTop / 100;


        const param = getOpenParam(l, t, w, h);
        open(popup, param);
    }

    const openAllPecentage = () => {
        popups.forEach(modal => {
            openPercentage(modal);
        })
    }

    const open = (modal: Ipopup, openParam: string) => {
        const popup = window.open(undefined, modal.title, openParam)
        if (!popup) throw Error("can not open popup");
        popup.document.title = modal.title || "popup";
        popup.document.body.innerHTML = ReactDOMServer.renderToStaticMarkup(getMarkUp(modal));
    }


    const openAll = () => {
        popups.forEach((modal) => {
            const { left, top, height, width } = modal.style as IPopupStyle;
            const param = getOpenParam(left, top, width, height);
            open(modal, param);
        })
    }

    return { hideIds, setHideIds, handleHideToggle, selectedIndex, selectedPopup, setSelcetedIndex, popups, setPopups, openAll, open, changeToPercentage, openAllPecentage, openPercentage }
}