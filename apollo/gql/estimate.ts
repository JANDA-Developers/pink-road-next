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
        title
        isUse
        options {
            ...FestimateOption
        }
    }
    ${F_ESTIMATE_OPTION}
`

export const ESTIMATE_ITEM_UPDAET = gql`
  mutation estimateItemListUpdate(
    $params:[EstimateItemUpdateInput!]!
  ) {
  EstimateItemListUpdate(
      params:$params
    ) {
    ok
    error {
      location
              severity
              code
              message
      }
  }
}`

export const ESTIMATE_ITEM_FIND_ONE = gql`
  query estimateItemListFindOne {
    EstimateItemListFindOne{
      ok
      error {
        location
              severity
              code
              message
      }
      data {
        ...FestimateItem
      }
    }
  }
${F_ESTIMATE_ITEM}
`