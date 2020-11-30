import { useQuery } from "@apollo/client"
import { useState } from "react";
import { PRODUCT_POST_LIST } from "../apollo/queries";
import { productList, productListVariables } from "../types/api";
import { DEFAULT_PAGE } from "../types/const";
import { IPageInfo, IProduct, ISet } from "../types/interface";


export interface IUseProductList {
    setPage: ISet<number>;
    setViewCount: ISet<number>;
    items: IProduct[];
    pageInfo: IPageInfo;
    loading: boolean;
    viewCount: number;
}

type IuseProductListProp = {
    initialPageIndex?:number,
    initialViewCount?:number
}

export const useproductList = ({
    initialPageIndex = 1,
    initialViewCount = 20 
}:IuseProductListProp = {}):IUseProductList => {
    const [viewCount, setViewCount] = useState(initialViewCount);
    const [page, setPage] = useState(initialPageIndex);
    const { data, loading } = useQuery<productList, productListVariables>(PRODUCT_POST_LIST, {
        nextFetchPolicy: "network-only",
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