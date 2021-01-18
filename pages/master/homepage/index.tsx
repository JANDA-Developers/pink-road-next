import { MasterLayout } from 'layout/MasterLayout';
import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import { HomepageTopNav } from '../../../components/topNav/MasterTopNav';
import { useHomepage, useHomepageUpdate } from '../../../hook/useHomepage';
import { Fhomepage } from '../../../types/api';
import { cloneObject } from '../../../utils/clone';
import { omits } from '../../../utils/omit';
import { Upload } from '../../../components/common/Upload';
import { useUpload } from '../../../hook/useUpload';
import { DEFAULT_LOGO } from '../../../types/const';

interface IProps { }

export const MsHomepageMain: React.FC<IProps> = ({ }) => {
    const { data: defaultHomepage } = useHomepage();
    const { signleUpload } = useUpload();
    const [homeapgeUpdate] = useHomepageUpdate();
    const [homepage, setHomepage] = useState<null | Fhomepage>(null);

    const handleSave = () => {
        homeapgeUpdate({
            variables: {
                params: {
                    ...omits(homepage)
                }
            }
        })
    }

    useEffect(() => {
        if (defaultHomepage)
            setHomepage(cloneObject(defaultHomepage));
    }, [defaultHomepage])


    if (!homepage) return <div>...loading</div>
    return <MasterLayout>
        <div className="in ">
            <h4>홈페이지 설정</h4>
            <div className="in_content">
                <HomepageTopNav />
                <div className="con homepage">
                    <div className="fin">
                        <div className="float_left">
                        </div>
                        <div className="float_right">
                            <button onClick={handleSave} type="submit" className="btn medium">저장하기</button>
                        </div>
                    </div>
                    <div className="design_table">
                        <div className="block_box">
                            <h5>사이트정보</h5>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">사이트명</div>
                                </div>
                                <div className="t02">
                                    <div className="txt"><input value={homepage.} className="w50" placeholder="" type="text" /></div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">사이트로고</div>
                                </div>
                                <div className="t02">
                                    <div className="txt"><input className="w50" type="file" /></div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">사이트로고(하단)</div>
                                </div>
                                <div className="t02">
                                    <div className="txt"><input className="w50" type="file" /></div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">대표자</div>
                                </div>
                                <div className="t02">
                                    <div className="txt"><input className="w50" placeholder="" type="text" /></div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">사업자등록번호</div>
                                </div>
                                <div className="t02">
                                    <div className="txt"><input className="w50" placeholder="" type="text" /></div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">통신판매신고번호</div>
                                </div>
                                <div className="t02">
                                    <div className="txt"><input className="w50" placeholder="" type="text" /></div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">주소</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w50 mr5" placeholder="주소" type="text" />
                                        <input className="w40" placeholder="지도바로가기 URL" type=" text" />
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">계좌번호</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w10 mr5" placeholder="은행" type="text" />
                                        <input className="w50 mr5" placeholder="계좌번호" type="text" />
                                        <input className="w20" placeholder="예금주" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">이메일</div>
                                </div>
                                <div className="t02">
                                    <div className="txt"><input className="w50" placeholder="" type="text" /></div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">연락처</div>
                                </div>
                                <div className="t02">
                                    <div className="txt"><input className="w50" placeholder="" type="text" /></div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">영업시간(콜센터)</div>
                                </div>
                                <div className="t02">
                                    <div className="txt"><input className="w50" placeholder="" type="text" /></div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">카피라이터</div>
                                </div>
                                <div className="t02">
                                    <div className="txt"><input className="w90" placeholder="Copyright © 2020 PINKROADER Co., Ltd. All rights reserved" type="text" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="block_box">
                            <h5>검색 최적화 설정(SEO)</h5>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">사이트 대표 이미지</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input onChange={(e) => {
                                            if (!e.currentTarget.files) return;
                                            signleUpload(e.currentTarget.files, (url, data) => {
                                                homepage.logo = data
                                                setHomepage({
                                                    ...homepage
                                                })
                                            })
                                        }} className="w50" type="file" />
                                        <p className="infotxt_gray">페이스북 공유 시 문서에 이미지가 없으면 기본 이미지로 사용됩니다. (추천 : 1200x600, 600x315, 200x200)</p>
                                        {/* 첨부파일 미리보기 이미지 */}
                                        <img className="mt15 w50" src={homepage?.logo?.uri || DEFAULT_LOGO} alt="첨부파일 미리보기" />
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">사이트 이름</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input value={homepage.siteName} onChange={(e) => {
                                            const val = e.currentTarget.value;
                                            homepage.siteName = val;
                                            setHomepage({
                                                ...homepage
                                            })
                                        }} className="w30" placeholder="" type="text" />
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
                                        <input value={homepage.siteDesc} onChange={(e) => {
                                            const val = e.currentTarget.value;
                                            homepage.siteDesc = val;
                                            setHomepage({
                                                ...homepage
                                            })
                                        }} className="w80" placeholder="" type="text" />
                                        <p className="infotxt_gray">사이트의 주제에 관한 설명. 200자 미만으로 너무 길지 않고 의도적으로 너무 많은 키워드를 반복하는 것은 좋지 않습니다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="block_box">

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
                        </div> */}
                        {/* <div className="block_box">

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
                        </div> */}
                        {/* <div className="block_box">

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
                        </div> */}
                    </div>
                    <div className="fin">
                        <div className="float_left">
                        </div>
                        <div className="float_right">
                            <button onClick={handleSave} type="submit" className="btn medium">저장하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MasterLayout >
};

export default MsHomepageMain;