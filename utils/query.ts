import {
    DocumentNode,
    MutationHookOptions,
    QueryHookOptions,
    useMutation,
} from "@apollo/client";
import { capitalize } from "./stirng";
import { ListInitOptions, useListQuery } from "../hook/useListQuery";
import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { DEFAULT_PAGE } from "../types/const";
import { ERR_CODE, Fpage } from "../types/api";
import { CustomErrorResponse } from "aws-sdk/clients/cloudfront";
import { getFromUrl } from "./url";
import { IBoardMoveData } from "../components/board/View";
import { useRouter } from "next/router";

export const pageLoadingEffect = (loading: boolean, operationName: string) => {
    if (typeof document === "undefined") return;
    const MuPageLoading = document.getElementById("MuPageLoading");
    if (MuPageLoading) {
        const fetches = MuPageLoading.dataset.fetchingid?.split(",");
        if (loading) {
            if (!fetches?.includes(operationName)) {
                fetches?.push(operationName);
                MuPageLoading.dataset.fetchingid = fetches?.join(",");
            }
        } else {
            MuPageLoading.dataset.fetchingid = fetches
                ?.filter((fetch) => fetch !== operationName)
                .join(",");
        }
    }
};

interface genrateOption<Q, V> extends QueryHookOptions<Q, V> {
    queryName?: string;
    skip?: boolean;
    skipInit?: boolean;
    overrideVariables?: Partial<V>;
    getEditableobject?: boolean;
}

const userErrorHandle = (result: any) => {
    // @ts-ignore
    if (result?.error) {
        // @ts-ignore
        if (result.error.code === ERR_CODE.BACKEND_MESSAGE) {
            // @ts-ignore
            alert(result?.error?.message);
        }
    }
};

const dataCheck = (
    data: any,
    operationName: string,
    checkProperty: string[] = ["data", "page"]
) => {
    try {
        if (data?.hasOwnProperty(operationName) === false) {
            console.warn(
                `result data object dose not have property ${operationName} look this above object ↑ `
            );
        }

        checkProperty.forEach((p) => {
            if (data?.[operationName].hasOwnProperty(p) === false) {
                console.error(p);
                console.error(
                    `result data object dose not have property ${p} look this above object ↑ `
                );
            }
        });
    } catch (e) {
        console.error("==========FATAL ERROR==========");
        console.error(e);
    }
};

const getPageNumber = () => {
    const pageNum = getFromUrl("page");
    return pageNum ? parseInt(pageNum) : 1;
};

export const generateListQueryHook = <F, S, Q, V, R>(
    QUERY: DocumentNode,
    queryInitDefault: Partial<ListInitOptions<F, S>> = {},
    defaultOptions?: genrateOption<Q, V>
) => {
    //집어넣은 옵션에 오버라드가 안되고있음
    //좌항이 우선순위 더 높음
    // 우항 오브젝트에 좌학 객체를 덮어 넣으면됨
    const listQueryHook = (
        initialOption: Partial<ListInitOptions<F, S>> = {},
        options: genrateOption<Q, V> = { ...defaultOptions }
    ) => {
        const defaultInitData = {
            initialPageIndex: getPageNumber(),
            initialSort: [],
            initialFilter: {} as F,
            initialViewCount: 10,
            fixingFilter: {},
        };

        const initialData = Object.assign(
            defaultInitData,
            queryInitDefault,
            initialOption
        );

        const { skipInit, skip, variables, overrideVariables, ...ops } =
            options;
        initialData.initialPageIndex;
        const { integratedVariable, ...params } = useListQuery(initialData);
        const [getData, { data, loading: getLoading, ...queryElse }] =
            useLazyQuery<Q, V>(QUERY, {
                fetchPolicy: "cache-and-network",
                // @ts-ignore
                variables: {
                    ...integratedVariable,
                    ...variables,
                    ...overrideVariables,
                },
                ...ops,
            });

        const operationName = defaultOptions?.queryName || getQueryName(QUERY);

        dataCheck(data, operationName);
        // @ts-ignore
        const items: R[] = data?.[operationName]?.data || [];
        const pageInfo: Fpage =
            (data as any)?.[operationName]?.page || DEFAULT_PAGE;

        // @ts-ignore
        userErrorHandle(data?.[operationName]);

        useEffect(() => {
            if (skip) return;
            getData();
        }, [params.filter, params.sort, params.viewCount, params.page]);

        useEffect(() => {
            params.setPage(1);
        }, [params.viewCount, params.filter]);

        useEffect(() => {
            params.setPage(initialData.initialPageIndex);
        }, []);

        pageLoadingEffect(getLoading, operationName);

        useEffect(() => {
            return () => {
                pageLoadingEffect(false, operationName);
            };
        }, []);

        return { pageInfo, getLoading, items, ...params, ...queryElse };
    };

    return listQueryHook;
};

export const generateQueryHook = <Q, R, V = undefined>(
    QUERY: DocumentNode,
    { skipInit, ...initOptions }: genrateOption<Q, V> | undefined = {}
) => {
    const queryHook = (defaultOptions?: genrateOption<Q, V>) => {
        const [
            getData,
            { data: _data, error, loading: getLoading, ...context },
        ] = useLazyQuery<Q, V>(QUERY, {
            nextFetchPolicy: "cache-and-network",
            ...initOptions,
            ...defaultOptions,
        });

        const operationName = initOptions?.queryName || getQueryName(QUERY);
        dataCheck(_data, operationName, ["data"]);

        type Result = R extends Array<any> ? R : R | undefined;
        // @ts-ignore
        const data: Result = _data?.[operationName]?.data || undefined;

        useEffect(() => {
            // @ts-ignore
            userErrorHandle(_data?.[operationName]);
        }, [_data]);

        useEffect(() => {
            if (!defaultOptions?.skipInit && !skipInit) getData();
        }, []);

        pageLoadingEffect(getLoading, operationName);

        useEffect(() => {
            return () => {
                pageLoadingEffect(false, operationName);
            };
        }, []);

        return { getData, getLoading, data, ...context };
    };
    return queryHook;
};

// refetchQueries: [getOperationName(BOOKING_LIST) || ""],

export const generateMutationHook = <M, V>(
    MUTATION: DocumentNode,
    defaultOptions?: MutationHookOptions<M, V>
) => {
    const mutationHook = (options?: MutationHookOptions<M, V>) => {
        const operationName = getQueryName(MUTATION);
        const muHook = useMutation<M, V>(MUTATION, {
            ...defaultOptions,
            ...options,
            awaitRefetchQueries: true,
            onCompleted: (result) => {
                // @ts-ignore
                const err: CustomErrorResponse = result[operationName]?.error;
                // @ts-ignore
                userErrorHandle(result[operationName]);
                // @ts-ignore
                options?.onCompleted?.(result) ||
                    defaultOptions?.onCompleted?.(result);
            },
        });

        const muFn = muHook[0];

        const duplicatePreventFn = (() => {
            if (muHook?.[1]?.loading) return () => {};
            return muFn;
        })() as typeof muFn;

        muHook[0] = duplicatePreventFn;

        pageLoadingEffect(muHook[1].loading, operationName);

        useEffect(() => {
            return () => {
                pageLoadingEffect(false, operationName);
            };
        }, []);

        return muHook;
    };
    return mutationHook;
};

export const generateFindQuery = <Q, V, ResultFragment>(
    findBy: keyof V,
    QUERY: DocumentNode
) => {
    const findQueryHook = (key?: any, options: genrateOption<Q, V> = {}) => {
        const [getData, { data, loading, error: apolloError, ...context }] =
            useLazyQuery<Q, V>(QUERY, {
                skip: !key,
                nextFetchPolicy: "network-only",
                // @ts-ignore
                variables: findBy
                    ? {
                          [findBy]: key,
                      }
                    : undefined,
                ...options,
            });

        const operationName = getQueryName(QUERY);

        const item: ResultFragment | undefined =
            // @ts-ignore
            data?.[operationName]?.data || undefined;
        // @ts-ignore
        const errorFromServer: string = data?.[operationName]?.error;
        dataCheck(data, operationName, ["data"]);
        // @ts-ignore
        const _next = data?.[operationName]?.next;
        // @ts-ignore
        const _prev = data?.[operationName]?.before;

        const next = _next as IBoardMoveData | undefined;
        const prev = _prev as IBoardMoveData | undefined;

        // @ts-ignore
        userErrorHandle(data?.[operationName]);

        pageLoadingEffect(loading, operationName);

        useEffect(() => {
            if (options.skipInit) return;
            if (key) {
                getData();
            }
        }, [key]);

        useEffect(() => {
            return () => {
                pageLoadingEffect(false, operationName);
            };
        }, []);

        const error = apolloError || errorFromServer;

        return { item, loading, error, getData, next, prev, ...context };
    };

    return findQueryHook;
};

export const getQueryName = (QUERY: DocumentNode) => {
    const operation = QUERY.definitions[0];

    // @ts-ignore
    const operationName = operation && operation.name.value;

    return capitalize(operationName);
};
