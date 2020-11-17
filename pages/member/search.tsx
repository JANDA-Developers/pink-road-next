import React from 'react';

interface IProp { }

export const Search: React.FC<IProp> = () => {
    return <div>
        <div className="top_visual">
            <div
                className="sub_header sub_bg"
                style={{ backgroundImage: `url(/img/work_top_bg2.jpg)` }}
            >
                <div className="w1200">
                    <h2 className="title">통합검색</h2>
                    <p className="text">지금 여행을 떠나세요~!~~!!!!!</p>
                </div>
            </div>
            <div className="header_nav">
                <ul>
                    <li className="home">
                        <a href="/index"></a>
                    </li>
                    <li className="homedeps1">Member</li>
                    <li className="homedeps2">
                        <a href="/">통합검색</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="search_in w1200">
            <div className="con_top">
                <h4>상세검색</h4>
                <div className="search_box">
                    <div className="jul0">
                        <span>검색조건 초기화</span>
                    </div>
                    <div className="jul2">
                        <div className="title">유형</div>
                        <div className="in">
                            <span className="check on">ALL</span>
                            <span className="check">여행</span>
                            <span className="check">체험</span>
                        </div>
                    </div>
                    <div className="jul3">
                        <div className="title">지역</div>
                        <div className="in">
                            <span className="check on">전국</span>
                            <span className="check">서울</span>
                            <span className="check">부산</span>
                            <span className="check">제주</span>
                            <span className="check">경기도</span>
                            <span className="check">강원도</span>
                            <span className="check">충청도</span>
                            <span className="check">전라도</span>
                            <span className="check">경상도</span>
                        </div>
                    </div>
                    <div className="jul4">
                        <div className="title">날짜</div>
                        <div className="in">
                            <div className="inf">
                                <input type="text" className="day" />
                                <i className="calendar"><svg><path d="M651.17,504.7h-4.55V503a.75.75,0,1,0-1.5,0v1.7h-8.45V503a.75.75,0,0,0-1.5,0v1.7h-4.79a.75.75,0,0,0-.75.75v3.91a.75.75,0,0,0,.75.75h20.79a.74.74,0,0,0,.75-.75v-3.91A.74.74,0,0,0,651.17,504.7Zm-.75,3.91H631.13V506.2h4v.61a.75.75,0,1,0,1.5,0v-.61h8.45v.61a.75.75,0,1,0,1.5,0v-.61h3.8Z" transform="translate(-629.63 -502.25)"></path><path d="M644.51,522.11H630.77a.74.74,0,0,1-.75-.75v-9.62a.75.75,0,0,1,1.5,0v8.87h13a.75.75,0,0,1,0,1.5Z" transform="translate(-629.63 -502.25)"></path><path d="M651,522.11h-3.48a.75.75,0,0,1,0-1.5h2.73v-8.87a.75.75,0,0,1,1.5,0v9.62A.75.75,0,0,1,651,522.11Z" transform="translate(-629.63 -502.25)"></path><rect x="4.36" y="10.75" width="1.93" height="1.93"></rect><rect x="8.32" y="10.75" width="1.93" height="1.93"></rect><rect x="12.35" y="10.75" width="1.93" height="1.93"></rect><rect x="16.38" y="10.75" width="1.93" height="1.93"></rect><rect x="4.36" y="14.7" width="1.93" height="1.93"></rect><rect x="8.32" y="14.7" width="1.93" height="1.93"></rect><rect x="12.35" y="14.7" width="1.93" height="1.93"></rect><rect x="16.38" y="14.7" width="1.93" height="1.93"></rect></svg></i>
                            </div>
                            <div className="ovj">~</div>
                            <div className="inf">
                                <input type="text" className="day" />
                                <i className="calendar"><svg><path d="M651.17,504.7h-4.55V503a.75.75,0,1,0-1.5,0v1.7h-8.45V503a.75.75,0,0,0-1.5,0v1.7h-4.79a.75.75,0,0,0-.75.75v3.91a.75.75,0,0,0,.75.75h20.79a.74.74,0,0,0,.75-.75v-3.91A.74.74,0,0,0,651.17,504.7Zm-.75,3.91H631.13V506.2h4v.61a.75.75,0,1,0,1.5,0v-.61h8.45v.61a.75.75,0,1,0,1.5,0v-.61h3.8Z" transform="translate(-629.63 -502.25)"></path><path d="M644.51,522.11H630.77a.74.74,0,0,1-.75-.75v-9.62a.75.75,0,0,1,1.5,0v8.87h13a.75.75,0,0,1,0,1.5Z" transform="translate(-629.63 -502.25)"></path><path d="M651,522.11h-3.48a.75.75,0,0,1,0-1.5h2.73v-8.87a.75.75,0,0,1,1.5,0v9.62A.75.75,0,0,1,651,522.11Z" transform="translate(-629.63 -502.25)"></path><rect x="4.36" y="10.75" width="1.93" height="1.93"></rect><rect x="8.32" y="10.75" width="1.93" height="1.93"></rect><rect x="12.35" y="10.75" width="1.93" height="1.93"></rect><rect x="16.38" y="10.75" width="1.93" height="1.93"></rect><rect x="4.36" y="14.7" width="1.93" height="1.93"></rect><rect x="8.32" y="14.7" width="1.93" height="1.93"></rect><rect x="12.35" y="14.7" width="1.93" height="1.93"></rect><rect x="16.38" y="14.7" width="1.93" height="1.93"></rect></svg></i>
                            </div>
                        </div>
                            
                    </div>
                    <div className="jul1">
                        <div>
                            <input type="text" placeholder="검색 내용을 입력해주세요." />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.94 31.44">
                                <path className="cls-5" d="M313.17,433.49l-4.86-5.31a14.48,14.48,0,0,0-1-19.41,14.55,14.55,0,0,0-10.24-4.21,14.47,14.47,0,0,0,0,28.94,14.17,14.17,0,0,0,1.72-.1,1.5,1.5,0,1,0-.35-3,11.47,11.47,0,1,1-1.38-22.86h0a11.48,11.48,0,0,1,8.14,19.56,1.49,1.49,0,0,0,0,2.12.91.91,0,0,0,.13.08,1.2,1.2,0,0,0,.15.24l5.45,5.95a1.46,1.46,0,0,0,1.1.49,1.53,1.53,0,0,0,1-.39A1.5,1.5,0,0,0,313.17,433.49Z" transform="translate(-282.62 -404.56)"></path>
                            </svg>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className="con_bottom">
                {/*검색시에만 노출*/}
                <div className="alignment2">
                    <div className="left_div">총 <strong>22,222</strong>건의 검색결과가 있습니다.</div>
                </div>


                <div className="con_box">
                    <div className="alignment">
                        <div className="left_div">
                            <h5>여행상품<strong>334</strong></h5>
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
                    {/*검색결과가 없을때*/}
                    <div className="no_search">
                        <i className="jandaicon-info3" />
                        <div>검색결과 없음</div>
                    </div>
                    {/*리스트로 보기*/}
                    <div className="list selectViewList">
                        <ul className="list_ul">
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="txt1">
                                    <div className="title"><a href="/">나만의 홈카페 완성하기 라떼아트 실전 클래스/족집게 교육</a></div>
                                    <div className="subtitle">
                                        1:1 맞춤 라떼아트클래스
                                        </div>
                                    <div className="tag"><a href="/">#원데이클래스</a><a href="/">#실전체험</a><a href="/">#라떼아트홈카페완성</a></div>
                                    <div className="cash"><strong>20,000</strong>원</div>
                                </div>
                                <div className="txt2">
                                    <span>장소 : 부산시 전포동</span>
                                    <span>모집인원 : 2/12</span>
                                    <span>기간 : 당일체험</span>
                                    <span className="btn">바로가기</span>
                                </div>
                            </li>
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="txt1">
                                    <div className="title"><a href="/">나만의 홈카페 완성하기 라떼아트 실전 클래스/족집게 교육</a></div>
                                    <div className="subtitle">
                                        1:1 맞춤 라떼아트클래스
                                        </div>
                                    <div className="tag"><a href="/">#원데이클래스</a><a href="/">#실전체험</a><a href="/">#라떼아트홈카페완성</a></div>
                                    <div className="cash"><strong>20,000</strong>원</div>
                                </div>
                                <div className="txt2">
                                    <span>장소 : 부산시 전포동</span>
                                    <span>모집인원 : 2/12</span>
                                    <span>기간 : 당일체험</span>
                                    <span className="btn">바로가기</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/*이미지로 보기*/}
                    <div className="list selectViewImg">
                        <ul className="list_ul line3">
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="box">
                                    <div className="category"><span>원데이클래스</span></div>
                                    <div className="title">나만의 홈카페 완성하기 라떼아트 실전 클래스/족집게 교육</div>
                                    <div className="bottom_txt">
                                        <div className="subtitle">
                                            1:1 맞춤 라떼아트클래스
                                            </div>
                                        <div className="tag2">
                                            <span>#원데이클래스</span>
                                            <span>#실전체험</span>
                                            <span>#라떼아트홈카페완성</span>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="box">
                                    <div className="category"><span>원데이클래스</span></div>
                                    <div className="title">나만의 홈카페 완성하기 라떼아트 실전 클래스/족집게 교육</div>
                                    <div className="bottom_txt">
                                        <div className="subtitle">
                                            1:1 맞춤 라떼아트클래스
                                            </div>
                                        <div className="tag2">
                                            <span>#원데이클래스</span>
                                            <span>#실전체험</span>
                                            <span>#라떼아트홈카페완성</span>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="box">
                                    <div className="category"><span>원데이클래스</span></div>
                                    <div className="title">나만의 홈카페 완성하기 라떼아트 실전 클래스/족집게 교육</div>
                                    <div className="bottom_txt">
                                        <div className="subtitle">
                                            1:1 맞춤 라떼아트클래스
                                            </div>
                                        <div className="tag2">
                                            <span>#원데이클래스</span>
                                            <span>#실전체험</span>
                                            <span>#라떼아트홈카페완성</span>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </div>
                    <div className="pagenate">
                        <div className="page">
                            <a href="/kor/view.do?no=170" className="page_btn first">처음</a>
                            <a href="/kor/view.do?no=170" className="page_btn prev">이전</a>
                            <a href="#none" className="on">1</a>
                            <a href="/kor/view.do?no=170" className="off">2</a>
                            <a href="/kor/view.do?no=170" className="off">3</a>
                            <a href="/kor/view.do?no=170" className="off">4</a>
                            <a href="/kor/view.do?no=170" className="off">5</a>
                            <a href="/kor/view.do?no=170" className="off">6</a>
                            <a href="/kor/view.do?no=170" className="off">7</a>
                            <a href="/kor/view.do?no=170" className="off">8</a>
                            <a href="/kor/view.do?no=170" className="off">9</a>
                            <a href="/kor/view.do?no=170" className="off">10</a>
                            <a href="/kor/view.do?no=170" className="page_btn next">다음</a>
                            <a href="/kor/view.do?no=170" className="page_btn end">마지막</a>
                        </div>
                    </div>
                </div>
                <div className="con_box inf">
                    <div className="alignment">
                        <div className="left_div">
                            <h5>체험상품<strong>334</strong></h5>
                        </div>
                        <div className="right_div">
                            <select className="sel02 al_01">
                                <option>10개 보기</option>
                                <option>50개 보기</option>
                                <option>100개 보기</option>
                            </select>
                            <ul className="al_02">
                                <li> <a href="#" className="view_icon"><svg><rect width="4" height="2"></rect><rect x="7" width="13" height="2"></rect><rect y="7" width="4" height="2"></rect><rect x="7" y="7" width="13" height="2"></rect><rect y="15" width="4" height="2"></rect><rect x="7" y="15" width="13" height="2"></rect></svg></a></li>
                                <li><a href="#" className="view_icon on"><svg><rect width="9" height="8"></rect><rect x="11" width="9" height="8"></rect><rect y="10" width="9" height="8"></rect><rect x="11" y="10" width="9" height="8"></rect></svg></a></li>
                            </ul>
                        </div>
                    </div>
                    {/*검색결과가 없을때*/}
                    <div className="no_search">
                        <i className="jandaicon-info3" />
                        <div>검색결과 없음</div>
                    </div>
                    {/*리스트로 보기*/}
                    <div className="list selectViewList">
                        <ul className="list_ul">
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="txt1">
                                    <div className="title"><a href="/">나만의 홈카페 완성하기 라떼아트 실전 클래스/족집게 교육</a></div>
                                    <div className="subtitle">
                                        1:1 맞춤 라떼아트클래스
                                        </div>
                                    <div className="tag"><a href="/">#원데이클래스</a><a href="/">#실전체험</a><a href="/">#라떼아트홈카페완성</a></div>
                                    <div className="cash"><strong>20,000</strong>원</div>
                                </div>
                                <div className="txt2">
                                    <span>장소 : 부산시 전포동</span>
                                    <span>모집인원 : 2/12</span>
                                    <span>기간 : 당일체험</span>
                                    <span className="btn">바로가기</span>
                                </div>
                            </li>
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="txt1">
                                    <div className="title"><a href="/">나만의 홈카페 완성하기 라떼아트 실전 클래스/족집게 교육</a></div>
                                    <div className="subtitle">
                                        1:1 맞춤 라떼아트클래스
                                        </div>
                                    <div className="tag"><a href="/">#원데이클래스</a><a href="/">#실전체험</a><a href="/">#라떼아트홈카페완성</a></div>
                                    <div className="cash"><strong>20,000</strong>원</div>
                                </div>
                                <div className="txt2">
                                    <span>장소 : 부산시 전포동</span>
                                    <span>모집인원 : 2/12</span>
                                    <span>기간 : 당일체험</span>
                                    <span className="btn">바로가기</span>
                                </div>
                            </li>
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="txt1">
                                    <div className="title"><a href="/">나만의 홈카페 완성하기 라떼아트 실전 클래스/족집게 교육</a></div>
                                    <div className="subtitle">
                                        1:1 맞춤 라떼아트클래스
                                        </div>
                                    <div className="tag"><a href="/">#원데이클래스</a><a href="/">#실전체험</a><a href="/">#라떼아트홈카페완성</a></div>
                                    <div className="cash"><strong>20,000</strong>원</div>
                                </div>
                                <div className="txt2">
                                    <span>장소 : 부산시 전포동</span>
                                    <span>모집인원 : 2/12</span>
                                    <span>기간 : 당일체험</span>
                                    <span className="btn">바로가기</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/*이미지로 보기*/}
                    <div className="list selectViewImg">
                        <ul className="list_ul line3">
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="box">
                                    <div className="category"><span>원데이클래스</span></div>
                                    <div className="title">나만의 홈카페 완성하기 라떼아트 실전 클래스/족집게 교육</div>
                                    <div className="bottom_txt">
                                        <div className="subtitle">
                                            1:1 맞춤 라떼아트클래스
                                            </div>
                                        <div className="tag2">
                                            <span>#원데이클래스</span>
                                            <span>#실전체험</span>
                                            <span>#라떼아트홈카페완성</span>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="box">
                                    <div className="category"><span>원데이클래스</span></div>
                                    <div className="title">나만의 홈카페 완성하기 라떼아트 실전 클래스/족집게 교육</div>
                                    <div className="bottom_txt">
                                        <div className="subtitle">
                                            1:1 맞춤 라떼아트클래스
                                            </div>
                                        <div className="tag2">
                                            <span>#원데이클래스</span>
                                            <span>#실전체험</span>
                                            <span>#라떼아트홈카페완성</span>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li className="list_in">
                                <div className="img">상품이미지</div>
                                <div className="box">
                                    <div className="category"><span>원데이클래스</span></div>
                                    <div className="title">나만의 홈카페 완성하기 라떼아트 실전 클래스/족집게 교육</div>
                                    <div className="bottom_txt">
                                        <div className="subtitle">
                                            1:1 맞춤 라떼아트클래스
                                            </div>
                                        <div className="tag2">
                                            <span>#원데이클래스</span>
                                            <span>#실전체험</span>
                                            <span>#라떼아트홈카페완성</span>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </div>
                    <div className="pagenate">
                        <div className="page">
                            <a href="/kor/view.do?no=170" className="page_btn first">처음</a>
                            <a href="/kor/view.do?no=170" className="page_btn prev">이전</a>
                            <a href="#none" className="on">1</a>
                            <a href="/kor/view.do?no=170" className="off">2</a>
                            <a href="/kor/view.do?no=170" className="off">3</a>
                            <a href="/kor/view.do?no=170" className="off">4</a>
                            <a href="/kor/view.do?no=170" className="off">5</a>
                            <a href="/kor/view.do?no=170" className="off">6</a>
                            <a href="/kor/view.do?no=170" className="off">7</a>
                            <a href="/kor/view.do?no=170" className="off">8</a>
                            <a href="/kor/view.do?no=170" className="off">9</a>
                            <a href="/kor/view.do?no=170" className="off">10</a>
                            <a href="/kor/view.do?no=170" className="page_btn next">다음</a>
                            <a href="/kor/view.do?no=170" className="page_btn end">마지막</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
   
}

export default Search