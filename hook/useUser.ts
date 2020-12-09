import { MutationHookOptions, useMutation } from "@apollo/client";
import { RESIGN, USER_LIST } from "../apollo/gql/user";
import { userResign,userResignVariables } from "../types/api";
import { userFindById, userFindByIdVariables } from "../types/api";
import { QueryHookOptions, useQuery } from "@apollo/client"
import { USER_FIND_BY_ID } from "../apollo/gql/user";
import { Fpage, Fuser, userList, userListVariables, _PortfolioSort, _UserFilter, _UserSort } from "../types/api";
import { DEFAULT_PAGE } from "../types/const";
import { IListHook, ListInitOptions, useListQuery } from "./useListQuery";
import { USER_UPDATE } from "../apollo/gql/user";
import { userUpdate, userUpdateVariables } from "../types/api";
import { getRefetch } from "../utils/api";

export const useResign = (options?: MutationHookOptions<userResign, userResignVariables>) => {
    const [userUpdateMu, { loading: deleteLoading }] = useMutation<userResign, userResignVariables>(RESIGN, {
        ...getRefetch(USER_LIST,USER_FIND_BY_ID),
        ...options
    });
    
    const resign = (variables: userResignVariables, onSucess?: () => void) => {
        userUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.UserResign.ok) {
                onSucess?.()
            }
        })
    }

    return {resign, deleteLoading}
}

export interface IUseUserFindById {
    user?: Fuser;
    loading: boolean;
}
export interface IuseUserFindByIdProp extends QueryHookOptions<userFindById,userFindByIdVariables> {
}

export const useUserFindById = ({
    ...options
}:IuseUserFindByIdProp):IUseUserFindById => {
    const { data, loading } = useQuery<userFindById, userFindByIdVariables>(USER_FIND_BY_ID, {
        ...options,
        nextFetchPolicy: "network-only",
        onCompleted: ({UserFindById})=> {
            if(!UserFindById.ok) {
                console.error(data?.UserFindById.error);
                alert("잘못된 접근 입니다.");
            }
        }
    })

    const user = data?.UserFindById?.data || undefined
    
    return { user, loading }
}

interface IuseItemListProp extends Partial<ListInitOptions<_UserFilter, _UserSort>> {
    options?: QueryHookOptions<userList, userListVariables>
}

export interface IuseUserList extends IListHook<_UserFilter, _UserSort> {
    items: Fuser[];
    getLoading: boolean;
    pageInfo: Fpage;
}

export const useUserList = ({
    initialPageIndex = 1,
    initialSort = [_UserSort.createdAt_desc],
    initialFilter = {},
    initialViewCount = 20,
    options = {}
}:IuseItemListProp = {}):IuseUserList => {
    const { variables: overrideVariables, ...ops } = options;
    const {filter,integratedVariable,setFilter,setPage,setSort,setViewCount,sort,viewCount} = useListQuery({
        initialFilter,
        initialPageIndex,
        initialSort,
        initialViewCount
    });
    const { data, loading:getLoading } = useQuery<userList, userListVariables>(USER_LIST, {
        nextFetchPolicy: "cache-and-network",
        variables: {
            ...integratedVariable,
            ...overrideVariables
        },
        ...ops
    })
    
    const items = data?.UserList.data || [];
    const pageInfo = data?.UserList.page || DEFAULT_PAGE;
    
    return { pageInfo, filter, setPage, getLoading, setFilter, setSort, setViewCount, sort, viewCount, items }
}


export const useUserUpdate = (options?: MutationHookOptions<userUpdate,userUpdateVariables>) => {
    const [userUpdateMu, { loading: updateLoading }] = useMutation<userUpdate, userUpdateVariables>(USER_UPDATE, {
        ...getRefetch(USER_LIST, USER_FIND_BY_ID),
        awaitRefetchQueries:true,
        ...options
    });
    
    const userUpdate = (variables: userUpdateVariables, onSucess?: () => void) => {
        userUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.UserUpdate?.ok) {
                onSucess?.()
            }
        })
    }

    return {userUpdate, updateLoading}
}