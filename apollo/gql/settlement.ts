import { gql } from "@apollo/client"
import { F_PAGE } from "./fragments"

export const F_SETTLEMENT_POLICY = gql`
    fragment FsettlementPolicy on SettlementPolicy {
        _id
        createdAt
        updatedAt
        isDelete
        status
        niceCardPercent
        jandaCardPercent
        cardPercent
        passbookPercent
        storePercent
    } 
`

export const F_SETTLEMENT = gql`
    fragment Fsettlement on Settlement  {
        _id
        createdAt
        updatedAt
        isDelete
        seller {
            _id
            name
        }
        product {
            _id
            title
        }
        status
        feePolicy {
            ...FsettlementPolicy   
        }
        totalPrice
        totalFee
        jandaFee
        jandaProfit
        storeFee
        storeProfit
        sellerProfit
        cardPrice
        cardFee
        passbookPrice
        passbookFee
        cancelReturnPriceTotal
        cancelReturnPrice
        reserveDiffPriceTotal
        settlementPrice
        requestDate
        acceptDate
        completeDate
        cancelDate
    }
    ${F_SETTLEMENT_POLICY}
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
    }
  }
  }
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