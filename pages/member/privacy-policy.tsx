import Link from 'next/link'
import React, { useContext } from 'react'
import { PolicyTopNav } from '../../components/policyTopNav/PolicyTopNav'
import { usePageEdit } from '../../hook/usePageEdit';
import SubTopNav from '../../layout/components/SubTop';
import { getStaticPageInfo, Ipage } from '../../utils/page';
import { AppContext } from '../_app';
import defaultInfo from "../../info/privacyPolicy.json"

export const getStaticProps = getStaticPageInfo("privacyPolicy");
const PrivacyPolicy: React.FC<Ipage> = (pageInfo) => {
    const { homepage } = useContext(AppContext);
    const pageTools = usePageEdit(pageInfo, defaultInfo)

    return (
        <div>
            <SubTopNav pageTools={pageTools} >
                <li className="home">
                    <Link href="/">
                        <a />
                    </Link>
                </li>
                <li className="homedeps1">
                    <a href="/privacy-policy">개인정보처리방침</a>
                </li>
            </SubTopNav>
            <div className="privacy_box w1200">
                <PolicyTopNav />
                <div dangerouslySetInnerHTML={{
                    __html: homepage?.bookingPrivacyPolicy || ""
                }} />
            </div>
        </div>
    )
}

export default PrivacyPolicy



