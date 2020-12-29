import { MasterLayout } from 'layout/MasterLayout';
import { Paginater } from 'components/common/Paginator';
import { SearcfInfoBox } from 'components/common/SearcfInfoBox';
import CalendarIcon from 'components/common/icon/CalendarIcon';
import React from 'react';
import Link from "next/link";
import ReactTooltip from 'react-tooltip';
import { ADMINS } from 'types/const';
import { auth } from 'utils/with';

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
const popupOpen1 = () => {
    $('#MiniPopup01').css({
        'display': 'flex'
    });

}
const popupClose1 = () => {
    $('#MiniPopup01').css({
        'display': 'none'
    });
}

const popupOpen2 = () => {
    $('#MiniPopup02').css({
        'display': 'flex'
    });

}
const popupClose2 = () => {
    $('#MiniPopup02').css({
        'display': 'none'
    });
}
export const MsGoodsMain: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in ">
            <h4>상품관리</h4>
            <div className="in_content">

                <div className="tab-nav">
                    <ul>
                        <li className="on"><Link href="/master/goods"><a>상품관리</a></Link></li>
                        <li><Link href="/master/goods/goods1-2"><a>카테고리설정</a></Link></li>

                    </ul>
                </div>
                <div className="con goods">
                    <div className="con_box_top pb5">
                        <div className="top_info_number">
                            <ul className="ln4">
                                <li>
                                    <strong>234</strong>
                                    <span>전체</span>
                                </li>
                                <li>
                                    <strong>234</strong>
                                    <span>판매중</span>
                                </li>
                                <li>
                                    <strong>234</strong>
                                    <span>판매중지</span>
                                </li>
                                <li>
                                    <strong>234</strong>
                                    <span>판매완료</span>
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
                                    <option>상품명</option>
                                    <option>상품번호</option>
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
                                    <li><a href="/">출발확정<strong>23</strong></a></li>
                                    <li><a href="/">출발미확정<strong>23</strong></a></li>
                                    <li><a href="/">여행취소<strong>23</strong></a></li>
                                    <li><a href="/">기획요청<strong>23</strong></a></li>
                                    <li><a href="/">기획반려<strong>23</strong></a></li>
                                </ul>
                            </div>
                            <div className="right_div">
                                <ul className="board_option">
                                    <li><a href="/">전체선택</a></li>
                                    <li><a href="/">엑셀파일<i className="jandaicon-info2 tooltip" data-tip="선택된 항목에 한해서 엑셀파일로 저장이 가능합니다." ></i></a></li>
                                    <li><a href="/">신규여행작성</a></li>
                                </ul>
                                <select className="sel01">
                                    <option>출발일 &uarr;</option>
                                    <option>출발일 &darr;</option>
                                    <option>등록일 &uarr;</option>
                                    <option>등록일 &darr;</option>
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
                                    <input type="checkbox" name="agree" id="agree0" title="전체선택" />
                                    <label htmlFor="agree0" />
                                </i>
                            </div>
                            <div className="td02">카테고리</div>
                            <div className="td03">상품번호</div>
                            <div className="td04">상품명</div>
                            <div className="td05">여행일</div>
                            <div className="td06">인원</div>
                            <div className="td07">형태</div>
                            <div className="td08">상태</div>
                            <div className="td09">상세보기</div>
                        </div>
                        <div className="list_line">
                            <div className="td01">
                                <i className="checkbox">
                                    <input type="checkbox" name="agree" id="agree0" title="선택" />
                                    <label htmlFor="agree0" />
                                </i>
                            </div>
                            <div className="td02"><i className="m_title">카테고리:</i>문화/체험</div>
                            <div className="td03"><i className="m_title">상품번호:</i>PK-34234</div>
                            <div className="td04"><Link href="/"><a> 떠나요~거제도~!!!!!!!!!!!!!!!!</a></Link></div>
                            <div className="td05"><i className="m_title">여행일:</i>2020.01.03</div>
                            <div className="td06"><i className="m_title">인원:</i>10/22</div>
                            <div className="td07"><i className="m_title">형태:</i>당일여행(1일)</div>
                            <div className="td08"><span className="state_icon tour-ok">출발확정</span></div>
                            <div className="td09"><button onClick={popupOpen} className="btn small">상세보기</button></div>
                        </div>
                        <div className="list_line">
                            <div className="td01">
                                <i className="checkbox">
                                    <input type="checkbox" name="agree" id="agree0" title="선택" />
                                    <label htmlFor="agree0" />
                                </i>
                            </div>
                            <div className="td02"><i className="m_title">카테고리:</i>문화/체험</div>
                            <div className="td03"><i className="m_title">상품번호:</i>PK-34234</div>
                            <div className="td04"><Link href="/"><a> 떠나요~거제도~!!!!!!!!!!!!!!!!</a></Link></div>
                            <div className="td05"><i className="m_title">여행일:</i>2020.01.03</div>
                            <div className="td06"><i className="m_title">인원:</i>10/22</div>
                            <div className="td07"><i className="m_title">형태:</i>당일여행(1일)</div>
                            <div className="td08"><span className="state_icon tour-yes">출발미확정</span></div>
                            <div className="td09"><button onClick={popupOpen} className="btn small">상세보기</button></div>
                        </div>

                        <div className="list_line">
                            <div className="td01">
                                <i className="checkbox">
                                    <input type="checkbox" name="agree" id="agree0" title="선택" />
                                    <label htmlFor="agree0" />
                                </i>
                            </div>
                            <div className="td02"><i className="m_title">카테고리:</i>문화/체험</div>
                            <div className="td03"><i className="m_title">상품번호:</i>PK-34234</div>
                            <div className="td04"><Link href="/"><a> 떠나요~거제도~!!!!!!!!!!!!!!!!</a></Link></div>
                            <div className="td05"><i className="m_title">여행일:</i>2020.01.03</div>
                            <div className="td06"><i className="m_title">인원:</i>10/22</div>
                            <div className="td07"><i className="m_title">형태:</i>당일여행(1일)</div>
                            <div className="td08"><span data-tip="사유: 태풍이 옴" className="state_icon tour-no">여행취소</span></div>
                            <div className="td09"><button onClick={popupOpen} className="btn small">상세보기</button></div>
                        </div>

                        <div className="list_line">
                            <div className="td01">
                                <i className="checkbox">
                                    <input type="checkbox" name="agree" id="agree0" title="선택" />
                                    <label htmlFor="agree0" />
                                </i>
                            </div>
                            <div className="td02"><i className="m_title">카테고리:</i>문화/체험</div>
                            <div className="td03"><i className="m_title">상품번호:</i>PK-34234</div>
                            <div className="td04"><Link href="/"><a> 떠나요~거제도~!!!!!!!!!!!!!!!!</a></Link></div>
                            <div className="td05"><i className="m_title">여행일:</i>2020.01.03</div>
                            <div className="td06"><i className="m_title">인원:</i>10/22</div>
                            <div className="td07"><i className="m_title">형태:</i>당일여행(1일)</div>
                            <div className="td08"><span data-tip="사유: 사진이 깨짐" className="state_icon plainning-no">기획반려</span></div>
                            <div className="td09"><button onClick={popupOpen} className="btn small">상세보기</button></div>
                        </div>

                        <div className="list_line">
                            <div className="td01">
                                <i className="checkbox">
                                    <input type="checkbox" name="agree" id="agree0" title="선택" />
                                    <label htmlFor="agree0" />
                                </i>
                            </div>
                            <div className="td02"><i className="m_title">카테고리:</i>문화/체험</div>
                            <div className="td03"><i className="m_title">상품번호:</i>PK-34234</div>
                            <div className="td04"><Link href="/"><a> 떠나요~거제도~!!!!!!!!!!!!!!!!</a></Link></div>
                            <div className="td05"><i className="m_title">여행일:</i>2020.01.03</div>
                            <div className="td06"><i className="m_title">인원:</i>10/22</div>
                            <div className="td07"><i className="m_title">형태:</i>당일여행(1일)</div>
                            <div className="td08"><span className="state_icon plainning-yes">기획요청</span></div>
                            <div className="td09"><button onClick={popupOpen} className="btn small">상세보기</button></div>
                        </div>

                        {/* <Paginater pageNumber={10} totalPageCount={20} /> */}

                        <div className="fin">
                            <div className="float_left">
                                <button type="submit" className="btn medium">신규여행작성</button>
                                <button type="submit" className="btn medium">여행복사하기</button>
                            </div>
                            <div className="float_right">
                                <button type="submit" className="btn medium" onClick={popupOpen1}>기획반려</button>
                                <button type="submit" className="btn medium">기획승인</button>
                                <button type="submit" className="btn medium" onClick={popupOpen2}>여행취소</button>
                                <button type="submit" className="btn medium">여행확정</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SearcfInfoBox />

            {/* popup-여행취소 사유 */}
            <div className="popup_bg_mini" id="MiniPopup02">
                <div className="in_txt">
                    <a className="close_icon" onClick={popupClose2}><i className="flaticon-multiply" /></a>
                    <div className="page">
                        <h3>여행취소 사유</h3>
                        <div className="con">
                            <div className="input_box">
                                <textarea></textarea>
                            </div>
                            <div className="info">
                                <p><i className="flaticon-flag-1" /> 한번 여행취소시 다시 되돌릴 수 없습니다. 취소는 신중하게 부탁드립니다.</p>
                            </div>
                            <div className="fin">
                                <div className="float_left">

                                </div>
                                <div className="float_right">
                                    <button type="submit" className="btn medium">여행취소</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* popup-기획반려 사유 */}
            <div className="popup_bg_mini" id="MiniPopup01">
                <div className="in_txt master_popup_mini">
                    <a className="close_icon" onClick={popupClose1}><i className="flaticon-multiply" /></a>
                    <div className="page">
                        <h3>기획반려 사유</h3>
                        <div className="con">
                            <div className="input_box">
                                <textarea></textarea>
                            </div>
                            <div className="info">
                                <p><i className="flaticon-flag-1" /> 기획서의 어떤 부분을 보완하기를 원하는지 사유를 적어주세요.</p>
                            </div>
                            <div className="fin">
                                <div className="float_left">

                                </div>
                                <div className="float_right">
                                    <button type="submit" className="btn medium">기획반려</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* popup-상세보기  */}
            <div id="Popup01" className="popup_bg_full">
                <div className="in_txt master_popup">
                    <a className="close_icon" onClick={popupClose}>
                        <i className="flaticon-multiply"></i>
                    </a>
                    <div className="page">
                        <h3>예약 상세정보</h3>
                        <div className="info_txt">
                            <span className="g-number">상품번호: PK-034982</span>
                            <span className="goods-state1 st01">확정여부: <i>출발확정</i></span>{/* 출발확정/출발미정 */}
                            <span className="r-day">출발일: 2020.08.26</span>
                            <span className="goods-state2">상품상태: 예약진행중</span>
                            <button className="btn"><i className="flaticon-print mr5"></i>프린터</button>
                            <button className="btn mr5"><i className="flaticon-download mr5"></i>엑셀저장</button>
                        </div>

                        <div className="info_table goodsinfo">
                            <div className="tr">
                                <div className="top04">
                                    <div className="img" style={{ backgroundImage: 'url(/img/store_01.jpg)' }} ></div>
                                    <div className="info">
                                        <span className="ct">문화</span>
                                        <strong className="title"><Link href="/"><a> 떠나요~거제도~!!!!!!!!!!!!!!!!</a></Link></strong>
                                        <div className="txt">
                                            <div className="subTitle">대가야의 역사를 체험하고 느껴보는 여행</div>
                                            <ul className="tag">
                                                <li>#거제도</li>
                                                <li>#1박2일</li>
                                                <li>#꽃나들이</li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                <div className="top05">
                                    <div className="align">
                                        <span className="s-day">출발일: 2020.9.9</span>
                                        <span className="where">출발장소: 부산대학교 앞</span>
                                        <span className="people">인원: 40명 (성인30/유아10/소아0)</span>
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
                                            결제건수
                                </div>
                                        <div className="td01">
                                            <span>43</span>
                                        </div>
                                        <div className="th02">
                                            결제금액
                                </div>
                                        <div className="td02">
                                            <span className="blue_font">43,444,3333원</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="right_div">
                                <h4>환불 정보</h4>
                                <div className="info_table w50">
                                    <div className="tr">
                                        <div className="th01">
                                            환불건수
                                </div>
                                        <div className="td01">
                                            <span>3</span>
                                        </div>
                                        <div className="th02">
                                            환불금액
                                </div>
                                        <div className="td02">
                                            <span className="red_font">- 45,433,000원</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="info_page">
                            <div className="full_div">
                                <h4>
                                    예약자 정보
                                    <span className="full_div__right__btn">
                                        <button className="btn topside">전체선택</button>
                                        <button className="btn topside">예약완료 선택</button>
                                        <button className="btn topside">SMS보내기</button>
                                    </span>
                                </h4>
                                <div className="info_table peoplelist">
                                    <div className="top_info">
                                        <span className="tt">예약인원</span>
                                        <span>총 40명 ( 성인30 / 소아10 / 유아0 )</span>
                                        <span className="float_right">예약완료 38명 / 예약취소 10명 / 예약대기 2명</span>
                                    </div>
                                    <div className="tr first">
                                        <div className="pp01">
                                            <span className="checkbox">
                                                <input type="checkbox" name="agree" id="agree1" title="개별선택" />
                                                <label htmlFor="agree1" />
                                            </span>
                                        </div>
                                        <div className="th">예약번호</div>
                                        <div className="td"><span>R-83729</span></div>
                                        <div className="th">예약상태</div>
                                        <div className="td"><span className="blue_font">예약완료</span></div>
                                        <div className="th">예약자명</div>
                                        <div className="td"><span>홍언니</span></div>
                                        <div className="th">연락처</div>
                                        <div className="td"><a href="tel:010-0000-0000">010-0000-0000</a></div>
                                        <div className="th">성별</div>
                                        <div className="td"><span>여성</span></div>
                                        <div className="th">나이</div>
                                        <div className="td"><span>1988-03-03 (만 32세)</span></div>
                                        <div className="th">메모</div>
                                        <div className="td"><span>------------------------------------------------</span></div>
                                    </div>
                                    <div className="tr first">
                                        <div className="pp01">
                                            <span className="checkbox">
                                                <input type="checkbox" name="agree" id="agree1" title="개별선택" />
                                                <label htmlFor="agree1" />
                                            </span>
                                        </div>
                                        <div className="th">예약번호</div>
                                        <div className="td"><span>R-83729</span></div>
                                        <div className="th">예약상태</div>
                                        <div className="td"><span className="red_font">예약취소</span></div>
                                        <div className="th">예약자명</div>
                                        <div className="td"><span>홍언니</span></div>
                                        <div className="th">연락처</div>
                                        <div className="td"><a href="tel:010-0000-0000">010-0000-0000</a></div>
                                        <div className="th">성별</div>
                                        <div className="td"><span>여성</span></div>
                                        <div className="th">나이</div>
                                        <div className="td"><span>1988-03-03 (만 32세)</span></div>
                                        <div className="th">메모</div>
                                        <div className="td"><span>------------------------------------------------</span></div>
                                    </div>
                                    <div className="tr first">
                                        <div className="pp01">
                                            <span className="checkbox">
                                                <input type="checkbox" name="agree" id="agree1" title="개별선택" />
                                                <label htmlFor="agree1" />
                                            </span>
                                        </div>
                                        <div className="th">예약번호</div>
                                        <div className="td"><span>R-83729</span></div>
                                        <div className="th">예약상태</div>
                                        <div className="td"><span>예약대기</span></div>
                                        <div className="th">예약자명</div>
                                        <div className="td"><span>홍언니</span></div>
                                        <div className="th">연락처</div>
                                        <div className="td"><a href="tel:010-0000-0000">010-0000-0000</a></div>
                                        <div className="th">성별</div>
                                        <div className="td"><span>여성</span></div>
                                        <div className="th">나이</div>
                                        <div className="td"><span>1988-03-03 (만 32세)</span></div>
                                        <div className="th">메모</div>
                                        <div className="td"><span>------------------------------------------------</span></div>
                                    </div>
                                    <div className="tr first">
                                        <div className="pp01">
                                            <span className="checkbox">
                                                <input type="checkbox" name="agree" id="agree1" title="개별선택" />
                                                <label htmlFor="agree1" />
                                            </span>
                                        </div>
                                        <div className="th">예약번호</div>
                                        <div className="td"><span>R-83729</span></div>
                                        <div className="th">예약상태</div>
                                        <div className="td"><span className="blue_font">예약완료</span></div>
                                        <div className="th">예약자명</div>
                                        <div className="td"><span>홍언니</span></div>
                                        <div className="th">연락처</div>
                                        <div className="td"><a href="tel:010-0000-0000">010-0000-0000</a></div>
                                        <div className="th">성별</div>
                                        <div className="td"><span>여성</span></div>
                                        <div className="th">나이</div>
                                        <div className="td"><span>1988-03-03 (만 32세)</span></div>
                                        <div className="th">메모</div>
                                        <div className="td"><span>------------------------------------------------</span></div>
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
                                <button type="submit" className="btn medium">예약취소</button>
                            </div>
                            <div className="float_right">
                                <Link href=""><a className="btn medium">상품수정 하러가기</a></Link>{/* 상품수정폼 가기 */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </MasterLayout >
};

export default auth(ADMINS)(MsGoodsMain);