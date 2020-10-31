import { gql } from "@apollo/client";

export const F_CATEGORY = gql`
    fragment Fcategory on Category {
        _id
        cratedAt
        updatedAt
        isDelete
        label
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


export const F_ITINERARY = gql`
    fragment Fitinerary on Itinerary {
        _id
        cratedAt
        updatedAt
        isDelete
        email
        productId
        title
        contents
        imgs
        date
    }
`

export const F_PRODUCT = gql`
    fragment Fproduct  on Product  {
        _id
        cratedAt
        updatedAt
        isDelete
        title
        content
        author {
            _id
        }
        category {
            _id
            label
        }
        Status
        itineraryIds
        itineraries {
            ...Fitinerary
        }
        include
        uninclude
        productInfo
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
    ${F_ITINERARY}
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


export const F_FILE = gql`
    fragment Ffile on File {
        _id 
        cratedAt
        updatedAt
        isDelete
        name
        description
        extension
        fileType
        uri
        owner
    }
`
