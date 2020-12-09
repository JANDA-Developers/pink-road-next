import Link from 'next/link';
import React, { useState } from 'react';
import { FbookingByCode } from '../../types/api';
import { TElements } from '../../types/interface';
import { setVal } from '../../utils/eventValueExtracter';
import { autoComma, card_hypen } from '../../utils/formatter';
import { getFromUrl } from '../../utils/url';
import { Validater } from '../../utils/validate';

export type TPaySubmitInfo = {
    buyerInfo: {
        phone: string;
        name: string;
    };
    payMethod: "card" | "bankTransfer";
}


interface IProp {
    Preview: TElements
    onDoPay: (param: TPaySubmitInfo) => void;
    booking?: FbookingByCode
}

{/* TODO 독립처리 => 나중에 시간나면 */ }
export const JDpaymentUI: React.FC<IProp> = ({ Preview, onDoPay, booking }) => {
    const urlPhone = getFromUrl("phone") || "";
    const urlName = getFromUrl("name") || "";
    const urlStep = getFromUrl("step") || "ing";
    const [step, setStep] = useState(urlStep);
    const [payMethod, setPayMethod] = useState<"card" | "bankTransfer">("card");
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

    return <div id="payment">
        <div className="w1200">
            <div className="payment_box">
                <div className="head">
                    {Preview}
                    <div>
                        결제수단 선택
                        <div onClick={() => {
                            setPayMethod("card")
                        }}>카드결제</div>
                        <div onClick={() => {
                            setPayMethod("bankTransfer")
                        }}>무통장입금</div>
                    </div>
                    {payMethod === "bankTransfer" &&
                        <div>
                            <input onChange={setVal(set("phone"))} readOnly={!!urlPhone} placeholder="구매자 연락처" />
                            <input onChange={setVal(set("name"))} readOnly={!!urlName} placeholder="구매자명" />
                        </div>
                    }

                    <a onClick={handlePayment} className="btn">결제하기</a>
                </div>
            </div>

            {/* TODO 이부분은 나중에 독립처리 */}
            {/* 2.예약완료 */}
            {booking &&
                <div className="payment_box">

                    <div className="head">
                        <h2><i>예약</i>이 완료되었습니다.</h2>
                    </div>
                    <div className="table">
                        <div className="payment_tr">
                            <div className="payemnt_th">
                                예약상품
                        </div>
                            <div className="payemnt_td">
                                [{booking.product.code}]
                            거제도로 떠나요~~~~~!!!!!~~!!!!!!!
                        </div>
                        </div>
                        <div className="tr">
                            <div className="th">
                                예약번호
                        </div>
                            <div className="payemnt_td">
                                {booking.code}
                            </div>
                        </div>
                        <div className="tr">
                            <div className="th">
                                결제정보
                        </div>
                            <div className="payemnt_td">
                                <span>{"TODO 결제수단"}</span>
                                <span>{booking.payment?.CardName}{card_hypen(booking.payment?.CardNo || "")}</span>
                                <span>일시불</span>
                                <span>승인일시:{booking.payment?.AuthDate}</span>
                            </div>
                        </div>
                        <div className="tr">
                            <div className="th">
                                결제금액
                        </div>
                            <div className="payemnt_td">
                                <strong>{autoComma(booking.payment?.Amt || 0)}원</strong>
                            </div>
                        </div>
                    </div>
                    <div className="btn_box">
                        <Link href="/mypage/purchase"><a className="btn">구매내역 확인하기</a></Link>
                        <Link href="/"><a className="btn">홈으로</a></Link>
                    </div>
                </div>
            }
        </div>
        <div className="payment_bottom">
            Copyright © JANDA
            </div>
    </div>;
};



