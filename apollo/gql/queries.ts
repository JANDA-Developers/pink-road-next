import { gql } from "@apollo/client";
import { F_BOOKING, F_CATEGORY,  F_PAGE_INFO, F_PRODUCT,F_USER } from "./fragments";
import { F_HOMEPAGE } from "./homepage";
import { F_SYSTEMNOTI } from "./systemNoti";

/* :::::::::::::::::::::::::::::::::::::: 

  Queries 
  
:::::::::::::::::::::::::::::::::::::: */

export const PCAT_LIST = gql`
  query pcategoryList {
    pCategoryList {
      ok
      error
      data {
        _id
        createdAt
        updatedAt
        isDelete
        label
      }
    }
  }
`

export const SIGN_IN = gql`
  query signIn(
    $email: Email!
    $pw: String!
    ) {
    SignIn(
      email:$email,
      pw:$pw
      )  {
        ok
        error
        data {
          token
        }
      }
  }
`;


export const PAGE_INFO_READ = gql`
  query pageInfoRead(
      $key: String!
    ) {
    PageInfoRead(
      key: $key
      )  {
        ok
        error
        data {
            ...FpageInfo
        }
      }
  }
  ${F_PAGE_INFO}
`;

export const GET_CONTEXT = gql`
  query getContext {
      GetProfile {
        ok
        error
        data {
          ...Fuser
          unReadNoties {
            ...FsystemNoti
          }
          bookings {
            ...Fbooking
            seller {
              _id
              name
            }
            product {
              _id
              title
            }
          }
          products {
            ...Fproduct
            bookings {
              _id
              name
            }
          }
        }
      }
      CategoryList {
        ok
        error
        data {
          ...Fcategory
        }
      }
      Homepage {
        ok
        error
        data {
            ...Fhomepage
        }
      }
    }
  ${F_SYSTEMNOTI}
  ${F_HOMEPAGE}
  ${F_PRODUCT}
  ${F_BOOKING}
  ${F_CATEGORY}
  ${F_USER}
`;