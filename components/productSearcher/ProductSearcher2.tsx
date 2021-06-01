import React, { useContext, useState } from "react";
import { useProductGroupList, useProductList } from "../../hook/useProduct";
import { handSearchClose } from "../../layout/components/Header";
import { AppContext } from "../../pages/_app";
import { Fproduct, _ProductFilter } from "../../types/api";
import { setVal, whenEnter } from "../../utils/eventValueExtracter";
import { integratedProductSearch } from "../../utils/genFilter";
import { yyyymmdd } from "../../utils/yyyymmdd";

interface IProp {
    groupList?: boolean;
    filter?: _ProductFilter;
    defaultSearch?: string;
    defaultProductId?: string;
    onSelectProduct: (product: Fproduct) => void;
}

export const ProductSearcher: React.FC<IProp> = ({
    defaultSearch,
    onSelectProduct,
    defaultProductId,
    filter,
    groupList,
}) => {
    const [search, setSearch] = useState(defaultSearch);
    const { setFilter, items } = useProductList({
        fixingFilter: {
            ...filter,
        },
        initialFilter: {
            _id_eq: defaultProductId,
        },
    });

    const getData = () => {
        setFilter(integratedProductSearch(search));
        handSearchClose();
    };

    const handleSelectProduct = (product: Fproduct) => {
        setSearch(product.title);
        onSelectProduct(product);
    };

    return (
        <div className="productSearcher">
            <div className="goodsall">
                <div className="goodsall__wrap">
                    <div className="goodsall__search search_top">
                        <div className="search_div">
                            <input
                                onKeyPress={whenEnter(getData)}
                                onChange={setVal(setSearch)}
                                value={search || ""}
                                className="w100"
                                type="text"
                                placeholder="검색할 상품명을 입력해주세요."
                            />
                            <div onClick={getData} className="svg_img">
                                <img
                                    src="/img/svg/search_icon.svg"
                                    alt="search icon"
                                />
                                <button />
                            </div>
                        </div>
                    </div>
                    <div className="goodsall__list">
                        <p>
                            검색결과 <strong>{items.length}건</strong>
                        </p>
                        <ul>
                            {items.map((item, i) => (
                                <li
                                    onClick={() => {
                                        handleSelectProduct(item);
                                    }}
                                    key={item._id}
                                >
                                    <div className="goodsall__list__img">
                                        <img
                                            src={item.images?.[0]?.uri || ""}
                                            alt="상품이미지"
                                        />
                                    </div>
                                    <div className="goodsall__list__text">
                                        <div className="title">
                                            {item.title}
                                        </div>
                                        <div className="date">
                                            {yyyymmdd(item.startDate)} ~{" "}
                                            {yyyymmdd(item.endDate)}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSearcher;
