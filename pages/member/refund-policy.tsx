import Link from 'next/link'
import React, { useContext } from 'react'
import { PolicyTopNav } from '../../components/policyTopNav/PolicyTopNav'
import { AppContext } from '../_app';

const refundPolicy = () => {
    const { homepage } = useContext(AppContext);
    return (
        <div>
            <div className="top_visual">
                <div
                    className="sub_header sub_bg"
                    style={{ backgroundImage: `url(/img/pr_img_06.jpg)` }}
                >
                    <div className="w1200">
                        <h2 className="title">취소 및 환불 정책</h2>
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
                        <li className="homedeps1">Member</li>
                        <li className="homedeps2">
                            <a href="/">취소 및 환불 정책</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="privacy_box w1200">
                <PolicyTopNav />
                <div dangerouslySetInnerHTML={{
                    __html: ""
                }} />
            </div>

        </div>
    )
}

export default refundPolicy
