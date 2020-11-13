import { Meta } from 'components/common/meta/Meta';
import { Product } from 'components/product/Product';
import SubTopNav from 'layout/components/SubTop';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router'
interface IProp { }

export const TourMain: React.FC<IProp> = () => {
    const router = useRouter();
    const { exp } = router.query;
    const isExp = exp!!;


    return <div >
        <Meta />
        <SubTopNav title="temp" desc="temp" >
            <li className="homedeps1">
                <Link href="/tour/main?exp=true">
                    <a>Tour</a>
                </Link>
            </li>
        </SubTopNav>
        <div className="goods_box">
            <div className="w1200">
                <div id="sub_tap_nav" className="subtop_nav">
                    <ul>
                        <li className="on"><a href="/tour/list">전체</a></li>
                        <li><a href="/tour/list">문화·예술여행</a></li>
                        <li><a href="/tour/list">교육·답사여행</a></li>
                        <li><a href="/tour/list">역사여행</a></li>
                        <li><a href="/tour/list">팸투어</a></li>
                    </ul>
                </div>
                <div className="bn_box line2">
                    <a href="/"><img src={'/img/bn_01.jpg'} alt="여행할인이벤트" /></a>
                    <a href="/"><img src={'/img/bn_01.jpg'} alt="여행할인이벤트" /></a>
                </div>
                <div className="deal_list">
                    <div className="alignment">
                        <div className="left_div"><h4>문화·예술여행</h4></div>
                        <div className="right_div">
                            <span className="move-left"><i className="jandaicon-arr4-left" /><button></button></span>
                            <span className="move-right"><i className="jandaicon-arr4-right" /><button></button></span>
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
                            <span className="move-left"><i className="jandaicon-arr4-left" /><button></button></span>
                            <span className="move-right"><i className="jandaicon-arr4-right" /><button></button></span>
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
                            <span className="move-left"><i className="jandaicon-arr4-left" /><button></button></span>
                            <span className="move-right"><i className="jandaicon-arr4-right" /><button></button></span>
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
                            <span className="move-left"><i className="jandaicon-arr4-left" /><button></button></span>
                            <span className="move-right"><i className="jandaicon-arr4-right" /><button></button></span>
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