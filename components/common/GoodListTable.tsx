import React, { useContext } from 'react';
import { useProductList } from '../../hook/useProduct';
import { useSingleSort } from '../../hook/useSort';
import { AppContext } from '../../pages/_app';
import { autoComma } from '../../utils/formatter';
import isEmpty from '../../utils/isEmpty';
import { Goods } from './GoodsListAPI';
import { NoData } from './NoData';
import SortSelect from './SortMethod';
import { ViewCount } from './ViewCount';
import { ViewSelect } from './ViewSelect';

interface IProp { }

export const GoodsListTable: React.FC<IProp> = () => {
    const { categoriesMap } = useContext(AppContext);
    const { items, filter, setFilter, sort, setSort, viewCount, setViewCount, pageInfo } = useProductList()

    return <div className="deal_list">
        <div className="search">
            <ul>
                <li onClick={() => {
                    filter.categoryId_eq = undefined;
                    setFilter({
                        ...filter
                    })
                }} className={filter.categoryId_eq === undefined ? "on" : ""}><a>#전체</a></li>
                {categoriesMap.TOUR.map(cat =>
                    <li onClick={() => {
                        filter.categoryId_eq = cat._id;
                        setFilter({
                            ...filter
                        })
                    }} key={cat._id} className={cat._id === filter.categoryId_eq ? `on` : ""}><a>#{cat.label}</a></li>
                )}
            </ul>
        </div>
        <div className="alignment">
            <div className="left_div"><span>총 <strong>{autoComma(pageInfo.totalCount)}</strong>개</span></div>
            <div className="right_div">
                <SortSelect onChange={setSort} sort={sort} />
                <ViewCount value={viewCount} onChange={setViewCount} />
            </div>
        </div>
        <ul className="list_ul line4">
            {
                isEmpty(items) && <NoData />
            }
            {items.map((item, i) =>
                <Goods key={item._id} item={item} />
            )}
        </ul>
    </div>;
};
