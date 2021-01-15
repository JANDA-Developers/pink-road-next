import { SETTLEMENT_ACCEPT, SETTLEMENT_COMPLETE, SETTLEMENT_FIND_BY_ID, SETTLEMENT_LIST, SETTLEMENT_REQUEST } from "../apollo/gql/settlement";
import { settlementList, settlementListVariables, Fsettlement, _SettlementFilter, _SettlementSort, settlementRequest, settlementRequestVariables, settlementAccept, settlementAcceptVariables, settlementComplete, settlementCompleteVariables, settlementFindById, settlementFindByIdVariables, settlementFindById_SettlementFindById_data, settlementList_SettlementList_data } from "../types/api";
import { getRefetch } from "../utils/api";
import { generateFindQuery, generateListQueryHook, generateMutationHook } from "../utils/query";

export const useSettlementFindById = generateFindQuery<settlementFindById, settlementFindByIdVariables, settlementFindById_SettlementFindById_data>("_id", SETTLEMENT_FIND_BY_ID);
export const useSettlementList = generateListQueryHook<_SettlementFilter, _SettlementSort, settlementList, settlementListVariables, settlementList_SettlementList_data>(SETTLEMENT_LIST, { initialSort: [_SettlementSort.createdAt_desc] });
export const useSettlementsRequest = generateMutationHook<settlementRequest, settlementRequestVariables>(SETTLEMENT_REQUEST, {
    ...getRefetch(SETTLEMENT_LIST)
});
export const useSettlementsAccept = generateMutationHook<settlementAccept, settlementAcceptVariables>(SETTLEMENT_ACCEPT, {
    ...getRefetch(SETTLEMENT_LIST)
});
export const useSettlementsComplete = generateMutationHook<settlementComplete, settlementCompleteVariables>(SETTLEMENT_COMPLETE, {
    ...getRefetch(SETTLEMENT_LIST)
});
