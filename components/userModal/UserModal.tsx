import React from "react";
import { useBookingList } from "../../hook/useBooking";
import { useUserFindById } from "../../hook/useUser";
import { BookingStatus, GENDER, UserRole } from "../../types/api";
import { ALLOW_SELLERS } from "../../types/const";
import {
    foreginKR,
    userRoleToKR,
    managerVerifiedKR,
    withCompany,
    genderToKR,
} from "../../utils/enumToKr";
import { autoHypenPhone } from "../../utils/formatter";
import { closeModal } from "../../utils/popUp";
import { yyyymmdd } from "../../utils/yyyymmdd";
import { UserMasterHandler } from "../member/MemberMaster";
import { UserModalResvCancelList } from "./UserModalResvCacnelList";
import { UserModalResvList } from "./UserModalResvList";

interface IProp {
    handlers: UserMasterHandler;
    userId: string;
}

export const UserModal: React.FC<IProp> = ({ userId, handlers }) => {
    const { item } = useUserFindById(userId);
    const {
        handleSignUpAccept,
        handleDenyPop,
        handleResignUser,
        handleSignUpDeny,
        handleRestartUser,
        handleStopUser,
        handleViewDetailUser,
        handleViewUserBoard,
    } = handlers;
    if (!item) return null;
    const {
        isResigned,
        name,
        email,
        phoneNumber,
        resignReason,
        resignReasonType,
        gender,
        role,
    } = item;

    const isSeller = ALLOW_SELLERS.includes(role);
    const isPartnerB = role === UserRole.partnerB;

    const print = () => {
        window.print();
    };

    return (
        <div id="UserModal" className="popup_bg_full">
            <div className="in_txt master_popup">
                <div className="page">
                    <h3>상세정보</h3>
                    <a
                        className="close_icon"
                        onClick={closeModal("#UserModal")}
                    >
                        <i className="flaticon-multiply"></i>
                    </a>
                    <div className="info_txt">
                        <span className="start-day">
                            가입일: {yyyymmdd(item.createdAt)}
                        </span>
                        <span>{managerVerifiedKR(item.isVerifiedManager)}</span>
                        {isResigned && (
                            <span className="start-day">
                                탈퇴일: {yyyymmdd(item.resignDate)}
                            </span>
                        )}
                    </div>
                    {/* 가입 */}
                    {isResigned && (
                        <div className="info_page">
                            <div className="full_div">
                                <h4>탈퇴정보</h4>
                                <div className="info_table line2 w50">
                                    <div className="tr">
                                        <div className="th01">탈퇴사유</div>
                                        <div className="td01">
                                            <span>
                                                [{resignReasonType}]{" "}
                                                {resignReason}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* 회원정보 */}
                    <div className="info_page">
                        <div className="full_div">
                            <h4>회원정보</h4>
                            <div className="info_table line8 w50">
                                {/* 개인 */}
                                {!isSeller && (
                                    <>
                                        <div className="tr">
                                            <div className="th01">
                                                이름 [{userRoleToKR(item.role)}]
                                            </div>
                                            <div className="td01">
                                                <span>{name}</span>
                                            </div>
                                            <div className="th02">아이디</div>
                                            <div className="td02">
                                                <a href={`mailto:${email}`}>
                                                    {email}
                                                </a>
                                            </div>
                                            <div className="th03">휴대폰</div>
                                            <div className="td03">
                                                {phoneNumber}
                                            </div>
                                            <div className="th04">성별</div>
                                            <div className="td04">
                                                {genderToKR(gender)}
                                            </div>
                                        </div>
                                        <div className="tr">
                                            <div className="th01">주소</div>
                                            <div className="td01">
                                                <span>{item.address}</span>
                                            </div>
                                            <div className="th02">
                                                주소디테일
                                            </div>
                                            <div className="td02">
                                                <span>
                                                    {item.address_detail}
                                                </span>
                                            </div>
                                            <div className="th03">휴대폰</div>
                                            <div className="td03">
                                                <span>
                                                    {autoHypenPhone(
                                                        item.phoneNumber
                                                    )}
                                                </span>
                                            </div>
                                            <div className="th04">국적</div>
                                            <div className="td04">
                                                <span>
                                                    {foreginKR(
                                                        item.is_froreginer
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                )}
                                {/* 파트너 */}
                                {isSeller && (
                                    <>
                                        <div className="tr">
                                            <div className="th01">성함</div>
                                            <div className="td01">
                                                <span>{withCompany(item)}</span>
                                            </div>
                                            <div className="th02">아이디</div>
                                            <div className="td02">
                                                <a
                                                    href={`mailto:${item.email}`}
                                                >
                                                    {item.email}
                                                </a>
                                            </div>
                                            <div className="th03">연락처</div>
                                            <div className="td03">
                                                <span>
                                                    {autoHypenPhone(
                                                        item.phoneNumber
                                                    )}
                                                </span>
                                            </div>
                                            <div className="th04">-</div>
                                            <div className="td04">-</div>
                                        </div>
                                        {isPartnerB && (
                                            <div className="tr">
                                                <div className="th01">
                                                    업체주소
                                                </div>
                                                <div className="td01">
                                                    <span
                                                        style={{
                                                            wordBreak:
                                                                "break-all",
                                                            lineHeight: 1.3,
                                                        }}
                                                    >
                                                        {item.busi_address ||
                                                            item.address}
                                                    </span>
                                                </div>
                                                <div className="th02">
                                                    담당자
                                                </div>
                                                <div className="td02">
                                                    <span>
                                                        {item.manageName}
                                                    </span>
                                                </div>
                                                <div className="th03">
                                                    연락처
                                                </div>
                                                <div className="td03">
                                                    <span>
                                                        {autoHypenPhone(
                                                            item.busi_contact
                                                        )}
                                                    </span>
                                                </div>
                                                <div className="th04">
                                                    사업자번호
                                                </div>
                                                <div className="td04">
                                                    <span>{item.busi_num}</span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="tr">
                                            <div className="th01">계좌번호</div>
                                            <div className="td01">
                                                <span
                                                    style={{
                                                        wordBreak: "break-all",
                                                        lineHeight: 1.3,
                                                    }}
                                                >
                                                    {item.bank_name}-
                                                    {item.account_number}
                                                </span>
                                            </div>
                                            <div className="th02">통장사본</div>
                                            <div className="td02">
                                                {item.bankImg && (
                                                    <span>
                                                        {item.bankImg?.name}
                                                        <button
                                                            onClick={() => {
                                                                window.open(
                                                                    item.bankImg
                                                                        ?.uri,
                                                                    "_blank"
                                                                );
                                                            }}
                                                            className="btn dwonload"
                                                        >
                                                            다운로드
                                                        </button>
                                                    </span>
                                                )}
                                            </div>
                                            <div className="th03">
                                                사업자등록증
                                            </div>
                                            <div className="td03">
                                                <span>
                                                    {
                                                        item.busiRegistration
                                                            ?.name
                                                    }
                                                    <button
                                                        onClick={() => {
                                                            window.open(
                                                                item
                                                                    .busiRegistration
                                                                    ?.uri,
                                                                "_blank"
                                                            );
                                                        }}
                                                        className="btn dwonload"
                                                    >
                                                        다운로드
                                                    </button>
                                                </span>
                                            </div>
                                            <div className="th04"></div>
                                            <div className="td04"></div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* 파트너 */}
                    {/* 사업자회원 주의사항 */}
                    {/* <div className="info_page">
            <div className="full_div">
                <h4>사업자회원 주의사항</h4>
                <div className="textareabox">더이상입력불가너ㅏ유ㅚㅏ너후나ㅣㅎ</div>
            </div>
        </div> */}

                    {/* 예약 및 결제 */}
                    <div className="info_page">
                        <div className="full_div">
                            <h4>
                                예약 및 결제
                                {/* <i
                                    className="jandaicon-info2 tooltip"
                                    data-tip="자세한 예약조회는 '예약관리'메뉴를 이용 해주세요."
                                ></i> */}
                                <span className="full_div__right">
                                    <a
                                        className="btn small"
                                        href="/master/reservation"
                                    >
                                        예약관리 바로가기
                                    </a>
                                </span>
                            </h4>
                            <UserModalResvList id={userId} />
                        </div>
                    </div>
                    {/* 파트너 */}
                    {/* 취소 및 환불내역 */}
                    <div className="info_page">
                        <div className="full_div">
                            <h4>
                                취소 및 환불내역
                                {/* <i
                                    className="jandaicon-info2 tooltip"
                                    data-tip="자세한 예약조회는 '예약관리'메뉴를 이용 해주세요."
                                ></i> */}
                                <span className="full_div__right">
                                    <a
                                        className="btn small"
                                        href="/master/reservation"
                                    >
                                        예약관리 바로가기
                                    </a>
                                </span>
                            </h4>
                            <UserModalResvCancelList id={userId} />
                            {/* <Paginater pageNumber={10} totalPageCount={20} /> */}
                        </div>
                    </div>
                    <div className="fin ifMobile">
                        <div className="float_left">
                            {!item.isVerifiedManager && isSeller && (
                                <div style={{ display: "flex" }}>
                                    <div>
                                        <i
                                            // style={{ lineHeight: "22px" }}
                                            className="btn medium"
                                            onClick={() => {
                                                handleSignUpAccept([item._id]);
                                            }}
                                        >
                                            가입승인
                                        </i>
                                    </div>
                                    <div>
                                        <i
                                            // style={{ lineHeight: "22px" }}
                                            className="btn medium"
                                            onClick={handleDenyPop(item._id)}
                                        >
                                            가입거절
                                        </i>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="float_right">
                            <button
                                onClick={() => {
                                    handleResignUser(item._id);
                                }}
                                type="submit"
                                className="btn medium mr5"
                            >
                                강제탈퇴
                            </button>
                            <button
                                onClick={() => {
                                    handleStopUser([item._id]);
                                }}
                                type="submit"
                                className="btn medium"
                            >
                                활동정지
                            </button>
                            <button
                                onClick={() => {
                                    handleRestartUser([item._id]);
                                }}
                                type="submit"
                                className="btn medium"
                            >
                                활동재개
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
