import Link from 'next/link'
import React, { useContext } from 'react'
import { PolicyTopNav } from '../../components/policyTopNav/PolicyTopNav'
import { AppContext } from '../_app';

const PrivacyPolicy = () => {
    const { homepage } = useContext(AppContext);

    return (
        <div>
            <div className="top_visual">
                <div
                    className="sub_header sub_bg"
                    style={{ backgroundImage: `url(/img/pr_img_06.jpg)` }}
                >
                    <div className="w1200">
                        <h2 className="title">개인정보처리방침</h2>
                        {/*<p className="text">지금 여행을 떠나세요~!~~!!!!!</p>*/}
                    </div>
                </div>
                <div className="header_nav">
                    <ul>
                        <li className="home">
                            <Link href="/">
                                <a />
                            </Link>
                        </li>
                        <li className="homedeps1">
                            <a href="/privacy-policy">개인정보처리방침</a>
                        </li>
                    </ul>
                </div>
            </div>

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



