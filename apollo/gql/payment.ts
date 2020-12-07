import { gql } from "@apollo/client"
import { F_PAYMENT } from "./fragments"

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
  ${F_PAYMENT}
`