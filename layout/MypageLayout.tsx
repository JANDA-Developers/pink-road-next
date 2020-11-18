import React from 'react';

interface IProp { }

export const MypageLayout: React.FC<IProp> = ({ children }) => {
    return <div>
        <div className="top_visual">
            <div
                className="sub_header sub_bg"
                style={{ backgroundImage: `url(/img/work_top_bg2.jpg)` }}
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
        <div className="mypage_in w100">
            <ul className="subtop_nav">
                <li className="on"><a href="/mypage">회원정보</a></li>{/* 개인 -*/}
                <li><a href="/mypage/purchase">구매내역</a></li>{/* 개인 -*/}
                <li><a href="/mypage/basket">장바구니</a></li>{/* 개인 -*/}
                <li><a href="/mypage/my-board">나의 게시글</a></li>{/* 개인/기업파트너/개인파트너 -*/}
                <li><a href="/mypage/reservation">예약관리</a></li>{/* 기업파트너/개인파트너 -*/}
                <li><a href="/mypage/goods">상품관리</a></li>{/* 기업파트너 -*/}
                <li><a href="/mypage/plainning">기획관리</a></li>{/* 개인파트너 -*/}
                <li><a href="/mypage/settlement">매출/정산관리</a></li>{/* 기업파트너/개인파트너 -*/}
            </ul>
            <div className="w1200">
               
                <div className="lnb">
                    <div className="profile_box">
                        <div className="welcome">
                            <span className="img"><i className="jandaicon-setting"></i>프로필이미지</span>
                            <span className="name1">
                                <i className="ct_guide">Partner</i>{/* 개인파트너 -*/}
                                <i className="ct_partner">Partner</i>{/* 기업파트너 -*/}
                                <strong>새부산관광</strong>님 어서오세요 :)</span>{/*기업파트너/개인파트너*/}
                            <span className="point"><i>포인트</i><strong>10,000,000</strong>원</span>{/*기업파트너/개인파트너*/}

                            <span className="name2"><i className="ct_family">Family</i><strong>김부자</strong>님 어서오세요 :)</span>{/*개인*/}
                            <span className="time"><i>최근접속시간</i> 2020.12.12  11:11</span>{/*개인*/}

                            <ul>
                                <li><a href="/">알림<i>99+</i></a></li>{/* 개인/기업파트너/개인파트너 -*/}
                                <li><a href="/">구매<i>0</i></a></li>{/* 개인 -*/}
                                <li><a href="/">장바구니<i>0</i></a></li>{/* 개인 -*/}
                                <li><a href="/">예약<i>0</i></a></li>{/* 기업파트너/개인파트너 -*/}
                                <li><a href="/">정산<i>0</i></a></li>{/* 기업파트너/개인파트너 -*/}
                            </ul>
                        </div>

                    </div>

                </div>
                {children}
            </div>
        </div>
    </div>
};
