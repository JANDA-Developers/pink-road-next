import { Meta } from 'components/common/meta/Meta';
import { Product } from 'components/product/Product';
import SubTopNav from 'layout/components/SubTop';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router'
import { IUseProductList, useProductPostList } from 'hook/useProductPostList';
import { productPostList_ProductPostList_data_category } from 'types/api';
import { IProduct } from 'types/interface';
interface IProp { 
    context: ITourMianWrapContext
}

type TSortedData = {
    category: productPostList_ProductPostList_data_category,
    items: IProduct[]
}

export const TourMain: React.FC<IProp> = ({context}) => {
    const {items}  = context;
    const router = useRouter();
    const { exp } = router.query;
    const isExp = exp!!;

    const sortedData:TSortedData[] = [];
    
    items.forEach(item => {
        //카테고리가 삽입 되어있는지 검사
        const target = sortedData.find(d => d?.category?._id === item?.category?._id);
        if(!target) {
            sortedData.push({
                category: item.category,
                items: [item]
            })
        } else {
            target.items.push(item);
        }
    })

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
<<<<<<< HEAD
                        <li className="on"><a href="/tour/list">전체</a></li>
                        <li><a href="/tour/list">문화·예술여행</a></li>
=======
                        <li className="on">
                            <Link href="/tour/list">
                                <a >전체</a>
                            </Link>
                            </li>
                        <li>
                            <Link href="/tour/list">
                                <a >문화·예술여행</a>
                            </Link>
                        </li>
>>>>>>> bb567029d64b9159343656a29336fdc4da7f8084
                        <li><a href="/tour/list">교육·답사여행</a></li>
                        <li><a href="/tour/list">역사여행</a></li>
                        <li><a href="/tour/list">팸투어</a></li>
                    </ul>
                </div>
                <div className="bn_box line2">
                    <a href="/"><img src={'/img/bn_01.jpg'} alt="여행할인이벤트" /></a>
                    <a href="/"><img src={'/img/bn_01.jpg'} alt="여행할인이벤트" /></a>
                </div>
                {sortedData.map(data => 
                <div key={data?.category?._id} className="deal_list">
                    <div className="alignment">
                        {data.category && <div className="left_div"><h4>{data?.category?.label}</h4></div>}
                        <div className="right_div">
                            <span className="move-left"><i className="jandaicon-arr4-left" /><button></button></span>
                            <span className="move-right"><i className="jandaicon-arr4-right" /><button></button></span>
                        </div>
                    </div>
                    <ul className="list_ul line3">
                        {data.items.map(data =>
                            <Link href={`/tour/view/${data._id}`}>
                            <li key={data._id} className="list_in" >
                                <div className="img" style={data.images ? {
                                    backgroundImage: `url(${data.images[0]?.uri})`
                                } : undefined}>상품이미지</div>
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


interface ITourMianWrapContext extends IUseProductList {
}

export const TourMainWrap = () => {

    const productPostList = useProductPostList();

    const context:ITourMianWrapContext = {
        ...productPostList 
    }

    if(productPostList.loading) return null;

    return <TourMain context={context} />
}

export default TourMainWrap;