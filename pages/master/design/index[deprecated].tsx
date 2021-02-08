import { MasterLayout } from 'layout/MasterLayout';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useHomepage, useHomepageUpdate } from '../../../hook/useHomepage';
import { Fhomepage, homepage_Homepage_data } from '../../../types/api';
import { useUpload } from '../../../hook/useUpload';
import { omits } from '../../../utils/omit';
import { cloneObject } from '../../../utils/clone';
import { ALLOW_ADMINS } from '../../../types/const';
import { auth } from '../../../utils/with';
import { DesignTopNav } from '../../../components/topNav/MasterTopNav';

interface IProp { }

export const MsDesignMain: React.FC<IProp> = () => {
    const [homepageUpdate] = useHomepageUpdate();
    const { data: defaultHomepage } = useHomepage();
    const { signleUpload } = useUpload();
    const [homepage, setHomepage] = useState<homepage_Homepage_data>();

    const handleSave = () => {
        homepageUpdate({
            variables: {
                params: {
                    ...omits(homepage)
                }
            }
        })
    }

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


    useEffect(() => {
        if (defaultHomepage)
            setHomepage(cloneObject(defaultHomepage));
    }, [defaultHomepage])

    return <MasterLayout>
        <div className="in ">
            <h4>디자인 설정</h4>
            <div className="in_content">
                <div className="tab-nav">
                    <ul>
                        {/* <li className="on"><Link href="/master/design"><a>기본설정</a></Link></li> */}
                        <DesignTopNav />
                    </ul>
                </div>
                <div className="con design">
                    <div className="fin">
                        <div className="float_left">
                        </div>
                        <div className="float_right">
                            <button onClick={handleSave} type="submit" className="btn medium">저장하기</button>
                        </div>
                    </div>
                    <div className="design_table ">

                        {/* <div className="block_box">

                            <h5>하단 바로가기 링크</h5>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">하단바로가기-정보01</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30 mr5" placeholder="바로가기 이름" type="text" />
                                        <input className="w50" placeholder="연결주소" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">하단바로가기-정보02</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30 mr5" placeholder="바로가기 이름" type="text" />
                                        <input className="w50" placeholder="연결주소" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">하단바로가기-정보03</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30 mr5" placeholder="바로가기 이름" type="text" />
                                        <input className="w50" placeholder="연결주소" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">하단바로가기-정보04</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30 mr5" placeholder="바로가기 이름" type="text" />
                                        <input className="w50" placeholder="연결주소" type="text" />
                                    </div>
                                </div>
                            </div>

                        </div> */}
                        {/* <div className="block_box">
                            <h5>커스텀 디자인 설정</h5>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">커스텀 디자인 잠금</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <div className="switch">
                                            <input className="tgl tgl-skewed" id="cb3" type="checkbox" />
                                            <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor="cb3"></label>
                                        </div>
                                        <p className="infotxt_gray">해당 옵션을 OFF시 커스텀디자인을 실수로 수정할 일이 없어요~!!</p>
                                    </div>
                                </div>

                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">메인컬러</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30" placeholder="#000000" type="text" />
                                    </div>
                                </div>

                            </div>
                            <div className="tbody">
                                <div className="t01">
                                    <div className="title">하단 배경색상</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30" placeholder="#000000" type="text" />
                                    </div>
                                </div>

                            </div>
                        </div> */}





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

export default auth(ALLOW_ADMINS)(MsDesignMain);;