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
                                        <img src="/img/svg/search_icon.svg" alt="검색아이콘" />
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
                    <div className="con_box_body">
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
<<<<<<< HEAD
=======
                        <div className="fin">
                            <div className="float_left">
                                <button type="submit" className="btn medium">전체선택</button>
                            </div>
                            <div className="float_right">
                            </div>
                        </div>
>>>>>>> origin/design
                    </div>
                </div>
            </div>
                    <SearcfInfoBox />

            {/* popup-상세보기--------------- 탈퇴에서는 회원정보를 수정할 수없음. input박스제거 */}
            <div id="Popup01" className="popup_bg_full">
              
                <div className="in_txt master_popup">
                <a className="close_icon" onClick={popupClose}>
                    <i className="flaticon-multiply"></i>
                </a>
                <div className="page">
                    <h3>상세정보</h3>
                    <div className="info_txt">
                        <span className="start-day">탈퇴일: 2020.08.26</span>
                        <button className="btn"><i className="flaticon-print mr5"></i>프린터</button>
                        <button className="btn mr5"><i className="flaticon-download mr5"></i>엑셀저장</button>
                    </div>
                    {/* 가입 */}
                    <div className="info_page">
                        <div className="full_div">
                            <h4>탈퇴정보</h4>
                            <div className="info_table line2 w50">
                                <div className="tr">
                                    <div className="th01">탈퇴사유</div>
                                    <div className="td01">
                                        <span>기타(수수료가 너무......)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 회원정보 */}
                    <div className="info_page">
                        <div className="full_div">
                            <h4>회원정보</h4>
                            <div className="info_table line8 w50">
                                {/* 개인 */}
                                <div className="tr">
                                    <div className="th01">이름</div>
                                    <div className="td01"><span>김홍이</span></div>
                                    <div className="th02">아이디</div>
                                    <div className="td02"><a href="mailto:gggg@naver.com">gggg@naver.com</a></div>
                                    <div className="th03">휴대폰</div>
                                    <div className="td03">051-0000-0000</div>
                                    <div className="th04">성별</div>
                                    <div className="td04">
                                        <select>
                                            <option>여성</option>
                                            <option>남성</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="tr">
                                    <div className="th01">주소</div>
                                    <div className="td01"><span>부산시 부산구 부산로12번길11 302-231</span></div>
                                    <div className="th02">가입방법</div>
                                    <div className="td02"><span>카카오톡연동</span></div>
                                    <div className="th03">휴대폰</div>
                                    <div className="td03"><span>010-2222-2222</span></div>
                                    <div className="th04">국적</div>
                                    <div className="td04"><span>내국인</span></div>
                                </div>
                                {/* 파트너 */}
                                <div className="tr">
                                    <div className="th01">파트너명</div>
                                    <div className="td01"><span>김홍이</span></div>
                                    <div className="th02">아이디</div>
                                    <div className="td02"><a href="mailto:gggg@naver.com">gggg@naver.com</a></div>
                                    <div className="th03">연락처</div>
                                    <div className="td03"><span>051-0000-0000</span></div>
                                    <div className="th04"></div>
                                    <div className="td04"></div>
                                </div>
                                <div className="tr">

                                    <div className="th01">업체주소</div>
                                    <div className="td01"><span>-</span></div>
                                    <div className="th02">담당자</div>
                                    <div className="td02"><span>-</span></div>
                                    <div className="th03">휴대폰</div>
                                    <div className="td03"><span>010-0000-0000</span></div>
                                    <div className="th04">가입방법</div>
                                    <div className="td04"><span>카카오톡연동</span></div>
                                </div>
                                <div className="tr">
                                    <div className="th01">계좌번호</div>
                                    <div className="td01"><span>부산은행-3342-234325-12321</span></div>
                                    <div className="th02">통장사본</div>
                                    <div className="td02"><span>사본사본_ㄹㄹ.jpg<button className="btn dwonload">다운로드</button></span></div>
                                    <div className="th03">사업자등록증</div>
                                    <div className="td03"><span>사본사본_ㄹㄹ.jpg<button className="btn dwonload">다운로드</button></span></div>
                                    <div className="th04"></div>
                                    <div className="td04"></div>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* 파트너 */}
                    {/* 사업자회원 주의사항 */}
                    <div className="info_page">
                        <div className="full_div">
                            <h4>사업자회원 주의사항</h4>
                            <div className="textareabox">더이상입력불가너ㅏ유ㅚㅏ너후나ㅣㅎ</div>
                        </div>
                    </div>
                    {/* 파트너 */}
                    {/* 예약 및 결제 */}
                    <div className="info_page">
                        <div className="full_div">
                            <h4>예약 및 결제<i className="jandaicon-info2 tooltip" data-tip="자세한 예약조회는 '예약관리'메뉴를 이용 해주세요." ></i><span><a className="btn" href="/master/reservation">예약관리 바로가기</a></span></h4>
                            <div className="info_table w50">

                                <div className="tr">
                                    <div className="re01">
                                        예약번호
                                        <a href="R-398234">(R-398234)</a>
                                    </div>
                                    <div className="re02">
                                        상품
                                    </div>
                                    <div className="re03">
                                        <a href="/">[PK-098328] 떠나요~!!! 제주도~!!! </a>
                                    </div>
                                    <div className="re04">
                                        예약일/결제일
                                    </div>
                                    <div className="re05">
                                        <span>2020.12.12/2020.12.12</span>
                                    </div>
                                    <div className="re06">
                                        인원
                                     </div>
                                    <div className="re07">
                                        <span>4명</span>
                                    </div>
                                    <div className="re08">
                                        금액
                                    </div>
                                    <div className="re09">
                                        <span>30,000원</span>
                                    </div>
                                </div>
                                <div className="tr">
                                    <div className="re01">
                                        예약번호
                                        <a href="R-398234">(R-398234)</a>
                                    </div>
                                    <div className="re02">
                                        상품
                                    </div>
                                    <div className="re03">
                                        <a href="/">[PK-098328] 떠나요~!!! 제주도~!!! </a>
                                    </div>
                                    <div className="re04">
                                        예약일/결제일
                                    </div>
                                    <div className="re05">
                                        <span>2020.12.12/2020.12.12</span>
                                    </div>
                                    <div className="re06">
                                        인원
                                     </div>
                                    <div className="re07">
                                        <span>4명</span>
                                    </div>
                                    <div className="re08">
                                        금액
                                    </div>
                                    <div className="re09">
                                        <span>30,000원</span>
                                    </div>
                                </div>
                            </div>
                            {/* <Paginater pageNumber={10} totalPageCount={20} /> */}
                        </div>
                    </div>
                    {/* 파트너 */}
                    {/* 취소 및 환불내역 */}
                    <div className="info_page">
                        <div className="full_div">
                            <h4>취소 및 환불내역<i className="jandaicon-info2 tooltip" data-tip="자세한 예약조회는 '예약관리'메뉴를 이용 해주세요." ></i><span><a className="btn" href="/master/reservation">예약관리 바로가기</a></span></h4>
                            <div className="info_table w50">
                                <div className="tr">
                                    <div className="re01">
                                        예약번호
                                        <a href="R-398234">(R-398234)</a>
                                    </div>
                                    <div className="re02">
                                        상품
                                    </div>
                                    <div className="re03">
                                        <a href="/">[PK-098328] 떠나요~!!! 제주도~!!! </a>
                                    </div>
                                    <div className="re04">
                                        예약일/결제일
                                    </div>
                                    <div className="re05">
                                        <span>2020.12.12/2020.12.12</span>
                                    </div>
                                    <div className="re06">
                                        환불일
                                     </div>
                                    <div className="re07">
                                        <span>2020.12.12</span>
                                    </div>
                                    <div className="re08">
                                        환불금액
                                    </div>
                                    <div className="re09">
                                        <span>30,000원</span>
                                    </div>
                                </div>
                            </div>
                            {/* <Paginater pageNumber={10} totalPageCount={20} /> */}
                        </div>
                    </div>


                    {/* 메모 */}
                    <div className="info_page">
                        <h4>메모</h4>
                        <div className="write_comment">
                            <div className="comment_layout">
                                <ul className="text_box">
                                    <li>
                                        <div className="txta w100">
                                            메모는 탈퇴후에 더이상 입력불가!!!ㅁㅇㄴㄲ허ㅢ아허ㅢ;
                                            
                                            </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </MasterLayout >
};

export default MsMemberD;