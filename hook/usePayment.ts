import { useQuery } from "@apollo/client";
import { useState } from "react";
import { PAYMENT_LIST, SETTLEMENT_CAL } from "../apollo/gql/payment";
import { paymentList_PaymentList_data, paymentList, paymentListVariables, settlementCal, settlementCalVariables, _PaymentFilter, _PaymentSort} from "../types/api";
import { generateListQueryHook } from "../utils/query";

export const usePaymentList = generateListQueryHook<_PaymentFilter,_PaymentSort,paymentList,paymentListVariables,paymentList_PaymentList_data>(PAYMENT_LIST)

export const useSettlementCal = ({
    initialFilter
}: {
    initialFilter?:_PaymentFilter
}) => {
    const [filter, setFilter] = useState<_PaymentFilter>(initialFilter || {});
    const {data} = useQuery<settlementCal,settlementCalVariables>(SETTLEMENT_CAL,{
        variables: {
            filter
        }
    });
    const amt = data?.SettlementCal.amt || 0;

    return {setFilter,amt}
}