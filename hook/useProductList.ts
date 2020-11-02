import { useQuery } from "@apollo/client"
import { useState } from "react";
import { PRODUCT_LIST } from "../apollo/queries";
import { productList, productListVariables } from "../types/api";
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

export const useProductList = ({
    // initialSort = [],
    // initialFilter = {},
    initialPageIndex = 0,
    initialViewCount = 20 
}:IuseProductListProp):IUseProductList => {
    // const [filter, setFilter] = useState<_ProductFilter>({});
    // const [sort, setSort] = useState<_ProductSort[]>([]);
    const [viewCount, setViewCount] = useState(initialViewCount);
    const [page, setPage] = useState(initialPageIndex);
    const { data, loading } = useQuery<productList, productListVariables>(PRODUCT_LIST, {
        variables: {
            pageInput: {
                cntPerPage: viewCount,
                page: page
            }
        }
    })
    
    const items = data?.ProductList.data || [];
    const pageInfo = data?.ProductList.page || DEFAULT_PAGE;
    
    return { items, loading, pageInfo, setPage, setViewCount, viewCount }
}