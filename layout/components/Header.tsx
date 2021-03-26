import Link from "next/link"
import React, { useContext, useEffect, useState } from 'react';
import $ from "jquery";
import { AppContext } from "pages/_app";
import { NEWS_TYPE } from "../../types/api";
import { setVal, whenEnter } from "../../utils/eventValueExtracter";
import { Router, useRouter } from "next/router";
import { NotiIcon } from "./NotiIcon";
import { generateSearchLink } from "../../pages/search";
import { userRoleToKR } from "../../utils/enumToKr";

interface IProp { }
export const handSearchClose = () => {
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

export const Header: React.FC<IProp> = () => {
    const [search, setSearch] = useState("");
    const rotuer = useRouter()


    const { isLogin, myProfile, isManager } = useContext(AppContext);

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
    const handleAllMenu = () => {
        $('#all_menu').animate({
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
        $('#all_menu').animate({
            'top': '-2600px'
        });
    }

    const handleLogOut = () => {
        localStorage.removeItem("jwt");
        location.href = "/"
    }

    const goToSearchPage = () => {
        rotuer.push(generateSearchLink({ title: search }))
        $('.search_bg').css({
            'display': 'none'
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
        setSearch("");
    }

    useEffect(() => {
        $('.nav_wrap ul li').on("hover", function () {
            $(this).find("ul").stop().fadeToggle(300);
        });
        rotuer.events.on('routeChangeStart', handleAllClose)
    }, [])

    return <header className="header" id="header">
        <div className="top-menu">
            <div className="w1200">
                {isLogin ? <p className="welcome_ms"><strong>{userRoleToKR(myProfile?.role)}</strong> {myProfile?.name}님 어서오세요</p>
                    : ""}
                <ul onClick={handleAllClose}>
                    <li >
                        <Link href="/member/announce">
                            <a>고객센터</a>
                        </Link>
                    </li>
                    {!isLogin && <li >
                        <Link href="/login">
                            <a>장바구니 </a>
                        </Link>
                    </li>
                    }
                    <li >
                        <Link href="/customquotation">
                            <a>맞춤견적</a>
                        </Link>
                    </li>
                </ul>
                <ul className="btnList__round">
                    {isLogin ? "" :
                        <li className="join">
                            <Link href="/member/join">
                                <a>JOIN</a>
                            </Link>
                        </li>
                    }
                    {isLogin ? <li className="logout">
                        <a onClick={handleLogOut}>LOGOUT</a>
                    </li> : <li className="login"> <Link href="/login">
                        <a>LOGIN</a>
                    </Link>
                    </li>}

                </ul>
            </div>
        </div>
        <div className="main_menu">
            <div className="w1200">
                <div className="u_skip">
                    <Link href="#nav-bar"><a onClick={handleNav}><span>상단메뉴 바로가기</span></a></Link>
                    <Link href="#main"><a onClick={handleMain}><span>본문 바로가기</span></a></Link>
                </div>
                <div className="hd_size">
                    <div className="hd_left">
                        <div className="logo">
                            <h1>
                                <Link href="/">
                                    <a><img src={'/img/logo_1.png'} alt="logo" /></a>
                                </Link>
                            </h1>
                        </div>
                    </div>
                    <div className="hd_center">
                        <div className="nav_wrap">
                            <ul className="deps1" id="nav-bar">
                                <li className="deps">

                                    <Link href="/site-info">
                                        <a>PinkRoader</a>
                                    </Link>
                                </li>
                                <li className="deps">
                                    <Link href="/portfolio">
                                        <a>Work</a>
                                    </Link>
                                </li>
                                <li className="deps">
                                    <Link href="/tour">
                                        <a>Tour</a>
                                    </Link>
                                </li>
                                <li className="deps">
                                    <Link href="/tour?exp=true">
                                        <a>Experience</a>
                                    </Link>
                                </li>
                                <li className="deps">
                                    <a href="https://smartstore.naver.com/pinkroader" target="_blank">Design Goods</a>
                                </li>
                                <li className="deps">
                                    <Link href={`/news?type=${NEWS_TYPE.TRAVEL}`}>
                                        <a>News</a>
                                    </Link>

                                    <ul className="deps_nav">
                                        <li><Link href={`news?type=${NEWS_TYPE.TRAVEL}`}><a>여행이야기</a></Link></li>
                                        <li><Link href={`news?type=${NEWS_TYPE.CULTURE}`}><a>문화이야기</a></Link></li>
                                        <li><Link href={`news?type=${NEWS_TYPE.MEDIA}`}><a>언론보도</a></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav_bg"></div>
                    <div className="hd_right">

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
                                <img src="/img/svg/search_icon.svg" alt="search icon" />
                                <button onClick={handSearch} />
                            </div>
                            <div className="hidden">
                                <div className="w1200">
                                    <div className="search_wrap">

                                        <input onKeyPress={whenEnter(goToSearchPage)} value={search} onChange={setVal(setSearch)} type="text" placeholder="검색어를 입력해주세요" />
                                        <div onClick={goToSearchPage} className="search_btn">
                                            <img src="/img/svg/search_icon.svg" alt="search icon" />
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
                        {/* {isLogin ?
                            <div className="inform_top">
                                <Link href="/mypage/notification">
                                    <a>
                                        <NotiIcon />
                                    </a>
                                </Link>
                            </div>
                            : ""} */}
                        {isLogin ?
                            <div className="inform_top">
                                <Link href="/mypage">
                                    <a>
                                        <div className="mypage_icon">
                                            <img src={'/img/svg/icon_man.svg'} alt="mypage icon" />
                                            <button />

                                        </div>
                                    </a>
                                </Link>
                            </div>
                            : ""}
                        <div onClick={handleAllMenu} className="all_menu_btn">
                            <img src="/img/svg/allmenu_icon.svg" alt="allmenu icon" />
                            <button />
                        </div>

                    </div>
                    <div id="all_menu">
                        <strong>전체메뉴</strong>
                        {isLogin ? <div className="m_member">
                            <div className="profile">
                                <span className="photo"></span>
                            </div>
                            <div className="profile_txt">
                                <span className="text01">포인트</span>
                                <span className="text02">0원</span>
                            </div>
                        </div>
                            : ""}

                        <div className="m_all_menu_in">
                            {isLogin ? <span><a onClick={handleLogOut}>LOGOUT</a></span>
                                : <span><Link href="/login"><a>LOGIN</a></Link></span>}
                            {isLogin && <span><Link href="/mypage"><a>MY PAGE</a></Link></span>}
                            {isLogin && <span><Link href="/mypage/notification"><a>알림</a></Link></span>}
                            {!isLogin && <span><a href="member/join">JOIN</a></span>}
                            <span><Link href="/member/question"><a>고객문의</a></Link></span>
                        </div>
                        <ul>
                            <li className="a_menu_tit deps solo_nav">
                                <Link href="/site-info"><a>PinkRoader<i className="jandaicon-arr4-right"></i></a></Link>
                            </li>
                            <li className="a_menu_tit deps solo_nav">
                                <Link href="/portfolio"><a>Work<i className="jandaicon-arr4-right"></i></a></Link>
                            </li>
                            <li className="a_menu_tit deps">
                                <Link href="/tour/list"><a>Tour<i className="jandaicon-arr4-right"></i></a></Link>

                            </li>
                            <li className="a_menu_tit deps">
                                <Link href="/tour?type=exp"><a>Experience<i className="jandaicon-arr4-right"></i></a></Link>

                            </li>
                            <li className="a_menu_tit deps solo_nav">
                                <Link href="/"><a target="_blank">Design Goods<i className="jandaicon-arr4-right"></i></a></Link>
                            </li>
                            <li className="a_menu_tit deps">
                                <Link href="/news"><a target="_blank">News<i className="jandaicon-arr4-right"></i></a></Link>
                                <ul className="depth1">
                                    <li onClick={handleAllClose}><Link href={`/news?type=${NEWS_TYPE.TRAVEL}`}><a>여행이야기</a></Link></li>
                                    <li onClick={handleAllClose}><Link href={`/news?type=${NEWS_TYPE.CULTURE}`}><a>문화이야기</a></Link></li>
                                    <li onClick={handleAllClose}><Link href={`/news?type=${NEWS_TYPE.MEDIA}`}><a>언론보도</a></Link></li>
                                </ul>
                            </li>
                            {isLogin &&
                                <li className="a_menu_tit deps">
                                    <Link href="/mypage"><a target="_blank">My page<i className="jandaicon-arr4-right"></i></a></Link>
                                    <ul className="depth1">
                                        <li><Link href="/mypage"><a>회원정보</a></Link></li>
                                        <li><Link href="/mypage/notification"><a>알림</a></Link></li>
                                        <li><Link href="/mypage/purchase"><a>구매내역</a></Link></li>
                                        <li><Link href="/mypage/basket"><a>장바구니</a></Link></li>
                                        <li><Link href="/mypage/write"><a>나의 게시글</a></Link></li>
                                        <li><Link href="/mypage/reservation"><a>예약관리</a></Link></li>
                                        <li><Link href="/mypage/goods"><a>상품관리</a></Link></li>
                                        <li><Link href="/mypage/plainning"><a>기획관리</a></Link></li>
                                        <li><Link href="/mypage/settlement"><a>매출/정산관리</a></Link></li>
                                    </ul>
                                </li>}
                            {isManager &&
                                <li className="a_menu_tit deps">
                                    <Link href="/master"><a>Master<i className="jandaicon-arr4-right"></i></a></Link>
                                    <ul className="depth1">
                                        <li><Link href="/master/notification"><a>알림</a></Link></li>
                                        <li><Link href="/master/member"><a>회원관리</a></Link></li>
                                        <li><Link href="/master/goods"><a>상품관리</a></Link></li>
                                        <li><Link href="/master/reservation"><a>예약관리</a></Link></li>
                                        <li><Link href="/master/design"><a>디자인 설정</a></Link></li>
                                        <li><Link href="/master/homepage"><a>홈페이지 설정</a></Link></li>

                                    </ul>
                                </li>}
                            {isManager &&
                                <li className="a_menu_tit deps">
                                    <Link href="/login"><a>Member<i className="jandaicon-arr4-right"></i></a></Link>
                                    <ul className="depth1">
                                        <li><Link href="/login"><a>로그인</a></Link></li>
                                        <li><Link href="/member/join"><a>회원가입</a></Link></li>
                                        <li><Link href="/findmembers"><a>아이디/비번 찾기</a></Link></li>
                                        <li><Link href="/search"><a>통합검색</a></Link></li>
                                        <li><Link href="/member/rule"><a>이용약관</a></Link></li>
                                        <li><Link href="/member/privacy-policy"><a>개인정보처리방침</a></Link></li>
                                        <li><Link href="/member/electron-terms"><a>전자상거래이용약관</a></Link></li>
                                        <li><Link href="/member/kr-terms"><a>국내여행약관</a></Link></li>
                                        <li><Link href="/member/question"><a>고객문의</a></Link></li>
                                        <li><Link href="/member/announce"><a>공지사항</a></Link></li>
                                        <li><Link href="/member/qna"><a>자주하는 질문</a></Link></li>
                                        <li><Link href="/customquotation"><a>맞춤견적</a></Link></li>
                                        <li><Link href="/member/anonyMemberFindBook"><a>비회원 예약조회</a></Link></li>
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
                </div>
            </div>
        </div>
    </header >;
};
