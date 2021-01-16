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

interface IProp extends InferGetStaticPropsType<typeof getStaticProps> { }

export const getStaticProps = getStaticPageInfo("tourMain");
export const TourMain: React.FC<Ipage> = (pageInfo) => {
    const isExp = checkIsExp();
    const pageTools = usePageEdit(pageInfo, pageInfoDefault);
    const { categoriesMap } = useContext(AppContext);
    const cats = categoriesMap?.PORTPOLIO || []

    const subTopInfo = {
        imgKey: isExp ? "exp_subTop_img" : "subTop_img",
        titleKey: isExp ? "exp_subTop_title" : "subTop_title",
        descKey: isExp ? "exp_subTop_desc" : "subTop_desc"
    }

    return <div >
        <Meta />
        <SubTopNav {...subTopInfo} pageTools={pageTools}  >
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