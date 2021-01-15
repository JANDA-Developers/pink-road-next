import { Meta } from 'components/common/meta/Meta';
import SubTopNav from 'layout/components/SubTop';
import Link from 'next/link';
import React, { useContext } from 'react';
import { InferGetStaticPropsType } from 'next';
import { AppContext } from '../_app';
import { getStaticPageInfo } from '../../utils/page';
import { checkIsExp } from '../../utils/product';
import { TourMainBoard } from '../../components/tour/TourMainBoard';
import TOUR_MAIN_INFO from "info/tourMain.json";

interface IProp extends InferGetStaticPropsType<typeof getStaticProps> { }

export const getStaticProps = getStaticPageInfo("tourMain", TOUR_MAIN_INFO);
export const TourMain: React.FC<IProp> = () => {
    const isExp = checkIsExp();
    const { categoriesMap } = useContext(AppContext);
    const cats = categoriesMap?.PORTPOLIO || []

    return <div >
        <Meta />
        <SubTopNav title="temp" desc="temp" >
            <li className="homedeps1">
                {isExp ?
                    <Link href="/tour">
                        <a>Tour</a>
                    </Link> :
                    <Link href="/tour?exp=true">
                        <a>Experience</a>
                    </Link>
                }
            </li>
        </SubTopNav>
        <div className="goods_box">
            <div className="w1200">
                <div className="bn_box line2">
                    <a href="/"><img src={'/img/bn_02.png'} alt="여행할인이벤트" /></a>
                    <a href="/"><img src={'/img/bn_02.png'} alt="여행할인이벤트" /></a>
                </div>
                {cats.map(cat =>
                    <TourMainBoard key={cat._id} cat={cat} />
                )}
            </div>
        </div>
    </div >;
};

export default TourMain;