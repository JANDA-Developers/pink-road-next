import React, { useContext, useEffect, useState } from 'react';
import { Storage, initStorage } from 'utils/Storage';
import { ERR_CODE, signInVariables, UserRole } from 'types/api';
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
import { useSignIn } from '../hook/useSignIn';

export const getStaticProps = getStaticPageInfo("login")
export const Login: React.FC<Ipage> = (pageInfo) => {
    const {
        handleLogin,
        handlePw,
        handleSaveId,
        handleUserType,
        saveId,
        saveSession,
        sessionSave,
        userId,
        userPw,
        userType,
        handleId
    } = useSignIn()
    const editTools = usePageEdit(pageInfo, defaultPageInfo)

    return <div >
        <div className="top_visual">
            <SubTopNav pageTools={editTools} >
                <li className="homedeps1">Login</li>
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
                            value={UserRole.individual}
                            checked={UserRole.individual === userType}
                            onChange={() => { handleUserType(UserRole.individual) }}
                        />
                        <label htmlFor="tab-1" className="tab-label-1 login_tap tap_01 ">
                            <b>개인</b>
                        </label>
                        <input
                            id="tab-2"
                            type="radio"
                            name="radio-set"
                            className="tab-selector-2"
                            value={UserRole.partnerB}
                            checked={UserRole.partnerB === userType}
                            onChange={() => { handleUserType(UserRole.partnerB) }}
                        />
                        <label htmlFor="tab-2" className="tab-label-2 login_tap tap_02">
                            <b>기업파트너</b>
                        </label>
                        <input
                            id="tab-3"
                            type="radio"
                            name="radio-set"
                            className="tab-selector-3"
                            value={UserRole.partner}
                            checked={UserRole.partner === userType}
                            onChange={() => { handleUserType(UserRole.partner) }}
                        />
                        <label htmlFor="tab-3" className="tab-label-3 login_tap tap_03">
                            <b>개인파트너</b>
                        </label>
                        <input
                            id="tab-4"
                            type="radio"
                            name="radio-set"
                            className="tab-selector-4"
                            value={UserRole.manager}
                            checked={UserRole.manager === userType}
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
                                    onChange={(e) => { handleId(e.target.value.trim()) }}
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
                                    onChange={(e) => { handlePw(e.target.value.trim()) }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="keepid_opt" className="checkbox-inline">
                                    <input
                                        type="checkbox"
                                        name="keep_signed"
                                        id="keepid_opt"
                                        onClick={sessionSave}
                                        checked={saveSession}
                                    />
                                    로그인 유지
                                </label>
                                <label htmlFor="keepid_opt2" className="checkbox-inline">
                                    <input
                                        onClick={handleSaveId}
                                        checked={saveId}
                                        type="checkbox" id="keepid_opt2" />{" "}
                                    아이디 기억
                                </label>
                            </div>

                            <button type="submit" className="sum" onClick={handleLogin}>
                                <span >로그인</span>
                            </button>
                            {/* {userType === UserRole.individual &&
                                <div className="login__snslink">
                                    <ul>
                                        <li className="login__snslink_k">
                                            <a href={process.env.NEXT_PUBLIC_SERVER_URI + "/login/kakao"}>
                                                <span className="login__snslink_icon">
                                                    <i className="jandaicon-kakaotalk"></i>
                                                </span>
                                                <span className="login__snslink_txt">카카오톡 로그인</span>
                                            </a>
                                        </li>
                                        <li className="login__snslink_g">
                                            <a href={process.env.NEXT_PUBLIC_SERVER_URI + "/login/google"}><span className="login__snslink_icon"><i className="jandaicon-google1"></i></span><span className="login__snslink_txt">구글 로그인</span></a></li>
                                        <li className="login__snslink_n">
                                            <a href={process.env.NEXT_PUBLIC_SERVER_URI + "/login/naver"}><span className="login__snslink_icon"><i></i></span><span className="login__snslink_txt">네이버 로그인</span>
                                            </a></li>
                                    </ul>
                                </div>
                            } */}
                            <div className="sign_in_form">
                                <span>
                                    <Link href="/member/join">
                                        <a>회원가입<i className="jandaicon-arr4-right"></i></a>
                                    </Link>
                                </span>
                                <span>
                                    <Link href="/findmembers">
                                        <a>아이디/비밀번호찾기<i className="jandaicon-arr4-right"></i></a>
                                    </Link>
                                </span>
                            </div>

                            {userType === UserRole.individual &&
                                <div className="login__snslink2">
                                    <ul>
                                        <li className="login__snslink2_k">
                                            <a href={process.env.NEXT_PUBLIC_SERVER_URI + "/login/kakao"}>
                                                <span className="login__snslink2_icon"><i className="jandaicon-kakaotalk"></i></span>
                                                <span className="login__snslink2_txt">카카오톡 로그인</span>
                                            </a>
                                        </li>
                                        <li className="login__snslink2_n">
                                            <a href={process.env.NEXT_PUBLIC_SERVER_URI + "/login/naver"}>
                                                <span className="login__snslink2_icon"><i></i></span>
                                                <span className="login__snslink2_txt">네이버 로그인</span>
                                            </a>
                                        </li>
                                        <li className="login__snslink2_g">
                                            <a href={process.env.NEXT_PUBLIC_SERVER_URI + "/login/google"}>
                                                <span className="login__snslink2_icon"><i className="jandaicon-google1"></i></span>
                                                <span className="login__snslink2_txt">구글 로그인</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};


export default Login
