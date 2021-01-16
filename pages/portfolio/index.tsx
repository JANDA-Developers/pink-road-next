import { usePortfolioList } from 'hook/usePortfolio';
import Link from 'next/link';
import React, { Fragment, useContext } from 'react';
import { AppContext } from '../_app';
import defaultPageInfo from "info/portfolio.json"
import { getStaticPageInfo, Ipage } from '../../utils/page';
import { usePageEdit } from '../../hook/usePageEdit';
import { Bg } from '../../components/Img/img';
import { PageEditor } from '../../components/common/PageEditer';

export const PortFolio: React.FC<Ipage> = (_pageInfo) => {
    const { isManager, categoriesMap } = useContext(AppContext);
    const editTools = usePageEdit(_pageInfo, defaultPageInfo);
    const { items: portfolioes, getLoading, setPage, pageInfo, setFilter, filter } = usePortfolioList({ initialPageIndex: 1, initialViewCount: 8, initialFilter: { isOpen_eq: isManager ? undefined : true } })
    const { edit, imgKit } = editTools;


    const categories = categoriesMap?.PORTPOLIO || [];
    const handlePrev = () => {
        setPage(pageInfo.page - 1)
    }
    const handleNext = () => {
        setPage(pageInfo.page + 1)
    }

    const handleCatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const categoryId_eq = event.currentTarget.value;
        setPage(1);
        setFilter({
            ...filter,
            categoryId_eq,
        });
    }


    const handleAllCat = () => {
        setPage(1);
        setFilter({
            ...filter,
            categoryId_eq: undefined
        });
    }
    const viewCat = filter.categoryId_eq || "";

    return <div className="portfolio_in">
        <PageEditor pageTools={editTools} />
        <Bg className="top_bg w100 portfolio__topbg" {...imgKit("mainBg")}>
            <div className="w1200">
                <h3 {...edit("mainTitle")} />
                <span {...edit("subTitle")} />
            </div>
        </Bg>

        <div className="con02 con_block">
            <div className="w1200">
                <h4 {...edit("con02_desc")} />
                {/* 핑크로더는 사라져가는 가치 있는 것들을 되살리는 일을 하고 있습니다.<br />
                    사람과 상생할 수 있는 지역콘텐츠를 개발하며 여행/디자인/ 교육등의
                다양한 방식으로 소통하는법을 <br className="no" />창출하고 더 나은 새로운 것을 제안합니다.
                </h4> */}
                <ul className="portfolio__values">
                    <li className="img01">
                        <Bg className="img" {...imgKit("con2_img1_icon")} />
                        {/* <div className="img" style={bg("mainBg")}><Upload onUpload={imgEdit("mainBg")} /></div> */}
                        <h5 {...edit("con2_img1_title")} />
                        <span {...edit("con2_img1_title_kr")} />
                    </li>
                    <li className="img02">
                        <Bg className="img" {...imgKit("con2_img2_icon")} />
                        <h5 {...edit("con2_img2_title")} />
                        <span {...edit("con2_img2_title_kr")} />
                    </li>
                    <li className="img03">
                        <Bg className="img" {...imgKit("con2_img3_icon")} />
                        <h5 {...edit("con2_img3_title")} />
                        <span {...edit("con2_img3_title_kr")} />
                    </li>
                    <li className="img04">
                        <Bg className="img" {...imgKit("con2_img4_icon")} />
                        <h5 {...edit("con2_img4_title")}></h5>
                        <span {...edit("con2_img4_title_kr")} />
                    </li>
                </ul>
            </div>
        </div>
        <div className="w100 con03 con_block">
            <h4 {...edit('con3_title')} />
            <span {...edit('con3_subTitle')} />
        </div>
        <div className="w100 con04 con_block">
            <div id="list" className="photo_tap_div">

                <input value="" onChange={handleAllCat} id="tab-00" type="radio" name="radio-set" className="tab-selector-1" checked={viewCat === ""}></input>
                <label htmlFor="tab-00" className="tab-label-1 photo_tap">ALL</label>

                {categories.map((c, i) =>
                    <Fragment key={c._id}>
                        <input value={c._id} onChange={handleCatChange} id={`tab-${i}`} type="radio" name="radio-set" className="tab-selector-1" checked={c._id === viewCat}></input>
                        <label htmlFor={`tab-${i}`} className="tab-label-1 photo_tap">{c.label}</label>
                    </Fragment>
                )}
                <div className="tap_nav_bg"></div>

                <div className="portfolio_box box01" id="portfolio_box_1">
                    {getLoading ? (
                        <ul>
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                        </ul>
                    ) :
                        <ul>
                            {portfolioes.map((portfolio) =>
                                <Link key={portfolio._id} href={`/portfolio/view/${portfolio._id}`}>
                                    <li style={{ backgroundImage: `url(${portfolio.thumb?.uri})` }}>
                                        <div className="box">
                                            {portfolio?.category && <i className="category">{portfolio.category.label}</i>}
                                            {portfolio?.isOpen || <i className="category">비공개</i>}
                                            <strong className="title">{portfolio.title}</strong>
                                            <span className="txt">{portfolio.summary}</span>
                                        </div>
                                    </li>
                                </Link>
                            )}
                        </ul>
                    }

                    <div className="boardNavigation">
                        <div className="center">
                            <div className="pagenate_mini">
                                <div onClick={handlePrev} className={`${pageInfo.page === 1 && 'disabled-btn'} page_btn first`}><i className="jandaicon-arr4-left"></i></div>
                                <div className="count"><strong>{pageInfo.page}</strong> / {pageInfo.totalPageSize}</div>
                                <div onClick={handleNext} className={`${pageInfo.page === pageInfo.totalPageSize && 'disabled-btn'} page_btn end`}><i className="jandaicon-arr4-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="boardNavigation">
                        <div className="float_left">
                        </div>
                        <div className="float_right">
                            {isManager &&
                                <Link href={`/portfolio/write`} ><button type="submit" className="btn medium pointcolor">포트폴리오 등록</button></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Bg {...imgKit("bottomBg")} className="portfolio__bottomWrap w100 con05 con_block">
            <div className="w1200 onepick2">
                <div className="txt">
                    <h4 {...edit("con5_title")} />
                    <span {...edit("con5_subTitle")} />
                </div>
                <div className="link">
                    <a target="_blank" className="" href="/pinkroader_company_introduction_letter.pdf" {...edit("con5_link")}></a>
                </div>
            </div>
        </Bg>
    </div>
};

export const getStaticProps = getStaticPageInfo("portfolio")


export default PortFolio