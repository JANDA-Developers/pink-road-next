import React, { useContext } from 'react';
import { PolicyTopNav } from '../../components/policyTopNav/PolicyTopNav';
import { usePageEdit } from '../../hook/usePageEdit';
import { getStaticPageInfo, Ipage } from '../../utils/page';
import { AppContext } from '../_app';
import defaultPageInfo from "../../info/krPolicy.json"
import SubTopNav from '../../layout/components/SubTop';
import { PageEditor } from '../../components/common/PageEditer';

interface IProp { }

export const getStaticProps = getStaticPageInfo("krPolicy");
export const KrTerms: React.FC<Ipage> = (pageInfo) => {
    const { homepage } = useContext(AppContext);
    const pageTools = usePageEdit(pageInfo, defaultPageInfo)

    return <div>
        <SubTopNav pageTools={pageTools}>
            <li className="homedeps1">
                <a href="/kr-terms">국내여행약관</a>
            </li>
        </SubTopNav>
        <PageEditor pageTools={pageTools} />
        <div className="krterms_box w1200">
            <PolicyTopNav />
            <div dangerouslySetInnerHTML={{
                __html: homepage?.krTravelPolicy || ""
            }} />
        </div>
    </div>
}

export default KrTerms
