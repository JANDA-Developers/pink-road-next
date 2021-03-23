import React, { useEffect } from 'react';
import { RatingStars } from 'components/common/RatingStars';
import { useProductList } from '../../hook/useProduct';
import { ListInitOptions } from '../../hook/useListQuery';
import { productList, productListVariables, productList_ProductList_data, _ProductFilter, _ProductSort } from '../../types/api';
import { BG } from '../../types/const';
import { autoComma } from '../../utils/formatter';
import { useRouter } from 'next/router';
import { arrayOrderSink } from '../../utils/arrayOrderSink';
import isEmpty from '../../utils/isEmpty';
import { ILi } from '../../types/interface';
import { NoData } from './NoData';
import { genrateOption } from '../../utils/query';

interface IProp {
  initialOption?: Partial<ListInitOptions<_ProductFilter, _ProductSort>>
  options?: genrateOption<productList, productListVariables>
}

export const GoodsListAPI: React.FC<IProp> = ({ initialOption = {
  initialViewCount: 4
}, options }) => {
  const router = useRouter();
  const { items } = useProductList(initialOption, options)
  const itemIn = initialOption?.initialFilter?._id_in;

  const sortedItems = itemIn ? arrayOrderSink(items, "_id", itemIn) : items;

  const toProductBoard = (id: string) => () => {
    router.push("/tour/view/" + id);
  }

  return <ul className="list_ul line4">
    {
      isEmpty(sortedItems) && <NoData />
    }
    {sortedItems.map((item, i) =>
      <Goods onClick={toProductBoard(item._id)} key={item._id} item={item} />
    )}
  </ul>;
};

interface IGoodsProp extends ILi {
  item: productList_ProductList_data
}

export const Goods: React.FC<IGoodsProp> = ({ item, ...props }) => {
  const router = useRouter();
  const handleToDetail = () => {
    router.push("/tour/view/" + item._id);
  }

  return <li onClick={handleToDetail} {...props} key={item._id} className="list_in">
    <div className="imgWrap">
      <div className="img" style={BG(item?.images?.[0]?.uri || "")}>상품이미지</div>
    </div>
    <div className="box">
      <div className="category"><span>{item.category?.label}</span></div>
      <div className="title">{item.title}</div>
      <div className="bottom_txt">
        <div className="tag2">
          {item.keyWards?.map((keyWard, index) =>
            <span key={index + "keyward"}>#{keyWard}</span>
          )}
        </div>
        <RatingStars />
        <div className="cash"><strong>{autoComma(item.adult_price)}</strong>원</div>
      </div>
    </div>
  </li>;
};
