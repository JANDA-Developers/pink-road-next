import { gql } from "@apollo/client";
import { F_CATEGORY, F_ITINERARY, F_PAGE, F_PAGE_INFO, F_PORTFOLIO, F_PRODUCT_POST, F_USER } from "./fragments";

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

export const PORTFOLIO_FIND_BY_ID = gql`
  query portfolioFindById(
    $id: String!
  ) {
    PortfolioFindById(
      id:$id
    ) {
    ok
    error 
    data {
      ...Fportfolio
      pCategory {
        _id
        label
      }
    }
  }
}
${F_PORTFOLIO}
`
export const PORT_FOLIO_LIST = gql`
query portfolioList(
  $pageInput:pageInput!
) {
  PortfolioList(
  pageInput: $pageInput
  ) {
    ok
    error
    page {
      ...Fpage
    }
    data  {
      ...Fportfolio
      pCategory {
        _id
        label
      }
    }
  }
}
${F_PAGE}
${F_PORTFOLIO}
`

export const PRODUCT_POST_LIST = gql`
query productPostList(
  $pageInput:pageInput!
) {
  ProductPostList(
  pageInput: $pageInput
  ) {
    ok
    error
    page {
      ...Fpage
    }
    data  {
      ...FproductPost
    }
  }
}
${F_PRODUCT_POST}
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
  query productPostFindById(
      $_id:String!
    ) {
      ProductPostFindById(
        _id: $_id
      ) {
      ok
      error
      data {
        ...FproductPost
      }
    }
  }
  ${F_PRODUCT_POST}
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
        }
      }
      CategoryList  {
        ok
        error
        data {
          ...Fcategory
        }
      }
  }
  ${F_CATEGORY}
  ${F_USER}
`;

// export const GET_MY_PROFILE = gql`
//   query signIn(
//     $email: Email!
//     $pw: String!
//     ) {
//     SignIn(
//       email:$email,
//       pw:$pw
//       )  {
//         ok
//         error
//         data
//         }
//       }
//   }
//   ${F_ITINERARY}
// `;

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
