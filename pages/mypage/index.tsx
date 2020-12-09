import React, { useContext, useEffect, useState } from 'react';
import { MypageLayout } from 'layout/MypageLayout';
import { AppContext } from '../_app';
import { getItemCount } from '../../utils/Storage';
import { arraySum } from '../../utils/math';
import { setLastMonthCount, setThisMonthCount } from '../../components/mypage/countSetter';
import { GENDER } from '../../types/api';
import { autoHypenPhone, cc_format } from "../../utils/formatter";
import { useUserUpdate } from '../../hook/useUserUpdate';
import { useMyProfile } from '../../hook/useMyProfile';
import { auth } from '../../utils/with';
import { ONLY_LOGINED } from '../../types/const';
import DaumPostcode from 'react-daum-postcode';
import { Modal } from '../../components/modal/Modal';
import { openModal } from '../../utils/popUp';
import { useVerification } from '../../hook/useVerification';
import { toast } from 'react-toastify';
import { GET_CONTEXT } from '../../apollo/gql/queries';
import { getOperationName } from '@apollo/client/utilities';
import { LastMonthBooking } from '../../components/static/LastMonthBooking';
import { ThisMonthBooking } from '../../components/static/ThisMonthBooking';

let SEND_LIMIT = 3;
interface IProp { }
export const MyPageProfile: React.FC<IProp> = () => {
    const { userUpdate } = useUserUpdate({
        refetchQueries: [getOperationName(GET_CONTEXT) || ""],
    });
    const { myProfile: defaultProfile } = useContext(AppContext);
    const { verifyComplete, verify } = useVerification();
    const [code, setCode] = useState("");
    const [nextPhoneNum, setNextPhoneNum] = useState("");

    const { data,
        setData,
        handlePassword,
        handleCompleteFindAddress,
        handleTextData,
        toggleCheck,
        handleChangeRegistration,
        hiddenFileInput
    } = useMyProfile(defaultProfile!)
    const { nextPw, profile, pw, busiRegistration } = data;
    const { setPw, setProfile } = setData;
    const {
        address,
        name,
        address_detail,
        busi_num,
        acceptEamil,
        acceptSms,
        busi_department,
        bank_name,
        busi_contact,
        account_number } = profile;
    const {
        _id,
        products,
        gender,
        bookings,
        is_froreginer,
        email,
        phoneNumber,
        isVerifiedPhoneNumber,
        busi_name,
        is_priv_corper } = defaultProfile!;

    const productsCount = products.length;
    const sellCounts = arraySum(products.map(p => p.bookings.length));
    const isFemale = gender === GENDER.FEMALE;

    const handleUpdate = () => {
        userUpdate({
            params: {
                ...profile
            },
            _id,
            pw
        })
    }

    const handleUpdatePhone = (phoneNumber: string) => {
        userUpdate({
            params: {
                phoneNumber
            },
            _id,
            pw
        })
    }

    const handleRetire = () => {

    }

    let verifyTemplate = (verificationId: string) => {

        if (code.length < 4) {
            toast("인증번호를 입력 바랍니다.");
            return;
        }
        verifyComplete({
            code,
            payload: phoneNumber,
            verificationId
        })
    }

    let handleVerifyComplete: () => any = () => { };

    const handleVerifi = () => {
        if (SEND_LIMIT < 0) {
            alert("더이상 요청할 수 없습니다 화면을 새로고침 해주세요.");
            return;
        }
        verify(phoneNumber, (data) => {
            SEND_LIMIT = SEND_LIMIT - 1;
            const verifiId = data?.VerificationStart.data?._id;
            if (!verifiId) throw Error("Verifi start fail");
            handleVerifyComplete = verifyTemplate.bind(verifyTemplate, verifiId);
        })
    }

    const handleChangePhoneNumber = () => {
        openModal("#phoneChangeModal")()
    }
    const handleVerifiPhoneNumber = () => {
        openModal("#phoneVerifiModal")()
    }

    const handleFindAdress = () => {

    }

    const pwSameCheck = () => nextPw.password && nextPw.password === nextPw.passwordCheck;

    const [state, setState] = useState<"partnerB" | "noraml" | "indiPartner">("partnerB");

    const isPartnerB = state === "partnerB"
    const isPartner = state === "indiPartner"
    const isBuyer = state === "noraml";
    const isSeller = isPartnerB || isPartner;


    return <MypageLayout >
        <button style={{
            color: isPartnerB ? "red" : undefined
        }} onClick={() => {
            setState("partnerB")
        }}>파트너B</button>
        <button style={{
            color: isPartner ? "red" : undefined
        }} onClick={() => {
            setState("indiPartner")
        }}>파트너</button>
        <button style={{
            color: isBuyer ? "red" : undefined
        }} onClick={() => {
            setState("noraml")
        }}>구매자</button>
        <div className="in">
            <h4>회원정보</h4>
            <div className="mypage_page">
                <div className="box1">
                    <div className="top_info">
                        <ul className={`line${isSeller ? "5" : "4"}`}>
                            {isSeller && <>
                                <li className="ct">
                                    <LastMonthBooking />
                                    <p>저번달 총 매량</p>
                                </li>
                                <li className="ct">
                                    <span >1</span>
                                    <p>정산 신청건</p>
                                </li>
                                <li className="ct">
                                    <ThisMonthBooking />
                                    <p>이번달 총 매량</p>
                                </li>
                                <li className="ct">
                                    <span>{sellCounts}</span>
                                    <p>
                                        총 판매 수<i className="jandaicon-info2" />
                                    </p>
                                </li>
                                <li className="ct">
                                    <span>{productsCount}</span>
                                    <p>상품 등록 수</p>
                                </li>
                            </>
                            }
                            {isSeller || <>
                                <li className="ct">
                                    <span>{bookings.length}</span>
                                    <p>
                                        총 구매 수<i className="jandaicon-info2" />
                                    </p>
                                </li>
                                <li className="ct">
                                    <span>-</span>
                                    <p>
                                        총 접속 수
                                </p>
                                </li>
                                <li className="ct">
                                    <span>-</span>
                                    <p>
                                        참여한 이벤트 수
                                </p>
                                </li>
                                <li className="ct">
                                    {getItemCount()}
                                    {/* <span>{getBracket()?.length}</span> */}
                                    <p>
                                        장바구니
                                </p>
                                </li>
                            </>
                            }
                        </ul>
                    </div>
                </div>
                <div className="box2">
                    <div className="box_left">
                        <div className="title">
                            <h5>기본정보</h5>
                        </div>
                    </div>
                    <div className="box_right">
                        <ul>
                            <li>
                                <div className="title">별칭</div>
                                <div className="txt">
                                    <div className="input_relative">
                                        <input
                                            value={nextPw.password}
                                            onChange={(e) => {
                                                const pw = e.currentTarget.value
                                                setPw(pw);
                                            }}
                                            type="password"
                                            className={`form-control w100`}
                                            placeholder="닉네임을 입력 해주세요"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="title">이메일</div>
                                <div className="txt">{email}</div>
                            </li>
                            <li>
                                <div className="title">비밀번호</div>
                                <div className="txt">
                                    <div className="input_relative">
                                        <input
                                            value={nextPw.password}
                                            onChange={(e) => {
                                                const pw = e.currentTarget.value
                                                setPw(pw);
                                            }}
                                            type="password"
                                            className={`form-control w100`}
                                            placeholder="변경할 비밀번호를 입력 해주세요"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="title">비밀번호 확인</div>
                                <div className="txt">
                                    <div className="input_relative">
                                        <input
                                            value={nextPw.passwordCheck}
                                            onChange={handlePassword("passwordCheck")}
                                            type="password"
                                            className={`form-control w100 ${pwSameCheck() && "ok"}`}
                                            placeholder="변경할 비밀번호를 다시 입력 해주세요"
                                        />
                                        <i className="jandaicon-check btn_in" />
                                    </div>
                                </div>
                            </li>
                            {isSeller ||
                                <li>
                                    <div className="title">이름</div>
                                    <div className="txt">
                                        <strong>{name || ""}</strong>
                                        <ul className="country_check">
                                            <li className={`c_in ${is_froreginer || "on"}`}>내국인</li>
                                            <li className={`c_out ${is_froreginer && "on"}`}>외국인</li>
                                        </ul>
                                    </div>
                                </li>
                            }
                            {isSeller ||
                                <li>
                                    <div className="title">성별</div>
                                    <div className="txt">
                                        <ul className="gender_check">
                                            <li className={`${isFemale && "on"} female`}>여</li>
                                            <li className={`${isFemale || "on"} men`}>남</li>
                                        </ul>
                                    </div>
                                </li>
                            }
                            <li>
                                <div className="title">연락처</div>
                                <div className="txt">
                                    <span className="w80">{autoHypenPhone(phoneNumber)}</span>
                                    <button onClick={isVerifiedPhoneNumber ? handleChangePhoneNumber : handleVerifiPhoneNumber} type="button" className="btn btn_mini">
                                        {isVerifiedPhoneNumber ? "변경" : "인증"}
                                    </button>
                                </div>
                            </li>
                            {isSeller ||
                                <li>
                                    <div className="title">주소</div>
                                    <div className="txt line2">

                                        <input onChange={handleTextData("address")} value={address} type="text" className="form-control w70" />
                                        <button onClick={openModal("#addressFindModal")} type="button" className="btn btn_mini">
                                            주소찾기
                                    </button>
                                        <input
                                            value={address_detail}
                                            onChange={handleTextData("address_detail")}
                                            type="text"
                                            className="form-control w100"
                                            placeholder="상세주소"
                                        />
                                    </div>
                                </li>
                            }
                        </ul>
                    </div>
                </div>

                {isSeller && <div className="box2">
                    <div className="box_left">
                        <div className="title">
                            <h5>{isPartnerB ? "기업정보" : "개인파트너정보"}</h5>
                        </div>
                    </div>
                    <div className="box_right">
                        <ul>
                            {isPartnerB && <li>
                                <div className="title">파트너명(회사명)</div>
                                <div className="txt">{busi_name}</div>
                            </li>}
                            {isPartnerB && <li>
                                <div className="title">사업자번호</div>
                                <div className="txt">
                                    <select onChange={(e) => {
                                        const is_priv_corper = e.currentTarget.value === "busi";
                                        profile.is_priv_corper = is_priv_corper;
                                        setProfile({ ...profile });
                                    }} value={is_priv_corper ? "indi" : "busi"} className="w20">
                                        <option value={"indi"}>개인</option>
                                        <option value={"busi"} >법인</option>
                                    </select>
                                    <input
                                        value={busi_num}
                                        type="text"
                                        className="form-control w70"
                                        placeholder="사업자번호를 입력해주세요."
                                    />
                                </div>
                            </li>
                            }
                            <li>
                                <div className="title">대표 전화번호</div>
                                <div className="txt">
                                    <input
                                        value={busi_contact}
                                        type="text"
                                        className="form-control w100"
                                        placeholder="전화번호를 입력해주세요."
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="title">주소</div>
                                <div className="txt line2">

                                    <input onChange={handleTextData("address")} value={address} type="text" className="form-control w70" />
                                    <button onClick={openModal("#addressFindModal")} type="button" className="btn btn_mini">
                                        주소찾기
                                    </button>
                                    <input
                                        value={address_detail}
                                        onChange={handleTextData("address_detail")}
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
                                        onChange={handleTextData("busi_department")}
                                        type="text"
                                        className="form-control w20"
                                        placeholder="부서명"
                                    />
                                    <input
                                        value={name}
                                        onChange={handleTextData("name")}
                                        type="text"
                                        className="form-control w50"
                                        placeholder="담당자를 입력해주세요."
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="title">담당자 연락처</div>
                                <div className="txt">
                                    <span className="w80">{phoneNumber}</span>
                                    <button onClick={handleChangePhoneNumber} type="button" className="btn btn_mini">
                                        변경
                                    </button>
                                </div>
                                {/* 변경시 변경아이콘 눌러 popup띄워서 핸드폰번호 인증절차 거치게됨 */}
                            </li>
                            <li>
                                <div className="title">사업자등록증</div>
                                <div className="txt">
                                    <span className="w80 upload_out_box">
                                        {busiRegistration?.name}
                                    </span>
                                    <button onClick={() => { hiddenFileInput.current?.click() }} type="button" className="btn btn_mini">
                                        업로드
                                    </button>
                                    <input onChange={handleChangeRegistration} ref={hiddenFileInput} hidden type="file" />
                                </div>
                            </li>
                            <li>
                                <div className="title">정산계좌</div>
                                <div className="txt">
                                    <div className="line_first">
                                        <input
                                            value={bank_name}
                                            type="text"
                                            className="form-control w20"
                                            placeholder="은행명"
                                        />
                                        <input
                                            onChange={(e) => {
                                                const format = cc_format(e.currentTarget.value);
                                                profile.account_number = format;
                                                setProfile({ ...profile })
                                            }}
                                            value={cc_format(account_number)}
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
                }
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
                                    <input onChange={toggleCheck("acceptSms")} checked={acceptSms} type="checkbox" />
                                    <span>SNS 수신 동의를 합니다.</span>
                                </div>
                            </li>
                            <li>
                                <div className="title">E-mail 수신동의</div>
                                <div className="txt tr">
                                    <input onChange={toggleCheck("acceptEamil")} checked={acceptEamil} type="checkbox" />
                                    <span>E-mail 수신 동의를 합니다.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="fin">
                    <div className="float_left">
                        <button onClick={handleRetire} type="submit" className="btn medium color01">
                            회원탈퇴
                        </button>
                    </div>
                    <div className="float_right">
                        <button onClick={handleUpdate} type="submit" className="btn medium">
                            수정
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Modal id="phoneVerifiModal" title="핸드폰 번호 인증">
            <div className="title">인증코드</div>
            <input placeholder="인증코드" value={code} onChange={(e) => {
                setCode(e.currentTarget.value)
            }} />
            <button onClick={handleVerifyComplete}>
                인증하기
            </button>
            <button onClick={handleVerifi}>
                인증번호 발송
            </button>
        </Modal>
        <Modal id="phoneChangeModal" title="핸드폰 번호 변경">
            <input placeholder="변경할 핸드폰 번호" value={nextPhoneNum} onChange={(e) => {
                setNextPhoneNum(e.currentTarget.value);
            }} />
            <input placeholder="비밀번호" value={pw} onChange={(e) => {
                setPw(e.currentTarget.value);
            }} />
            <button onClick={handleChangePhoneNumber}>
                변경하기
            </button>
        </Modal>
        <Modal id="addressFindModal" title="주소찾기">
            <DaumPostcode onComplete={handleCompleteFindAddress} />
        </Modal>
    </MypageLayout>;
};



export default auth(MyPageProfile)(ONLY_LOGINED);