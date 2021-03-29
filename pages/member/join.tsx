import React, { createContext, useContext, useEffect, useState } from 'react';
import SubTopNav from 'layout/components/SubTop';
import { useVerification } from '../../hook/useVerification';
import { ISet } from '../../types/interface';
import { UserRole, VerificationTarget } from '../../types/api';
import { getFromUrl } from '../../utils/url';
import { closeModal, openModal } from '../../utils/popUp';
import { VerifiEamilModal } from '../../components/verifiModal/VerifiEmailModal';
import { Storage } from '../../utils/Storage';
import UserInfoForm from 'components/join/UserInfoForm';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getStaticPageInfo, Ipage } from '../../utils/page';
import { usePageEdit } from '../../hook/usePageEdit';
import defaultPageInfo from "../../info/join.json"
import { ALLOW_SELLERS } from '../../types/const';
import { PageEditor } from '../../components/common/PageEditer';
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
    setJoinProcess: ISet<TJoinProcess> | any
    userType: UserRole,
    setUserType: ISet<UserRole>
    isPartenerB: boolean,
    isPartner: boolean,
    isIndi: boolean,
    verifiedPhone?: string
    verificationId?: string
    verifiedEmail?: string
    oauth?: string
}

export const JoinContext = React.createContext<null | IjoinContext>(null);

export const getStaticProps = getStaticPageInfo("join")
const Join: React.FC<Ipage> = (pageInfo) => {
    const router = useRouter();
    const editTools = usePageEdit(pageInfo, defaultPageInfo);
    const verificationId = getFromUrl("vid") || undefined;
    const verifiedEmail = getFromUrl("email") || undefined;
    const verifiedPhone = getFromUrl("phone") || undefined;
    const oauth = getFromUrl("oauth") || undefined;
    const [userType, setUserType] = useState<UserRole>(UserRole.individual);
    const [joinProcess, joinSet] = useState<TJoinProcess>("userType");
    const verifiHook = useVerification({
        _id: verificationId,
        payload: verifiedEmail
    });

    const setJoinProcess = (process: TJoinProcess) => {
        history.pushState({ joinProcess: joinProcess }, "회원가입 절차");
        history.pushState({ joinProcess: joinProcess }, "회원가입 절차");
        joinSet(process)
    }

    const checkProcess = (process: TJoinProcess) => process === joinProcess;
    const checkProcessOn = (process: TJoinProcess) => checkProcess(process) ? "on" : "";

    const isPartenerB = userType === UserRole.partnerB;
    const isPartner = userType === UserRole.partner;
    const isIndi = userType === UserRole.individual;


    const context: IjoinContext = {
        ...verifiHook,
        joinProcess,
        setUserType,
        userType,
        verifiedPhone,
        verifiedEmail,
        verificationId,
        setJoinProcess,
        isPartenerB,
        isPartner,
        isIndi,
        oauth
    }

    useEffect(() => {
        const lastRole = Storage?.getLocal("signUpRole", "") as UserRole;
        if (lastRole) {
            setUserType(lastRole)
        }
    }, [])


    useEffect(() => {
        if (oauth) {
            setJoinProcess("verification")
        }
        if (verificationId) {
            setJoinProcess("userInfo")
        }
    }, [])


    useEffect(() => {
        window.onpopstate = function (event: any) {
            joinSet(event.state.joinProcess);
        };
    }, [])

    return (
        <div>
            <div >
                <SubTopNav pageTools={editTools} >
                    <li className="homedeps1">Member</li>
                    <li className="homedeps2">
                        <Link href="/member/join"><a>회원가입</a></Link>
                    </li>
                </SubTopNav>
                <PageEditor pageTools={editTools} />
                {/* 개인 */}
                <div className="sign_in famile">
                    <div className="inner ">
                        {/* <h4 className="join_title w100">
                            <img src="/img/logo_1.png" alt="logo" />
                        </h4> */}
                        <div className="join_address w100">
                            <ul>
                                <li
                                    key={joinProcess}
                                    className={checkProcessOn("userType")}>
                                    <i className="text">Step.01</i>
                                    <i className="svg01"></i>
                                    <br />
                                    회원선택
                                </li>
                                <li className={checkProcessOn("verification")}>
                                    <i className="text">Step.02</i>
                                    <i className="svg02"></i>
                                    <br />
                                    인증
                                </li>
                                <li className={checkProcessOn("userInfo")}>
                                    <i className="text">Step.03</i>
                                    <i className="svg03"></i>
                                    <br />
                                    정보입력
                                </li>
                                <li className={checkProcessOn("registered")}>
                                    <i className="text">Step.04</i>
                                    <i className="svg04"></i>
                                    <br />
                                    {userType === UserRole.individual ? "가입완료" : "가입요청완료"}
                                </li>
                            </ul>
                        </div>
                        <div className="join_wrap2 w1200">
                            <JoinContext.Provider value={context}>
                                {checkProcess("userType") &&
                                    <UserType />
                                }
                                {checkProcess("verification") &&
                                    <Verification />
                                }
                                {checkProcess("userInfo") && userType &&
                                    <div className="w1200 " id="con02">
                                        <UserInfoForm />
                                    </div>
                                }
                                {checkProcess("registered") &&
                                    <JoinResult />
                                }
                            </JoinContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


const JoinResult = () => {
    const { userType } = useContext(JoinContext)!;
    const isSeller = ALLOW_SELLERS.includes(userType);
    return (
        <div className="wellcom" id="con03">
            {/* <img src="/img/join_img01.png" alt="환영합니다 이미지" /> */}
            <h5>회원가입을 축하드립니다!</h5>
            {isSeller && <p>
                회원가입이 완료 되었습니다.  <br className="no" />
                로그인 후 핑크로더의 알차고 즐거운 컨텐츠를 사용하실 수 있습니다.
            </p>}
            {isSeller && <p>
                기업파트너or개인파트너는 가입승인 후에 서비스를 이용할 수 있습니다. <br className="no" />
                핑크로더의 파트너 담당자가 승인 절차 메일을 발송 합니다. 조금만 기다려 주세요.
            </p>}
            <div className="fin">
                <Link href="/">
                    <button
                        className="sum btn"
                    >
                        홈으로
                </button>
                </Link>
                <Link href="/login">
                    <button
                        className="sum btn"
                    >
                        로그인 하러가기
                </button>
                </Link>
            </div >
        </div >
    )
}


const Verification: React.FC = () => {
    const { setJoinProcess, oauth, ...verifiHook } = useContext(JoinContext)!;
    const [verifiTarget, setVerifiTarget] = useState(VerificationTarget.EMAIL)
    const handleAuth = (target: "google" | "kakao") => () => {
        window.location.href = process.env.NEXT_PUBLIC_SERVER_URI + "/login/" + target
    }

    const handleSelfAuthEmail = () => {
        setVerifiTarget(VerificationTarget.EMAIL)
        openModal("#emailVerifi")()
    }

    const handleSelfAuthPhone = () => {
        setVerifiTarget(VerificationTarget.PHONE)
        openModal("#emailVerifi")()
    }

    useEffect(() => {
        if (!oauth) return;
        const isgoogle = oauth === "google";
        const authEmail = getFromUrl("oauthEmail");
        let target = isgoogle ? "구글" : "카카오";
        alert(`현재 웹사이트는 이미 ${target} ${authEmail} 계정에 연결되어 있습니다. 새로 가입하시길 원하신다면 먼저 ${target}에 로그아웃을 해야합니다. 아래와 같은 방법을 시도해 보세요.
             - 이메일 인증을 사용
             - 다른 브라우저를 사용
             - 다른 기기를 사용
             - 브라우저 쿠키를 삭제
             `)
        // const googleLogout = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://www.example.com";
        // const kakakoLogout = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://www.example.com";
    }, [oauth])

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
                {/* <li onClick={handleAuth("google")} className="socialVerify">
                    <i className="jandaicon-google1" />
                    구글 인증
                </li>
                <li onClick={handleAuth("kakao")} className="socialVerify">
                    <i className="jandaicon-kakaotalk" />
                    카카오톡 인증
                </li> */}
                <li onClick={handleSelfAuthEmail} className="socialVerify">
                    <span className="icon-email"></span>
                    이메일 인증
                </li>
                <li onClick={handleSelfAuthPhone} className="socialVerify">
                    <span className="icon-email"></span>
                    휴대폰 인증
                </li>
            </ul>
            <p className="bt_txt">
                ※ 본인인증 시 제공되는 정보로 회원가입시 필요한 정보를 연동합니다.
            </p>
            <VerifiEamilModal target={verifiTarget} duplicateCheck onSuccess={() => {
                closeModal("#emailVerifi")()
                setJoinProcess("userInfo");
            }} verifiHook={{
                ...verifiHook
            }} />
        </div>
    )
}




const UserType: React.FC = () => {
    const { setJoinProcess, setUserType } = useContext(JoinContext)!;

    const handleTypeChoice = (userType: UserRole) => () => {
        setJoinProcess("verification");
        Storage?.saveLocal("signUpRole", userType)
        setUserType(userType)
    }

    return (
        <div className="choice_box" id="con00">
            <h5>회원 종류 선택하기</h5>
            <p>회원가입을 하시고 더 많은 정보와 혜택을 누려보세요~!! </p>
            <ul className="choice__link">
                {/* 커스텀디자인 */}
                <li className="li01">
                    <strong className="title">개인 회원</strong>
                    <span className="txt">
                        구매를 위한 개인회원입니다.
                        <br />
                        회원가입을 하고 여행을 떠나세요~!!
                     </span>
                    <button className="nomal_join_btn" onClick={handleTypeChoice(UserRole.individual)}>바로가기 </button>
                    <div className="join__snslink">
                        <ul>
                            <li className="join__snslink_k">
                                <a href={process.env.NEXT_PUBLIC_SERVER_URI + "/login/kakao"}>
                                    <span className="join__snslink_icon"><i className="jandaicon-kakaotalk"></i></span>
                                    <span className="join__snslink_txt">카카오 계정으로 회원가입</span>
                                </a>
                            </li>
                            <li className="join__snslink_n">
                                <a href={process.env.NEXT_PUBLIC_SERVER_URI + "/login/naver"}>
                                    <span className="join__snslink_icon"><i></i></span>
                                    <span className="join__snslink_txt">네이버 계정으로 회원가입</span>
                                </a>
                            </li>
                            <li className="join__snslink_g">
                                <a href={process.env.NEXT_PUBLIC_SERVER_URI + "/login/google"}>
                                    <span className="join__snslink_icon"><i className="jandaicon-google1"></i></span>
                                    <span className="join__snslink_txt">구글 계정으로 회원가입</span>
                                </a>
                            </li>
                        </ul>
                    </div>
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

