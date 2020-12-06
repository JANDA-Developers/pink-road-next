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


                            {/* <Paginater pageNumber={10} totalPageCount={20} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="Popup01" className="popup_bg_full" style={{ display: 'block;' }}>
            <a className="close_icon">
                <i className="flaticon-multiply"></i>
            </a>
            <div className="in_txt reservation_popup">
                <h3>예약 상세정보</h3>
                <div className="info_txt">
                    <span className="r-number">예약번호: <i>R-34252</i></span>
                    <span className="r-day">예약일: 2020.08.26</span>
                    <span className="pay-day">결제일: 2020.08.26</span>
                    <button className="btn"><i className="flaticon-print mr5"></i>프린터</button>
                    <button className="btn mr5"><i className="flaticon-download mr5"></i>엑셀저장</button>
                </div>

                <div className="info_table">
                    <div className="tr">
                        <div className="top01">
                            <div className="img" style={{ backgroundImage: 'url(/img/store_01.jpg)' }} ></div>
                            <div className="info">
                                <span className="ct">문화</span><span className="g-number">상품번호: PK-034982</span>
                                <strong className="title">떠나요~거제도~!!!!!!!!!!!!!!!!</strong>
                                <div className="txt">
                                    <span className="goods-state1">확정여부: 출발미정(6/10)</span>
                                    <span className="goods-state2">상품상태: 예약진행중</span>

                                </div>
                            </div>
                        </div>
                        <div className="top02">
                            <div className="align">
                                <span className="s-day">출발일: 2020.9.9</span>
                                <span className="where">출발장소: 부산대학교 앞</span>
                            </div>
                        </div>
                        <div className="top03">
                            <div className="align">
                                <i className="state re-stay">예약대기</i>
                                <span><i className="jandaicon-info2"></i>예약은 걸었으나 입금이 되지 않았습니다. 1일 이내에 입금을 하지 않으시면 예약대기가 풀립니다.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info_page">
                    <div className="left_div">
                        <h4>결제 정보</h4>
                        <div className="info_table w50">
                            <div className="tr">
                                <div className="th01">
                                    결제금액
                                </div>
                                <div className="td01">
                                    <span>50,000</span>
                                </div>
                                <div className="th02">
                                    결제방법
                                </div>
                                <div className="td02">
                                    <span>카드</span>
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">
                                    환불정보-예금주
                                </div>
                                <div className="td01">
                                    <span>홍언니</span>
                                </div>
                                <div className="th02">
                                    환불정보-계좌
                                </div>
                                <div className="td02">
                                    <span>(부산은행)000-000-00000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right_div">
                        <h4>환불 정보</h4>
                        <div className="info_table w50">
                            <div className="tr">
                                <div className="th01">
                                    취소신청일
                                </div>
                                <div className="td01">
                                    <span>2020.12.12</span>
                                </div>
                                <div className="th02">
                                    환불예정일
                                </div>
                                <div className="td02">
                                    <span>2020.12.13</span>
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">
                                    환불형태
                                </div>
                                <div className="td01">
                                    <span>부분취소</span>
                                </div>
                                <div className="th02">
                                    환불금액
                                </div>
                                <div className="td02">
                                    <span>43,000원</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info_page">
                    <div className="full_div">
                        <h4>예약자 정보</h4>
                        <div className="info_table w50">
                            <div className="top_info">
                                <span className="tt">선택된 예약 인원</span>
                                <span>총 4명 ( 성인2 / 소아2 / 유아0 )</span>
                                <span className="float_right"><i className="menok">예약자-포함</i><i className="menno">예약자-미포함</i></span> {/* 포함 미포함 둘중하나만 표시*/}
                            </div>
                            <div className="tr">
                                <div className="re01">
                                    예약자(본인)
                                </div>
                                <div className="re02">
                                    예약자명
                                </div>
                                <div className="re03">
                                    <span>홍언니</span>
                                </div>
                                <div className="re04">
                                    연락처
                                </div>
                                <div className="re05">
                                    <a href="tel:010-0000-0000">010-0000-0000</a>
                                </div>
                                <div className="re06">
                                    성별
                                </div>
                                <div className="re07">
                                    <span>여성</span>
                                </div>
                                <div className="re08">
                                    나이
                                </div>
                                <div className="re09">
                                    <span>1988-03-03 (만 32세)</span>
                                </div>
                            </div>
                            <div className="tr">
                                <div className="re01">
                                    여행자1
                                    <span className="cut_nev">
                                        <i className="flaticon-substract"></i>
                                        <i className="flaticon-add"></i>
                                    </span>
                                </div>
                                <div className="re02">
                                    여행자명
                                </div>
                                <div className="re03">
                                    <span><input type="text" /></span>
                                </div>
                                <div className="re04">
                                    연락처
                                </div>
                                <div className="re05">
                                    <span><input type="text" /></span>
                                </div>
                                <div className="re06">
                                    성별
                                </div>
                                <div className="re07">
                                    <select>
                                        <option>여성</option>
                                        <option>남성</option>
                                    </select>
                                </div>
                                <div className="re08">
                                    나이
                                </div>
                                <div className="re09">
                                    <span><input type="text" /> (만 --세)</span>{/*input박스 클릭시 달력이 나와야 함, 우측 나이 계산은 자동으로 출력*/}
                                </div>
                            </div>
                        </div>

                    </div>


                </div>


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
                        <button type="submit" className="btn medium">
                            예약취소 요청하기
                        </button>
                    </div>
                    <div className="float_right">
                        <button type="submit" className="btn medium mr5">
                            수정하기
                        </button>
                        <button type="submit" className="btn medium">
                            저장하기
                        </button>
                    </div>
                </div>



            </div>
        </div>
        <div id="fade" className="fade" style={{ display: 'block;' }}></div>
    </MypageLayout>
};

export default MyReservation;