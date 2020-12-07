import { IuseProductList, useProductList } from 'hook/useProduct';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import SubTopNav from 'layout/components/SubTop';
import Link from 'next/link';
import { ProductPhotoBlock } from '../../components/list/ProductPhoto';
import { Paginater } from '../../components/common/Paginator';
import SearchMini from '../../components/common/SearchMini';
import SortSelect from '../../components/common/SortMethod';
import { ViewCount } from '../../components/common/ViewCount';
import { ViewSelect } from '../../components/common/ViewSelect';
import { useCategoryList } from '../../hook/useCategory';
import { Fcategory } from '../../types/api';
import { autoComma } from '../../utils/formatter';
import BoardList from '../../components/board/List';
import { ProductListBlock } from '../../components/list/ProductList';

interface IProp {
    context: ITourListWrapContext;
}

export const TourList: React.FC<IProp> = ({ context }) => {
    const [view, setView] = useState<"line" | "gal">("line");
    const { items, pageInfo, setFilter, setSort, sort, filter, viewCount, setViewCount, cats } = context;
    const { totalCount } = pageInfo;

    const router = useRouter();

    const handleWrite = () => {
        router.push("/tour/write")
    }

    const handleCatFilter = (catId: string) => () => {
        setFilter({
            categoryId_eq: catId
        })
    }

    return <div>
        <SubTopNav title="Tour" desc="지금 여행을 떠나세요~!~~!!!!!" />
        <div className="tour_box deal_list">
            <BoardList
                Categories={
                    <div className="search">
                        <ul>
                            {cats.map(cat =>
                                <li onClick={handleCatFilter(cat._id)} key={cat._id} className="on"><a>{cat.label}</a></li>
                            )}
                        </ul>
                    </div>
                }
                setView={setView}
                setSort={setSort}
                totalCount={totalCount}
                view={view}
                setViewCount={setViewCount}
                sort={sort}
                viewCount={viewCount}
            >
                {view === "line" &&
                    <div className="board_list st03  betatest">
                        <div className="tbody">
                            <ul className="lisboard_list st03">
                                {items.map(item =>
                                    <ProductListBlock product={item} key={item._id} />
                                )}
                            </ul>
                        </div>
                    </div>
                }
                {view === "gal" &&
                    <ul className="list_ul line3">
                        {items.map(item =>
                            <ProductPhotoBlock key={item._id} item={item} />
                        )}
                    </ul>}
            </BoardList>
        </div>
    </div>


    //리스트뷰
    // return <BoardList onWrite={handleWrite} FilterSort={
    //     <div>
    //         <SortSelect />
    //     </div>} >
    //     <ul className="list_ul line4">
    //         {items.map(item => (
    //             <li key={item._id}>
    //                 <div className="td01">
    //                     <div className="img" style={{
    //                         backgroundImage: `url(${item.images[0]?.uri})`
    //                     }}>상품이미지</div>
    //                 </div>
    //                 <div className="td02"><span className="ct_01">{item.category?.label}</span></div>
    //                 <div className="td03">{item.title}</div>
    //                 <div className="td04">{dayjs(item.createdAt).format("YYYY.MM.DD")}</div>
    //             </li>
    //         ))}
    //     </ul>
    // </BoardList>
};



interface ITourListWrapContext extends IuseProductList {
    cats: Fcategory[];
}

const TourListWrap: React.FC<IProp> = () => {

    const productContext = useProductList();
    const { items: cats, getLoading } = useCategoryList();


    const context: ITourListWrapContext = {
        ...productContext,
        cats
    }

    return <TourList context={context} />
}

export default TourListWrap;