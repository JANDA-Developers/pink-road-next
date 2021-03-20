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
        if (key === "usePolicy") return "이용약관";
        if (key === "PrivacyPolicy") return "개인정보약관";
        if (key === "refundPolicy") return "취소및환불정책";
        if (key === "partnerBpolicy") return "기업파트너약관";
        if (key === "partnerPolicy") return "파트너약관";
        if (key === "marketingPolic") return "마케팅약관";
        if (key === "thirdPolicy") return "삼자정보제공약관";
        if (key === "travelerPolicy") return "여행자약관";
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

            <Tabs>
                <TabList>
                    <Tab>이용약관 동의</Tab>
                    <Tab>개인정보 수집 및 이용 동의</Tab>
                    <Tab>SMS, E-mail 수신동의</Tab>
                    <Tab>{userRoleToKR(userType)} 약관</Tab>
                    <Tab>개인정보 제3자 제공</Tab>
                </TabList>

                <TabPanel>
                    <Policy type="usePolicy" />
                </TabPanel>
                <TabPanel>
                    <Policy type="PrivacyPolicy" />
                </TabPanel>
                <TabPanel>
                    <Policy type="partnerPolicy" />
                </TabPanel>
                <TabPanel>
                    <Policy type="marketingPolic" />
                </TabPanel>
                <TabPanel>
                    {userType === UserRole.partnerB &&
                        <Policy type="partnerBpolicy" />
                    }
                    {userType === UserRole.partner &&
                        <Policy type="partnerPolicy" />
                    }
                    {userType === UserRole.individual &&
                        <Policy type="travelerPolicy" />
                    }
                </TabPanel>
                <TabPanel>
                    <Policy type="thirdPolicy" />
                </TabPanel>
            </Tabs>
            <h4>약관설정</h4>
            <div className="in_content">
                <HomepageTopNav />
                <div className="con terms">
                    <div className="jul">
                        <h5>이용약관</h5>
                        <Editor data={datas.usePolicy} onChange={setPoliicy("usePolicy")} />
                        <div className="terms__termBox fin ifMobile">
                            <button onClick={handleSave("usePolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                        </div>
                    </div>

                    <div className="jul">
                        <h5>개인정보수집 및 이용</h5>
                        <Editor data={datas.PrivacyPolicy} onChange={setPoliicy("PrivacyPolicy")} />
                        <div className="terms__termBox fin">
                            <button onClick={handleSave("PrivacyPolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                        </div>
                    </div>

                    <div className="jul">
                        <h5>개인정보 제3자 제공</h5>
                        <Editor data={datas.thirdPolicy} onChange={setPoliicy("thirdPolicy")} />
                        <div className="terms__termBox fin">
                            <button onClick={handleSave("thirdPolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                        </div>
                    </div>

                    <div className="jul">
                        <h5>여행자약관</h5>

                        <Editor data={datas.travelerPolicy} onChange={setPoliicy("travelerPolicy")} />

                        <div className="terms__termBox fin">
                            <button onClick={handleSave("travelerPolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                        </div>
                    </div>

                    <div className="jul">
                        <h5>SMS, E-mail 수신동의</h5>
                        <Editor data={datas.marketingPolic} onChange={setPoliicy("marketingPolic")} />
                        <div className="terms__termBox fin">
                            <button onClick={handleSave("marketingPolic")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                        </div>
                    </div>

                    <div className="jul">
                        <h5>파트너 이용 약관동의</h5>
                        <Editor data={datas.partnerPolicy} onChange={setPoliicy("partnerPolicy")} />
                        <div className="terms__termBox fin">
                            <button onClick={handleSave("partnerPolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                        </div>
                    </div>

                    <div className="jul">
                        <h5>기업 파트너 이용 약관동의</h5>
                        <Editor data={datas.partnerBpolicy} onChange={setPoliicy("partnerBpolicy")} />
                        <div className="terms__termBox fin ifMobile">
                            <button onClick={handleSave("partnerBpolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                        </div>
                    </div>


                    <div className="jul">
                        <h5>취소 및 환불 정책</h5>
                        <Editor data={datas.refundPolicy} onChange={setPoliicy("refundPolicy")} />
                        <div className="terms__termBox fin ifMobile">
                            <button onClick={handleSave("refundPolicy")} type="submit" className="terms__saveBtn btn medium">저장하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </MasterLayout >
};

export default auth(ALLOW_ADMINS)(MsHomepageA as any);