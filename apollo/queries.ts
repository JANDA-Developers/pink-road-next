import { gql } from "@apollo/client";
import { F_CATEGORY, F_ITINERARY, F_PAGE, F_PRODUCT, F_USER } from "./fragments";

/* :::::::::::::::::::::::::::::::::::::: 

  Queries 
  
:::::::::::::::::::::::::::::::::::::: */

export const PRODUCT_LIST = gql`
query productList(
  $pageInput:pageInput!
) {
  ProductList(
  pageInput: $pageInput
  ) {
    ok
    error
    page {
      ...Fpage
    }
    data  {
      ...Fproduct
    }
  }
}
${F_PRODUCT}
${F_PAGE}
`

export const CATEGORY_FIND_BY_ID = gql`
  query categoryFindById(
      $id: String!
    ) {
      CategoryFindById(
        id: $id
      ) {
      ok
      error
      data {
        ...Fcategory
      }
    }
  }
  ${F_CATEGORY}
`;

export const PRODUCT_FIND_BY_ID = gql`
  query productFindById(
      $id:String!
    ) {
      ProductFindById(
        id: $id
      ) {
      ok
      error
      data {
        ...Fproduct
      }
    }
  }
  ${F_PRODUCT}
`;

export const CATEGORY_LIST = gql`
  query categoryList {
      CategoryList  {
        ok
        error
        data {
          ...Fcategory
        }
      }
  }
  ${F_CATEGORY}
`;

export const ITINERARY_FIND_BY_ID = gql`
  query itineraryFindById($id:String!) {
    ItineraryFindById(id:$id)  {
        ok
        error
        data {
          ...Fitinerary
        }
      }
  }
  ${F_ITINERARY}
`;

export const ITINERARY_LIST = gql`
  query itineraryList {
    ItineraryList  {
        ok
        error
        data {
          ...Fitinerary
        }
      }
  }
  ${F_ITINERARY}
`;

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
  ${F_ITINERARY}
`;

// export const FIND_USER = gql`
//   query findUser {
//     FindUser {
//         ...Fuser
//       }
//   ${F_USER}
// `;


// export const FIND_USER_BY_ID = gql`
//   query userFindById(
//     $id: String!
//     ) {
//     UserFindById(
//       id: $id
//     ) {
//       ...Fuser
//     }
//   ${F_USER}
// `;

// 3석달치 결제, 12월 1일 부터는 자동결제
// SMS는 따로 청구 

//1.findUser가 왜 array??
//2. my profile 가져오는 함수 ? ?
//3. _id
//4. 첫문자는 대문자여야함 
//5. [중요] 필터가 없으면 아무 소용없음!
