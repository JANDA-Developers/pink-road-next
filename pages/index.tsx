import "isomorphic-unfetch";
import "core-js";
import React, { useContext, useEffect, useRef, useState } from "react";
import defaultPageInfo from "info/main.json";
import { Meta } from "components/common/meta/Meta";
import { Upload } from "components/common/Upload";
import Link from "next/link";
import { useProductList } from "hook/useProduct";
import { useRouter } from "next/router";
import { getStaticPageInfo, Ipage } from "../utils/page";
import Slider from "react-slick";
import { usePageEdit } from "../hook/usePageEdit";
import { Bg } from "../components/Img/img";
import { useGroupFind } from "../hook/useGroup";
import { AppContext } from "./_app";
import { BG } from "../types/const";
import { PageEditor } from "../components/common/PageEditer";
import { usePopups } from "../hook/usePopups";
import { Popup } from "../components/popup/Popup";
import { getResized } from "../utils/pageEdit";

export const getStaticProps = getStaticPageInfo("main");
export const Main: React.FC<Ipage> = (pageInfo) => {
    const { item } = useGroupFind("Main");
    const { homepage } = useContext(AppContext);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<any>();
    const popupsHook = usePopups(homepage?.modal || []);

    const { items, setFilter, filter } = useProductList(
        {
            initialPageIndex: 1,
            initialViewCount: 8,
            initialFilter: {
                _id_in: item?.members,
            },
        },
        { skip: !item }
    );

    const pageTools = usePageEdit(pageInfo, defaultPageInfo);

    const {
        imgKit,
        edit,
        get,
        editMode,
        removeArray,
        addArray,
        editArray,
    } = pageTools;
    const router = useRouter();

    const toProductBoard = (id: string) => {
        router.push(id);
    };

    const sortedItems = item
        ? items
              .slice()
              .sort(
                  (a, b) =>
                      item.members.indexOf(a._id) - item.members.indexOf(b._id)
              )
        : [];

    useEffect(() => {
        if (item) {
            filter._id_in = item.members;
            setFilter({
                ...filter,
            });
        }
    }, [item?.members.length]);

    useEffect(() => {
        if (editMode) {
            const slide = sliderRef?.current;
            if (slide) {
                setTimeout(() => {
                    slide.slickPause();
                });
            }
        }
    });

    const mainSliderImgs: string[] = get("main_slideImgs") || [];
    return (
        <div className="body main" id="main">
            {popupsHook.popups.map((pop, index) => (
                <Popup {...popupsHook} popup={pop} key={pop._id} />
            ))}
            <Meta
                title="Pinkroader"
                description="사람과 시간이 공존하는 여행플랫폼 핑크로더입니다."
            />
            <PageEditor pageTools={pageTools} />
            <div className="main_con_box1 Slider_box">
                <Upload
                    onUpload={(url) => {
                        addArray("main_slideImgs", url);
                        setCurrentSlide(mainSliderImgs.length);
                    }}
                    text="이미지 추가"
                />
                <Slider
                    afterChange={(currentSlide) => {
                        const slide = sliderRef?.current;
                        if (slide) {
                            if (currentSlide === 0) {
                                setTimeout(() => {
                                    slide.slickPause();
                                });
                            } else if (!editMode) {
                                setTimeout(() => {
                                    slide.slickPlay();
                                });
                            }
                        }
                    }}
                    accessibility={false}
                    ref={sliderRef}
                    key={"slider"}
                    autoplay={!editMode && currentSlide !== 0}
                    prevArrow={
                        <div className="rev">
                            <img src="/img/svg/arr_left_w.svg" alt="이전" />
                        </div>
                    }
                    nextArrow={
                        <div className="next">
                            <img src="/img/svg/arr_right_w.svg" alt="다음" />
                        </div>
                    }
                    arrows={true}
                    dots={true}
                    infinite={true}
                    className="mainSlider"
                >
                    <div>
                        <Bg
                            className="main_top_images"
                            {...imgKit("m_01_mainBg1")}
                        >
                            <div className="w1200">
                                <strong {...edit("m_01_title1")} />
                                <span
                                    className="main_top_images__subTitle"
                                    {...edit("m_01_subtitle1")}
                                ></span>
                                <div className="btn_list onepick2">
                                    <Link href="/guide">
                                        <a
                                            className="link"
                                            {...edit("m_01_mainLink1_1")}
                                        />
                                    </Link>
                                    <Link href="/tour">
                                        <a
                                            className="link"
                                            {...edit("m_01_mainLink1_2")}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </Bg>
                    </div>
                    <div>
                        <Bg
                            className="main_top_images img2"
                            {...imgKit("m_01_mainBg2")}
                        >
                            <div className="w1200">
                                <strong {...edit("m_01_title2")} />
                                <span
                                    className="main_top_images__subTitle"
                                    {...edit("m_01_subtitle2")}
                                ></span>
                                <div className="btn_list onepick">
                                    <a
                                        target="_blank"
                                        href={
                                            homepage?.compnanyIntoduceFile
                                                ?.uri ||
                                            "/pinkroader_company_introduction_letter.pdf"
                                        }
                                        className="link"
                                        {...edit("m_01_mainLink2_1")}
                                    />
                                </div>
                            </div>
                        </Bg>
                    </div>
                    {mainSliderImgs.map((slideImg, i) => (
                        <div key={"slide" + i}>
                            <Bg
                                className="main_top_images main_top_images--added"
                                editMode={editMode}
                                upload={(src) => {
                                    editArray("main_slideImgs", i, src);
                                }}
                                bg={BG(getResized(slideImg))}
                            >
                                <div className="w1200"></div>
                                {/* 삭제버튼 */}
                                {editMode && (
                                    <div
                                        className="main_top_images__delete"
                                        onClick={() => {
                                            removeArray("main_slideImgs", i);
                                        }}
                                    >
                                        삭제하기 -
                                    </div>
                                )}
                            </Bg>
                        </div>
                    ))}
                </Slider>
                {editMode && (
                    <div
                        id="slider__add"
                        className="add "
                        onClick={() => {
                            addArray("main_slideImgs", "");
                            alert("빈 슬라이드가 화면에 추가 되었습니다.");
                        }}
                    >
                        <i className="flaticon-add"></i>슬라이더 추가
                    </div>
                )}
            </div>

            <div className="main_con_box2">
                <div className="w1200">
                    <div className="top_txt">
                        <h2 {...edit("purposeTitle")} />
                        <span {...edit("purposeSubTitle")}></span>
                    </div>
                    <ul className="infolist">
                        <li className="infolist__01">
                            <div className="pack">
                                <p {...edit("purposeCircle1_ct")} />
                                <strong>
                                    <span {...edit("purposeCircle1")} />
                                </strong>
                                <span
                                    className="infolist__en"
                                    {...edit("purposeCircle1_en")}
                                />
                            </div>
                        </li>
                        <li className="infolist__02">
                            <div className="pack">
                                <p {...edit("purposeCircle2_ct")} />
                                <strong>
                                    <span {...edit("purposeCircle2")} />{" "}
                                </strong>
                                <span
                                    className="infolist__en"
                                    {...edit("purposeCircle2_en")}
                                />
                            </div>
                        </li>
                        <li className="infolist__03">
                            <div className="pack">
                                <p {...edit("purposeCircle3_ct")} />
                                <strong>
                                    <span {...edit("purposeCircle3")} />
                                </strong>
                                <span
                                    className="infolist__en"
                                    {...edit("purposeCircle3_en")}
                                />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="main__wave_box">
                    <div className="main__wave4"></div>
                </div>
            </div>

            <div className="main_con_box6">
                <ul className="mainbn">
                    <li className="mainbn__01"></li>
                    <li className="mainbn__02"></li>
                    <li className="mainbn__03"></li>
                    <li className="mainbn__04"></li>
                    <li className="mainbn__05"></li>
                </ul>
            </div>

            <div className="main_con_box3">
                <div>
                    <div className="top_txt">
                        <h2 {...edit("busi_area_title")} />
                    </div>
                    <ul className="busiAreaList">
                        <Bg
                            tag="li"
                            className="img01 busiAreaList__li"
                            {...imgKit("busi_area1_bg", 1000)}
                        >
                            <div className="bgtxt">
                                <strong {...edit("busi_area1_title")} />
                                <span
                                    style={{ position: "absolute" }}
                                    {...edit("busi_area1_desc")}
                                />
                            </div>
                        </Bg>
                        <Bg
                            tag="li"
                            className="img02 busiAreaList__li"
                            {...imgKit("busi_area2_bg", 1000)}
                        >
                            <div className="bgtxt">
                                <strong {...edit("busi_area2_title")} />
                                <span
                                    style={{ position: "absolute" }}
                                    {...edit("busi_area2_desc")}
                                />
                            </div>
                        </Bg>
                        <Bg
                            tag="li"
                            className="img03 busiAreaList__li"
                            {...imgKit("busi_area3_bg", 1000)}
                        >
                            <div className="bgtxt">
                                <strong {...edit("busi_area3_title")} />
                                <span
                                    style={{ position: "absolute" }}
                                    {...edit("busi_area3_desc")}
                                />
                            </div>
                        </Bg>
                        <Bg
                            tag="li"
                            className="img04 busiAreaList__li"
                            {...imgKit("busi_area4_bg", 1000)}
                        >
                            <div className="bgtxt">
                                <strong {...edit("busi_area4_title")} />
                                <span
                                    style={{ position: "absolute" }}
                                    {...edit("busi_area4_desc")}
                                />
                            </div>
                        </Bg>
                    </ul>
                </div>
            </div>

            <div className="main_con_box4">
                <div className="w100">
                    <div className="photo_box">
                        <ul className="photo_ul line3 main_photo_ul">
                            <li className="top_txt">
                                <h2 {...edit("valuable_exp")} />
                                <span
                                    className="txt"
                                    {...edit("valuable_exp_sub")}
                                />
                                <div className="btn_list">
                                    <span>
                                        <Link href="/tour">
                                            <a>공정여행</a>
                                        </Link>
                                    </span>
                                    <span>
                                        <Link href="/tour?exp=true">
                                            <a>더많은체험</a>
                                        </Link>
                                    </span>
                                </div>
                                <i>
                                    <svg>
                                        <polygon points="69.22 12.71 0 12.71 0 10.71 64.33 10.71 54.87 1.43 56.27 0 69.22 12.71" />
                                    </svg>
                                </i>
                            </li>
                            {sortedItems.map((item) => (
                                <Link
                                    key={item._id}
                                    href={`/tour/view/${item._id}`}
                                >
                                    <li className="list_in">
                                        <div
                                            className="img"
                                            onClick={() => {
                                                toProductBoard(item._id);
                                            }}
                                            style={{
                                                backgroundImage: `url(${item?.images?.[0]?.uri})`,
                                            }}
                                        ></div>
                                        <div className="box">
                                            <div className="category">
                                                <span>
                                                    {item.category?.label}
                                                </span>
                                            </div>
                                            <div className="title">
                                                {item.title}
                                            </div>
                                            <div className="subTitle">
                                                {item.subTitle}
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="main__wave_box">
                    <div className="main__wave2"></div>
                </div>
            </div>

            <div className="main_con_box5">
                <div className="txt w1200">
                    <h2 {...edit("bottom_title")} />
                    <p>
                        <span {...edit("bottom_desc")} />
                    </p>
                    {/* <Bg className="ovj" {...imgKit("bottom_ovj")} /> */}
                </div>
                {/* <ul className="photo__listBottom">
        <Bg tag="li" {...imgKit("busi_area1_bg")} ></Bg>
        <Bg tag="li" {...imgKit("busi_area1_bg")} ></Bg>
        <Bg tag="li" {...imgKit("busi_area1_bg")} ></Bg>
        <Bg tag="li" {...imgKit("busi_area1_bg")} ></Bg>
      </ul> */}
                {/* <div
        className="main_bg_img"
        style={{ ...bg("bottom_bg_img") }}
      />
      <Upload onUpload={imgEdit("bottom_bg_img")} /> */}
            </div>
            <div>
                <div className="col-md-6">
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Main;
