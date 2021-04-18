import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { cloneObject } from "../utils/clone";
import isEmpty from "../utils/isEmpty";

export const useCopy = <T>(defaultData:T): [T,Dispatch<SetStateAction<T>>] => {
    const defaultEmpty = isEmpty(defaultData);
    const [data, setData] = useState<T>(cloneObject(defaultData));

    console.log({data})
    console.log({data})

    useEffect(()=>{
        if(!defaultEmpty) {
            setData(cloneObject(defaultData));
        }
    },[defaultData])

    return [data, setData]
}