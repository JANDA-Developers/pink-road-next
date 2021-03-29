import React from 'react';
import { MemberMaster } from '../../../components/member/MemberMaster';
import { UserRole } from '../../../types/api';
import { BusiPartnerTable } from '../../../components/member/BusiPartnerTable';

interface IProp { }
export const PartnerMemberMaster: React.FC<IProp> = () => {
    return <MemberMaster type={UserRole.partner} Table={BusiPartnerTable} />
};

export default PartnerMemberMaster;

// import { MasterLayout } from 'layout/MasterLayout';
// import { Paginater } from 'components/common/Paginator';
// import { SearcfInfoBox } from 'components/common/SearcfInfoBox';
// import CalendarIcon from 'components/common/icon/CalendarIcon';
// import React from 'react';
// import Link from "next/link";

// interface IProp { }

// const popupOpen = () => {
//     $('#Popup01').css({
//         'display': 'flex'
//     });

// }
// const popupClose = () => {
//     $('#Popup01').css({
//         'display': 'none'
//     });
// }
// export const MsMemberC: React.FC<IProp> = () => {
//     return <MasterLayout>
//         <div className="in ">
//             <h4>회원관리</h4>
//             <div className="in_content">

//                 <div className="tab-nav">
//                     <ul>
//                         <li><Link href="/master/member"><a>개인회원</a></Link></li>
//                         <li><Link href="/master/member/busipartner"><a>기업파트너 회원</a></Link></li>
//                         <li className="on"><Link href="/master/member/partner"><a>개인파트너 회원</a></Link></li>
//                         <li><Link href="/master/member/signout"><a>탈퇴회원</a></Link></li>
//                     </ul>
//                 </div>
//                 <div className="con guide">
//                     <div className="con_box_top pb5">
//                         <div className="search_top">
//                             <div className="hang">
//                                 <ul className="day_ul">
//                                     <li className="on">
//                                         <span>이번달</span>
//                                     </li>
//                                     <li className="on">
//                                         <span>저번달</span>
//                                     </li>
//                                     <li>
//                                         <span>6개월</span>
//                                     </li>
//                                     <li>
//                                         <span>1년</span>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="hang">
//                                 <div className="input_box">
//                                     <input type="text" className="day w100" />
//                                     <CalendarIcon />
//                                  </div>
//                                      <span className="pc"> ~ </span>
//                                  <div className="input_box">
//                                     <input type="text" className="day w100" />
//                                     <CalendarIcon />
//                                 </div>
//                             </div>
//                             <div className="hang fr">
//                                 <select className="option">
//                                     <option>전체</option>
//                                     <option>파트너명</option>
//                                     <option>아이디</option>
//                                     <option>연락처</option>
//                                     <option>담당자</option>
//                                     <option>휴대폰</option>
//                                     <option>승인상태</option>
//                                 </select>
//                                 <div className="search_div">
//                                     <input className="w100" type="text" placeholder="검색 내용을 입력해주세요." />
//                                     <div className="svg_img">
//                                         <img src="/img/svg/search_icon.svg" alt="search icon" />
//                                         <button />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="alignment">
//                             <div className="left_div">
//                                 <ul className="board_option">
//                                     <li className="on"><a href="/">전체<strong>46</strong></a></li>
//                                     <li><a href="/">대기<strong>23</strong></a></li>
//                                     <li><a href="/">승인<strong>23</strong></a></li>
//                                     <li><a href="/">미승인<strong>23</strong></a></li>
//                                 </ul>
//                             </div>
//                             <div className="right_div">
//                                 <ul className="board_option">
//                                     <li><a href="/">전체선택</a></li>
//                                     <li><a href="/">엑셀파일<i className="jandaicon-info2 tooltip" data-tip="선택된 항목에 한해서 엑셀파일로 저장이 가능합니다." ></i></a></li>
//                                     <li><a href="/">신규회원등록</a></li>
//                                 </ul>
//                                 <select className="sel01">
//                                     <option>가입일 &uarr;</option>
//                                     <option>가입일 &darr;</option>
//                                     <option>접속일 &uarr;</option>
//                                     <option>접속일 &darr;</option>
//                                     <option>이름 오름순</option>
//                                     <option>이름 내림순</option>
//                                 </select>
//                                 <select className="sel02">
//                                     <option>10개 보기</option>
//                                     <option>50개 보기</option>
//                                     <option>100개 보기</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="con_box_body master__table">
//                         <div className="list_head">
//                             <div className="td01">
//                                 <i className="checkbox">
//                                     <input type="checkbox" name="agree" id="agree0" title="모두선택" />
//                                     <label htmlFor="agree0" />
//                                 </i>
//                             </div>
//                             <div className="td02">파트너명</div>
//                             <div className="td03">아이디</div>
//                             <div className="td04">담당자</div>
//                             <div className="td05">승인여부</div>
//                             <div className="td06">가입일</div>
//                             <div className="td07">판매상품</div>
//                             <div className="td08">상세보기</div>
//                         </div>
//                         <div className="list_line">
//                             <div className="td01">
//                                 <i className="checkbox">
//                                     <input type="checkbox" name="agree" id="agree0" title="선택" />
//                                     <label htmlFor="agree0" />
//                                 </i>
//                             </div>
//                             <div className="td02">김홍이</div>
//                             <div className="td03"><a href="mailto:">gogo@gamail.com</a></div>
//                             <div className="td04"><i className="m_title">담당자:</i>김김김<br /><a href="tel:">(010-2222-2222)</a></div>
//                             <div className="td05"><i className="m_title">승인여부:</i><i className="approval stand">승인대기</i></div>
//                             <div className="td06"><i className="m_title">가입일:</i>2020.11.22</div>
//                             <div className="td07"><i className="m_title">판매상품:</i><strong>총 9건</strong><br />(여행<strong>2</strong>/체험<strong>7</strong>)</div>
//                             <div className="td08"><button className="btn small" onClick={popupOpen}>상세보기</button></div>
//                         </div>

//                         <div className="list_line">
//                             <div className="td01">
//                                 <i className="checkbox">
//                                     <input type="checkbox" name="agree" id="agree0" title="선택" />
//                                     <label htmlFor="agree0" />
//                                 </i>
//                             </div>
//                             <div className="td02">김홍이</div>
//                             <div className="td03"><a href="mailto:">gogo@gamail.com</a></div>
//                             <div className="td04"><i className="m_title">담당자:</i>김김김<br /><a href="tel:">(010-2222-2222)</a></div>
//                             <div className="td05"><i className="m_title">승인여부:</i><i className="approval ok">승인</i></div>
//                             <div className="td06"><i className="m_title">가입일:</i>2020.11.22</div>
//                             <div className="td07"><i className="m_title">판매상품:</i><strong>총 9건</strong><br />(여행<strong>2</strong>/체험<strong>7</strong>)</div>
//                             <div className="td08"><button className="btn small" onClick={popupOpen}>상세보기</button></div>
//                         </div>

//                         <div className="list_line">
//                             <div className="td01">
//                                 <i className="checkbox">
//                                     <input type="checkbox" name="agree" id="agree0" title="선택" />
//                                     <label htmlFor="agree0" />
//                                 </i>
//                             </div>
//                             <div className="td02">김홍이</div>
//                             <div className="td03"><a href="mailto:">gogo@gamail.com</a></div>
//                             <div className="td04"><i className="m_title">담당자:</i>김김김<br /><a href="tel:">(010-2222-2222)</a></div>
//                             <div className="td05"><i className="m_title">승인여부:</i><i className="approval no" data-tip="미승인사유 : ">미승인</i></div>
//                             <div className="td06"><i className="m_title">가입일:</i>2020.11.22</div>
//                             <div className="td07"><i className="m_title">판매상품:</i><strong>총 9건</strong><br />(여행<strong>2</strong>/체험<strong>7</strong>)</div>
//                             <div className="td08"><button className="btn small" onClick={popupOpen}>상세보기</button></div>
//                         </div>

//                         {/* <Paginater pageNumber={10} totalPageCount={20} /> */}
//                         <div className="fin ifMobile">
//                             <div className="float_left">
//                                 <button type="submit" className="btn medium">전체선택</button>
//                             </div>
//                             <div className="float_right">
//                                 <button type="submit" className="btn medium mr5">탈퇴</button>
//                                 <button type="submit" className="btn medium">활동정지</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <SearcfInfoBox />

//             {/* popup-상세보기 */}
//             <div id="Popup01" className="popup_bg_full">

//                 <div className="in_txt master_popup">
//                     <a className="close_icon" onClick={popupClose}>
//                         <i className="flaticon-multiply"></i>
//                     </a>
//                     <div className="page">
//                         <h3>회원 상세정보</h3>
//                         _txt">
//                             <span className="start-day">가입일: 2020.08.26</span>
//                             <span className="recently-day">최근접속: 2020.08.26 12:12</span>
//                             <button className="btn"><i className="flaticon-print mr5"></i>프린터</button>
//                             <button className="btn mr5"><i className="flaticon-download mr5"></i>엑셀저장</button>
//                             <button className="btn mr5">작성한 게시글</button>
//                         </div>
//                         {/* 가입 */}
//                         <div className="info_page">
//                             <div className="full_div">
//                                 <h4>가입승인</h4>
//                                 <div className="info_table line8 w50">
//                                     <div className="tr">
//                                         <div className="th01">승인여부</div>
//                                         <div className="td01">
//                                             <select>
//                                                 <option>승인</option>
//                                                 <option>대기</option>
//                                                 <option>미승인</option>
//                                             </select>
//                                         </div>
//                                         <div className="th02">사유</div>
//                                         <div className="td02"><input type="text" className="w100" /></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* 회원정보 */}
//                         <div className="info_page">
//                             <div className="full_div">
//                                 <h4>회원정보</h4>
//                                 <div className="info_table line8 w50">
//                                     <div className="tr">
//                                         <div className="th01">파트너명</div>
//                                         <div className="td01"><span>김홍이</span></div>
//                                         <div className="th02">아이디</div>
//                                         <div className="td02"><a href="mailto:gggg@naver.com">gggg@naver.com</a></div>
//                                         <div className="th03">휴대폰</div>
//                                         <div className="td03"><input type="text" className="w100" /></div>
//                                         <div className="th04">가입방법</div>
//                                         <div className="td04">
//                                             <select>
//                                                 <option>네이버연동</option>
//                                                 <option>카카오톡연동</option>
//                                                 <option>홈페이지</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                     <div className="tr">
//                                         <div className="th01">계좌번호</div>
//                                         <div className="td01"><input type="text" className="w20 mr5" /><input type="text" className="w70" /></div>
//                                         <div className="th02">통장사본</div>
//                                         <div className="td02"><input type="file" className="w100" /></div>
//                                         <div className="th03">사업자등록증</div>
//                                         <div className="td03"><input type="file" className="w100" /></div>
//                                         <div className="th04"></div>
//                                         <div className="td04"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>


//                         {/* 약관동의 */}
//                         <div className="info_page">
//                             <div className="full_div">
//                                 <h4>약관동의</h4>
//                                 <div className="info_table checkline">
//                                     <div className="tr">
//                                         <div className="th01">마케팅 정보수신동의</div>
//                                         <div className="td01">
//                                             <span className="check no">동의안함</span>
//                                         </div>
//                                         <div className="th02">개인정보수집 및 이용</div>
//                                         <div className="td02">
//                                             <span className="check no">동의안함</span>
//                                         </div>
//                                     </div>
//                                     <div className="tr">
//                                         <div className="th01">개인정보 제3자 제공</div>
//                                         <div className="td01">
//                                             <span className="check no">동의안함</span>
//                                         </div>
//                                         <div className="th02">이용약관</div>
//                                         <div className="td02">
//                                             <span className="check ok">동의함</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>


//                         {/* 사업자회원 주의사항 */}
//                         <div className="info_page">
//                             <div className="full_div">
//                                 <h4>사업자회원 주의사항</h4>
//                                 <textarea style={{ height: "100px" }} placeholder=""></textarea>
//                             </div>
//                         </div>

//                         {/* 예약 및 결제 */}
//                         <div className="info_page">
//                             <div className="full_div">
//                                 <h4>예약 및 결제<i className="jandaicon-info2 tooltip" data-tip="자세한 예약조회는 '예약관리'메뉴를 이용 해주세요." ></i>
//                                     <span className="full_div__right"><strong>11월</strong> - 예약<strong> 23건</strong> / 실적<strong className="sky_font"> 2,000,000원</strong><a className="btn" href="/master/reservation">예약관리 바로가기</a></span></h4>
//                                 <div className="info_table reservationlist">

//                                     <div className="tr">
//                                         <div className="re01">
//                                             예약번호
//                                         <a href="R-398234">(R-398234)</a>
//                                         </div>
//                                         <div className="re02">
//                                             상품
//                                     </div>
//                                         <div className="re03">
//                                             <a href="/">[PK-098328] 떠나요~!!! 제주도~!!! </a>
//                                         </div>
//                                         <div className="re04">
//                                             예약일/결제일
//                                     </div>
//                                         <div className="re05">
//                                             <span>2020.12.12/2020.12.12</span>
//                                         </div>
//                                         <div className="re06">
//                                             인원
//                                      </div>
//                                         <div className="re07">
//                                             <span>4명</span>
//                                         </div>
//                                         <div className="re08">
//                                             금액
//                                     </div>
//                                         <div className="re09">
//                                             <span>30,000원</span>
//                                         </div>
//                                     </div>
//                                     <div className="tr">
//                                         <div className="re01">
//                                             예약번호
//                                         <a href="R-398234">(R-398234)</a>
//                                         </div>
//                                         <div className="re02">
//                                             상품
//                                     </div>
//                                         <div className="re03">
//                                             <a href="/">[PK-098328] 떠나요~!!! 제주도~!!! </a>
//                                         </div>
//                                         <div className="re04">
//                                             예약일/결제일
//                                     </div>
//                                         <div className="re05">
//                                             <span>2020.12.12/2020.12.12</span>
//                                         </div>
//                                         <div className="re06">
//                                             인원
//                                      </div>
//                                         <div className="re07">
//                                             <span>4명</span>
//                                         </div>
//                                         <div className="re08">
//                                             금액
//                                     </div>
//                                         <div className="re09">
//                                             <span>30,000원</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* <Paginater pageNumber={10} totalPageCount={20} /> */}
//                             </div>
//                         </div>

//                         {/* 취소 및 환불내역 */}
//                         <div className="info_page">
//                             <div className="full_div">
//                                 <h4>취소 및 환불내역<i className="jandaicon-info2 tooltip" data-tip="자세한 예약조회는 '예약관리'메뉴를 이용 해주세요." ></i>
//                                     <span className="full_div__right"><strong>11월</strong> - 취소예약<strong> 23건</strong> / 환수<strong className="red_font"> -1,000,000원</strong><a className="btn" href="/master/reservation">예약관리 바로가기</a></span></h4>
//                                 <div className="info_table reservationlist">
//                                     <div className="tr">
//                                         <div className="re01">
//                                             예약번호
//                                         <a href="R-398234">(R-398234)</a>
//                                         </div>
//                                         <div className="re02">
//                                             상품
//                                     </div>
//                                         <div className="re03">
//                                             <a href="/">[PK-098328] 떠나요~!!! 제주도~!!! </a>
//                                         </div>
//                                         <div className="re04">
//                                             예약일/결제일
//                                     </div>
//                                         <div className="re05">
//                                             <span>2020.12.12/2020.12.12</span>
//                                         </div>
//                                         <div className="re06">
//                                             환불일
//                                      </div>
//                                         <div className="re07">
//                                             <span>2020.12.12</span>
//                                         </div>
//                                         <div className="re08">
//                                             환불금액
//                                     </div>
//                                         <div className="re09">
//                                             <span>30,000원</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* <Paginater pageNumber={10} totalPageCount={20} /> */}
//                             </div>
//                         </div>


//                         {/* 메모 */}
//                         <div className="info_page">
//                             <h4>메모</h4>
//                             <div className="write_comment">
//                                 <div className="comment_layout">
//                                     <ul className="text_box">
//                                         <li>
//                                             <div className="txta w100">
//                                                 <textarea style={{ height: "100px" }} placeholder="메모는 꼼꼼하게 체크는 정확하게"></textarea>
//                                             </div>
//                                         </li>
//                                         <li className="tr count">0/3000</li>
//                                     </ul>
//                                     <div className="text_box_bottom">
//                                         <div className="float_left w50">
//                                             <span><i className="jandaicon-info2"></i>기존의 메모를 삭제하시면 되돌릴 수 없습니다. 신중하게 입력해 주세요.</span>
//                                         </div>
//                                         <div className="btn_send float_right"><button className="comment_btn">저장</button> </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="fin">
//                             <div className="float_left">
//                             </div>
//                             <div className="float_right">
//                                 <button type="submit" className="btn medium">저장하기</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </MasterLayout >
// };

// export default MsMemberC;