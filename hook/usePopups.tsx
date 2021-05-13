import { useEffect, useState } from "react";
import { Ipopup } from '../types/interface';
import dayjs from 'dayjs';
import { Storage } from '../utils/Storage';
import { useCopy } from "./useUpdate";
import { ismobile } from "../components/popup/PCPopup";

export interface IPopupBox extends Ipopup {
    isOpen?: boolean;
}

interface IUsePopupsConfig {
    autoOpen: boolean;
}

const defaultConfig:Partial<IUsePopupsConfig> = {autoOpen: true}

export const setNextPop = (id: string, date: Date = dayjs().add(1, "m").toDate()) => {
    Storage?.saveLocal("popup" + id as any, date)
}

export interface IUsePopups extends ReturnType<typeof usePopups> { }
//뭐가 필요한지 알았으니 구조에 대해서 다시 생각해 봐야겠다.
export const usePopups = (defaultModals: Ipopup[], config: Partial<IUsePopupsConfig> = defaultConfig) => {
    const [popups, setPopups] = useCopy<IPopupBox[]>(defaultModals)
    const [selectedIndex, setSelcetedIndex] = useState<number>(0);
    const selectedPopup = popups[selectedIndex] || undefined;

    const openPopup = (popup: IPopupBox) => {
        popup.isOpen = true
        setPopups([...popups])
    }


    const openAllAuto = () => {
        for (const popup of popups) {
            const validDate = dayjs(popup.startDate).isBefore(new Date()) && dayjs(popup.endDate).isAfter(new Date());
            const nextPopDateStr = localStorage.getItem("popup" + popup._id) || ""
            const nextPopDate = nextPopDateStr ? new Date(nextPopDateStr) : new Date();
            const lastOpenCheck = !nextPopDate || dayjs(nextPopDate).isAfter(new Date());
            
            if(popup.open)
            if (validDate) {
                if (!nextPopDateStr || lastOpenCheck) {
                    openPopup(popup);
                }
            }
        }
    }

    const closePopup = (id: string, nextTime?: Date) => {
        const target = popups.find(popup => popup._id === id);
        if(!target) return;
        target.isOpen = false;
        setPopups([...popups]);
        setNextPop(id, nextTime);
    }

    useEffect(()=>{
        if(config.autoOpen) 
            openAllAuto();
    },[])

    return { closePopup, openAllAuto, selectedIndex, selectedPopup, setSelcetedIndex, popups, setPopups, openPopup }
}

