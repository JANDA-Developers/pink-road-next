import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { cloneObject } from "../utils/clone";

export const useMutable = <T>(defaultData:T): [T,Dispatch<SetStateAction<T>>] => {
    const [data, setData] = useState<T>(cloneObject(defaultData));

    useEffect(()=>{
        if(defaultData) {
            setData(cloneObject(defaultData));
        }
    },[defaultData])

    return [data, setData]
}