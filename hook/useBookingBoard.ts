import { useState } from "react";
import { IBookingModalInfo } from "../components/bookingModal/BookingModal";
import { BookingStatus, _BookingFilter, _BookingSort } from "../types/api";
import { useBookingList } from "./useBooking";
import { useIdSelecter } from "./useIdSelecter";
import { ListInitOptions } from "./useListQuery";
import { useModal } from "./useModal";
import { useDateFilter } from "./useSearch";
import { useSingleSort } from "./useSort";

export type TBookingSearchType = keyof Pick<
    _BookingFilter,
    "code_eq" | "exField__sellerName_eq" | "exField__title_contains"
>;

export type TUseBookingBoard = ReturnType<typeof useBookingBoard>;
export const useBookingBoard = (
    listProp?: Partial<ListInitOptions<_BookingFilter, _BookingSort>>
) => {
    const [isTimeOverExcept, setIsTimeOverExcept] = useState(false);
    const bookingModalHook = useModal<IBookingModalInfo>();
    const bookingListHook = useBookingList(
        {
            ...listProp,
        },
        {
            overrideVariables: {
                isTimeOverExcept,
            },
            fetchPolicy: "cache-first",
        }
    );

    const {
        items = [],
        setFilter,
        setPage,
        page,
        filter,
        sort,
        setSort,
        viewCount,
        setViewCount,
        setUniqFilter,
        getLoading,
    } = bookingListHook;

    const [filterType, setFilterType] = useState<TBookingSearchType>(
        "exField__title_contains"
    );
    const dateFilterHook = useDateFilter({
        filter,
        setFilter,
        dateKey: "createdAt",
    });

    const setType = (status?: BookingStatus) => () => {
        filter.status_eq = status;
        setFilter({ ...filter });
    };

    const doSearch = (search: string) => {
        setUniqFilter(
            filterType,
            ["exField__sellerName_eq", "code_eq", "exField__title_contains"],
            search
        );
    };

    const handleDetail = (code: string) => {
        bookingModalHook.openModal({
            code,
        });
    };

    const checkOnStatus = (status?: BookingStatus) =>
        status === filter.status_eq ? "check on" : "check";

    const idSelecterHook = useIdSelecter(items.map((item, i) => item._id));
    const singleSortHook = useSingleSort(sort, setSort);

    return {
        filterType,
        singleSortHook,
        bookingModalHook,
        isTimeOverExcept,
        bookingListHook,
        checkOnStatus,
        handleDetail,
        doSearch,
        setType,
        dateFilterHook,
        setFilterType,
        setIsTimeOverExcept,
        idSelecterHook,
        getLoading,
    };
};
