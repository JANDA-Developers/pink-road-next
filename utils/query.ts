import { DocumentNode, MutationHookOptions, QueryHookOptions, useMutation } from "@apollo/client";
import { capitalize } from "./stirng";
import { ListInitOptions, useListQuery } from "../hook/useListQuery";
import { useEffect } from "react";
import {useLazyQuery} from "@apollo/client";
import { DEFAULT_PAGE } from "../types/const";


const dataCheck = (data:any,operationName:string, checkProperty: string[] = ["data","page"]) => {

    if(data?.hasOwnProperty(operationName) === false) {
        throw Error(`result data object dose not have property ${operationName} look this above object ↑ `)
    }

    checkProperty.forEach(p => {
        if(data?.[operationName].hasOwnProperty(p) === false) {
            console.error(p);
            throw Error(`result data object dose not have property ${p} look this above object ↑ `)
        }
    })
}

export const generateListQueryHook = <F,S,Q,V,R>(
    QUERY: DocumentNode,
    queryInit: Partial<ListInitOptions<F, S>> = {},
    defaultOptions?: QueryHookOptions<Q,V>
) => {
    const listQueryHook = (
        {
            initialPageIndex = 1,
            initialSort = [],
            initialFilter = {} as F,
            initialViewCount = 20,
        }: Partial<ListInitOptions<F, S>> = {...queryInit},
        options: QueryHookOptions<Q, V> = {...defaultOptions}
    )=> {
        const { variables: overrideVariables, ...ops } = options;
        const { integratedVariable,...params } = useListQuery({
            initialFilter,
            initialPageIndex,
            initialSort,
            initialViewCount
        })
        
        const [getData, { data, loading: getLoading,...queryElse }] = useLazyQuery<Q,V>(QUERY,{
            fetchPolicy: "cache-first",
            // @ts-ignore
            variables: {
                ...integratedVariable,
                ...overrideVariables
            },
            ...ops
        })

        const operationName = getQueryName(QUERY);
        dataCheck(data,operationName)
        // @ts-ignore
        const items: R[] = data?.[operationName]?.data || []
        // @ts-ignore
        const pageInfo: Fpage = data?.[operationName]?.page || DEFAULT_PAGE


        useEffect(()=>{
            getData()
        },[
            params.filter,
            params.sort,
            params.viewCount,
            params.page
        ])

        return { pageInfo,  getLoading, items, ...params,...queryElse }
    }

    return listQueryHook
}

export const gnerateQueryHook = <Q, R, V = undefined>(
    QUERY:DocumentNode,
    initOptions?: QueryHookOptions<Q,V>
) => {

    const queryHook  = (defaultOptions?: QueryHookOptions<Q,V>) => {
        const [getData, { data:_data, loading:getLoading }] = useLazyQuery<Q,V>(QUERY, {
            nextFetchPolicy: "cache-first",
            ...initOptions,
            ...defaultOptions
        })
        
        const operationName = getQueryName(QUERY);
        dataCheck(_data,operationName,["data"])

        type Result = R extends Array<any> ? R : R | undefined 
        // @ts-ignore
        const data: Result = _data?.[operationName]?.data || undefined;

        useEffect(()=>{
            getData();
        },[])
        
        return {  getLoading, data }
    }
    return queryHook
}

// refetchQueries: [getOperationName(BOOKING_LIST) || ""],

export const generateMutationHook = <M,V>(MUTATION:DocumentNode,defaultOptions?: MutationHookOptions<M,V>) => {
    const mutationHook = (options?: MutationHookOptions<M,V>) => {
        const muHook = useMutation<M, V>(MUTATION, {
            ...defaultOptions,
            ...options
        });
        return muHook
    }
    return mutationHook
}


export const generateFindQuery = <Q,V,ResultFragment>(findBy: keyof V | null, QUERY:DocumentNode) => {
    const findQueryHook = (key?:any, options:QueryHookOptions<Q, V> = {}) => {
        const [getData, { data, loading, error:apolloError }] = useLazyQuery<Q, V>(QUERY, {
            skip: !key,
            nextFetchPolicy: "network-only",
            // @ts-ignore
            variables: findBy ? {
                [findBy]: key
            } : undefined,
            ...options,
        })

        const operationName = getQueryName(QUERY);

        // @ts-ignore
        const item:ResultFragment | undefined = data?.[operationName]?.data || undefined;
        // @ts-ignore
        const errorFromServer:string = data?.[operationName]?.error;
        dataCheck(data,operationName)
   
        useEffect(()=>{
            if(key)
            getData()
        },[key])

        const error = apolloError || errorFromServer 

        return {item, loading, error}
    }

    return findQueryHook
}


export const getQueryName = (QUERY:DocumentNode) => {
    const operation = QUERY.definitions[0];
    // @ts-ignore
    const operationName = operation && operation.name.value;

    return capitalize(operationName);
}