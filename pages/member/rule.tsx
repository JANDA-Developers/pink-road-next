import React, { useContext } from 'react';
import SubTopNav from 'layout/components/SubTop';
import Link from 'next/link';
import defaultRuleInfo from "../../info/rule.json"
import { AppContext } from '../_app';
import { PolicyTopNav } from '../../components/policyTopNav/PolicyTopNav';
import { getStaticPageInfo, Ipage } from '../../utils/page';
import { usePageEdit } from '../../hook/usePageEdit';
import { PageEditor } from '../../components/common/PageEditer';

interface IProp {
}

export const getStaticProps = getStaticPageInfo("ruleJson");
export const Rule: React.FC<Ipage> = (pageInfo) => {
    const pageTools = usePageEdit(pageInfo, defaultRuleInfo);
    const { homepage } = useContext(AppContext);
    return <div>
        <div className="top_visual">
            <SubTopNav pageTools={pageTools} >
                <li className="home">
                    <a href="/index"></a>
                </li>
                <li className="homedeps1">
                    <a href="/rule">이용약관</a>
                </li>
            </SubTopNav>
        </div>
        <PageEditor pageTools={pageTools} />
        <div className="rule_box w1200">
            <PolicyTopNav />
            <div dangerouslySetInnerHTML={{ __html: homepage?.usePolicy || "" }} />
        </div>
    </div>
};

export default Rule