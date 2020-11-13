import { useQuery } from "@apollo/client"
import { useState } from "react";
import { PRODUCT_POST_LIST } from "../apollo/queries";
import { productPostList, productPostListVariables } from "../types/api";
import { DEFAULT_PAGE } from "../types/const";
// import { PRODUCT_LIST } from "../apollo/queries";
// import { productList, productListVariables } from "../types/api";
// import { PRODUCT_LIST } from "../apollo/queries";
import { IPageInfo, IProduct, ISet } from "../types/interface";


export interface IUseProductList {
    setPage: ISet<number>;
    setViewCount: ISet<number>;
    // setSort: ISet<_ProductSort[]>;
    // setFilter: ISet<_ProductFilter>;
    items: IProduct[];
    pageInfo: IPageInfo;
    loading: boolean;
    viewCount: number;
}

type IuseProductListProp = {
    initialPageIndex?:number,
    initialViewCount?:number
    // initialFilter?: _ProductFilter,
    // initialSort?: _ProductSort[]
}

export const useProductPostList = ({
    // initialSort = [],
    // initialFilter = {},
    initialPageIndex = 1,
    initialViewCount = 20 
}:IuseProductListProp = {}):IUseProductList => {
    // const [filter, setFilter] = useState<_ProductFilter>({});
    // const [sort, setSort] = useState<_ProductSort[]>([]);
    const [viewCount, setViewCount] = useState(initialViewCount);
    const [page, setPage] = useState(initialPageIndex);
    const { data, loading } = useQuery<productPostList, productPostListVariables>(PRODUCT_POST_LIST, {
        nextFetchPolicy: "network-only",
        variables: {
            pageInput: {
                cntPerPage: viewCount,
                page: page
            }
        }
    })
    
    const items = data?.ProductPostList.data || [];
    const pageInfo = data?.ProductPostList.page || DEFAULT_PAGE;
    
    return { items, loading, pageInfo, setPage, setViewCount, viewCount }
}