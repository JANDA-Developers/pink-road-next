import { BookingStatus } from "../types/api";

export const bookingStatus = (status: BookingStatus) => {
    if(status === BookingStatus.CANCEL) return "예약취소" 
    if(status === BookingStatus.COMPLETE) return "예약완료" 
    if(status === BookingStatus.READY) return "예약대기" 
    return status;
}