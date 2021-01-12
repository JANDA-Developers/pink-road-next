import { COUNT, COUNT_MANAGER } from "../apollo/gql/count";
import { count, countManager, countManager_Count_data, count_Count_data } from "../types/api";
import { gnerateQueryHook } from "../utils/query";

export const useCount = gnerateQueryHook<count,count_Count_data>(COUNT);
export const useCountManager = gnerateQueryHook<countManager,countManager_Count_data>(COUNT_MANAGER,{ queryName: "Count"});