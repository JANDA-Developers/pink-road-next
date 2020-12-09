import dayjs from "dayjs";
import { _BookingFilter } from "../../types/api";
import { getBookingCount } from "../../utils/getBookingCount";


export const setLastMonthCount = (id:string,sellerId:string) => {
    getLastMonthCount(sellerId).then((number)=>{
        const target = document.getElementById(id);
        if (!target) return;
        target.innerHTML = `${number}`;
    })
}



export const setThisMonthCount = (id:string,sellerId:string) => {
    getThisMonthCount({seller_eq:sellerId}).then((number)=>{
        const target = document.getElementById(id);
        if (!target) return;
        target.innerHTML = `${number}`;
    })
}