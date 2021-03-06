import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import SubTopNav from "layout/components/SubTop";
import { ProductPhotoBlock } from "../../components/list/ProductPhoto";
import BoardList from "../../components/board/List";
import { ProductListBlock } from "../../components/list/ProductList";
import { useProductGroupList } from "../../hook/useProduct";
import { getTypeFilterByUrl, checkIsExp } from "../../utils/product";
import { getStaticPageInfo, Ipage } from "../../utils/page";
import pageInfoDefault from "info/tourList.json";
import { usePageEdit } from "../../hook/usePageEdit";
import { PageEditor } from "../../components/common/PageEditer";
import { categoryList_CategoryList_data } from "../../types/api";
import { AppContext } from "../_app";
import Link from "next/link";
import { getFromUrl } from "../../utils/url";
import { Change } from "../../components/loadingList/LoadingList";

export const getStaticProps = getStaticPageInfo("tourList");
export const TourList: React.FC<Ipage> = (_pageInfo) => {
    const isExp = checkIsExp();
    const catId = getFromUrl("catId");
    const pageTools = usePageEdit(_pageInfo, pageInfoDefault);
    const { initialFilter: urlInitialFilter } = getTypeFilterByUrl(isExp);
    const { categoriesMap, isParterNonB, isParterB, isManager } =
        useContext(AppContext);
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
        setPage,
        getLoading,
    } = useProductGroupList({
        initialFilter: {
            ...urlInitialFilter,
            isDisplay_eq: true,
            categoryId_eq: catId || undefined,
        },
    });
    const { totalCount } = pageInfo;

    const router = useRouter();

    const handleWrite = () => {
        router.push("/tour/write");
    };

    const handleCatFilter = (catId?: string) => () => {
        setFilter({
            ...filter,
            categoryId_eq: catId,
        });
    };

    const checkCatOn = (cat?: categoryList_CategoryList_data) =>
        cat?._id === filter.categoryId_eq ? "on" : "";

    const subTopInfo = {
        imgKey: isExp ? "exp_subTop_img" : "subTop_img",
        titleKey: isExp ? "exp_subTop_title" : "subTop_title",
        descKey: isExp ? "exp_subTop_desc" : "subTop_desc",
    };

    const cats = isExp ? categoriesMap.EXPERIENCE : categoriesMap.TOUR;

    return (
        <div>
            <SubTopNav {...subTopInfo} pageTools={pageTools}>
                <li className="homedeps1">{isExp ? "Experience" : "Tour"}</li>
                <li className="homedeps2">
                    <Link href="/tour/list">
                        <a>{isExp ? "체험목록" : "투어목록"}</a>
                    </Link>
                </li>
            </SubTopNav>
            <PageEditor pageTools={pageTools} />
            <Change change={!getLoading}>
                <div className="tour_box deal_list">
                    <BoardList
                        pageInfo={pageInfo}
                        totalCount={totalCount}
                        Categories={
                            <div className="BoardCategories search">
                                <ul className="BoardCategories__ul">
                                    <li
                                        onClick={handleCatFilter(undefined)}
                                        className={
                                            "BoardCategories__li " +
                                            checkCatOn(undefined)
                                        }
                                    >
                                        <a>전체보기</a>
                                    </li>
                                    {cats.map((cat) => (
                                        <li
                                            onClick={handleCatFilter(cat._id)}
                                            key={cat._id}
                                            className={
                                                "BoardCategories__li " +
                                                checkCatOn(cat)
                                            }
                                        >
                                            <a>{cat.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        }
                        setView={setView}
                        setSort={setSort}
                        view={view}
                        setViewCount={setViewCount}
                        sort={sort}
                        setPage={setPage}
                        viewCount={viewCount}
                    >
                        {view === "line" && (
                            <div className=" st03 selectViewList">
                                <div className="tbody">
                                    <ul className="list_ul st04">
                                        {items.map((item, i) => (
                                            <ProductListBlock
                                                product={item.product}
                                                key={item.product._id}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                        {view === "gal" && (
                            <ul className="list_ul line4">
                                {items.map((item, i) => (
                                    <ProductPhotoBlock
                                        key={item.product._id}
                                        item={item.product}
                                    />
                                ))}
                            </ul>
                        )}
                        <div className="fin">
                            <div className="left_div"></div>
                            <div className="right_div">
                                {(isParterB || isParterNonB || isManager) && (
                                    <Link href="/tour/write">
                                        <a className="btn medium pink_font">
                                            상품 생성하기
                                        </a>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </BoardList>
                </div>
            </Change>
        </div>
    );
};

export default TourList;
