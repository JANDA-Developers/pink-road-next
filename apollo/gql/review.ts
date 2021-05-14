import { gql } from "@apollo/client";
import { F_ANSWER } from "./answer";
import { F_FILE, F_PAGE, F_PRODUCT } from "./fragments";

export const F_PRODUCT_REVIEW = gql`
    fragment FproductReview on ProductReview {
        _id
        createdAt
        updatedAt
        isDelete
        title
        contents
        author {
            _id
            email
            name
            phoneNumber
            profileImg {
                uri
            }
        }
        num
        boardType
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
        files {
            ...Ffile
        }
        productAuthorName
        productAuthorId
        productCode
        groupCode
        rating
    }
    ${F_FILE}
`;

export const PRODUCT_REVIEW_FIND_BY_ID = gql`
    query productReviewFindById($id: String!) {
        ProductReviewFindById(_id: $id) {
            ok
            error {
                location
                severity
                code
                message
            }
            data {
                answers {
                    ...Fanswer
                }
                ...FproductReview
            }
            next {
                _id
            }
            before {
                _id
            }
        }
    }
    ${F_ANSWER}
    ${F_PRODUCT_REVIEW}
`;
export const PRODUCT_REVIEW_LIST = gql`
    query productReviewList(
        $sort: [_ProductReviewSort!]
        $filter: _ProductReviewFilter
        $pageInput: pageInput!
    ) {
        ProductReviewList(sort: $sort, pageInput: $pageInput, filter: $filter) {
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
            data {
                ...FproductReview
            }
        }
    }
    ${F_PAGE}
    ${F_PRODUCT_REVIEW}
`;

export const PRODUCTREVIEW_CREATE = gql`
    mutation productreviewCreate($params: ProductReviewCreateInput!) {
        ProductReviewCreate(params: $params) {
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
`;
export const PRODUCTREVIEW_DELETE = gql`
    mutation productreviewDelete($id: String!) {
        ProductReviewDelete(id: $id) {
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
export const PRODUCTREVIEW_UPDAET = gql`
    mutation productreviewUpdate(
        $params: ProductReviewUpdateInput!
        $id: String!
    ) {
        ProductReviewUpdate(params: $params, id: $id) {
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
`;
