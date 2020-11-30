import { PRODUCT_FIND_BY_ID } from "../apollo/queries";
import { productFindById, productFindByIdVariables } from "../types/api";
import { IproductFindById } from "../types/interface";
import { QueryHookOptions, useQuery } from "@apollo/client"


export interface IUseProductFindById {
    product?: IproductFindById;
    loading: boolean;
}
export interface IuseProductFindByIdProp extends QueryHookOptions<productFindById,productFindByIdVariables> {
}

export const useProductFindById = ({
    ...options
}:IuseProductFindByIdProp):IUseProductFindById => {
    const { data, loading } = useQuery<productFindById, productFindByIdVariables>(PRODUCT_FIND_BY_ID, {
        ...options,
        nextFetchPolicy: "cache-only",
        onCompleted: ({ProductFindById})=> {
            if(!ProductFindById.ok) {
                console.error(data?.ProductFindById.error);
                alert("잘못된 접근 입니다.");
            }
        }
    })

    const product = data?.ProductFindById?.data || undefined
    
    return { product, loading }
}