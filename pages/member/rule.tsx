import React, { useContext } from 'react';
import SubTopNav from 'layout/components/SubTop';
import Link from 'next/link';
import { AppContext } from '../_app';
import { PolicyTopNav } from '../../components/policyTopNav/PolicyTopNav';

interface IProp { }

export const Rule: React.FC<IProp> = () => {
    const { homepage } = useContext(AppContext);
    return <div>
        <div className="top_visual">
            <div
                className="sub_header sub_bg"
                style={{ backgroundImage: `url(/img/pr_img_01.jpg)` }}
            >
                <div className="w1200">
                    <h2 className="title">이용약관</h2>
                    {/*<p className="text">지금 여행을 떠나세요~!~~!!!!!</p>*/}
                </div>
            </div>
            <div className="header_nav">
                <ul>
                    <li className="home">
                        <a href="/index"></a>
                    </li>
                    <li className="homedeps1">
                        <a href="/rule">이용약관</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="rule_box w1200">
            <PolicyTopNav />
            <div dangerouslySetInnerHTML={{ __html: homepage?.usePolicy || "" }} />
        </div>
    </div>
};

export default Rule