import { count } from "aws-sdk/clients/health";
import { COUNT } from "../apollo/gql/count";
import { count_Count_data } from "../types/api";
import { gnerateQueryHook } from "../utils/query";

export const useCount = gnerateQueryHook<count,count_Count_data>(COUNT);