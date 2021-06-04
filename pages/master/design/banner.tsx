import { MasterLayout } from "layout/MasterLayout";
import CalendarIcon from "components/common/icon/CalendarIcon";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useHomepage, useHomepageUpdate } from "../../../hook/useHomepage";
import { useUpload } from "../../../hook/useUpload";
import { Fhomepage } from "../../../types/api";
import { omits } from "../../../utils/omit";
import { cloneObject } from "../../../utils/clone";
import { ALLOW_ADMINS } from "../../../types/const";
import { auth } from "../../../utils/with";
import { useUpdate } from "../../../hook/useUpdater";
import { useCopy } from "../../../hook/useUpdate";
import { DesignTopNav } from "../../../components/topNav/MasterTopNav";
import { CloseIcon } from "../../../components/common/icon/CloseIcon";
import { EmpyFileInput } from "../../../utils/emptyFileInput";

interface IProp {}

export const MsDesignA: React.FC<IProp> = () => {
    const { signleUpload } = useUpload();
    const { data: defaultHomepage } = useHomepage();
    const [homeapgeUpdate] = useHomepageUpdate({
        onCompleted: ({ HomepageUpdate }) => {
            if (HomepageUpdate.ok) alert("업데이트 완료");
        },
    });
    const [homepage, setHomepage] = useCopy(defaultHomepage);

    const handleSave = () => {
        homeapgeUpdate({
            variables: {
                params: {
                    ...omits(homepage),
                },
            },
        });
    };

    if (!homepage) return null;
    return (
        <MasterLayout>
            <div className="in ">
                <h4>디자인 설정</h4>
                <div className="in_content">
                    <DesignTopNav />
                    {/* <div className="tab-nav">
                    <ul>
                        <li><Link href="/master/design"><a>기본설정</a></Link></li>
                        <li className="on"><Link href="/master/design/banner"><a>배너관리</a></Link></li>
                        <li><Link href="/master/design/popup"><a>팝업관리</a></Link></li>
                        <li><Link href="/master/design/display"><a>노출상품관리</a></Link></li>
                    </ul>
                </div> */}
                    <div className="con design banner_setting">
                        <div className="fin">
                            <div className="float_left"></div>
                            <div className="float_right">
                                <button
                                    onClick={handleSave}
                                    type="submit"
                                    className="btn medium"
                                >
                                    저장하기
                                </button>
                            </div>
                        </div>
                        <div className="content">
                            <div className="block_box">
                                <div className="design_table">
                                    <h5>배너 기본설정</h5>
                                    <div className="tbody">
                                        <div className="t01">
                                            <div className="title">
                                                배너A - 사용여부
                                            </div>
                                        </div>
                                        <div className="t02">
                                            <div className="txt">
                                                <div className="switch">
                                                    <input
                                                        onChange={() => {
                                                            homepage.bannerA.use =
                                                                !homepage
                                                                    .bannerA
                                                                    ?.use;
                                                            setHomepage({
                                                                ...homepage,
                                                            });
                                                        }}
                                                        checked={
                                                            !!homepage.bannerA
                                                                ?.use
                                                        }
                                                        className="tgl tgl-skewed"
                                                        id="cb3"
                                                        type="checkbox"
                                                    />
                                                    <label
                                                        className="tgl-btn"
                                                        data-tg-off="OFF"
                                                        data-tg-on="ON"
                                                        htmlFor="cb3"
                                                    ></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tbody">
                                        <div className="t01">
                                            <div className="title">
                                                배너A - 이미지
                                            </div>
                                        </div>
                                        <div className="t02">
                                            <div className="txt">
                                                {homepage.bannerA && (
                                                    <p
                                                        style={{
                                                            lineHeight: 1.5,
                                                        }}
                                                    >
                                                        {
                                                            homepage.bannerA.img
                                                                ?.name
                                                        }
                                                    </p>
                                                )}
                                                <input
                                                    id="BannerAImgInput"
                                                    onChange={(e) => {
                                                        if (
                                                            !e.currentTarget
                                                                .files
                                                        )
                                                            return;
                                                        signleUpload(
                                                            e.currentTarget
                                                                .files,
                                                            (url, data) => {
                                                                homepage.bannerA.img =
                                                                    data;
                                                                setHomepage({
                                                                    ...homepage,
                                                                });
                                                            }
                                                        );
                                                    }}
                                                    className="w50"
                                                    type="file"
                                                />
                                                {homepage.bannerA.img && (
                                                    <CloseIcon
                                                        className="fileCloseBtn"
                                                        onClick={() => {
                                                            homepage.bannerA.img =
                                                                undefined;
                                                            setHomepage({
                                                                ...homepage,
                                                            });
                                                            EmpyFileInput(
                                                                "BannerAImgInput"
                                                            );
                                                        }}
                                                    />
                                                )}
                                                <p className="infotxt_gray">
                                                    images size : 500px * 134px
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tbody">
                                        <div className="t01">
                                            <div className="title">
                                                배너A - 연결주소
                                            </div>
                                        </div>
                                        <div className="t02">
                                            <div className="txt">
                                                <input
                                                    onChange={(e) => {
                                                        homepage.bannerA.link =
                                                            e.currentTarget.value;
                                                        setHomepage({
                                                            ...homepage,
                                                        });
                                                    }}
                                                    value={
                                                        homepage.bannerA.link
                                                    }
                                                    className="w50"
                                                    placeholder="https://"
                                                    type="text"
                                                />
                                                <select
                                                    value={
                                                        homepage.bannerA.target
                                                    }
                                                    onChange={(e) => {
                                                        homepage.bannerA.target =
                                                            e.currentTarget.value;
                                                        setHomepage({
                                                            ...homepage,
                                                        });
                                                    }}
                                                    className="w30 ml5"
                                                >
                                                    <option value="_blank">
                                                        새창
                                                    </option>
                                                    <option value="">
                                                        현재창
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tbody">
                                        <div className="t01">
                                            <div className="title">
                                                배너B - 사용여부
                                            </div>
                                        </div>
                                        <div className="t02">
                                            <div className="txt">
                                                <div className="switch">
                                                    <input
                                                        onChange={() => {
                                                            homepage.bannerB.use =
                                                                !homepage
                                                                    .bannerB
                                                                    ?.use;
                                                            setHomepage({
                                                                ...homepage,
                                                            });
                                                        }}
                                                        checked={
                                                            !!homepage.bannerB
                                                                ?.use
                                                        }
                                                        className="tgl tgl-skewed"
                                                        id="cb4"
                                                        type="checkbox"
                                                    />
                                                    <label
                                                        className="tgl-btn"
                                                        data-tg-off="OFF"
                                                        data-tg-on="ON"
                                                        htmlFor="cb4"
                                                    ></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tbody">
                                        <div className="t01">
                                            <div className="title">
                                                배너B - 이미지
                                            </div>
                                        </div>
                                        <div className="t02">
                                            <div className="txt">
                                                {homepage.bannerB?.img
                                                    ?.name && (
                                                    <p
                                                        style={{
                                                            lineHeight: 1.5,
                                                        }}
                                                    >
                                                        <span className="mr5">
                                                            {
                                                                homepage.bannerB
                                                                    .img.name
                                                            }
                                                        </span>
                                                        <CloseIcon
                                                            className="fileCloseBtn"
                                                            onClick={() => {
                                                                homepage.bannerB.img =
                                                                    undefined;
                                                                setHomepage({
                                                                    ...homepage,
                                                                });
                                                                EmpyFileInput(
                                                                    "BannerBImgInput"
                                                                );
                                                            }}
                                                        />
                                                    </p>
                                                )}
                                                <input
                                                    id="BannerBImgInput"
                                                    onChange={(e) => {
                                                        if (
                                                            !e.currentTarget
                                                                .files
                                                        )
                                                            return;
                                                        signleUpload(
                                                            e.currentTarget
                                                                .files,
                                                            (url, data) => {
                                                                homepage.bannerB.img =
                                                                    data;
                                                                setHomepage({
                                                                    ...homepage,
                                                                });
                                                            }
                                                        );
                                                    }}
                                                    className="w50"
                                                    type="file"
                                                />
                                                <p className="infotxt_gray">
                                                    images size : 500px * 134px
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tbody">
                                        <div className="t01">
                                            <div className="title">
                                                배너B - 연결주소
                                            </div>
                                        </div>
                                        <div className="t02">
                                            <div className="txt">
                                                <input
                                                    onChange={(e) => {
                                                        homepage.bannerB.link =
                                                            e.currentTarget.value;
                                                        setHomepage({
                                                            ...homepage,
                                                        });
                                                    }}
                                                    value={
                                                        homepage.bannerB.link
                                                    }
                                                    className="w50"
                                                    placeholder="https://"
                                                    type="text"
                                                />
                                                <select
                                                    value={
                                                        homepage.bannerB.target
                                                    }
                                                    onChange={(e) => {
                                                        homepage.bannerB.target =
                                                            e.currentTarget.value;
                                                        setHomepage({
                                                            ...homepage,
                                                        });
                                                    }}
                                                    className="w30 ml5"
                                                >
                                                    <option value="_blank">
                                                        새창
                                                    </option>
                                                    <option value="">
                                                        현재창
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fin">
                            <div className="float_left"></div>
                            <div className="float_right">
                                <button
                                    onClick={handleSave}
                                    type="submit"
                                    className="btn medium"
                                >
                                    저장하기
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="fade"></div>
                </div>
            </div>
        </MasterLayout>
    );
};

export default auth(ALLOW_ADMINS)(MsDesignA);
