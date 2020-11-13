import { useQuery } from "@apollo/client"
import { useState } from "react";
import { IPageInfo, IPortfolio, ISet } from "types/interface";
import { PORT_FOLIO_LIST } from "../apollo/queries";
import { portfolioList, portfolioListVariables } from "../types/api";
import { DEFAULT_PAGE } from "../types/const";

export interface IUsePortfolioList {
    setPage: ISet<number>;
    setViewCount: ISet<number>;
    items: IPortfolio[];
    pageInfo: IPageInfo;
    loading: boolean;
    viewCount: number;
}

type IuseProductListProp = {
    initialPageIndex?:number,
    initialViewCount?:number
}

export const usePortfolioList = ({
    initialPageIndex = 1,
    initialViewCount = 20 
}:IuseProductListProp):IUsePortfolioList => {
    const [viewCount, setViewCount] = useState(initialViewCount);
    const [page, setPage] = useState(initialPageIndex);
    const { data,loading } = useQuery<portfolioList, portfolioListVariables>(PORT_FOLIO_LIST, {
        variables: {
            pageInput: {
                cntPerPage: viewCount,
                page
            }
        },
        fetchPolicy: "network-only"
    });

    const items = data?.PortfolioList.data || [];
    const pageInfo = data?.PortfolioList.page || DEFAULT_PAGE;
    
    return { items, loading, pageInfo, setPage, setViewCount, viewCount }
}