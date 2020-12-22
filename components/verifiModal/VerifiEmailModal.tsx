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

    const { verifyMu, verifyCompleteMu, verifiData } = verifiHook;

    const handleSendEmail = () => {
        if (!isEmail(email)) {
            alert("올바른 이메일이 아닙니다.");
            return;
        }
        verifyMu({
            variables: {
                event: VerificationEvent.UserVerifyEmail,
                target: VerificationTarget.EMAIL,
                payload: email,
            }
        }).then(result => {
            if (result.data?.VerificationStart.ok) {
                alert("인증이 코드가 이메일로 전송 되었습니다.");
            } else {
                alert("인증번호 발송이 실패 했습니다.")
            }
        })
    }

    const handleComplete = () => {

        if (!verifiData) {
            alert("먼저 인증 문자를 발송 해주세요.");
            return;
        }
        if (!code) {
            alert("인증 번호를 입력 해주세요.");
            return;
        }
        verifyCompleteMu({
            variables: {
                code,
                target: VerificationTarget.EMAIL,
                payload: verifiData.payload!,
                verificationId: verifiData._id!
            }
        }).then(result => {
            console.log(result.errors);
            if (result.data?.VerificationComplete.ok) {
                alert("인증이 완료 되었습니다.");
                onSuccess()
            } else {
                alert("인증번호가 일치하지 않습니다.")
            }
        })
    }

    return <Modal title="이메일 인증" id="emailVerifi" >
        <h6>
            인증번호를 입력 해주세요.
                </h6>
        <input value={email} onChange={(e) => {
            setEmail(e.currentTarget.value)
        }} />
        <input value={code} onChange={(e) => {
            setCode(e.currentTarget.value)
        }} />
        <button onClick={handleSendEmail}>인증 이메일 발송</button>
        <button onClick={handleComplete}>인증 완료</button>
    </Modal>;
};