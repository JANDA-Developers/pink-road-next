import { DEFAULT_itinery } from "components/tourWrite/ItineryForm";
import { EPROTO } from "constants";
import dayjs from "dayjs";
import { Ffile, ItineraryCreateInput, ProductPostCreateInput, ProductPostStatus } from "types/api";
import { DEFAULT_PRODUCT_INPUT, IProductDefaultData, TProductDataPart } from "types/defaults/defaultProduct";
import { IProductPostFindById } from "types/interface";
import { toNumber } from "utils/toNumber";
import EditorJS, { OutputData } from '@editorjs/editorjs';
const omitDeep = require("omit-deep-lodash");

export type TRange = {
    from?: Date;
    to?: Date;
}

export const generateitinery = (range:TRange,its:ItineraryCreateInput[]):ItineraryCreateInput[] => {
    const {from,to} = range;
    if (!to) return;
    if (!from) return;

    let tempSch = its;

    const diff = dayjs(to).diff(from, "d") + 1;

    // 배열 길이가 줄어들었다면 그만큼 잘라주어야함.
    if (diff < its.length)
        tempSch = tempSch.slice(0, diff);

    // 인덱스 가 부족하다면 채워줌
    if (diff > its.length)
        tempSch = [...tempSch, ...Array(diff - tempSch.length).fill({...DEFAULT_itinery, contents: [""]})]

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
    const defaults: IProductDefaultData = product ? {...product, categoryId: product.category?._id} : DEFAULT_PRODUCT_INPUT
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

    const {itinerary,images, contents,inOrNor,status,categoryId} = defaults
   

    return  {data,status,itinerary,images,contents,inOrNor,categoryId}

}



type IGetNextDataProp = {
    its:ItineraryCreateInput[],
    title:string,
    address: string,
    adult_price: any,
    baby_price: any,
    kids_price: any,
    maxMember: any,
    minMember: any,
    caution:string;
    contents: any,
    inOrNor: any,
    thumbs: Partial<Ffile>[]
    info: string;
    keyWards: string[]
    startPoint: string;
    status: ProductPostStatus   
    subTitle: string;
    categoryId: string;
}

export const getNextData = async ({
    address,
    adult_price,
    baby_price,
    caution,
    contents,
    its,
    title,
    kids_price,
    maxMember,
    minMember,
    thumbs,
    inOrNor,
    categoryId,
    info,
    keyWards,
    startPoint,
    status,
    subTitle
}:IGetNextDataProp) => {


    let nextData: ProductPostCreateInput = {
        itinerary: its,
        title,
        address,
        adult_price: toNumber(adult_price),
        baby_price: toNumber(baby_price),
        kids_price: toNumber(kids_price),
        maxMember: toNumber(maxMember),
        minMember: toNumber(minMember),
        caution,
        contents,
        inOrNor,
        images: thumbs.map(thumb => ({
            ...thumb,
            uri: thumb?.uri!
        })),
        info,
        keyWards,
        startPoint,
        status,
        subTitle,
        categoryId
    }


    nextData = omitDeep(nextData, "createdAt", "updatedAt", "__typename", "isDelete", "_id", "productPostId")

    return nextData;
}