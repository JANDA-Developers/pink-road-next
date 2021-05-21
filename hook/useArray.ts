import { useState } from "react";
import { deepCopy } from "../utils/formatter";

export const useArray = <T>(defaultArray: Array<T>) => {
    const [array, setArray] = useState(deepCopy(defaultArray));

    const clear = (index: number) => {
        array.splice(index, 1);
        setArray([...array]);
    };

    const add = (data: T) => {
        array.push(data);
        setArray([...array]);
    };

    const change = (index: number, data: T) => {
        array.splice(index, 1, data);
        setArray([...array]);
    };

    const count = array.length;

    return { array, setArray, clear, add, change, count };
};
