import dayjs from "dayjs";
import { Fbooking } from "../types/api";
import { bookingStatus } from "./enumToKr";
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