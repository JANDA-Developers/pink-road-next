import React, { useContext, useEffect, useState } from "react";
import { MypageLayout } from "layout/MypageLayout";
import { AppContext } from "../_app";
import { getItemCount } from "../../utils/Storage";
import { arraySum } from "../../utils/math";
import { GENDER, UserRole, VerificationTarget } from "../../types/api";
import { autoHypenPhone, cc_format } from "../../utils/formatter";
import { useMyProfile } from "../../hook/useMyProfile";
import { auth } from "../../utils/with";
import { ALLOW_LOGINED, NUMBER_OPS } from "../../types/const";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "../../components/modal/Modal";
import { closeModal, openModal } from "../../utils/popUp";
import { useVerification } from "../../hook/useVerification";
import { GET_CONTEXT } from "../../apollo/gql/queries";
import { getOperationName } from "@apollo/client/utilities";
import { useCustomCount } from "../../hook/useCount";
import {
    useCheckCanResign,
    usePasswordChange,
    useUserResign,
    useUserUpdate,
} from "../../hook/useUser";
import { ResignModal } from "../../components/resign/ResignModal";
import { isPassword } from "../../utils/validation";
import { Validater } from "../../utils/validate";
import {
    Prompt,
    SubmitPsswordModal,
} from "../../components/promptModal/Prompt";
import { VerifiEamilModal } from "../../components/verifiModal/VerifiEmailModal";
import { CloseIcon } from "../../components/common/icon/CloseIcon";
import { omits } from "../../utils/omit";

let SEND_LIMIT = 3;
interface IProp {}
export const MyPageProfile: React.FC<IProp> = () => {
    const {
        salesOfThisMonth,
        todayBookingCount,
        salesofLastMonth,
        countOfExpBooking,
    } = useCustomCount([
        "salesofLastMonth",
        "salesOfThisMonth",
        "countOfTourBooking",
        "countOfExpBooking",
        "todayBookingCount",
    ]);
    const [userUpdate] = useUserUpdate({
        refetchQueries: [getOperationName(GET_CONTEXT) || ""],
        onCompleted: ({ UserUpdate }) => {
            if (UserUpdate.ok) {
                alert("업데이트가 완료 되었습니다.");
            }
        },
    });
    const [passwordChange] = usePasswordChange({
        refetchQueries: [getOperationName(GET_CONTEXT) || ""],
        onCompleted: ({ PasswordChange }) => {
            if (PasswordChange.ok) {
                alert("패스워드가 변경 되었습니다.");
            }
        },
    });

    const [verifiTarget, setVerifiTarget] = useState(VerificationTarget.EMAIL);
    const [VerifiChangeProfile, setVerifiChangeProfile] =
        useState<"phoneNumber" | "manageContact">("phoneNumber");

    const { salesTotalCount, productRegistCount } = useCustomCount([
        "productRegistCount",
        "salesTotalCount",
    ]);
    const [checkResignAble] = useCheckCanResign();
    const { myProfile: defaultProfile, role } = useContext(AppContext);

    const verifiHook = useVerification({ target: VerificationTarget.PHONE });

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
    const { nextPw, profile, pw, busiRegistration, bankImg } = data;
    const { setPw, setProfile, setBankImg, setBusiRegistration } = setData;
    const {
        nickName,
        address,
        name,
        address_detail,
        busi_num,
        acceptEamil,
        acceptSms,
        busi_department,
        bank_name,
        busi_contact,
        busi_address,
        gender,
        is_froreginer,
        is_priv_corper,
        account_number,
    } = profile;
    const {
        _id,
        bookings,
        email,
        phoneNumber,
        isVerifiedPhoneNumber,
        busi_name,
        connectionCount,
    } = defaultProfile!;

    const isFemale = gender === GENDER.FEMALE;

    const handlePasswordChange = () => {
        const { validate } = new Validater([
            {
                value: nextPw.password,
                failMsg: "변경할 패스워드를 입력 해주세요.",
                id: "passwordCheckInput",
            },
            {
                value: isPassword(nextPw.password),
                failMsg: "올바른 비밀번호가 아닙니다.",
            },
            {
                value: nextPw.password === nextPw.passwordCheck,
                failMsg: "패스워드가 일치하지 않습니다.",
                id: "passwordCheckInput",
            },
        ]);

        if (!validate()) return;
        openModal("#PsswordModal")();
    };

    const submitPassword = (currentPw: string) => {
        if (!currentPw) return;
        passwordChange({
            variables: {
                currentPw,
                newPassword: nextPw.password,
            },
        });
    };

    const handleUpdate = () => {
        const nextData = omits({
            ...profile,
            bankImg,
            busiRegistration,
        });
        userUpdate({
            variables: {
                params: nextData,
                _id,
            },
        });
    };

    // const handleUpdatePhone = (phoneNumber: string) => {
    //     userUpdate({
    //         params: {
    //             phoneNumber
    //         },
    //         _id
    //     })
    // }

    let verifyTemplate = (verificationId: string) => {
        // if (code.length < 4) {
        //     toast("인증번호를 입력 바랍니다.");
        //     return;
        // }
        // verifyComplete({
        //     code,
        //     payload: phoneNumber,
        //     verificationId
        // })
    };

    let handleVerifyComplete: () => any = () => {};

    const handleVerifi = () => {
        // if (SEND_LIMIT < 0) {
        //     alert("더이상 요청할 수 없습니다 화면을 새로고침 해주세요.");
        //     return;
        // }
        // verify(phoneNumber, (data) => {
        //     SEND_LIMIT = SEND_LIMIT - 1;
        //     const verifiId = data?.VerificationStart.data?._id;
        //     if (!verifiId) throw Error("Verifi start fail");
        //     handleVerifyComplete = verifyTemplate.bind(verifyTemplate, verifiId);
        // })
    };

    const handleResign2 = () => {
        checkResignAble().then((result) => {
            const {
                haveProductOpend,
                haveUnSolvedReservation,
                haveUnSolvedSettlement,
            } = result.data.CheckUserCanResign.problems;
            if (haveProductOpend) {
                alert(
                    "판매중인 상품이 있습니다. 먼저 판매중인 상품을 닫아주세요."
                );
                return;
            }
            if (haveUnSolvedSettlement) {
                alert(
                    "정산이 진행되지 않은 부분이 있습니다. 먼저 정산을 진행 해주세요."
                );
                return;
            }
            openModal("#reSignModal")();
        });
    };

    const handleChangePhoneNumber = (
        target: "phoneNumber" | "manageContact" = "phoneNumber"
    ) => {
        setVerifiTarget(VerificationTarget.PHONE);
        setVerifiChangeProfile(target);
        openModal("#phoneChangeModal")();
    };
    const handleVerifiPhoneNumber = () => {
        openModal("#phoneVerifiModal")();
    };

    const handleFindAdress = () => {};

    const pwSameCheck = () =>
        nextPw.password && nextPw.password === nextPw.passwordCheck;

    const [state, setState] = useState<UserRole>(role);
    const isPartnerB =
        state === "partnerB" ||
        role === UserRole.manager ||
        role === UserRole.admin;
    const isPartner = state === UserRole.partner;
    const isBuyer = state === UserRole.individual;
    const isSeller = isPartnerB || isPartner;

    return (
        <MypageLayout>
            <div className="in">
                <h4>회원정보</h4>
                <div className="mypage_page">
                    {/* <div className="box1">
                    <div className="top_info">
                        <ul className={`line${isSeller ? "5" : "4"}`}>
                            {isSeller && <>
                                <li className="ct">
                                    <span id="SellCount">{salesofLastMonth}</span>
                                    <p>저번달 총 예약</p>
                                </li>
                                <li className="ct">
                                    <span id="SellCount">{salesOfThisMonth}</span>
                                    <p>이번달 총 예약</p>
                                </li>
                                <li className="ct">
                                    <span id="SellCount">{todayBookingCount}</span>
                                    <p>오늘 총 예약</p>
                                </li>
                                <li className="ct">
                                    <span>{salesTotalCount}</span>
                                    <p>
                                        총 판매 수<i className="jandaicon-info2" data-tip="총 예약자 수" />
                                    </p>
                                </li>
                                <li className="ct">
                                    <span>{productRegistCount}</span>
                                    <p>상품 등록 수</p>
                                </li>
                            </>
                            }
                            {isSeller || <>
                                <li className="ct">
                                    <span>{bookings.length}</span>
                                    <p>
                                        총 구매 수 
                                    </p>
                                </li>
                                <li className="ct">
                                    <span>{connectionCount}</span>
                                    <p>
                                        총 접속 수
                                </p>
                                </li>
                                <li className="ct">
                                    <span>{countOfExpBooking}</span>
                                    <p>
                                        총 체험 수
                                </p>
                                </li>
                                <li className="ct">
                                    <span>{getItemCount()}</span>
                                    <p>
                                        장바구니
                                </p>
                                </li>
                            </>
                            }
                        </ul>
                    </div>
                </div> */}
                    <div className="box2">
                        <div className="box_left">
                            <div className="title">
                                <h5>기본정보</h5>
                            </div>
                        </div>
                        <div className="box_right">
                            <ul>
                                <li>
                                    <div className="title">아이디</div>
                                    <div className="txt">{email}</div>
                                </li>
                                <li>
                                    <div className="title">비밀번호 변경</div>
                                    <div className="txt">
                                        <div className="input_relative">
                                            <input
                                                value={nextPw.password}
                                                onChange={handlePassword(
                                                    "password"
                                                )}
                                                type="password"
                                                className={`form-control w100 ${
                                                    isPassword(
                                                        nextPw.password
                                                    ) && "ok"
                                                }`}
                                                placeholder="변경할 비밀번호를 입력 해주세요"
                                            />
                                            <i className="jandaicon-check btn_in" />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="title">비밀번호 확인</div>
                                    <div className="txt">
                                        <div className="input_relative">
                                            <input
                                                id="passwordCheckInput"
                                                value={nextPw.passwordCheck}
                                                onChange={handlePassword(
                                                    "passwordCheck"
                                                )}
                                                type="password"
                                                className={`form-control w100 ${
                                                    pwSameCheck() && "ok"
                                                }`}
                                                placeholder="변경할 비밀번호를 다시 입력 해주세요"
                                            />
                                            <i className="jandaicon-check btn_in" />
                                        </div>
                                    </div>
                                </li>
                                {isSeller ? (
                                    <li>
                                        <div className="title">이름</div>
                                        <div className="txt">
                                            <strong>{name || ""}</strong>
                                            <ul className="country_check">
                                                <li
                                                    onClick={() => {
                                                        profile.is_froreginer =
                                                            false;
                                                        setProfile({
                                                            ...profile,
                                                        });
                                                    }}
                                                    className={`c_in ${
                                                        is_froreginer || "on"
                                                    }`}
                                                >
                                                    내국인
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        profile.is_froreginer =
                                                            true;
                                                        setProfile({
                                                            ...profile,
                                                        });
                                                    }}
                                                    className={`c_out ${
                                                        is_froreginer && "on"
                                                    }`}
                                                >
                                                    외국인
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                ) : (
                                    ""
                                )}
                                {isPartner && (
                                    <li>
                                        <div className="title">파랑새</div>
                                        <div className="txt">
                                            <select
                                                className="w30"
                                                onChange={(e) => {
                                                    profile.blueBird =
                                                        parseInt(
                                                            e.currentTarget
                                                                .value
                                                        ) || 0;
                                                    setProfile({ ...profile });
                                                }}
                                                value={profile.blueBird}
                                                name="type"
                                            >
                                                {NUMBER_OPS.map((op) => (
                                                    <option
                                                        key={"blueBird" + op}
                                                        value={op}
                                                    >
                                                        {op + "기 파랑새"}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </li>
                                )}
                                {isSeller ? (
                                    <li>
                                        <div className="title">성별</div>
                                        <div className="txt">
                                            <ul className="gender_check">
                                                <li
                                                    onClick={() => {
                                                        profile.gender =
                                                            GENDER.FEMALE;
                                                        setProfile({
                                                            ...profile,
                                                        });
                                                    }}
                                                    className={`${
                                                        isFemale && "on"
                                                    } female`}
                                                >
                                                    여
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        profile.gender =
                                                            GENDER.MAIL;
                                                        setProfile({
                                                            ...profile,
                                                        });
                                                    }}
                                                    className={`${
                                                        isFemale || "on"
                                                    } men`}
                                                >
                                                    남
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                ) : (
                                    ""
                                )}
                                <li>
                                    <div className="title">연락처</div>
                                    <div className="txt">
                                        <span className="w80 mr20">
                                            {autoHypenPhone(
                                                profile.phoneNumber
                                            ) || "연락처가 없습니다."}
                                        </span>
                                        <button
                                            onClick={() => {
                                                handleChangePhoneNumber(
                                                    "phoneNumber"
                                                );
                                            }}
                                            type="button"
                                            className="btn btn_mini"
                                        >
                                            변경
                                        </button>
                                    </div>
                                </li>
                                {isSeller || (
                                    <li>
                                        <div className="title">주소</div>
                                        <div className="txt line2">
                                            <input
                                                onChange={handleTextData(
                                                    "address"
                                                )}
                                                value={address}
                                                type="text"
                                                className="form-control w70 mr5"
                                            />
                                            <button
                                                onClick={openModal(
                                                    "#addressFindModal"
                                                )}
                                                type="button"
                                                className="btn btn_mini"
                                            >
                                                주소찾기
                                            </button>
                                            <input
                                                value={address_detail}
                                                onChange={handleTextData(
                                                    "address_detail"
                                                )}
                                                type="text"
                                                className="form-control w100"
                                                placeholder="상세주소"
                                            />
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>

                    {isSeller && (
                        <div className="box2">
                            <div className="box_left">
                                <div className="title">
                                    <h5>{isPartnerB ? "정보" : "정보"}</h5>
                                </div>
                            </div>
                            <div className="box_right">
                                <ul>
                                    {isPartnerB && (
                                        <li>
                                            <div className="title">
                                                파트너명(회사명)
                                            </div>
                                            <div className="txt">
                                                {busi_name}
                                            </div>
                                        </li>
                                    )}
                                    {isPartnerB && (
                                        <li>
                                            <div className="title">
                                                사업자번호
                                            </div>
                                            <div className="txt">
                                                <select
                                                    onChange={(e) => {
                                                        const is_priv_corper =
                                                            e.currentTarget
                                                                .value ===
                                                            "busi";
                                                        profile.is_priv_corper =
                                                            is_priv_corper
                                                                ? true
                                                                : false;
                                                        setProfile({
                                                            ...profile,
                                                        });
                                                    }}
                                                    value={
                                                        is_priv_corper
                                                            ? "busi"
                                                            : "indi"
                                                    }
                                                    className="w20"
                                                >
                                                    <option value={"indi"}>
                                                        개인
                                                    </option>
                                                    <option value={"busi"}>
                                                        법인
                                                    </option>
                                                </select>
                                                <input
                                                    onChange={(e) => {
                                                        const val =
                                                            e.currentTarget
                                                                .value;
                                                        setProfile({
                                                            ...profile,
                                                            busi_num: val,
                                                        });
                                                    }}
                                                    value={busi_num}
                                                    type="text"
                                                    className="form-control w70 ml5"
                                                    placeholder="사업자번호를 입력해주세요."
                                                />
                                            </div>
                                        </li>
                                    )}
                                    <li>
                                        <div className="title">
                                            대표 전화번호
                                        </div>
                                        <div className="txt">
                                            <input
                                                onChange={(e) => {
                                                    const val =
                                                        e.currentTarget.value;
                                                    setProfile({
                                                        ...profile,
                                                        busi_contact: val,
                                                    });
                                                }}
                                                value={autoHypenPhone(
                                                    busi_contact
                                                )}
                                                type="text"
                                                className="form-control w100"
                                                placeholder="전화번호를 입력해주세요."
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title">주소</div>
                                        <div className="txt line2">
                                            <input
                                                onChange={handleTextData(
                                                    "address"
                                                )}
                                                value={address}
                                                type="text"
                                                className="form-control w70 mr5"
                                            />
                                            <button
                                                onClick={openModal(
                                                    "#addressFindModal"
                                                )}
                                                type="button"
                                                className="btn btn_mini"
                                            >
                                                주소찾기
                                            </button>
                                            <input
                                                value={address_detail}
                                                onChange={handleTextData(
                                                    "address_detail"
                                                )}
                                                type="text"
                                                className="form-control w100"
                                                placeholder="상세주소"
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title">담당자</div>
                                        <div className="txt">
                                            <input
                                                value={busi_department}
                                                onChange={handleTextData(
                                                    "busi_department"
                                                )}
                                                type="text"
                                                className="form-control w20 mr5"
                                                placeholder="부서명"
                                            />
                                            <input
                                                value={name}
                                                onChange={handleTextData(
                                                    "name"
                                                )}
                                                type="text"
                                                className="form-control w50"
                                                placeholder="담당자를 입력해주세요."
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title">
                                            담당자 연락처
                                        </div>
                                        <div className="txt">
                                            <span className="w80">
                                                {autoHypenPhone(
                                                    profile.manageContact
                                                ) ||
                                                    "담당자 연락처가 없습니다."}
                                            </span>
                                            <button
                                                onClick={() => {
                                                    handleChangePhoneNumber(
                                                        "manageContact"
                                                    );
                                                }}
                                                type="button"
                                                className="btn btn_mini"
                                            >
                                                변경
                                            </button>
                                        </div>
                                        {/* 변경시 변경아이콘 눌러 popup띄워서 휴대폰번호 인증절차 거치게됨 */}
                                    </li>
                                    <li>
                                        <div className="title">
                                            사업자등록증
                                        </div>
                                        <div className="txt txt--flex">
                                            <span className="w80 upload_out_box">
                                                <span className="upload_out_box__fileName">
                                                    {busiRegistration?.name}
                                                </span>
                                                {busiRegistration && (
                                                    <CloseIcon
                                                        onClick={() => {
                                                            setBusiRegistration(
                                                                null
                                                            );
                                                        }}
                                                        className="upload_out_box__closer"
                                                        style={{
                                                            width: "10px",
                                                            height: "10px",
                                                        }}
                                                    />
                                                )}
                                            </span>
                                            <button
                                                onClick={() => {
                                                    hiddenBusiFileInput.current?.click();
                                                }}
                                                type="button"
                                                className="btn btn_mini"
                                            >
                                                업로드
                                            </button>
                                            <input
                                                key={
                                                    busiRegistration
                                                        ? "busiImgExsit"
                                                        : "busiImg"
                                                }
                                                onChange={
                                                    handleChangeRegistration
                                                }
                                                ref={hiddenBusiFileInput}
                                                hidden
                                                type="file"
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title">통장사본</div>
                                        <div className="txt txt--flex">
                                            <span className="w80 upload_out_box">
                                                <span className="upload_out_box__fileName">
                                                    {bankImg?.name}
                                                </span>
                                                {bankImg && (
                                                    <CloseIcon
                                                        onClick={() => {
                                                            setBankImg(null);
                                                        }}
                                                        className="upload_out_box__closer"
                                                        style={{
                                                            width: "10px",
                                                            height: "10px",
                                                        }}
                                                    />
                                                )}
                                            </span>
                                            <button
                                                onClick={() => {
                                                    hiddenBankFileInput.current?.click();
                                                }}
                                                type="button"
                                                className="btn btn_mini"
                                            >
                                                업로드
                                            </button>
                                            <input
                                                key={
                                                    bankImg
                                                        ? "bankImgExsit"
                                                        : "bankImg"
                                                }
                                                onChange={
                                                    handleBankRegistration
                                                }
                                                ref={hiddenBankFileInput}
                                                hidden
                                                type="file"
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title">정산계좌</div>
                                        <div className="txt">
                                            <div className="line_first">
                                                <input
                                                    onChange={(e) => {
                                                        const val =
                                                            e.currentTarget
                                                                .value;
                                                        setProfile({
                                                            ...profile,
                                                            bank_name: val,
                                                        });
                                                    }}
                                                    value={bank_name}
                                                    type="text"
                                                    className="form-control w20 mr5"
                                                    placeholder="은행명"
                                                />
                                                <input
                                                    onChange={(e) => {
                                                        const format =
                                                            e.currentTarget
                                                                .value;
                                                        profile.account_number =
                                                            format;
                                                        setProfile({
                                                            ...profile,
                                                        });
                                                    }}
                                                    value={account_number}
                                                    type="text"
                                                    className="form-control w50"
                                                    placeholder="- 없이 숫자만 입력해주세요."
                                                />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                    <div className="box3">
                        <div className="box_left">
                            <div className="title">
                                <h5>기타정보</h5>
                            </div>
                        </div>
                        <div className="box_right">
                            <ul>
                                <li>
                                    <div className="title">SNS 수신동의</div>
                                    <div className="txt tr">
                                        {/* <input onChange={toggleCheck("acceptSms")} checked={acceptSms} type="checkbox" /> */}
                                        <span className="checkbox mr5">
                                            <input
                                                type="checkbox"
                                                onChange={toggleCheck(
                                                    "acceptSms"
                                                )}
                                                checked={acceptSms}
                                                id={`agree1`}
                                                title="동의"
                                            />
                                            <label htmlFor={`agree1`} />
                                        </span>
                                        <span>SNS 수신 동의를 합니다.</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="title">E-mail 수신동의</div>
                                    <div className="txt tr">
                                        {/* <input onChange={toggleCheck("acceptEamil")} checked={acceptEamil} type="checkbox" /> */}
                                        <span className="checkbox mr5">
                                            <input
                                                type="checkbox"
                                                onChange={toggleCheck(
                                                    "acceptEamil"
                                                )}
                                                checked={acceptEamil}
                                                id="agree2"
                                                title="동의"
                                            />
                                            <label htmlFor="agree2" />
                                        </span>
                                        <span>E-mail 수신 동의를 합니다.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="fin ifMobile">
                        <div className="float_left">
                            <button
                                onClick={handlePasswordChange}
                                type="submit"
                                className="btn medium"
                            >
                                비밀번호변경
                            </button>
                            {isSeller && (
                                <button
                                    onClick={handleUpdate}
                                    type="submit"
                                    className="btn medium"
                                >
                                    파트너정보 수정
                                </button>
                            )}
                            {!isSeller && (
                                <button
                                    onClick={handleUpdate}
                                    type="submit"
                                    className="btn medium"
                                >
                                    정보수정
                                </button>
                            )}
                            <button
                                onClick={handlePasswordChange}
                                type="submit"
                                className="btn medium"
                            >
                                취소
                            </button>
                        </div>
                        {/* <div className="float_right">
                        <button onClick={handleReSign} type="submit"
                            className="btn medium color01">
                            회원탈퇴
                        </button>
                    </div> */}
                        <div className="float_right">
                            <button
                                onClick={handleResign2}
                                type="submit"
                                className="btn medium color01"
                            >
                                회원탈퇴
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <VerifiEamilModal
                id="phoneChangeModal"
                target={verifiTarget}
                duplicateCheck
                onSuccess={() => {
                    closeModal("#phoneChangeModal")();
                    const payload = verifiHook.verifiData?.payload;
                    if (payload) {
                        profile[VerifiChangeProfile] = payload;
                        setProfile({
                            ...profile,
                        });
                    }
                }}
                verifiHook={{
                    ...verifiHook,
                }}
            />
            <ResignModal />
            <Modal id="addressFindModal" title="주소찾기">
                <DaumPostcode onComplete={handleCompleteFindAddress} />
            </Modal>
            <SubmitPsswordModal
                label="기존의 비밀번호를 입력 해주세요."
                title="비밀번호 변경"
                onSubmit={submitPassword}
                id="PsswordModal"
            />
        </MypageLayout>
    );
};

export default auth(ALLOW_LOGINED)(MyPageProfile);
