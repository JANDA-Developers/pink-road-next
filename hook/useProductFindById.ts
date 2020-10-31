import { PRODUCT_LIST } from "../apollo/queries";
import { productFindById, productFindByIdVariables, } from "../types/api";
import { IProductFindById } from "../types/interface";
import { QueryHookOptions, useQuery } from "@apollo/client"


export interface IUseProductFindById {
    product?: IProductFindById;
    loading: boolean;
}
export interface IuseProductFindByIdProp extends QueryHookOptions<productFindById,productFindByIdVariables> {
}

export const useProductFindById = ({
    ...options
}:IuseProductFindByIdProp):IUseProductFindById => {
    const { data, loading } = useQuery<productFindById, productFindByIdVariables>(PRODUCT_LIST, {
        ...options,
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