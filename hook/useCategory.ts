import { MutationHookOptions, useMutation } from "@apollo/client";
import { getOperationName } from "@apollo/client/utilities";
import { CATEGORY_DELETE, CATEGORY_LIST } from "../apollo/gql/category";
import { categoryDelete, categoryDeleteVariables } from "../types/api";
import { categoryFindById, categoryFindByIdVariables } from "../types/api";
import { QueryHookOptions, useQuery } from "@apollo/client"
import { CATEGORY_FIND_BY_ID } from "../apollo/gql/category";
import { Fpage, Fcategory, categoryList,  categoryUpdate,categoryUpdateVariables } from "../types/api";
import { DEFAULT_PAGE } from "../types/const";
import { IListHook, ListInitOptions, useListQuery } from "./useListQuery";
import { CATEGORY_UPDATE } from "../apollo/gql/category";
import { getRefetch } from "../utils/api";


export const useCategoryDelete = (options?: MutationHookOptions<categoryDelete,categoryDeleteVariables>) => {
    const [categoryUpdateMu, { loading: deleteLoading }] = useMutation<categoryDelete, categoryDeleteVariables>(CATEGORY_DELETE, {
        ...getRefetch(CATEGORY_LIST,CATEGORY_FIND_BY_ID),
        ...options
    });
    
    const categoryDelete = (variables: categoryDeleteVariables, onSucess?: () => void) => {
        categoryUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.CategoryDelete.ok) {
                onSucess?.()
            }
        })
    }

    return {categoryDelete, deleteLoading}
}



export interface IUseCategoryFindById {
    category?: Fcategory;
    loading: boolean;
}
export interface IuseCategoryFindByIdProp extends QueryHookOptions<categoryFindById,categoryFindByIdVariables> {
}

export const useCategoryFindById = ({
    ...options
}:IuseCategoryFindByIdProp):IUseCategoryFindById => {
    const { data, loading } = useQuery<categoryFindById, categoryFindByIdVariables>(CATEGORY_FIND_BY_ID, {
        ...options,
        nextFetchPolicy: "network-only",
        onCompleted: ({CategoryFindById})=> {
            if(!CategoryFindById.ok) {
                console.error(data?.CategoryFindById.error);
                alert("잘못된 접근 입니다.");
            }
        }
    })

    const category = data?.CategoryFindById?.data || undefined
    
    return { category, loading }
}

interface IuseItemListProp  {
    options?: QueryHookOptions<categoryList>
}

export interface IuseCategoryList  {
    items: Fcategory[];
    getLoading: boolean;
}


export const useCategoryList = ({
    options = {}
}:IuseItemListProp = {}):IuseCategoryList => {
    const { data, loading:getLoading } = useQuery<categoryList>(CATEGORY_LIST, {
        nextFetchPolicy: "cache-and-network",
        ...options
    })
    
    const items = data?.CategoryList.data || [];
    
    return {  getLoading, items }
}


export const useCategoryUpdate = (options?: MutationHookOptions<categoryUpdate,categoryUpdateVariables>) => {
    const [categoryUpdateMu, { loading: updateLoading }] = useMutation<categoryUpdate, categoryUpdateVariables>(CATEGORY_UPDATE, {
        ...getRefetch(CATEGORY_LIST,CATEGORY_FIND_BY_ID),
        awaitRefetchQueries:true,
        ...options
    });
    
    const categoryUpdate = (variables: categoryUpdateVariables, onSucess?: () => void) => {
        categoryUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.CategoryUpdate?.ok) {
                onSucess?.()
            }
        })
    }

    return {categoryUpdate, updateLoading}
}