import { MasterLayout } from 'layout/MasterLayout';
import { Paginater } from 'components/common/Paginator';
import React from 'react';
import Link from "next/link";

interface IProp { }

export const MsMemberF: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in ">
            <h4>회원관리</h4>
            <div className="in_content">

                <div className="tab-nav">
                    <ul>
                        <li><Link href="/master/member"><a>개인회원</a></Link></li>
                        <li><Link href="/master/member/member1-2"><a>기업파트너 회원</a></Link></li>
                        <li><Link href="/master/member/member1-3"><a>개인파트너 회원</a></Link></li>
                        <li><Link href="/master/member/member1-4"><a>탈퇴회원</a></Link></li>
                        <li><Link href="/master/member/member1-5"><a>회원약관 설정</a></Link></li>
                        <li className="on"><Link href="/master/member/member1-6"><a>메뉴얼 설정</a></Link></li>
                    </ul>
                </div>
                <div className="con manual">
                    <div className="con_box_top pb5">
                        <div className="alignment">
                            <div className="left_div"><span className="infotxt">총 <strong>22,222</strong>명</span></div>
                            <div className="right_div">
                                <ul className="board_option">
                                    <li><a href="/">엑셀파일</a></li>
                                    <li><a href="/">모두선택</a></li>
                                </ul>
                                <select className="sel01">
                                    <option>가입일 &uarr;</option>
                                    <option>가입일 &darr;</option>
                                    <option>접속일 &uarr;</option>
                                    <option>접속일 &darr;</option>
                                    <option>이름 오름순</option>
                                    <option>이름 내림순</option>
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
                            <span className="td01 checkbox">
                                <input type="checkbox" name="agree" id="agree0" title="전체선택" />
                                <label htmlFor="agree0" />
                            </span>
                            <span className="td02">이름</span>
                            <span className="td03">아이디</span>
                            <span className="td04">성별</span>
                            <span className="td05">국적</span>
                            <span className="td06">가입일</span>
                            <span className="td07">가입방법</span>
                            <span className="td08">상세보기</span>
                        </div>
                        <div className="list_line">
                            <span className="td01 checkbox">
                                <input type="checkbox" name="agree" id="agree1" title="선택" />
                                <label htmlFor="agree1" />
                            </span>
                            <span className="td02">김옥자</span>
                            <span className="td03">gogo@gamail.com</span>
                            <span className="td04">여</span>
                            <span className="td05">외국인</span>
                            <span className="td06">2020.10.01</span>
                            <span className="td07">카카오연동</span>
                            <span className="td08"><i className="btn">상세보기</i><i className="btn">작성한 게시글</i></span>
                        </div><div className="list_line">
                            <span className="td01 checkbox">
                                <input type="checkbox" name="agree" id="agree1" title="선택" />
                                <label htmlFor="agree1" />
                            </span>
                            <span className="td02">김옥자</span>
                            <span className="td03">gogo@gamail.com</span>
                            <span className="td04">여</span>
                            <span className="td05">외국인</span>
                            <span className="td06">2020.10.01</span>
                            <span className="td07">카카오연동</span>
                            <span className="td08"><i className="btn">상세보기</i><i className="btn">작성한 게시글</i></span>
                        </div>
                        <div className="list_line">
                            <span className="td01 checkbox">
                                <input type="checkbox" name="agree" id="agree1" title="선택" />
                                <label htmlFor="agree1" />
                            </span>
                            <span className="td02">김옥자</span>
                            <span className="td03">gogo@gamail.com</span>
                            <span className="td04">여</span>
                            <span className="td05">외국인</span>
                            <span className="td06">2020.10.01</span>
                            <span className="td07">카카오연동</span>
                            <span className="td08"><i className="btn">상세보기</i><i className="btn">작성한 게시글</i></span>
                        </div>
                        <div className="list_line">
                            <span className="td01 checkbox">
                                <input type="checkbox" name="agree" id="agree1" title="선택" />
                                <label htmlFor="agree1" />
                            </span>
                            <span className="td02">김옥자</span>
                            <span className="td03">gogo@gamail.com</span>
                            <span className="td04">여</span>
                            <span className="td05">외국인</span>
                            <span className="td06">2020.10.01</span>
                            <span className="td07">카카오연동</span>
                            <span className="td08"><i className="btn">상세보기</i><i className="btn">작성한 게시글</i></span>
                        </div>
                        <Paginater pageNumber={10} totalPageCount={20} />

                    </div>

                </div>


            </div>
        </div>
    </MasterLayout >
};

export default MsMemberF;