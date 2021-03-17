import {  estimateItemListFindOne, estimateItemListFindOne_EstimateItemListFindOne_data, estimateItemListUpdate, estimateItemListUpdateVariables, _PortfolioSort } from "../types/api";
import { generateMutationHook, generateQueryHook } from "../utils/query";
import { ESTIMATE_ITEM_FIND_ONE, ESTIMATE_ITEM_UPDAET } from "../apollo/gql/estimate";
import { getRefetch } from "../utils/api";

export const useEstimateFindOne = generateQueryHook<estimateItemListFindOne,estimateItemListFindOne_EstimateItemListFindOne_data[]>(ESTIMATE_ITEM_FIND_ONE);
export const useEstimateUpdate = generateMutationHook<estimateItemListUpdate,estimateItemListUpdateVariables>(ESTIMATE_ITEM_UPDAET, {...getRefetch(ESTIMATE_ITEM_FIND_ONE)});
