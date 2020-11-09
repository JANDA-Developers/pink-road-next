import { DEFAULT_itinery } from "components/tourWrite/ItineryForm";
import { EPROTO } from "constants";
import dayjs from "dayjs";
import { ItineryCreateInput } from "types/api";
import { DEFAULT_PRODUCT_INPUT, IProductDefaultData, TProductDataPart } from "types/defaults/defaultProduct";
import { IProductPostFindById } from "types/interface";

export type TRange = {
    from?: Date;
    to?: Date;
}

export const generateitinery = (range:TRange,itineries:ItineryCreateInput[]):ItineryCreateInput[] => {
    const {from,to} = range;
    if (!to) return;
    if (!from) return;

    let tempSch = itineries;

    const diff = dayjs(to).diff(from, "d") + 1;

    // 배열 길이가 줄어들었다면 그만큼 잘라주어야함.
    if (diff < itineries.length)
        tempSch = tempSch.slice(0, diff);

    // 인덱스 가 부족하다면 채워줌
    if (diff > itineries.length)
        tempSch = [...tempSch, ...Array(diff - tempSch.length).fill({...DEFAULT_itinery, contents: []})]

    // 전체를 리셋함.
    return tempSch.map((sch,i) => {
                return {
                    ...sch,
                    date: dayjs(from).add(i,"day").toDate()
                }
        }) || []
}


export const detactRangeChange = (range:TRange):string[] =>  {
    return [dayjs(range.from || new Date())?.format("MMDD"), dayjs(range.to || new Date())?.format("MMDD")]
}

export const getDefault = (product?:IProductPostFindById) => {
    const defaults: IProductDefaultData = product ? product : DEFAULT_PRODUCT_INPUT

    const from = process.env.NODE_ENV === "development" ? new Date() : defaults.itinerary[0]?.date || undefined ;
    const to = process.env.NODE_ENV === "development" ? dayjs().add(2,"day").toDate() : defaults.itinerary[defaults.itinerary.length - 1]?.date || undefined;

    const data:TProductDataPart = {
        address: defaults.address || "",
        adult_price: defaults.adult_price || null,
        baby_price: defaults.baby_price || null,
        info: defaults.info || "",
        kids_price: defaults.kids_price || null,
        maxMember: defaults.maxMember || 0,
        minMember: defaults.minMember || 0,
        startPoint: defaults.startPoint || "",
        subTitle: defaults.subTitle || "",
        title: defaults.title,
        caution: defaults.caution || "",
        keyWards: defaults.keyWards || [],
    }

    const {itinerary,images, content} = defaults
   

    return  {data,defaults,itinerary,images,content}

}

