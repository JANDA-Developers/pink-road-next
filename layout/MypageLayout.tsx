import dayjs from "dayjs";
import Link from "next/link";
import { userInfo } from "os";
import React, { useContext, useRef } from "react";
import { useCount } from "../hook/useCount";
import { usePageEditClientSide } from "../hook/usePageEdit";
import { useUnReadSystemNotiFind } from "../hook/useSystemNoti";
import { useUpload } from "../hook/useUpload";
import { useUserUpdate } from "../hook/useUser";
import { AppContext } from "../pages/_app";
import { Ffile, ProductStatus } from "../types/api";
import { BG, BGprofile } from "../types/const";
import { autoComma } from "../utils/formatter";
import { omits } from "../utils/omit";
import { getItemCount, Storage } from "../utils/Storage";
import mypageLayout from "../info/mypageLayout.json";
import SubTopNav from "./components/SubTop";

interface IProp {}

export const MypageLayout: React.FC<IProp> = ({ children }) => {
    const pageTools = usePageEditClientSide("mypageLayout", mypageLayout);

    const [userUpdate] = useUserUpdate();
    const { signleUpload } = useUpload();
    const { items } = useUnReadSystemNotiFind();
    const { isSeller, isParterB, isParterNonB, myProfile, isManager, isLogin } =
        useContext(AppContext);
    const { data: count } = useCount();
    const hiddenFileInput = useRef<HTMLInputElement>(null);

    const changeProfile = (file: Ffile) => {
        if (!myProfile) throw Error("profile is not exsit");
        userUpdate({
            variables: {
                _id: myProfile._id!,
                params: {
                    profileImg: omits(file),
                },
            },
        });
    };

    const handleChangeProfile = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!event.target.files) return;
        const fileUploaded = event.target.files;
        const onUpload = (_: string, data: Ffile) => {
            changeProfile(data);
        };
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
        totalSalesCount = 0,
    } = count || {};

    let current = "";
    if (typeof window !== "undefined") {
        current = window.location.href.split("/mypage/")[1];
    }

    const isTapOn = (value?: string) => (current === value ? "on" : "");

    return (
        <div>
            <div>
                <SubTopNav pageTools={pageTools}>
                    <li className="homedeps1">
                        <Link href="/mypage/notification">
                            <a>My page</a>
                        </Link>
                    </li>
                    {isLogin && (
                        <li className="homedeps2">
                            <Link href="/mypage">
                                <a>회원정보</a>
                            </Link>
                        </li>
                    )}
                </SubTopNav>
            </div>
            <div className="mypage_in w100">
                {isLogin && (
                    <ul className="subtop_nav">
                        <li className={isTapOn("notification")}>
                            <a href="/mypage/notification">알림</a>
                        </li>
                        {/* 기업파트너/개인파트너/마스터 -*/}
                        {/* {isParterB && <li className={isTapOn("goods")}><Link href="/mypage/goods"><a >상품관리</a></Link></li>}기업파트너 - */}
                        {isSeller && (
                            <li className={isTapOn("plainning")}>
                                <a href="/mypage/plainning">상품관리</a>
                            </li>
                        )}
                        {/* 개인/기업파트너/개인파트너 -*/}
                        {isSeller && (
                            <li className={isTapOn("reservation")}>
                                <a href="/mypage/reservation">예약관리</a>
                            </li>
                        )}
                        {/* 기업파트너/개인파트너 -*/}
                        {(isParterB || isParterNonB) && (
                            <li className={isTapOn("settlement")}>
                                <a href="/mypage/settlement">매출/정산관리</a>
                            </li>
                        )}
                        {/* 개인/기업파트너/개인파트너/마스터 -*/}
                        {isSeller || (
                            <li className={isTapOn("purchase")}>
                                <a href="/mypage/purchase">구매내역</a>
                            </li>
                        )}
                        {/* 개인/기업파트너/개인파트너/마스터 -*/}
                        {isSeller || (
                            <li className={isTapOn("basket")}>
                                <a href="/mypage/basket">장바구니</a>
                            </li>
                        )}
                        {/* 개인/기업파트너/개인파트너 -*/}
                        <li className={isTapOn("my-board")}>
                            <a href="/mypage/my-board">나의 게시글</a>
                        </li>

                        {/* 기업파트너/개인파트너 -*/}
                        <li className={isTapOn(undefined)}>
                            <a href="/mypage">회원정보</a>
                        </li>
                    </ul>
                )}
                <div className="w1200">
                    {isLogin && (
                        <div className="lnb">
                            <div className="profile_box">
                                <div className="welcome">
                                    <span className="mypageLayout__profileImgWrap">
                                        <span
                                            style={BGprofile(
                                                myProfile?.profileImg
                                            )}
                                            onClick={() => {
                                                if (hiddenFileInput.current) {
                                                    hiddenFileInput.current.click();
                                                }
                                            }}
                                            className="mypageLayout__profileImg img"
                                        >
                                            <i className="jandaicon-setting"></i>
                                            프로필이미지
                                        </span>
                                    </span>
                                    <input
                                        onChange={handleChangeProfile}
                                        ref={hiddenFileInput}
                                        hidden
                                        type="file"
                                    />
                                    <span className="name1">
                                        {isManager && (
                                            <i className="ct_manager">
                                                Manager
                                            </i>
                                        )}
                                        {/* 개인파트너 Personal Partner -*/}
                                        {!isManager && isParterNonB && (
                                            <i className="ct_partner">
                                                Personal Partner
                                            </i>
                                        )}
                                        {/* 개인파트너 Personal Partner -*/}
                                        {!isManager && isParterB && (
                                            <i className="ct_guide">
                                                Corporation Partner
                                            </i>
                                        )}
                                        {/* 기업파트너 Corporation Partner -*/}
                                        {isSeller && (
                                            <span className="welcometxt">
                                                <strong>
                                                    {myProfile?.name}
                                                </strong>
                                                님 어서오세요 :)
                                            </span>
                                        )}
                                        {/*기업파트너/개인파트너*/}
                                        {isSeller && (
                                            <span className="point">
                                                <i>Point</i>
                                                <strong>
                                                    {autoComma(
                                                        settleAvaiableAmount
                                                    )}
                                                </strong>
                                                원
                                            </span>
                                        )}
                                        {/*기업파트너/개인파트너*/}
                                        {isSeller || (
                                            <span className="name2">
                                                <i className="ct_family">
                                                    Family
                                                </i>
                                                <strong>
                                                    {myProfile?.name}
                                                </strong>
                                                님 어서오세요 :)
                                            </span>
                                        )}
                                        {/*개인*/}
                                        {isSeller || (
                                            <span className="time">
                                                <i>최근 살펴본 여행</i>
                                                {Storage?.getLocal(
                                                    "lastProd",
                                                    ""
                                                )}
                                            </span>
                                        )}
                                        {/*개인*/}
                                        {/* //최근접속시간은 최근에 본 상품으로 변경함 */}
                                        <ul>
                                            <li>
                                                <a href="/mypage/notification">
                                                    알림<i>{items.length}</i>
                                                </a>
                                            </li>
                                            {/* 개인/기업파트너/개인파트너 -*/}
                                            {isSeller || (
                                                <li>
                                                    <Link href="/mypage/purchase/">
                                                        <a>
                                                            구매
                                                            <i>
                                                                {buyTotalCount}
                                                            </i>
                                                        </a>
                                                    </Link>
                                                </li>
                                            )}
                                            {/* 개인 -*/}
                                            {isSeller || (
                                                <li>
                                                    <Link href="/mypage/basket">
                                                        <a>
                                                            장바구니
                                                            <i>
                                                                {getItemCount()}
                                                            </i>
                                                        </a>
                                                    </Link>
                                                </li>
                                            )}
                                            {/* 개인 -*/}
                                            {isSeller && (
                                                <li>
                                                    <Link href="/mypage/reservation">
                                                        <a>
                                                            예약
                                                            <i>
                                                                {
                                                                    totalSalesCount
                                                                }
                                                            </i>
                                                        </a>
                                                    </Link>
                                                </li>
                                            )}
                                            {/* 기업파트너/개인파트너 -*/}
                                            {isSeller && (
                                                <li>
                                                    <Link href="/mypage/settlement">
                                                        <a>
                                                            정산
                                                            <i>
                                                                {
                                                                    settleUnsolvedRequestCount
                                                                }
                                                            </i>
                                                        </a>
                                                    </Link>
                                                </li>
                                            )}
                                            {/* 기업파트너/개인파트너 -*/}
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
};

// 쌍방향 연결포기
// Booking === Product
