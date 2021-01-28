import { MutationHookOptions, useMutation } from "@apollo/client";
import { PRODUCT_FIND_BY_ID_FOR_SELLER, PRODUCT_POST_DELETE, PRODUCT_LIST, ACCEPT_PRODUCT_CREATE, ACCEPT_PRODUCT_UPDATE, REJECT_PRODUCT_UPDATE, REJECT_PRODUCT_CREATE } from "../apollo/gql/product";
import { productCreateAccept,  productUpdateAccept, productDelete, productDeleteVariables, productFindByIdForSeller, productFindByIdForSellerVariables, productFindByIdForSeller_ProductFindByIdForSeller_data, productFindById_ProductFindById_data, productList_ProductList_data, productUpdateReject, _BookingFilter, _BookingSort, _PortfolioFilter, productCreateReject, productUpdateAcceptVariables, productCreateAcceptVariables, productUpdateRejectVariables } from "../types/api";
import { productFindById, productFindByIdVariables } from "../types/api";
import { IlistQueryInit } from "../types/interface";
import { PRODUCT_FIND_BY_ID } from "../apollo/gql/product";
import { Fpage, Fproduct, productList, productListVariables, _PortfolioSort, _ProductFilter, _ProductSort } from "../types/api";
import { IListHook } from "./useListQuery";
import { PRODUCT_POST_UPDATE } from "../apollo/gql/product";
import { productUpdate, productUpdateVariables } from "../types/api";
import { getRefetch } from "../utils/api";
import { generateFindQuery, generateListQueryHook, generateMutationHook } from "../utils/query";

export const useProductDelete = (options?: MutationHookOptions<productDelete,productDeleteVariables>) => {
    const [productUpdateMu, { loading: deleteLoading }] = useMutation<productDelete, productDeleteVariables>(PRODUCT_POST_DELETE, {
        ...getRefetch(PRODUCT_LIST, PRODUCT_FIND_BY_ID),
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

export const useProductFindById = generateFindQuery<productFindById, productFindByIdVariables, productFindById_ProductFindById_data>("_id",PRODUCT_FIND_BY_ID);
export const useProductFindByIdForSeller = generateFindQuery<productFindByIdForSeller, productFindByIdForSellerVariables, productFindByIdForSeller_ProductFindByIdForSeller_data>("_id", PRODUCT_FIND_BY_ID_FOR_SELLER);

export interface IproductListInit extends IlistQueryInit<_ProductFilter,_ProductSort,productList,productListVariables> {}
export interface IuseProductList extends IListHook<_ProductFilter, _ProductSort> {
    items: Fproduct[];
    getLoading: boolean;
    pageInfo: Fpage;
}

export const useProductList = generateListQueryHook<_ProductFilter, _ProductSort, productList, productListVariables, productList_ProductList_data>(PRODUCT_LIST,{initialSort: [_ProductSort.createdAt_desc]});

export const useProductUpdate = (options?: MutationHookOptions<productUpdate,productUpdateVariables>) => {
    const [productUpdateMu, { loading: updateLoading }] = useMutation<productUpdate, productUpdateVariables>(PRODUCT_POST_UPDATE, {
        awaitRefetchQueries:true,
        ...getRefetch(PRODUCT_LIST,PRODUCT_FIND_BY_ID),
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

export const useAcceptCreateProduct = generateMutationHook<productCreateAccept,productCreateAcceptVariables>(ACCEPT_PRODUCT_CREATE);
export const useAcceptUpdateProduct = generateMutationHook<productUpdateAccept,productUpdateAcceptVariables>(ACCEPT_PRODUCT_UPDATE);
export const useRejectCreateProduct = generateMutationHook<productCreateReject,productCreateReject>(REJECT_PRODUCT_CREATE);
export const useRejectUpdateProduct = generateMutationHook<productUpdateReject,productUpdateRejectVariables>(REJECT_PRODUCT_UPDATE);