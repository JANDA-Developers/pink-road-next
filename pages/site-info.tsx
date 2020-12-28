import React, { useContext, useState } from 'react';
import { getEditUtils } from '../utils/pageEdit';
import { AppContext, EditContext } from "./_app";
import pageInfoDefault from 'info/siteInfo.json';
import { HiddenSubmitBtn } from 'components/common/HiddenSubmitBtn';
import { Upload } from 'components/common/Upload';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getStaticPageInfo } from '../utils/page';
import { IEditPage } from '../utils/with';

type TGetProps = {
    pageInfo: typeof pageInfoDefault | "",
}

export const getStaticProps: GetStaticProps<TGetProps> = getStaticPageInfo("site-info", pageInfoDefault);
export const StieInfo: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ pageInfo }) => {
    const original = pageInfo || pageInfoDefault;
    const { editMode, edit, editArray, addArray, removeArray, page } = useContext<IEditPage<typeof pageInfoDefault>>(EditContext as any);
    const { partners } = page;
    const [addInfo, setAddInfo] = useState({
        alt: "",
        img: "",
        link: "",
    })

    const changePartner = (key: string) => (e: any) => {
        const value = e.currentTarget.value;
        setAddInfo({ ...addInfo, alt: value })
    }

    const openPopup = (element: string | null) => {
        let popupElement = document.getElementById(`${element}`) as HTMLElement;
        popupElement!.style.display = 'block';
        document!.getElementById('fade')!.style.display = 'block';
    }

    const closePopup = (element: string | null) => {
        let popupElement = document.getElementById(`${element}`) as HTMLElement;
        popupElement!.style.display = 'none';
        document!.getElementById('fade')!.style.display = 'none';
    }


    return <div className="siteInfo_in">
        <div className="top_bg w100" style={{ backgroundImage: 'url(/its/portfolio_top_bg.jpg)' }}>
            {/* <Upload onUpload={imgEdit("con01_bg")} /> */}
            <div className="w1200">
                <h3 {...edit("con01_mainTitle")} />
                <p {...edit("con01_secondTitle")} />
                <div className="logo"><img src="/its/logo_1.png" alt="잇츠가이드 로고" /></div>
            </div>
        </div>


        <div className="con02">
            <div className="w1200">
                <div className="top_txt">
                    <h4 {...edit("con02_mainTitle")} />
                    <p {...edit("con02_secondTitle")} />
                </div>
                <ul>
                    <li>
                        <i className="svg1"><img src="/img/svg/siteinfo_icon_03.svg" /></i>
                        <strong {...edit("con02_icon01_txt")} />
                    </li>
                    <li>
                        <i className="svg2"><img src="/img/svg/siteinfo_icon_01.svg" /></i>
                        <strong {...edit("con02_icon02_txt")} />
                    </li>
                    <li>
                        <i className="svg3"><img src="/img/svg/siteinfo_icon_02.svg" /></i>
                        <strong {...edit("con02_icon03_txt")} />
                    </li>
                </ul>
            </div>
        </div>

        <div className="w100 con01 con_block">
            <div className="w1200">
                <h4>
                    <i className="after flaticon-cloud-computing-5"></i>
                    <span {...edit("con03_txt")} />
                    <i className="before flaticon-command"></i>
                </h4>

            </div>

        </div>


        <div className="w100 con03 con_block" style={{ backgroundImage: "url(/its/siteinfo_bg04.jpg)" }}>
            <div className="w1200">
                <h4 {...edit("con04_mainTitle")} />
                <p {...edit("con04_secondTitle")} />
                <div className="info_address">
                    <ul>
                        <li className="on" {...edit("con04_round01")} />
                        <li className="on" {...edit("con04_round02")} />
                        <li className="on" {...edit("con04_round03")} />
                        <li className="on" {...edit("con04_round04")} />
                    </ul>
                </div>
            </div>
        </div>


        <div className="w100 con06 con_block">
            <div className="w1200">
                <h4>
                    <strong {...edit("con05_mainTitle")} />
                    <span {...edit("con05_secondTitle")} />
                </h4>
                <ul>
                    <li><a href="/"><img src="/its/partner_01.png" alt="파트너로고" /></a></li>
                    <li><a href="/"><img src="/its/partner_02.png" alt="파트너로고" /></a></li>
                    <li><a href="/"><img src="/its/partner_03.png" alt="파트너로고" /></a></li>
                    {/* {partners.kr.map((partner: any, index: number) => {
                        const { alt, img, link } = partner;
                        return <li key={index + "partner"}>
                            <a href={editMode ? undefined : link}>
                                <img src={img} alt={alt} />
                                {editMode &&
                                    <span className="del" onClick={() => {
                                        removeArray("partners", index);
                                    }}><i className="flaticon-multiply"></i></span>
                                }
                                <Upload onUpload={(url) => {
                                    editArray("partners", index, { ...partner, img: url })
                                }} />
                            </a>
                        </li>
                    })} */}
                    {editMode &&
                        <li className="add" onClick={() => {
                            addArray("partners", {})
                        }}><i className="flaticon-add"></i>추가</li>
                    }
                </ul>

            </div>
        </div>


        <div className="w100">
            <div className="main_con_box7">
                <div className="box01">
                    <div className="w1200">
                        <span className="sidetxt">recruiting new guide</span>
                        <h2>잇츠가이드 플랫폼에서<br /><strong>더 많은 <i>활동영역</i>을 넓혀보시기 바랍니다.</strong></h2>
                        <div className="link"><a href="../sub/join.html">가이드지원<i></i></a></div>

                    </div>
                    <div className="ovj">IT'S GUIDE</div>
                </div>
                <div className="box02">
                    <div className="left">
                        <h3>
                            가이드 고객 관리가<br />
                                이젠 어렵지가 않아요.<br />
                                예약관리프로그램이<br />
                                가이드 고객의 예약을<br />
                                관리해드립니다.

                            </h3>
                        <p>
                            예약관리시스템에서 결제도 한번에 관리도 한번에
                            관리해드립니다. 더 이상 어렵게 관리하지 마세요.
                            </p>
                    </div>
                    <div className="right">
                        <div className="txt">
                            <strong>01</strong>
                            <p>
                                reservation<br />
                                    management
                                </p>
                        </div>

                    </div>
                </div>
                <div className="box03">
                    <div className="left">
                        <div className="txt">
                            <strong>02</strong>
                            <p>
                                be free from<br />
                                    marketing expenses
                                </p>
                        </div>
                    </div>
                    <div className="right">

                        <h3>
                            잇츠가이드에서는<br />
                                마케팅 걱정이 없어요.<br />
                                따로 광고하지 않아도<br />
                                예약이 이루어집니다.

                            </h3>
                        <p>
                            잇츠가이드에서 가이드만 하세요. 홍보와 마케팅은
                            저희가 다 하겠습니다.
                            </p>


                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default StieInfo

