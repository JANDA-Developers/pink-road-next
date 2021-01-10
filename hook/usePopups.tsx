import ReactDOMServer from 'react-dom/server';
import { useState } from "react";
import { IPopup } from "../components/popupconfig/PopupBox"
import { BG } from '../types/const';


const getOpenParam = (left: number, top: number, width: number, height: number) => `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=${width},height=${height},left=${left},top=${top}`

export const usePopups = (defaultViews: IPopup[]) => {
    const [views, setViews] = useState(defaultViews);


    const getMarkUp = (view: IPopup) => <html>
        <head>
            <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
            <div style={{ ...BG(view.backgroundImage || ""), backgroundSize: "cover", height: "100%" }}>
                {view.content};
            </div>
        </body>
    </html>

    const open = (view: IPopup) => {
        const { left, top, height, width } = view;
        const param = getOpenParam(left, top, width, height);
        const popup = window.open('', view.name, param)
        if (!popup) throw Error("can not open popup");
        popup.document.title = view.name;
        popup.document.body.innerHTML = ReactDOMServer.renderToStaticMarkup(getMarkUp(view));

    }

    const openAll = () => {
        views.forEach((view) => {
            open(view);
        })
    }

    return { views, setViews, openAll, open }
}