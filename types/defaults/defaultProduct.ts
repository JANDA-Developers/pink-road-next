import dayjs from "dayjs"
import { SAMPLE_EDIOR, SAMPLE_FILE } from "types/const"
import {  ProductPostCreateInput, ProductPostStatus } from "../api"

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
    title: "테스트 상품",
    address: "테스트 상품 주소",
    adult_price: 2000,
    baby_price: 1000,
    info: "한국어 위키낱말사전은 인터넷을 사용할 수 있는 모든 이에게 열려진 사전입니다. 오늘날 우리에게 알려진 모든 언어를 한국어로 풀이하고 이와 더불어 다른 언어로 번역하는 것을 목적으로 하고 있습니다. 다시 말해 이 사전에는 여러분들이 자유롭게 낱말을 수록하거나 또는 이미 수록된 낱말의 내용을 알맞게 고치거나 또는 보탤 수 있습니다. 때문에 사용자께서 글을 쓰시기 전에 자신이 쓴 글이 언제든지 다른 사람에 의해 고쳐지거나 또는 심하면 터무니없이 훼손될 수도 있다는 사실을 염두에 두세요.",
    caution: "위키미디어재단은 유엔 헌장에 명시된 언론자유 및 인권보장을 준수하고 있습니다. 그러나 수록된 문서의 내용 또는 사용자 문서에 쓰여진 내용을 사용자 국가에서 어떤 정치적 이유로 허용하지 않을 수도 있습니다. 이에 따라 일어날 수 있는 법적 문제에 대해서는 위키미디어재단은 어떠한 책임도 갖지 않습니다. ",
    kids_price: 2000,
    maxMember: 10,
    minMember: 8,
    startPoint: "시작주소 개발",
    subTitle: "시작 서브 타이틀 개발",
    keyWards: ["키워드1","키워드2","키워드3"]
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

export interface IProductDefaultData extends ProductPostCreateInput {
}

export const DEFAULT_PRODUCT_INPUT: IProductDefaultData = process.env.NODE_ENV === "development" ? {
    status: ProductPostStatus.CLOSE,
    images: [SAMPLE_FILE,SAMPLE_FILE],
    contents: {},
    inOrNor: {},
    itinerary: [{
        title:"1일차 여정",
    contents: 
    ["여행일정표란 여행을 떠나기 전, 여행에 관한 상세 일정을 계획하여 그 내용을 기재한 표 형식의 문서를 말한다.",
    "지난번에 올린 세부여행계획포스팅 올린 후로 일정표 양식 공유 문의가 종종와서 "],
    date: new Date(),
    },{
    title:"2일차 여정",
    contents: 
    ["여행일정표란 여행을 떠나기 전, 여행에 관한 상세 일정을 계획하여 그 내용을 기재한 표 형식의 문서를 말한다.",
    "지난번에 올린 세부여행계획포스팅 올린 후로 일정표 양식 공유 문의가 종종와서 "],
    date: dayjs().add(1,"day").toDate(),
    },{
        title:"3일차 여정",
    contents: 
    ["여행일정표란 여행을 떠나기 전, 여행에 관한 상세 일정을 계획하여 그 내용을 기재한 표 형식의 문서를 말한다.",
    "지난번에 올린 세부여행계획포스팅 올린 후로 일정표 양식 공유 문의가 종종와서 "],
    date: dayjs().add(2,"day").toDate(),
    }],
    categoryId: "5fa8f90bfc0fc204d95b9ae7",
    ...DEFAULT_PRODUCT_PART
} : {
    categoryId: "",
    status: ProductPostStatus.CLOSE,
    images: [],
    inOrNor: {blocks:[]},
    contents: {blocks:[]},
    itinerary: [],
    ...DEFAULT_PRODUCT_PART
} 
