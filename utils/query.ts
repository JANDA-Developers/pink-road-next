import { DocumentNode, MutationHookOptions, QueryHookOptions, useMutation } from "@apollo/client";
import { capitalize } from "./stirng";
import { ListInitOptions, useListQuery } from "../hook/useListQuery";
import { useEffect } from "react";
import {useLazyQuery} from "@apollo/client";
import { DEFAULT_PAGE } from "../types/const";

export const generateListQueryHook = <F,S,Q,V,ResultFragment>(
    QUERY: DocumentNode,
    {defaultSort}: {
    defaultSort:S[]
}) => {

    const listQueryHook = (
        {
            initialPageIndex = 1,
            initialSort = defaultSort,
            initialFilter,
            initialViewCount = 20,
        }: Partial<ListInitOptions<F, S>> = {},
        options: QueryHookOptions<Q, V> = {}
    )=> {
        const { variables: overrideVariables, ...ops } = options;
        const { integratedVariable,...params } = useListQuery({
            initialFilter,
            initialPageIndex,
            initialSort,
            initialViewCount
        })

        
        const [getData, { data, loading: getLoading }] = useLazyQuery<Q,V>(QUERY,{
            fetchPolicy: "network-only",
            // @ts-ignore
            variables: {
                ...integratedVariable,
                ...overrideVariables
            },
            ...ops
        })

      
        const operationName = getQueryName(QUERY);
        // @ts-ignore
        const items: ResultFragment[] = data?.[operationName]?.data || []
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

        return { pageInfo,  getLoading, items, ...params }
    }

    return listQueryHook
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


export const generateFindQuery = <Q,V,ResultFragment>(findBy: keyof V,QUERY:DocumentNode) => {
    const findQueryHook = (key:any, options:QueryHookOptions<Q, V> = {}) => {
        const [getData, { data, loading }] = useLazyQuery<Q, V>(QUERY, {
            skip: !key,
            nextFetchPolicy: "network-only",
            // @ts-ignore
            variables: {
                [findBy]: key
            },
            ...options,
        })
        
        const operationName = getQueryName(QUERY);
        // @ts-ignore
        const item:ResultFragment | undefined = data?.[operationName]?.data | undefined;

        useEffect(()=>{
            getData()
        },[key])

        return {item,loading}
    }

    return findQueryHook
}


export const getQueryName = (QUERY:DocumentNode) => {
    const operation = QUERY.definitions[0];
    // @ts-ignore
    const operationName = operation && operation.name.value;

    return capitalize(operationName);
}