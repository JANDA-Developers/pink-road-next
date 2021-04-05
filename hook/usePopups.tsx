import { useState } from "react";
import { Ipopup } from '../types/interface';
import dayjs from 'dayjs';
import { Storage } from '../utils/Storage';

export interface IPopupBox extends Ipopup {
    isOpen?: boolean;
}


export const setNextPop = (id: string, date: Date = dayjs().add(1, "h").toDate()) => {
    Storage?.saveLocal("popup" + id as any, date)
}

export interface IUsePopups extends ReturnType<typeof usePopups> { }
//뭐가 필요한지 알았으니 구조에 대해서 다시 생각해 봐야겠다.
export const usePopups = (defaultModals: Ipopup[]) => {
    const [popups, setPopups] = useState<IPopupBox[]>(defaultModals)
    const [selectedIndex, setSelcetedIndex] = useState<number>(0);
    const selectedPopup = popups[selectedIndex] || undefined;

    const openPopup = (popup: IPopupBox) => {
        popup.isOpen = true
        setPopups([...popups])
    }


    const openAllAuto = () => {
        for (const popup of popups) {
            const validDate = popup.startDate > new Date && popup.endDate < new Date;
            const nextPopDateStr = localStorage.getItem("popup" + popup._id) || ""
            const nextPopDate = nextPopDateStr ? new Date() : undefined;

            if (validDate) {
                if (nextPopDate && nextPopDate < new Date) {
                    openPopup(popup);
                }
            }
        }
    }

    const closePopup = (id: string, nextTime?: Date) => {
        setNextPop(id, nextTime);
    }

    return { closePopup, openAllAuto, selectedIndex, selectedPopup, setSelcetedIndex, popups, setPopups, openPopup }
}

