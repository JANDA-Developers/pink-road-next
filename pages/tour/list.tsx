import React, { useState } from 'react';
import { useRouter } from 'next/router';
import SubTopNav from 'layout/components/SubTop';
import { ProductPhotoBlock } from '../../components/list/ProductPhoto';
import BoardList from '../../components/board/List';
import { ProductListBlock } from '../../components/list/ProductList';
import { openListFilter, useProductList } from '../../hook/useProduct';
import { getTypeFilterByUrl, checkIsExp } from '../../utils/product';
import { useCategoryList } from '../../hook/useCategory';
import { getStaticPageInfo, Ipage } from '../../utils/page';
import pageInfoDefault from "info/tourList.json"
import { usePageEdit } from '../../hook/usePageEdit';
import { PageEditor } from '../../components/common/PageEditer';
import { categoryList_CategoryList_data } from '../../types/api';
import { getFromUrl } from '../../utils/url';

export const getStaticProps = getStaticPageInfo("tourList")
export const TourList: React.FC<Ipage> = (_pageInfo) => {
    const isExp = checkIsExp();
    const pageTools = usePageEdit(_pageInfo, pageInfoDefault);
    const { initialFilter: urlInitialFilter } = getTypeFilterByUrl(isExp);
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
    } = useProductList({
        initialFilter: {
            ...urlInitialFilter,
            ...openListFilter
        }
    });
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

    const checkCatOn = (cat: categoryList_CategoryList_data) => cat._id === filter.categoryId_eq ? "on" : "";

    const subTopInfo = {
        imgKey: isExp ? "exp_subTop_img" : "subTop_img",
        titleKey: isExp ? "exp_subTop_title" : "subTop_title",
        descKey: isExp ? "exp_subTop_desc" : "subTop_desc"
    }

    return <div>
        <SubTopNav {...subTopInfo} pageTools={pageTools} />
        <PageEditor pageTools={pageTools} />
        <div className="tour_box deal_list">
            <BoardList
                Categories={
                    <div className="BoardCategories search">
                        <ul className="BoardCategories__ul">
                            {cats.map(cat =>
                                <li onClick={handleCatFilter(cat._id)} key={cat._id} className={"BoardCategories__li " + checkCatOn(cat)}><a>{cat.label}</a></li>
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
                    </ul>
                }
            </BoardList>
        </div>
    </div>
};

export default TourList;