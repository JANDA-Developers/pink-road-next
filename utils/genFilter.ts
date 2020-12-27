import { _ProductFilter } from "../types/api"

export const integratedProductSearch = (search?:string, filter?:_ProductFilter):_ProductFilter  => {
    return {
    ...filter,
    OR: search ? [{
        title_contains: search,
    }, {
        subTitle_contains: search,
    }, {
        keyWards_in: [search] 
    }] : undefined,
 }   
}
