import { estimateItemCreate, estimateItemCreateVariables, estimateItemDelete, estimateItemDeleteVariables, estimateItemList, estimateItemListVariables, estimateItemList_EstimateItemList_data, estimateItemUpdate, estimateItemUpdateVariables } from "../types/api";
import {  _PortfolioSort, _EstimateItemFilter, _EstimateItemSort } from "../types/api";
import { getRefetch } from "../utils/api";
import {  generateListQueryHook, generateMutationHook } from "../utils/query";
import { ESTIMATE_ITEM_CREATE, ESTIMATE_ITEM_DELETE, ESTIMATE_ITEM_LIST, ESTIMATE_ITEM_UPDAET } from "../apollo/gql/estimate";

export const useEstimateList = generateListQueryHook<_EstimateItemFilter,_EstimateItemSort,estimateItemList,estimateItemListVariables,estimateItemList_EstimateItemList_data>(ESTIMATE_ITEM_LIST, {initialSort: [_EstimateItemSort.createdAt_asc]});
export const useEstimateCreate = generateMutationHook<estimateItemCreate,estimateItemCreateVariables>(ESTIMATE_ITEM_CREATE,{...getRefetch(ESTIMATE_ITEM_LIST)});
export const useEstimateDelete = generateMutationHook<estimateItemDelete,estimateItemDeleteVariables>(ESTIMATE_ITEM_DELETE,{...getRefetch(ESTIMATE_ITEM_LIST)});
export const useEstimateUpdate = generateMutationHook<estimateItemUpdate, estimateItemUpdateVariables>(ESTIMATE_ITEM_UPDAET,{...getRefetch(ESTIMATE_ITEM_LIST)});
