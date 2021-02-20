const omitDeep = require("omit-deep-lodash");

type Primitive = string | Function | number | boolean | Symbol | undefined | null 
type DeepOmitHelper<T, K extends keyof T> = {
    [P in K]: //extra level of indirection needed to trigger homomorhic behavior 
        T[P] extends infer TP ? // distribute over unions
        TP extends Primitive ? TP : // leave primitives and functions alone
        TP extends any[] ? DeepOmitArray<TP, K> : // Array special handling
        DeepOmit<TP, K> 
        : never
}
type DeepOmit<T, K> = T extends Primitive ? T : DeepOmitHelper<T,Exclude<keyof T, K>> 

type DeepOmitArray<T extends any[], K> = {
    [P in keyof T]: DeepOmit<T[P], K>
}
type Input =  {
    __typename: string,
    a: string,
    nested: {
        __typename: string,
        b: string
    }
    nestedArray: Array<{
        __typename: string,
        b: string
    }>
    nestedTuple: [{
        __typename: string,
        b: string
    }]
}


function omit <T,K>(obj:T,key:K):DeepOmit<T,K> {
    return omitDeep(obj,key)
}

const defaultOmits = ["createdAt", "updatedAt", "__typename", "isDelete", "_id"];

export function omits <T>(obj:T, keys?: T extends (infer U)[] ? (keyof U)[] : (keyof T)[]) {
    return omitDeep(obj,...defaultOmits,...keys || "")
}

