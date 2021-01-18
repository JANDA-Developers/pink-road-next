import { MasterLayout } from 'layout/MasterLayout';
import { Paginater } from 'components/common/Paginator';
import { SearcfInfoBox } from 'components/common/SearcfInfoBox';
import CalendarIcon from 'components/common/icon/CalendarIcon';
import React from 'react';
import Link from "next/link";
import ReactTooltip from 'react-tooltip';

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
export const MsReservationB: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in ">
            <h4>예약관리</h4>
            <div className="in_content">
                <div className="tab-nav">
                    <ul>
                        <li><Link href="/master/reservation"><a>예약·결제관리</a></Link></li>
                        <li><Link href="/master/reservation/reservation1-2"><a>취소·환불관리</a></Link></li>
                        <li className="on"><Link href="/master/reservation/reservation1-3"><a>매출·정산관리</a></Link></li>
                        {/* <li><Link href="/master/reservation/reservation1-4"><a>예약수기등록관리</a></Link></li> */}
                    </ul>
                </div>
                <div className="con reservation calculate">
                    <div className="con_box_top pb5">
                        <div className="top_info_number">
                            <ul className="ln3">
                                <li>
                                    <strong>234</strong>
                                    <span>전체</span>
                                </li>
                                <li>
                                    <strong>234</strong>
                                    <span>정산요청</span>
                                </li>
                                <li>
                                    <strong>234</strong>
                                    <span>정산완료</span>
                                </li>
                            </ul>
                        </div>
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
                                    <option>상품명</option>
                                    <option>상품번호</option>
                                    <option>파트너명</option>
                                    <option>정산상태</option>
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
                    <div className="reservation_list ln07">
                        <div className="thead">
                            <div className="t01">
                                <span className="checkbox">
                                    <input type="checkbox" name="agree" id="agree0" title="전체선택" />
                                    <label htmlFor="agree0" />
                                </span>
                            </div>
                            <div className="t02">유형</div>
                            <div className="t03">정산계좌</div>
                            <div className="t04">상품</div>
                            <div className="t05">인원</div>
                            <div className="t06">금액</div>
                            <div className="t07">정산</div>
                            <div className="t08">관리</div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <span className="checkbox">
                                    <input type="checkbox" name="agree" id="agree1" title="개별선택" />
                                    <label htmlFor="agree1" />
                                </span>
                            </div>
                            <div className="t02">
                                <div className="align">
                                    <span className="goods-ct"><i className="m_title">유형:</i>여행</span>
                                </div>
                            </div>
                            <div className="t03">
                                <div className="align">
                                    <span className="bank">(부산은행)<br /><i className="m_title"> / </i>203-2323-2324<br /><i className="m_title"> / </i>예금주:김김김</span>
                                </div>
                            </div>
                            <div className="t04">
                                <div className="info">
                                    <span className="ct">문화</span> <span className="g-number">상품번호: PINK-034982</span>
                                    <strong className="title">떠나요~거제도~!!!!!!!!!!!!!!!!</strong>
                                    <div className="txt">
                                        <span className="s-day">출발일: 2020.9.9</span>
                                        <span className="where">출발장소: 부산대학교 앞</span>

                                        <span className="men">가격: 성인:25,000/소아10,000/유아:5,000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="t05">
                                <div className="align">
                                    <strong className="total_men"><i className="m_title">인원:</i>40명</strong>
                                    <span className="all_men">(성인20/소아20/유아0)</span>
                                </div>
                            </div>
                            <div className="t06">
                                <div className="align">
                                    <strong className="money"><i className="m_title">합계금액:</i>920,000원</strong>
                                    <span className="sum01">공제금액(-) 400,000원</span>
                                    <span className="sum03">정산금액: 830,000원</span>
                                </div>
                            </div>
                            <div className="t07">
                                <div className="align">
                                    <strong><span className="sel no">지급보류</span></strong>
                                </div>
                            </div>
                            <div className="t08">
                                <div className="align">
                                    <button className="btn small" onClick={popupOpen}>상세보기</button>
                                    <button className="btn small">정산완료</button>
                                    <button className="btn small off">지급보류</button>
                                    <button className="btn small off">정산대기</button>
                                </div>
                            </div>
                        </div>

                        <div className="tbody">
                            <div className="t01">
                                <span className="checkbox">
                                    <input type="checkbox" name="agree" id="agree1" title="개별선택" />
                                    <label htmlFor="agree1" />
                                </span>
                            </div>
                            <div className="t02">
                                <div className="align">
                                    <span className="goods-ct"><i className="m_title">유형:</i>여행</span>
                                </div>
                            </div>
                            <div className="t03">
                                <div className="align">
                                    <span className="bank">(부산은행)<br /> 203-2323-2324<br /> <i className="m_title"> / </i> 예금주:김김김</span>
                                </div>
                            </div>
                            <div className="t04">
                                <div className="info">
                                    <span className="ct">문화</span><span className="g-number">상품번호: PINK-034982</span>
                                    <strong className="title">떠나요~거제도~!!!!!!!!!!!!!!!!</strong>
                                    <div className="txt">
                                        <span className="s-day">출발일: 2020.9.9</span>
                                        <span className="where">출발장소: 부산대학교 앞</span>
                                        <span className="men">가격: 성인:25,000/소아10,000/유아:5,000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="t05">
                                <div className="align">
                                    <strong className="total_men"><i className="m_title">인원:</i>40명</strong>
                                    <span className="all_men">(성인20/소아20/유아0)</span>
                                </div>
                            </div>
                            <div className="t06">
                                <div className="align">
                                    <strong className="money"><i className="m_title">합계금액:</i>920,000원</strong>
                                    <span className="sum01">공제금액(-) 400,000원</span>
                                    <span className="sum03">정산금액: 830,000원</span>
                                </div>
                            </div>
                            <div className="t07">
                                <div className="align">
                                    <strong><span className="sel stand">정산대기</span></strong>
                                </div>
                            </div>
                            <div className="t08">
                                <div className="align">
                                    <button className="btn small" onClick={popupOpen}>상세보기</button>
                                    <button className="btn small">정산완료</button>
                                    <button className="btn small off">지급보류</button>
                                    <button className="btn small off">정산대기</button>
                                </div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="t01">
                                <span className="checkbox">
                                    <input type="checkbox" name="agree" id="agree1" title="개별선택" />
                                    <label htmlFor="agree1" />
                                </span>
                            </div>
                            <div className="t02">
                                <div className="align">
                                    <span className="goods-ct"><i className="m_title">유형:</i>여행</span>
                                </div>
                            </div>
                            <div className="t03">
                                <div className="align">
                                    <span className="bank">(부산은행)<br /> 203-2323-2324<br /> <i className="m_title"> / </i> 예금주:김김김</span>
                                </div>
                            </div>
                            <div className="t04">
                                <div className="info">
                                    <span className="ct">문화</span>  <span className="g-number">상품번호: PINK-034982</span>
                                    <strong className="title">떠나요~거제도~!!!!!!!!!!!!!!!!</strong>
                                    <div className="txt">
                                        <span className="s-day">출발일: 2020.9.9</span>
                                        <span className="where">출발장소: 부산대학교 앞</span>

                                        <span className="men">가격: 성인:25,000/소아10,000/유아:5,000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="t05">
                                <div className="align">
                                    <strong className="total_men"><i className="m_title">인원:</i>40명</strong>
                                    <span className="all_men">(성인20/소아20/유아0)</span>
                                </div>
                            </div>
                            <div className="t06">
                                <div className="align">
                                    <strong className="money"><i className="m_title">합계금액:</i>920,000원</strong>
                                    <span className="sum01">공제금액(-) 400,000원</span>
                                    <span className="sum03">정산금액: 830,000원</span>
                                </div>
                            </div>
                            <div className="t07">
                                <div className="align">
                                    <strong><span className="sel ok">정산완료</span></strong>
                                </div>
                            </div>
                            <div className="t08">
                                <div className="align">
                                    <button className="btn small" onClick={popupOpen}>상세보기</button>
                                    <button className="btn small">정산완료</button>
                                    <button className="btn small">지급보류</button>
                                    <button className="btn small">정산대기</button>
                                </div>
                            </div>
                        </div>
                        {/* <Paginater pageNumber={10} totalPageCount={20} /> */}

                        <div className="fin ifMobile">
                            <div className="float_left">
                                <button type="submit" className="btn medium">전체선택</button>
                            </div>
                            <div className="float_right">
                                <button type="submit" className="btn medium">정산완료</button>
                                <button type="submit" className="btn medium">정산대기</button>
                                <button type="submit" className="btn medium">지급보류</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SearcfInfoBox />
        </div >

        {/* popup-상세보기 [마스터 팝업]*/}

    </MasterLayout >
};

export default MsReservationB;