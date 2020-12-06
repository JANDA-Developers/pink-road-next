import { Fpage } from "../types/api"

export const getQueryIndex = (inPageIndex:number,pageInfo:Fpage) => {
    const {remainder,cntPerPage,totalPageSize} = pageInfo;
    const diff = cntPerPage - remainder;
    const inPageReverse = cntPerPage - inPageIndex; 
    return ((pageInfo.totalPageSize -2 ) * pageInfo.cntPerPage) + inPageReverse + diff;  
}