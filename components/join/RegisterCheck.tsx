import React, { useContext, useState } from "react";
import { AddUserInput, ERR_CODE, UserRole } from "../../types/api";
import { isEmail, isPhone, isPassword, isName } from "utils/validation";
import { useSignUp } from "../../hook/useUser";
import { Validater } from "../../utils/validate";
import { JoinContext } from "../../pages/member/join";
import { closeModal, openModal } from "../../utils/popUp";
import { ISignUpInput } from "../../hook/useJoin";
import { omits } from "../../utils/omit";
import { Modal } from "../modal/Modal";
import { Policy } from "../policy/PriviacyPolicy";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { userRoleToKR } from "../../utils/enumToKr";
import { ISet } from "../../types/interface";

type TSMS = {
    sns: true;
    email: true;
};

export type TPolicyChk = {
    policy_use: boolean;
    policy_info_collect: boolean;
    policy_info_entrust: boolean;
    policy_traveler: boolean;
    policy_partner: boolean;
    policy_marketing: boolean;
    policy_info_3rd: boolean;
};

interface IProps {
    registerInfo: ISignUpInput;
    phoneNumberHack: any;
}

const RegisterCheck: React.FC<IProps> = ({ registerInfo, phoneNumberHack }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const { userType, setJoinProcess, verifiData } = useContext(JoinContext)!;

    const { _id: verificationId } = verifiData!;

    const [signUpMu] = useSignUp({
        onCompleted: ({ SignUp }) => {
            if (SignUp.ok) {
                setJoinProcess("registered");
            } else {
                if (SignUp.error?.code === ERR_CODE.ALEADY_SAME_DATA) {
                    alert("이미 가입된 회원입니다.");
                }
            }
        },
    });

    const [chkSMS, setChkSMS] = useState({
        sns: true,
        email: true,
    });

    const [chkPolocy, setChkPolicy] = useState({
        policy_use: false,
        policy_info_collect: false,
        policy_info_entrust: false,
        policy_traveler: false,
        policy_partner: false,
        policy_marketing: false,
        policy_info_3rd: false,
    });

    const optional: (keyof typeof chkPolocy)[] = [
        "policy_info_3rd",
        "policy_marketing",
    ];

    const handleSMSAgree = (smsTarget: keyof TSMS) => {
        let agreeNewState = chkSMS;
        agreeNewState[smsTarget] = !chkSMS[smsTarget];
        setChkSMS({
            ...agreeNewState,
        });
    };

    const isCheckAll = () => {
        let chkAll = true;
        let policy: keyof TPolicyChk;

        for (policy in chkPolocy) {
            const check = chkPolocy[policy];
            if (!check && optional.includes(policy)) {
                chkAll = false;
                break;
            }
        }

        return chkAll;
    };

    const handleAgreeAlltoggle = (checkAll?: boolean) => {
        let policy: keyof TPolicyChk;
        let agreeAll = chkPolocy;
        if (!isCheckAll() || checkAll) {
            for (policy in agreeAll) {
                agreeAll[policy] = true;
            }
        } else {
            for (policy in agreeAll) {
                agreeAll[policy] = false;
            }
        }
        setChkPolicy({
            ...agreeAll,
        });
    };

    const handlePolicy = (policyTarget: keyof TPolicyChk) => {
        let agreeNewState = chkPolocy;
        agreeNewState[policyTarget] = !chkPolocy[policyTarget];
        setChkPolicy({
            ...agreeNewState,
        });
    };

    // if (userType === UserRole.partnerB) {
    //네이밍 얼라이어스
    // registerInfo.phoneNumber = registerInfo.manageContact || "";
    // }

    const { nodes: sharedValidate } = new Validater([
        {
            value: verificationId,
            failMsg: "이메일 인증을 받아주세요.",
        },
        {
            value: registerInfo.pw === registerInfo.pwcheck,
            failMsg: "비밀번호가 일치하지 않습니다.",
        },
        {
            value: isPassword(registerInfo.pw || ""),
            failMsg:
                "비밀번호는 특수문자 1개이상 및 숫자가 포함된 7~15 자리의 영문 숫자 조합이여야 합니다",
        },
        {
            value: isCheckAll,
            failMsg: "동의 항목에 모두 체크 해주세요.",
        },
        {
            value: registerInfo.address,
            failMsg: "주소값을 입력 해주세요.",
        },
        {
            value: registerInfo.address_detail,
            failMsg: "상세 주소값을 입력 해주세요.",
            id: "AddressInput",
        },
    ]);

    const { validate: normalValidate } = new Validater([
        {
            value: isName(registerInfo.name || ""),
            failMsg: "이름 값이 올바르지 않습니다.",
            id: "NameInput",
        },
        // {
        //   value: isPhone(registerInfo.phoneNumber || ""),
        //   failMsg: "올바른 휴대폰 번호가 아닙니다.",
        //   id: "PhoneNumberInput"
        // },
        ...sharedValidate,
    ]);

    const { validate: partnerValidate } = new Validater([
        {
            value: isName(registerInfo.name || ""),
            failMsg: "이름 값이 올바르지 않습니다.",
        },
        {
            value: registerInfo.blueBird,
            failMsg: "파랑새 기수를 입력 해주세요.",
        },
        ...sharedValidate,
    ]);

    const { validate: BpartnerValidate } = new Validater([
        {
            value: isPhone(registerInfo.busi_contact || ""),
            failMsg: "대표 연락처가 올바르지 않습니다.",
        },
        {
            value: isPhone(registerInfo.manageContact || ""),
            failMsg: "담당자 연락처가 올바르지 않습니다.",
        },
        ...sharedValidate,
    ]);

    const validate = (): boolean => {
        switch (userType) {
            case UserRole.individual:
                return normalValidate();

            case UserRole.partner:
                return partnerValidate();

            case UserRole.partnerB:
                return BpartnerValidate();
                break;
        }
        return false;
    };

    const openPolicy = (index: number) => () => {
        setSelectedIndex(index);
        openModal("#PolicyModal")();
    };

    const handleRegister = () => {
        const validatedData: AddUserInput = omits(registerInfo, [
            "pwcheck",
        ]) as any;
        signUpMu({
            variables: {
                params: {
                    ...validatedData,
                    role: userType,
                },
                verificationId: verificationId!,
            },
        });
    };

    return (
        <>
            <div className="agree_rule">
                <div className="agreeChk mb30">
                    <label
                        htmlFor="allow_message"
                        className="control-label title"
                    >
                        SMS 수신동의
                    </label>
                    <div className="txt">
                        <label htmlFor="snsYes" className="radio-inline">
                            <input
                                type="radio"
                                name="allow_sms"
                                id="snsYes"
                                defaultValue="Y"
                                defaultChecked={true}
                                onChange={() => {
                                    handleSMSAgree("sns");
                                }}
                            />{" "}
                            예
                        </label>
                        <label htmlFor="snsNo" className="radio-inline">
                            <input
                                type="radio"
                                name="allow_sms"
                                id="snsNo"
                                defaultValue="N"
                                onChange={() => {
                                    handleSMSAgree("sns");
                                }}
                            />{" "}
                            아니오
                        </label>
                    </div>
                </div>
                <div className="agreeChk mb30">
                    <label className="control-label title">
                        E-mail 수신동의
                    </label>
                    <div className="txt">
                        <label htmlFor="mailYes" className="radio-inline">
                            <input
                                type="radio"
                                name="allow_mailing"
                                id="mailYes"
                                defaultValue="Y"
                                defaultChecked={true}
                                onChange={() => {
                                    handleSMSAgree("email");
                                }}
                            />{" "}
                            예
                        </label>
                        <label htmlFor="mailNo" className="radio-inline">
                            <input
                                type="radio"
                                name="allow_mailing"
                                id="mailNo"
                                defaultValue="N"
                                onChange={() => {
                                    handleSMSAgree("sns");
                                }}
                            />{" "}
                            아니오
                        </label>
                    </div>
                </div>
                <div className="agreeChk mb10">
                    <input
                        checked={isCheckAll()}
                        type="checkbox"
                        className="checkbox"
                        onChange={() => {
                            handleAgreeAlltoggle(false);
                        }}
                    />
                    <span>모두 동의합니다</span>
                </div>
                <div className="agreeChk_list">
                    <ul>
                        {/* <Tab>이용약관</Tab> */}
                        <li>
                            {/* ALL */}
                            <div className="in_box1">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={chkPolocy.policy_use}
                                    onChange={() => {
                                        handlePolicy("policy_use");
                                    }}
                                />
                                <span>
                                    <strong>이용약관 동의</strong>[필수]
                                </span>
                            </div>
                            <div className="in_box2">
                                <a onClick={openPolicy(0)}>전문보기 &gt;</a>
                            </div>
                        </li>
                        {/* <Tab>개인정보 수집 및 이용 동의</Tab> */}
                        <li>
                            {/* ALL */}
                            <div className="in_box1">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={chkPolocy.policy_info_collect}
                                    onClick={() => {
                                        handlePolicy("policy_info_collect");
                                    }}
                                />
                                <span>
                                    <strong>개인정보 수집 및 이용 동의</strong>
                                    [필수]
                                </span>
                            </div>
                            <div className="in_box2">
                                <a onClick={openPolicy(1)}>전문보기 &gt;</a>
                            </div>
                        </li>
                        {/* <Tab>개인정보 제 3자 제공</Tab> */}
                        <li>
                            {/* ALL */}
                            <div className="in_box1">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={chkPolocy.policy_info_entrust}
                                    onClick={() => {
                                        handlePolicy("policy_info_entrust");
                                    }}
                                />
                                <span>
                                    <strong>개인정보 제 3자 제공</strong>[필수]
                                </span>
                            </div>
                            <div className="in_box2">
                                <a onClick={openPolicy(2)}>전문보기 &gt;</a>
                            </div>
                        </li>
                        {/* <Tab>여행자약관</Tab> */}
                        <li>
                            {/* 개인 */}
                            <div className="in_box1">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={chkPolocy.policy_traveler}
                                    onClick={() => {
                                        handlePolicy("policy_traveler");
                                    }}
                                />
                                <span>
                                    <strong>여행자약관</strong>[필수]
                                </span>
                            </div>
                            <div className="in_box2">
                                <a onClick={openPolicy(3)}>전문보기 &gt;</a>
                            </div>
                        </li>
                        {/* <Tab>SMS, E-mail 수신동의 [선택]</Tab> */}
                        <li>
                            <div className="in_box1">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={chkPolocy.policy_partner}
                                    onClick={() => {
                                        handlePolicy("policy_partner");
                                    }}
                                />
                                <span>
                                    <strong>SMS, E-mail 수신동의</strong>[필수]
                                </span>
                            </div>
                            <div className="in_box2">
                                <a onClick={openPolicy(4)}>전문보기 &gt;</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Modal id="PolicyModal" title="약관보기">
                <Tabs onSelect={setSelectedIndex} selectedIndex={selectedIndex}>
                    <TabList>
                        <Tab>이용약관</Tab>
                        <Tab>개인정보 수집 및 이용 동의</Tab>
                        <Tab>개인정보 제 3자 제공</Tab>
                        <Tab>여행자약관</Tab>
                        <Tab>SMS, E-mail 수신동의 [선택]</Tab>
                    </TabList>
                    <TabPanel>
                        {/* 이용약관 [분기] */}
                        {userType === UserRole.partnerB && (
                            <Policy type="busiUsePolicy" />
                        )}
                        {userType === UserRole.partner && (
                            <Policy type="partnerUsePolicy" />
                        )}
                        {userType === UserRole.individual && (
                            <Policy type="indiUsePolicy" />
                        )}
                    </TabPanel>
                    {/* 개인정보 수집 및 이용 [분기] */}
                    <TabPanel>
                        {userType === UserRole.partnerB && (
                            <Policy type="busiPartnerPrivacyPolicy" />
                        )}
                        {userType === UserRole.partner && (
                            <Policy type="partnerPrivacyPolicy" />
                        )}
                        {userType === UserRole.individual && (
                            <Policy type="indiPrivacyPolicy" />
                        )}
                    </TabPanel>
                    {/* 개인정보 제 3자 제공 */}
                    <TabPanel>
                        <Policy type="privacyThirdPolicy" />
                    </TabPanel>
                    <TabPanel>
                        {/* SMS, E-mail 수신동의 [선택] */}
                        <Policy type="marketingPolicy" />
                    </TabPanel>
                    {/* 여행자약관 */}
                    <TabPanel>
                        <Policy type="travelerPolicy" />
                    </TabPanel>
                </Tabs>
                <button
                    onClick={() => {
                        closeModal("#PolicyModal")();
                        handleAgreeAlltoggle(true);
                    }}
                    className="btn medium mr10"
                >
                    전체동의
                </button>
                <button
                    onClick={() => {
                        closeModal("#PolicyModal")();
                    }}
                    className="btn medium"
                >
                    확인
                </button>
            </Modal>

            <div className="fin">
                <a href="/" className="joinWrapBtn cancel btn">
                    취소
                </a>
                <button
                    className="joinWrapBtn sum btn"
                    onClick={() => {
                        if (validate()) {
                            handleRegister();
                        }
                    }}
                >
                    등록
                </button>
            </div>
        </>
    );
};

export default RegisterCheck;
