import Link from 'next/link';
import React from 'react';
import { useProductList } from '../../hook/useProduct';
import { Fcategory } from '../../types/api';
import { BG } from '../../types/const';
import { checkIsExp, getTypeFilterByUrl } from '../../utils/product';

interface IProp {
    cat: Fcategory
}

export const TourMainBoard: React.FC<IProp> = ({ cat }) => {
    const isExp = checkIsExp()
    const { initialFilter } = getTypeFilterByUrl(isExp);
    const productListHook = useProductList({
        initialFilter: {
            ...initialFilter,
            categoryId_eq: cat._id
        }
    });

    const { setPage, pageInfo: paging, items } = productListHook;

    return <div key={cat?._id} className="deal_list">
        <div className="alignment">
            <div className="left_div"><h4>{cat?.label}</h4></div>
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
            {items.map(data =>
                <Link key={data._id} href={`/tour/view/${data._id}`}>
                    <li className="list_in" >
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
    </div>;
};
