import { DocumentNode, MutationHookOptions, QueryHookOptions, useMutation } from "@apollo/client";
import { capitalize } from "./stirng";
import { ListInitOptions, useListQuery } from "../hook/useListQuery";
import { useEffect, useState } from "react";
import {useLazyQuery} from "@apollo/client";
import { DEFAULT_PAGE } from "../types/const";
import { Fpage } from "../types/api";
import { CustomErrorResponse } from "aws-sdk/clients/cloudfront";
import { ErrorCode } from "./enumToKr";
import { getFromUrl } from "./url";
import { cloneObject } from "./clone";
interface genrateOption<Q,V> extends QueryHookOptions<Q,V> {
    queryName?: string;
    skipInit?: boolean;
    overrideVariables?: Partial<V>
    getEditableobject?: boolean;
};

const dataCheck = (data:any,operationName:string, checkProperty: string[] = ["data","page"]) => {
    try {
    if(data?.hasOwnProperty(operationName) === false) {
        console.warn(`result data object dose not have property ${operationName} look this above object ↑ `)
    }

    checkProperty.forEach(p => {
        if(data?.[operationName].hasOwnProperty(p) === false) {
            console.error(p);
            console.warn(`result data object dose not have property ${p} look this above object ↑ `)
        }
    })
    } catch (e){
        console.log(operationName);
        console.log(operationName);
    console.error("==========FATAL ERROR==========");
    console.error(e);
    }
}


const getPageNumber = () => {
    const pageNum = getFromUrl("pageNum");
    return pageNum ? parseInt(pageNum) : 1 
}

export const generateListQueryHook = <F,S,Q,V,R>(
    QUERY: DocumentNode,
    queryInitDefault: Partial<ListInitOptions<F, S>> = {},
    defaultOptions?: genrateOption<Q,V>
) => {

    //집어넣은 옵션에 오버라드가 안되고있음
    //좌항이 우선순위 더 높음
    // 우항 오브젝트에 좌학 객체를 덮어 넣으면됨
    const listQueryHook = (
        initialOption: Partial<ListInitOptions<F, S>> = {},
        options: genrateOption<Q, V> = {...defaultOptions}
    )=> {
        const defaultInitData = {
            initialPageIndex: getPageNumber(),
            initialSort: [],
            initialFilter: {} as F,
            initialViewCount: 10
        }
        const initialData = Object.assign(defaultInitData, queryInitDefault, initialOption); 
        const { variables, overrideVariables, ...ops } = options;
        const { integratedVariable,...params } = useListQuery(initialData)
        const [getData, { data, loading: getLoading,...queryElse }] = useLazyQuery<Q,V>(QUERY,{
            fetchPolicy: "cache-first",
            // @ts-ignore
            variables: {
                ...integratedVariable,
                ...variables,
                ...overrideVariables
            },
            ...ops
        })

        const operationName = defaultOptions?.queryName || getQueryName(QUERY);

        dataCheck(data,operationName)
        // @ts-ignore
        const items: R[] = data?.[operationName]?.data || []
        const pageInfo: Fpage = (data as any)?.[operationName]?.page || DEFAULT_PAGE


        useEffect(()=>{
            getData()
        },[
            params.filter,
            params.sort,
            params.viewCount,
            params.page
        ])
        
        useEffect(()=>{
            params.setPage(1)
        },[
            params.viewCount,
            params.filter
        ])

        return { pageInfo,  getLoading, items, ...params,...queryElse }
    }

    return listQueryHook
}

export const generateQueryHook = <Q, R, V = undefined>(
    QUERY:DocumentNode,
    {skipInit,...initOptions}: genrateOption<Q,V> | undefined = {}
) => {

    const queryHook  = (defaultOptions?: QueryHookOptions<Q,V>) => {
        const [getData, { data:_data,error, loading:getLoading,...context }] = useLazyQuery<Q,V>(QUERY, {
            nextFetchPolicy: "network-only",
            ...initOptions,
            ...defaultOptions,
        })

        
        const operationName = initOptions?.queryName || getQueryName(QUERY);
        dataCheck(_data, operationName,["data"])

        type Result = R extends Array<any> ? R : R | undefined 
        // @ts-ignore
        const data: Result = _data?.[operationName]?.data || undefined;


        useEffect(()=>{
            if(!skipInit)
                getData();
        },[])
        
        return {  getData, getLoading, data,...context }
    }
    return queryHook
}


// refetchQueries: [getOperationName(BOOKING_LIST) || ""],

export const generateMutationHook = <M,V>(MUTATION:DocumentNode,defaultOptions?: MutationHookOptions<M,V>) => {
    const mutationHook = (options?: MutationHookOptions<M,V>) => {
        const muHook = useMutation<M, V>(MUTATION, {
            ...defaultOptions,
            ...options,
            onCompleted: (result) => {
                const operationName = getQueryName(MUTATION);
                // @ts-ignore
                const err:CustomErrorResponse = result[operationName]?.error;
                if(err) {
                    // @ts-ignore
                    const msg = ErrorCode[err.ErrorCode]
                    if(msg) {
                        alert(msg);
                    }
                }
                options?.onCompleted?.(result) || defaultOptions?.onCompleted?.(result)
            }
        });
        return muHook
    }
    return mutationHook
}


export const generateFindQuery = <Q,V,ResultFragment>(findBy: keyof V, QUERY:DocumentNode) => {
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
        dataCheck(data,operationName,["data"])
   
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