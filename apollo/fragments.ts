import { gql } from "@apollo/client";

export const F_CATEGORY = gql`
    fragment Fcategory on Category {
        _id
        cratedAt
        updatedAt
        isDelete
        label
    }
`

export const F_USER = gql`
    fragment Fuser  on User  {
        _id
        cratedAt
        updatedAt
        isDelete
        email
        pw
        role
        brith_date
        address
        is_froreginer
        gender
        busi_num
        is_priv_corper
        busi_name
        bsui_address
        account_number
        bank_name
    }
`


export const F_PAGE_INFO = gql`
    fragment FpageInfo on PageInfo {
        _id
        cratedAt
        updatedAt
        isDelete
        key
        value
    }
`


export const F_PAGE = gql`
    fragment Fpage on Page {
        page
        cntPerPage
        totalPageSize
        start_page_num
        end_page_num
        isPrev
        isNext
        prev_page_num
        next_page_num
    }
`

export const F_FILE = gql`
    fragment Ffile on File {
        cratedAt
        updatedAt
        name
        description
        extension
        fileType
        uri
        owner
    }
`

export const F_ITINERARY = gql`
    fragment Fitinerary on Itinerary  {
        _id
        cratedAt
        updatedAt
        isDelete
        productPostId
        title
        contents
        images {
            ...Ffile
        }
        date
    }
    ${F_FILE}
`

export const F_PRODUCT_POST = gql`
    fragment FproductPost on ProductPost {
        _id
        cratedAt
        updatedAt
        isDelete
        title
        content
        author {
            ...Fuser
        }
        category {
            _id
            label
        }
        status
        itinerary {
            ...Fitinerary
        }
        inOrNor
        info
        caution
        keyWards
        address
        startPoint
        maxMember
        minMember
        subTitle
        adult_price
        kids_price
        baby_price
    }
    ${F_USER}
    ${F_ITINERARY}
`