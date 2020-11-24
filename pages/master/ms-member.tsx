import { MasterLayout } from 'layout/MasterLayout';
import React from 'react';

interface IProp { }

export const MsMember: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in basket_box">
            <h4>회원관리</h4>
            <div className="paper_div">
                <div className="top_info">
                    <ul>
                        <li>장바구니 상품은 최대 30일간 저장됩니다.</li>
                        <li>가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.</li>
                    </ul>
                </div>

                <div className="basket_list">
                    <div className="th">
                        <div className="t01"><input type="checkbox" /></div>
                        <div className="t02">상품정보</div>
                        <div className="t03">옵션</div>
                        <div className="t04">상품금액</div>
                        <div className="t05">상태</div>
                    </div>
                    <div className="td">
                        <div className="t01"><input type="checkbox" /></div>
                        <div className="t02">
                            <div className="img" style={{ backgroundImage: 'url(/img/sample_01.gif)' }}></div>
                            <div className="right">
                                <div className="ct">역사여행</div><div className="code">P-020341</div>
                                <div className="title"><a href="/">거제도로 떠나요~~~!!!!</a></div>
                                <div className="subtitle">가족단위로 떠나는 주말 여행~~!!!!! 지금이 바로 좋은기회입니다.</div>
                            </div>
                            <span className="del">
                                <img src="/img/svg/del.svg" alt="삭제" className="svg_del" />
                                <button />
                            </span>
                        </div>
                        <div className="t03">
                            <div className="day">출발일 : <strong>11.20(금)</strong></div>
                            <div className="start_where">출발장소 : 부산시민공원 정문 앞</div>
                            <div className="tour_mode">여행방식 : 당일여행</div>
                            <div className="men">선택인원 : <strong>총 2명</strong> - 성인1, 소인1, 유아0</div>
                            <button className="btn option_btn">조건 추가/변경</button>
                        </div>
                        <div className="t04">
                            <div className="money"><strong>30,000 원</strong></div>
                            <button className="btn hit">주문하기</button>
                        </div>
                        <div className="t05">
                            <div className="day_cunt">출발 D-6</div>
                            <div className="men_cunt">모집 인원 : <strong>11</strong> / 23</div>
                            <div className="state onsale">판매중</div>
                        </div>

                    </div>
                    <div className="td">
                        <div className="t01"><input type="checkbox" /></div>
                        <div className="t02">
                            <div className="img"></div>
                            <div className="right">
                                <div className="ct">역사여행</div><div className="code">P-020341</div>
                                <div className="title"><a href="/">거제도로 떠나요~~~!!!!</a></div>
                                <div className="subtitle">가족단위로 떠나는 주말 여행~~!!!!! 지금이 바로 좋은기회입니다.</div>
                            </div>
                            <span className="del">
                                <img src="/img/svg/del.svg" alt="삭제" className="svg_del" />
                                <button />
                            </span>
                        </div>
                        <div className="t03">
                            <div className="day">출발일 : <strong>11.20(금)</strong></div>
                            <div className="start_where">출발장소 : 부산시민공원 정문 앞</div>
                            <div className="tour_mode">여행방식 : 당일여행</div>
                            <div className="men">선택인원 : <strong>총 3명</strong> - 성인1, 소인1, 유아1</div>
                            <button className="btn option_btn">조건 추가/변경</button>
                        </div>
                        <div className="t04">
                            <div className="money"><strong>30,000 원</strong></div>
                            <button className="btn hit">주문하기</button>
                        </div>
                        <div className="t05">
                            <div className="day_cunt">출발 D-6</div>
                            <div className="men_cunt">모집 인원 : <strong>11</strong> / 23</div>
                            <div className="state soldout">완판</div>
                        </div>

                    </div>
                    <div className="td">
                        <div className="no_data">
                            <i className="jandaicon-info3"></i><span>장바구니에 상품이 없습니다.</span>
                        </div>
                    </div>
                </div>

                <div className="baket_bottom">
                    <div className="sum01"><strong>합계금액</strong></div>
                    <div className="sum02">상품금액<strong>0 원</strong></div>
                    <div className="sum03">=</div>
                    <div className="sum04"><strong>0 원</strong></div>
                </div>

                <div className="baket_check">
                    <div className="left">
                        <button className="btn"><input type="checkbox" />전체선택</button>
                        <button className="btn">선택삭제</button>
                        <button className="btn">전체삭제</button>
                    </div>

                </div>
                <div className="baket_btn">
                    <div className="left">
                        <button className="btn">쇼핑 계속하기</button>
                        <button className="btn orders">주문하기</button>
                    </div>

                </div>


            </div>
        </div>
     
    </MasterLayout>
};

export default MsMember;