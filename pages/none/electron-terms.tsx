import React from 'react';

interface IProp { }

export const ElectronTerms: React.FC<IProp> = () => {
    return <div>
        <div className="top_visual">
            <div
                className="sub_header sub_bg"
                style={{ backgroundImage: `url(/img/pr_img_31.jpg)` }}
            >
                <div className="w1200">
                    <h2 className="title">전자상거래이용약관</h2>
                    {/*<p className="text">지금 여행을 떠나세요~!~~!!!!!</p>*/}
                </div>
            </div>
            <div className="header_nav">
                <ul>
                    <li className="home">
                        <a href="/index"></a>
                    </li>
                    <li className="homedeps1">Member</li>
                    <li className="homedeps2">
                        <a href="/">전자상거래이용약관</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="electronterms_box w1200">
            <ul className="subtop_nav">
                <li><a href="/member/rule">이용약관</a></li>
                <li><a href="/member/privacy-policy">개인정보처리방침</a></li>
                <li className="on"><a href="/member/electron-terms">전자상거래이용약관</a></li>
                <li><a href="/member/kr-terms">국내여행약관</a></li>
            </ul>
        </div>


    </div>
}

export default ElectronTerms