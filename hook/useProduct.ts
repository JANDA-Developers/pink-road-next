import { MutationHookOptions, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { PRODUCT_POST_DELETE, PRODUCT_POST_LIST } from "../apollo/gql/product";
import { bookingList, bookingListVariables, productDelete, productDeleteVariables } from "../types/api";
import { productFindById, productFindByIdVariables } from "../types/api";
import { IlistQueryInit, IproductFindById } from "../types/interface";
import { QueryHookOptions } from "@apollo/client"
import { PRODUCT_FIND_BY_ID } from "../apollo/gql/product";
import { Fpage, Fproduct, productList, productListVariables, _PortfolioSort, _ProductFilter, _ProductSort } from "../types/api";
import { DEFAULT_PAGE } from "../types/const";
import { IListHook, useListQuery } from "./useListQuery";
import { PRODUCT_POST_UPDATE } from "../apollo/gql/product";
import { productUpdate, productUpdateVariables } from "../types/api";
import { getRefetch } from "../utils/api";
import { useEffect } from "react";

export const useProductDelete = (options?: MutationHookOptions<productDelete,productDeleteVariables>) => {
    const [productUpdateMu, { loading: deleteLoading }] = useMutation<productDelete, productDeleteVariables>(PRODUCT_POST_DELETE, {
        ...getRefetch(PRODUCT_POST_LIST, PRODUCT_FIND_BY_ID),
        ...options
    });
    
    const productDelete = (variables: productDeleteVariables, onSucess?: () => void) => {
        productUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.ProductDelete.ok) {
                onSucess?.()
            }
        })
    }

    return {productDelete, deleteLoading}
}

export interface IUseProductFindById {
    product?: IproductFindById;
    loading: boolean;
}
export interface IuseProductFindByIdProp extends QueryHookOptions<productFindById,productFindByIdVariables> {
}

export const useProductFindById = (id?:string,{
    ...options
}:IuseProductFindByIdProp = {}):IUseProductFindById => {
    const [getData ,{ data, loading }] = useLazyQuery<productFindById, productFindByIdVariables>(PRODUCT_FIND_BY_ID, {
        ...options,
        nextFetchPolicy: "network-only",
        onCompleted: ({ProductFindById})=> {
            if(!ProductFindById.ok) {
                console.error(data?.ProductFindById.error);
                alert("잘못된 접근 입니다.");
            }
        },
        variables: {
            _id: id!
        }
    })

    useEffect(()=>{
        getData();
    },[id])

    const product = data?.ProductFindById?.data || undefined
    
    return { product, loading }
}

export interface IproductListInit extends IlistQueryInit<_ProductFilter,_ProductSort,productList,productListVariables> {}
export interface IuseProductList extends IListHook<_ProductFilter, _ProductSort> {
    items: Fproduct[];
    getLoading: boolean;
    pageInfo: Fpage;
}

export const useProductList = ({
    initialPageIndex = 1,
    initialSort = [_ProductSort.createdAt_desc],
    initialFilter = {},
    initialViewCount = 20,
    options = {}
}:IproductListInit = {}):IuseProductList => {
    const { variables: overrideVariables, ...ops } = options;
    const {filter,integratedVariable,setFilter, page,setPage,setSort,setViewCount,sort,viewCount} = useListQuery({
        initialFilter,
        initialPageIndex,
        initialSort,
        initialViewCount
    });

    const variables = {
        ...integratedVariable,
        ...overrideVariables
    }

    const [getData, { data, loading:getLoading }] = useLazyQuery<productList, productListVariables>(PRODUCT_POST_LIST, {
        nextFetchPolicy: "cache-and-network",
        variables,
        ...ops
    })
    
    const items = data?.ProductList.data || [];
    const pageInfo = data?.ProductList.page || DEFAULT_PAGE;

    useEffect(()=>{
        getData();
    },[filter,page,sort])

    return { pageInfo, filter, setPage, page, getLoading, setFilter, setSort, setViewCount, sort, viewCount, items }
}


export const useProductUpdate = (options?: MutationHookOptions<productUpdate,productUpdateVariables>) => {
    const [productUpdateMu, { loading: updateLoading }] = useMutation<productUpdate, productUpdateVariables>(PRODUCT_POST_UPDATE, {
        awaitRefetchQueries:true,
        ...getRefetch(PRODUCT_POST_LIST,PRODUCT_FIND_BY_ID),
        ...options
    });
    
    const productUpdate = (variables: productUpdateVariables, onSucess?: () => void) => {
        productUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.ProductUpdate?.ok) {
                onSucess?.()
            }
        })
    }

    return {productUpdate, updateLoading}
}










