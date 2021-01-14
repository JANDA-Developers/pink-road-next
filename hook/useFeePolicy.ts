import { FEE_POLIY_FIND_ONE } from "../apollo/gql/feePolict";
import { feePilicyFindOne, feePilicyFindOne_FeePolicyFindOne_data } from "../types/api";
import {  generateQueryHook } from "../utils/query";

export const useFeePolicy = generateQueryHook<feePilicyFindOne,feePilicyFindOne_FeePolicyFindOne_data>(FEE_POLIY_FIND_ONE);