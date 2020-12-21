import { gql } from "@apollo/client";
import { F_FILE, F_PAGE } from "./fragments";

export const F_USER = gql`
    fragment Fuser  on User  {
        _id
        nickName
        createdAt
        updatedAt
        isDelete
        email
        role
        brith_date
        address
        address_detail
        acceptSms
        acceptEamil
        is_froreginer
        busi_contact
        manageContact
        gender
        busi_num
        busi_department
        isVerifiedPhoneNumber,
        busiRegistration {
            ...Ffile
        },
        is_priv_corper
        busi_name
        busi_address
        account_number
        name
        bank_name
        phoneNumber
        manageName
        profileImg {
            uri
        }
        busi_department
    }
    ${F_FILE}
`

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
      error 
      data {
          email
      }
    }
  }
  ${F_FILE}
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

export const VERIFICATION_START =gql`
mutation verificationStart($target: VerificationTarget!, $payload: String!, $event: VerificationEvent!){
    VerificationStart(target : $target, payload : $payload, event : $event){
      ok
      error
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