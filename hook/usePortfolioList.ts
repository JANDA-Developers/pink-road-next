import { QueryHookOptions, useQuery } from "@apollo/client";
import { PORT_FOLIO_LIST } from "../apollo/gql/portfolio";
import { Fpage,  Fportfolio, portfolioList, portfolioListVariables, portfolioList_PortfolioList_data, _PortfolioFilter, _PortfolioSort } from "../types/api";
import { DEFAULT_PAGE } from "../types/const";
import { generateListQueryHook } from "../utils/query";
import { useListQuery, ListInitOptions, IListHook } from "./useListQuery";
interface IuseItemListProp extends Partial<ListInitOptions<_PortfolioFilter, _PortfolioSort>> {
    options?: QueryHookOptions<portfolioList, portfolioListVariables>
}
export interface IusePortfolioList extends IListHook<_PortfolioFilter, _PortfolioSort> {
    items: Fportfolio[];
    getLoading: boolean;
    pageInfo: Fpage;
}

export const usePortfolioList = generateListQueryHook<_PortfolioFilter,_PortfolioSort,portfolioList,portfolioListVariables,portfolioList_PortfolioList_data>(PORT_FOLIO_LIST)