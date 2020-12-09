

import React, { useState } from 'react';
import { IuseProductList, useProductList } from '../../hook/useProduct';
import { Fproduct } from '../../types/api';
import { setVal, whenEnter } from '../../utils/eventValueExtracter';
import { integratedProductSearch } from '../../utils/genFilter';
import isEmpty from '../../utils/isEmpty';

interface IProp {
    productListHook: IuseProductList
    onSelectProduct: (product: Fproduct) => void;
}

export const ProductSearcher: React.FC<IProp> = ({ productListHook, onSelectProduct }) => {
    const [search, setSearch] = useState("");
    const { setFilter, items } = productListHook;

    const getData = () => {
        setFilter(integratedProductSearch(search || "____"));
    }

    const handleSelectProduct = (product: Fproduct) => () => {
        setSearch(product.title);
        onSelectProduct(product)
    }

    return <div className="productSearcher">
        <div className="write_type">
            <div className="title">상품검색</div>
            <div className="input_form">
                <input placeholder="검색어를 입력해주세요" onKeyPress={whenEnter(getData)} onChange={setVal(setSearch)} value={search} type="text" name="title" className="inputText w100" />
                <div className="productSearcher__searchIcon search_btn"><object type="image/svg+xml" data="/img/svg/search_icon.svg">현재 브라우저는 iframe을 지원하지 않습니다.</object><button className="btt1"></button></div>
            </div>
        </div>
        {isEmpty(items) ||
            <div className="productSearcher__items">
                {items.map(item => <div className={`productSearcher__item ${search === item.title && "on"}`} onClick={handleSelectProduct(item)} key={item._id}>
                    <img className="productSearcher__img" src={item.images[0]?.uri} />
                    <div>
                        <h4>
                            {item.title}
                        </h4>
                        {item.subTitle}
                    </div>
                </div>
                )}
            </div>
        }
    </div>;
};


const ProductSearcherWrap = (props: Pick<IProp, "onSelectProduct">) => {
    const productListHook = useProductList({ initialFilter: { title_contains: "____" } });
    return <ProductSearcher  {...props} productListHook={productListHook} />
}

export default ProductSearcherWrap