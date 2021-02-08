import React, { useContext, useEffect } from 'react'
import DaumPostcode from 'react-daum-postcode';
import DayPicker from 'react-day-picker';
import RegisterCheck from './RegisterCheck';
import Calendar from '../common/icon/CalendarIcon';
import 'node_modules/react-day-picker/lib/style.css';
import { GENDER } from '../../types/api';
import { fromMonth, toMonth, useJoin } from '../../hook/useJoin';
import { YearMonthForm } from './YearMonthForm';
import { JoinContext } from '../../pages/member/join';
import { autoHypenPhone } from '../../utils/formatter';

const UserInfoForm: React.FC = () => {


    const {
        isIndi,
        isPartenerB,
        isPartner
    } = useContext(JoinContext)!;
    const {
        data,
        daumAddress,
        handleAddress,
        handleBirthPicker,
        handleData,
        handleDaumPostalComplete,
        handleDayClick,
        handleDayPickerMonth,
        handleGender,
        handleBankImg,
        dayPickerMonth,
        birthdayPicker,
        setBirthDayPicker,
        handleNationality,
        errDisplay,
        setDaumAddress,
        handleBusinessLicense,
        nickNameChecked,
        handleNickNameCheck
    } = useJoin()

    console.log("Outdata")
    console.log({ data })
    console.log(handleData("name"))

    useEffect(() => {
        const hideDaumAddress = () => {
            setDaumAddress(false)
            setBirthDayPicker(false)
        }
        window.addEventListener("click", hideDaumAddress)
        return () => {
            window.removeEventListener("click", hideDaumAddress)
        }
    }, [])

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                e.persist();

            }}>
                <div className="information_box">
                    {/* 회원정보:개인 */}
                    <h5>
                        가이드정보
                        <span className="info_top">
                            <i className="important_icon" />는 필수항목입니다.
                        </span>
                    </h5>
                    <div className="ph_wrap">
                        <label>
                            <i className="important_icon" />
                        이메일
                    </label>
                        <span className={`er red_font ${errDisplay.email && `on`}`}>
                            *해당 이메일은 이미 사용중입니다.
                    </span>
                        <input
                            type="email"
                            className="w100"
                            placeholder="email@email.com"
                            name="email"
                            readOnly
                            value={data.email}
                        />
                    </div>
                    <div className="pw_wrap">
                        <label>
                            <i className="important_icon" />
                        비밀번호
                    </label>
                        <span className={`er red_font ${errDisplay.pw && `on`}`}>
                            * 비밀번호는 특수문자 1개이상 숫자가 포함된 7~15 자리의 영문 숫자 조합이여야 합니다
                    </span>
                        <input
                            type="password"
                            className="w100"
                            placeholder="비밀번호를 입력해주세요"
                            name="password"
                            value={data.pw}
                            onChange={handleData("pw")}
                        />
                    </div>
                    <div className="pw_wrap_c">
                        <label>
                            <i className="important_icon" />
                        비밀번호 확인
                    </label>
                        <span className="er red_font">
                            *비밀번호가 일치하지 않습니다.
                    </span>
                        <input
                            type="password"
                            className="w100"
                            placeholder="비밀번호 확인"
                            name="passwordChk"
                            value={data.pwcheck}
                            onChange={handleData("pwcheck")}
                        />
                    </div>
                    <div className="name_wrap">
                        <label>
                            <i className="important_icon" />
                        닉네임
                        </label>
                        <span className={`er red_font ${errDisplay.nickName && `on`}`}>*특수문자를 입력하지 말아주세요.</span>
                        <div>
                            <input
                                type="text"
                                className="w80"
                                placeholder="닉네임을 입력해주세요"
                                name="name"
                                value={data.nickName}
                                onChange={handleData("nickName")}
                            />
                            <button style={{ lineHeight: "100%" }} onClick={handleNickNameCheck} type="button" className={`btn btn_mini ${nickNameChecked && "ok"}`}>{nickNameChecked ? "사용가능" : "중복확인"} </button>
                        </div>
                    </div>
                    <div className="name_wrap">
                        <label>
                            <i className="important_icon" />
                        이름
                    </label>
                        <span className={`er red_font ${errDisplay.name && `on`}`}>*한글 이외에 입력이 안됩니다.</span>
                        <input
                            id="NameInput"
                            type="text"
                            className="w100"
                            placeholder="이름을 입력해주세요"
                            value={data.name || ""}
                            onChange={handleData("name")}
                        />
                    </div>
                    <div className="ph_wrap">
                        <label>
                            <i className="important_icon" />
                        연락처
                        </label>
                        <span className={`er red_font ${errDisplay.phoneNumber && `on`}`}>*숫자이외에 입력이 안됩니다.</span>
                        <div className="w100">
                            <input
                                id="PhoneNumberInput"
                                type="text"
                                className="w100"
                                placeholder="-를 제외한 휴대폰 번호를 입력해주세요"
                                name="contact"
                                value={autoHypenPhone(data.phoneNumber)}
                                onChange={handleData("phoneNumber")}
                            />
                            {/* <button type="button" className="btn btn_mini">
                                인증
                            </button> */}
                        </div>
                    </div>
                    <hr />
                    <div className="ph_wrap">
                        <label>내국인/외국인</label>
                        <span className="er red_font">*둘중 한개를 선택해 주세요.</span>
                        <div className="w100">
                            <ul className="country_check">
                                <li className={`c_in ${!data.is_froreginer ? "on" : ""}`}
                                    onClick={handleNationality(true)}>내국인</li>
                                <li className={`c_out ${data.is_froreginer ? "on" : ""}`}
                                    onClick={handleNationality(false)}>외국인</li>
                            </ul>
                        </div>
                    </div>
                    <div className="ph_wrap daum_addresss_wrap">
                        <label>주소</label>
                        <span className="er red_font">*주소가 정확하지 않습니다.</span>
                        <div onClick={handleAddress} className="w100">
                            <input type="text" className="w80" name="address"
                                value={data.address}
                                onChange={handleData("address")} />
                            <button style={{ lineHeight: "100%" }} type="button" className="btn btn_mini" >
                                찾기
                            </button>
                        </div>
                        <div className="w100 mt5">
                            <input id="AddressInput" type="text" className="w100" name="address_detail" placeholder="상세주소"
                                value={data.address_detail}
                                onChange={handleData("address_detail")} />
                        </div>
                        <div className={`daum_addresss ${daumAddress && 'on'}`}>
                            <DaumPostcode
                                onComplete={handleDaumPostalComplete}
                            />
                        </div>
                    </div>
                    <div className="ph_wrap">
                        <label>
                            <i className="important_icon" />
                                통장사본
                                </label>
                        <span className="er red_font">
                            *jpg, gif, png 이외에 업로드 불가능합니다.
                                </span>
                        <div className="w100 apply_relative">
                            <span className="w80 upload_out_box">
                                {data.busiRegistration?.name}
                            </span>

                            <label htmlFor="business_license" className="cus_file_busi_license">
                                업로드
                                    </label>
                            <input type="file" name="business_license" id="business_license"
                                className="file_busi_license"
                                onChange={handleBankImg}></input>
                        </div>
                    </div>
                    <div className="ph_wrap">
                        <label>정산계좌</label>
                        <span className="er red_font">
                            *정보를 정확하게 입력해주세요.
                            </span>
                        <div className="w100">
                            <input
                                type="text"
                                className="w10"
                                name="bank_name"
                                style={{ minWidth: 55, marginRight: "5px" }}
                                placeholder="은행"
                                value={data.bank_name || ""}
                                onChange={handleData("bank_name")}
                            />
                            <input
                                type="text"
                                className="w80"
                                name="bank_account"
                                placeholder="계좌번호"
                                value={data.account_number || ""}
                                onChange={handleData("account_number")}
                            />
                        </div>
                    </div>
                </div>
                <RegisterCheck
                    registerInfo={data}
                />
            </form>
        </>

    )
}

export default UserInfoForm


