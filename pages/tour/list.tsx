import React, { useState } from 'react';
import { useRouter } from 'next/router';
import SubTopNav from 'layout/components/SubTop';
import { ProductPhotoBlock } from '../../components/list/ProductPhoto';
import BoardList from '../../components/board/List';
import { ProductListBlock } from '../../components/list/ProductList';
import { useProductList } from '../../hook/useProduct';
import { getTypeFilterByUrl, checkIsExp } from '../../utils/product';
import { useCategoryList } from '../../hook/useCategory';
import { getStaticPageInfo } from '../../utils/page';
import pageInfoDefault from "info/tourList.json"
interface IProp { }

export const getStaticProps = getStaticPageInfo("tourList", pageInfoDefault)
export const TourList: React.FC<IProp> = () => {
    const isExp = checkIsExp()
    const { initialFilter } = getTypeFilterByUrl(isExp);
    const { data: cats = [] } = useCategoryList();
    const [view, setView] = useState<"line" | "gal">("line");
    const {
        items,
        pageInfo,
        setFilter,
        setSort,
        sort,
        filter,
        viewCount,
        setViewCount,
        setPage
    } = useProductList({ initialFilter });
    const { totalCount } = pageInfo;

    const router = useRouter();

    const handleWrite = () => {
        router.push("/tour/write")
    }

    const handleCatFilter = (catId: string) => () => {
        setFilter({
            ...filter,
            categoryId_eq: catId
        })
    }

    return <div>
        <SubTopNav title={isExp ? "Tour" : "Exp"} desc={"지금 투어를 떠나세요~!~~!!!!!"} />
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
                setPage={setPage}
                viewCount={viewCount}
            >
                {view === "line" &&
                    <div className=" st03 selectViewList">
                        <div className="tbody">
                            <ul className="list_ul  st03">
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

};

export default TourList;