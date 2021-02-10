import React, { useContext, useEffect, useState } from 'react';
import { Storage, initStorage } from 'utils/Storage';
import { signInVariables, UserRole } from 'types/api';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Validater } from '../utils/validate';
import { isEmail } from '../utils/validation';
import { useLogin } from "../hook/useUser";
import SubTopNav from '../layout/components/SubTop';
import defaultPageInfo from "../info/login.json"
import { usePageEdit } from '../hook/usePageEdit';
import { getStaticPageInfo, Ipage } from '../utils/page';
import { PageEditor } from '../components/common/PageEditer';
import { ErrorCode, errorMessage } from '../utils/enumToKr';

export const getStaticProps = getStaticPageInfo("login")
export const Login: React.FC<Ipage> = (pageInfo) => {
    const [saveId, setSaveId] = useState(false);
    const [saveSession, setSaveSession] = useState(false);
    const [userId, setId] = useState("");
    const [userPw, setPw] = useState("");
    const [userType, setUserType] = useState<UserRole>(UserRole.individual)
    const editTools = usePageEdit(pageInfo, defaultPageInfo)
    const { getData } = useLogin({
        onCompleted: ({ SignIn }) => {
            if (SignIn.ok) {
                Storage?.saveLocal("jwt", SignIn.data?.token || "");
                location.href = "/"
                alert("환영합니다.")
            } else {
                errorMessage(SignIn.error?.code)
            }
        },
    })
    const router = useRouter();

    const sessionSave = () => {
        const answer = confirm('브라우저를 닫더라도 로그인이 계속 유지될 수 있습니다.\n\n로그인 유지 기능을 사용할 경우 다음 접속부터는 로그인할 필요가 없습니다.\n\n단, 게임방, 학교 등 공공장소에서 이용 시 개인정보가 유출될 수 있으니 꼭 로그아웃을 해주세요.')
        if (!answer) return;
        setSaveSession(true);
        // saveLocal("saveSession", "saved");
    }
    // 로그인성공시
    // saveLocal("saveid", id);
    useEffect(() => {
        initStorage()
        setId(Storage!.getLocal("saveid", ""))
        setSaveId(!!Storage!.getLocal("saveId?", ""))
        setSaveSession(!!Storage!.getLocal("saveSession?", ""))
    }, [])


    useEffect(() => {
        Storage?.saveLocal("saveid", saveId)
        Storage?.saveLocal("saveSession?", saveSession)

    }, [saveId, saveSession])

    const handleUserType = (type: UserRole) => {
        setUserType(type);
    }

    const handleId = (id: string) => {
        setId(id);
    }

    const handlePw = (pw: string) => {
        setPw(pw);
    }


    const { validate } = new Validater([{
        value: isEmail(userId),
        failMsg: "이메일을 입력 해주세요"
    }, {
        value: userPw.length > 4,
        failMsg: "패스워드를 입력 해주세요"
    }])

    const handleLogin = () => {
        if (!validate()) return;
        const signInvar: signInVariables = {
            email: userId,
            pw: userPw,
            hopeRole: userType
        }

        getData({ variables: signInvar as any });
    }

    return <div >
        <div className="top_visual">
            <SubTopNav pageTools={editTools} >
            </SubTopNav>
        </div>
        <PageEditor pageTools={editTools} />
        <div className="login_box">
            <div className="sign_in w1200">
                <div className="inner">
                    <div className="login_page">
                        <input
                            id="tab-1"
                            type="radio"
                            name="radio-set"
                            className="tab-selector-1"
                            value="individual"
                            defaultChecked
                            onClick={() => { handleUserType(UserRole.individual) }}
                        />
                        <label htmlFor="tab-1" className="tab-label-1 login_tap tap_01 ">
                            <b>개인</b>
                        </label>
                        <input
                            id="tab-2"
                            type="radio"
                            name="radio-set"
                            className="tab-selector-2"
                            value="partnerB"
                            onClick={() => { handleUserType(UserRole.partnerB) }}
                        />
                        <label htmlFor="tab-2" className="tab-label-2 login_tap tap_02">
                            <b>기업파트너</b>
                        </label>
                        <input
                            id="tab-3"
                            type="radio"
                            name="radio-set"
                            className="tab-selector-3"
                            value="partner"
                            onClick={() => { handleUserType(UserRole.partner) }}
                        />
                        <label htmlFor="tab-3" className="tab-label-3 login_tap tap_03">
                            <b>개인파트너</b>
                        </label>
                        <input
                            id="tab-4"
                            type="radio"
                            name="radio-set"
                            className="tab-selector-4"
                            value="manager"
                            onClick={() => { handleUserType(UserRole.manager) }}
                        />
                        <label htmlFor="tab-4" className="tab-label-4 login_tap tap_03">
                            <b>마스터</b>
                        </label>
                        <div className={`login_wrap white_box`}>
                            <h3>
                                <strong>MEMBER</strong> LOGIN
                            </h3>
                            <div className="form-group">
                                <input
                                    value={userId}
                                    type="text"
                                    name="user_id"
                                    id="uid"
                                    required
                                    placeholder="아이디"
                                    className="txt_id"
                                    title="아이디"
                                    onChange={(e) => { handleId(e.target.value) }}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    value={userPw}
                                    type="password"
                                    name="password"
                                    id="upw"
                                    required
                                    placeholder="비밀번호"
                                    title="비밀번호"
                                    className="form-txt_pw"
                                    onChange={(e) => { handlePw(e.target.value) }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="keepid_opt" className="checkbox-inline">
                                    <input
                                        type="checkbox"
                                        name="keep_signed"
                                        id="keepid_opt"
                                        defaultValue="Y"
                                        onClick={sessionSave}
                                    />
                                    로그인 유지
                                </label>
                                <label htmlFor="keepid_opt2" className="checkbox-inline">
                                    <input type="checkbox" id="keepid_opt2" defaultValue="Y" />{" "}
                                아이디 기억
                                </label>
                            </div>

                            <button type="submit" className="sum" onClick={handleLogin}>
                                <span >로그인</span>
                            </button>
                            <div className="login__snslink">
                                <img className="m" src="/img/google_logo.png" alt="google logo" />
                                <img className="m" src="/img/kakao_logo.png" alt="kakao logo" />
                                <ul>
                                    <li className="login__snslink_k"><Link href=""><a><span className="login__snslink_icon"><i className="jandaicon-kakaotalk"></i></span><span className="login__snslink_txt">카카오톡 로그인</span></a></Link></li>
                                    <li className="login__snslink_g"><Link href=""><a><span className="login__snslink_icon"><i className="jandaicon-google1"></i></span><span className="login__snslink_txt">구글 로그인</span></a></Link></li>
                                    <li className="login__snslink_n"><Link href=""><a><span className="login__snslink_icon"><i></i></span><span className="login__snslink_txt">네이버 로그인</span></a></Link></li>
                                </ul>
                            </div>
                            <div className="sign_in_form">
                                <span>
                                    <Link href="/member/join">
                                        <a>회원가입<i className="jandaicon-arr4-right"></i></a>
                                    </Link>
                                </span>
                                <span>
                                    <Link href="/findmembers">
                                        <a>아이디/비번찾기<i className="jandaicon-arr4-right"></i></a>
                                    </Link>
                                </span>
                            </div>

                            <div className="join__snslink">
                                <ul>
                                    <li className="join__snslink_k"><Link href=""><a>
                                        <span className="join__snslink_icon"><i className="jandaicon-kakaotalk"></i></span>
                                        <span className="join__snslink_txt">카카오 계정으로 회원가입</span>
                                    </a></Link></li>
                                    <li className="join__snslink_n"><Link href=""><a>
                                        <span className="join__snslink_icon"><i></i></span>
                                        <span className="join__snslink_txt">네이버 계정으로 회원가입</span>
                                    </a></Link></li>
                                    <li className="join__snslink_g"><Link href=""><a>
                                        <span className="join__snslink_icon"><i className="jandaicon-google1"></i></span>
                                        <span className="join__snslink_txt">구글 계정으로 회원가입</span>
                                    </a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};


export default Login
