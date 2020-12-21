import { useMutation } from "@apollo/client"
import { useState } from "react";
import { VERIFICATION_COMPLETE, VERIFICATION_START } from "../apollo/gql/user";
import { verificationComplete, verificationCompleteVariables, verificationStart_VerificationStart_data as VerifiStartData, VerificationEvent, verificationStart, verificationStartVariables, VerificationTarget,  verificationComplete_VerificationComplete_data } from "../types/api";
import { generateMutationHook } from "../utils/query";


export const useVerificationStart =  generateMutationHook<verificationStart,verificationStartVariables>(VERIFICATION_START)
export const useVerificationComplete = generateMutationHook<verificationComplete, verificationCompleteVariables>(VERIFICATION_COMPLETE)

type TCallBack<T> = (data: T | undefined) => void

type TVerifiData = Partial<Omit<verificationComplete_VerificationComplete_data, "__typename">>;
export type TuseVerification = ReturnType<typeof useVerification>
export const useVerification = (defaultData?:TVerifiData) =>  {
    const [verifiData, setVerifiData] = useState<TVerifiData | undefined>(defaultData)
    const [verifyMu, {loading:startLoading}] = useVerificationStart({onCompleted:
        ({VerificationStart})=>{
            if(VerificationStart.data)
                setVerifiData(VerificationStart.data)
    }});
    const [verifyCompleteMu, {loading:completeLoading}] = useVerificationComplete({
        onCompleted: ({VerificationComplete}) => {
            if(VerificationComplete.data)
                setVerifiData(VerificationComplete.data)
        }
    });

    const totalLoading = startLoading || completeLoading;

    return {verifyMu, verifyCompleteMu, verifiData, totalLoading, setVerifiData};
}

