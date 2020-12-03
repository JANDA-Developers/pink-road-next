import { QueryHookOptions, useQuery } from "@apollo/client"
import { PRODUCT_POST_LIST } from "../apollo/gql/product";
import { Fpage, Fproduct, productList, productListVariables, _PortfolioSort, _ProductFilter, _ProductSort } from "../types/api";
import { DEFAULT_PAGE } from "../types/const";
import { IListHook, ListInitOptions, useListQuery } from "./useListQuery";
interface IuseItemListProp extends Partial<ListInitOptions<_ProductFilter, _ProductSort>> {
    options?: QueryHookOptions<productList, productListVariables>
}

export interface IUseProductList extends IListHook<_ProductFilter, _ProductSort> {
    items: Fproduct[];
    getLoading: boolean;
    pageInfo: Fpage;
}


export const useproductList = ({
    initialPageIndex = 1,
    initialSort = [_ProductSort.createdAt_desc],
    initialFilter = {},
    initialViewCount = 20,
    options = {}
}:IuseItemListProp = {}):IUseProductList => {
    const { variables: overrideVariables, ...ops } = options;
    const {filter,integratedVariable,setFilter,setPage,setSort,setViewCount,sort,viewCount} = useListQuery({
        initialFilter,
        initialPageIndex,
        initialSort,
        initialViewCount
    });
    const { data, loading:getLoading } = useQuery<productList, productListVariables>(PRODUCT_POST_LIST, {
        nextFetchPolicy: "network-only",
        variables: {
            ...integratedVariable,
            ...overrideVariables
        },
        ...ops
    })
    
    const items = data?.ProductList.data || [];
    const pageInfo = data?.ProductList.page || DEFAULT_PAGE;
    
    return { pageInfo, filter, setPage, getLoading, setFilter, setSort, setViewCount, sort, viewCount, items }
}