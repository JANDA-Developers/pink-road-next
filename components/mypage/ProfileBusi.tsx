import React from 'react';

interface IProp { }

export const ProfileBusi: React.FC<IProp> = () => {
    return <div className="in">
        <h4>회원정보</h4>
        <div className="box1">
            <div className="top_left">
                <span className="photo">
                    <img src="/img/profile_g.png" alt="프로필이미지" />
                </span>
            </div>
            <div className="top_right">
                <ul>
                    <li className="id">
                        <span className="nickname">
                            <strong>김옥자</strong>님
</span>
                        <p>
                            <i className="icon">
                                <svg>
                                    <path
                                        d="M641.63,515.42A7.38,7.38,0,1,1,649,508,7.39,7.39,0,0,1,641.63,515.42Zm0-14.09a6.72,6.72,0,1,0,6.71,6.71A6.72,6.72,0,0,0,641.63,501.33Z"
                                        transform="translate(-634.25 -500.67)"
                                        style={{ fill: "#fff" }}
                                    />
                                    <path
                                        d="M645.09,506.7a2.76,2.76,0,0,1-.23,1.18,2.23,2.23,0,0,1-.66.86,2.87,2.87,0,0,1-1,.53,4.62,4.62,0,0,1-1.34.18h-1.06v2.39h-1v-7.68h2.1a5.06,5.06,0,0,1,1.26.15,3.1,3.1,0,0,1,1,.45,2.11,2.11,0,0,1,.68.8A2.4,2.4,0,0,1,645.09,506.7Zm-1,0a1.79,1.79,0,0,0-.19-.86,1.5,1.5,0,0,0-.5-.53,1.88,1.88,0,0,0-.72-.26,4.6,4.6,0,0,0-.84-.08h-1v3.65h.88a4.79,4.79,0,0,0,1-.09,2.22,2.22,0,0,0,.77-.31,1.53,1.53,0,0,0,.51-.59A2,2,0,0,0,644.06,506.72Z"
                                        transform="translate(-634.25 -500.67)"
                                        style={{ fill: "#fff" }}
                                    />
                                </svg>
                            </i>
                            <span>
                                <strong>23,999</strong>
                            </span>
                        </p>
                    </li>
                    <li className="ct">
                        <span>234개</span>
                        <p>상품 등록 수</p>
                    </li>
                    <li className="ct">
                        <span>34개</span>
                        <p>
                            총 판매 수<i className="jandaicon-info2" />
                        </p>
                    </li>
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
                        <div className="title">이메일</div>
                        <div className="txt">zocbdjf@gamil.com</div>
                    </li>
                    <li>
                        <div className="title">비밀번호</div>
                        <div className="txt">
                            <div className="input_relative">
                                <input
                                    type="password"
                                    className="form-control w100 ok"
                                    placeholder="변경할 비밀번호를 입력 해주세요"
                                />
                                <i className="jandaicon-check btn_in" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="title">비밀번호 확인</div>
                        <div className="txt">
                            <div className="input_relative">
                                <input
                                    type="password"
                                    className="form-control w100"
                                    placeholder="변경할 비밀번호를 다시 입력 해주세요"
                                />
                                <i className="jandaicon-check btn_in" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="title">개인파트너명</div>
                        <div className="txt">김옥자</div>
                    </li>
                    <li>
                        <div className="title">연락처</div>
                        <div className="txt">
                            <span className="w80">010-4102-9777</span>
                            <button type="button" className="btn btn_mini">
                                인증
</button>
                        </div>
                        {/* 변경시 변경아이콘 눌러 popup띄워서 핸드폰번호 인증절차 거치게됨 */}
                    </li>
                </ul>
            </div>
        </div>
        <div className="box2">
            <div className="box_left">
                <div className="title">
                    <h5>개인파트너정보</h5>
                </div>
            </div>
            <div className="box_right">
                <ul>
                    <li>
                        <div className="title">대표 전화번호</div>
                        <div className="txt">
                            <select className="w20">
                                <option>02</option>
                                <option>055</option>
                            </select>
                            <input
                                type="text"
                                className="form-control w70"
                                placeholder="전화번호를 입력해주세요."
                            />
                        </div>
                    </li>
                    <li>
                        <div className="title">주소</div>
                        <div className="txt line2">
                            <input type="text" className="form-control w70" />
                            <button type="button" className="btn btn_mini">
                                주소찾기
</button>
                            <input
                                type="text"
                                className="form-control w100"
                                placeholder="상세주소"
                            />
                        </div>
                    </li>
                    <li>
                        <div className="title">첨부서류</div>
                        <div className="txt">
                            <span className="w80 upload_out_box">서류.jpg</span>
                            <button type="button" className="btn btn_mini">
                                업로드
</button>
                        </div>
                    </li>
                    <li>
                        <div className="title">정산계좌</div>
                        <div className="txt">
                            <div className="line_first">
                                <input
                                    type="text"
                                    className="form-control w20"
                                    placeholder="은행명"
                                />{" "}
                                <input
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
        <div className="box3">
            <div className="box_left">
                <div className="title">
                    <h5>기타정보</h5>
                </div>
            </div>
            <div className="box_right">
                <ul>
                    <li>
                        <div className="title">예약관리시스템</div>
                        <div className="txt">
                            <span className="blue">연결완료</span>
                            <a className="btn outlink" href="/">
                                예약관리시스템 바로가기
  <i />
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="title">SNS 수신동의</div>
                        <div className="txt tr">
                            <input type="checkbox" />
                            <span>SNS 수신 동의를 합니다.</span>
                        </div>
                    </li>
                    <li>
                        <div className="title">E-mail 수신동의</div>
                        <div className="txt tr">
                            <input type="checkbox" />
                            <span>E-mail 수신 동의를 합니다.</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="fin">
            <div className="float_left">
                <button type="submit" className="btn medium color01">
                    회원탈퇴
</button>
            </div>
            <div className="float_right">
                <button type="submit" className="btn medium">
                    수정
</button>
            </div>
        </div>
    </div>;
};

export default ProfileBusi