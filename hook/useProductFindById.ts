import { PRODUCT_POST_LIST } from "../apollo/queries";
import { productPostFindById, productPostFindByIdVariables } from "../types/api";
import { IProductPostFindById } from "../types/interface";
import { QueryHookOptions, useQuery } from "@apollo/client"


export interface IUseProductFindById {
    product?: IProductPostFindById;
    loading: boolean;
}
export interface IuseProductFindByIdProp extends QueryHookOptions<productPostFindById,productPostFindByIdVariables> {
}

export const useProductFindById = ({
    ...options
}:IuseProductFindByIdProp):IUseProductFindById => {
    const { data, loading } = useQuery<productPostFindById, productPostFindByIdVariables>(PRODUCT_POST_LIST, {
        ...options,
        onCompleted: ({ProductPostFindById})=> {
            if(!ProductPostFindById.ok) {
                console.error(data?.ProductPostFindById.error);
                alert("잘못된 접근 입니다.");
            }
        }
    })

    const product = data?.ProductPostFindById?.data || undefined
    
    return { product, loading }
}