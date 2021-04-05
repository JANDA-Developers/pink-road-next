import Link from 'next/link'
import React, { useContext } from 'react'
import { PolicyTopNav } from '../../components/policyTopNav/PolicyTopNav'
import { usePageEdit } from '../../hook/usePageEdit';
import SubTopNav from '../../layout/components/SubTop';
import { getStaticPageInfo, Ipage } from '../../utils/page';
import { AppContext } from '../_app';
import defaultPageInfo from "../../info/refundPolicy.json"
import { PageEditor } from '../../components/common/PageEditer';

export const getStaticProps = getStaticPageInfo("refundPolicy");
const refundPolicy: React.FC<Ipage> = (pageInfo) => {
    const { homepage } = useContext(AppContext);
    const pageTools = usePageEdit(pageInfo, defaultPageInfo)
    return (
        <div>
            <PageEditor pageTools={pageTools} />
            <SubTopNav pageTools={pageTools}>
                <li className="homedeps1">
                    <a href="/refund-policy">취소 및 환불 정책</a>
                </li>
            </SubTopNav>
            <div className="privacy_box w1200">
                <PolicyTopNav />
                <div dangerouslySetInnerHTML={{
                    __html: homepage?.refundPolicy || ""
                }} />
            </div>

        </div>
    )
}

export default refundPolicy
