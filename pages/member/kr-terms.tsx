import React, { useContext } from 'react';
import { PolicyTopNav } from '../../components/policyTopNav/PolicyTopNav';
import { AppContext } from '../_app';

interface IProp { }

export const KrTerms: React.FC<IProp> = () => {
    const { homepage } = useContext(AppContext);

    return <div>
        <div className="top_visual">
            <div
                className="sub_header sub_bg"
                style={{ backgroundImage: `url(/img/pr_img_18.jpg)` }}
            >
                <div className="w1200">
                    <h2 className="title">국내여행약관</h2>
                    {/*<p className="text">지금 여행을 떠나세요~!~~!!!!!</p>*/}
                </div>
            </div>
            <div className="header_nav">
                <ul>
                    <li className="home">
                        <a href="/index" />
                    </li>
                    <li className="homedeps1">
                        <a href="/kr-terms">국내여행약관</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="krterms_box w1200">
            <PolicyTopNav />
            <div dangerouslySetInnerHTML={{
                __html: homepage?.krTravelPolicy || ""
            }} />
        </div>
    </div>
}

export default KrTerms