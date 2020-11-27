import React from 'react';

interface IProp { }

export const MasterLayout: React.FC<IProp> = ({ children }) => {
    return <div>
        <div className="top_visual">
            <div
                className="sub_header sub_bg"
                style={{ backgroundImage: `url(/img/pr_img_40.jpg)` }}
            >
                <div className="w1200">
                    <h2 className="title">Master</h2>
                    <p className="text">지금 여행을 떠나세요~!~~!!!!!</p>
                </div>
            </div>
            <div className="header_nav">
                <ul>
                    <li className="home">
                        <a href="../main/main" />
                    </li>
                    <li className="homedeps1">Master</li>
                    <li className="homedeps2">
                        <a href="/mypage">마스터홈</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="mypage_in w100">
            <ul className="subtop_nav">
                <li className="on"><a href="/master">회원정보</a></li>
                {/*<li><a href="/master/ms-notification">알림</a></li>*/}
                <li><a href="/mypage/ms-member">회원관리</a></li>
                <li><a href="/mypage/ms-goods">상품관리</a></li>
                <li><a href="/mypage/ms-reservation">예약관리</a></li>
                <li><a href="/mypage/ms-design">디자인 설정</a></li>
                <li><a href="/mypage/ms-homepage">홈페이지 설정</a></li>
            </ul>
            <div className="w1200">
                {children}
            </div>
        </div>
    </div>
};
