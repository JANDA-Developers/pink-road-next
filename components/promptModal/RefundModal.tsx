import React, { useState } from 'react';
import { BankRefundInput, BookingStatus } from '../../types/api';
import { autoComma } from '../../utils/formatter';
import { closeModal } from '../../utils/popUp';
import { Modal } from '../modal/Modal';

export interface IRefundModalSubmit extends Omit<BankRefundInput, "bookingId"> { }

interface IProp {
    onSubmit: (info: IRefundModalSubmit) => void;
}

export const RefundModal: React.FC<IProp> = ({ onSubmit }) => {

    const [submitData, setSubmitData] = useState<IRefundModalSubmit>({
        cancelPrice: 0,
        reqStatus: BookingStatus.CANCEL,
        cancelMemo: "",
    })

    const handleSubmit = () => {
        //TODO: 벨리데이션
        onSubmit(submitData)
    }

    return <Modal id="RefundModal" title={"예약 환불 및 취소하기."} >

        환불가능금액: 10000,
        예약상태:
        예약 취소 || 취소안함

        <div className="input_box">
            <input className="emailVerifi__input" value={autoComma(submitData.cancelPrice)} onChange={(e) => {
                submitData.cancelPrice = submitData.cancelPrice;
                setSubmitData({ ...submitData })
            }} />
        </div>
        <div className="input_box">
            <textarea onChange={(e) => {
                const reason = e.currentTarget.value
                submitData.cancelMemo = reason;
                setSubmitData({ ...submitData });
            }} value={submitData.cancelMemo || ""} />
        </div>
        <div className="info">
            <p><i className="flaticon-flag-1" /> 한번 여행취소시 다시 되돌릴 수 없습니다. 취소는 신중하게 부탁드립니다.</p>
        </div>
        <div className="fin">
            <div className="float_left">
            </div>
            <div className="float_right">
                <button onClick={() => { handleSubmit(); closeModal("#RefundModal")() }} type="submit" className="btn medium">여행취소</button>
            </div>
        </div>
    </Modal>;
};
