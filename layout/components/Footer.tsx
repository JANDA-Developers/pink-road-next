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
        tourismbusinessNumber,
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
            <a onClick={() => {
                window.scrollTo({ behavior: "smooth", top: 0 })
            }} className="top"><i className="jandaicon-arr4-top" /></a>
            {isLogin && <Link href="/mypage/basket">
                <a className="basket"><img src="/img/svg/basket.svg" alt="basket icon" /><button /></a>
            </Link>}
            <a onClick={() => {
                window.scrollTo({ behavior: "smooth", top: 99999 })
            }} className="down"><i className="jandaicon-arr4-bottom" /></a>
        </div>
        <div className="footer_in">
            <div className="bottom_nav">
                <div className="mobile__select">
                    <input id="mobile-select-1" type="checkbox" name="checkbox-set" className="mobile-select-1" />
                    <label htmlFor="mobile-select-1" className="mobile-select-label-1"><strong>서비스 바로가기</strong><i className="jandaicon-arr4-bottom"></i></label>
                    <div className="mobile__select_box" id="mobile-selectbox-1">
                        <ul>
                            <li className="link"><a href="/site-info">회사소개</a></li>
                            <li className="link"><a href="/member/rule">이용약관</a></li>
                            <li className="link"><a href="/member/kr-terms">국내여행약관</a></li>
                            <li className="link"><a href="/member/privacy-policy">개인정보처리방침</a></li>
                            <li className="link"><a href="/member/refund-policy">취소 및 환불 정책</a></li>
                        </ul>
                    </div>
                </div>
                <ul className="w1200">
                    <li className="link pc"><Link href="/site-info"><a>회사소개</a></Link></li>
                    <li className="link pc"><Link href="/member/rule"><a>이용약관</a></Link></li>
                    <li className="link pc"><Link href="/member/kr-terms"><a>국내여행약관</a></Link></li>
                    <li className="link pc"><Link href="/member/privacy-policy"><a>개인정보처리방침</a></Link></li>
                    <li className="link pc"><Link href="/member/refund-policy"><a>취소 및 환불 정책</a></Link></li>
                    <li className="sns">
                        <div>
                            {homepage?.facebookLink && <a href={homepage?.facebookLink} target="_blank"><i className="jandaicon-facebook"></i></a>}
                            {homepage?.twitterLink && <a href={homepage?.twitterLink} target="_blank"><i className="jandaicon-twitter"></i></a>}
                            {homepage?.instaLink && <a href={homepage?.instaLink} target="_blank"><i className="jandaicon-instagram2"></i></a>}
                            {homepage?.blogLink && <a href={homepage?.blogLink} target="_blank"><i className="icon_blog"></i></a>}
                        </div>
                    </li>
                    <li className="cs"> <a href={homepage?.contact}>CONTACT</a></li>
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
                        <li>
                            <strong>관광사업등록증번호</strong>
                            <span>{tourismbusinessNumber}</span>
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
                            <strong>연락처</strong>
                            <span>{contact}</span>
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
                            {partnerFooter?.map((pt, i) =>
                                <span key={"footerpartner" + i} className="link" ><img src={pt.uri} alt="중소벤처기업로고" /></span>
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
