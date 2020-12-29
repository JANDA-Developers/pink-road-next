import { MasterLayout } from 'layout/MasterLayout';
import React from 'react';
import Link from "next/link";
import { ADMINS } from 'types/const';
import { auth } from 'utils/with';

interface IProp { }

export const MsHomepageMain: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in ">
            <h4>홈페이지 설정</h4>
            <div className="in_content">
                <div className="tab-nav">
                    <ul>
                        <li className="on"><Link href="/master/homepage"><a>기본설정</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-2"><a>SMS설정</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-3"><a>카카오비즈톡</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-4"><a>약관설정</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-5"><a>게시판설정</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-6"><a>정산설정</a></Link></li>
                    </ul>
                </div>
                <div className="con homepage">
                    <div className="fin">
                        <div className="float_left">
                        </div>
                        <div className="float_right">
                            <button type="submit" className="btn medium">저장하기</button>
                        </div>
                    </div>
                    <div className="design_table">
                        <div className="block_box">

                            <h5>검색 최적화 설정(SEO)</h5>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">기능 활성화</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <span className="checkbox mr5">
                                            <input type="checkbox" name="agree" id="agree1" title="개별선택" />
                                            <label htmlFor="agree1" />
                                        </span>
                                        <span>검색엔진 최적화 기능 사용</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">사이트 대표 이미지</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w50" type="file" />
                                        <p className="infotxt_gray">페이스북 공유 시 문서에 이미지가 없으면 기본 이미지로 사용됩니다. (추천 : 1200x600, 600x315, 200x200)</p>
                                        {/* 첨부파일 미리보기 이미지 */}
                                        <img className="mt15 w50" src="/its/logo_1.png" alt="첨부파일 미리보기" />
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">문서 제목 최적화</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <span className="checkbox mr5">
                                            <input type="checkbox" name="agree" id="agree1" title="개별선택" />
                                            <label htmlFor="agree1" />
                                        </span>
                                        <span>문서 제목 최적화 기능 사용</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">사이트 이름</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30" placeholder="" type="text" />
                                        <p className="infotxt_gray">모든 페이지의 제목으로 사용되며 '모듈 브라우저 타이틀 - 사이트 이름' 또는 '글 제목 - 사이트 이름'과 같이 표시됩니다.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">사이트 설명 (description)</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w80" placeholder="" type="text" />
                                        <p className="infotxt_gray">사이트의 주제에 관한 설명. 200자 미만으로 너무 길지 않고 의도적으로 너무 많은 키워드를 반복하는 것은 좋지 않습니다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block_box">

                            <h5>웹마스터 설정</h5>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">웹마스터 이름</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30" placeholder="webmaster" type="text" />
                                        <p className="infotxt_gray">인증 메일이나 기타 사이트 관리 시 사용될 웹마스터의 이름을 입력해주세요. (기본 : webmaster)</p>

                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">웹마스터 이메일</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w50" placeholder="webmaster@gmail.com" type="text" />
                                        <p className="infotxt_gray">인증 메일이나 기타 사이트 관리 시 사용될 웹마스터의 메일 주소를 입력해주세요.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block_box">

                            <h5>회원 가입</h5>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">회원 가입 후 이동할 페이지</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w80" placeholder="https://" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">금지 아이디</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <ul className="list">
                                            <li>admin<i className="del"></i></li>
                                            <li>admin<i className="del"></i></li>
                                            <li>admin<i className="del"></i></li>
                                            <li>admin<i className="del"></i></li>
                                            <li>admin<i className="del"></i></li>
                                            <li>admin<i className="del"></i></li>
                                        </ul>
                                        <input className="w30" placeholder="추가할 아이디" type="text" />
                                        <button className="btn">추가</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block_box">

                            <h5>로그인</h5>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">로그인 후 이동할 주소(URL)</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w80" placeholder="https://" type="text" />
                                        <p className="infotxt_gray">로그인 후 이동할 URL을 정할 수 있습니다. 입력 URL이 없는 경우 해당 페이지가 유지됩니다.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">로그아웃 후 이동할 주소(URL)</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w80" placeholder="https://" type="text" />
                                        <p className="infotxt_gray">로그아웃 후 이동할 URL을 정할 수 있습니다. 입력 URL이 없는 경우 해당 페이지가 유지됩니다.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fin">
                        <div className="float_left">
                        </div>
                        <div className="float_right">
                            <button type="submit" className="btn medium">저장하기</button>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </MasterLayout >
};

export default auth(ADMINS)(MsHomepageMain);