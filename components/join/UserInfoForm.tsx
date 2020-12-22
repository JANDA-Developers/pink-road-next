import React, { useContext, useState } from 'react'
import DaumPostcode from 'react-daum-postcode';
import DayPicker, { DayModifiers } from 'react-day-picker';
import dayjs from 'dayjs'
import RegisterCheck from './RegisterCheck';
import Calendar from '../common/icon/CalendarIcon';
import 'react-day-picker/lib/style.css';
import { GENDER } from '../../types/api';
import { fromMonth, toMonth, useJoin } from '../../hook/useJoin';
import { YearMonthForm } from './YearMonthForm';
import { JoinContext } from '../../pages/join';




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
        dayPickerMonth,
        birthdayPicker,
        setBirthDayPicker,
        handleNationality,
        errDisplay,
        handleBusinessLicense
    } = useJoin()


    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                e.persist();

            }}>
                <div className="information_box">
                    {/* 회원정보:개인 */}
                    <h5>
                        {isIndi && "개인 회원"}
                        {isPartenerB && "기업파트너 회원"}
                        {isPartner && "개인파트너 회원"}
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
                        <input
                            type="text"
                            className="w100"
                            placeholder="닉네임을 입력해주세요"
                            name="name"
                            value={data.nickName}
                            onChange={handleData("nickName")}
                        />
                    </div>
                    <div className="name_wrap">
                        <label>
                            <i className="important_icon" />
                        이름
                    </label>
                        <span className={`er red_font ${errDisplay.name && `on`}`}>*한글 이외에 입력이 안됩니다.</span>
                        <input
                            type="text"
                            className="w100"
                            placeholder="이름을 입력해주세요"
                            name="name"
                            value={data.name}
                            onChange={handleData("name")}
                        />
                    </div>
                    {isPartenerB || <div className="ph_wrap">
                        <label>
                            <i className="important_icon" />
                        연락처
                        </label>
                        <span className={`er red_font ${errDisplay.phoneNumber && `on`}`}>*숫자이외에 입력이 안됩니다.</span>
                        <div className="w100">
                            <input
                                type="text"
                                className="w100"
                                placeholder="-를 제외한 휴대폰 번호를 입력해주세요"
                                name="contact"
                                value={data.phoneNumber}
                                onChange={handleData("phoneNumber")}
                            />
                            {/* <button type="button" className="btn btn_mini">
                                인증
                            </button> */}
                        </div>
                    </div>}

                    <hr />
                    <h4>
                        {isIndi && "추가정보"}
                        {isPartenerB && "기업정보"}
                        {isPartner && "개인파트너 정보"}
                    </h4>

                    {isIndi &&
                        <div>
                            <div className="ph_wrap">
                                <label>성별</label>
                                <span className="er red_font">
                                    *두개의 성별중 하나를 선택하여 주세요.
                                </span>
                                <div className="w100">
                                    <ul className="gender_check">
                                        <li className={`female ${data.gender == GENDER.FEMALE ? "on" : ""}`}
                                            onClick={handleGender(GENDER.FEMALE)}>여</li>
                                        <li className={`men ${data.gender == GENDER.MAIL ? "on" : ""}`}
                                            onClick={handleGender(GENDER.MAIL)}>남</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ph_wrap">
                                <label>생년월일</label>
                                <span className={`er red_font ${errDisplay.brith_date && `on`}`}>*숫자이외에 입력이 안됩니다.</span>
                                <div className="w100 join_birthday">
                                    <input
                                        type="text"
                                        name="birthday"
                                        className="w70"
                                        placeholder="생년월일을 입력해주세요."
                                        value={data.brith_date}
                                        onChange={handleData("brith_date")}
                                    />
                                    <i className="calendar" onClick={handleBirthPicker}>
                                        <Calendar />
                                    </i>
                                    <DayPicker
                                        className={`join_birthdayPick ${birthdayPicker && `on`}`}
                                        month={dayPickerMonth}
                                        fromMonth={fromMonth}
                                        toMonth={toMonth}
                                        onDayClick={handleDayClick}
                                        canChangeMonth={false}
                                        captionElement={({ date, localeUtils }) => (
                                            <YearMonthForm
                                                date={date}
                                                localeUtils={localeUtils}
                                                onChange={handleDayPickerMonth}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                    {isPartenerB ||
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
                    }
                    <div className="ph_wrap daum_addresss_wrap">
                        <label>주소</label>
                        <span className="er red_font">*주소가 정확하지 않습니다.</span>
                        <div className="w100">
                            <input type="text" className="w80" name="address"
                                value={data.address}
                                onChange={handleData("address")} />
                            <button type="button" className="btn btn_mini" onClick={handleAddress}>
                                찾기
                            </button>
                        </div>
                        <div className="w100 mt5">
                            <input type="text" className="w100" name="address_detail" placeholder="상세주소"
                                value={data.address_detail}
                                onChange={handleData("address_detail")} />
                        </div>

                        {/* <div className={`daum_addresss ${daumAddress && 'on'}`}>
                            <DaumPostcode
                                onComplete={handleDaumPostalComplete}
                            />
                        </div> */}
                    </div>



                    {isPartenerB &&
                        <div>
                            <div className="ph_wrap">
                                <label>
                                    <i className="important_icon" />
                            파트너명(회사명)
                        </label>
                                <span className="er red_font">*숫자는 입력이 불가능합니다.</span>
                                <input
                                    type="text"
                                    className="w100"
                                    name="name_company"
                                    placeholder="업체명을 입력해주세요"
                                    value={data.busi_name || ""}
                                    onChange={handleData("busi_name")}
                                />
                            </div>
                            <div className="ph_wrap">
                                <label>
                                    <i className="important_icon" />
                            사업자번호
                        </label>
                                <span className="er red_font">
                                    *사업자번호가 바르지 않습니다.
              </span>
                                <div className="w100">
                                    <select className="w20" value={data.is_priv_corper ? "true" : "false"} onChange={handleData("is_priv_corper")}>
                                        <option value={"false"}>개인</option>
                                        <option value={"true"}>법인</option>
                                    </select>
                                    <input
                                        type="text"
                                        className="form-control w70"
                                        name="business_number"
                                        placeholder="사업자번호를 입력해주세요."
                                        value={data.busi_num || ""}
                                        onChange={handleData("busi_num")}
                                    />
                                </div>
                            </div>
                            <div className="ph_wrap">
                                <label>대표 전화번호</label>
                                <span className={`er red_font ${errDisplay.busi_contact && `on`}`}>*숫자만 입력이 가능합니다.</span>
                                <div className="w100">
                                    <input
                                        type="text"
                                        className="form-control w100"
                                        name="contact"
                                        placeholder="전화번호를 입력해주세요."
                                        value={data.busi_contact || ""}
                                        onChange={handleData("busi_contact")}
                                    />
                                </div>
                            </div>
                            <div className="ph_wrap">
                                <label>담당자</label>
                                <span className="er red_font">*숫자를 입력 할 수 없습니다.</span>
                                <div className="w100">
                                    <input
                                        type="text"
                                        className="form-control w20"
                                        placeholder="부서명"
                                        name="department"
                                        value={data.busi_name || ""}
                                        onChange={handleData("busi_name")}
                                    />{" "}
                                    <input
                                        type="text"
                                        className="form-control w70"
                                        name="incharge_name"
                                        placeholder="담당자를 입력해주세요."
                                        value={data.manageName || ""}
                                        onChange={handleData("manageName")}
                                    />
                                </div>
                            </div>
                            <div className="ph_wrap">
                                <label>담당자 연락처</label>
                                <span className="er red_font">*숫자이외에 입력이 안됩니다.</span>
                                <div className="w100">
                                    <input
                                        type="text"
                                        className="w80"
                                        name="incharge_number"
                                        placeholder="-를 제외한 휴대폰 번호를 입력해주세요"
                                        value={data.manageContact || ""}
                                        onChange={handleData("manageContact")}
                                    />
                                    <button type="button" className="btn btn_mini">
                                        인증
                                    </button>
                                </div>
                            </div>
                            <div className="ph_wrap">
                                <label>
                                    <i className="important_icon" />
                                사업자등록증
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
                                        onChange={handleBusinessLicense}></input>
                                    {/* <button type="button" className="btn btn_mini">
                  업로드
                </button> */}
                                </div>
                            </div>
                        </div>
                    }
                    {isIndi ||
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
                                    style={{ minWidth: 55 }}
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
                    }
                </div>
                <RegisterCheck
                    registerInfo={data}
                />
            </form>
        </>

    )
}

export default UserInfoForm
