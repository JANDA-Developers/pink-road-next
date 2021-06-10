import React, { useState } from "react";
import { usePageEdit } from "../hook/usePageEdit";
import { useEmailFindByInfo, usePasswordFindByPhone } from "../hook/useUser";
import SubTopNav from "../layout/components/SubTop";
import { getStaticPageInfo, Ipage } from "../utils/page";
import defaultPageInfo from "../info/findmember.json";
import { autoHypenPhone } from "../utils/formatter";
import { VerifiEamilModal } from "../components/verifiModal/VerifiEmailModal";
import { VerificationTarget } from "../types/api";
import { closeModal, openModal } from "../utils/popUp";
import { useVerification } from "../hook/useVerification";

interface IProp {}

export const getStaticProps = getStaticPageInfo("findmember");
export const Search: React.FC<Ipage> = (pageInfo) => {
    if (typeof window === "undefined") return <div />;
    const editTools = usePageEdit(pageInfo, defaultPageInfo);
    const verifiHook = useVerification();
    const [info, setInfo] = useState({
        email: "",
        name: "",
        phoneNumber: "",
    });

    const { getData } = useEmailFindByInfo({
        onCompleted: ({ EmailFindByInfo }) => {
            if (EmailFindByInfo.ok)
                alert(
                    `회원님의 이메일을 찾았습니다.` +
                        EmailFindByInfo.data?.foundEmails.join(", ")
                );
            else if ((EmailFindByInfo.data?.foundEmails.length || 0) < 1)
                alert("회원님의 정보를 찾을 수 없습니다.");
        },
    });
    const { getData: getPassword } = usePasswordFindByPhone({
        onCompleted: ({ PasswordFindByPhone }) => {
            if (PasswordFindByPhone.ok) {
                alert(
                    "임시 패스워드가 성공적으로 발신 되었습니다. \n 로그인후 마이페이지에서 비밀번호를 변경 해주세요."
                );
            }
        },
    });

    const handleEmailFind = () => {
        if (!info.name) {
            alert("성함을 입력해 주세요.");
            return;
        }
        if (!info.phoneNumber) {
            alert("휴대폰 번호를 입력해 주세요.");
            return;
        }
        getData({
            variables: { name: info.name, phoneNumber: info.phoneNumber },
        });
    };

    const handleGetPassworByPhone = () => {
        if (!info.email) alert("이메일을 입력 해주세요");
        getPassword({
            variables: {
                email: info.email,
                target: VerificationTarget.PHONE,
            },
        });
    };

    const handleGetPassworByEmail = () => {
        if (!info.email) alert("이메일을 입력 해주세요");
        getPassword({
            variables: {
                email: info.email,
                target: VerificationTarget.EMAIL,
            },
        });
    };

    const isVerified = verifiHook.verifiData?.isVerified;

    return (
        <div>
            <SubTopNav pageTools={editTools}>
                <li className="homedeps1">Member</li>
                <li className="homedeps2">
                    <a href="/">아이디/비밀번호 찾기</a>
                </li>
            </SubTopNav>
            <div className="findmembers_box w1200">
                <div className="con_box">
                    <div className="left">
                        <h3>아이디 찾기</h3>
                        <span className="info">
                            아이디를 잊으셨나요? 가입시 등록한 개인 정보로 인증
                            절차를 거치면 확인이 가능합니다.
                        </span>

                        <div className="idfind_box in_box">
                            <h4>이름</h4>
                            <div className="input_box">
                                <input
                                    onChange={(e) => {
                                        const val = e.currentTarget.value;
                                        info.name = val;
                                        setInfo({ ...info });
                                    }}
                                    value={info.name}
                                    type="text"
                                    placeholder="이름을 입력해 주세요."
                                />
                            </div>
                            <h4>휴대폰번호</h4>
                            <div className="input_box">
                                <input
                                    readOnly={isVerified}
                                    onChange={(e) => {
                                        const val = e.currentTarget.value;
                                        info.phoneNumber = val;
                                        setInfo({ ...info });
                                    }}
                                    value={autoHypenPhone(info.phoneNumber)}
                                    type="text"
                                    placeholder="가입시 입력한 휴대폰번호를 입력해 주세요."
                                />
                            </div>
                            <div className="certification_sec ">
                                <button
                                    onClick={openModal("#emailVerifi")}
                                    className="btn medium mr20"
                                >
                                    인증하기
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <h3>비밀번호 찾기</h3>
                        <span className="info">
                            비밀번호를 잊으셨나요? 가입 시 등록한
                            이메일(아이디)을 입력하시면, 임시 비밀번호가
                            발송됩니다.{" "}
                        </span>
                        <div className="pwfind_box in_box">
                            <h4>아이디</h4>
                            <div className="input_box">
                                <input
                                    onChange={(e) => {
                                        const val = e.currentTarget.value;
                                        info.email = val;
                                        setInfo({ ...info });
                                    }}
                                    value={info.email}
                                    type="text"
                                    placeholder="아이디를 입력해 주세요."
                                />
                            </div>
                            <div className="certification_sec">
                                <button
                                    onClick={handleGetPassworByPhone}
                                    className="btn mr20"
                                >
                                    임시 비밀번호 문자로 받기
                                </button>
                                <button
                                    onClick={handleGetPassworByEmail}
                                    className="btn"
                                >
                                    임시 비밀번호 이메일로 받기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info__txt">
                    <dl>
                        <dt>아이디와 비밀번호 찾기에 어려움이 있으신가요?</dt>
                        <dd>
                            <ul className="bul_list">
                                <li>
                                    <span className="dot_arr">
                                        혹시, 스팸 문자함에 임시비밀번호가
                                        발급된 문자가 있는지 확인해 주세요.
                                    </span>
                                </li>
                                <li>
                                    <span className="dot_arr">
                                        혹시, 휴대폰이 통신 불가능 아닌지
                                        비행기모드가 아닌지 확인해 주세요.
                                    </span>
                                </li>
                                <li>
                                    <span className="dot_arr">
                                        임시비밀번호로 로그인 후 정보수정에서
                                        비밀번호를 변경하시기 바랍니다.
                                    </span>
                                </li>
                                <li>
                                    <span className="dot_arr">
                                        기타문의 사항은 고객센터 문의하기
                                        게시판을 이용해주시기 바랍니다.
                                    </span>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>
            <VerifiEamilModal
                key={info.phoneNumber}
                defaultPayload={info.phoneNumber}
                target={VerificationTarget.PHONE}
                duplicateCheck
                onSuccess={() => {
                    closeModal("#emailVerifi")();
                    handleEmailFind();
                }}
                verifiHook={{
                    ...verifiHook,
                }}
            />
        </div>
    );
};

export default Search;
