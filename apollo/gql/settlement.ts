import { gql } from "@apollo/client"
import { F_BOOKING, F_PAGE, F_PAYMENT, F_PRODUCT, F_USER } from "./fragments"

export const F_FEEPOLICY = gql`
    fragment Ffeepolicy on FeePolicy {
      _id
      createdAt
      updatedAt
      isDelete
      status
      niceCardPercent
      jandaCardPercent
      cardPercent
      bankPercent
      storePercent
}
`

export const F_SETTLEMENT = gql`
    fragment Fsettlement on Settlement  {
      _id
      createdAt
      updatedAt
      isDelete
      status
      totalPrice
      cardPrice
      bankPrice
      settlementPrice
      totalFee
      cardFee
      niceCardFee
      jandaCardFee
      bankFee
      storeFee
      additionFeeSum
      jandaFee
      cancelReturnPriceTotal
      cancelReturnPrice
      reserveDiffPrice
      reserveDiffPriceTotal
      payReqPrice
      requestDate
      acceptDate
      completeDate
      cancelDate
      product {
        _id
        code
        title
        status
        adult_price
        kids_price
        baby_price
      }
    }
`


export const SETTLEMENT_FIND_BY_ID = gql`
  query settlementFindById(
    $_id: String!
  ) {
  SettlementFindById(
    _id: $_id
  ) {
    ok
    error
    data  {
      ...Fsettlement
      product {
        ...Fproduct
        bookings {
          ...Fbooking
          payment {
            ...Fpayment
          }
        }
      }
    }
  }
  }
  ${F_BOOKING}
  ${F_PAYMENT}
  ${F_PAGE}
  ${F_SETTLEMENT}
`

export const SETTLEMENT_LIST = gql`
  query settlementList(
    $sort: [_SettlementSort!]
    $filter: _SettlementFilter
    $pageInput: pageInput!
  ) {
  SettlementList(
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
      ...Fsettlement
      seller {
        ...Fuser
    }
      product {
        bookerSummary {
          adultCount
          babyCount
          kidsCount
          completePeople
          readyPoeple
          cancelCompletePeople
          cancelPeople 
        }
        ...Fproduct
      }
    }
  }
  }
  ${F_USER}
  ${F_PRODUCT}
  ${F_PAGE}
  ${F_SETTLEMENT}
`

export const SETTLEMENT_REQUEST = gql`
  mutation settlementRequest(
      $params: [ReturnTargetInput!]!
      $settlementId: String!
    ) {
    SettlementRequest(
        params: $params,
        settlementId: $settlementId
      ) {
        ok
        error 
    }
  }
`;


export const SETTLEMENT_ACCEPT = gql`
  mutation settlementAccept(
      $settlementId: String!
    ) {
    SettlementAccept(
        settlementId: $settlementId
      ) {
        ok
        error 
    }
  }
`;

export const SETTLEMENT_COMPLETE = gql`
  mutation settlementComplete(
      $settlementId: String!
    ) {
    SettlementComplete(
        settlementId: $settlementId
      ) {
        ok
        error 
    }
  }
`;