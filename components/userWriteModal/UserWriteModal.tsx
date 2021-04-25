import React, { useState } from "react";
import { IUseModal } from "../../hook/useModal";
import { useMyProfile } from "../../hook/useMyProfile";
import { useSignIn } from "../../hook/useSignIn";
import { useSignUp, useUserFindById, useUserUpdate } from "../../hook/useUser";
import {
    AddUserInput,
    ERR_CODE,
    GENDER,
    signUpVariables,
    userFindById_UserFindById_data,
    UserRole,
    UserUpdateInput,
} from "../../types/api";
import { omits } from "../../utils/omit";
import { Modal2 } from "../modal/Modal";

interface IProp extends Omit<IHandWriteModalProp, "user"> {}

export const UserHandWriteModalWrap: React.FC<IProp> = (props) => {
    const { item } = useUserFindById(props.info?.id);
    return <UserHandWriteModal key={item?._id} {...props} user={item} />;
};

interface IHandWriteModalProp extends IUseModal<{ id: string }> {
    user?: userFindById_UserFindById_data;
}

export const UserHandWriteModal: React.FC<IHandWriteModalProp> = ({
    user,
    ...props
}) => {
    const isCreate = !!user;
    const [userData, setUserData] = useState<
        AddUserInput & { pwCheck: string }
    >({
        address: user?.address || "",
        address_detail: user?.address_detail || "",
        email: user?.email || "",
        name: user?.name || "",
        phoneNumber: user?.phoneNumber || "",
        pw: "",
        role: user?.role || UserRole.individual,
        acceptEamil: user?.acceptEamil || false,
        acceptSms: user?.acceptSms || false,
        account_number: user?.account_number || "",
        bankImg: user?.bankImg,
        bank_name: user?.bank_name || "",
        blueBird: user?.blueBird,
        brith_date: user?.brith_date,
        busiRegistration: user?.busiRegistration,
        busi_address: user?.address || "",
        busi_address_detail: user?.address_detail || "",
        busi_contact: user?.busi_contact || "",
        busi_department: user?.busi_department || "",
        busi_name: user?.busi_name || "",
        busi_num: user?.busi_num || "",
        gender: user?.gender || GENDER.FEMALE,
        is_froreginer: user?.is_froreginer || false,
        is_priv_corper: user?.is_priv_corper || false,
        manageContact: user?.manageContact || "",
        manageName: user?.manageName || "",
        nickName: user?.nickName || "",
        pwCheck: "",
    });

    const [signUp] = useSignUp({
        onCompleted: ({ SignUp }) => {
            if (SignUp.ok) {
                alert("회원가입 완료");
            } else {
                if (SignUp.error?.code === ERR_CODE.ALEADY_SAME_DATA) {
                    alert("이미 가입된 회원입니다.");
                }
            }
        },
    });

    const [updateUser] = useUserUpdate();

    const handleWriteUser = () => {
        signUp({
            variables: {
                params: {
                    ...omits(userData),
                },
                verificationId: "",
            },
        });
    };

    const handleChangeUserInfo = () => {
        updateUser({
            variables: {
                _id: user._id,
                params: {
                    ...omits(userData),
                },
            },
        });
    };

    function set<T extends keyof typeof userData>(key: T) {
        return (e: any) => {
            userData[key] = e.currentTarget.value as typeof userData[T];
            setUserData({ ...userData });
        };
    }

    return (
        <Modal2
            {...props}
            title="예약 수기등록"
            inClassName="master_popup handwritten_registration"
            className="popup_bg_full"
            id="HandwrittenRegistration"
        >
            <div className="box">
                <h3>예약 수기등록</h3>
                <div className="info_page">
                    <div className="full_div">
                        <h4>회원정보</h4>
                        <div className="info_table w100">
                            <div className="tr">
                                <div className="th01">회원</div>
                                <div className="td01">
                                    <select
                                        value={userData.role}
                                        onChange={set("role")}
                                        className="w30"
                                    >
                                        <option value={UserRole.individual}>
                                            개인
                                        </option>
                                        <option value={UserRole.partnerB}>
                                            기업파트너
                                        </option>
                                        <option value={UserRole.partner}>
                                            개인파트너
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">이메일</div>
                                <div className="td01">
                                    <input
                                        value={userData.email}
                                        onChange={set("email")}
                                        type="text"
                                        className="w80"
                                        placeholder="이메일을 입력해주세요."
                                    />
                                </div>
                                <div className="th02">닉네임</div>
                                <div className="td02">
                                    <input
                                        value={userData.nickName}
                                        onChange={set("nickName")}
                                        type="text"
                                        className="w50"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">비밀번호</div>
                                <div className="td01">
                                    <input
                                        value={userData.pw}
                                        onChange={set("pw")}
                                        type="text"
                                        className="w80"
                                        placeholder=""
                                    />
                                </div>
                                <div className="th02">비밀번호 확인</div>
                                <div className="td02">
                                    <input
                                        value={userData.pwCheck}
                                        onChange={set("pwCheck")}
                                        type="text"
                                        className="w80"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">이름</div>
                                <div className="td01">
                                    <input
                                        value={userData.name}
                                        onChange={set("name")}
                                        type="text"
                                        className="w50"
                                        placeholder=""
                                    />
                                </div>
                                <div className="th02">국적</div>
                                <div className="td02">
                                    <ul className="country_check">
                                        <li
                                            className={`c_in ${
                                                !userData.is_froreginer
                                                    ? "on"
                                                    : ""
                                            }`}
                                            onClick={() => {
                                                set("is_froreginer")(false);
                                            }}
                                        >
                                            내국인
                                        </li>
                                        <li
                                            className={`c_out ${
                                                userData.is_froreginer
                                                    ? "on"
                                                    : ""
                                            }`}
                                            onClick={() => {
                                                set("is_froreginer")(true);
                                            }}
                                        >
                                            외국인
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">성별</div>
                                <div className="td01">
                                    <ul className="gender_check">
                                        <li
                                            className={`female ${
                                                userData.gender == GENDER.FEMALE
                                                    ? "on"
                                                    : ""
                                            }`}
                                            onClick={() => {
                                                set("gender")(GENDER.FEMALE);
                                            }}
                                        >
                                            여
                                        </li>
                                        <li
                                            className={`men ${
                                                userData.gender == GENDER.MAIL
                                                    ? "on"
                                                    : ""
                                            }`}
                                            onClick={() => {
                                                set("gender")(GENDER.MAIL);
                                            }}
                                        >
                                            남
                                        </li>
                                    </ul>
                                </div>
                                <div className="th02">연락처</div>
                                <div className="td02">
                                    <input
                                        value={userData.phoneNumber}
                                        onChange={set("phoneNumber")}
                                        type="text"
                                        className="w80"
                                        placeholder="'-'없이 입력해주세요."
                                    />
                                </div>
                            </div>
                        </div>

                        <h4>파트너 정보</h4>
                        <div className="info_table w100">
                            <div className="tr">
                                <div className="th01">파트너명(회사명)</div>
                                <div className="td01">
                                    <input
                                        value={userData.partnerName}
                                        onChange={set("partnerName")}
                                        type="text"
                                        className="w50"
                                        placeholder=""
                                    />
                                </div>
                                <div className="th02">사업자번호</div>
                                <div className="td02">
                                    <select
                                        value={
                                            userData.is_priv_corper
                                                ? "true"
                                                : "false"
                                        }
                                        onChange={(e) => {
                                            const isPriv =
                                                e.currentTarget.value ===
                                                "true";
                                            set("is_priv_corper")(isPriv);
                                        }}
                                        className="w20 mr10"
                                    >
                                        <option value="true">개인</option>
                                        <option value="false">법인</option>
                                    </select>
                                    <input
                                        onChange={set("busi_num")}
                                        value={userData.busi_num}
                                        type="text"
                                        className="w50"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">대표 전화번호</div>
                                <div className="td01">
                                    <input
                                        value={userData.busi_contact}
                                        onChange={set("busi_contact")}
                                        type="text"
                                        className="w80"
                                        placeholder=""
                                    />
                                </div>
                                <div className="th02">사업자등록증</div>
                                <div className="td02">
                                    <input
                                        type="text"
                                        className="w50"
                                        placeholder=""
                                    />
                                    <button type="button" className="btn small">
                                        업로드
                                    </button>
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">주소</div>
                                <div className="td01 full">
                                    <input
                                        type="text"
                                        className="w50"
                                        placeholder=""
                                    />
                                    <button type="button" className="btn small">
                                        주소찾기
                                    </button>
                                    <br />
                                    <input
                                        type="text"
                                        className="w80"
                                        placeholder="상세주소를 입력해주세요."
                                    />
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">담당자</div>
                                <div className="td01">
                                    <input
                                        type="text"
                                        className="w50"
                                        placeholder=""
                                    />
                                </div>
                                <div className="th02">담당자 연락처</div>
                                <div className="td02">
                                    <input
                                        type="text"
                                        className="w50"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">정산계좌</div>
                                <div className="td01">
                                    <select className="w20 mr10">
                                        <option>=은행명=</option>
                                        <option>부산은행</option>
                                    </select>
                                    <input
                                        type="text"
                                        className="w50"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                        </div>
                        {/* 
                        <h4>
                            기타 정보
                            <div className="full_div__right">
                                <span className="checkbox mr5">
                                    <input
                                        type="checkbox"
                                        id={`agree${i}`}
                                        title="동의"
                                    />
                                    <label htmlFor={`agree${i}`} />
                                </span>
                                모두 동의합니다.
                            </div>
                        </h4>
                        <div className="info_table w100">
                            <div className="tr">
                                <div className="th01">SNS 수신동의</div>
                                <div className="td01">
                                    <span className="checkbox mr5">
                                        <input
                                            type="checkbox"
                                            id={`agree${i}`}
                                            title="동의"
                                        />
                                        <label htmlFor={`agree${i}`} />
                                    </span>
                                    동의합니다.
                                </div>
                                <div className="th02">E-mail 수신동의</div>
                                <div className="td02">
                                    <span className="checkbox mr5">
                                        <input
                                            type="checkbox"
                                            id={`agree${i}`}
                                            title="동의"
                                        />
                                        <label htmlFor={`agree${i}`} />
                                    </span>
                                    동의합니다.
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">
                                    개인정보 수집 및 이용 동의
                                </div>
                                <div className="td01">
                                    <span className="checkbox mr5">
                                        <input
                                            type="checkbox"
                                            id={`agree${i}`}
                                            title="동의"
                                        />
                                        <label htmlFor={`agree${i}`} />
                                    </span>
                                    동의합니다.
                                </div>
                                <div className="th02">개인정보처리 위탁</div>
                                <div className="td02">
                                    <span className="checkbox mr5">
                                        <input
                                            type="checkbox"
                                            id={`agree${i}`}
                                            title="동의"
                                        />
                                        <label htmlFor={`agree${i}`} />
                                    </span>
                                    동의합니다.
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">여행자약관</div>
                                <div className="td01">
                                    <span className="checkbox mr5">
                                        <input
                                            type="checkbox"
                                            id={`agree${i}`}
                                            title="동의"
                                        />
                                        <label htmlFor={`agree${i}`} />
                                    </span>
                                    동의합니다.
                                </div>
                                <div className="th02">개인정보 제3자 제공</div>
                                <div className="td02">
                                    <span className="checkbox mr5">
                                        <input
                                            type="checkbox"
                                            id={`agree${i}`}
                                            title="동의"
                                        />
                                        <label htmlFor={`agree${i}`} />
                                    </span>
                                    동의합니다.
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">SMS, E-mail 수신동의</div>
                                <div className="td01">
                                    <span className="checkbox mr5">
                                        <input
                                            type="checkbox"
                                            id={`agree${i}`}
                                            title="동의"
                                        />
                                        <label htmlFor={`agree${i}`} />
                                    </span>
                                    동의합니다.
                                </div>
                                <div className="th02">파트너약관</div>
                                <div className="td02">
                                    <span className="checkbox mr5">
                                        <input
                                            type="checkbox"
                                            id={`agree${i}`}
                                            title="동의"
                                        />
                                        <label htmlFor={`agree${i}`} />
                                    </span>
                                    동의합니다.
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">이용약관</div>
                                <div className="td01">
                                    <span className="checkbox mr5">
                                        <input
                                            type="checkbox"
                                            id={`agree${i}`}
                                            title="동의"
                                        />
                                        <label htmlFor={`agree${i}`} />
                                    </span>
                                    동의합니다.
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                {isCreate && (
                    <button onClick={handleWriteUser} className="btn">
                        수기 등록하기
                    </button>
                )}
                {!isCreate && (
                    <button onClick={handleChangeUserInfo} className="btn">
                        유저 정보변경 하기
                    </button>
                )}
            </div>
        </Modal2>
    );
};
