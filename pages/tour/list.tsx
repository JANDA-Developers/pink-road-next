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

    const handleWrite = () => {
        router.push("/tour/write")
    }

    // const { setSort, setFilter, setViewCount, } = context;

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