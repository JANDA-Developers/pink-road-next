import { Fproduct, ProductType } from "../types/api"

export const getTypeTextOfProduct = (product:Fproduct) => {
    const len = product.itinerary.length;
    
    if(product.type === ProductType.EXPERIENCE) {
        if(len === 1) {
            return "당일체험"
        } else {
            return "연박체험"
        }
    }
    else {
        if(product.itinerary.length == 0) return "당일여행";
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

