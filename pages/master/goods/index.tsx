import { MasterLayout } from 'layout/MasterLayout';
import { Paginater } from 'components/common/Paginator';
import { SearcfInfoBox } from 'components/common/SearcfInfoBox';
import CalendarIcon from 'components/common/icon/CalendarIcon';
import React from 'react';
import Link from "next/link";
import ReactTooltip from 'react-tooltip';

interface IProp { }

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
                            <div className="td04">떠나요~ 거제도~ 둘이서~~~!!!~~~~~~~~!!~!!!~!!!!!!~~!!!!~~!!~!!~!!~!</div>
                            <div className="td05"><i className="m_title">여행일:</i>2020.01.03</div>
                            <div className="td06"><i className="m_title">인원:</i>10/22</div>
                            <div className="td07"><i className="m_title">형태:</i>당일여행(1일)</div>
                            <div className="td08"><span className="tour-ok">출발확정</span></div>
                            <div className="td09"><Link href=""><a className="btn">상세보기</a></Link></div> {/* 해당상품 바로가기 링크 */}
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
                            <div className="td04">떠나요~ 거제도~ 둘이서~~~!!!~~~~~~~~!!~!!!~!!!!!!~~!!!!~~!!~!!~!!~!</div>
                            <div className="td05"><i className="m_title">여행일:</i>2020.01.03</div>
                            <div className="td06"><i className="m_title">인원:</i>10/22</div>
                            <div className="td07"><i className="m_title">형태:</i>당일여행(1일)</div>
                            <div className="td08"><span className="tour-yes">출발미확정</span></div>
                            <div className="td09"><Link href=""><a className="btn">상세보기</a></Link></div> {/* 해당상품 바로가기 링크 */}
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
                            <div className="td04">떠나요~ 거제도~ 둘이서~~~!!!~~~~~~~~!!~!!!~!!!!!!~~!!!!~~!!~!!~!!~!</div>
                            <div className="td05"><i className="m_title">여행일:</i>2020.01.03</div>
                            <div className="td06"><i className="m_title">인원:</i>10/22</div>
                            <div className="td07"><i className="m_title">형태:</i>당일여행(1일)</div>
                            <div className="td08"><span data-tip="사유: 태풍이 옴" className="tour-no">여행취소</span></div>
                            <div className="td09"><Link href=""><a className="btn">상세보기</a></Link></div> {/* 해당상품 바로가기 링크 */}
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
                            <div className="td04">떠나요~ 거제도~ 둘이서~~~!!!~~~~~~~~!!~!!!~!!!!!!~~!!!!~~!!~!!~!!~!</div>
                            <div className="td05"><i className="m_title">여행일:</i>2020.01.03</div>
                            <div className="td06"><i className="m_title">인원:</i>10/22</div>
                            <div className="td07"><i className="m_title">형태:</i>당일여행(1일)</div>
                            <div className="td08"><span data-tip="사유: 사진이 깨짐" className="plainning-no">기획반려</span></div>
                            <div className="td09"><Link href=""><a className="btn">상세보기</a></Link></div> {/* 해당상품 바로가기 링크 */}
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
                            <div className="td04">떠나요~ 거제도~ 둘이서~~~!!!~~~~~~~~!!~!!!~!!!!!!~~!!!!~~!!~!!~!!~!</div>
                            <div className="td05"><i className="m_title">여행일:</i>2020.01.03</div>
                            <div className="td06"><i className="m_title">인원:</i>10/22</div>
                            <div className="td07"><i className="m_title">형태:</i>당일여행(1일)</div>
                            <div className="td08"><span className="plainning-yes">기획요청</span></div>
                            <div className="td09"><Link href=""><a className="btn">상세보기</a></Link></div> {/* 해당상품 바로가기 링크 */}
                        </div>

                        {/* <Paginater pageNumber={10} totalPageCount={20} /> */}

                        <div className="fin">
                            <div className="float_left">
                                <button type="submit" className="btn medium">신규여행작성</button>
                                <button type="submit" className="btn medium">여행복사하기</button>
                            </div>
                            <div className="float_right">
                                <button type="submit" className="btn medium">기획반려</button>
                                <button type="submit" className="btn medium">기획승인</button>
                                <button type="submit" className="btn medium">여행취소</button>
                                <button type="submit" className="btn medium">여행확정</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SearcfInfoBox />

            {/* popup-여행취소 사유 */}
            <div className="popup_bg_mini" style={{ display: 'block' }}>
                <a className="close_icon"><i className="flaticon-multiply" /></a>
                <div className="in_txt">
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
            {/* popup-기획반려 사유 */}
            <div className="popup_bg_mini" style={{ display: 'block' }}>
                <a className="close_icon"><i className="flaticon-multiply" /></a>
                <div className="in_txt">
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
            <div className="fade"></div>

        </div>
    </MasterLayout >
};

export default MsGoodsMain;