import { gql } from "graphql-request";
import { F_ANSWER } from "./answer";

export const F_PRODUCT_REVIEW = gql`
    fragment FproductReview  on ProductReview {
_id
createdAt
updatedAt
isDelete
title
contents
authorId
author {
    _id
    email
    name
    phoneNumber
    profileImg {
      uri
    }
}
boardTypeName
isNotice
isOpen
summary
subTitle
keyWards
viewCount
likeCount
slug
authorName
productName
productAuthorName
productAuthorId
productCode
groupCode
rating
    }
`

export const PRODUCTREVIEW_FIND_BY_ID = gql`
query productreviewFindById(
  $id: String!
) {
  ProductReviewFindById(
    id:$id
  ) {
  ok
  error {
    location
            severity
            code
            message
    }
    data {
        ...Fanswer
    }
}
}
${F_ANSWER}
`
export const PRODUCTREVIEW_LIST = gql`
query productreviewList(
$sort: [_ProductReviewSort!]
$filter: _ProductReviewFilter
$pageInput: pageInput!
) {
ProductReviewList(
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
    ...Fanswer
  }
}
}
${F_ANSWER}
`


export const PRODUCTREVIEW_CREATE = gql`
  mutation productreviewCreate(
    $params: ProductReviewCreateInput!
  ) {
    ProductReviewCreate(
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
export const PRODUCTREVIEW_DELETE = gql`
  mutation productreviewDelete(
    $id: String!
  ) {
    ProductReviewDelete(
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
export const PRODUCTREVIEW_UPDAET = gql`
  mutation productreviewUpdate(
    $params: ProductReviewUpdateInput!
    $id: String!
  ) {
  ProductReviewUpdate(
      params:$params
      id: $id
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
