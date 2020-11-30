import CalendarIcon from 'components/common/icon/CalendarIcon';
import { Paginater } from 'components/common/Paginator';
import { PurChasedItem } from 'components/mypage/PurchasedItem';
import { MypageLayout } from 'layout/MypageLayout';
import React from 'react';

interface IProp { }

export const MyPagePurchase: React.FC<IProp> = () => {


    return <MypageLayout>
        <div className="in mypage_purchase">
            <h4>구매내역</h4>
            <div className="paper_div">
                <div className="con_top">
                    <h6>상세검색</h6>
                    <div className="search_box">
                        <div className="jul2">
                            <div className="title">상태</div>
                            <div className="text">
                                <span className="check on">전체</span>
                                <span className="check">예약완료</span>
                                <span className="check">사용완료</span>
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
                                    <option>상품명</option>
                                    <option>키워드</option>
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
                            <div className="left_div">
                                총 <strong>22,222</strong>개
                            </div>
                            <div className="right_div">
                                <select className="sel01">
                                    <option>추천수</option>
                                    <option>예약수</option>
                                    <option>조회수</option>
                                </select>
                                <select className="sel02">
                                    <option>10개 보기</option>
                                    <option>50개 보기</option>
                                    <option>100개 보기</option>
                                </select>
                            </div>
                        </div>
                        {/*리스트로 보기*/}
                        <div className="list selectViewList">
                            <ul className="list_ul">
                                <PurChasedItem />
                                <PurChasedItem />
                                <PurChasedItem />
                                <PurChasedItem />
                                <PurChasedItem />
                            </ul>
                        </div>
                        <Paginater pageNumber={10} totalPageCount={20} />
                    </div>
                </div>
            </div>
        </div>

    </MypageLayout>
};

export default MyPagePurchase;