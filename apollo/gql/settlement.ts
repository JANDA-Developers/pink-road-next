import { gql } from "@apollo/client"
import {  F_BOOKING, F_PAGE, F_PAYMENT, F_PRODUCT, F_USER } from "./fragments"

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
    error {
      location
      severity
      code
      message
    }
    data  {
      ...Fsettlement
      product {
        ...Fproduct
        author {
            ...Fuser
        }
        category {
            _id
            label
        }
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
  ${F_PRODUCT}
  ${F_USER}
  ${F_BOOKING}
  ${F_PAYMENT}
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
    error {
      location
      severity
      code
      message
    }
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
        author {
            ...Fuser
        }
        category {
            _id
            label
        }
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
        error {
location
        severity
        code
        message
}
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
        error {
location
        severity
        code
        message
}
    }
  }
`;

export const SETTLEMENT_REJECT = gql`
  mutation settlementReject(
      $settlementId: String!
      $reason:String!
    ) {
      SettlementReject(
        settlementId: $settlementId
        reason: $reason
      ) {
        ok
        error {
location
        severity
        code
        message
}
    }
  }
`;