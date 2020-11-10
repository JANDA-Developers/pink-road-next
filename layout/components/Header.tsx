import Link from "next/link"
import React, { useEffect, useLayoutEffect } from 'react';
import { EditBtn } from 'components/common/EditBtn';
import $ from "jquery";

interface IProp { }

export const Header: React.FC<IProp> = () => {

    const handleNav = () => {
        $('#header').attr("tabindex", -1);
        return false
    }

    const handleMain = () => {
        $('#content-bm').attr("tabindex", -1);
        return false;
    }
    const handSearch = () => {
        $('.hidden').css({
            'display': 'block'
        });
        $('.search_wrap').animate({
            'top': '0'
        });
        $('.search_bg').css({
            'display': 'block'
        });

    }
    const handSearchClose = () => {
        $('.search_bg').css({
            'display': 'none'
        });

        $('.search_wrap').animate({
            'top': '-100px'
        });
        $('.hidden').css({
            'display': 'none'
        });
    }

    const handleAllMenu = () => {
        $('.all_menu').animate({
            'top': '0'
        });
        $('.m_bg').css({
            'display': 'block'
        });
    }
    const handleAllClose = () => {
        const target = document.getElementById('all_menu_right');
        if (target)
            target.style.display = 'none';

        const target2 = document.getElementById('fade');
        if (target2)
            target2.style.display = 'none';
        $('.m_bg').css({
            'display': 'none'
        });
        $('.all_menu').animate({
            'top': '-2600px'
        });
    }


    useEffect(() => {
        $('.nav_wrap ul li').on("hover", function () {
            $(this).find("ul").stop().fadeToggle(300);
        });

    }, [])

    return <header className="header">
        <div className="u_skip">
            <a href="#nav-bar" onClick={handleNav}><span>상단메뉴 바로가기</span></a>
            <a href="#main" onClick={handleMain}><span>본문 바로가기</span></a>
        </div>
        <div className="hd_size">
            <div className="hd_left">
                <div className="logo">
                    <h1>
                        <a href="/">
                            <img src={'/img/logo_1.png'} alt="logo" />
                        </a>
                    </h1>
                </div>
            </div>
            <div className="hd_center">
                <div className="nav_wrap">
                    <ul className="deps1">
                        <li className="deps">
                            <Link href="/site-info">
                                <a >PinkRoader</a>
                            </Link>
                        </li>
                        <li className="deps">
                            <a href="/portfolio">Work</a>
                        </li>
                        <li className="deps">
                            <a href="/tour">Tour</a>
                        </li>
                        <li className="deps">
                            <a href="/tour?type=exp">Experience</a>
                        </li>
                        <li className="deps">
                            <a href="/??">Design Goods</a>
                        </li>
                        <li className="deps">
                            <a href="/news">News</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="nav_bg"></div>
            <div className="hd_right">
                <div className="join">
                    <span><a href="/join" target="_self">JOIN</a></span>
                </div>

                <div className="login">
                    <span ><a href="/login">LOGIN</a></span>
                </div>
                <div className="logout">
                    <span ><a href="/">LOGOUT</a></span>
                </div>
                <div className="profile">
                    <span className="photo">프로필 사진</span>
                    <ul>
                        <li><span ><a href="/my-page">회원정보</a></span></li>
                        <li><span ><a href="/purchase">장바구니</a></span></li>
                        <li><span >구매내역</span></li>
                        <li><span >나의 게시글</span></li>
                        <li><span >예약관리</span></li>
                        <li><span >매출/정산관리</span></li>
                        <li><span >로그아웃</span></li>
                    </ul>
                </div>
                <div className="search_top">
                    <div className="search_btn">
                        <object type="image/svg+xml" data={'/img/svg/search_icon.svg'}>
                            현재 브라우저는 iframe을 지원하지 않습니다.
                        </object>
                        <button onClick={handSearch} />
                    </div>
                    <div className="hidden">
                        <div className="search_wrap">
                            <input type="text" placeholder="검색어를 입력해주세요" />
                            <div className="search_btn">
                                <object type="image/svg+xml" data={'/img/svg/search_icon.svg'}>
                                    현재 브라우저는 iframe을 지원하지 않습니다.
                            </object>
                                <button />

                            </div>
                        </div>
                    </div>
                    <div onClick={handSearchClose} className="search_bg"></div>
                </div>

                <div className="inform_top">
                    <div className="inform_icon">
                        <object type="image/svg+xml" data={'/img/svg/inform_icon4.svg'}>
                            현재 브라우저는 iframe을 지원하지 않습니다.
                        </object>
                        <button />
                        <span className="number">99+</span>
                    </div>
                </div>
                <div onClick={handleAllMenu} className="all_menu_btn">
                    <object type="image/svg+xml" data={'/img/svg/allmenu_icon.svg'}>현재 브라우저는 iframe을 지원하지 않습니다.</object>
                    <button />
                </div>
            </div>
            <div className="all_menu">
                <strong>전체메뉴</strong>
                <div className="m_member">
                    <div className="profile">
                        <span className="photo"></span>
                    </div>
                    <div className="profile_txt">
                        <span className="text01">포인트</span>
                        <span className="text02">0원</span>
                    </div>
                </div>
                <div className="m_all_menu_in">
                    <span><a href="/login">LOGIN</a></span>
                    <span><a href="/">LOGOUT</a></span>
                    <span><a href="/my-page">MY PAGE</a></span>
                    <span><a href="/">알림</a></span>
                    <span><a href="/">예약관리시스템</a></span>
                </div>
                <ul>
                    <li className="a_menu_tit deps solo_nav">
                        <a href="../siteinfo">PinkRoader<i className="jandaicon-arr4-right"></i></a>
                    </li>
                    <li className="a_menu_tit deps solo_nav">
                        <a href="../portfolio">Work<i className="jandaicon-arr4-right"></i></a>
                    </li>
                    <li className="a_menu_tit deps">
                        <a href="../tour_main">Tour<i className="jandaicon-arr4-right"></i></a>
                        <ul className="depth1">
                            <li><a href="/tour-list">Tour - list</a></li>
                            <li><a href="../tour_vziew">Tour - veiw</a></li>
                            <li><a href="../tour_writing">Tour - correction+writing</a></li>
                        </ul>
                    </li>
                    <li className="a_menu_tit deps">
                        <a href="../experience_main">Experience<i className="jandaicon-arr4-right"></i></a>
                        <ul className="depth1">
                            <li><a href="../experience_list">Experience - list</a></li>
                            <li><a href="../experience_view">Experience - veiw</a></li>
                            <li><a href="../experience_writing">Experience - correction+writing</a></li>
                        </ul>
                    </li>
                    <li className="a_menu_tit deps solo_nav">
                        <a href="/">Design Goods<i className="flaticon-link"></i></a>
                    </li>
                    <li className="a_menu_tit deps">
                        <a href="../tourstory">News<i className="jandaicon-arr4-right"></i></a>
                        <ul className="depth1">
                            <li><a href="../tourstory">여행이야기</a></li>
                            <li><a href="../culture">문화이야기</a></li>
                            <li><a href="../news">언론보도</a></li>
                        </ul>
                    </li>
                    <li className="a_menu_tit deps">
                        <a href="../mypage">My page<i className="jandaicon-arr4-right"></i></a>
                        <ul className="depth1">
                            <li><a href="/my-page">회원정보</a></li>
                            <li><a href="/my-page/purchase">구매내역</a></li>
                            <li><a href="/my-page/basket">장바구니</a></li>
                            <li><a href="/my-page/write">나의 게시글</a></li>
                            <li><a href="/my-page/reservation">예약관리</a></li>
                            <li><a href="/my-page/goods">상품관리</a></li>
                            <li><a href="/my-page/plainning">기획관리</a></li>
                            <li><a href="/my-page/settlement">매출/정산관리</a></li>
                        </ul>
                    </li>
                    <li className="a_menu_tit deps">

                        <a href="../master">Master<i className="jandaicon-arr4-right"></i></a>
                        <ul className="depth1">
                            <li><a href="../m_member">회원관리</a></li>
                            <li><a href="/">상품관리</a></li>
                            <li><a href="/">예약관리</a></li>
                            <li><a href="../m_design">디자인 설정</a></li>
                            <li><a href="../m_homepage">홈페이지 설정</a></li>
                        </ul>

                    </li>
                    <li className="a_menu_tit deps">
                        <a href="../login">Member<i className="jandaicon-arr4-right"></i></a>
                        <ul className="depth1">
                            <li><a href="../ligin">로그인</a></li>
                            <li><a href="../join">회원가입</a></li>
                            <li><a href="../idpw_find">아이디/비번 찾기</a></li>
                        </ul>
                    </li>
                </ul>
                <button className="btn_all_close" onClick={handleAllClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.15 26.15">
                        <rect className="cls-2" x="296.95" y="402.74" width="1.98" height="35" transform="translate(520.91 99.55) rotate(135)" />
                        <rect className="cls-2" x="296.95" y="402.74" width="1.98" height="35" transform="translate(-73.4 520.91) rotate(-135)" />
                    </svg>
                </button>
            </div>
            <div className="m_bg" />
            <EditBtn />
        </div>
    </header >;
};
