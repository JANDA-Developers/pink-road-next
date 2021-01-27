import React, { useContext, useEffect, useLayoutEffect } from 'react';
import $ from "jquery";
import Link from "next/link";

import { AppContext } from "pages/_app";

interface IProp { }

export const Footer: React.FC<IProp> = () => {

    const { isLogin, homepage } = useContext(AppContext);

    const {
        openTime,
        ceoName,
        siteName,
        contact,
        copyRight,
        address,
        addressUrl,
        bankInfo,
        email,
        busiNumber,
        degitalSalesNumber,
        logoBottom,
        partnerFooter
    } = homepage || {};

    const { accountHolder, accountNumber, bankName } = bankInfo || {}

    const handleFadeClick = () => {
        $('family_site_select').css("display", 'none');
        $('fade1').css("display", 'none');
    }


    return <footer className="footer" id="footer">
        <div id="gotop" className="">
            <Link href="#header">
                <a className="top"><i className="jandaicon-arr4-top" /></a>
            </Link>
            {isLogin && <Link href="/mypage/basket">
                <a className="basket"><img src="/img/svg/basket.svg" alt="basket icon" /><button /></a>
            </Link>}
            <Link href="#footer">
                <a className="down"><i className="jandaicon-arr4-bottom" /></a>
            </Link>
        </div>
        <div className="footer_in">
            <div className="bottom_nav">
                <ul className="w1200">
                    <li className="link"><Link href="/site-info"><a>회사소개</a></Link></li>
                    <li className="link"><Link href="/member/rule"><a>이용약관</a></Link></li>
                    <li className="link"><Link href="/member/kr-terms"><a>국내여행약관</a></Link></li>
                    <li className="link"><Link href="/member/privacy-policy"><a>개인정보처리방침</a></Link></li>
                    <li className="sns">
                        <div>
                            <Link href="https://www.facebook.com/PinkRoader"><a target="_blank"><i className="jandaicon-facebook"></i></a></Link>
                            <Link href="https://twitter.com/PinkRoader"><a target="_blank"><i className="jandaicon-twitter"></i></a></Link>
                            <Link href="https://www.instagram.com/pinkroader_"><a target="_blank"><i className="jandaicon-instagram2"></i></a></Link>
                            <Link href="http://blog.naver.com/pinkroader"><a target="_blank"><i className="icon_blog"></i></a></Link>
                        </div>
                    </li>
                    <li className="cs"> <Link href="mailto:pinkroader@gmail.com"><a>CONTACT</a></Link></li>
                </ul>
            </div>
            <div className="f_detail_wrap">
                <div className="ft_left">
                    <div className="magency logo_bottom">
                        <img src={logoBottom?.uri || ""} alt="logo" />
                    </div>
                </div>
                <div className="copyright">
                    <ul className="footer_homepage_info">
                        <li>
                            <strong className="name">{siteName}</strong>
                        </li>
                        <li>
                            <strong>대표</strong>
                            <span>{ceoName}</span>
                        </li>

                        <li>
                            <strong>사업자등록번호</strong>
                            <span>{busiNumber}<a href="http://www.ftc.go.kr/www/bizCommList.do?key=232" className="url" target="_blank" title="사업자정보확인확인 새창띄우기">사업자정보확인</a></span>
                        </li>
                        <li>
                            <strong>통신판매업신고번호</strong>
                            <span>{degitalSalesNumber}</span>
                        </li>
                        <li>
                            <strong>영업보증보험</strong>
                            <span>5천만원 가입</span>
                        </li>
                        <li className="bottom_txt pc">
                            {copyRight}
                        </li>
                    </ul>
                    <ul className="footer_homepage_info mt">
                        <li>
                            <strong>이메일</strong>
                            <span>{email}</span>
                        </li>
                        <li>
                            <strong>영업시간</strong>
                            <span>{openTime}</span>
                        </li>

                        <li>
                            <strong>주소</strong>
                            <span>{address}<a target="_blank" href={addressUrl} className="icon" title="지도로 새창띄우기"><img src="/img/svg/map.svg" alt="map icon" /><button /></a></span>
                        </li>
                        <li>
                            <strong>계좌번호</strong>
                            <span>{bankName} {accountNumber}/예금주:{accountHolder}</span>
                        </li>
                        <li className="bottom_txt m">
                            {copyRight}
                        </li>
                    </ul>
                    <div className="bottom_bn">
                        <div className="partner">
                            {partnerFooter?.map(pt =>
                                <span className="link" ><img src={pt.uri} alt="중소벤처기업로고" /></span>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div id="fade1" onClick={handleFadeClick} />
        <div className="footer-area-bottom">
            <div className="container">
                <div className="janda_txt">
                    <p>
                        <a href="https://stayjanda.com/" target="_blank" rel="noopener">
                            <i className="jandaicon-janda"></i>
                            대한민국 1등 클라우드·핀테크 기반 예약솔루션
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <div>
        </div>
    </footer>;
};
