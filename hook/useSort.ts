import { ISet } from "../types/interface"

//첫번쨰 솔트를 사용
export const useSingleSort = <T>(sorts:T[], setSort:ISet<T[]>) => {
    const singleSort = sorts[0];
    const onChange = (sort:T) => {
        setSort([sort]);
    }

    return {onChange, singleSort}
}