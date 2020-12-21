import React, { useState, useRef, useContext } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { useJoin } from '../../hook/useJoin';
import { JoinContext } from '../../pages/join';
import { UserRole } from '../../types/api';
import RegisterCheck from './RegisterCheck';

const FormPartnerBusi: React.FC = () => {
  const {
    birthdayPicker,
    data,
    daumAddress,
    dayPickerMonth,
    handleAddress,
    handleBirthPicker,
    handleData,
    handleDaumPostalComplete,
    handleDayClick,
    handleDayPickerMonth,
    handleGender,
    handleNationality,
    handleBusinessLicense,
    setBirthDayPicker,
    errDisplay
  } = useJoin()

  return (
    <>
      <div className="information_box">
        {/* 회원정보:기업파트너 */}
        <h5>
          기업파트너 회원
              <span className="info_top">
            <i className="important_icon" />는 필수항목입니다.
              </span>
        </h5>
        <div className="ph_wrap">
          <label>
            <i className="important_icon" />
                이메일
              </label>
          <span className={`er red_font `}>
            * 해당 이메일은 이미 사용중입니다.
              </span>
          <input
            type="email"
            className="w100"
            name="email"
            placeholder="email@email.com"
            value={data.email || ""}
            onChange={handleData("email")}
          />
        </div>
        <div className="pw_wrap">
          <label>
            <i className="important_icon" />
                비밀번호
              </label>
          <span className={`er red_font ${errDisplay.pw && `on`}`}>
            *비밀번호는 특수문자 1개이상 숫자가 포함된 7~15 자리의 영문 숫자 조합이여야 합니다
              </span>
          <input
            type="password"
            className="w100"
            name="password"
            placeholder="비밀번호를 입력해주세요"
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
            name="passwordChk"
            placeholder="비밀번호 확인"
            onChange={handleData("pwcheck")}
          />
        </div>
        <hr />
        <h4>기업정보</h4>
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
          <span className={`er red_font ${errDisplay.contact && `on`}`}>*숫자만 입력이 가능합니다.</span>
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
        <div className="ph_wrap daum_addresss_wrap">
          <label>주소</label>
          <span className="er red_font">*주소가 정확하지 않습니다.</span>
          <div className="w100">
            <input type="text" className="w80" name="address"
              value={data.busi_address || ""}
              onChange={handleData("busi_address")} />
            <button type="button" className="btn btn_mini" onClick={handleAddress}>
              찾기
            </button>
          </div>
          <div className="w100 mt5">
            <input type="text" className="w100" name="address_detail" placeholder="상세주소"
              value={data.busi_address_detail || ""}
              onChange={handleData("busi_address_detail")} />
          </div>
          <div className={`daum_addresss ${daumAddress && 'on'}`}>
            <DaumPostcode
              onComplete={handleDaumPostalComplete}
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
              value={data.busi}
              onChange={ }
            />{" "}
            <input
              type="text"
              className="form-control w70"
              name="incharge_name"
              placeholder="담당자를 입력해주세요."
              value={data.manageName}
              onChange={handle("manageName")}}
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
              value={data.incharge_number}
              onChange={(e) => { handleForm(e) }}
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
      </div>
      <RegisterCheck
        registerInfo={data}
      />
    </>
  )
}

export default FormPartnerBusi
