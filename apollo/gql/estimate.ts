import { gql } from "@apollo/client"
import { F_PAGE } from "./fragments"

export const F_ESTIMATE_OPTION = gql`
    fragment FestimateOption  on EstimateOption  {
        optionName
        option
        price
        isUse
    }
`


export const F_ESTIMATE_ITEM = gql`
    fragment FestimateItem  on EstimateItem  {
        _id
      createdAt
        updatedAt
        isDelete
        title
        options {
            ...FestimateOption
        }
    }
    ${F_ESTIMATE_OPTION}
`

export const ESTIMATE_ITEM_LIST = gql`
    query estimateItemList(
        $sort: [_EstimateItemSort!]
        $filter: _EstimateItemFilter
        $pageInput: pageInput!
    ) {
    EstimateItemList(
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
            ...FestimateItem
        }
    }
}
${F_PAGE}
${F_ESTIMATE_ITEM}
`

export const ESTIMATE_ITEM_CREATE = gql`
  mutation estimateItemCreate(
    $params: [EstimateItemCreateInput!]!
  ) {
    EstimateItemsCreate(
      params:$params
    ) {
    ok
    error {
      location
      severity
      code
      message
    }
    data {
      _id
    }
  }
}
`
export const ESTIMATE_ITEM_DELETE = gql`
  mutation estimateItemDelete(
    $id: String!
  ) {
    EstimateItemDelete(
      id:$id
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
`
export const ESTIMATE_ITEM_UPDAET = gql`
  mutation estimateItemUpdate(
    $params: EstimateItemUpdateInput!
    $_id: String!
  ) {
  EstimateItemUpdate(
      params:$params
      _id: $_id
    ) {
    ok
    error {
      location
              severity
              code
              message
      }
    data {
      _id
    }
  }
}
`