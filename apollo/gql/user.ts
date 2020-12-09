import { gql } from "@apollo/client";
import { F_PAGE, F_USER } from "./fragments";


export const SIGN_UP = gql`
  mutation signUp(
      $params: AddUserInput!
    ) {
      SignUp(
        params:$params
      ) {
      ok
      error 
      data {
          email
      }
    }
  }
`;

export const RESIGN = gql`
  mutation userResign(
      $_id: String!,
      $pw : String!
    ) {
    UserResign(
        _id: $_id,
        pw: $pw
      ) {
        ok
        error 
    }
  }
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

export const USER_UPDATE = gql`
    mutation userUpdate($params:UserUpdateInput!,$_id: String!, $pw: String) {
        UserUpdate(params:$params, pw:$pw, _id:$_id) {
            ok
            error
            data {
                _id
            createdAt
            }
        }
    }
`


export const SIGNINGOOGLE = gql`
    mutation SignInGoogle($code : String!){
      SignInGoogle(code : $code){
        ok
        error
        data{
          token
          email
        }
      }
    }
`

export const SIGNINKAKAO= gql`
    mutation SignInKakao($code : String!){
      SignInKakao(code : $code){
        ok
        error
        data{
          token
          email
        }
      }
    }
`


export const VERIFICATION_START =gql`
mutation verificationStart($target: VerificationTarget!, $payload: String!, $event: VerificationEvent!){
    VerificationStart(target : $target, payload : $payload, event : $event){
      ok
      error
      data {
        _id
        isVerified
      }
    }
  }`

export const VERIFICATION_COMPLETE=gql`
mutation verificationComplete(
    $verificationId: ID!
    $target: VerificationTarget!
    $code: String!
    $payload: String!
    ) {
        VerificationComplete(verificationId:$verificationId, target:$target,code:$code,payload:$payload) {
            ok
            error
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
    error
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
      error
      data {
        ...Fuser
      }
    }
  }
  ${F_USER}
`;