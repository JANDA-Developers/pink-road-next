import { MasterLayout } from 'layout/MasterLayout';
import React, { useEffect, useRef, useState } from 'react';
import { HomepageTopNav } from '../../../components/topNav/MasterTopNav';
import { useHomepage, useHomepageUpdate } from '../../../hook/useHomepage';
import { Fhomepage, Fhomepage_bankInfo } from '../../../types/api';
import { cloneObject } from '../../../utils/clone';
import { omits } from '../../../utils/omit';
import { useUpload } from '../../../hook/useUpload';
import { DEFAULT_LOGO } from '../../../types/const';
import PageLoading from '../../Loading';

interface IProps { }

export const MsHomepageMain: React.FC<IProps> = ({ }) => {
    const { data: defaultHomepage } = useHomepage();
    const { signleUpload } = useUpload();
    const [homeapgeUpdate] = useHomepageUpdate({
        onCompleted: ({ HomepageUpdate }) => {
            if (HomepageUpdate.ok) alert("업데이트 완료");
        }
    });
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


    const upload = (key: keyof Fhomepage) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.currentTarget.files;
        if (!file || !homepage) return;

        signleUpload(e.currentTarget.files!, (url, data) => {
            homepage[key] = data as any;
            setHomepage({
                ...homepage
            })
        })
    }

    function set<T extends keyof Fhomepage>(key: T, value: any) {
        if (!homepage) return;
        homepage[key] = value;
        setHomepage({ ...homepage })
    }

    function setBankInfo<T extends keyof Fhomepage_bankInfo>(key: T, value: any) {
        if (!homepage!.bankInfo) {
            // @ts-ignore
            homepage.bankInfo = {}
        }
        // @ts-ignore
        homepage.bankInfo[key] = value;

        // @ts-ignore
        setHomepage({ ...homepage })
    }


    const uploadPartnerFooter = (e: React.ChangeEvent<HTMLInputElement>) => {
        signleUpload(e.currentTarget.files!, (url, data) => {
            const target = homepage?.["partnerFooter"];
            target ? target.push(data) : [data];
            setHomepage({
                ...homepage as any
            })
        })
    }

    const removePartnerFooter = (index: number) => () => {
        homepage?.partnerFooter?.splice(index, 1);
        setHomepage({
            ...homepage as any
        })
    }

    if (!homepage) return <PageLoading />
    const { ceoName, bankInfo, copyRight, logo, logoBottom, logoTop, contact, degitalSalesNumber, address, addressUrl, busiNumber, email, openTime } = homepage;
    const { accountHolder, accountNumber, bankName } = bankInfo || {}
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
                                    <div className="txt"><input
                                        onChange={(e) => {
                                            const val = e.currentTarget.value;
                                            set("siteName", val);
                                        }} value={homepage.siteName} className="w50" placeholder="" type="text" /></div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">사이트로고</div>
                                </div>
                                <div className="t02">
                                    <p>{logoTop?.name}</p>
                                    <div className="txt"><input onChange={upload("logoTop")} className="w50" type="file" /></div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">사이트로고(하단)</div>
                                </div>
                                <div className="t02">
                                    <p>{logoBottom?.name}</p>
                                    <div className="txt"><input onChange={upload("logoBottom")} className="w50" type="file" /></div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">대표자</div>
                                </div>
                                <div className="t02">
                                    <div className="txt"><input onChange={(e) => {
                                        const val = e.currentTarget.value;
                                        set("ceoName", val);
                                    }} value={ceoName} className="w50" placeholder="" type="text" /></div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">사업자등록번호</div>
                                </div>
                                <div className="t02">
                                    <div className="txt"><input onChange={(e) => {
                                        const val = e.currentTarget.value;
                                        set("busiNumber", val);
                                    }} value={busiNumber} className="w50" placeholder="" type="text" /></div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">통신판매신고번호</div>
                                </div>
                                <div className="t02">
                                    <div className="txt"><input onChange={(e) => {
                                        const val = e.currentTarget.value;
                                        set("degitalSalesNumber", val);
                                    }} value={degitalSalesNumber || ""} className="w50" placeholder="" type="text" /></div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">주소</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input onChange={(e) => {
                                            const val = e.currentTarget.value;
                                            set("address", val)
                                        }} value={address} className="w50 mr5" placeholder="주소" type="text" />
                                        <input onChange={(e) => {
                                            const val = e.currentTarget.value;
                                            set("addressUrl", val)
                                        }} value={addressUrl} className="w40" placeholder="지도바로가기 URL" type=" text" />
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">계좌번호</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input onChange={(e) => {
                                            const account = e.currentTarget.value;
                                            setBankInfo("bankName", account)
                                        }} value={bankName || ""} className="w10 mr5" placeholder="은행" type="text" />
                                        <input onChange={(e) => {
                                            const accountNumber = e.currentTarget.value;
                                            setBankInfo("accountNumber", accountNumber)
                                        }} value={accountNumber || ""} className="w50 mr5" placeholder="계좌번호" type="text" />
                                        <input onChange={(e) => {
                                            const accountHolder = e.currentTarget.value;
                                            setBankInfo("accountHolder", accountHolder)
                                        }} value={accountHolder || ""} className="w20" placeholder="예금주" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">이메일</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input onChange={(e) => {
                                            const email = e.currentTarget.value;
                                            set("email", email)
                                        }} value={email} className="w50" placeholder="" type="text" /></div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">연락처</div>
                                </div>
                                <div className="t02">
                                    <div className="txt"><input onChange={(e) => {
                                        const val = e.currentTarget.value;
                                        set("contact", val)
                                    }} value={contact} className="w50" placeholder="" type="text" /></div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">영업시간(콜센터)</div>
                                </div>
                                <div className="t02">
                                    <div className="txt"><input onChange={(e) => {
                                        const val = e.currentTarget.value;
                                        set("openTime", val)
                                    }} value={openTime} className="w50" placeholder="" type="text" /></div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">카피라이터</div>
                                </div>
                                <div className="t02">
                                    <div className="txt"><input onChange={(e) => {
                                        const val = e.currentTarget.value;
                                        set("copyRight", val)
                                    }} value={copyRight || ""} className="w90" placeholder="Copyright © 2021 It's Guide Co., Ltd. All rights reserved" type="text" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="block_box">
                            <h5>하단 로고</h5>
                            <div key={homepage.partnerFooter?.length} className="tbody">
                                <div className="t01">
                                    <div className="title">로고추가</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input name={"bottomLogoAdd"} onChange={uploadPartnerFooter} className="w50" type="file" />
                                    </div>
                                </div>
                            </div>
                            {homepage?.partnerFooter?.map(({ name }, index) =>
                                <div className="tbody">
                                    <div className="t01">
                                        <div className="title overflowEllipsis">{name}</div>
                                    </div>
                                    <div className="t02">
                                        <div className="txt">
                                            <input name={"bottomLogo" + index} onChange={uploadPartnerFooter} className="w50" type="file" />
                                        </div>
                                    </div>
                                    <button style={{
                                        height: "min-content",
                                        whiteSpace: "nowrap"
                                    }} onClick={removePartnerFooter(index)} type="submit" className="btn medium">삭제하기</button>
                                </div>
                            )}

                        </div>
                        <div className="block_box">
                            <h5>SNS설정</h5>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">SNS-페이스북 연결</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input value={homepage?.facebookLink || ""} onChange={(e) => {
                                            const val = e.currentTarget.value
                                            set("facebookLink", val);
                                        }} className="w80" placeholder="주소" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">SNS-트위터 연결</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input value={homepage?.twitterLink || ""} onChange={(e) => {
                                            const val = e.currentTarget.value
                                            set("twitterLink", val);
                                        }} className="w80" placeholder="주소" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">SNS-인스타 연결</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input value={homepage?.instaLink || ""} onChange={(e) => {
                                            const val = e.currentTarget.value
                                            set("instaLink", val);
                                        }} className="w80" placeholder="주소" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">SNS-네이버블로그 연결</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input value={homepage?.blogLink || ""} onChange={(e) => {
                                            const val = e.currentTarget.value
                                            set("blogLink", val);
                                        }} className="w80" placeholder="주소" type="text" />
                                    </div>
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
                                        <p>{logo?.name}</p>
                                        <input onChange={upload("logo")} className="w50" type="file" />
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