import { getRefetch } from "../utils/api";
import { GET_CONTEXT } from "../apollo/gql/queries";
import {  RESIGN, SIGN_IN, SIGN_UP, USER_FIND_BY_ID, USER_LIST, USER_UPDATE } from "../apollo/gql/user";
import {  userResign, userResignVariables, userList, userListVariables, userUpdate, userUpdateVariables, Fuser,   _UserFilter, _UserSort, signUp, signUpVariables, userFindById, userFindByIdVariables, signIn, signInVariables, userFindById_UserFindById, userFindById_UserFindById_data } from "../types/api";
import { generateFindQuery, generateListQueryHook, generateMutationHook, generateQueryHook } from "../utils/query";

export const useUserFindById = generateFindQuery<userFindById,userFindByIdVariables,userFindById_UserFindById_data>("id",USER_FIND_BY_ID)
export const useUserList = generateListQueryHook<_UserFilter,_UserSort,userList,userListVariables,Fuser>(USER_LIST, { initialSort:[_UserSort.createdAt_desc]});
export const useLogin = generateQueryHook<signIn, signInVariables>(SIGN_IN,{skipInit:true,fetchPolicy:"network-only"});
export const useSignUp = generateMutationHook<signUp,signUpVariables>(SIGN_UP, {
    ...getRefetch(USER_LIST, GET_CONTEXT)
});
export const useUserUpdate = generateMutationHook<userUpdate,userUpdateVariables>(USER_UPDATE, {
    ...getRefetch(USER_LIST, GET_CONTEXT)
});
export const useUserResign = generateMutationHook<userResign,userResignVariables>(RESIGN, {
    ...getRefetch(USER_LIST, GET_CONTEXT)
});
