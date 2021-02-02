import { Fproduct, ProductType } from "../types/api"
import { getFromUrl } from "./url";
import { yyyymmdd } from "./yyyymmdd";

export const getTypeTextOfProduct = (productType: ProductType, range:number) => {
    
    if(productType === ProductType.EXPERIENCE) {
        if(range === 1) {
            return "당일체험"
        } else {
            return "연박체험"
        }
    }
    
    else {
        if(range == 0) return "당일여행";
        else return "연박여행"
    }
}

export const getRangeString = (product:Fproduct) => {
    const len = product.itinerary.length;
    const rangeString = `${len -1}박${len}일`;

    if(len === 1) {
        return "당일";
    }
    
    return rangeString;
}


export const dateRangeFullString = (startDate:Date,endDate:Date,range:number) => {
   return yyyymmdd(startDate) +"~"+ yyyymmdd(endDate) + "(" + getRangeStringByNumber(range) + ")"
}

export const getRangeStringByNumber = (len:number) => {
    const rangeString = `${len -1}박${len}일`;

    if(len === 1) {
        return "당일";
    }
    
    return rangeString;
}



export const checkIsExp = () => !!getFromUrl("exp");
export const getTypeFilterByUrl = (isExp:boolean) => {
    const typeFilter = isExp ? ProductType.EXPERIENCE : ProductType.TOUR;
    const filterProduct = { initialFilter: { type_eq: typeFilter } };
    return filterProduct
}