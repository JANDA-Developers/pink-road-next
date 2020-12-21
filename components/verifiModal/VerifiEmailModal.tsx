import React, { useState } from 'react';
import { TuseVerification } from '../../hook/useVerification';
import { VerificationEvent, VerificationTarget } from '../../types/api';
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
        verifyMu({
            variables: {
                event: VerificationEvent.UserVerifyEmail,
                target: VerificationTarget.EMAIL,
                payload: email,
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
            if (result.data?.VerificationComplete.ok)
                onSuccess()
            else {
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
