import { MutationHookOptions, QueryHookOptions, useMutation, useQuery } from "@apollo/client";
import { getOperationName } from "@apollo/client/utilities";
import { BOOKING_FIND_BY_CODE, BOOKING_LIST, BOOKING_UPDAET } from "../apollo/gql/booking";
import {  bookingDelete, bookingDeleteVariables, bookingFindByCode, bookingFindByCodeVariables, bookingList, bookingListVariables, bookingsCreate_BookingsCreate_data, bookingUpdate, bookingUpdateVariables, Fbooking, FbookingByCode, Fpage, _BookingFilter, _BookingSort } from "../types/api";
import { DEFAULT_PAGE } from "../types/const";
import { useListQuery, ListInitOptions, IListHook } from "./useListQuery";
import {  bookingsCreate, bookingsCreateVariables } from "../types/api";

export const useBookingsCreate = (options?: MutationHookOptions<bookingsCreate,bookingsCreateVariables>) => {
    const [bookingsCreateMu, { loading: createLoading }] = useMutation<bookingsCreate, bookingsCreateVariables>(BOOKING_UPDAET, {
        refetchQueries: [getOperationName(BOOKING_LIST) || ""],
        ...options
    });
    
    const bookingsCreate = (variables: bookingsCreateVariables, onSucess?: (data:bookingsCreate_BookingsCreate_data[]) => void) => {
        bookingsCreateMu({
            variables
        }).then((data) => {
            if (data.data?.BookingsCreate?.ok) {
                onSucess?.(data.data.BookingsCreate.data!)
            }
        })
    }

    return {bookingsCreate, createLoading}
}

export const useBookingDelete = (options?: MutationHookOptions<bookingDelete,bookingDeleteVariables>) => {
    const [bookingDeleteMu, { loading: deleteLoading }] = useMutation<bookingDelete, bookingDeleteVariables>(BOOKING_UPDAET, {
        refetchQueries: [getOperationName(BOOKING_LIST) || ""],
        ...options
    });
    
    const bookingDelete = (variables: bookingDeleteVariables, onSucess?: () => void) => {
        bookingDeleteMu({
            variables
        }).then((data) => {
            if (data.data?.BookingDelete?.ok) {
                onSucess?.()
            }
        })
    }

    return {bookingDelete, deleteLoading}
}



interface IuseItemListProp extends Partial<ListInitOptions<_BookingFilter, _BookingSort>> {
    options?: QueryHookOptions<bookingList, bookingListVariables>
}
export interface IuseBookingList extends IListHook<_BookingFilter, _BookingSort> {
    items: Fbooking[];
    getLoading: boolean;
    pageInfo: Fpage;
}

export const useBookingList = ({
    initialPageIndex = 0,
    initialSort = [_BookingSort.createdAt_desc],
    initialFilter = {},
    initialViewCount = 20,
    options = {}
}: IuseItemListProp = {}): IuseBookingList => {
    const { variables: overrideVariables, ...ops } = options;
    const { filter, setPage, setFilter, setSort, setViewCount, sort, viewCount, integratedVariable } = useListQuery({
        initialFilter,
        initialPageIndex,
        initialSort,
        initialViewCount
    })

    const { data, loading: getLoading } = useQuery<bookingList,bookingListVariables>(BOOKING_LIST,{
        fetchPolicy: "network-only",
        variables: {
            ...integratedVariable,
            ...overrideVariables
        },
        ...ops
    })

    const items: Fbooking[] = data?.BookingList.data || [];
    const pageInfo: Fpage = data?.BookingList.page || DEFAULT_PAGE;

    return { pageInfo, filter, setPage, getLoading, setFilter, setSort, setViewCount, sort, viewCount, items }
}


export const useBookingUpdate = (options?: MutationHookOptions<bookingUpdate,bookingUpdateVariables>) => {
    const [bookingUpdateMu, { loading: updateLoading }] = useMutation<bookingUpdate, bookingUpdateVariables>(BOOKING_UPDAET, {
        refetchQueries: [getOperationName(BOOKING_LIST) || ""],
        ...options
    });
    
    const bookingUpdate = (variables: bookingUpdateVariables, onSucess?: () => void) => {
        bookingUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.BookingUpdate?.ok) {
                onSucess?.()
            }
        })
    }

    return {bookingUpdate, updateLoading}
}

export interface IUseBookingFindByCode {
    booking?: FbookingByCode;
    loading: boolean;
}

export interface IuseBookingFindByCodeProp extends QueryHookOptions<bookingFindByCode,bookingFindByCodeVariables> {
}

export const useBookingFindByCode = (code:string,{
    ...options
}:IuseBookingFindByCodeProp = {}):IUseBookingFindByCode => {
    const { data, loading } = useQuery<bookingFindByCode, bookingFindByCodeVariables>(BOOKING_FIND_BY_CODE, {
        ...options,
        skip: !code,
        nextFetchPolicy: "network-only",
        variables: {
            code 
        },
        onCompleted: ({BookingFindByCode})=> {
            if(!BookingFindByCode.ok) {
                console.error(data?.BookingFindByCode.error);
                alert("잘못된 접근 입니다.");
            }
        }
    })

    const booking = data?.BookingFindByCode?.data || undefined
    
    return { booking, loading }
}
