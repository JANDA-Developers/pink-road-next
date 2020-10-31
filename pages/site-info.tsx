import React, { useContext, useLayoutEffect, useState } from 'react';
import { editUl, getEditUtils } from '../utils/pageEdit';
import { AppContext } from "./_app";
import pageInfo from 'info/siteInfo.json';

import $ from "jquery";
import { HiddenSubmitBtn } from 'components/common/HiddenSubmitBtn';
import { Upload } from 'components/common/Upload';

interface IProp { }

export const StieInfo: React.FC<IProp> = () => {
    const { editMode } = useContext(AppContext)
    const [page, setPage] = useState(pageInfo)
    const [open, setOpen] = useState(true);
    const [addInfo, setAddInfo] = useState({
        alt: "",
        img: "",
        link: "",
    })

    const { edit, ulEdit, imgEdit, editArray, addArray, removeArray } = getEditUtils(editMode, page, setPage);
    const { partners } = page;

    const changePartner = (key: string) => (e: any) => {
        const value = e.currentTarget.value;
        setAddInfo({ ...addInfo, alt: value })
    }

    return <div className="siteInfo_in">
        <HiddenSubmitBtn path="/" data={page} />
        <div style={{
            backgroundImage: `url(${page.mainBg})`
        }} className="top_bg w100">
            <div className="w1200">
                <h3  {...edit("mainTitle")} />
                <p  {...edit("secondTitle")} />
            </div>
            <Upload onUpload={imgEdit("mainBg")} />
        </div>
        {/* <div className="bold" title="Bold" onClick={() => { effectDoc('bold') }}>B</div> */}
        <div className="w100 con01 con_block">
            <div className="w1200">
                <h4  {...edit("pinkVision")} />
                <div className="bottom">
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
                        <i className="flaticon-diamond" />
                        <strong {...edit("purpose1_title")} />
                        <p {...edit("purpose1_bottom")} />
                    </li>;
                    <li>
                        <i className="flaticon-diamond" />
                        <strong  {...edit("purpose2_title")} />
                        <p {...edit("purpose2_bottom")} />
                    </li>
                    <li>
                        <i className="flaticon-diamond" />
                        <strong  {...edit("purpose3_title")} />
                        <p  {...edit("purpose3_bottom")} />
                    </li>;
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
            <div className="w1200">
                <ul>
                    <li>
                        <h4>
                            <strong {...edit("value1_title")} />
                            <span  {...edit("value1_en")} />
                        </h4>
                        <p title="value1_desc" {...edit("value1_desc")} />
                    </li>
                    <li>
                        <h4>
                            <strong {...edit("value2_title")} />
                            <span {...edit("value2_en")} />
                        </h4>
                        <p  {...edit("value2_desc")} />
                    </li>
                </ul>
                <div className="infoimg">
                    <div {...edit("info_img_title")} className="li01" />
                    <div className="li03">
                        <div className="dong01">
                            <strong>01</strong>
                            <span  {...edit("info_img1_title")} />
                            <p {...edit("info_img1_desc")} />
                        </div>
                        <div className="dong02">
                            <strong>02</strong>
                            <span  {...edit("info_img2_title")} />
                            <p {...edit("info_img2_desc")} />
                        </div>
                        <div className="dong03">
                            <strong>03</strong>
                            <span {...edit("info_img3_title")} />
                            <p {...edit("info_img3_desc")} />
                        </div>
                        <div className="dong04">
                            <strong>04</strong>
                            <span {...edit("info_img4_title")} />
                            <p {...edit("info_img4_desc")} />
                        </div>
                    </div>
                    <div className="li04">
                        <img src={'/img/svg/siteinfo_svg04.svg'} alt="화살표" />
                    </div>
                    <div className="li05">지역경제활성화</div>
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
                    {partners.map((partner, index) => {
                        const { alt, img, link } = partner;
                        return <li key={index}>
                            <a href={link}>
                                <img src='/img/partners7.png' alt={alt} />
                                <span onClick={() => {
                                    removeArray("partners", index);
                                }}>제거</span>
                                <Upload onUpload={(url) => {
                                    editArray("partners", index, { ...partner, img: url })
                                }} />
                            </a>
                        </li>
                    })}
                    <li onClick={() => {

                        addArray("partners", {})

                    }}>추가</li>
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
            <input value={addInfo.link} />
        </div>}
    </div>;
};

export default StieInfo
