import { Meta } from 'components/common/meta/Meta';
import SubTopNav from 'layout/components/SubTop';
import Link from 'next/link';
import React, { useContext } from 'react';
import { InferGetStaticPropsType } from 'next';
import { AppContext } from '../_app';
import { getStaticPageInfo, Ipage } from '../../utils/page';
import { checkIsExp } from '../../utils/product';
import { TourMainBoard } from '../../components/tour/TourMainBoard';
import pageInfoDefault from "info/tourMain.json";
import { usePageEdit } from '../../hook/usePageEdit';
import { useHomepage } from '../../hook/useHomepage';
import { useGroupList } from '../../hook/useGroup';
import isEmpty from '../../utils/isEmpty';
import { GoodsListAPI } from '../../components/common/GoodsListAPI';
import { PageEditor } from '../../components/common/PageEditer';
import { Bg, Img } from '../../components/Img/Img';
import { A } from '../../components/A/A';
import { LinkRoundIcon } from '../../components/common/icon/LinkIcon';
import { GoodsListTable } from '../../components/common/GoodListTable';
import { useRouter } from 'next/router';
import { openListFilter } from '../../hook/useProduct';

interface IProp extends InferGetStaticPropsType<typeof getStaticProps> { }

export const getStaticProps = getStaticPageInfo("tourMain");
export const TourMain: React.FC<Ipage> = (pageInfo) => {
    const isExp = checkIsExp();
    const { data } = useHomepage();
    const pageTools = usePageEdit(pageInfo, pageInfoDefault);
    const { categoriesMap, isSeller, groupsMap } = useContext(AppContext);
    const cats = categoriesMap?.TOUR || [];
    const { editMode, page, linkEdit, imgKit, edit, get } = pageTools;
    const router = useRouter();

    const subTopInfo = {
        imgKey: isExp ? "exp_subTop_img" : "subTop_img",
        titleKey: isExp ? "exp_subTop_title" : "subTop_title",
        descKey: isExp ? "exp_subTop_desc" : "subTop_desc"
    }

    const handleLink = (key: keyof typeof page) => () => {
        if (!editMode)
            // @ts-ignore
            router.push(get(key))
    }

    if (!data) return null;
    return <div >
        <Meta />
        <PageEditor pageTools={pageTools} />
        <SubTopNav pageTools={pageTools} >
            <li className="homedeps1">
                {isExp ?
                    <Link href="/tour">
                        <a>It's투어</a>
                    </Link> :
                    <Link href="/tour?exp=true">
                        <a>It's투어</a>
                    </Link>
                }
            </li>
        </SubTopNav>
        <div className="in ">
            <div className="itstour_box">
                <div className="w1200">
                    <div className="theme_deal">
                        <ul>
                            <Bg onClick={handleLink("m_06_link01_bgimg_link")} {...imgKit("m_06_link01_bgimg")} tag="li" className="top_01">
                                <A className="m_06_link__linker" {...linkEdit("m_06_link01_bgimg_link")} editComponent={<LinkRoundIcon />} />
                                <div className="theme_deal__textBox">
                                    <span className="first" {...edit("m_06_link01_text")} /><br />
                                    <span className="tag" {...edit("m_06_link01_tage")} />
                                </div>
                            </Bg>
                            <Bg onClick={handleLink("m_06_link02_bgimg_link")} {...imgKit("m_06_link02_bgimg")} tag="li" className="top_02">
                                <A className="m_06_link__linker" {...linkEdit("m_06_link02_bgimg_link")} editComponent={<LinkRoundIcon />} />
                                <div className="theme_deal__textBox">
                                    <span className="title" {...edit("m_06_link02_text")} />
                                </div>
                            </Bg>
                            <Bg onClick={handleLink("m_06_link03_bgimg_link")} {...imgKit("m_06_link03_bgimg")} tag="li" className="top_03">
                                <A className="m_06_link__linker" {...linkEdit("m_06_link03_bgimg_link")} editComponent={<LinkRoundIcon />} />
                                <div className="theme_deal__textBox">
                                    <span className="title" {...edit("m_06_link03_text")} />
                                </div>
                            </Bg>
                            <Bg onClick={handleLink("m_06_link04_bgimg_link")} {...imgKit("m_06_link04_bgimg")} tag="li" className="top_04">
                                <A className="m_06_link__linker" {...linkEdit("m_06_link04_bgimg_link")} editComponent={<LinkRoundIcon />} />
                                <div className="theme_deal__textBox">
                                    <span className="title" {...edit("m_06_link03_text")} />
                                </div>
                            </Bg>
                            <Bg onClick={handleLink("m_06_link05_bgimg_link")} {...imgKit("m_06_link05_bgimg")} tag="li" className="top_05">
                                <A className="m_06_link__linker" {...linkEdit("m_06_link05_bgimg_link")} editComponent={<LinkRoundIcon />} />
                                <div className="theme_deal__textBox">
                                    <span className="title" {...edit("m_06_link03_text")} />
                                </div>
                            </Bg>
                            <Bg onClick={handleLink("m_06_link06_bgimg_link")} {...imgKit("m_06_link06_bgimg")} tag="li" className="top_06">
                                <A className="m_06_link__linker" {...linkEdit("m_06_link06_bgimg_link")} editComponent={<LinkRoundIcon />} />
                                <div className="theme_deal__textBox">
                                    <span className="title" {...edit("m_06_link03_text")} />
                                </div>
                            </Bg>
                        </ul>
                    </div>

                    <div className="deal_list mt30">
                        <div className="alignment">
                            <div className="left_div"><h4>
                                <span {...edit("goods_list1_title")} />
                            </h4></div>
                            <div className="right_div">
                                <span className="goto_page"><a href="tour/list">바로가기<i className="flaticon-menu-1"></i></a></span>
                            </div>
                        </div>
                        <GoodsListAPI initialOption={{
                            initialViewCount: 4,
                            initialFilter: {
                                _id_in: groupsMap.tourMain1
                            }
                        }} />
                    </div>

                    <div className="deal_list mt30">
                        <div className="alignment">
                            <div className="left_div"><h4>
                                <span {...edit("goods_list2_title")} />
                            </h4></div>
                            <div className="right_div">
                                <span className="goto_page"><a href="tour/list">바로가기<i className="flaticon-menu-1"></i></a></span>
                            </div>
                        </div>
                        <GoodsListAPI initialOption={{
                            initialViewCount: 4,
                            initialFilter: {
                                _id_in: groupsMap.tourMain2
                            }
                        }} />
                    </div>

                    <div className="goods_box">
                        <div className="w1200">
                            <div className="bn_box line2">
                                <Img className="banner" onClick={handleLink("banner1__link")} {...imgKit("banner1")} >
                                    <A {...linkEdit("banner1__link")} editComponent={<LinkRoundIcon />} />
                                </Img>
                                <Img className="banner" onClick={handleLink("banner2__link")} {...imgKit("banner2")} >
                                    <A {...linkEdit("banner2__link")} editComponent={<LinkRoundIcon />} />
                                </Img>
                            </div>
                            {/* {cats.map(cat =>
                                <TourMainBoard key={cat._id} cat={cat} />
                            )} */}
                        </div>
                    </div>
                    <GoodsListTable />
                    {isSeller &&
                        <button type="submit" className="sum btn"
                            onClick={() => {
                                router.push("/tour/write/")
                            }}>등록</button>
                    }
                </div >
            </div >
        </div >
    </div >;
};

export default TourMain;