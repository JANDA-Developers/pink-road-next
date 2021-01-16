import React, { useState } from 'react';
import { Fbooking, PayMethod } from '../../types/api';
import { TElements } from '../../types/interface';
import { setVal } from '../../utils/eventValueExtracter';
import { getFromUrl } from '../../utils/url';
import { Validater } from '../../utils/validate';

export type TPaySubmitInfo = {
    buyerInfo: {
        phone: string;
        name: string;
    };
    payMethod: PayMethod;
}


interface IProp {
    Preview: TElements
    onDoPay: (param: TPaySubmitInfo) => void;
    booking?: Fbooking
}

{/* TODO 독립처리 => 나중에 시간나면 */ }
export const JDpaymentUI: React.FC<IProp> = ({ Preview, onDoPay, booking }) => {
    const urlPhone = getFromUrl("phone") || "";
    const urlName = getFromUrl("name") || "";
    const [payMethod, setPayMethod] = useState<PayMethod>(PayMethod.BANK);
    const [buyerInfo, setBuyerInfo] = useState({
        phone: "",
        name: "",
    })

    const { validate } = new Validater([{
        value: buyerInfo.name,
        failMsg: "구매자 이름은 필수 입니다."
    }, {
        value: buyerInfo.phone,
        failMsg: "구매자 연락처는 필수 입니다."
    }]);

    const submitInfo: TPaySubmitInfo = {
        buyerInfo,
        payMethod
    }


    const handlePayment = () => {
        if (validate()) {
            onDoPay(submitInfo)
        }
    }

    function set<T extends keyof typeof buyerInfo>(key: T) {
        return (value: any) => {
            buyerInfo[key] = value;
            setBuyerInfo({ ...buyerInfo })
        }
    }

    return <div className="payment_box">
        <div className="head">
            {Preview}
            <div>
                결제수단 선택
                        <div onClick={() => {
                    setPayMethod(PayMethod.NICEPAY_CARD)
                }}>카드결제</div>
                <div onClick={() => {
                    setPayMethod(PayMethod.BANK)
                }}>무통장입금</div>
            </div>
            {payMethod === PayMethod.BANK &&
                <div>
                    <input onChange={setVal(set("phone"))} readOnly={!!urlPhone} placeholder="구매자 연락처" />
                    <input onChange={setVal(set("name"))} readOnly={!!urlName} placeholder="구매자명" />
                </div>
            }

            <a onClick={handlePayment} className="btn">결제하기</a>
        </div>
    </div>
};



