import { MasterLayout } from 'layout/MasterLayout';
import React from 'react';
import Link from "next/link";

interface IProp { }
const popupOpen = () => {
    $('#Popup01').css({
        'display': 'flex'
    });

}
const popupClose = () => {
    $('#Popup01').css({
        'display': 'none'
    });
}
export const MsHomepageA: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in ">
            <h4>홈페이지 설정</h4>
            <div className="in_content">
                <div className="tab-nav">
                    <ul>
                        <li><Link href="/master/homepage"><a>기본설정</a></Link></li>
                        <li className="on"><Link href="/master/homepage/homepage1-2"><a>SMS설정</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-3"><a>카카오비즈톡</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-4"><a>약관설정</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-5"><a>게시판설정</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-6"><a>정산설정</a></Link></li>
                    </ul>
                </div>
                <div className="con homepage sms">
                    <div className="alignment">
                        <div className="left_div">
                            <ul className="board_option">
                                <li className="on"><a href="/">전체<strong>46</strong></a></li>
                                <li><a href="/">예약<strong>23</strong></a></li>
                                <li><a href="/">회원<strong>23</strong></a></li>
                                <li><a href="/">정산<strong>23</strong></a></li>
                            </ul>
                        </div>
                        <div className="right_div">

                            <select className="sel01">
                                <option>최신순 &uarr;</option>
                                <option>최신순 &darr;</option>
                            </select>
                        </div>
                    </div>
                    <div className="sms-list">
                        <ul>
                            <li onClick={popupOpen}>
                                <div className="title">
                                    <h5>회원가입할때</h5>
                                    <div className="tag">
                                        <span className="ct">회원</span>
                                        <span className="auto">자동</span>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        ㄴ;ㅁㅁ;ㅣㅡ;이믕리<br />
                                        s:DLJGDF:LGj;ldGDF:LkgD:"FKLG:DLJGDFS?DLLMS:DLMG:SDLMGL:DSMGL:SDML:DSMGD"
                                    </p>
                                </div>
                                <div className="mouseover"><span><i className="jandaicon-setting"></i>수정</span></div>
                            </li>
                            <li onClick={popupOpen}>
                                <div className="title">
                                    <h5>회원가입할때</h5>
                                    <div className="tag">
                                        <span className="ct">회원</span>
                                        <span className="auto">자동</span>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        ㄴ;ㅁㅁ;ㅣㅡ;이믕리<br />
                                        s:DLJGDF:LGj;ldGDF:LkgD:"FKLG:DLJGDFS?DLLMS:DLMG:SDLMGL:DSMGL:SDML:DSMGD"
                                    </p>
                                </div>
                                <div className="mouseover"><span><i className="jandaicon-setting"></i>수정</span></div>
                            </li>
                            <li onClick={popupOpen}>
                                <div className="title">
                                    <h5>회원가입할때</h5>
                                    <div className="tag">
                                        <span className="ct">회원</span>
                                        <span className="auto">자동</span>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        ㄴ;ㅁㅁ;ㅣㅡ;이믕리<br />
                                        s:DLJGDF:LGj;ldGDF:LkgD:"FKLG:DLJGDFS?DLLMS:DLMG:SDLMGL:DSMGL:SDML:DSMGD"
                                    </p>
                                </div>
                                <div className="mouseover"><span><i className="jandaicon-setting"></i>수정</span></div>
                            </li>
                            <li onClick={popupOpen}>
                                <div className="title">
                                    <h5>회원가입을입을입을입을입을입을입을</h5>
                                    <div className="tag">
                                        <span className="ct">회원</span>
                                        <span className="auto">자동</span>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        ㄴ;ㅁㅁ;ㅣㅡ;이믕리<br />
                                        s:DLJGDF:LGj;ldGDF:LkgD:"FKLG:DLJGDFS?DLLMS:DLMG:SDLMGL:DSMGL:SDML:DSMGD"
                                    </p>
                                </div>
                                <div className="mouseover"><span><i className="jandaicon-setting"></i>수정</span></div>
                            </li>
                            <li className="add" onClick={popupOpen}>
                                <button><i className="flaticon-add"></i> 템플릿 생성</button>
                            </li>
                        </ul>
                    </div>


                </div>

            </div>

            {/* popup-SMS문자 템플릿 */}
            <div id="Popup01" className="popup_bg_full" >
                <div className="in_txt homepage_popup">
                    <a className="close_icon" onClick={popupClose}>
                        <i className="flaticon-multiply"></i>
                    </a>
                    <div className="page">
                        <h3>템플릿 설정</h3>
                        {/* 가입 */}
                        <div className="sms-box">
                            <div className="setting left">
                                <ul className="list">
                                    <li>
                                        <div className="th">카테고리</div>
                                        <div className="td">
                                            <select className="w50">
                                                <option>회원</option>
                                                <option>예약</option>
                                                <option>정산</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="th">타이틀</div>
                                        <div className="td"><input className="w100" placeholder="" type="text" /></div>
                                    </li>

                                    {/* 카테고리가 예약일때 */}
                                    <li>
                                        <div className="th">자동메시지</div>
                                        <div className="td">
                                            <ul className="text_ul">
                                                <li><span>예약자명</span></li>
                                                <li><span>여행일자(년/월/일)</span></li>
                                                <li><span>예약인원(총인원)</span></li>
                                                <li><span>결제금액</span></li>
                                                <li><span>무통장정보(은행/계좌번호/입금주)</span></li>
                                                <li><span>상품명(상품명/출발장소/출발일시)</span></li>
                                            </ul>
                                        </div>
                                    </li>

                                    {/* 카테고리가 회원일때 */}
                                    <li>
                                        <div className="th">자동메시지</div>
                                        <div className="td">
                                            <ul className="text_ul">
                                                <li><span>회원명(파트너사명)</span></li>
                                                <li><span>예약정보(상품명/예약인원/예약금/출발일자)</span></li>
                                                <li><span>예약상태(완료/취소)</span></li>
                                                <li><span>여행출발(확정/미확정)</span></li>
                                                <li><span>승인상태(미승인/승인)</span></li>
                                            </ul>
                                        </div>
                                    </li>

                                    {/* 카테고리가 정산일때 */}
                                    <li>
                                        <div className="th">자동메시지</div>
                                        <div className="td">
                                            <ul className="text_ul">
                                                <li><span>회원정보(파트너명)</span></li>
                                                <li><span>상품정보(상품명/인원/총금액)</span></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="th">자동발신 활성화 여부</div>
                                        <div className="td">
                                            <div className="switch">
                                                <input className="tgl tgl-skewed" id="cb3" type="checkbox" />
                                                <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor="cb3"></label>
                                            </div>
                                        </div>
                                    </li>

                                    {/*  자동발신 활성화시 보여주기 */}
                                    <li>
                                        <div className="th">자동발신</div>
                                        <div className="td">
                                            <select className="w40">
                                                <option>= 상태 =</option>
                                                <option>예약취소시</option>
                                                <option>예약완료시</option>
                                                <option>출발확정시</option>
                                                <option>출발미확정시</option>
                                                <option>무통장결제시</option>
                                                <option>정산신청시</option>
                                                <option>승인요청시</option>
                                            </select>
                                            <select className="w40 ml5">
                                                <option>= 수신자선택 =</option>
                                                <option>예약자</option>
                                                <option>파트너사</option>
                                                <option>예약자+파트너사</option>
                                            </select>
                                        </div>
                                    </li>


                                </ul>
                            </div>
                            <div className="form right">
                                <textarea>

                                </textarea>
                                <div className="count">0Byte</div>
                                <p className="infotxt_gray">80Byte 이하일땐 80Byte 이상시 LMS입니다.</p>
                            </div>
                        </div>
                        <div className="fin">
                            <div className="float_left">
                                <button type="submit" className="btn medium">생성하기</button>
                                <button type="submit" className="btn medium">삭제하기</button>
                            </div>
                            <div className="float_right">
                                <button type="submit" className="btn medium">저장하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </MasterLayout >
};

export default MsHomepageA;