import dayjs from "dayjs";
import {  useSettlementCal } from "../hook/usePayment";
import { _BookingFilter, _PaymentFilter } from "../types/api";
import { getBookingCount } from "../utils/getBookingCount";

const lastMonthFirstDate = dayjs().add(-1,"m").set("day",1).toDate(); 
const monthFirstDate = dayjs().set("day",1).toDate(); 
const thisMonthLastDate = dayjs().endOf("month").toDate();
const thisMonthFirstDate = dayjs().set("day",1).toDate(); 

export const getLastMonthCount = (filter:_BookingFilter) => {

    return getBookingCount({
        filter: {
            createdAt_gte: lastMonthFirstDate,
            createdAt_lt: monthFirstDate,
            ...filter
        }
    })
}
export const getThisMonthCount = (filter:_BookingFilter) => {

    return getBookingCount({
        filter: {
            createdAt_gte: thisMonthFirstDate,
            createdAt_lte: thisMonthLastDate,
            ...filter
        }
    })
}

export const getThisMonthPayAmount =  (filter?:_PaymentFilter) => {
    const {amt,setFilter} = useSettlementCal({initialFilter:{
        createdAt_gte: thisMonthFirstDate,
        createdAt_lte: thisMonthLastDate,
        ...filter
    }});
    return {amt,setFilter}
}