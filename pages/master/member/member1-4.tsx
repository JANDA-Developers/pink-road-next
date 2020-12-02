import { MasterLayout } from 'layout/MasterLayout';
import { Paginater } from 'components/common/Paginator';
import React from 'react';
import Link from "next/link";

interface IProp { }

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
                        <li><Link href="/master/member/member1-5"><a>회원약관 설정</a></Link></li>
                        <li><Link href="/master/member/member1-6"><a>메뉴얼 설정</a></Link></li>
                    </ul>
                </div>
                <div className="con withdrawal">
                    <div className="con_box_top pb5">
                        <div className="alignment">
                            <div className="left_div">
                                <ul className="board_option">
                                    <li className="on"><a href="/">전체<strong>46</strong></a></li>
                                    <li><a href="/">내국인<strong>23</strong></a></li>
                                    <li><a href="/">외국인<strong>23</strong></a></li>
                                </ul>
                            </div>
                            <div className="right_div">
                                <ul className="board_option">
                                    <li><a href="/">엑셀파일</a></li>
                                    <li><a href="/">모두선택</a></li>
                                </ul>
                                <select className="sel01">
                                    <option>가입일 &uarr;</option>
                                    <option>가입일 &darr;</option>
                                    <option>접속일 &uarr;</option>
                                    <option>접속일 &darr;</option>
                                    <option>이름 오름순</option>
                                    <option>이름 내림순</option>
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
                            <span className="td01 checkbox">
                                <input type="checkbox" name="agree" id="agree0" title="전체선택" />
                                <label htmlFor="agree0" />
                            </span>
                            <span className="td02">이름</span>
                            <span className="td03">아이디</span>
                            <span className="td04">성별</span>
                            <span className="td05">국적</span>
                            <span className="td06">가입일</span>
                            <span className="td07">가입방법</span>
                            <span className="td08">상세보기</span>
                        </div>
                        <div className="list_line">
                            <span className="td01 checkbox">
                                <input type="checkbox" name="agree" id="agree1" title="선택" />
                                <label htmlFor="agree1" />
                            </span>
                            <span className="td02">김옥자</span>
                            <span className="td03">gogo@gamail.com</span>
                            <span className="td04">여</span>
                            <span className="td05">외국인</span>
                            <span className="td06">2020.10.01</span>
                            <span className="td07">카카오연동</span>
                            <span className="td08"><i className="btn">상세보기</i><i className="btn">작성한 게시글</i></span>
                        </div><div className="list_line">
                            <span className="td01 checkbox">
                                <input type="checkbox" name="agree" id="agree1" title="선택" />
                                <label htmlFor="agree1" />
                            </span>
                            <span className="td02">김옥자</span>
                            <span className="td03">gogo@gamail.com</span>
                            <span className="td04">여</span>
                            <span className="td05">외국인</span>
                            <span className="td06">2020.10.01</span>
                            <span className="td07">카카오연동</span>
                            <span className="td08"><i className="btn">상세보기</i><i className="btn">작성한 게시글</i></span>
                        </div>
                        <div className="list_line">
                            <span className="td01 checkbox">
                                <input type="checkbox" name="agree" id="agree1" title="선택" />
                                <label htmlFor="agree1" />
                            </span>
                            <span className="td02">김옥자</span>
                            <span className="td03">gogo@gamail.com</span>
                            <span className="td04">여</span>
                            <span className="td05">외국인</span>
                            <span className="td06">2020.10.01</span>
                            <span className="td07">카카오연동</span>
                            <span className="td08"><i className="btn">상세보기</i><i className="btn">작성한 게시글</i></span>
                        </div>
                        <div className="list_line">
                            <span className="td01 checkbox">
                                <input type="checkbox" name="agree" id="agree1" title="선택" />
                                <label htmlFor="agree1" />
                            </span>
                            <span className="td02">김옥자</span>
                            <span className="td03">gogo@gamail.com</span>
                            <span className="td04">여</span>
                            <span className="td05">외국인</span>
                            <span className="td06">2020.10.01</span>
                            <span className="td07">카카오연동</span>
                            <span className="td08"><i className="btn">상세보기</i><i className="btn">작성한 게시글</i></span>
                        </div>
                        <Paginater pageNumber={10} totalPageCount={20} />
                        <div className="fin">
                            <div className="float_left">
                                <button type="submit" className="btn medium">모두선택</button>
                            </div>
                            <div className="float_right">
                                <button type="submit" className="btn medium mr5">탈퇴시키기</button>
                                <button type="submit" className="btn medium">활동정지</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* popup-작성한 게시글 보기 */}
            <div id="Popup01" className="popup_bg_full" style={{ display: 'none;' }}>
                <a className="close_icon">
                    <i className="flaticon-multiply"></i>
                </a>
                <div className="in_txt master_popup">
                    <h3><strong>김홍홍</strong>님이 작성한 글 </h3>
                    {/* 작성한글 */}
                    <div className="info_page">
                        <div className="alignment">
                            <div className="left_div">총 <strong>22,222</strong>개</div>
                            <div className="right_div">
                                <select className="sel01">
                                    <option>작성일 &uarr;</option>
                                    <option>작성일 &darr;</option>
                                    <option>조회수 &uarr;</option>
                                    <option>조회수 &darr;</option>
                                </select>
                                <select className="sel02">
                                    <option>10개 보기</option>
                                    <option>50개 보기</option>
                                    <option>100개 보기</option>
                                </select>
                            </div>
                        </div>


                        <div className="board_list_mini ln05">
                            <div className="thead">
                                <div className="tt01 checkbox">
                                    <input type="checkbox" name="agree" id="agree-popup-0" title="모두선택" />
                                    <label htmlFor="agree-popup-0" />
                                </div>
                                <div className="tt02">게시판</div>
                                <div className="tt03">번호</div>
                                <div className="tt04">제목</div>
                                <div className="tt05">날짜</div>
                            </div>
                            <div className="tbody">
                                <ul>
                                    <li>
                                        <div className="tt01 checkbox">
                                            <input type="checkbox" name="agree" id="agree-popup-1" title="선택" />
                                            <label htmlFor="agree-popup-1" />
                                        </div>
                                        <div className="tt02">문의하기</div>
                                        <div className="tt03">23</div>
                                        <div className="tt04"><a href="/">궁금한게 있어요 :) <i className="q_ok">답변완료</i></a></div>
                                        <div className="tt05">2020.02.02 11:00</div>
                                    </li>
                                    <li>
                                        <div className="tt01 checkbox">
                                            <input type="checkbox" name="agree" id="agree-popup-2" title="선택" />
                                            <label htmlFor="agree-popup-2" />
                                        </div>
                                        <div className="tt02">문의하기</div>
                                        <div className="tt03">23</div>
                                        <div className="tt04"><a href="/">궁금한게 있어요 :) <i className="q_no">답변중</i></a></div>
                                        <div className="tt05">2020.02.02 11:00</div>
                                    </li>
                                    <li className="no_data">
                                        {/*게시글이 없을때*/}
                                        <i className="jandaicon-info3" />
                                        <span>게시글이 없습니다.</span>
                                    </li>
                                </ul>

                            </div>
                            <Paginater pageNumber={10} totalPageCount={20} />
                        </div>

                        <div className="fin">
                            <div className="float_left">
                                <button type="submit" className="btn medium">모두선택</button>
                            </div>
                            <div className="float_right">
                                <button type="submit" className="btn medium mr5">삭제</button>
                                <button type="submit" className="btn medium mr5">비공개전환</button>
                                <button type="submit" className="btn medium">공개전환</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* popup-상세보기 */}
            <div id="Popup01" className="popup_bg_full" style={{ display: 'none;' }}>
                <a className="close_icon">
                    <i className="flaticon-multiply"></i>
                </a>
                <div className="in_txt master_popup">
                    <h3>회원 상세정보</h3>
                    <div className="info_txt">
                        <span className="start-day">가입일: 2020.08.26</span>
                        <span className="recently-day">최근접속: 2020.08.26 12:12</span>
                        <button className="btn"><i className="flaticon-print mr5"></i>프린터</button>
                        <button className="btn mr5"><i className="flaticon-download mr5"></i>엑셀저장</button>
                        <button className="btn mr5">작성한 게시글</button>
                    </div>
                    {/* 회원정보 */}
                    <div className="info_page">
                        <div className="full_div">
                            <h4>회원정보</h4>
                            <div className="info_table line8 w50">
                                <div className="tr">
                                    <div className="th01">이름</div>
                                    <div className="td01"><span>김김김</span></div>
                                    <div className="th02">이메일(ID)</div>
                                    <div className="td02"><a href="mailto:gggg@naver.com">gggg@naver.com</a></div>
                                    <div className="th03">생년월일</div>
                                    <div className="td03"><input type="text" className="w100" /></div>
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
                                    <div className="td01"><input type="text" className="w100" /></div>
                                    <div className="th02">가입방법</div>
                                    <div className="td02">
                                        <select>
                                            <option>네이버연동</option>
                                            <option>카카오톡연동</option>
                                            <option>홈페이지</option>
                                        </select>
                                    </div>
                                    <div className="th03">휴대폰</div>
                                    <div className="td03"><input type="text" className="w100" /></div>
                                    <div className="th04">국적</div>
                                    <div className="td04">
                                        <select>
                                            <option>내국인</option>
                                            <option>외국인</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* 약관동의 */}
                    <div className="info_page">
                        <div className="full_div">
                            <h4>약관동의</h4>
                            <div className="info_table line8 w50">
                                <div className="tr">
                                    <div className="th01">마케팅 정보수신동의</div>
                                    <div className="td01 text-r">
                                        <span className="check no">동의안함</span>
                                    </div>
                                    <div className="th02">개인정보수집 및 이용</div>
                                    <div className="td02 text-r">
                                        <span className="check no">동의안함</span>
                                    </div>
                                    <div className="th03">개인정보 제3자 제공</div>
                                    <div className="td03 text-r">
                                        <span className="check no">동의안함</span>
                                    </div>
                                    <div className="th04">이용약관</div>
                                    <div className="td04 text-r">
                                        <span className="check ok">동의함</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 예약 및 결제 */}
                    <div className="info_page">
                        <div className="full_div">
                            <h4>예약 및 결제</h4>
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
                        </div>
                    </div>

                    {/* 취소 및 환불내역 */}
                    <div className="info_page">
                        <div className="full_div">
                            <h4>취소 및 환불내역</h4>
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
                                            <textarea style={{ height: "100px;" }} placeholder="메모는 꼼꼼하게 체크는 정확하게"></textarea>
                                        </div>
                                    </li>
                                    <li className="tr count">0/3000</li>
                                </ul>
                                <div className="text_box_bottom">
                                    <div className="float_left w50">
                                        <span><i className="jandaicon-info2"></i>기존의 메모를 삭제하시면 되돌릴 수 없습니다. 신중하게 입력해 주세요.</span>
                                    </div>
                                    <div className="btn_send float_right"><button className="comment_btn">저장</button> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fin">
                        <div className="float_left">
                            <button type="submit" className="btn medium">탈퇴시키기</button>
                        </div>
                        <div className="float_right">
                            <button type="submit" className="btn medium mr5">수정하기</button>
                            <button type="submit" className="btn medium">저장하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="fade" className="fade" style={{ display: 'none;' }}></div>
    </MasterLayout >
};

export default MsMemberD;