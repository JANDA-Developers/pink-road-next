import dayjs from "dayjs";
import Link from "next/link";
import { userInfo } from "os";
import React, { useContext, useRef, useState } from "react";
import { useCount, useCustomCount } from "../hook/useCount";
import { usePageEditClientSide } from "../hook/usePageEdit";
import { useUnReadSystemNotiFind } from "../hook/useSystemNoti";
import { useUpload } from "../hook/useUpload";
import { useUserUpdate } from "../hook/useUser";
import { AppContext } from "../pages/_app";
import { Ffile } from "../types/api";
import { BG, BGprofile } from "../types/const";
import { autoComma } from "../utils/formatter";
import { omits } from "../utils/omit";
import { getItemCount, Storage } from "../utils/Storage";
import mypageLayout from "../info/mypageLayout.json";
import SubTopNav from "./components/SubTop";
import { Tip } from "../components/tip/Tip";
import { useMyProfile } from "hook/useMyProfile";
import { Modal2 } from "../components/modal/Modal";
import { useModal } from "../hook/useModal";

interface IProp {}

export const MypageLayout: React.FC<IProp> = ({ children }) => {
    const pageTools = usePageEditClientSide("mypageLayout", mypageLayout);
    const { todayBookingCount, countOfExpBooking } = useCustomCount([
        "salesofLastMonth",
        "salesOfThisMonth",
        "countOfTourBooking",
        "countOfExpBooking",
        "todayBookingCount",
    ]);
    const profileModalHook = useModal();
    const [userUpdate] = useUserUpdate();
    const { signleUpload } = useUpload();
    const { items } = useUnReadSystemNotiFind();
    const {
        isSeller,
        isParterB,
        isParterNonB,
        myProfile,
        isManager,
        isLogin,
        myProfile: defaultProfile,
    } = useContext(AppContext);
    const { data: count } = useCount();
    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const [tempProfileFile, setTempFile] = useState<Ffile>();

    const changeProfile = () => {
        if (!myProfile) throw Error("profile is not exsit");
        userUpdate({
            variables: {
                _id: myProfile._id!,
                params: {
                    profileImg: omits(tempProfileFile),
                },
            },
        }).then(() => {
            profileModalHook.closeModal();
        });
    };

    const handleChangeProfile = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!event.target.files) return;
        const fileUploaded = event.target.files;
        const onUpload = (_: string, data: Ffile) => {
            setTempFile(data);
        };
        signleUpload(fileUploaded, onUpload);
    };

    const {
        data,
        setData,
        handlePassword,
        handleCompleteFindAddress,
        handleTextData,
        toggleCheck,
        handleChangeRegistration,
        handleBankRegistration,
        hiddenBankFileInput,
        hiddenBusiFileInput,
    } = useMyProfile(defaultProfile!);
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
    const {
        _id,
        bookings,
        email,
        phoneNumber,
        isVerifiedPhoneNumber,
        busi_name,
        connectionCount,
    } = defaultProfile!;

    let current = "";
    if (typeof window !== "undefined") {
        current = window.location.href.split("/mypage")[1] || undefined;
    }

    const isTapOn = (value?: string) =>
        current?.includes(value) || current === value ? "on" : "";

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
                        {!isManager && (
                            <li className={isTapOn("notification")}>
                                <a href="/mypage/notification">알림</a>
                            </li>
                        )}
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
                        {!isManager && (isParterB || isParterNonB) && (
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
                    <div className="mypage__topcunt">
                        <div className="top_info">
                            <ul className={`line${isSeller ? "5" : "4"}`}>
                                {isSeller && (
                                    <>
                                        <li className="ct">
                                            <span
                                                className="mypage__topcntSpan"
                                                id="SellCount"
                                            >
                                                {salesofLastMonth}
                                            </span>
                                            <p>저번달 총 예약</p>
                                        </li>
                                        <li className="ct">
                                            <span
                                                className="mypage__topcntSpan"
                                                id="SellCount"
                                            >
                                                {salesOfThisMonth}
                                            </span>
                                            <p>이번달 총 예약</p>
                                        </li>
                                        <li className="ct">
                                            <span
                                                className="mypage__topcntSpan"
                                                id="SellCount"
                                            >
                                                {todayBookingCount}
                                            </span>
                                            <p>오늘 총 예약</p>
                                        </li>
                                        <li className="ct">
                                            <span className="mypage__topcntSpan">
                                                {salesTotalCount}
                                            </span>
                                            <p>
                                                <span className="mr5">
                                                    총 판매 수
                                                </span>
                                                <Tip
                                                    Tag="i"
                                                    message="총 예약자 수"
                                                    className="jandaicon-info2"
                                                />
                                            </p>
                                        </li>
                                        <li className="ct">
                                            <span className="mypage__topcntSpan">
                                                {productRegistCount}
                                            </span>
                                            <p>상품 등록 수</p>
                                        </li>
                                    </>
                                )}
                                {isSeller || (
                                    <>
                                        <li className="ct">
                                            <span>{bookings.length}</span>
                                            <p>총 구매 수</p>
                                        </li>
                                        <li className="ct">
                                            <span>{connectionCount}</span>
                                            <p>총 접속 수</p>
                                        </li>
                                        <li className="ct">
                                            <span>{countOfExpBooking}</span>
                                            <p>총 체험 수</p>
                                        </li>
                                        <li className="ct">
                                            <span>{getItemCount()}</span>
                                            <p>장바구니</p>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
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
                                                profileModalHook.openModal();
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
                                                Solo Partner
                                            </i>
                                        )}
                                        {/* 기업파트너 Personal Partner -*/}
                                        {!isManager && isParterB && (
                                            <i className="ct_guide">
                                                Group Partner
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
                                            <Tip
                                                style={{}}
                                                message="정산받을 수 있는 금액"
                                                Tag="span"
                                                className="point"
                                            >
                                                <i>Point</i>
                                                <strong>
                                                    {autoComma(
                                                        settleAvaiableAmount
                                                    )}
                                                </strong>
                                                원
                                            </Tip>
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
                                        <ul className="mypage__not_ul">
                                            <Tip
                                                Tag="li"
                                                message={"읽지않은 알림"}
                                            >
                                                <Link href="/mypage/notification">
                                                    <a>
                                                        알림
                                                        <i>{items.length}</i>
                                                    </a>
                                                </Link>
                                            </Tip>
                                            {/* 개인/기업파트너/개인파트너 -*/}
                                            {isSeller || (
                                                <Tip
                                                    Tag="li"
                                                    message={"총 구매수"}
                                                >
                                                    <li>
                                                        <Link href="/mypage/purchase/">
                                                            <a>
                                                                구매
                                                                <i>
                                                                    {
                                                                        buyTotalCount
                                                                    }
                                                                </i>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </Tip>
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
                                                <Tip
                                                    Tag="li"
                                                    message="내 상품에 들어온 총 예약집계"
                                                >
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
                                                </Tip>
                                            )}
                                            {/* 기업파트너/개인파트너 -*/}
                                            {isSeller && (
                                                <Tip
                                                    message="처리되지않은 정산요청"
                                                    Tag="li"
                                                >
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
                                                </Tip>
                                            )}
                                            {/* 기업파트너/개인파트너 -*/}
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                    <Modal2
                        UpCon={
                            <h3 className="popup__tittle">프로필이미지 변경</h3>
                        }
                        {...profileModalHook}
                    >
                        <div className="upload__outbox">
                            <span className="upload_out_box__fileName">
                                <span className="mr10">
                                    {tempProfileFile?.name ||
                                        "프로필 사진이 없습니다."}
                                </span>
                                <i
                                    onClick={() => {
                                        setTempFile(undefined);
                                    }}
                                    className="flaticon-multiply mr10"
                                ></i>
                            </span>
                            <button
                                style={{
                                    padding: "0 24",
                                }}
                                onClick={() => {
                                    if (hiddenFileInput.current) {
                                        hiddenFileInput.current.click();
                                    }
                                }}
                                type="button"
                                className="btn btn_mini"
                            >
                                업로드
                            </button>
                        </div>
                        <div className="fin ifMobile">
                            <div className="float_left">
                                <button
                                    onClick={changeProfile}
                                    type="submit"
                                    className="btn medium"
                                >
                                    등록
                                </button>
                                <button
                                    onClick={() => {
                                        setTempFile(undefined);
                                        profileModalHook.closeModal();
                                    }}
                                    type="submit"
                                    className="btn medium"
                                >
                                    취소
                                </button>
                            </div>
                            <div className="float_right"></div>
                        </div>
                    </Modal2>
                    {children}
                </div>
            </div>
        </div>
    );
};

// 쌍방향 연결포기
// Booking === Product
