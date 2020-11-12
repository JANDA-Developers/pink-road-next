import { useQuery } from '@apollo/client';
import { PORT_FOLIO_LIST } from 'apollo/queries';
import { usePageInfo } from 'hook/usePageInfo';
import { usePortfolioList, IUsePortfolioList } from 'hook/usePortfolioList';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { pcategoryList_pCategoryList_data, portfolioList, portfolioListVariables, portfolioList_PortfolioList_data } from 'types/api';
import { getEditUtils } from 'utils/pageEdit';
import { AppContext } from './_app';
import pageInfoDefault from "info/portfolio.json"
import { TStieInfo } from 'types/interface';
import { usePcategory } from 'hook/usePcatList';

interface IProp {
    context: IPortfolioWrapContext
}

export const PortFolio: React.FC<IProp> = ({ context }) => {
    const { editMode } = useContext(AppContext);
    const { items: portfolios = [], pageInfo, setPage, sitePageInfo, pcategories } = context;
    const original = sitePageInfo || pageInfoDefault;
    const [page, setPageInfo] = useState(original);
    const { edit, imgEdit, bg } = getEditUtils(editMode, page, setPageInfo)
    const [viewCat, setViewCat] = useState("");

    const filteredPortfolios = viewCat ? portfolios.filter(pt => pt.pCategory._id === viewCat) : portfolios;

    const handlePrev = () =>
        setPage(pageInfo.prev_page_num)

    const handleNext = () =>
        setPage(pageInfo.next_page_num)

    const handleCatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nextCat = event.currentTarget.value;
        setViewCat(nextCat);
    }

    return <div className="portfolio_in">
        <div className="top_bg w100">
            <div className="w1200">
                <h3 {...edit("mainTitle")} />
                <span {...edit("subTitle")} />
            </div>
        </div>

        <div className="con02 con_block">
            <div className="w1200">
                <h4>
                    핑크로더는 사라져가는 가치 있는 것들을 되살리는 일을 하고 있습니다.<br />
                    사람과 상생할 수 있는 지역콘텐츠를 개발하며 여행/디자인/ 교육등의
                다양한 방식으로 소통하는법을 <br className="no" />창출하고 더 나은 새로운 것을 제안합니다.
                </h4>
                <ul>
                    <li className="img01">
                        <div className="img"></div>
                        <h5 {...edit("con2_img1_title")} />
                        <span {...edit("con2_img1_title_kr")} />
                    </li>
                    <li className="img02">
                        <div className="img"></div>
                        <h5 {...edit("con2_img2_title")} />
                        <span {...edit("con2_img2_title_kr")} />
                    </li>
                    <li className="img03">
                        <div className="img"></div>
                        <h5 {...edit("con2_img3_title")} />
                        <span {...edit("con2_img3_title_kr")} />
                    </li>
                    <li className="img04">
                        <div className="img"></div>
                        <h5 {...edit("con2_img4_title")}></h5>
                        <span {...edit("con2_img4_title_kr")} />
                    </li>
                </ul>
            </div>
        </div>
        <div className="w100 con03 con_block">
            <h4 {...edit('con3_title')} />
            <span {...edit('con3_subtitle')} />
        </div>
        <div className="w100 con04 con_block">
            <div className="photo_tap_div">

                <input value="" onChange={handleCatChange} id="tab-00" type="radio" name="radio-set" className="tab-selector-1" checked={viewCat === ""}></input>
                <label htmlFor="tab-00" className="tab-label-1 photo_tap">ALL</label>

                {pcategories.map((pc, i) =>
                    <Fragment key={pc._id}>
                        <input value={pc._id} onChange={handleCatChange} id={`tab-${i}`} type="radio" name="radio-set" className="tab-selector-1" checked={pc._id === viewCat}></input>
                        <label htmlFor={`tab-${i}`} className="tab-label-1 photo_tap">{pc.label}</label>
                    </Fragment>
                )}
                <div className="tap_nav_bg"></div>

                <div className="portfolio_box box01" id="portfolio_box_1">
                    <ul>
                        {filteredPortfolios.map((portfolio) =>
                            <Link key={portfolio._id} href={`/portfolio/${portfolio._id}`}>
                                <li>
                                    <div className="box">
                                        <i className="category">{portfolio.title}</i>
                                        <strong className="title">{portfolio.title}</strong>
                                        <span className="txt">{portfolio.title}</span>
                                    </div>
                                </li>
                            </Link>
                        )}
                        <Link href={`/portfolio/write/`}>
                            <li>
                                <div className="box">
                                    <i className="category">디자인</i>
                                    <strong className="title">제목제목</strong>
                                    <span className="txt">내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</span>
                                </div>
                            </li>
                        </Link>
                    </ul>
                    <div className="boardNavigation">
                        <div className="center">
                            <div className="pagenate_mini">
                                <div onClick={handlePrev} className="page_btn first"><i className="jandaicon-arr4-left"></i></div>
                                <div className="count"><strong>{pageInfo.page}</strong> / {pageInfo.totalPageSize}</div>
                                <div onClick={handleNext} className="page_btn end"><i className="jandaicon-arr4-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w100 con05 con_block">
            <div className="w1200">
                <div className="txt">
                    <h4>핑크로더 홈페이지는</h4>
                    <span>사회적경제 혁신성장사업[비R&D] 사회적경제기업 경쟁력 강화 사업화지원 프로그램의 지원을 받아 제작 되었습니다.</span>
                </div>
                <Link href="/">
                    <a className="link">회사소개서<br />다운로드</a>
                </Link>
            </div>
        </div>
    </div>;
    ;
};

interface IPortfolioWrapContext extends IUsePortfolioList {
    sitePageInfo: TStieInfo | "",
    pcategories: pcategoryList_pCategoryList_data[]
}

type TGetProps = {
    pageInfo: typeof pageInfoDefault | "",
}

export const getStaticProps: GetStaticProps<TGetProps> = async (context) => {
    const { data } = await usePageInfo("portfolio");
    return {
        props: {
            pageInfo: data?.value || "",
            revalidate: 10
        }, // will be passed to the page component as props
    }
}

const PortFolioWrap: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ pageInfo }) => {
    const { pcategories } = usePcategory()
    const portfolioList = usePortfolioList({ initialPageIndex: 1, initialViewCount: 10 })

    const context: IPortfolioWrapContext = {
        ...portfolioList,
        sitePageInfo: pageInfo,
        pcategories
    }


    return <PortFolio context={context} />
}

export default PortFolioWrap;