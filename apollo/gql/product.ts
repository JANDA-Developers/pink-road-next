import { gql } from "@apollo/client";
import { F_BOOKING, F_PAGE, F_PAYMENT, F_PRODUCT, F_USER } from "./fragments";
import { F_QUESTION } from "./question";
import { F_SETTLEMENT } from "./settlement";


export const PRODUCTS_CREATE = gql`
  mutation ProductCreate(
        $params: ProductCreateInput!
    ) {
    ProductCreate(
        params: $params  
      ) {
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

export const ACCEPT_PRODUCT_CREATE = gql`
  mutation acceptProductCreate(
        $ProductId: String!
    ) {
    AcceptProductCreate(
        ProductId: $ProductId  
      ) {
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

export const ACCEPT_PRODUCT_UPDATE = gql`
  mutation acceptProductUpdate(
      $ProductId: String!
    ) {
    AcceptProductUpdate(
      ProductId: $ProductId
    ) {
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


export const REJECT_PRODUCT_CREATE = gql`
  mutation rejectProductCreate(
        $ProductId: String!
        $reason: String!
    ) {
    RejectProductCreate(
        ProductId: $ProductId,
        reason: $reason 
      ) {
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


export const REJECT_PRODUCT_UPDATE = gql`
  mutation rejectProductUpdate(
        $ProductId: String!
        $reason: String!
    ) {
    RejectProductUpdate(
        ProductId: $ProductId
        reason: $reason
      ) {
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


export const PRODUCT_POST_DELETE = gql`
  mutation productDelete(
      $id: String!
    ) {
    ProductDelete(
        id:$id
      ) {
      ok
      error {
location
        severity
        code
        message
}
      data {
          ...Fproduct
      }
    }
  }
  ${F_PRODUCT}
`;


export const PRODUCT_LIST = gql`
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
    error {
      location
      severity
      code
      message
    }
    page {
      ...Fpage
    }
    data  {
      ...Fproduct
      bookings {
        _id
        status
      }
      author {
            ...Fuser
      }
      category {
          _id
          label
      }
    }
  }
}
${F_USER}
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
      error {
      location
      severity
      code
      message
    }
      data {
        ...Fproduct
        author {
            ...Fuser
        }
        category {
            _id
            label
        }
        questions {
          ...Fquestion
        }
      }
    }
  }
  ${F_USER}
  ${F_QUESTION}
  ${F_PRODUCT}
`;



export const PRODUCT_FIND_BY_ID_FOR_SELLER = gql`
  query productFindByIdForSeller(
      $_id:String!
    ) {
      ProductFindByIdForSeller(
        _id: $_id
      ) {
      ok
      error {
      location
      severity
      code
      message
    }
      data {
        ...Fproduct
        author {
            ...Fuser
        }
        category {
            _id
            label
        }
        settlement {
          ...Fsettlement
        }
        peopleCount
        bookings {
          booker {
            ...Fuser
          }
          ...Fbooking
          payment {
           ...Fpayment 
          }
        }
      }
    }
  }
  ${F_SETTLEMENT}
  ${F_USER}
  ${F_PAYMENT}
  ${F_BOOKING}
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