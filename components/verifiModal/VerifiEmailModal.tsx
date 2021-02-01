import React, { useState } from 'react';
import { TuseVerification } from '../../hook/useVerification';
import { VerificationEvent, VerificationTarget } from '../../types/api';
import { isEmail } from '../../utils/validation';
import { Modal } from '../modal/Modal';

interface IProp {
    verifiHook: TuseVerification
    onSuccess: () => void;
}

export const VerifiEamilModal: React.FC<IProp> = ({ verifiHook, onSuccess }) => {
    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")
    const [sendEmailCount, setSendEmailCount] = useState(0);

    const { verifiComplete, verifiStart, verifiData } = verifiHook;

    const handleSendEmail = () => {
        if (!isEmail(email)) {
            alert("올바른 이메일이 아닙니다.");
            return;
        }
        verifiStart({
            event: VerificationEvent.UserVerifyEmail,
            target: VerificationTarget.EMAIL,
            payload: email,
        }).then(({ ok }) => {
            if (ok) {
                alert("인증이 코드가 이메일로 전송 되었습니다.");
                setSendEmailCount(sendEmailCount + 1)
            } else {
                alert("인증번호 발송이 실패 했습니다.")
            }
        })
    }

    const handleComplete = async () => {

        if (!verifiData) {
            alert("먼저 인증 문자를 발송 해주세요.");
            return;
        }
        if (!code) {
            alert("인증 번호를 입력 해주세요.");
            return;
        }
        await verifiComplete(code).then(result => {
            if (result.ok) {
                alert("인증이 완료 되었습니다.");
            } else {
                alert("인증번호가 일치하지 않습니다.")
            }
        })

        onSuccess()
    }

    const sendCountOver = sendEmailCount > 5;

    return <Modal title="이메일 인증" id="emailVerifi" >
        <h6>
            인증번호를 입력 해주세요.
                </h6>
        <input value={email} onChange={(e) => {
            setEmail(e.currentTarget.value)
        }} />
        {sendEmailCount ?
            <div>
                <h6>
                    인증번호를 입력 해주세요.
            </h6>
                <input value={code} onChange={(e) => {
                    setCode(e.currentTarget.value)
                }} />
            </div> : ""
        }
        {!sendCountOver ? <button className="btn small" onClick={handleSendEmail}>{sendEmailCount ? "인증이메일 발송" : "인증메일 재발송"}</button> : <button >재발송 횟수를 초과하였습니다.</button>}
        {sendEmailCount ? <button className="btn small" onClick={handleComplete}>인증 완료</button> : ""}
    </Modal>;
};
