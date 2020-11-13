import { PRODUCT_FIND_BY_ID } from "../apollo/queries";
import { productPostFindById, productPostFindByIdVariables } from "../types/api";
import { IProductPostFindById } from "../types/interface";
import { QueryHookOptions, useQuery } from "@apollo/client"


export interface IUseProductFindById {
    productPost?: IProductPostFindById;
    loading: boolean;
}
export interface IuseProductFindByIdProp extends QueryHookOptions<productPostFindById,productPostFindByIdVariables> {
}

export const useProductFindById = ({
    ...options
}:IuseProductFindByIdProp):IUseProductFindById => {
    const { data, loading } = useQuery<productPostFindById, productPostFindByIdVariables>(PRODUCT_FIND_BY_ID, {
        ...options,
        nextFetchPolicy: "cache-only",
        onCompleted: ({ProductPostFindById})=> {
            if(!ProductPostFindById.ok) {
                console.error(data?.ProductPostFindById.error);
                alert("잘못된 접근 입니다.");
            }
        }
    })

    const productPost = data?.ProductPostFindById?.data || undefined
    
    return { productPost, loading }
}