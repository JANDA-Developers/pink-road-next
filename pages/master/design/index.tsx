import { MasterLayout } from 'layout/MasterLayout';
import React from 'react';

interface IProp { }

export const MsMember: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in ">
            <h4>회원관리</h4>
            <div className="in_content">
                <input id="tab-1" type="radio" name="radio-set" className="tab tab-selector-1" checked={true} />
                <label htmlFor="tab-1" className="tab-label-1 deps3"><b>개인회원</b></label>
                <input id="tab-2" type="radio" name="radio-set" className="tab tab-selector-2" />
                <label htmlFor="tab-2" className="tab-label-2 deps3"><b>기업파트너 회원</b></label>
                <input id="tab-3" type="radio" name="radio-set" className="tab tab-selector-3" />
                <label htmlFor="tab-3" className="tab-label-3 deps3"><b>개인파트너 회원</b></label>
                <input id="tab-4" type="radio" name="radio-set" className="tab tab-selector-4" />
                <label htmlFor="tab-4" className="tab-label-4 deps3"><b>탈퇴 회원</b></label>
                <input id="tab-5" type="radio" name="radio-set" className="tab tab-selector-5" />
                <label htmlFor="tab-5" className="tab-label-5 deps3"><b>회원 약관 설정</b></label>
                <input id="tab-6" type="radio" name="radio-set" className="tab tab-selector-6" />
                <label htmlFor="tab-6" className="tab-label-6 deps3"><b>메뉴얼 설정</b></label>

                {/* <!-- 개인회원 --> */}
                <div className="con family" id="con01">
                    <div className="con_box_top pb5">
                        <h3>개인회원</h3>
                        <div className="alignment">
                            <div className="left_div"><span className="infotxt">총 <strong>22,222</strong>명</span></div>
                            <div className="right_div">
                                <ul className="board_option">
                                    <li><a href="/">엑셀파일</a></li>
                                    <li><a href="/">모두선택</a></li>
                                </ul>
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
                {/* <!-- 기업파트너회원 --> */}
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

                {/* <!-- 개인파트너회원 --> */}
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

                {/* <!-- 탈퇴 회원 --> */}
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

                {/* <!-- 회원 약관 설정 --> */}
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

                {/* <!-- 메뉴얼 설정 --> */}
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
    </MasterLayout >
};

export default MsMember;