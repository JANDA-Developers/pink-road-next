import React, { createContext, useContext, useState } from 'react';
import FormPartnerCor from 'components/join/FormPartnerBusi';
import FormPartnerNormal from 'components/join/FormPartnerNormal';
import FormNormal from 'components/join/FormNormal';
import SubTopNav from 'layout/components/SubTop';
import { useVerification } from '../hook/useVerification';
import { ISet } from '../types/interface';
import { UserRole } from '../types/api';
import { Modal } from '../components/modal/Modal';
import { UsePolicy } from '../components/policy/UsePolicy';
import { SERVER_URI } from '../apollo/uri';
import { getFromUrl } from '../utils/url';
interface IchkPolocy {
    policy_use: boolean,
    policy_info_collect: boolean,
    policy_info_entrust: boolean,
    policy_traveler: boolean,
    policy_partner: boolean,
    policy_marketing: boolean,
    policy_info_3rd: boolean
}

export const ContextPolicyChk = createContext<IchkPolocy | null>(null);



type TJoinProcess = "userType" | "verification" | "userInfo" | "registered"
interface IjoinContext extends ReturnType<typeof useVerification> {
    joinProcess: TJoinProcess;
    setJoinProcess: ISet<TJoinProcess>
    userType: UserRole,
    setUserType: ISet<UserRole>
    verificationId?: string
    verifiedEmail?: string
}

export const JoinContext = React.createContext<null | IjoinContext>(null);

const Join = () => {
    const verificationId = getFromUrl("vid") || undefined;
    const verifiedEmail = getFromUrl("email") || undefined;
    const [userType, setUserType] = useState<UserRole>(UserRole.individual);
    const [joinProcess, setJoinProcess] = useState<TJoinProcess>(verificationId ? "userInfo" : "userType");
    const verifiHook = useVerification({
        _id: verificationId,
    });

    const context: IjoinContext = {
        ...verifiHook,
        joinProcess,
        setUserType,
        userType,
        verifiedEmail,
        verificationId,
        setJoinProcess,
    }

    const formRender = (formSelected: UserRole) => {

        if (UserRole.individual === formSelected)
            return <FormNormal />

        if (UserRole.partnerB === formSelected)
            return <FormPartnerCor />

        if (UserRole.partner === formSelected)
            return <FormPartnerNormal />

    }

    return (
        <div>
            <div>
                <SubTopNav title="as" desc="asd" />
                {/* 개인 */}
                <div className="sign_in famile">
                    <div className="inner ">
                        <h4 className="join_title w100">
                            <img src="/img/logo_1.png" alt="logo" />
                        </h4>
                        <div className="join_address w100">
                            <ul>
                                <li className={`${joinProcess === "userType" && 'on'}`}>
                                    <i>Setep.01</i>
                                    <br />
                                    회원선택
                                </li>
                                <li className={`${joinProcess === "verification" && 'on'}`}>
                                    <i>Setep.02</i>
                                    <br />
                                    인증
                                </li>
                                <li className={`${joinProcess === "userInfo" && 'on'}`}>
                                    <i>Setep.03</i>
                                    <br />
                                    정보입력
                                </li>
                                <li className={`${joinProcess === "registered" && 'on'}`}>
                                    <i>Setep.04</i>
                                    <br />
                                    가입완료
                                </li>
                            </ul>
                        </div>
                        <div className="join_wrap2 w1200">
                            <JoinContext.Provider value={context}>
                                {joinProcess === "userType" &&
                                    <UserType />
                                }
                                {joinProcess === "verification" &&
                                    <Verification />
                                }
                                {joinProcess === "userInfo" && userType &&
                                    <div className="w1200 " id="con02">
                                        {formRender(userType)}
                                    </div>
                                }
                                {joinProcess === "registered" &&
                                    <JoinResult />
                                }
                            </JoinContext.Provider>
                        </div>
                        {/* Popup:이용약관 */}
                        <Modal title="이용약관" id="policyPopUp">
                            <UsePolicy />
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}


const JoinResult = () => {
    return (
        <div className="wellcom" id="con03">
            <img src="/img/join_img01.png" alt="환영합니다 이미지" />
            <h5>회원가입을 축하드립니다!</h5>
            <p>
                가입승인 후에 서비스를 이용할 수 있습니다. <br className="no" />
                잠시만 기다려주세요! 가입승인은 최대 24시간이 걸리며,{" "}
                <br className="no" />
                가입시 입력된 이메일로 가입승인 이메일로 안내드리겠습니다.
            </p>
            <div className="fin">
                <button
                    className="sum btn"
                //   onclick="location.href='../login';"
                >
                    로그인 하러가기
                </button>
            </div>
        </div>
    )
}


const Verification: React.FC = () => {

    const { setJoinProcess } = useContext(JoinContext)!;
    const handleAuth = (target: "google" | "kakao") => () => {
        window.location.href = SERVER_URI + "/login/" + target
    }

    const handleSelfAuth = () => {
        setJoinProcess("userInfo")
    }

    return (
        <div className="certified" id="con01">
            <h5>본인인증을 해주세요.</h5>
            <p>
                {" "}
                원활한 서비스 이용과 온라인에서의 익명 사용으로 인한 피해 등을 최소한으로
                방지하기 위해 실명제를 시행하고 있습니다.
                <br />
                본인확인을 위해 아래의 구글인증 또는 카카오톡인증 중에 하나를 선택하여
                본인확인을 받으시기 바랍니다.
            </p>
            <ul>
                <li onClick={handleAuth("google")} className="socialVerify">
                    <i className="jandaicon-google1" />
                    구글 인증
                </li>
                <li onClick={handleAuth("kakao")} className="socialVerify">
                    <i className="jandaicon-kakaotalk" />
                    카카오톡 인증
                </li>
                <li onClick={handleSelfAuth} className="socialVerify">
                    <i className="jandaicon-kakaotalk" />
                    이메일 인증
                </li>
            </ul>
            <p className="bt_txt">
                ※ 본인인증 시 제공되는 정보로 회원가입시 필요한 정보를 연동합니다.
            </p>
            
        </div>
    )
}




const UserType: React.FC = () => {
    const { setJoinProcess, setUserType } = useContext(JoinContext)!;

    const handleTypeChoice = (userType: UserRole) => () => {
        setJoinProcess("verification");
        setUserType(userType)
    }

    return (
        <div className="choice_box" id="con00">
            <h5>회원 종류 선택하기</h5>
            <p>회원가입을 하시고 더 많은 정보와 혜택을 누려보세요~!! </p>
            <ul>
                {/* 커스텀디자인 */}
                <li className="li01" onClick={handleTypeChoice(UserRole.individual)}>
                    <strong>개인 회원</strong>
                    <span>
                        구매를 위한 개인회원입니다.
                    <br />
                    회원가입을 하고 여행을 떠나세요~!!
                </span>
                </li>
                <li className="li02" onClick={handleTypeChoice(UserRole.partnerB)}>
                    <i />
                    <strong>기업파트너 회원</strong>
                    <span>기업파트너를 위한 회원입니다.</span>
                </li>
                <li className="li03" onClick={handleTypeChoice(UserRole.partner)}>
                    <i />
                    <strong>개인파트너 회원</strong>
                    <span>개인파트너를 위한 회원입니다.</span>
                </li>
            </ul>
            <p className="bt_txt">
                ※ 기업파트너는 사업자번호가 필요합니다. 사업자번호가 없는 경우에는
                개인파트너로 회원가입을 해주세요.
            </p>
            <p className="bt_txt">※ 상품구입을 위해서 회원가입은 필수입니다.</p>
        </div>
    )
}

export default Join

