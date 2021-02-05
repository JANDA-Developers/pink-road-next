

import React, { useState } from 'react';
import { IuseProductList, useProductList } from '../../hook/useProduct';
import { Fproduct } from '../../types/api';
import { setVal, whenEnter } from '../../utils/eventValueExtracter';
import { integratedProductSearch } from '../../utils/genFilter';
import isEmpty from '../../utils/isEmpty';

interface IProp {
    defaultSearch?: string;
    defaultProductId?: string;
    onSelectProduct: (product: Fproduct) => void;
}

export const ProductSearcher: React.FC<IProp> = ({ defaultSearch, onSelectProduct, defaultProductId }) => {
    const [search, setSearch] = useState(defaultSearch);
    const { setFilter, items } = useProductList({
        initialFilter: {
            _id_eq: defaultProductId
        }
    });

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
                <div className="productSearcher__searchIcon search_btn"><img src="/img/svg/search_icon.svg" alt="search icon" /><button className="btt1"></button></div>
            </div>
        </div>
        {isEmpty(items) ||
            <div className="productSearcher__items">
                {items.map(item => <div className={`productSearcher__item ${search === item.title && "on"}`} onClick={handleSelectProduct(item)} key={item._id}>
                    <img className="productSearcher__img" src={item?.images?.[0]?.uri} />
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


export default ProductSearcher