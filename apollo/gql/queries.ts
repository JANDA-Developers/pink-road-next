import { gql } from "@apollo/client";
import {  F_BOOKING, F_CATEGORY,  F_PAGE_INFO,F_USER } from "./fragments";
import { F_HOMEPAGE } from "./homepage";
import { F_SYSTEMNOTI } from "./systemNoti";

/* :::::::::::::::::::::::::::::::::::::: 

  Queries 
  
:::::::::::::::::::::::::::::::::::::: */



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
            author {
            ...Fuser
          }
          category {
              _id
              label
          }
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
  ${F_BOOKING}
  ${F_CATEGORY}
  ${F_USER}
`;