import { E_INPUT } from "../types/interface"


// TODO 아무 Input이나 분기처리해서 가져오자
export const setVal = (callBack:(foo:any) => void) => (e:E_INPUT) => {
    callBack(e.currentTarget.value);
}

export const whenEnter = (callBack:()=>void) => (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
        callBack()
    }
}

export const changeVal = (callBack:(foo:string)=>void) => (e:React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.currentTarget.value
    callBack(val);
}