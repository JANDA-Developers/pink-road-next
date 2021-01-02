import { Meta } from 'components/common/meta/Meta';
import SubTopNav from 'layout/components/SubTop';
import pageInfoDefault from 'info/guideMain.json';
import Link from 'next/link';
import React, { useContext } from 'react';
import { GoodsListAPI } from '../../components/common/GoodsListAPI';
import { EditContext } from '../_app';
import { IEditPage } from '../../utils/with';
import { useProductList } from 'hook/useProduct';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { IGetProps } from 'pages';
import { getStaticPageInfo } from 'utils/page';
import { Upload } from 'components/common/Upload';

interface IProp { }

export const GuideMain: React.FC<IProp> = () => {
    const { imgEdit, edit, bg } = useContext<IEditPage<typeof pageInfoDefault>>(EditContext as any);

    // const { items } = useProductList({ initialPageIndex: 1, initialViewCount: 8 });
    // const { imgEdit, edit, bg } = useContext<IEditPage<typeof pageInfoDefault>>(EditContext as any);
    // const router = useRouter()
    return <div >
        <Meta />
        {/* <SubTopNav title="temp" desc="temp" >
            <li className="homedeps1">
                <Link href="/tour/main?exp=true">
                    <a>It's가이드</a>
                </Link>
            </li>
        </SubTopNav> */}

        <div className="guide_box">
            <div className="w100">

                <div className="guide_top_bn w100" style={{ ...bg("guideMain_bg") }}>
                    <Upload onUpload={imgEdit("guideMain_bg")} />
                    <div className="w1200">
                        <div className="txt">
                            <h3 {...edit("guideMain_top_title")} />
                            <span {...edit("guideMain_top_subtitle")} />
                            <ul className="btn_list">
                                <li><Link href="/guide"><a {...edit("guideMain_top_btn01")} /></Link></li>{ /* 여행가이드 해시태그를 가진 가이드만 보여주기  */}
                                <li><Link href="/guide"><a {...edit("guideMain_top_btn02")} /></Link></li>{ /* 비지니스통역가이드 해시태그를 가진 가이드만 보여주기  */}
                                <li><Link href="/guide"><a {...edit("guideMain_top_btn03")} /></Link></li>{ /* 의료관광가이드 해시태그를 가진 가이드만 보여주기  */}
                                <li><Link href="/guide"><a {...edit("guideMain_top_btn04")} /></Link></li>{ /* 전체가이드 보기  */}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="guide_content w1200">
                    <div className="con01">
                        <div className="top_txt">
                            <h2 {...edit("guideMain01_subtitle")} />
                            <strong {...edit("guideMain01_title")} />
                        </div>
                        <ul className="pr_list">
                            <li style={{ ...bg("guideMain01_photo01") }}>
                                <Upload onUpload={imgEdit("guideMain01_photo01")} />
                            프로필사진
                            </li>
                            <li style={{ ...bg("guideMain01_photo02") }}>
                                <Upload onUpload={imgEdit("guideMain01_photo02")} />
                            프로필사진
                            </li>
                            <li style={{ ...bg("guideMain01_photo03") }}>
                                <Upload onUpload={imgEdit("guideMain01_photo03")} />
                            프로필사진
                            </li>
                            <li style={{ ...bg("guideMain01_photo04") }}>
                                <Upload onUpload={imgEdit("guideMain01_photo04")} />
                            프로필사진
                            </li>
                            <li style={{ ...bg("guideMain01_photo05") }}>
                                <Upload onUpload={imgEdit("guideMain01_photo05")} />
                            프로필사진
                            </li>
                            <li style={{ ...bg("guideMain01_photo06") }}>
                                <Upload onUpload={imgEdit("guideMain01_photo06")} />
                            프로필사진
                            </li>
                            <li style={{ ...bg("guideMain01_photo07") }}>
                                <Upload onUpload={imgEdit("guideMain01_photo07")} />
                            프로필사진
                            </li>
                            <li className="plus"><a href="/">+</a></li>
                        </ul>
                    </div>
                    <div className="con02">
                        <div className="deal_list">
                            <div className="alignment">
                                <div className="left_div"><h2>#오늘어디가지?</h2></div>
                                <div className="right_div">
                                    <span className="goto_page"><a href="/">바로가기<i className="flaticon-menu-1"></i></a></span>
                                </div>
                            </div>
                            <GoodsListAPI />
                        </div>
                        <div className="deal_list">
                            <div className="alignment">
                                <div className="left_div"><h2>DM추천</h2></div>
                                <div className="right_div">
                                    <span className="goto_page"><a href="../sub/tour_list.html">바로가기<i className="flaticon-menu-1"></i></a></span>
                                </div>
                            </div>
                            <GoodsListAPI />
                        </div>
                        <div className="deal_list">
                            <div className="alignment">
                                <div className="left_div"><h2>외국인가이드</h2></div>
                                <div className="right_div">
                                    <span className="goto_page"><a href="/">바로가기<i className="flaticon-menu-1"></i></a></span>
                                </div>
                            </div>
                            <GoodsListAPI />
                        </div>
                    </div>

                </div>

                <div className="main_con_box5">
                    <div className="w1200">
                        <div className="txt">
                            <div className="alignment">
                                <div className="left_div">
                                    <h2>
                                        GUIDE<span {...edit("guideMain05_subtitle")} />
                                    </h2>
                                </div>
                                <div className="right_div">
                                    <span className="goto_page"><a href="/">바로가기<i className="flaticon-menu-1"></i></a></span>
                                </div>
                            </div>
                        </div>
                        <div className="man_list">
                            <a className="left_mov"><i className="jandaicon-arr2-left"></i></a>
                            <div className="man_box">
                                <ul>
                                    <li className="on">
                                        <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</span>
                                        <div className="name"><i>G</i>김행자</div>
                                    </li>
                                    <li>
                                        <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</span>
                                        <div className="name"><i>G</i>김행자</div>
                                    </li>
                                    <li>
                                        <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</span>
                                        <div className="name"><i>G</i>김행자</div>
                                    </li>
                                    <li>
                                        <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</span>
                                        <div className="name"><i>G</i>김행자</div>
                                    </li>
                                    <li>
                                        <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</span>
                                        <div className="name"><i>G</i>김행자</div>
                                    </li>
                                    <li>
                                        <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</span>
                                        <div className="name"><i>G</i>김행자</div>
                                    </li>
                                    <li>
                                        <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</span>
                                        <div className="name"><i>G</i>김행자</div>
                                    </li>
                                    <li>
                                        <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</span>
                                        <div className="name"><i>G</i>김행자</div>
                                    </li>
                                </ul>
                            </div>
                            <a className="right_mov"><i className="jandaicon-arr2-right"></i></a>
                        </div>
                        <div className="goods_list">
                            <GoodsListAPI />
                        </div>

                    </div>

                </div>


                <div className="main_con_box7">
                    <div className="box01">
                        <div className="w1200">
                            <span className="sidetxt" {...edit("guideMain07_subtitle")} />
                            <h2 {...edit("guideMain07_title")} />
                            <div className="link"><a href="/member/join" {...edit("guideMain07_link")} /></div>
                        </div>
                        <div className="ovj" {...edit("guideMain07_ovj")} />
                    </div>
                </div>


            </div>
        </div>
    </div >;
};

export const getStaticProps: GetStaticProps<IGetProps> = getStaticPageInfo("guidemain", pageInfoDefault);
export default GuideMain;