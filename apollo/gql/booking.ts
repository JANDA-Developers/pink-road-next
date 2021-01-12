import { gql } from "@apollo/client"
import { F_PAGE, F_BOOKING, F_PAYMENT, F_PRODUCT, F_FILE } from "./fragments"

export const F_BOOKING_BY_CODE  = gql`
    fragment FbookingByCode on Booking {
        ...Fbooking
        payment {
          ...Fpayment
        }
        product {
          ...Fproduct
        }
    }
    ${F_BOOKING}
    ${F_PAYMENT}
    ${F_PRODUCT}
`

export const BOOKING_LIST = gql`
  query bookingList(
    $sort: [_BookingSort!]
    $filter: _BookingFilter
    $pageInput: pageInput!
  ) {
  BookingList(
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
      ...Fbooking
      product {
        _id
        createdAt
        updatedAt
        isDelete
        title
        code
        contents
        category {
            _id
            label
        }
        status
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
        subTitle
        adult_price
        bookingCount
        dateRange
        kids_price
        baby_price
        isNotice
        isOpen
        type
        startDate
        Dday
      }
    }
  }
  }
  ${F_PAGE}
  ${F_FILE}
  ${F_BOOKING}
`


export const BOOKING_COUNT = gql`
    query bookingCount(
        $filter: _BookingFilter
    ) {
    BookingList(
        pageInput: {
            page: 1,
            cntPerPage: 99999999
        },
        filter: $filter
    ) {
        ok
        error
        data  {
            _id
        }
    }
}
`



export const BOOKINGS_CREATE = gql`
  mutation bookingsCreate(
    $params: [BookingsCreateInput!]!
  ) {
    BookingsCreate(
      params:$params
    ) {
    ok
    error
    data {
      ...Fbooking
    }
  }
}
${F_BOOKING}
`
export const BOOKING_DELETE = gql`
  mutation bookingDelete(
    $id: String!
  ) {
    BookingDelete(
      id:$id
    ) {
    ok
    error 
  }
}
`
export const BOOKING_UPDAET = gql`
  mutation bookingUpdate(
    $params: BookingUpdateInput!
    $id: String!
  ) {
  BookingUpdate(
      params:$params
      _id: $id
    ) {
    ok
    error 
    data {
      _id
    }
  }
}
`
export const BOOKING_FIND_BY_CODE = gql`
  query bookingFindByCode(
    $code: String!
  ) {
    BookingFindByCode(
      code: $code
    ) {
    ok
    error 
    data {
      ...Fbooking
    }
  }
}
${F_BOOKING}
`