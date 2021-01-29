import { MasterLayout } from 'layout/MasterLayout';
import CalendarIcon from 'components/common/icon/CalendarIcon';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useHomepage, useHomepageUpdate } from '../../../hook/useHomepage';
import { useUpload } from '../../../hook/useUpload';
import { Fhomepage } from '../../../types/api';
import { omits } from '../../../utils/omit';
import { cloneObject } from '../../../utils/clone';

interface IProp { }

export const MsDesignA: React.FC<IProp> = () => {
    const { signleUpload } = useUpload();
    const { data: defaultHomepage } = useHomepage()
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

    if (!homepage) return null;
    return <MasterLayout>
        <div className="in ">
            <h4>디자인 설정</h4>
            <div className="in_content">
                <div className="tab-nav">
                    <ul>
                        <li><Link href="/master/design"><a>기본설정</a></Link></li>
                        <li className="on"><Link href="/master/design/banner"><a>배너관리</a></Link></li>
                        <li><Link href="/master/design/popup"><a>팝업관리</a></Link></li>
                        <li><Link href="/master/design/display"><a>노출상품관리</a></Link></li>
                    </ul>
                </div>
                <div className="con design banner_setting">
                    <div className="fin">
                        <div className="float_left">
                        </div>
                        <div className="float_right">
                            <button type="submit" className="btn medium">저장하기</button>
                        </div>
                    </div>
                    <div className="content">
                        <div className="block_box">
                            <div className="design_table">
                                <h5>배너 기본설정</h5>
                                <div className="tbody">
                                    <div className="t01">
                                        <div className="title">사용여부</div>
                                    </div>
                                    <div className="t02">
                                        <div className="txt">
                                            <div className="switch">
                                                <input className="tgl tgl-skewed" id="cb3" type="checkbox" />
                                                <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor="cb3"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tbody">
                                    <div className="t01">
                                        <div className="title">배너A - 이미지</div>
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
                                            <p className="infotxt_gray">images size : 500px * 134px</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tbody">
                                    <div className="t01">
                                        <div className="title">배너A - 연결주소</div>
                                    </div>
                                    <div className="t02">
                                        <div className="txt">
                                            <input className="w50" placeholder="https://" type="text" />
                                            <select className="w30 ml5">
                                                <option>새창</option>
                                                <option>현재창</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="tbody">
                                    <div className="t01">
                                        <div className="title">배너B - 이미지</div>
                                    </div>
                                    <div className="t02">
                                        <div className="txt">
                                            <input className="w50" type="file" />
                                            <p className="infotxt_gray">images size : 500px * 134px</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tbody">
                                    <div className="t01">
                                        <div className="title">배너B - 연결주소</div>
                                    </div>
                                    <div className="t02">
                                        <div className="txt">
                                            <input className="w50" placeholder="https://" type="text" />
                                            <select className="w30 ml5">
                                                <option>새창</option>
                                                <option>현재창</option>
                                            </select>
                                        </div>
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

                <div className="fade"></div>

            </div>
        </div>
    </MasterLayout >
};

export default MsDesignA;