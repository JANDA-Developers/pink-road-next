import { BOOKINGS_CREATE, BOOKING_DELETE, BOOKING_FIND_BY_CODE, BOOKING_LIST, BOOKING_UPDAET } from "../apollo/gql/booking";
import {  bookingDelete, bookingDeleteVariables, bookingFindByCode, bookingFindByCodeVariables, bookingFindByCode_BookingFindByCode_data, bookingList, bookingListVariables, bookingList_BookingList_data, bookingsCreate, bookingsCreateVariables, bookingUpdate, bookingUpdateVariables, Fbooking, FbookingByCode,  _BookingFilter, _BookingSort } from "../types/api";
import { getRefetch } from "../utils/api";
import { generateFindQuery, generateListQueryHook, generateMutationHook } from "../utils/query";

export const useBookingFindByCode = generateFindQuery<bookingFindByCode,bookingFindByCodeVariables,bookingFindByCode_BookingFindByCode_data>("code",BOOKING_FIND_BY_CODE)
export const useBookingList = generateListQueryHook<_BookingFilter,_BookingSort,bookingList,bookingListVariables,bookingList_BookingList_data>(BOOKING_LIST,{initialSort:[_BookingSort.createdAt_desc]});
export const useBookingsCreate = generateMutationHook<bookingsCreate,bookingsCreateVariables>(BOOKINGS_CREATE, {
    ...getRefetch(BOOKING_LIST)
});
export const useBookingUpdate = generateMutationHook<bookingUpdate,bookingUpdateVariables>(BOOKING_UPDAET, {
    ...getRefetch(BOOKING_LIST)
});
export const useBookingDelete = generateMutationHook<bookingDelete,bookingDeleteVariables>(BOOKING_DELETE, {
    ...getRefetch(BOOKING_LIST)
});