import dayjs from "dayjs";
import { Fbooking, Fproduct, productList_ProductList_data, ProductStatus } from "../types/api";
import { bookingStatus, productStatus } from "./enumToKr";
import { autoComma } from "./formatter";

export const getExcelByBookings = (items:Fbooking[]):any[] => {

    const columns = ["코드","예약자","연락처","인원","예약일","가격","결제상태"]; 

    const datas = items.map((item):string[]=> {
        return [
            item.code,
            item.name || "",
            item.phoneNumber,
            item.adultCount + "성인/" + item.kidCount +  "소아/"  + item.babyCount + "유아",
            dayjs(item.createdAt).format("YYYY-MM-DD"),
            autoComma(item.bookingPrice),
            bookingStatus(item.status)
        ]
    })

    return [{
        columns,
        data:datas
    }]
}


export const getExcelByProduct = (items:productList_ProductList_data[]):any[] => {

    const columns = ["코드","판매자","주소","출발일","생성일","가격","상태"]; 

    const datas = items.map((item):string[]=> {
        return [
            item.code,
            item?.author?.name || "",
            item.address,
            dayjs(item.startDate).format("YYYY-MM-DD"),
            dayjs(item.createdAt).format("YYYY-MM-DD"),
            autoComma(item.adult_price) + ":성인," + autoComma(item.kids_price) + ":소아" + autoComma(item.baby_price) + ":유아",
            productStatus(item.status)
        ]
    })

    return [{
        columns,
        data:datas
    }]
}