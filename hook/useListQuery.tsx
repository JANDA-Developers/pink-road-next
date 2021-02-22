import { useState } from "react";
import { ISet } from "../types/interface";
import { IUseQueryFilter, useQueryFilter } from "./useQueryFilter";
import { IUseQuerySort, useQuerySort } from "./useQuerySort";
import { pageInput } from "../types/api";

export interface ListInitOptions<F, S> {
    initialPageIndex: number,
    initialViewCount: number
    initialFilter: F,
    initialSort: S[]
    uniqSearchKeys?: (keyof F)[]
}

export interface IListHook<F, S> extends IUseQueryFilter<F>, IUseQuerySort<S> {
    setViewCount: ISet<number>;
    sort: S[];
    setPage: ISet<number>;
    viewCount: number;
    page: number
}

export function useListQuery<F, S>({ initialFilter, initialPageIndex, initialSort, initialViewCount }: ListInitOptions<F, S>) {
    const { filter, ...useFilters } = useQueryFilter<F>(initialFilter || {} as F);
    const { sort, ...useSort } = useQuerySort<S>(initialSort);
    const [viewCount, setViewCount] = useState(initialViewCount);
    const [page, setPage] = useState(initialPageIndex);

    const pageInput: pageInput = {
        page: page,
        cntPerPage: viewCount
    }

    const integratedVariable = {
        pageInput: {
            page: page,
            cntPerPage: viewCount
        },
        filter,
        sort,
    }

    return { filter, page, setPage, integratedVariable, sort, viewCount, setViewCount, ...useFilters, ...useSort }
}