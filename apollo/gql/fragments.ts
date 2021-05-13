import { gql } from "@apollo/client";

export const F_IMG_SCALE_URL = gql`
    fragment FimgScaleUrl on ImgScaleUrl {
        tiny
        small
        medium
        large
        huge
    }
`;

export const F_FILE = gql`
    fragment Ffile on File {
        name
        uri
        owner
        imgScaleUrl {
            ...FimgScaleUrl
        }
    }
    ${F_IMG_SCALE_URL}
`;

export const F_BOOKING = gql`
    fragment Fbooking on Booking {
        _id
        createdAt
        cancelDate
        gender
        age
        payMethod
        updatedAt
        isDelete
        leftTime
        adultCount
        kidCount
        cancelMemo
        babyCount
        totalCount
        message
        isCancelRequest
        bookerInclue
        bookingPrice
        status
        isMember
        memo
        code
        groupCode
        name
        email
        phoneNumber
        isPaid
    }
`;

export const F_ITINERARY = gql`
    fragment Fitinerary on Itinerary {
        _id
        createdAt
        updatedAt
        isDelete
        title
        contents
        images {
            ...Ffile
        }
        date
    }
    ${F_FILE}
`;

export const F_REQUEST_HISTORY = gql`
    fragment FrequestHistory on RequestHistory {
        methodType
        reqType
        date
        reason
    }
    ${F_FILE}
`;

export const F_PRODUCT = gql`
    fragment Fproduct on Product {
        _id
        createdAt
        updatedAt
        regionLabel
        isDelete
        title
        code
        peopleCount
        contents
        determined
        endDate
        dateRange
        adminMemo
        groupCode
        region {
            label
            _id
        }
        category {
            _id
            label
        }
        bookerSummary {
            adultCount
            babyCount
            kidsCount
            completeBookCount
            readyBookCount
            cancelBookCount
        }
        status
        itinerary {
            ...Fitinerary
        }
        inOrNor
        info
        caution
        images {
            ...Ffile
        }
        keyWards
        address
        startPoint
        maxMember
        minMember
        requestMemo
        subTitle
        adult_price
        bookingCount
        kids_price
        compeltePeopleCnt
        baby_price
        isNotice
        elseReq
        isOpen
        type
        startDate
        Dday
        boardType
    }
    ${F_FILE}
    ${F_ITINERARY}
`;

export const F_PAYMENT = gql`
    fragment Fpayment on Payment {
        _id
        createdAt
        updatedAt
        isDelete
        payMethod
        status
        price
        totalCancelPrice
        cancelDate
        isPartialCancel
        groupCode
        history {
            status
            price
            metadata
            createdAt
            updatedAt
        }
    }
`;

export const F_CATEGORY = gql`
    fragment Fcategory on Category {
        _id
        createdAt
        updatedAt
        isDelete
        label
        type
        order
    }
`;

export const F_USER = gql`
    fragment Fuser on User {
        _id
        createdAt
        updatedAt
        isDelete
        isHandWrited
        email
        nickName
        manageName
        connectionCount
        role
        brith_date
        account_holder
        address
        address_detail
        acceptSms
        status
        acceptEamil
        isDenied
        is_froreginer
        busi_contact
        manageContact
        resignDate
        gender
        blueBird
        busi_num
        denyReason
        blueBird
        busi_department
        isVerifiedManager
        isVerifiedPhoneNumber
        busiRegistration {
            ...Ffile
        }
        is_priv_corper
        busi_name
        busi_address
        account_number
        name
        bank_name
        resignReason
        resignReasonType
        isResigned
        phoneNumber
        manageName
        profileImg {
            uri
        }
        bankImg {
            ...Ffile
        }
        busi_department
    }
    ${F_FILE}
`;

export const F_PAGE_INFO = gql`
    fragment FpageInfo on PageInfo {
        _id
        updatedAt
        isDelete
        key
        value
    }
`;

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
        totalCount
        remainder
    }
`;

export const F_GROUP = gql`
    fragment Fgroup on Group {
        _id
        createdAt
        updatedAt
        isDelete
        target
        key
        label
        members
        tags {
            key
            value
        }
    }
`;
