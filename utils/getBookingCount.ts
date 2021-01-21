import { useQuery } from "@apollo/client";
import { BOOKING_COUNT } from "../apollo/gql/booking";
import { graphQLClient } from "../hook/usePageInfo";
import { bookingCount, bookingCountVariables, bookingList, bookingListVariables, _BookingFilter } from "../types/api";


interface IBookingInfo {
    filter: _BookingFilter;
}

export const getBookingCount =  ({filter}:IBookingInfo) => {
    const {data} = useQuery<bookingCount, bookingCountVariables>(BOOKING_COUNT, { 
        variables: {
            filter
        }
    })
    const count= data?.BookingList.data.length || 0;
    return count
}