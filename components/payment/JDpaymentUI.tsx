import React, { useContext, useState } from 'react';
import { AppContext } from '../../pages/_app';
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
    const { isLogin } = useContext(AppContext);
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

            {isLogin ||
                <div>
                    <div className="write_type">
                        <div className="title">구매자성함</div>
                        <div className="input_form">
                            <input readOnly type="text" name="title" className="inputText w50 fix" />{/* 자동출력 고정 */}
                        </div>
                    </div>
                    <div className="write_type">
                        <div className="title">연락처</div>
                        <div className="input_form">
                            <input id="title" onChange={(e) => {
                                // setTitle(e.currentTarget.value)
                            }} type="text" name="title" className="inputText w100" />
                        </div>
                    </div>
                    <div className="write_type">
                        <div className="title">이메일</div>
                        <div className="input_form">
                            <input id="title" onChange={(e) => {
                                // setTitle(e.currentTarget.value)
                            }} type="text" name="title" className="inputText w100" />
                        </div>
                    </div>
                    <div className="write_type">
                        <div className="write_con">
                            <div className="title">예약자메모</div>
                            <div className="input_form">
                                <textarea className="inputText input_box w100" />
                            </div>
                        </div>
                    </div>
                </div>
            }

            <a onClick={handlePayment} className="btn">결제하기</a>
        </div>
    </div>
};



