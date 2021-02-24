import dayjs from "dayjs";
import { TRange } from "../components/tourWrite/helper";


export function arrayEquals(a:any[], b:any[]) {

    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }
  
export const filterToRange = (filter:any, key:string):TRange => {
    const range = {
        from: filter[key + "_gte"] ? dayjs(filter.startDate_gte).toDate() : undefined,
        to: filter[key + "_lte"] ? dayjs(filter.startDate_gte).toDate() : undefined
    }

    return range;
}

export const rangeToFilter = (date:TRange,key:string) => {
    const filter = {
        [`${key}_gte`]: date.from ? dayjs(date.from).toDate() : undefined ,
        [`${key}_lte`]: date.to ? dayjs(date.to).toDate() : undefined
    }

    return filter;
}

//이함수는 유니크한 filter 오브젝트를 생성합니다.
export const getUniqFilter = <T>(filter: T, target:keyof T, uniq: (keyof T)[], value:any) => {
    const _search = value ? value : undefined;
    const _filter = {
        ...filter
    }
    uniq.forEach(u => {
        _filter[u] = undefined as any;
    })
    uniq.forEach(u => {
        if(target === u) {
            _filter[u] = _search as any;
        }
    })

    return _filter;
}
