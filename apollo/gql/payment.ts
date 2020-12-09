import { gql } from "@apollo/client"
import { F_PAGE, F_PAYMENT } from "./fragments"

export const PAYMENT_LIST = gql`
  query paymentList(
    $sort: [_PaymentSort!]
    $filter: _PaymentFilter
    $pageInput: pageInput!
  ) {
  PaymentList(
    sort: $sort
    pageInput: $pageInput
    filter: $filter
  ) {
    ok
    error
    page {
      ...Fpage
    }
    data  {
      ...Fpayment
    }
  }
  }
  ${F_PAGE}
  ${F_PAYMENT}
`


export const SETTLEMENT_CAL = gql`
  query settlementCal($filter:_PaymentFilter!) {
    SettlementCal(filter:$filter) {
      ok
      error
      amt
    } 
  }
`