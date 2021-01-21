import { MasterLayout } from 'layout/MasterLayout';
import { Paginater } from 'components/common/Paginator';
import { SearcfInfoBox } from 'components/common/SearcfInfoBox';
import CalendarIcon from 'components/common/icon/CalendarIcon';
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

export const MsMemberD: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in ">
            <h4>회원관리</h4>
            <div className="in_content">
                <div className="tab-nav">
                    <ul>
                        <li><Link href="/master/member"><a>개인회원</a></Link></li>
                        <li><Link href="/master/member/member1-2"><a>기업파트너 회원</a></Link></li>
                        <li><Link href="/master/member/member1-3"><a>개인파트너 회원</a></Link></li>
                        <li className="on"><Link href="/master/member/member1-4"><a>탈퇴회원</a></Link></li>
                    </ul>
                </div>
                <div className="con withdrawal">
                    <div className="con_box_top pb5">
                        <div className="search_top">
                            <div className="hang">
                                <ul className="day_ul">
                                    <li className="on">
                                        <span>이번달</span>
                                    </li>
                                    <li className="on">
                                        <span>저번달</span>
                                    </li>
                                    <li>
                                        <span>6개월</span>
                                    </li>
                                    <li>
                                        <span>1년</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="hang">
                                <div className="input_box">
                                    <input type="text" className="day w100" />
                                    <CalendarIcon />
                                </div>
                                    ~
                                    <div className="input_box">
                                    <input type="text" className="day w100" />
                                    <CalendarIcon />
                                </div>
                            </div>
                            <div className="hang fr">
                                <select className="option">
                                    <option>전체</option>
                                    <option>이름</option>
                                    <option>파트너명</option>
                                    <option>아이디</option>
                                    <option>연락처</option>
                                </select>
                                <div className="search_div">
                                    <input className="w100" type="text" placeholder="검색 내용을 입력해주세요." />
                                    <div className="svg_img">
                                        <img src="/img/svg/search_icon.svg" alt="search icon" />
                                        <button />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="alignment">
                            <div className="left_div">
                                <ul className="board_option">
                                    <li className="on"><a href="/">전체<strong>46</strong></a></li>
                                    <li><a href="/">개인<strong>23</strong></a></li>
                                    <li><a href="/">개인파트너<strong>23</strong></a></li>
                                    <li><a href="/">기업파트너<strong>23</strong></a></li>
                                </ul>
                            </div>
                            <div className="right_div">
                                <ul className="board_option">
                                    <li><a href="/">전체선택</a></li>
                                    <li><a href="/">엑셀파일<i className="jandaicon-info2 tooltip" data-tip="선택된 항목에 한해서 엑셀파일로 저장이 가능합니다." ></i></a></li>
                                </ul>
                                <select className="sel01">
                                    <option>탈퇴일 &uarr;</option>
                                    <option>탈퇴일 &darr;</option>
                                    <option>이름 &uarr;</option>
                                    <option>이름 &darr;</option>
                                </select>
                                <select className="sel02">
                                    <option>10개 보기</option>
                                    <option>50개 보기</option>
                                    <option>100개 보기</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="con_box_body master__table">
                        <div className="list_head">
                            <div className="td01">
                                <i className="checkbox">
                                    <input type="checkbox" name="agree" id="agree0" title="모두선택" />
                                    <label htmlFor="agree0" />
                                </i>
                            </div>
                            <div className="td02">유형</div>
                            <div className="td03">이름(파트너명)</div>
                            <div className="td04">아이디</div>
                            <div className="td05">담당자</div>
                            <div className="td06">탈퇴일</div>
                            <div className="td07">가입방법</div>
                            <div className="td08">탈퇴사유</div>
                        </div>
                        <div className="list_line">
                            <div className="td01">
                                <i className="checkbox">
                                    <input type="checkbox" name="agree" id="agree0" title="선택" />
                                    <label htmlFor="agree0" />
                                </i>
                            </div>
                            <div className="td02"><i className="m_title">유형:</i>개인</div>
                            <div className="td03">김하나</div>
                            <div className="td04"><a href="mailto:">gogo@gamail.com</a></div>
                            <div className="td05"><i className="m_title">담당자:</i>-</div>
                            <div className="td06"><i className="m_title">탈퇴일:</i>2020.11.22</div>
                            <div className="td07"><i className="m_title">가입방법:</i>카카오톡연동</div>
                            <div className="td08"><button className="btn small" onClick={popupOpen}>상세보기</button></div>
                        </div>

                        <div className="list_line">
                            <div className="td01">
                                <i className="checkbox">
                                    <input type="checkbox" name="agree" id="agree0" title="선택" />
                                    <label htmlFor="agree0" />
                                </i>
                            </div>
                            <div className="td02"><i className="m_title">유형:</i>기업파트너</div>
                            <div className="td03">(주)투어</div>
                            <div className="td04"><a href="mailto:">gogo@gamail.com</a></div>
                            <div className="td05"><i className="m_title">담당자:</i>김김김<br /><a href="tel:">(010-2222-2222)</a></div>
                            <div className="td06"><i className="m_title">탈퇴일:</i>2020.11.22</div>
                            <div className="td07"><i className="m_title">가입방법:</i>카카오톡연동</div>
                            <div className="td08"><button className="btn small" onClick={popupOpen}>상세보기</button></div>
                        </div>
                        <div className="list_line">
                            <div className="td01">
                                <i className="checkbox">
                                    <input type="checkbox" name="agree" id="agree0" title="선택" />
                                    <label htmlFor="agree0" />
                                </i>
                            </div>
                            <div className="td02"><i className="m_title">유형:</i>기업파트너</div>
                            <div className="td03">(주)투어</div>
                            <div className="td04"><a href="mailto:">gogo@gamail.com</a></div>
                            <div className="td05"><i className="m_title">담당자:</i>김김김<br /><a href="tel:">(010-2222-2222)</a></div>
                            <div className="td06"><i className="m_title">탈퇴일:</i>2020.11.22</div>
                            <div className="td07"><i className="m_title">가입방법:</i>카카오톡연동</div>
                            <div className="td08"><button className="btn small" onClick={popupOpen}>상세보기</button></div>
                        </div>

                        {/* <Paginater pageNumber={10} totalPageCount={20} /> */}
                        <div className="fin">
                            <div className="float_left">
                                <button type="submit" className="btn medium">전체선택</button>
                            </div>
                            <div className="float_right">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SearcfInfoBox />

            {/* popup-상세보기--------------- 탈퇴에서는 회원정보를 수정할 수없음. input박스제거 */}
            {/* 회원모달 */}
        </div>
    </MasterLayout >
};

export default MsMemberD;