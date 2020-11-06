import { DEFAULT_SCHEDULE } from "components/tourWrite/Scheduler";
import { EPROTO } from "constants";
import dayjs from "dayjs";
import { ItineraryArrayInput } from "types/api";
import { DEFAULT_PRODUCT_INPUT, IProductDefaultData } from "types/defaults/defaultProduct";

export type TRange = {
    from?: Date;
    to?: Date;
}

export const generateSchedule = (range:TRange,schedules:ItineraryArrayInput[]):ItineraryArrayInput[] => {
    const {from,to} = range;
    if (!to) return;
    if (!from) return;

    let newSch = schedules;

    const diff = dayjs(to).diff(from, "d") + 1;

    // 인덱스 넘치는건 죽이고
    if (diff < schedules.length)
        newSch = schedules.slice(0, diff);

    // 인덱스 남는거는 default채운후
    if (diff > schedules.length)
        newSch = [...newSch, ...Array(diff - newSch.length).fill(DEFAULT_SCHEDULE)]

    for (let i = 0; i <= diff; i++) {
        if (newSch[i])
            newSch[i].date = dayjs(from).add(i, "d").toDate();
    }

    return newSch || []
}


export const detactRangeChange = (range:TRange):string[] =>  {
    return [dayjs(range.from || new Date())?.format("MMDD"), dayjs(range.to || new Date())?.format("MMDD")]
}

export const getDefault = (product?:IProductDefaultData) => {
    const defaults: IProductDefaultData = product ? product : DEFAULT_PRODUCT_INPUT

    const from = defaults.schedule[0]?.date || undefined;
    const to = defaults.schedule[defaults.schedule.length - 1]?.date || undefined;

    const data = {
        address: defaults.address || "",
        adult_price: defaults.adult_price || 0,
        baby_price: defaults.baby_price || 0,
        info: defaults.info || "",
        kids_price: defaults.kids_price || 0,
        maxMember: defaults.maxMember || 0,
        minMember: defaults.minMember || 0,
        startPoint: defaults.startPoint || "",
        subTitle: defaults.subTitle || "",
        title: defaults.title,
        caution: defaults.caution || "",
        keyWards: defaults.keyWards || [],
    }
    
    const range = {from,to}

    return  {data,range,defaults}

}