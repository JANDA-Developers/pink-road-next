import { BOOKING_COUNT } from "../apollo/gql/booking";
import { graphQLClient } from "../hook/usePageInfo";
import { bookingCount, bookingCountVariables, bookingList, bookingListVariables, _BookingFilter } from "../types/api";


interface IBookingInfo {
    filter: _BookingFilter;
}

export const getBookingCount = async ({filter}:IBookingInfo):Promise<number> => {
    const { BookingList } = await graphQLClient.request<bookingCount, bookingCountVariables>(BOOKING_COUNT, { 
        filter,
    })
    const { data } = BookingList;
    return data.length
}