import { useState } from "react";
import { IPopup } from "../components/popupconfig/PopupBox"

export const usePopupConfig = (defaultViews:IPopup[]) => {
    const [views, setViews] = useState(defaultViews);
    return {views,setViews}
}