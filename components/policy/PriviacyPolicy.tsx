import React, { useContext } from 'react';
import { AppContext } from '../../pages/_app';
import { Fhomepage } from '../../types/api';

interface IProp {
    type: keyof Fhomepage
}

export const Policy: React.FC<IProp> = ({ type }) => {
    const { homepage } = useContext(AppContext);

    const findPolicy = () => {
        if (!homepage) return ""
        if (type === "indiUsePolicy") return homepage.indiUsePolicy
        if (type === "partnerUsePolicy") return homepage.partnerUsePolicy
        if (type === "busiUsePolicy") return homepage.busiUsePolicy
        if (type === "indiPrivacyPolicy") return homepage.indiPrivacyPolicy
        if (type === "partnerPrivacyPolicy") return homepage.partnerPrivacyPolicy
        if (type === "busiPartnerPrivacyPolicy") return homepage.busiPartnerPrivacyPolicy
        if (type === "privacyThirdPolicy") return homepage.privacyThirdPolicy
        if (type === "marketingPolicy") return homepage.marketingPolicy
        if (type === "travelerPolicy") return homepage.travelerPolicy
        if (type === "usePolicy") return homepage.usePolicy
        if (type === "refundPolicy") return homepage.refundPolicy
        if (type === "krTravelPolicy") return homepage.krTravelPolicy
        if (type === "bookingPrivacyPolicy") return homepage.bookingPrivacyPolicy
        if (type === "bookingThirdPolicy") return homepage.bookingThirdPolicy

        return ""
    }

    return <div className="policyViewer" dangerouslySetInnerHTML={{
        __html: findPolicy()
    }} />
};



//SEO 
//없으면 homepage 를 쓰고 있ㅇ므ㅕㄴ homepage를 쓰고 ㄱ
