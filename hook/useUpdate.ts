import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { deepCopy } from "../utils/formatter";
import isEmpty from "../utils/isEmpty";

export const useCopy = <T>(defaultData:T): [T,Dispatch<SetStateAction<T>>] => {
    const defaultEmpty = isEmpty(defaultData);
    const [data, setData] = useState<T>(deepCopy(defaultData));

    useEffect(()=>{
        if(!defaultEmpty) {
            setData(deepCopy(defaultData));
        }
    },[defaultData])

    return [data, setData]
}