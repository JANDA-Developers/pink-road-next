import Link from "next/link"
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { EditBtn } from 'components/common/EditBtn';
import $ from "jquery";
import { AppContext } from "pages/_app";
import { NEWS_TYPE } from "../../types/api";
import { setVal, whenEnter } from "../../utils/eventValueExtracter";
import { useRouter } from "next/router";
import cache from "../../apollo/cache";
import { NotiIcon } from "./NotiIcon";

interface IProp { }

export const Header: React.FC<IProp> = () => {
    const [search, setSearch] = useState("");
    const rotuer = useRouter()

    const { isLogin, myProfile, isSeller, isManager, isAdmin } = useContext(AppContext);

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
        $('#all_menu').animate({
            'top': '0'
        });
        $('.m_bg').css({
            'display': 'block'
        });
    }
    const languageOpen = () => {

        $('.languageBox').css({
            'display': 'block'
        });
        $('.language .btn i').animate({
            'transform': 'rotate(180deg)'
        });
    }
    const languageClose = () => {

        $('.languageBox').css({
            'display': 'none'
        });
        $('.language .btn i').animate({
            'transform': 'rotate(0deg)'
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
        $('#all_menu').animate({
            'top': '-2600px'
        });
    }

    const handleLogOut = () => {
        localStorage.removeItem("jwt");
        location.href = process.env.NEXT_PUBLIC_CLIENT_DOMAIN + "/"
    }

    const goToSearchPage = () => {
        rotuer.push(`/search?search=${search}#ProductViewer`)
    }

    useEffect(() => {
        $('.nav_wrap ul li').on("hover", function () {
            $(this).find("ul").stop().fadeToggle(300);
        });

    }, [])


    return <header className="header" id="header">
        <div className="u_skip">
            <a href="#nav_wrap" onClick={handleNav}><span>상단메뉴 바로가기</span></a>
            <a href="#main" onClick={handleMain}><span>본문 바로가기</span></a>
        </div>
        <div className="top-menu">
            <div className="w1200">
                {isLogin && <p className="welcome_ms"><strong>{myProfile?.nickName}</strong>님 어서오세요~!!</p>}
                <ul className="top-menu-in">
                    <li className="join">
                        {isLogin ? ""
                            : <Link href="/member/join"><a>JOIN</a></Link>}
                    </li>
                    <li className="login">
                        {isLogin ? <a onClick={handleLogOut}>LOGOUT</a>
                            : <Link href="/member/login">
                                <a>LOGIN</a>
                            </Link>}
                    </li>
                    {isSeller && <li className="mypage">
                        <Link href="/mypage"><a target="_blank">My page<i className="jandaicon-arr4-right"></i></a></Link>
                    </li>}
                    {isManager && <li className="master">
                        <Link href="/master"><a target="_blank">Master<i className="jandaicon-arr4-right"></i></a></Link>
                    </li>}

                    <li className="language">
                        <button className="btn" onClick={languageOpen}>English<i className="jandaicon-arr4-bottom"></i></button>
                        <ul className="languageBox" onClick={languageClose}>
                            <li><a href="/">English</a></li>
                            <li><a href="/">Chinese</a></li>
                            <li><a href="/">Japanese</a></li>
                            <li><a href="/">Korean</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div className="main_menu">
            <div className="w1200">

                <div className="hd_size">
                    <div className="hd_left">
                        <div className="logo">
                            <h1>
                                <Link href="/">
                                    <a><img src={'/its/logo_1.png'} alt="logo" /></a>
                                </Link>
                            </h1>
                        </div>
                    </div>
                    <div className="nav_bg"></div>
                    <div className="hd_right">
                        <div className="hd_center">
                            <div className="nav_wrap" id="nav_wrap">
                                <ul className="deps1">
                                    <li className="deps">
                                        <a href="/guide">It's가이드</a>
                                    </li>
                                    <li className="deps">
                                        <a href="/tour">It's투어</a>
                                    </li>
                                    <li className="deps">
                                        <a href="/service/notice">서비스</a>
                                    </li>
                                    <li className="deps">
                                        <a href="/site-info">소개</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        {/* <div className="profile">
                            <span className="photo">프로필 사진</span>
                            <ul>
                                <li><span><Link href="/my-page"><a>회원정보</a></Link></span></li>
                                <li><span><Link href="/purchase"><a>장바구니</a></Link></span></li>
                                <li><span><Link href="/"><a>구매내역</a></Link></span></li>
                                <li><span><Link href="/"><a>나의 게시글</a></Link></span></li>
                                <li><span><Link href="/"><a>예약관리</a></Link></span></li>
                                <li><span><Link href="/"><a>매출/정산관리</a></Link></span></li>
                                <li><span><Link href="/"><a>로그아웃</a></Link></span></li>
                            </ul>
                        </div> */}
                        <div className="searchtop">
                            <div className="search_btn">
                                <img src={'/img/svg/search_icon.svg'} alt="search icon" />
                                <button onClick={handSearch} />
                            </div>
                            <div className="hidden">
                                <div className="w1200">
                                    <div className="search_wrap">

                                        <input onKeyPress={whenEnter(goToSearchPage)} value={search} onChange={setVal(setSearch)} type="text" placeholder="검색어를 입력해주세요" />
                                        <div className="search_btn">
                                            <img src={'/img/svg/search_icon.svg'} />
                                            <button className="btt1" />
                                        </div>
                                        <div className="close_btn" onClick={handSearchClose}>
                                            <i className="flaticon-multiply"></i>
                                            <button className="btt2" />
                                        </div>

                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div onClick={handSearchClose} className="search_bg"></div>
                        </div>
                        {isLogin &&
                            <div className="inform_top">
                                <div className="inform_icon">
                                    <img src={'/img/svg/inform_icon4.svg'} />
                                    <button />
                                    <span className="number">99+</span>
                                </div>
                            </div>
                        }
                        <div onClick={handleAllMenu} className="all_menu_btn">
                            <img src={'/img/svg/allmenu_icon.svg'} />
                            <button />
                        </div>

                    </div>
                    <div id="all_menu">
                        <strong>전체메뉴</strong>
                        {isSeller && <div className="m_member">
                            <div className="profile">
                                <span className="photo"></span>
                            </div>
                            <div className="profile_txt">
                                <span className="text01">포인트</span>
                                <span className="text02">0원</span>
                            </div>
                        </div>}

                        <div className="m_all_menu_in">
                            {isLogin ? <span><a onClick={handleLogOut}>LOGOUT</a></span>
                                : <span><Link href="/login"><a>LOGIN</a></Link></span>}
                            {isLogin && <span><Link href="/mypage"><a>MY PAGE</a></Link></span>}
                            {isLogin && <span><Link href="/mypage/notification"><a>알림</a></Link></span>}
                            {isLogin ? ""
                                : <span><Link href="/member/join"><a>JOIN</a></Link></span>}
                            <span><Link href="/member/inquiry"><a>문의하기</a></Link></span>
                            <span><Link href="/member/event"><a>이벤트</a></Link></span>
                            {/* <span><Link href="https://booking-app.stayjanda.cloud/#/"><a>예약관리시스템</a></Link></span> */}
                        </div>
                        <ul>
                            <li className="a_menu_tit deps solo_nav">
                                <Link href=""><a>It's가이드<i className="jandaicon-arr4-right"></i></a></Link>
                            </li>
                            <li className="a_menu_tit deps solo_nav">
                                <Link href="/portfolio"><a>It's투어<i className="jandaicon-arr4-right"></i></a></Link>
                            </li>
                            <li className="a_menu_tit deps">
                                <Link href="/service/notice"><a>서비스<i className="jandaicon-arr4-right"></i></a></Link>
                                <ul className="depth1">
                                    <li><a href="/service/notice">공지사항</a></li>
                                    <li><a href="/service/event">이벤트</a></li>
                                    <li><a href="/service/inquiry">문의하기</a></li>
                                    <li><a href="/service/search">통합검색</a></li>
                                    <li><a href="/service/rule">이용약관</a></li>
                                    <li><a href="/service/privacy-policy">개인정보처리방침</a></li>
                                </ul>
                            </li>
                            <li className="a_menu_tit deps">
                                <Link href="/site-info"><a>소개<i className="jandaicon-arr4-right"></i></a></Link>
                            </li>
                            {isAdmin && <li className="a_menu_tit deps hiddennav betatest">
                                <Link href="/mypage"><a target="_blank">My page<i className="jandaicon-arr4-right"></i></a></Link>
                                <ul className="depth1">
                                    <li><a href="/mypage">회원정보</a></li>
                                    <li><a href="/mypage/notification">알림</a></li>
                                    <li><a href="/mypage/profilepage">프로필관리</a></li>
                                    <li><a href="/mypage/basket">리뷰관리</a></li>
                                    <li><a href="/mypage/write">나의 게시글</a></li>
                                    <li><a href="/mypage/reservation">예약관리</a></li>
                                    <li><a href="/mypage/goods">나의 It's투어</a></li>
                                    <li><a href="/mypage/settlement">매출/정산</a></li>
                                </ul>
                            </li>}

                            {isAdmin && <li className="a_menu_tit deps hiddennav betatest">
                                <a href="/master">Master<i className="jandaicon-arr4-right"></i></a>
                                <ul className="depth1">
                                    <li><a href="/master/notification">알림</a></li>
                                    <li><a href="/master/member">회원관리</a></li>
                                    <li><a href="/master/goods">상품관리</a></li>
                                    <li><a href="/master/reservation">예약관리</a></li>
                                    <li><a href="/master/design">디자인 설정</a></li>
                                    <li><a href="/master/homepage">홈페이지 설정</a></li>
                                </ul>
                            </li>}

                            {isAdmin && <li className="a_menu_tit deps hiddennav betatest">
                                <a href="/member/login">Member<i className="jandaicon-arr4-right"></i></a>
                                <ul className="depth1">
                                    <li><a href="/member/login">로그인</a></li>
                                    <li><a href="/member/join">회원가입</a></li>
                                    <li><a href="/member/findmembers">아이디/비번 찾기</a></li>
                                </ul>
                            </li>}

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
            </div>
        </div>
    </header >;
};
