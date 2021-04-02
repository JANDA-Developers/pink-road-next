import Link from 'next/link';
import React from 'react';

interface IProp { }

export const LoginModal: React.FC<IProp> = () => {
    return <div className="popup_bg_mini" style={{ display: "flex" }}>
        <div className="in_txt login_popup">
            <a className="close_icon"><i className="flaticon-multiply"></i></a>
            <div className="page">
                <h3 className="popup__tittle">로그인</h3>
                <div className="con ">
                    <div className="login_page">
                        <input
                            id="tab-1"
                            type="radio"
                            name="radio-set"
                            className="tab-selector-1"
                        />
                        <label htmlFor="tab-1" className="tab-label-1 login_tap tap_01 ">
                            <b>개인</b>
                        </label>
                        <input
                            id="tab-2"
                            type="radio"
                            name="radio-set"
                            className="tab-selector-2"
                        />
                        <label htmlFor="tab-2" className="tab-label-2 login_tap tap_02">
                            <b>기업파트너</b>
                        </label>
                        <input
                            id="tab-3"
                            type="radio"
                            name="radio-set"
                            className="tab-selector-3"
                        />
                        <label htmlFor="tab-3" className="tab-label-3 login_tap tap_03">
                            <b>개인파트너</b>
                        </label>
                        <input
                            id="tab-4"
                            type="radio"
                            name="radio-set"
                            className="tab-selector-4"
                        />
                        <label htmlFor="tab-4" className="tab-label-4 login_tap tap_03">
                            <b>마스터</b>
                        </label>
                        <div className="login_wrap white_box">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="user_id"
                                    id="uid"
                                    required
                                    placeholder="아이디"
                                    className="txt_id"
                                    title="아이디"
                                />
                            </div>
                            <div className="form-group mt10">
                                <input
                                    type="password"
                                    name="password"
                                    id="upw"
                                    required
                                    placeholder="비밀번호"
                                    title="비밀번호"
                                    className="form-txt_pw"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="keepid_opt" className="checkbox-inline">
                                    <input
                                        type="checkbox"
                                        name="keep_signed"
                                        id="keepid_opt"
                                    />
                                로그인 유지
                            </label>
                                <label htmlFor="keepid_opt2" className="checkbox-inline">
                                    <input
                                        type="checkbox" id="keepid_opt2" />{" "}
                                아이디 기억
                            </label>
                            </div>
                            <button type="submit" className="sum">
                                <span >로그인</span>
                            </button>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>;
};
