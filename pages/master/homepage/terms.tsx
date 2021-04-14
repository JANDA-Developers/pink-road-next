import { MasterLayout } from 'layout/MasterLayout';
import React, { useState } from 'react';
import Link from "next/link";
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getHomepage, TGetHomepage } from '../../../utils/page';
import { useHomepageUpdate } from '../../../hook/useHomepage';
import { HomepageUpdateInput } from '../../../types/api';
import { LoadEditor } from '../../../components/edit/EdiotrLoading';
import { auth } from '../../../utils/with';
import { ALLOW_ADMINS } from '../../../types/const';
import { HomepageTopNav } from '../../../components/topNav/MasterTopNav';
import { omits } from '../../../utils/omit';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Editor = LoadEditor();

// 일반회원/개인파트너/기업파트너/
// 이용약관
// 개인정보 수집 및 이용

//공통부분
// 개인정보 제 3자 제공
// SMS, E-mail 수신동의 [선택]
// 여행자약관

//하단
// 이용약관
// 국내여행약관
// 개인정보처리방침
// 취소 및 환불 정책

// 예약받을때
// -여행자약관 = 중첩
// -개인정보수 집 및 이용
// -개인정보 제3자제공

interface IProp { }
export const getStaticProps = getHomepage;
export const MsHomepageA: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ homepage }) => {

    const [homepageUpdateMu] = useHomepageUpdate();

    const defaults = homepage as any;

    const [datas, setDatas] = useState<HomepageUpdateInput>({
        ...defaults
    })

    const setPoliicy = (key: keyof HomepageUpdateInput) => (data: string) => {
        // @ts-ignore
        datas[key] = data;
        setDatas({ ...datas })
    }

    const textReverse = (key: keyof HomepageUpdateInput) => {
        if (key === "indiUsePolicy") return "일반회원(회원가입) - 이용약관"
        if (key === "partnerUsePolicy") return "개인파트너(회원가입) - 이용약관"
        if (key === "busiUsePolicy") return "기업파트너(회원가입) - 이용약관"
        if (key === "indiPrivacyPolicy") return "일반회원(회원가입) - 개인정보 수집 및 이용"
        if (key === "partnerPrivacyPolicy") return "개인파트너(회원가입) - 개인정보 수집 및 이용"
        if (key === "busiPartnerPrivacyPolicy") return "기업파트너(회원가입) - 개인정보 수집 및 이용"
        if (key === "privacyThirdPolicy") return "공통(회원가입) - 개인정보 제 3자 제공"
        if (key === "marketingPolicy") return "공통(회원가입) - SMS, E-mail 수신동의[선택]"
        if (key === "travelerPolicy") return "공통(회원가입, 예약받을때) - 여행자약관"
        if (key === "usePolicy") return "(하단) - 이용약관"
        if (key === "refundPolicy") return "(하단) - 취소 및 환불정책"
        if (key === "krTravelPolicy") return "(하단) - 국내 여행약관"
        if (key === "bookingPrivacyPolicy") return "(예약받을때, 하단) - 개인정보 수집 및 이용"
        if (key === "bookingThirdPolicy") return "예약받을때 - 개인정보 제3자제공"
        return ""
    }

    const handleSave = (key: keyof HomepageUpdateInput) => async () => {
        const next = {
            ...datas,
            [key]: datas[key] as string
        }
        homepageUpdateMu({
            variables: {
                params: {
                    ...omits(next, "modal" as any)
                }
            }
        }).then(result => {
            if (result.data?.HomepageUpdate?.ok) {
                alert(`${textReverse(key)} 저장이 완료되었습니다.`);
            }
        })
    }

    return <MasterLayout>
        <div className="in ">
            <div className="in_content">
                <Tabs>
                    <div className="tab-nav topline">
                        <TabList >
                            <Tab className="on"><a>일반회원</a></Tab>
                            <Tab><a>개인파트너</a></Tab>
                            <Tab><a>기업파트너</a></Tab>
                            <Tab><a>공통</a></Tab>
                        </TabList>
                    </div>
                    <TabPanel className="con homepage terms">
                        <div className="jul">
                            <h5>{textReverse("indiUsePolicy")}</h5>
                            <Editor data={datas.indiUsePolicy} onChange={setPoliicy("indiUsePolicy")} />
                            <div className="terms__termBox fin ifMobile">
                                <button onClick={handleSave("indiUsePolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                            </div>
                        </div>
                        <div className="jul">
                            <h5>{textReverse("indiPrivacyPolicy")}</h5>
                            <Editor data={datas.partnerUsePolicy} onChange={setPoliicy("indiPrivacyPolicy")} />
                            <div className="terms__termBox fin ifMobile">
                                <button onClick={handleSave("indiPrivacyPolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel className="con homepage terms">
                        <div className="jul">
                            <h5>{textReverse("partnerUsePolicy")}</h5>
                            <Editor data={datas.indiUsePolicy} onChange={setPoliicy("partnerUsePolicy")} />
                            <div className="terms__termBox fin ifMobile">
                                <button onClick={handleSave("partnerUsePolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                            </div>
                        </div>
                        <div className="jul">
                            <h5>{textReverse("partnerPrivacyPolicy")}</h5>
                            <Editor data={datas.partnerUsePolicy} onChange={setPoliicy("partnerPrivacyPolicy")} />
                            <div className="terms__termBox fin ifMobile">
                                <button onClick={handleSave("partnerPrivacyPolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel className="con homepage terms">
                        <div className="jul">
                            <h5>{textReverse("busiUsePolicy")}</h5>
                            <Editor data={datas.busiUsePolicy} onChange={setPoliicy("busiUsePolicy")} />
                            <div className="terms__termBox fin ifMobile">
                                <button onClick={handleSave("busiUsePolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                            </div>
                        </div>
                        <div className="jul">
                            <h5>{textReverse("busiPartnerPrivacyPolicy")}</h5>
                            <Editor data={datas.partnerUsePolicy} onChange={setPoliicy("busiPartnerPrivacyPolicy")} />
                            <div className="terms__termBox fin ifMobile">
                                <button onClick={handleSave("busiPartnerPrivacyPolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel className="con homepage terms">
                        <div className="jul">
                            <h5>{textReverse("privacyThirdPolicy")}</h5>
                            <Editor data={datas.busiUsePolicy} onChange={setPoliicy("privacyThirdPolicy")} />
                            <div className="terms__termBox fin ifMobile">
                                <button onClick={handleSave("privacyThirdPolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                            </div>
                        </div>
                        <div className="jul">
                            <h5>{textReverse("marketingPolicy")}</h5>
                            <Editor data={datas.partnerUsePolicy} onChange={setPoliicy("marketingPolicy")} />
                            <div className="terms__termBox fin ifMobile">
                                <button onClick={handleSave("marketingPolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                            </div>
                        </div>
                        <div className="jul">
                            <h5>{textReverse("travelerPolicy")}</h5>
                            <Editor data={datas.busiUsePolicy} onChange={setPoliicy("travelerPolicy")} />
                            <div className="terms__termBox fin ifMobile">
                                <button onClick={handleSave("travelerPolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                            </div>
                        </div>
                        <div className="jul">
                            <h5>{textReverse("usePolicy")}</h5>
                            <Editor data={datas.partnerUsePolicy} onChange={setPoliicy("usePolicy")} />
                            <div className="terms__termBox fin ifMobile">
                                <button onClick={handleSave("usePolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                            </div>
                        </div>
                        <div className="jul">
                            <h5>{textReverse("bookingPrivacyPolicy")}</h5>
                            <Editor data={datas.partnerUsePolicy} onChange={setPoliicy("bookingPrivacyPolicy")} />
                            <div className="terms__termBox fin ifMobile">
                                <button onClick={handleSave("bookingPrivacyPolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                            </div>
                        </div>
                        <div className="jul">
                            <h5>{textReverse("krTravelPolicy")}</h5>
                            <Editor data={datas.krTravelPolicy} onChange={setPoliicy("krTravelPolicy")} />
                            <div className="terms__termBox fin ifMobile">
                                <button onClick={handleSave("krTravelPolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                            </div>
                        </div>
                        <div className="jul">
                            <h5>{textReverse("bookingThirdPolicy")}</h5>
                            <Editor data={datas.partnerUsePolicy} onChange={setPoliicy("bookingThirdPolicy")} />
                            <div className="terms__termBox fin ifMobile">
                                <button onClick={handleSave("bookingThirdPolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                            </div>
                        </div>
                        <div className="jul">
                            <h5>{textReverse("refundPolicy")}</h5>
                            <Editor data={datas.krTravelPolicy} onChange={setPoliicy("refundPolicy")} />
                            <div className="terms__termBox fin ifMobile">
                                <button onClick={handleSave("refundPolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>

    </MasterLayout >
};

export default auth(ALLOW_ADMINS)(MsHomepageA as any);