import CalendarIcon from 'components/common/icon/CalendarIcon';
import { MypageLayout } from 'layout/MypageLayout';
import { Paginater } from 'components/common/Paginator';
import React from 'react';

interface IProp { }

export const MyReservation: React.FC<IProp> = () => {
    return <MypageLayout>
        <div className="in reservation_div">
            <h4>예약관리</h4>
            <div className="paper_div">
                <div className="con_top">
                    <h6>상세검색</h6>
                    <div className="search_box">
                        <div className="jul2">
                            <div className="title">상태</div>
                            <div className="text">
                                <span className="check on">전체</span>
                                <span className="check">예약대기</span>
                                <span className="check">예약완료</span>
                                <span className="check">예약취소</span>
                            </div>
                        </div>
                        <div className="jul4">
                            <div className="title">날짜</div>
                            <div className="text">
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
                        </div>
                        <div className="jul1">
                            <div>
                                <select className="option">
                                    <option>상품코드</option>
                                    <option>상품명</option>
                                    <option>예약자</option>
                                </select>
                                <div className="search_div">
                                    <input className="" type="text" placeholder="검색 내용을 입력해주세요." />
                                    <div className="svg_img">
                                        <img src="/img/svg/search_icon.svg" alt="검색아이콘" />
                                        <button />
                                    </div>

                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="con_bottom">

                    <div className="con_box">
                        <div className="alignment">
                            <div className="left_div"><span className="infotxt">총 <strong>22,222</strong>건</span></div>
                            <div className="right_div">
                                <ul className="board_option">
                                    <li><a href="/">모두선택</a></li>
                                    <li><a href="/">모두선택 해제</a></li>
                                    <li><a href="/">엑셀파일</a></li>

                                </ul>
                                <select className="sel01">
                                    <option>최신↑</option>
                                    <option>최신↓</option>
                                    <option>조회수</option>
                                </select>
                                <select className="sel02">
                                    <option>10개 보기</option>
                                    <option>50개 보기</option>
                                    <option>100개 보기</option>
                                </select>
                            </div>
                        </div>
                        <div className="reservation_list">
                            <div className="th">
                                <div className="t01">
                                    <span className="checkbox">
                                        <input type="checkbox" name="agree" id="agree0" title="전체선택" />
                                        <label htmlFor="agree0" />
                                    </span>
                                </div>
                                <div className="t02">예약번호</div>
                                <div className="t04">상품정보</div>
                                <div className="t05">예약자</div>
                                <div className="t06">금액</div>
                                <div className="t07">상태</div>
                            </div>
                            <div className="td">
                                <div className="t01">
                                    <span className="checkbox">
                                        <input type="checkbox" name="agree" id="agree1" title="개별선택" />
                                        <label htmlFor="agree1" />
                                    </span>
                                </div>
                                <div className="t02">
                                    <div className="align">
                                        <span className="r-number">R-34252</span>
                                        <button className="btn">상세정보</button>
                                    </div>
                                </div>
                                <div className="t04">
                                    <div className="img" style={{ backgroundImage: 'url(/img/store_01.jpg)' }} ></div>
                                    <div className="info">
                                        <span className="ct">문화</span>
                                        <strong className="title">떠나요~거제도~!!!!!!!!!!!!!!!!</strong>
                                        <div className="txt">
                                            <span className="s-day">출발일: 2020.9.9</span>
                                            <span className="where">출발장소: 부산대학교 앞</span>
                                            <span className="g-number">상품번호: PK-034982</span>
                                            <span className="r-day">예약일: 2020.08.26</span>

                                            <span className="goods-state1">확정여부: 출발미정(6/10)</span>
                                            <span className="goods-state2">상품상태: 예약진행중</span>

                                        </div>
                                    </div>
                                </div>
                                <div className="t05">
                                    <div className="align">
                                        <span className="name">홍언니</span>
                                        <span className="ph">010-2222-2222</span>
                                        <span className="men">예약인원: 총 4명<br />( 성인2 / 소아2 / 유아0 )</span>
                                    </div>
                                </div>
                                <div className="t06">
                                    <div className="align">
                                        <strong className="money">50,000</strong>
                                        <span className="pay">결제종류: 신용카드</span>
                                        <span className="pay-day">결제일: 2020.08.26</span>
                                    </div>
                                </div>
                                <div className="t07">
                                    <div className="align">
                                        <i className="state re-ok">예약완료</i>
                                        </div>
                                </div>
                                 
                            </div>
                            <div className="td">
                                <div className="t01">
                                    <span className="checkbox">
                                        <input type="checkbox" name="agree" id="agree1" title="개별선택" />
                                        <label htmlFor="agree1" />
                                    </span>
                                </div>
                                <div className="t02">
                                    <div className="align">
                                        <span className="r-number">R-34252</span>
                                        <button className="btn">상세정보</button>
                                    </div>
                                </div>
                                <div className="t04">
                                    <div className="img" style={{ backgroundImage: 'url(/img/store_01.jpg)' }} ></div>
                                    <div className="info">
                                        <span className="ct">문화</span>
                                        <strong className="title">떠나요~거제도~!!!!!!!!!!!!!!!!</strong>
                                        <div className="txt">
                                            <span className="s-day">출발일: 2020.9.9</span>
                                            <span className="where">출발장소: 부산대학교 앞</span>
                                            <span className="g-number">상품번호: PK-034982</span>
                                            <span className="r-day">예약일: 2020.08.26</span>

                                            <span className="goods-state1">확정여부: 출발미정(6/10)</span>
                                            <span className="goods-state2">상품상태: 예약진행중</span>
                                         
                                        </div>
                                     
                                    </div>
                                    <div className="memo">
                                        <p><i className="flaticon-flag-2"></i>메모자리~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~메모메모메모메모메모메모메모메모메모메모메모메모메모메모메모~~~~~~~~~~~~~~~~~~~</p>
                                    </div>
                                </div>
                                <div className="t05">
                                    <div className="align">
                                        <span className="name">홍언니</span>
                                        <span className="ph">010-2222-2222</span>
                                        <span className="men">예약인원: 총 4명<br />( 성인2 / 소아2 / 유아0 )</span>
                                    </div>
                                </div>
                                <div className="t06">
                                    <div className="align">
                                        <strong className="money">50,000</strong>
                                        <span className="pay">결제종류: 신용카드</span>
                                        <span className="pay-day">결제일: 2020.08.26</span>
                                    </div>
                                </div>
                                <div className="t07">
                                    <div className="align">
                                         <i className="state re-refund">예약취소</i>
                                        <span className="refund-txt">(예약취소대기:부분취소)</span>
                                    </div>
                                </div>

                            </div>
                            <div className="td">
                                <div className="t01">
                                    <span className="checkbox">
                                        <input type="checkbox" name="agree" id="agree1" title="개별선택" />
                                        <label htmlFor="agree1" />
                                    </span>
                                </div>
                                <div className="t02">
                                    <div className="align">
                                         <span className="r-number">R-34252</span>
                                        <button className="btn">상세정보</button>
                                    </div>
                                </div>
                                <div className="t04">
                                    <div className="img" style={{ backgroundImage: 'url(/img/store_01.jpg)' }} ></div>
                                    <div className="info">
                                        <span className="ct">문화</span>
                                        <strong className="title">떠나요~거제도~!!!!!!!!!!!!!!!!</strong>
                                        <div className="txt">
                                            <span className="s-day">출발일: 2020.9.9</span>
                                            <span className="where">출발장소: 부산대학교 앞</span>
                                            <span className="g-number">상품번호: PK-034982</span>
                                            <span className="r-day">예약일: 2020.08.26</span>
                                            
                                            <span className="goods-state1">확정여부: 출발미정(6/10)</span>
                                            <span className="goods-state2">상품상태: 예약진행중</span>

                                        </div>
                                    </div>
                                </div>
                                <div className="t05">
                                    <div className="align">
                                        <span className="name">홍언니</span>
                                        <span className="ph">010-2222-2222</span>
                                        <span className="men">예약인원: 총 4명<br />( 성인2 / 소아2 / 유아0 )</span>
                                    </div>
                                </div>
                                <div className="t06">
                                    <div className="align">
                                        <strong className="money">50,000</strong>
                                        <span className="pay">결제종류: 신용카드</span>
                                        <span className="pay-day">결제일: 2020.08.26</span>
                                    </div>
                                </div>
                                <div className="t07">
                                    <div className="align">
                                        <i className="state re-stay">예약대기</i>
                                    </div>
                                </div>

                            </div>


                            <Paginater pageNumber={10} totalPageCount={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="Popup01" className="popup_bg_full" style={{ display: 'block;' }}>
            <a className="close_icon">
                <i className="flaticon-multiply"></i>
            </a>
            <div className="in_txt statement_popup">
                <h4>예약 상세정보</h4>
                <div className="alignment">
                    <div className="left_div"><span className="infotxt"><i>2020.10.1 ~ 2020.10.30 예약</i>이 총 <strong>5</strong>건</span></div>
                </div>
                <div className="fuction_list_mini">
                    <div className="thead">
                        <div className="th02">상품코드</div>
                        <div className="th03">상품명</div>
                        <div class="th04">예약자</div>
                        <div className="th05">예약날짜</div>
                        <div className="th06">예약금</div>
                        <div className="th07">상태</div>
                    </div>
                    <div className="tbody">
                        <ul>
                            <li>
                                <div className="th02">GUIDE-01230</div>
                                <div className="th03">제주도로 떠나요~ </div>
                                <div className="th04">홍나리</div>
                                <div className="th05">2020.02.02</div>
                                <div className="th06">50,000</div>
                                <div className="th07"><strong className="ok">예약완료</strong></div>
                            </li>
                            <li>
                                <div className="th02">GUIDE-01230</div>
                                <div className="th03">제주도로 떠나요~ </div>
                                <div className="th04">홍나리</div>
                                <div className="th05">2020.02.02</div>
                                <div className="th06">50,000</div>
                                <div className="th07"><strong className="ok">예약완료</strong></div>
                            </li>
                            <li>
                                <div className="th02">GUIDE-01230</div>
                                <div className="th03">제주도로 떠나요~ </div>
                                <div className="th04">홍나리</div>
                                <div className="th05">2020.02.02</div>
                                <div className="th06">50,000</div>
                                <div className="th07"><strong className="ok">예약완료</strong></div>
                            </li>
                            <li>
                                <div className="th02">GUIDE-01230</div>
                                <div className="th03">제주도로 떠나요~ </div>
                                <div className="th04">홍나리</div>
                                <div className="th05">2020.02.02</div>
                                <div className="th06">50,000</div>
                                <div className="th07"><strong className="ok">예약완료</strong></div>
                            </li>
                            <li>
                                <div className="th02">GUIDE-01230</div>
                                <div className="th03">제주도로 떠나요~ </div>
                                <div className="th04">홍나리</div>
                                <div className="th05">2020.02.02</div>
                                <div className="th06">50,000</div>
                                <div className="th07"><strong className="ok">예약완료</strong></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="alignment ">
                    <div className="left_div"><span className="infotxt"><i>예약취소 환수금</i>이 총 <strong>2</strong>건</span></div>
                </div>
                <div className="fuction_list_mini">
                    <div className="thead">
                        <div className="th02">상품코드</div>
                        <div className="th03">상품명</div>
                        <div className="th04">예약자</div>
                        <div className="th05">예약날짜</div>
                        <div className="th06">예약금</div>
                        <div className="th07">상태</div>
                    </div>
                    <div className="tbody">
                        <ul>
                            <li>
                                <div className="th02">GUIDE-01230</div>
                                <div className="th03">제주도로 떠나요~ </div>
                                <div className="th04">홍나리</div>
                                <div className="th05">2020.02.02</div>
                                <div className="th06">50,000</div>
                                <div className="th07"><strong className="no">예약취소</strong></div>
                            </li>
                            <li>
                                <div className="th02">GUIDE-01230</div>
                                <div className="th03">제주도로 떠나요~ </div>
                                <div className="th04">홍나리</div>
                                <div className="th05">2020.02.02</div>
                                <div className="th06">50,000</div>
                                <div className="th07"><strong className="no">예약취소</strong></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sum_div mt50">
                    <ul className="first_ul">
                        <li>
                            <div className="title"><strong>실 판매금액</strong> : </div>
                            <div className="body">
                                <div>20,000,349원</div>
                            </div>
                        </li>
                        <li>
                            <div className="title"><strong>수수료공제(5%)</strong> : </div>
                            <div className="body">

                                <div>(-) 1,000,017원</div>
                            </div>
                        </li>
                        <li>
                            <div className="title"><strong>세금공제(3.3%)</strong> : </div>
                            <div className="body">

                                <div>(-) 660,011원</div>
                            </div>
                        </li>
                        <li>
                            <div className="title"><strong>기타 공제금</strong> : </div>
                            <div className="body">
                                <div>(-) 0원</div>
                            </div>
                        </li>
                        <li>
                            <div className="title"><strong>예약취소 환급금</strong> : </div>
                            <div className="body">
                                <div>(-) 20원</div>
                            </div>
                        </li>
                    </ul>
                    <ul className="last_ul">
                        <li>
                            <div><i>=</i>총 정산 예상금 : <strong>18,340,321</strong>원</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="fade" className="fade" style={{ display: 'block;' }}></div>
    </MypageLayout>
};

export default MyReservation;