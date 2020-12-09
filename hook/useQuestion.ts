import { MutationHookOptions, useMutation } from "@apollo/client";
import { getOperationName } from "@apollo/client/utilities";
import { QUESTION_DELETE, QUESTION_LIST, QUESTION_CREATE, QUESTION_UPDAET } from "../apollo/gql/question";
import { questionCreate, questionCreateVariables, questionDelete, questionDeleteVariables } from "../types/api";
import { questionFindById, questionFindByIdVariables } from "../types/api";
import { QueryHookOptions, useQuery } from "@apollo/client"
import { QUESTION_FIND_BY_ID } from "../apollo/gql/question";
import { Fpage, Fquestion, questionList, questionListVariables, _PortfolioSort, _QuestionFilter, _QuestionSort } from "../types/api";
import { DEFAULT_PAGE } from "../types/const";
import { IListHook, ListInitOptions, useListQuery } from "./useListQuery";
import { questionUpdate, questionUpdateVariables } from "../types/api";

export const useQuestionDelete = (options?: MutationHookOptions<questionDelete,questionDeleteVariables>) => {
    const [questionUpdateMu, { loading: deleteLoading }] = useMutation<questionDelete, questionDeleteVariables>(QUESTION_DELETE, {
        refetchQueries: [getOperationName(QUESTION_LIST) || ""],
        ...options
    });
    
    const questionDelete = (variables: questionDeleteVariables, onSucess?: () => void) => {
        questionUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.QuestionDelete.ok) {
                onSucess?.()
            }
        })
    }

    return {questionDelete, deleteLoading}
}



export interface IUseQuestionFindById {
    question?: Fquestion;
    loading: boolean;
}
export interface IuseQuestionFindByIdProp extends QueryHookOptions<questionFindById,questionFindByIdVariables> {
}

export const useQuestionFindById = (id?:string, {
    ...options
}:IuseQuestionFindByIdProp = {}):IUseQuestionFindById => {
    const { data, loading } = useQuery<questionFindById, questionFindByIdVariables>(QUESTION_FIND_BY_ID, {
        ...options,
        skip:!id,
        nextFetchPolicy: "cache-and-network",
        onCompleted: ({QuestionFindById})=> {
            if(!QuestionFindById.ok) {
                console.error(data?.QuestionFindById.error);
                alert("잘못된 접근 입니다.");
            }
        },
        variables: {
            id:id || ""
        }
    })

    const question = data?.QuestionFindById?.data || undefined
    
    return { question, loading }
}

interface IuseItemListProp extends Partial<ListInitOptions<_QuestionFilter, _QuestionSort>> {
    options?: QueryHookOptions<questionList, questionListVariables>
}

export interface IUseQuestionList extends IListHook<_QuestionFilter, _QuestionSort> {
    items: Fquestion[];
    getLoading: boolean;
    pageInfo: Fpage;
}


export const useQuestionList = ({
    initialPageIndex = 1,
    initialSort = [_QuestionSort.createdAt_desc],
    initialFilter = {},
    initialViewCount = 20,
    options = {}
}:IuseItemListProp = {}):IUseQuestionList => {
    const { variables: overrideVariables, ...ops } = options;
    const {filter,integratedVariable,setFilter,setPage,setSort,setViewCount,sort,viewCount} = useListQuery({
        initialFilter,
        initialPageIndex,
        initialSort,
        initialViewCount
    });
    const { data, loading:getLoading } = useQuery<questionList, questionListVariables>(QUESTION_LIST, {
        nextFetchPolicy: "network-only",
        variables: {
            ...integratedVariable,
            ...overrideVariables
        },
        ...ops
    })
    
    const items = data?.QuestionList.data || [];
    const pageInfo = data?.QuestionList.page || DEFAULT_PAGE;
    
    return { pageInfo, filter, setPage, getLoading, setFilter, setSort, setViewCount, sort, viewCount, items }
}


export const useQuestionUpdate = (options?: MutationHookOptions<questionUpdate,questionUpdateVariables>) => {
    const [questionUpdateMu, { loading: updateLoading }] = useMutation<questionUpdate, questionUpdateVariables>(QUESTION_UPDAET, {
        refetchQueries: [getOperationName(QUESTION_LIST) || ""],
        ...options
    });
    
    const questionUpdate = (variables: questionUpdateVariables, onSucess?: () => void) => {
        questionUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.QuestionUpdate?.ok) {
                onSucess?.()
            }
        })
    }

    return {questionUpdate, updateLoading}
}


export const useQuestionCreate = (options?: MutationHookOptions<questionCreate,questionCreateVariables>) => {
    const [questionUpdateMu, { loading: createLoading }] = useMutation<questionCreate,questionCreateVariables>(QUESTION_CREATE, {
        refetchQueries: [getOperationName(QUESTION_CREATE) || ""],
        ...options
    });
    
    const questionCreate = async (variables: questionCreateVariables, onSucess?: () => void) => {
        return await questionUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.QuestionCreate?.ok) {
                onSucess?.()
            }
            return data.data
        })
    }

    return {questionCreate, createLoading}
}