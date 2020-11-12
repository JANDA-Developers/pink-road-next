import React from 'react';

interface IProp { }

export const ProfileBusi: React.FC<IProp> = () => {
    return <div>
        <div className="top_visual">
            <div
                className="sub_header sub_bg"
                style={{ backgroundImage: `url(/img/work_top_bg2.jpg)` }}
            >
                <div className="w1200">
                    <h2 className="title">Master</h2>
                    <p className="text">지금 여행을 떠나세요~!~~!!!!!</p>
                </div>
            </div>
            <div className="header_nav">
                <ul>
                    <li className="home">
                        <a href="/index"></a>
                    </li>
                    <li className="homedeps1">Master</li>
                    <li className="homedeps2">
                        <a href="/">회원정보관리</a>
                    </li>
                </ul>
            </div>
        </div>


        <div className="master_box">
            <div className="w1200">
                <ul className="subtop_nav">
                    <li><a href="/m_member.html">회원관리</a></li>
                    <li><a href="/m_goods.html">상품관리</a></li>
                    <li className="on"><a href="../sub/m_reservation.html">예약관리</a></li>
                    <li><a href="/m_design.html">디자인설정</a></li>
                    <li><a href="/m_homepage.html">홈페이지설정</a></li>
                </ul>

                <div className="in_content">{/* 
                    <input id="tab-1" type="radio" name="radio-set" className="tab tab-selector-1" checked="checked">
                    <label for="tab-1" className="tab-label-1 deps3"><b>개인회원</b></label>
                    <input id="tab-2" type="radio" name="radio-set" className="tab tab-selector-2">
                    <label for="tab-2" className="tab-label-2 deps3"><b>기업파트너 회원</b></label>
                    <input id="tab-3" type="radio" name="radio-set" className="tab tab-selector-3">
                    <label for="tab-3" className="tab-label-3 deps3"><b>개인파트너 회원</b></label>
                    <input id="tab-4" type="radio" name="radio-set" className="tab tab-selector-4">
                    <label for="tab-4" className="tab-label-4 deps3"><b>탈퇴 회원</b></label>
                    <input id="tab-5" type="radio" name="radio-set" className="tab tab-selector-5">
                    <label for="tab-5" className="tab-label-5 deps3"><b>회원 약관 설정</b></label>
                    <input id="tab-6" type="radio" name="radio-set" className="tab tab-selector-6">
                    <label for="tab-6" className="tab-label-6 deps3"><b>메뉴얼 설정</b></label>*/}

                                           
                    <div className="con family" id="con01">
                        <div className="con_box_top pb5">
                            <h3>개인회원</h3>
                            <div className="alignment">
                                <div className="left_div"><span className="infotxt">총 <strong>22,222</strong>명</span></div>
                                <div className="right_div">
                                    <button type="button" className="btn_top check">모두선택</button>
                                    <button type="button" className="btn_top excel">엑셀</button>
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
                        </div>
                        <div className="con_box_body">
                            <div className="list_head">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">이름</span>
                                <span className="td03">아이디</span>
                                <span className="td04">성별</span>
                                <span className="td05">내국인/외국인</span>
                                <span className="td06">가입일자</span>
                                <span className="td07">최근로그인기록</span>
                                <span className="td08">상세보기</span>
                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">김옥자</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">여</span>
                                <span className="td05">외국인</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">상세보기</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">김옥자</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">여</span>
                                <span className="td05">외국인</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">상세보기</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">김옥자</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">여</span>
                                <span className="td05">외국인</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">상세보기</i></span>

                            </div>
                        </div>

                    </div>


                    <div className="con" id="con02">
                        <div className="con_box_top pb5">
                            <h3>기업파트너 회원</h3>
                            <div className="alignment">
                                <div className="left_div"><span className="infotxt">총 <strong>22,222</strong>명</span></div>
                                <div className="right_div">
                                    <button type="button" className="btn_top check">모두선택</button>
                                    <button type="button" className="btn_top excel">엑셀</button>
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
                        </div>
                        <div className="con_box_body">
                            <div className="list_head">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">이름</span>
                                <span className="td03">아이디</span>
                                <span className="td04">성별</span>
                                <span className="td05">내국인/외국인</span>
                                <span className="td06">가입일자</span>
                                <span className="td07">최근로그인기록</span>
                                <span className="td08">상세보기</span>
                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">김옥자</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">여</span>
                                <span className="td05">외국인</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">상세보기</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">김옥자</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">여</span>
                                <span className="td05">외국인</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">상세보기</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">김옥자</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">여</span>
                                <span className="td05">외국인</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">상세보기</i></span>

                            </div>
                        </div>
                    </div>




                    <div className="con" id="con03">
                        <div className="con_box_top pb5">
                            <h3>개인파트너 회원</h3>
                            <div className="alignment">
                                <div className="left_div"><span className="infotxt">총 <strong>22,222</strong>명</span></div>
                                <div className="right_div">
                                    <button type="button" className="btn_top check">모두선택</button>
                                    <button type="button" className="btn_top excel">엑셀</button>
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
                        </div>
                        <div className="con_box_body">
                            <div className="list_head">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">이름</span>
                                <span className="td03">아이디</span>
                                <span className="td04">성별</span>
                                <span className="td05">내국인/외국인</span>
                                <span className="td06">가입일자</span>
                                <span className="td07">최근로그인기록</span>
                                <span className="td08">상세보기</span>
                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">김옥자</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">여</span>
                                <span className="td05">외국인</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">상세보기</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">김옥자</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">여</span>
                                <span className="td05">외국인</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">상세보기</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">김옥자</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">여</span>
                                <span className="td05">외국인</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">상세보기</i></span>

                            </div>
                        </div>
                    </div>



                    <div className="con" id="con04">
                        <div className="con_box_top pb5">
                            <h3>탈퇴 회원</h3>
                            <div className="alignment">
                                <div className="left_div"><span className="infotxt">총 <strong>22,222</strong>명</span></div>
                                <div className="right_div">
                                    <button type="button" className="btn_top check">모두선택</button>
                                    <button type="button" className="btn_top excel">엑셀</button>
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
                        </div>
                        <div className="con_box_body">
                            <div className="list_head">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">이름</span>
                                <span className="td03">아이디</span>
                                <span className="td04">성별</span>
                                <span className="td05">내국인/외국인</span>
                                <span className="td06">가입일자</span>
                                <span className="td07">최근로그인기록</span>
                                <span className="td08">상세보기</span>
                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">김옥자</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">여</span>
                                <span className="td05">외국인</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">상세보기</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">김옥자</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">여</span>
                                <span className="td05">외국인</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">상세보기</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">김옥자</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">여</span>
                                <span className="td05">외국인</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">상세보기</i></span>

                            </div>
                        </div>
                    </div>

                    <div className="con" id="con05">

                        <div className="con_box_top pb5">
                            <h3>회원 약관 설정</h3>
                            <div className="alignment">
                                <div className="left_div"><span className="infotxt">총 <strong>22,222</strong>명</span></div>
                                <div className="right_div">
                                    <button type="button" className="btn_top check">모두선택</button>
                                    <button type="button" className="btn_top excel">엑셀</button>
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
                        </div>
                        <div className="con_box_body">
                            <div className="list_head">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">이름</span>
                                <span className="td03">아이디</span>
                                <span className="td04">성별</span>
                                <span className="td05">내국인/외국인</span>
                                <span className="td06">가입일자</span>
                                <span className="td07">최근로그인기록</span>
                                <span className="td08">상세보기</span>
                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">김옥자</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">여</span>
                                <span className="td05">외국인</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">상세보기</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">김옥자</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">여</span>
                                <span className="td05">외국인</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">상세보기</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">김옥자</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">여</span>
                                <span className="td05">외국인</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">상세보기</i></span>

                            </div>
                        </div>
                    </div>

                    <div className="con" id="con06">

                        <div className="con_box_top pb5">
                            <h3>메뉴얼 설정</h3>
                            <div className="alignment">
                                <div className="left_div"><span className="infotxt">총 <strong>22,222</strong>명</span></div>
                                <div className="right_div">
                                    <button type="button" className="btn_top check">모두선택</button>
                                    <button type="button" className="btn_top excel">엑셀</button>
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
                        </div>
                        <div className="con_box_body">
                            <div className="list_head">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">이름</span>
                                <span className="td03">아이디</span>
                                <span className="td04">성별</span>
                                <span className="td05">내국인/외국인</span>
                                <span className="td06">가입일자</span>
                                <span className="td07">최근로그인기록</span>
                                <span className="td08">상세보기</span>
                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">김옥자</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">여</span>
                                <span className="td05">외국인</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">상세보기</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">김옥자</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">여</span>
                                <span className="td05">외국인</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">상세보기</i></span>

                            </div>
                            <div className="list_line">
                                <span className="td01"><input type="checkbox" /></span>
                                <span className="td02">김옥자</span>
                                <span className="td03">gogo@gamail.com</span>
                                <span className="td04">여</span>
                                <span className="td05">외국인</span>
                                <span className="td06">2020.10.01</span>
                                <span className="td07">2020.11.01 12:33</span>
                                <span className="td08"><i className="btn">상세보기</i></span>

                            </div>
                        </div>
                    </div>
               </div>
          
            </div>    
    </div>
</div>
}

export default ProfileBusi