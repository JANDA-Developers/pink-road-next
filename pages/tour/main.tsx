import { Meta } from 'components/common/meta/Meta';
import { Product } from 'components/product/Product';
import SubTopNav from 'layout/components/SubTop';
import React from 'react';

interface IProp { }

export const TourMain: React.FC<IProp> = () => {
    return <div >
        <Meta />
        <SubTopNav title="temp" desc="temp" >
            <li className="homedeps1"><a href="../sub/experience_main.html">Experience</a></li>
            <li className="homedeps2"><a href="../sub/experience_list.html">상품리스트</a></li>
        </SubTopNav>
        <div className="tour_box">
            <div className="w1200">
                <div className="search">
                    <ul>
                        <li><a href="/tour-list">전체</a></li>
                        <li><a href="/tour-list">문화·예술여행</a></li>
                        <li><a href="/tour-list">교육·답사여행</a></li>
                        <li><a href="/tour-list">역사여행</a></li>
                        <li><a href="/tour-list">팸투어</a></li>
                    </ul>
                </div>
                <div className="bn_box line2">
                    <a href="/"><img src={'/img/bn_img.gif'} alt="여행할인이벤트" /></a>
                    <a href="/"><img src={'/img/bn_img.gif'} alt="여행할인이벤트" /></a>
                </div>
                <div className="deal_list">
                    <div className="alignment">
                        <div className="left_div"><h4>문화·예술여행</h4></div>
                        <div className="right_div">
                            <span className="goto_page"><a href="/tour-list">바로가기<i className="flaticon-menu-1"></i></a></span>
                        </div>
                    </div>
                    <ul className="list_ul line3">
                        <Product />
                        <Product />
                        <Product />
                    </ul>
                </div>
                <div className="deal_list">
                    <div className="alignment">
                        <div className="left_div"><h4>교육·답사여행</h4></div>
                        <div className="right_div">
                            <span className="goto_page"><a href="/tour-list">바로가기<i className="flaticon-menu-1"></i></a></span>
                        </div>
                    </div>
                    <ul className="list_ul line3">
                        <Product />
                        <Product />
                        <Product />
                    </ul>
                </div>
                <div className="deal_list">
                    <div className="alignment">
                        <div className="left_div"><h4>역사여행</h4></div>
                        <div className="right_div">
                            <span className="goto_page"><a href="/tour-list">바로가기<i className="flaticon-menu-1"></i></a></span>
                        </div>
                    </div>
                    <ul className="list_ul line3">
                        <Product />
                        <Product />
                        <Product />
                    </ul>
                </div>
                <div className="deal_list">

                    <div className="alignment">
                        <div className="left_div"><h4>팸투어</h4></div>
                        <div className="right_div">
                            <span className="goto_page"><a href="/tour-list">바로가기<i className="flaticon-menu-1"></i></a></span>
                        </div>
                    </div>
                    <ul className="list_ul line3">
                        <Product />
                    </ul>
                </div>
            </div>
        </div>
    </div >;
};

export default TourMain;