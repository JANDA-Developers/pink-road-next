import dayjs from "dayjs";
import { TRange } from "../components/tourWrite/helper";

export const filterToRange = (filter:any, key:string):TRange => {
    const range = {
        from: filter[key + "_gte"] ? dayjs(filter.startDate_gte).toDate() : undefined,
        to: filter[key + "_lte"] ? dayjs(filter.startDate_gte).toDate() : undefined
    }

    return range;
}