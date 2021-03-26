import React, { useContext } from 'react';
import { PolicyTopNav } from '../../components/policyTopNav/PolicyTopNav';
import { usePageEdit } from '../../hook/usePageEdit';
import { getStaticPageInfo, Ipage } from '../../utils/page';
import { AppContext } from '../_app';
import defaultPageInfo from "../../info/krPolicy.json"
import SubTopNav from '../../layout/components/SubTop';

interface IProp { }

export const getStaticProps = getStaticPageInfo("krPolicy");
export const KrTerms: React.FC<Ipage> = (pageInfo) => {
    const { homepage } = useContext(AppContext);
    const pageTools = usePageEdit(pageInfo, defaultPageInfo)

    return <div>
        <SubTopNav pageTools={pageTools}>
            <li className="home">
                <a href="/index" />
            </li>
            <li className="homedeps1">
                <a href="/kr-terms">국내여행약관</a>
            </li>
        </SubTopNav>
        <div className="krterms_box w1200">
            <PolicyTopNav />
            <div dangerouslySetInnerHTML={{
                __html: homepage?.krTravelPolicy || ""
            }} />
        </div>
    </div>
}

export default KrTerms
