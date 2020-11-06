import { ItineraryArrayInput, ProductCreateInput, ProductStatus } from "../api"

export type TProductDataPart = {
    title: string,
    address: string,
    adult_price: number,
    baby_price: number,
    kids_price: number,
    startPoint: string,
    maxMember: number,
    minMember: number,
    subTitle: string
    caution: string
    info: string
    keyWards: string[]
}

const DEFAULT_PRODUCT_PART: TProductDataPart = process.env.NODE_ENV === "development" ? {
    title: "",
    address: "",
    adult_price: 0,
    baby_price: 0,
    info: "",
    caution: "",
    kids_price: 0,
    maxMember: 0,
    minMember: 0,
    startPoint: "As",
    subTitle: "As",
    keyWards: []
} : {
        title: "",
        address: "",
        adult_price: 0,
        baby_price: 0,
        info: "",
        caution: "",
        kids_price: 0,
        maxMember: 0,
        minMember: 0,
        startPoint: "As",
        subTitle: "As",
        keyWards: []
    }

export interface IProductDefaultData extends ProductCreateInput {
    schedule: ItineraryArrayInput[]
}

export const DEFAULT_PRODUCT_INPUT: IProductDefaultData = process.env.NODE_ENV === "development" ? {
    CategoryID: "",
    Status: ProductStatus.CLOSE,
    info: "a",
    images: [],
    content: "",
    inOrNor: {},
    schedule: [],
    ...DEFAULT_PRODUCT_PART
} : {
    CategoryID: "",
    Status: ProductStatus.CLOSE,
    info: "a",
    images: [],
    inOrNor: {},
    content: "",
    schedule: [],
    ...DEFAULT_PRODUCT_PART
} 
