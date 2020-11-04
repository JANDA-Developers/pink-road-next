import { gql } from "@apollo/client";
import { F_ITINERARY, F_CATEGORY, F_PRODUCT, F_FILE } from "./fragments";

export const CATEGORY_CREATE = gql`
  mutation categoryCreate(
      $data: CategoryCreateInput!
    ) {
    CategoryCreate(
        data:$data
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


export const CATEGORY_UPDATE = gql`
  mutation categoryUpdate(
        $data: CategoryUpdateInput!
        $id: String!
    ) {
    CategoryUpdate(
        data:$data
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


export const CATEGORY_DELETE = gql`
  mutation categoryDelete(
      $id: String!
    ) {
    CategoryDelete(
        _id:$id
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


export const ITINERARY_CREATE = gql`
  mutation itineraryCreate(
      $data: ItineraryCreateInput!
    ) {
      ItineraryCreate(
        data:$data
      ) {
      ok
      error 
      data {
          ...Fitinerary
      }
    }
  }
  ${F_ITINERARY}
`;


export const ITINERARY_UPDATE = gql`
  mutation itineraryUpdate(
        $data: ItineraryUpdateInput!
        $id: String!
    ) {
    ItineraryUpdate(
        data:$data
        id: $id
      ) {
      ok
      error 
      data {
          ...Fitinerary
      }
    }
  }
  ${F_ITINERARY}
`;


export const ITINERARY_DELETE = gql`
  mutation itineraryDelete(
      $id: String!
    ) {
    ItineraryDelete(
        id:$id
      ) {
      ok
      error 
      data {
          ...Fitinerary
      }
    }
  }
  ${F_ITINERARY}
`;


export const PRODUCT_CREATE = gql`
  mutation productCreate(
        $newItinerary: [ItineraryArrayInput!]!
        $newProduct: ProductCreateInput!
    ) {
    ProductCreate(
        newProduct: $newProduct
        newItinerary: $newItinerary 
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


export const PRODUCT_UPDATE = gql`
  mutation productUpdate(
        $newItinerary: [ItineryUpdateInput!]!
        $newProduct: ProductUpdateInput!
        $productId: String!
    ) {
    ProductUpdate(
        newItinerary: $newItinerary 
        newProduct: $newProduct 
        productId: $productId 
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


export const PRODUCT_DELETE = gql`
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

export const MULTI_UPLOAD = gql`
  mutation multiUpload(
      $file: Upload!
    ) {
      MultiUpload(
        file:$file
      ) {
      ok
      error 
      data {
          ...Ffile
      }
    }
  }
  ${F_FILE}
`;

export const SIGN_UP = gql`
  mutation signUp(
      $data: AddUserInput!
    ) {
      SignUp(
        data:$data
      ) {
      ok
      error 
      data {
          email
      }
    }
  }
  ${F_FILE}
`;

export const SIGN_IN_GOOGLE = gql`
  mutation signInGoogle(
      $code: String!
    ) {
      SignInGoogle(
        code:$code
      ) {
      ok
      error 
      data {
          email
          token
      }
    }
  }
`;

