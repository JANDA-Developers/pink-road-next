import React, { useContext, useState } from 'react';
import { getEditUtils } from '../utils/pageEdit';
import { AppContext } from "./_app";
import pageInfoDefault from 'info/siteInfo.json';
import { HiddenSubmitBtn } from 'components/common/HiddenSubmitBtn';
import { Upload } from 'components/common/Upload';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { usePageInfo } from 'hook/usePageInfo';
import { UserRole } from 'types/api';

type TGetProps = {
    pageInfo: typeof pageInfoDefault | "",
}
export const getStaticProps: GetStaticProps<TGetProps> = async (context) => {
    const { data } = await usePageInfo("site-info");
    return {
        props: {
            pageInfo: data?.value || "",
            revalidate: 10
        }, // will be passed to the page component as props
    }
}

export const StieInfo: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ pageInfo }) => {
    const original = pageInfo || pageInfoDefault;
    const { editMode, role } = useContext(AppContext)
    const [page, setPage] = useState<typeof pageInfoDefault>(original)
    const [open, setOpen] = useState(true);
    const [addInfo, setAddInfo] = useState({
        alt: "",
        img: "",
        link: "",
    })

    const { edit, ulEdit, imgEdit, editArray, addArray, removeArray, bg } = getEditUtils(editMode, page, setPage);
    const { partners } = page;

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
        <HiddenSubmitBtn setData={setPage} original={original} path="site-info" data={page} />
        <div style={{
            ...bg("mainBg")
        }} className="top_bg w100">
            <div className="w1200">
                <h3  {...edit("mainTitle")} />
                <span  {...edit("secondTitle")} />
            </div>
            <Upload onUpload={imgEdit("mainBg")} />
        </div>
        {/* <div className="bold" title="Bold" onClick={() => { effectDoc('bold') }}>B</div> */}
        <div className="w100 con01 con_block">
            <div className="">
                <div className="bottom">
                    <div className="haf_first">
                        <div {...ulEdit("pinkVision")} />
                    </div>
                    <div className="haf">
                        <strong {...edit("visionBox1_title")} />
                        <ul onKeyDown {...ulEdit("visionBox1_cotnent")}
                        />
                    </div>
                    <div className="haf">
                        <strong {...edit("visionBox2_title")} />
                        <ul {...ulEdit("visionBox2_cotnent")} />
                    </div>
                </div>
            </div>
        </div>
        <div className="con02">
            <div className="w1200">
                <div className="top_txt">
                    <h4  {...edit("purpose_title")} />
                    <p  {...edit("purpose_desc")} />
                </div>
                <ul>
                    <li>
                        <i className="icon_01" style={{

                        }} />
                        <strong {...edit("purpose1_title")} />
                        <p {...edit("purpose1_bottom")} />
                    </li>
                    <li>
                        <i className="icon_02" style={{

                        }} />
                        <strong  {...edit("purpose2_title")} />
                        <p {...edit("purpose2_bottom")} />
                    </li>
                    <li>
                        <i className="icon_03" style={{

                        }} />
                        <strong  {...edit("purpose3_title")} />
                        <p  {...edit("purpose3_bottom")} />
                    </li>
                </ul>
            </div>
        </div>
        <div className="w100 con03 con_block">
            <div className="w1200">
                <h4  {...edit("value_title")} />
                <p {...edit("value_desc")} />
            </div>
        </div>
        <div className="w100 con04 con_block">
            <div className="infopp">
                <div className="w1200">
                    <strong className="ovj">PINKROADER</strong>
                    <ul>
                        <li className="n01">
                            <h4>
                                <strong {...edit("value1_title")} />
                                <span  {...edit("value1_en")} />
                            </h4>
                            <div className="txt" title="value1_desc" {...edit("value1_desc")} />
                        </li>
                        <li className="n02">
                            <h4>
                                <strong {...edit("value3_title")} />
                                <span {...edit("value3_en")} />
                            </h4>
                            <div className="txt"  {...edit("value3_desc")} />
                        </li>
                        <li className="n03">
                            <h4>
                                <strong {...edit("value2_title")} />
                                <span {...edit("value2_en")} />
                            </h4>
                            <div className="txt"  {...edit("value2_desc")} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="infoimg">
                <div className="w1200">
                    <div {...edit("info_img_title")} className="li01" />
                    <div className="li03">
                        <div className="dong01">
                            <strong>01</strong>
                            <span  {...edit("info_img1_title")} />
                            <i {...edit("info_img1_desc")} />
                        </div>
                        <div className="dong02">
                            <strong>02</strong>
                            <span  {...edit("info_img2_title")} />
                            <i {...edit("info_img2_desc")} />
                        </div>
                        <div className="dong03">
                            <strong>03</strong>
                            <span {...edit("info_img3_title")} />
                            <i {...edit("info_img3_desc")} />
                        </div>
                        <div className="dong04">
                            <strong>04</strong>
                            <span {...edit("info_img4_title")} />
                            <i {...edit("info_img4_desc")} />
                        </div>
                    </div>
                    <div className="li04">
                        <img src={'/img/svg/siteinfo_svg04.svg'} alt="화살표" />
                    </div>
                    <div className="li05">지역경제활성화</div>
                </div>
                <div className="wave_animation_wrap">
                    <div className="figure_wrap">
                        <div className="wave1 item"><span style={{ backgroundImage: 'url(/img/foot_wave01.png)' }}></span></div>
                        <div className="wave2 item"><span style={{ backgroundImage: 'url(/img/foot_wave02.png)' }}></span></div>
                        <div className="wave3 item" > <span style={{ backgroundImage: 'url(/img/foot_wave03.png)' }}></span></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w100 con05 con_block">
            <div className="w1200">
                <h4>Company history</h4>
                <div className="in_txt">
                    <div className="year y2020">
                        <strong>2020</strong>
                        <ul {...ulEdit("history2020")} />
                    </div>
                    <div className="year y2019">
                        <strong>2019</strong>
                        <ul {...ulEdit("history2019")} />
                    </div>
                    <div className="year y2018">
                        <strong>2018</strong>
                        <ul {...ulEdit("history2018")} />
                    </div>
                    <div className="year y2017">
                        <strong>2017</strong>
                        <ul {...ulEdit("history2017")} />
                    </div>
                    <div className="year y2016">
                        <strong>2016</strong>
                        <ul {...ulEdit("history2016")} />
                    </div>
                    <div className="year y2015">
                        <strong>2015</strong>
                        <ul {...ulEdit("history2015")} />
                    </div>
                    <div className="year y2014">
                        <strong>2014</strong>
                        <ul {...ulEdit("history2014")} />
                    </div>
                    <div className="year y2013">
                        <strong>2013</strong>
                        <ul {...ulEdit("history2013")} />
                    </div>
                    <div className="year y2012">
                        <strong>2012</strong>
                        <ul {...ulEdit("history2012")} />
                    </div>
                </div>
            </div>
        </div>
        <div className="w100 con06 con_block">
            <div className="w1200">
                <h4>
                    <strong {...edit("pink_supporter_title")} />
                    <span {...edit("pink_supporter_sub")} />
                </h4>
                <ul>
                    {partners.kr.map((partner, index) => {
                        const { alt, img, link } = partner;
                        return <li key={index + "partner"}>
                            <a href={link}>
                                <img src='/img/partners7.png' alt={alt} />
                                <span className="del" onClick={() => {
                                    removeArray("partners", index);
                                }}><i className="flaticon-multiply"></i></span>
                                <Upload onUpload={(url) => {
                                    editArray("partners", index, { ...partner, img: url })
                                }} />
                            </a>
                        </li>
                    })}
                    {role === UserRole.admin || UserRole.manager && 
                        <li className="add" onClick={() => {
                            addArray("partners", {})
                        }}><i className="flaticon-add"></i>추가</li>
                    }
                </ul>
               
            </div>
        </div>
        <div className="w100 con07 con_block">
            <div className="w1200">
                <h4>
                    <strong>우리는 쉬운 길보다 옳은 길을 만들고 걸어갑니다.</strong>
                    We walk the right path rather than the easy one
                </h4>
                <span>제휴문의</span>

            </div>
            <div className="ovj"></div>
            <div className="bg" />
        </div>
        {open && <div style={{
            opacity: 0,
            position: "fixed",
            width: "1px",
            height: "1px",
            top: 0,
            left: 0,
            overflow: "hidden"
        }}>
            {/* <input onChange={changePartner} value={addInfo.alt} /> */}
            <Upload onUpload={(url) => {
                setAddInfo({
                    ...addInfo,
                    img: url
                })
            }} />
            <input />
            <input onChange={() => { }} value={addInfo.link} />
        </div>}










        {/* popup은 언제나 class fade와 함께 있어야 한다. */}
        <div className="popup_bg_mini" style={{ display: 'none' }}>
            <a className="close_icon"><i className="flaticon-multiply" /></a>
            <div className="in_txt">
                <h3>이미지 업로드</h3>
                <div className="con">
                    <div className="input_box">
                        <input type="file" />
                    </div>
                    <div className="info">
                        <p><i className="flaticon-flag-1" /> 사이즈는 가로사이즈 300px이 넘지 않아야 합니다. <br /> PNG파일을 권장드리나 gif, jpg도 업로드가능합니다.</p>
                    </div>

                </div>
            </div>
        </div>
        <div className="fade"></div>






    </div>;
};

export default StieInfo

