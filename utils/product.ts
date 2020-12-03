import { Fproduct } from "../types/api"

export const getTypeTextOfProduct = (product:Fproduct) => {
    if(product.itinerary.length == 0) return "당일여행";
    else return "연박여행"
}

