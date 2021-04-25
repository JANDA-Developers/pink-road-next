import React, { useState } from "react";
import { Upload } from "components/common/Upload";
import { getStaticPageInfo, Ipage } from "../utils/page";
import defaultPageInfo from "../info/siteInfo.json";
import { Bg, Img } from "../components/Img/img";
import { usePageEdit } from "../hook/usePageEdit";
import { PageEditor } from "../components/common/PageEditer";
import { Ul } from "../components/edit/Ul";
import { CloseIcon } from "../components/common/icon/CloseIcon";

export const getStaticProps = getStaticPageInfo("site-info");
export const StieInfo: React.FC<Ipage> = (pageInfo) => {
    const editorTools = usePageEdit(pageInfo, defaultPageInfo);
    const {
        edit,
        get,
        arrayImgKit,
        imgEdit,
        ulEdit,
        bg,
        removeArray,
        editMode,
        unShiftArray,
        addArray,
        page,
        imgKit,
        objectArrayUlEdit,
    } = editorTools;

    const [open, setOpen] = useState(true);
    const [addInfo, setAddInfo] = useState({
        alt: "",
        img: "",
        link: "",
    });

    const { partners } = page;

    const changePartner = (key: string) => (e: any) => {
        const value = e.currentTarget.value;
        setAddInfo({ ...addInfo, alt: value });
    };

    const openPopup = (element: string | null) => {
        let popupElement = document.getElementById(`${element}`) as HTMLElement;
        popupElement!.style.display = "block";
        document!.getElementById("fade")!.style.display = "block";
    };

    const closePopup = (element: string | null) => {
        let popupElement = document.getElementById(`${element}`) as HTMLElement;
        popupElement!.style.display = "none";
        document!.getElementById("fade")!.style.display = "none";
    };

    return (
        <div className="siteInfo_in">
            <PageEditor pageTools={editorTools} />
            <Bg className="siteInfo__top" {...imgKit("mainBg")}>
                <div className="top_bg w100">
                    <div className="w1200">
                        <h3 {...edit("mainTitle")} />
                        <span {...edit("secondTitle")} />
                    </div>
                    {/* <Upload onUpload={imgEdit("mainBg")} /> */}
                    <div className="main__wave_box">
                        <div className="main__wave"></div>
                    </div>
                </div>
            </Bg>
            <div className="w100 con01 con_block">
                <div className="w1200">
                    <div className="top">
                        <div className="haf01">
                            <strong {...edit("pinkVision_title")} />
                            <ul>
                                <li {...edit("pinkVision")} />
                            </ul>
                        </div>
                        <div className="center">
                            <div className="haf02">
                                <Img {...imgKit("pinkload_intro")} />
                            </div>
                            <div className="haf03">
                                <strong {...edit("visionBox1_title")} />
                                <Ul {...ulEdit("visionBox1_cotnent_new")} />
                                <strong {...edit("visionBox2_title")} />
                                <Ul {...ulEdit("visionBox2_cotnent_new")} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="con02">
                <div className="w1200">
                    <div className="top_txt">
                        <h4 {...edit("purpose_title")} />
                        <p {...edit("purpose_desc")} />
                    </div>
                    <ul className="infolist">
                        <li className="infolist__01">
                            <div className="pack">
                                <p {...edit("purpose1_ct")} />
                                <strong {...edit("purpose1_title")} />
                                <span {...edit("purpose1_bottom")} />
                            </div>
                        </li>
                        <li className="infolist__02">
                            <div className="pack">
                                <p {...edit("purpose2_ct")} />
                                <strong {...edit("purpose2_title")} />
                                <span {...edit("purpose2_bottom")} />
                            </div>
                        </li>
                        <li className="infolist__03">
                            <div className="pack">
                                <p {...edit("purpose3_ct")} />
                                <strong {...edit("purpose3_title")} />
                                <span {...edit("purpose3_bottom")} />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w100 con03 con_block">
                <div>
                    <h4 {...edit("value_title")} />
                    <p {...edit("value_desc")} />
                    <Bg className="bg01" {...imgKit("value_bg01")} />
                    <Bg className="bg02" {...imgKit("value_bg02")} />
                    <Bg className="bg03" {...imgKit("value_bg03")} />
                    <Bg className="bg04" {...imgKit("value_bg04")} />
                    <Bg className="bg05" {...imgKit("value_bg05")} />
                    <Bg className="bg06" {...imgKit("value_bg06")} />
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
                                    <span {...edit("value1_en")} />
                                </h4>
                                <div
                                    className="txt"
                                    title="value1_desc"
                                    {...edit("value1_desc")}
                                />
                            </li>
                            <li className="n02">
                                <h4>
                                    <strong {...edit("value3_title")} />
                                    <span {...edit("value3_en")} />
                                </h4>
                                <div className="txt" {...edit("value3_desc")} />
                            </li>
                            <li className="n03">
                                <h4>
                                    <strong {...edit("value2_title")} />
                                    <span {...edit("value2_en")} />
                                </h4>
                                <div className="txt" {...edit("value2_desc")} />
                            </li>
                        </ul>
                    </div>
                    <div className="main__wave_box">
                        <div className="main__wave2"></div>
                    </div>
                </div>
                <div className="infoimg">
                    <div className="w1200">
                        <div className="li01">
                            <span {...edit("info_img_title")} />
                        </div>
                        <div className="li03">
                            <div className="dong01">
                                <strong>01</strong>
                                <span {...edit("info_img1_title")} />
                                <i {...edit("info_img1_desc")} />
                            </div>
                            <div className="dong02">
                                <strong>02</strong>
                                <span {...edit("info_img2_title")} />
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
                            <img
                                src={"/img/svg/siteinfo_svg04.svg"}
                                alt="화살표"
                            />
                        </div>
                        <div className="li05" {...edit("info_img5_title")} />
                    </div>
                    {/* <div className="wave_animation_wrap">
                    <div className="figure_wrap">
                        <div className="wave1 item"><span style={{ backgroundImage: 'url(/img/foot_wave01.png)' }}></span></div>
                        <div className="wave2 item"><span style={{ backgroundImage: 'url(/img/foot_wave02.png)' }}></span></div>
                        <div className="wave3 item" > <span style={{ backgroundImage: 'url(/img/foot_wave03.png)' }}></span></div>
                    </div>
                </div> */}
                </div>
            </div>
            <div className="w100 con05 con_block" style={bg("historybg")}>
                <Upload onUpload={imgEdit("historybg")} />
                <div className="w1200">
                    <h4 {...edit("history_title")} />
                    <div className="in_txt">
                        {page.history.kr.map((val, index) => (
                            <div>
                                <div
                                    key={"history" + index}
                                    className="year y2020"
                                >
                                    <strong
                                        {...edit("history", index, "title")}
                                    />
                                    <Ul
                                        {...objectArrayUlEdit(
                                            "history",
                                            index,
                                            "content"
                                        )}
                                    />
                                    <CloseIcon
                                        onClick={() => {
                                            removeArray("history", index);
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                        {editMode && (
                            <button
                                className="btn"
                                onClick={() => {
                                    unShiftArray("history", {
                                        title: "2000",
                                        content: [""],
                                    });
                                }}
                            >
                                추가하기
                            </button>
                        )}
                    </div>
                </div>
                <div className="main__wave_box">
                    <div className="main__wave3"></div>
                </div>
            </div>
            <div className="w100 con06 con_block">
                <div className="w1200">
                    <h4>
                        <strong {...edit("pink_supporter_title")} />
                        <span {...edit("pink_supporter_sub")} />
                    </h4>
                    <ul>
                        {partners.kr.map((partner: any, index: number) => {
                            const { alt, img, link } = partner;
                            return (
                                <li key={index + "partner"}>
                                    <a>
                                        <Img
                                            {...arrayImgKit(
                                                index,
                                                "partners",
                                                partner
                                            )}
                                        />
                                        {editMode && (
                                            <span
                                                className="del"
                                                onClick={() => {
                                                    removeArray(
                                                        "partners",
                                                        index
                                                    );
                                                }}
                                            >
                                                <i className="flaticon-multiply"></i>
                                            </span>
                                        )}
                                    </a>
                                </li>
                            );
                        })}
                        {editMode && (
                            <li
                                className="add"
                                onClick={() => {
                                    addArray("partners", {
                                        alt: "",
                                        img: "/img/ptn_01.jpg",
                                        link: "샘플",
                                    });
                                }}
                            >
                                <i className="flaticon-add"></i>추가
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <Bg
                {...imgKit("con07_bg")}
                className="siteInfo__bottom w100 con07 con_block onepick2"
            >
                <div className="w1200 ">
                    <h4>
                        <strong {...edit("con07_title")} />
                        <p {...edit("con07_txt")} />
                    </h4>
                    <span className="link">
                        <a
                            href="mailto:pinkroader@gmail.com"
                            {...edit("con07_link")}
                        ></a>
                    </span>
                </div>
                <div className="ovj"></div>
                <div className="bg" />
            </Bg>
            {open && (
                <div
                    style={{
                        opacity: 0,
                        position: "fixed",
                        width: "1px",
                        height: "1px",
                        top: 0,
                        left: 0,
                        overflow: "hidden",
                    }}
                >
                    {/* <input onChange={changePartner} value={addInfo.alt} /> */}
                    <Upload
                        onUpload={(url) => {
                            setAddInfo({
                                ...addInfo,
                                img: url,
                            });
                        }}
                    />
                    <input />
                    <input onChange={() => {}} value={addInfo.link} />
                </div>
            )}

            {/* popup은 언제나 class fade와 함께 있어야 한다. */}
            {/* <div className="popup_bg_mini" style={{ display: 'none' }}>
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
        <div className="fade"></div> */}
        </div>
    );
};

export default StieInfo;
