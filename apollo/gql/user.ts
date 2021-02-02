import { gql } from "@apollo/client";
import {  F_BOOKING, F_FILE, F_PAGE, F_PRODUCT, F_USER } from "./fragments";


export const SIGN_UP = gql`
  mutation signUp(
      $params: AddUserInput!
      $verificationId: String!
    ) {
      SignUp(
        params:$params
        verificationId: $verificationId
      ) {
      ok
      error {
      location
        severity
        code
        message
      }
      data {
          email
      }
    }
  }
`;


export const RESIGN = gql`
  mutation userResign(
      $_id: String!
      $pw : String!
    ) {
    UserResign(
        _id: $_id,
        pw: $pw
      ) {
        ok
        error {
        location
          severity
          code
          message
        }
      }
    }
`;

export const SIGN_IN = gql`
  query signIn(
    $email: Email!
    $pw: String!
    $hopeRole: UserRole
    ) {
    SignIn(
      email:$email,
      pw:$pw
      hopeRole: $hopeRole
      )  {
        ok
        error {
      location
      severity
      code
      message
    }
        data {
          token
        }
      }
  }
`;



export const USER_UPDATE = gql`
    mutation userUpdate($params:UserUpdateInput!,$_id: String!, $pw: String) {
        UserUpdate(params:$params, pw:$pw, _id:$_id) {
            ok
            error {
      location
      severity
      code
      message
    }
            data {
                _id
            createdAt
            }
        }
    }
`

export const EMAIL_DUPLIOCATE_CHECK = gql`
    query emailDuplicateCheck($email:String!) {
      EmailDuplicateCheck(email:$email) {
            ok
            error {
              location
              severity
              code
              message
            }
        }
    }
`


export const SIGN_UP_DENY = gql`
    mutation signUpDeny($userId:String!, $reason:String!) {
      SignUpDeny(userId:$userId, reason: $reason) {
            ok
            error {
              location
              severity
              code
              message
            }
        }
    }
`

export const SIGN_UP_ACCEPT = gql`
    mutation signUpAccept($userId:String!) {
      SignUpAccept(userId:$userId) {
            ok
            error {
              location
              severity
              code
              message
            }
        }
    }
`
export const VERIFICATION_START =gql`
mutation verificationStart($target: VerificationTarget!, $payload: String!, $event: VerificationEvent!){
    VerificationStart(target : $target, payload : $payload, event : $event){
      ok
      error {
      location
      severity
      code
      message
    }
      data {
        _id
        payload
        target
        isVerified
      }
    }
  }
  `

export const VERIFICATION_COMPLETE=gql`
mutation verificationComplete(
    $verificationId: ID!
    $target: VerificationTarget!
    $code: String!
    $payload: String!
    ) {
        VerificationComplete(verificationId:$verificationId, target:$target,code:$code,payload:$payload) {
            ok
            error {
      location
      severity
      code
      message
    }
            data {
                _id
                createdAt
                updatedAt
                payload
                target
                isVerified
                event
                storeCode
                expiresAt
                isExpire
            }
        }
    }
`


export const USER_LIST = gql`
query userList(
    $sort: [_UserSort!]
    $filter: _UserFilter
    $pageInput: pageInput!
) {
  UserList(
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
      ...Fuser
    }
  }
}
${F_USER}
${F_PAGE}
`

export const USER_FIND_BY_ID = gql`
  query userFindById(
      $id:String!
    ) {
      UserFindById(
        id: $id
      ) {
      ok
      error {
      location
      severity
      code
      message
    }
      data {
        ...Fuser
        products {
          ...Fproduct
          category {
              _id
              label
          }
          author {
              ...Fuser
          }
        }
        bookings {
          ...Fbooking
        }
      }
    }
  }
  ${F_PRODUCT}
  ${F_BOOKING}
  ${F_USER}
`;