import { useQuery } from "@apollo/client"
import { IPageInfo, IPortfolio, ISet } from "types/interface";
import { PORTFOLIO_FIND_BY_ID} from "../apollo/queries";
import { portfolioFindById, portfolioFindByIdVariables } from "../types/api";

export interface IUsePortfolioFind {
    item: IPortfolio;
    loading: boolean;
}

export const usePortfolioFind = (id:string):IUsePortfolioFind => {
    const { data, loading } = useQuery<portfolioFindById, portfolioFindByIdVariables>(PORTFOLIO_FIND_BY_ID,{
        variables: {
            id
        }
    });

    const item = data?.PortfolioFindById?.data;
    
    return { item,loading }
}