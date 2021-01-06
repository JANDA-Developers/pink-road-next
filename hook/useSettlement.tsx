import { SETTLEMENT_ACCEPT, SETTLEMENT_COMPLETE, SETTLEMENT_LIST, SETTLEMENT_REQUEST } from "../apollo/gql/settlement";
import { settlementList, settlementListVariables, Fsettlement, _SettlementFilter, _SettlementSort, settlementRequest, settlementRequestVariables, settlementAccept, settlementAcceptVariables, settlementComplete, settlementCompleteVariables } from "../types/api";
import { getRefetch } from "../utils/api";
import { generateListQueryHook, generateMutationHook } from "../utils/query";

export const useSettlementList = generateListQueryHook<_SettlementFilter, _SettlementSort, settlementList, settlementListVariables, Fsettlement>(SETTLEMENT_LIST, { initialSort: [_SettlementSort.createdAt_desc] });
export const useSettlementsRequest = generateMutationHook<settlementRequest, settlementRequestVariables>(SETTLEMENT_REQUEST, {
    ...getRefetch(SETTLEMENT_LIST)
});
export const useSettlementsAccept = generateMutationHook<settlementAccept, settlementAcceptVariables>(SETTLEMENT_ACCEPT, {
    ...getRefetch(SETTLEMENT_LIST)
});
export const useSettlementsComplete = generateMutationHook<settlementComplete, settlementCompleteVariables>(SETTLEMENT_COMPLETE, {
    ...getRefetch(SETTLEMENT_LIST)
});
