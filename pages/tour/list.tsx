import { Paginater } from 'components/common/Paginator';
import { Product } from 'components/product/Product';
import { IUseProductList, useProductPostList } from 'hook/useProductPostList';
import React, { useState } from 'react';
import BoardList from "components/board/List";
import { useRouter } from 'next/router';
import SortSelect from 'components/common/SortMethod';

interface IProp {
    context?: ITourListWrapContext;
}

export const TourList: React.FC<IProp> = ({ context }) => {
    const {items} = context;

    const router = useRouter();

<<<<<<< HEAD
    return <div>
        <div className="top_visual">
            <div
                className="sub_header sub_bg"
                style={{ backgroundImage: `url(/img/work_top_bg2.jpg)` }}
            >
                <div className="w1200">
                    <h2 className="title">Tour</h2>
                    <p className="text">지금 여행을 떠나세요~!~~!!!!!</p>
                </div>
            </div>
            <div className="header_nav">
                <ul>
                    <li className="home">
                        <a href="/index"></a>
                    </li>
                    <li className="homedeps1">Tour</li>
                </ul>
            </div>
        </div>

        <div className="goods_box w1200">
            <div id="sub_tap_nav" className="subtop_nav">
                <ul>
                    <li className="on"><a href="/tour/list">전체</a></li>
                    <li><a href="/tour/list">문화·예술여행</a></li>
                    <li><a href="/tour/list">교육·답사여행</a></li>
                    <li><a href="/tour/list">역사여행</a></li>
                    <li><a href="/tour/list">팸투어</a></li>
                </ul>
            </div>
            <div className="deal_list">

              
                <div className="alignment">
                    <div className="left_div"><span className="infotxt">총 <strong>22,222</strong>개</span></div>
                    <div className="right_div">
                        <select className="sel01">
                            <option>추천수</option>
                            <option>예약수</option>
                            <option>조회수</option>
                        </select>
                        <select onChange={(e) => {
                        }} className="sel02">
                            <option value={10}>10개 보기</option>
                            <option value={50}>50개 보기</option>
                            <option value={100}>100개 보기</option>
                        </select>
                        {/*
                        <ul className="al_02">
                            <div>
                                <li>
                                    <a href="#" className="view_icon">
                                        <svg>
                                            <rect width={4} height={2} style={{ fill: "#b7b7b7" }} />
                                            <rect x={7} width={13} height={2} style={{ fill: "#b7b7b7" }} />
                                            <rect y={7} width={4} height={2} style={{ fill: "#b7b7b7" }} />
                                            <rect x={7} y={7} width={13} height={2} style={{ fill: "#b7b7b7" }} />
                                            <rect y={15} width={4} height={2} style={{ fill: "#b7b7b7" }} />
                                            <rect x={7} y={15} width={13} height={2} style={{ fill: "#b7b7b7" }} />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="view_icon on">
                                        <svg>
                                            <rect width={9} height={8} style={{ fill: "#b7b7b7" }} />
                                            <rect x={11} width={9} height={8} style={{ fill: "#b7b7b7" }} />
                                            <rect y={10} width={9} height={8} style={{ fill: "#b7b7b7" }} />
                                            <rect x={11} y={10} width={9} height={8} style={{ fill: "#b7b7b7" }} />
                                        </svg>
                                    </a>
                                </li>
                            </div>
                        </ul>*/}
=======
    const handleWrite = () => {
        router.push("/tour/write")
    }

    return <BoardList onWrite={handleWrite} FilterSort={
    <div>
        <SortSelect />
    </div>} >
    <ul className="list_ul line4">
        {items.map(item => (
         <li key={item._id} className="list_in">
            <div className="img" style={{
                backgroundImage: `url(${item.images[0]?.uri})`
            }}>상품이미지</div>
            <div className="box">
                <div className="category"><span>{"category?.label"}</span></div>
                <div className="title">{item.title}</div>
                <div className="bottom_txt">
                    <div className="subTitle">
                        {item.subTitle}
>>>>>>> bb567029d64b9159343656a29336fdc4da7f8084
                    </div>
                    {item.keyWards?.map((tag, i) =>
                        <span key={`${item._id}tag${i}`}>{tag}</span>
                    )}
                </div>
            </div>
        </li >))}
    </ul>
    </BoardList>
};



interface ITourListWrapContext extends IUseProductList{

}

const TourListWrap:React.FC<IProp> = () => {

    const productContext = useProductPostList();
    
    const context:ITourListWrapContext = {
        ...productContext
    }

    return <TourList context={context}  />
}

export default TourListWrap;