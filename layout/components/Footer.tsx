import React from 'react';
import $ from "jquery";
import Link from "next/link"

interface IProp { }

export const Footer: React.FC<IProp> = () => {

    const handleFadeClick = () => {
        $('family_site_select').css("display", 'none');
        $('fade1').css("display", 'none');
    }

    return <footer className="footer">
        <div className="footer_in">
            <div className="bottom_nav">
                <ul className="w1200">
                    <li><a href="/">회사소개</a></li>
                    <li><a href="/">이용약관</a></li>
                    <li><a href="/">국내여행약관</a></li>
                    <li><a href="/">전자상거래이용약관</a></li>
                    <li><a href="/">개인정보처리방침</a></li>
                    <li className="sns">
                        <div>
                            <a className="link1" href="/"><i className="jandaicon-facebook"></i></a>
                            <a className="link2" href="/"><i className="jandaicon-twitter"></i></a>
                            <a className="link3" href="/"><i className="jandaicon-instagram2"></i></a>
                            <a className="link4" href="/"><i>N</i></a>
                        </div>
                    </li>
                    <li className="cs"> <a href="mailto:pinkroader@gmail.com">CONTACT</a></li>
                </ul>
            </div>
            <div className="f_detail_wrap">
                <div className="ft_left">
                    <div className="magency logo_bottom">
                        <img src="/img/logo_2.png" alt="logo" />
                    </div>
                </div>
                <div className="copyright">
                    <ul className="footer_homepage_info">
                        <li>
                            <strong className="name">주식회사 핑크로더</strong>
                        </li>
                        <li>
                            <span>대표</span>
                            <strong>양화니</strong>
                        </li>

                        <li>
                            <span>사업자등록번호</span>
                            <strong>603-81-87668<Link href="http://www.ftc.go.kr/www/bizCommList.do?key=232"><a>사업자정보확인</a></Link></strong>
                        </li>
                        <li>
                            <span>통신판매업신고번호</span>
                            <strong>제 2017-부산중구-0167호</strong>
                        </li>
                    </ul>
                    <ul className="footer_homepage_info">
                        <li>
                            <span>영업보증보험</span>
                            <strong>5천만원 가입</strong>
                        </li>
                        <li>
                            <span>이메일</span>
                            <strong>pinkroader@gmail.com</strong>
                        </li>
                        <li>
                            <span>전화번호</span>
                            <strong>05-254-24220 Am 10:00 ~ pm 5:00</strong>
                        </li>

                        <li>
                            <span>주소</span>
                            <strong>부산광역시 중구 40계단길 10, 3F<i className="flaticon-placeholder-3"></i></strong>
                        </li>
                        <li>
                            <span>계좌번호</span>
                            <strong>신한은행 100-031-819617 / 예금주 : 주식회사 핑크로더</strong>
                        </li>
                        <li className="bottom_txt">
                            Copyright © 2020 PINKROADER Co., Ltd. All rights reserved
                    </li>
                    </ul>
                    <div className="bottom_bn">
                        <div className="partner">
                            <span className="link"><img src="/img/partners7.png" alt="사회적기업" /></span>
                            <span className="link"><img src="/img/partners7.png" alt="공유경제부산" /></span>
                            <span className="link"><img src="/img/partners7.png" alt="여성기업" /></span>
                            <span className="link"><img src="/img/partners7.png" alt="벤처기업" /></span>
                            <span className="link"><img src="/img/partners7.png" alt="도시재생전문기업" /></span>
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
                            대한민국 1등 온·오프라인 숙소운영 및 통합예약 솔루션
                                                    </a>
                    </p>
                </div>
            </div>
        </div>
    </footer>;
};
