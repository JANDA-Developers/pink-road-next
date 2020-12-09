import { Meta } from 'components/common/meta/Meta';
import SubTopNav from 'layout/components/SubTop';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import pageInfoDefault from "info/tourMain.json";
import { useRouter } from 'next/router'
import { IuseProductList } from 'hook/useProduct';
import { productList_ProductList_data_category } from 'types/api';
import { IProduct } from 'types/interface';
import { BG } from '../../types/const';
import { ITourListWrapContext, TourListWrap } from '../../components/hoc/TourListWrap';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { usePageInfo } from '../../hook/usePageInfo';
import { getEditUtils } from '../../utils/pageEdit';
import { AppContext } from '../_app';

interface IProp extends InferGetStaticPropsType<typeof getStaticProps> {
    context: ITourListWrapContext
}

type TSortedData = {
    category: productList_ProductList_data_category,
    items: IProduct[]
}

export const TourMain: React.FC<IProp> = ({ sitePageInfo, context }) => {
    const original = sitePageInfo || pageInfoDefault;
    const { editMode } = useContext(AppContext);
    const [pageInfo, setPageInfo] = useState(original);
    const { edit, imgEdit, bg } = getEditUtils(editMode, pageInfo, setPageInfo)

    const { items, isExp, setFilter, filter, cats, pageInfo: paging, setPage } = context;
    const router = useRouter();

    const sortedData: TSortedData[] = [];

    items.forEach(item => {
        if (!item.category) return;
        //카테고리가 삽입 되어있는지 검사
        const target = sortedData.find(d => d?.category?._id === item?.category?._id);
        if (!target) {
            sortedData.push({
                category: item.category,
                items: [item]
            })
        } else {
            target.items.push(item);
        }
    })

    const handleCatFilter = (catId: string) => () => {
        setFilter({
            ...filter,
            categoryId_eq: catId
        })
    }

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
                <div id="sub_tap_nav" className="subtop_nav betatest">
                    <ul>
                        {cats.map(cat =>
                            <li key={cat._id} onClick={handleCatFilter(cat._id)} className={cat._id === filter.categoryId_eq ? "on" : ""}><a>{cat.label}</a></li>
                        )}
                    </ul>
                </div>
                <div className="bn_box line2">
                    <a href="/"><img src={'/img/bn_02.png'} alt="여행할인이벤트" /></a>
                    <a href="/"><img src={'/img/bn_02.png'} alt="여행할인이벤트" /></a>
                </div>
                {sortedData.map(data =>
                    <div key={data?.category?._id} className="deal_list">
                        <div className="alignment">
                            {data.category && <div className="left_div"><h4>{data?.category?.label}</h4></div>}
                            <div className="right_div">
                                <span onClick={() => {
                                    setPage(paging.prev_page_num)
                                }} className="move-left"><i className="jandaicon-arr4-left" /><button></button></span>
                                <span onClick={() => {
                                    setPage(paging.next_page_num)
                                }} className="move-right"><i className="jandaicon-arr4-right" /><button></button></span>
                            </div>
                        </div>
                        <ul className="list_ul line3">
                            {data.items.map(data =>
                                <Link href={`/tour/view/${data._id}`}>
                                    <li key={data._id} className="list_in" >
                                        <div className="img" style={BG(data.images[0].uri)}>상품이미지</div>
                                        <div className="box">
                                            <div className="category"><span>{data.category?.label}</span></div>
                                            <div className="title">{data.title}</div>
                                            <div className="bottom_txt">
                                                <div className="subTitle">
                                                    {data.subTitle}
                                                </div>
                                                {data.keyWards?.map((tag, i) =>
                                                    <span key={`${data._id}tag${i}`}>{tag}</span>
                                                )}
                                            </div>
                                        </div>
                                    </li >
                                </Link>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    </div >;
};


interface IGetProps {
    sitePageInfo: typeof pageInfoDefault | "",
}

export const getStaticProps: GetStaticProps<IGetProps> = async (context) => {
    const { data } = await usePageInfo("tourMain");

    return {
        props: {
            sitePageInfo: data?.value || "",
            revalidate: 10
        }, // will be passed to the page component as props
    }
}

export default TourListWrap(TourMain);