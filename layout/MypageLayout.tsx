import React from 'react';
import { MyPaths } from '../pages/mypage';

interface IProp { }

export const MypageLayout: React.FC<IProp> = ({ children }) => {
    return <div>
        <div className="top_visual">
            <div
                className="sub_header sub_bg"
                style={{ backgroundImage: `url(/img/su_visual_bg.jpg)` }}
            >
                <div className="w1200">
                    <h2 className="title">My page</h2>
                    <p className="text">지금 여행을 떠나세요~!~~!!!!!</p>
                </div>
            </div>
            <div className="header_nav">
                <ul>
                    <li className="home">
                        <a href="../main/main" />
                    </li>
                    <li className="homedeps1">My page</li>
                    <li className="homedeps2">
                        <a href="/mypage">회원정보</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="mypage_in w1200">
            <div className="lnb">
                <div className="profile_box">
                    <span className="photo">
                        <img src='/img/profile_p.png' alt="프로필이미지" />
                    </span>
                    <span className="nickname">새부산관광</span>
                </div>
                <h3>My page</h3>
                <ul>
                    <li className="on">
                        <a href={MyPaths.MyProfile}>회원정보</a>
                    </li>
                    {/* 개인 -*/}
                    <li>
                        <a href={MyPaths.myPurchase}>구매내역</a>
                    </li>
                    {/* 개인 -*/}
                    <li>
                        <a href={MyPaths.myBasket}>장바구니</a>
                    </li>
                    {/* 개인 -*/}
                    <li>
                        <a href={MyPaths.myWrite}>나의 게시글</a>
                    </li>
                    {/* 개인/기업파트너/개인파트너 -*/}
                    <li>
                        <a href={MyPaths.myReservation}>예약관리</a>
                    </li>
                    {/* 기업파트너/개인파트너 -*/}
                    <li>
                        <a href={MyPaths.myGoods}>상품관리</a>
                    </li>
                    {/* 기업파트너 -*/}
                    <li>
                        <a href={MyPaths.myPlainning}>기획관리</a>
                    </li>
                    {/* 개인파트너 -*/}
                    <li>
                        <a href={MyPaths.mySettlement}>매출/정산관리</a>
                    </li>
                    {/* 기업파트너/개인파트너 -*/}
                </ul>
            </div>
            {children}
        </div>;
        </div>
};
