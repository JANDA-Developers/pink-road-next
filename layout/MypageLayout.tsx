import dayjs from 'dayjs';
import Link from 'next/link';
import { userInfo } from 'os';
import React, { useContext, useRef } from 'react';
import { useCount } from '../hook/useCount';
import { usePageEditClientSide } from '../hook/usePageEdit';
import { useUnReadSystemNotiFind } from '../hook/useSystemNoti';
import { useUpload } from '../hook/useUpload';
import { useUserUpdate } from '../hook/useUser';
import { AppContext } from '../pages/_app';
import { Ffile, ProductStatus } from '../types/api';
import { BG, BGprofile } from '../types/const';
import { autoComma } from '../utils/formatter';
import { omits } from '../utils/omit';
import { getItemCount, Storage } from '../utils/Storage';
import mypageLayout from "../info/mypageLayout.json"
import SubTopNav from './components/SubTop';

interface IProp { }

export const MypageLayout: React.FC<IProp> = ({ children }) => {
    const pageTools = usePageEditClientSide("mypageLayout", mypageLayout)

    const [userUpdate] = useUserUpdate()
    const { signleUpload } = useUpload();
    const { items } = useUnReadSystemNotiFind();
    const { isSeller, isParterB, isParterNonB, myProfile, isLogin } = useContext(AppContext);
    const { data: count } = useCount();
    const hiddenFileInput = useRef<HTMLInputElement>(null);


    const changeProfile = (file: Ffile) => {
        if (!myProfile) throw Error("profile is not exsit");
        userUpdate({
            variables: {
                _id: myProfile._id!,
                params: {
                    profileImg: omits(file)
                }
            }
        })
    }

    const handleChangeProfile = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const fileUploaded = event.target.files;
        const onUpload = (_: string, data: Ffile) => {
            changeProfile(data)
        }
        signleUpload(fileUploaded, onUpload);
    };

    const {
        buyTotalCount = 0,
        productRegistCount = 0,
        salesOfThisMonth = 0,
        salesTotalCount = 0,
        salesofLastMonth = 0,
        settleAvaiableAmount = 0,
        settleUnsolvedRequestCount = 0,
        totalSalesCount = 0
    } = count || {};


    let current = ""
    if (typeof window !== "undefined") {
        current = window.location.href.split('/mypage/')[1];
    }

    const isTapOn = (value?: string) => current === value ? "on" : "";

    return <div>
        <div className="top_visual">
            <SubTopNav pageTools={pageTools} />
            <div className="header_nav">
                <ul>
                    <li className="home">
                        <Link href="/" ><a /></Link>
                    </li>
                    <li className="homedeps1">
                        <Link href="/mypage">
                            <a >My page</a>
                        </Link>
                    </li>
                    {isLogin &&
                        <li className="homedeps2">
                            <Link href="/mypage">
                                <a >회원정보</a>
                            </Link>
                        </li>
                    }
                </ul>
            </div>
        </div>
        <div className="mypage_in w100">
            {isLogin && <ul className="subtop_nav">
                {isSeller || <li className={isTapOn(undefined)}><Link href="/mypage"><a >회원정보</a></Link></li>}{/* 개인 -*/}
                <li className={isTapOn("notification")}><Link href="/mypage/notification"><a >알림</a></Link></li>{/* 개인/기업파트너/개인파트너 -*/}
                {isSeller || <li className={isTapOn("purchase")}><Link href="/mypage/purchase"><a >구매내역</a></Link></li>}{/* 개인 -*/}
                {isSeller || <li className={isTapOn("basket")}><Link href="/mypage/basket"><a >장바구니</a></Link></li>}{/* 개인 -*/}
                <li className={isTapOn("my-board")}><Link href="/mypage/my-board"><a >나의 게시글</a></Link></li>{/* 개인/기업파트너/개인파트너 -*/}
                {isSeller && <li className={isTapOn("reservation")}><Link href="/mypage/reservation"><a >예약관리</a></Link></li>}{/* 기업파트너/개인파트너 -*/}
                {isParterB && <li className={isTapOn("goods")}><Link href="/mypage/goods"><a >상품관리</a></Link></li>}{/* 기업파트너 -*/}
                {isSeller && !isParterB && <li className={isTapOn("plainning")}><Link href="/mypage/plainning"><a >기획관리</a></Link></li>}{/* 개인파트너 -*/}
                {isSeller && <li className={isTapOn("settlement")}><Link href="/mypage/settlement"><a >매출/정산관리</a></Link></li>}{/* 기업파트너/개인파트너 -*/}
            </ul>
            }
            <div className="w1200">

                {isLogin && <div className="lnb">
                    <div className="profile_box">
                        <div className="welcome">
                            <span style={BGprofile(myProfile?.profileImg)} onClick={() => {
                                if (hiddenFileInput.current) {
                                    hiddenFileInput.current.click();
                                }
                            }} className="img"><i className="jandaicon-setting"></i>프로필이미지</span>
                            <input onChange={handleChangeProfile} ref={hiddenFileInput} hidden type="file" />
                            <span className="name1">
                                {isParterNonB && <i className="ct_partner">Personal Partner</i>}{/* 개인파트너 Personal Partner -*/}
                                {isParterB && <i className="ct_guide">Corporation Partner</i>}{/* 기업파트너 Corporation Partner -*/}
                                {isSeller && <span><strong>{myProfile?.nickName}</strong>님 어서오세요 :)</span>}{/*기업파트너/개인파트너*/}
                                {isSeller && <span className="point"><i>Point</i><strong>{autoComma(settleAvaiableAmount)}</strong>원</span>}{/*기업파트너/개인파트너*/}
                                {isSeller || <span className="name2"><i className="ct_family">Family</i><strong>{myProfile?.name}</strong>님 어서오세요 :)</span>}{/*개인*/}
                                {isSeller || <span className="time"><i>최근 살펴본 여행</i>{Storage?.getLocal("lastProd", "")}</span>}{/*개인*/}
                                {/* //최근접속시간은 최근에 본 상품으로 변경함 */}
                                <ul>
                                    <li><a href="/">알림<i>{items.length}</i></a></li>{/* 개인/기업파트너/개인파트너 -*/}
                                    {isSeller || <li><Link href="/mypage/purchase/"><a >구매<i>{buyTotalCount}</i></a></Link></li>}{/* 개인 -*/}
                                    {isSeller || <li><Link href="/mypage/basket"><a >장바구니<i>{getItemCount()}</i></a></Link></li>}{/* 개인 -*/}
                                    {isSeller && <li><Link href="/mypage/reservation"><a >예약<i>{totalSalesCount}</i></a></Link></li>}{/* 기업파트너/개인파트너 -*/}
                                    {isSeller && <li><Link href="/mypage/settlement"><a >정산<i>{settleUnsolvedRequestCount}</i></a></Link></li>}{/* 기업파트너/개인파트너 -*/}
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
                }
                {children}
            </div>
        </div>
    </div>
};

// 쌍방향 연결포기
// Booking === Product
