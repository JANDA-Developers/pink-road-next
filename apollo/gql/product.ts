import { gql } from "@apollo/client";
import {  F_PAGE, F_PRODUCT } from "./fragments";
import { F_QUESTION } from "./question";

export const PRODUCTS_CREATE = gql`
  mutation ProductCreate(
        $params: ProductCreateInput!
    ) {
    ProductCreate(
        params: $params  
      ) {
      ok
      error 
      data {
        _id
      }
    }
  }
`;


export const PRODUCT_POST_UPDATE = gql`
  mutation productUpdate(
        $params: ProductUpdateInput!
        $_id: String!
    ) {
    ProductUpdate(
        params:$params,
        _id: $_id 
      ) {
      ok
      error 
      data {
        _id
      } 
    }
  }
`;


export const PRODUCT_POST_DELETE = gql`
  mutation productDelete(
      $id: String!
    ) {
    ProductDelete(
        id:$id
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


export const PRODUCT_POST_LIST = gql`
query productList(
    $sort: [_ProductSort!]
    $filter: _ProductFilter
    $pageInput: pageInput!
) {
  ProductList(
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
      ...Fproduct
    }
  }
}
${F_PRODUCT}
${F_PAGE}
`

export const PRODUCT_FIND_BY_ID = gql`
  query productFindById(
      $_id:String!
    ) {
      ProductFindById(
        _id: $_id
      ) {
      ok
      error
      data {
        ...Fproduct
        questions {
          ...Fquestion
        }
      }
    }
  }
  ${F_QUESTION}
  ${F_PRODUCT}
`;

// export const PRODUCTS_OPS = gql`
//   query productFindById(
//       $_id:String!
//     ) {
//       ProductFindById(
//         _id: $_id
//       ) {
//       ok
//       error
//       data {
//         ...Fproduct
//         questions {
//           ...Fquestion
//         }
//       }
//     }
//   }
//   ${F_QUESTION}
//   ${F_PRODUCT}
// `;