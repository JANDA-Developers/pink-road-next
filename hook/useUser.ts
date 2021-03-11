import { getRefetch } from "../utils/api";
import { GET_CONTEXT } from "../apollo/gql/queries";
import {  EMAIL_DUPLIOCATE_CHECK, EMAIl_FIND_BY_INFO, PASSWORD_CHNAGE, PASSWORD_FIND_BY_PHONE, RESIGN, RESTART_USER, SIGN_IN, SIGN_UP, SIGN_UP_ACCEPT, SIGN_UP_DENY, STOP_USER, USER_FIND_BY_ID, USER_LIST, USER_UPDATE } from "../apollo/gql/user";
import {  travelDetermine, travelDetermineVariables, travelCancel,travelCancelVariables,travelWithdrwal, travelWithdrwalVariables, restartUser, restartUserVariables, passwordFindByPhone, passwordFindByPhoneVariables, emailFindByInfo, emailFindByInfoVariables,  userResign, userResignVariables, userList, userListVariables, userUpdate, userUpdateVariables, Fuser,   _UserFilter, _UserSort, signUp, signUpVariables, userFindById, userFindByIdVariables, signIn, signInVariables, userFindById_UserFindById, userFindById_UserFindById_data, signUpAccept, signUpAcceptVariables, signUpDeny, signUpDenyVariables, emailDuplicateCheck, emailDuplicateCheckVariables, emailFindByInfo_EmailFindByInfo_data, passwordFindByPhone_PasswordFindByPhone_data, passwordChange, passwordChangeVariables, stopUser, stopUserVariables, productDelete, productDeleteVariables } from "../types/api";
import { generateFindQuery, generateListQueryHook, generateMutationHook, generateQueryHook } from "../utils/query";
import { PRODUCT_DELETE, TRAVEL_CANCEL, TRAVEL_DETERMINE, TRAVEL_WITDRWAL } from "../apollo/gql/product";

export const useRestartUsers = generateMutationHook<restartUser,restartUserVariables>(RESTART_USER, {
    ...getRefetch(USER_LIST, USER_FIND_BY_ID)
});
export const useStopUsers = generateMutationHook<stopUser,stopUserVariables>(STOP_USER, {
    ...getRefetch(USER_LIST, USER_FIND_BY_ID)
});
export const useUserFind = generateFindQuery<userFindById,userFindByIdVariables,userFindById_UserFindById_data>("id",USER_FIND_BY_ID)
export const useUserFindById = generateFindQuery<userFindById,userFindByIdVariables,userFindById_UserFindById_data>("id",USER_FIND_BY_ID)
export const useUserList = generateListQueryHook<_UserFilter,_UserSort,userList,userListVariables,Fuser>(USER_LIST, { initialSort:[_UserSort.createdAt_desc]});
export const useLogin = generateQueryHook<signIn, signInVariables>(SIGN_IN,{skipInit:true,fetchPolicy:"network-only"});
export const useSignUp = generateMutationHook<signUp,signUpVariables>(SIGN_UP, {
    ...getRefetch(USER_LIST, USER_FIND_BY_ID, GET_CONTEXT)
});
export const useUserUpdate = generateMutationHook<userUpdate,userUpdateVariables>(USER_UPDATE, {
    ...getRefetch(USER_LIST, USER_FIND_BY_ID, GET_CONTEXT)
});
export const useUserResign = generateMutationHook<userResign,userResignVariables>(RESIGN, {
    ...getRefetch(USER_LIST, USER_FIND_BY_ID, GET_CONTEXT)
});

export const useSignUpAccept = generateMutationHook<signUpAccept, signUpAcceptVariables>(SIGN_UP_ACCEPT, {
    ...getRefetch(USER_LIST, USER_FIND_BY_ID),
    onCompleted: ({SignUpAccept}) => {
    if(SignUpAccept.ok) alert("가입이 승인 되었습니다.");
}});
export const useSignUpDeny = generateMutationHook<signUpDeny, signUpDenyVariables>(SIGN_UP_DENY, {
    ...getRefetch(USER_LIST, USER_FIND_BY_ID),
    onCompleted: ({SignUpDeny}) => {
    if(SignUpDeny.ok) alert("가입이 거절 되었습니다.");
}});
export const useEmailFindByInfo = generateQueryHook<emailFindByInfo,emailFindByInfo_EmailFindByInfo_data,emailFindByInfoVariables>(EMAIl_FIND_BY_INFO, { skipInit:true})
export const usePasswordFindByPhone = generateQueryHook<passwordFindByPhone,passwordFindByPhone_PasswordFindByPhone_data, passwordFindByPhoneVariables>(PASSWORD_FIND_BY_PHONE, { skipInit:true})
// export const useDuplicateNickNameCheck = generateMutationHook<nickNameDuplicateCheck, nickNameDuplicateCheckVariables>(NICK_NAME_DUPLICATE_CHECK)
export const useEmailDuplicateCheck = generateMutationHook<emailDuplicateCheck, emailDuplicateCheckVariables>(EMAIL_DUPLIOCATE_CHECK)
export const usePasswordChange = generateMutationHook<passwordChange,passwordChangeVariables>(PASSWORD_CHNAGE)
