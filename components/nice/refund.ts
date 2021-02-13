import { NICE_CANCLE } from "./niceUtils";
import { IRefundBody } from "./type";

export const cardRefund = async (body:IRefundBody):Promise<any> => {
    return await fetch(NICE_CANCLE, {
        method: "post",
        mode: "cors",
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        referrerPolicy: 'no-referrer'
    }).then((res) => {
        const result = res.json();
        console.log({result})
        return result;
    }).catch((e)=> {
        alert("pay err")
        throw Error(e);
    })
}