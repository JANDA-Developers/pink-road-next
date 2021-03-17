import CalendarIcon from 'components/common/icon/CalendarIcon';
import React from 'react';
import Link from "next/link";

interface IProp { }

export const StyleGuide: React.FC<IProp> = () => {
    return <div className="styleguidebox">
        <h3>플랫폼 스타일가이드</h3>
        <ul className="chartlist">
            <li><a href="#">버튼디자인</a></li>
        </ul>

        <div className="layoutbox">
            <h4>버튼디자인</h4>
            <p className="layoutbox__infotext">버튼 디자인은 기본적으로 <strong>class명</strong>을<strong> .btn</strong> 으로 사용한다. a, button, span, i 태그 구분없이 가능</p>
            <div className="layoutbox__ex">
                <div className="layoutbox__ovject">
                    <p className="layoutbox__ovject__txt">.btn만 쓸때</p>
                    <div className="layoutbox__item "><button type="submit" className="btn">입금확인</button></div>
                </div>
                <div className="layoutbox__ovject">
                    <p className="layoutbox__ovject__txt"> .btn .small 같이 쓸때</p>
                    <div className="layoutbox__item"><button type="submit" className="btn small">입금확인</button></div>
                </div>
                <div className="layoutbox__ovject">
                    <p className="layoutbox__ovject__txt"> .btn .medium 같이 쓸때</p>
                    <div className="layoutbox__item"><button type="submit" className="btn medium">입금확인</button></div>
                </div>
                <div className="layoutbox__ovject">
                    <p className="layoutbox__ovject__txt"> 비활성화를 원하면 .off 추가 </p>
                    <div className="layoutbox__item"><button type="submit" className="btn off">입금확인</button></div>
                </div>
            </div>
        </div>

        <div className="layoutbox">
            <h4>테이블상단 디자인</h4>
            <p className="layoutbox__infotext">상단에는 <strong>.alignment</strong>를 하단에 <strong>.fin</strong>class를 사용한다. 좌측 우측을 디자인을 나눌때는 <strong>.left_div</strong>왼쪽디자인을 <strong>.right_div</strong>오른쪽디자인을 넣자 </p>
            <div className="layoutbox__ex">
                <div className="layoutbox__ovject w100">
                    <p className="layoutbox__ovject__txt">좌측 우측을 함께 쓸때</p>
                    <div className="layoutbox__item">
                        <div className="alignment">
                            <div className="left_div">
                                <ul className="board_option">
                                    <li className="on"><a href="/">전체<strong>46</strong></a></li>
                                    <li><a href="/">여행<strong>23</strong></a></li>
                                    <li><a href="/">체험<strong>23</strong></a></li>
                                </ul>
                            </div>
                            <div className="right_div">
                                <ul className="board_option">
                                    <li><a href="/">전체선택</a></li>
                                    <li><a href="/">엑셀파일<i className="jandaicon-info2 tooltip" data-tip="선택된 항목에 한해서 엑셀파일로 저장이 가능합니다." /></a></li>

                                </ul>
                                <select className="sel01">
                                    <option>정산요청일 &uarr;</option>
                                    <option>정산요청일 &darr;</option>
                                </select>
                                <select className="sel02">
                                    <option>10개 보기</option>
                                    <option>50개 보기</option>
                                    <option>100개 보기</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="layoutbox__ovject w100">
                    <p className="layoutbox__ovject__txt">좌측 우측을 함께 쓸때</p>
                    <div className="layoutbox__item">
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
                    </div>
                </div>

            </div>
        </div>


        <div className="layoutbox">
            <h4>정산 상태 아이콘</h4>
            <p className="layoutbox__infotext">마스터에서 사용되어지며 지급관련 항목 지급보류/정산완료/정산대기때 사용됨.<strong>.sel</strong> 클래스 사용 </p>
            <div className="layoutbox__ex">
                <div className="layoutbox__ovject">
                    <p className="layoutbox__ovject__txt">지급보류 했을때 .no</p>
                    <div className="layoutbox__item">
                        <span className="sel no">지급보류</span>
                    </div>
                </div>
                <div className="layoutbox__ovject">
                    <p className="layoutbox__ovject__txt">정산완료 했을때 .ok</p>
                    <div className="layoutbox__item">
                        <span className="sel ok">정산완료</span>
                    </div>
                </div>
                <div className="layoutbox__ovject">
                    <p className="layoutbox__ovject__txt">정산대기 했을때 .stand</p>
                    <div className="layoutbox__item">
                        <span className="sel stand">정산대기</span>
                    </div>
                </div>

            </div>
        </div>


        <div className="layoutbox">
            <h4>예약상태 아이콘</h4>
            <p className="layoutbox__infotext">예약관련 항목 예약대기/예약완료/예약취소 사용됨.<strong>.r-btn </strong> 클래스 사용 </p>
            <div className="layoutbox__ex">
                <div className="layoutbox__ovject">
                    <p className="layoutbox__ovject__txt">예약대기 했을때 .stand</p>
                    <div className="layoutbox__item">
                        <span className="r-btn stand">예약대기</span>
                    </div>
                </div>
                <div className="layoutbox__ovject">
                    <p className="layoutbox__ovject__txt">예약완료 했을때 .yes</p>
                    <div className="layoutbox__item">
                        <span className="r-btn yes">예약완료</span>
                    </div>
                </div>
                <div className="layoutbox__ovject">
                    <p className="layoutbox__ovject__txt">예약취소 했을때 .no</p>
                    <div className="layoutbox__item">
                        <span className="r-btn no">예약취소</span>
                    </div>
                </div>

            </div>
        </div>




        <div className="layoutbox">
            <h4>입력폼 디자인</h4>
            <p className="layoutbox__infotext">입력폼에 대한 디자인 </p>
            <div className="layoutbox__ex">
                <div className="layoutbox__ovject">
                    <p className="layoutbox__ovject__txt">체크박스</p>
                    <div className="layoutbox__item">
                        <i className="checkbox">
                            <input type="checkbox" name="agree" id="agree0" title="전체선택" />
                            <label htmlFor="agree0" />
                        </i>
                    </div>
                </div>
                <div className="layoutbox__ovject">
                    <p className="layoutbox__ovject__txt">텍스트박스</p>
                    <div className="layoutbox__item">
                        <input type="text" className="w100" />
                    </div>
                </div>
                <div className="layoutbox__ovject">
                    <p className="layoutbox__ovject__txt">셀렉트박스</p>
                    <div className="layoutbox__item">
                        <select>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                </div>

            </div>
        </div>

        <div className="layoutbox">
            <h4>게시판 디자인A</h4>
            <p className="layoutbox__infotext">게시판 디자인-리스트 </p>
            <div className="layoutbox__ex">
                <div className="layoutbox__ovject w100">
                    <p className="layoutbox__ovject__txt">게시판 디자인-리스트</p>
                    <div className="layoutbox__item">
                        <div className="board_list st01">
                            <div className="tbody">
                                <ul>
                                    <li>
                                        <div className="td01">2323</div>
                                        <div className="td02">
                                            <span className="title">문의합니다. 예약이 안되요.</span>
                                            <img className="new" src="../img/svg/new.svg" alt="new" />
                                            <i className="q_no">미답변</i>
                                        </div>
                                        <div className="td03">
                                            도로롱도마뱀
                                        </div>
                                        <div className="td04">2021.01.22 10:56</div>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>




        <div className="layoutbox">
            <h4>게시판 디자인B</h4>
            <p className="layoutbox__infotext">게시판 디자인-갤러리 </p>
            <div className="layoutbox__ex">
                <div className="layoutbox__ovject w100">
                    <p className="layoutbox__ovject__txt">게시판 디자인-갤러리</p>
                    <div className="layoutbox__item">
                        <div className="board_list st03">
                            <div className="tbody">
                                <ul>
                                    <li>
                                        <div className="td01">2323</div>
                                        <div className="td02"><span className="img" style={{ backgroundImage: 'url(https://pink-loader-storage.s3.ap-northeast-2.amazonaws.com/1611280573477_thum.jpg)' }}></span></div>
                                        <div className="td03"><span className="title">테스트</span><span className="id"></span><span className="count">조회[2]</span></div>
                                        <div className="td04">2021.01.22 10:56</div>
                                    </li>
                                    <li>
                                        <div className="td01">2323</div>
                                        <div className="td02"><span className="img" style={{ backgroundImage: 'url(https://pink-loader-storage.s3.ap-northeast-2.amazonaws.com/1611280573477_thum.jpg)' }}></span></div>
                                        <div className="td03"><span className="title">테스트</span><span className="id"></span><span className="count">조회[2]</span></div>
                                        <div className="td04">2021.01.22 10:56</div>
                                    </li>
                                    <li>
                                        <div className="td01">2323</div>
                                        <div className="td02"><span className="img" style={{ backgroundImage: 'url(https://pink-loader-storage.s3.ap-northeast-2.amazonaws.com/1611280573477_thum.jpg)' }}></span></div>
                                        <div className="td03"><span className="title">테스트</span><span className="id"></span><span className="count">조회[2]</span></div>
                                        <div className="td04">2021.01.22 10:56</div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>





        <div className="layoutbox">
            <h4>마스터 페이지 상단 검색창</h4>
            <p className="layoutbox__infotext">마스터 페이지 상단 마다 검새창이 있음</p>
            <div className="layoutbox__ex">
                <div className="layoutbox__ovject w100">
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
                            <span className="pc"> ~ </span>
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
                </div>

            </div>
        </div>





    </div>
};

export default StyleGuide;