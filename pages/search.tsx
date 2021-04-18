import React, { useContext, useState } from 'react';
import { Paginater } from '../components/common/Paginator';
import { DayPickerModal } from '../components/dayPickerModal/DayPickerModal';
import { ProductPhotoBlock } from '../components/list/ProductPhoto';
import { openListFilter, useProductList } from '../hook/useProduct';
import isEmpty from '../utils/isEmpty';
import dayjs from "dayjs";
import { filterToRange, rangeToFilter } from '../utils/filter';
import { ProductListBlock } from '../components/list/ProductList';
import { ViewCount } from '../components/common/ViewCount';
import { closeModal, openModal } from '../utils/popUp';
import { ViewSelect } from '../components/common/ViewSelect';
import SubTopNav from '../layout/components/SubTop';
import { integratedProductSearch } from '../utils/genFilter';
import SortSelect from '../components/common/SortMethod';
import { ProductType } from '../types/api';
import { whenEnter } from '../utils/eventValueExtracter';
import { getFromUrl, getAllFromUrl } from '../utils/url';
import { getStaticPageInfo, Ipage } from '../utils/page';
import { usePageEdit } from '../hook/usePageEdit';
import pageInfoDefault from "info/search.json";
import { PageEditor } from '../components/common/PageEditer';
import { AppContext } from './_app';
import { useBoardList } from '../hook/useMyBoardList';
import { generateClientPaging } from '../utils/generateClientPaging';
import { BoardListBlock } from '../components/list/BoardListBlock';
import Link from 'next/link';
import { SearchList } from '../components/searchList/SearchList';
import { useQnaList } from '../hook/useQna';
import { useRouter } from 'next/router';
import { usePortfolioList } from '../hook/usePortfolio';
import { useQuestionList } from '../hook/useQuestion';

type TSearchParam = {
    keyward?: string;
    title?: string;
}

export const generateSearchLink = (param: TSearchParam) => {
    let link = `/search`

    const attach = (key: string, value: string) => {
        if (!link.includes("?")) {
            link = link + "?" + key + "=" + value
            return;
        }
        if (!link.endsWith("&")) {
            link = link + "&" + key + "=" + value
        }
    }

    for (let key in param) {
        // @ts-ignore
        const val = param[key];
        attach(key, val);
    }

    return link;
}



interface IProp { }

type TboardTapType = "board" | "product";

export const getStaticProps = getStaticPageInfo("search");
export const Search: React.FC<Ipage> = (_pageInfo) => {
    const [boardTapType, setBoardTapType] = useState<TboardTapType>("board")
    const isProdView = boardTapType === "product";
    const [view, setView] = useState<"gal" | "line">("line");
    const router = useRouter()

    const pageTools = usePageEdit(_pageInfo, pageInfoDefault);
    const all = getAllFromUrl<TSearchParam>()
    const { keyward, title } = all;
    const defaultSearch = getFromUrl("search") || keyward || title;

    const [,] = useState();

    const fixingFilter = {
        ...openListFilter,
    }

    const urlSearchFilter = integratedProductSearch(defaultSearch);

    const [boardFilter, setBoardFilter] = useState(urlSearchFilter);
    const initialFilter = boardFilter;

    const [search, setSearch] = useState(defaultSearch);
    const productListHook = useProductList({ fixingFilter, initialFilter })
    const { items: products, setPage, filter, getLoading, pageInfo, setFilter, sort, setSort, viewCount, setViewCount, setOR } = productListHook;
    const { categoriesMap } = useContext(AppContext);
    const { totalCount: totalProdCount } = pageInfo;

    const onClickDistrict = (regionLabel?: string) => () => {
        setFilter({
            ...filter,
            regionLabel_eq: regionLabel
        })
    }

    const districtOn = (region?: string) => {
        return filter.regionLabel_eq === region ? "on" : "";
    }

    const handleTypeFilter = (type?: ProductType) => () => {
        setFilter({
            ...filter,
            type_eq: type
        })
    }

    const typeOn = (type?: ProductType) => {
        return filter.type_eq === type ? "on" : "";
    }

    const reset = () => {
        setFilter({});
        setSearch("");
    }

    const openDayPicker = () => {
        openModal("#dayPickerModal")()
    }

    const doSearch = () => {
        const _filter = integratedProductSearch(search, filter);
        const boardfilter = integratedProductSearch(search);
        setBoardFilter(boardfilter)
        setFilter(_filter)
    }

    const filterStart = filter.startDate_gte ? dayjs(filter.startDate_gte).format("YYYY.MM.DD") : "";
    const filterEnd = filter.startDate_lte ? dayjs(filter.startDate_lte).format("YYYY.MM.DD") : "";
    const noSearch = filter.title_contains === "";
    const filteredProducts = noSearch ? [] : products;
    const noProduct = isEmpty(filteredProducts);

    const handleBoardType = (type: TboardTapType) => () => {
        setBoardTapType(type);
    }

    const checkOnType = (type: TboardTapType) => boardTapType === type ? "on" : "";

    const getTotalCount = () => {
        return totalProdCount
    }


    const listFilters = [{ initialFilter, fixingFilter }, { variables: { pageInput: { page: 1, cntPerPage: 5 }, filter: { ...initialFilter } } }] as any;
    return <div>
        <SubTopNav pageTools={pageTools} >
            <li className="homedeps1">
                <Link href="/search" >
                    <a >통합검색</a>
                </Link>
            </li>
        </SubTopNav>
        <PageEditor pageTools={pageTools} />
        <div className="search_in w1200">
            <div className="con_top">
                {/* <h4>상세검색</h4> */}
                <div className="searchTap">
                    <span onClick={handleBoardType("board")} className={`searchTap__type ${checkOnType("board")}`}>통합검색</span>
                    <span onClick={handleBoardType("product")} className={`searchTap__type ${checkOnType("product")}`}>상품검색</span>
                </div>
                <div className="search_box">

                    <div className="jul0">
                        <span onClick={reset}>검색조건 초기화</span>
                    </div>
                    {isProdView &&
                        <div>
                            <div className="jul2">
                                <div className="title">유형</div>
                                <div className="in">
                                    <span onClick={handleTypeFilter(undefined)} className={`check ${typeOn(undefined)}`}>전체상품</span>
                                    <span onClick={handleTypeFilter(ProductType.TOUR)} className={`check ${typeOn(ProductType.TOUR)}`}>여행상품</span>
                                    <span onClick={handleTypeFilter(ProductType.EXPERIENCE)} className={`check ${typeOn(ProductType.EXPERIENCE)}`}>체험상품</span>
                                </div>
                            </div>
                            <div className="jul3">
                                <div className="title">지역</div>
                                <div className="in">
                                    <span onClick={onClickDistrict()} className={`check ${districtOn()}`}>전국</span>
                                    {categoriesMap.REGION.map(region =>
                                        <span key={region._id} onClick={onClickDistrict(region.label)} className={`check ${districtOn(region.label)}`}>{region.label}</span>
                                    )}
                                </div>
                            </div>
                            <div className="jul4">
                                <div className="title">날짜</div>
                                <div className="in">
                                    <div className="inf">
                                        <input value={filterStart} onFocus={openDayPicker} type="text" className="day" />
                                        <span onClick={openDayPicker} className="calendar">
                                            <img src="/img/svg/CalendarIcon.svg" className="svg_calendar" />
                                        </span>
                                    </div>
                                    <div className="ovj">~</div>
                                    <div className="inf">
                                        <input value={filterEnd} onFocus={openDayPicker} type="text" className="day" />
                                        <span onClick={openDayPicker} className="calendar">
                                            <img src="/img/svg/CalendarIcon.svg" className="svg_calendar" />
                                            <button />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="jul1">
                        <div className="srearch__input search_div">
                            <input onKeyPress={whenEnter(doSearch)} onChange={(e) => {
                                setSearch(e.currentTarget.value);
                            }} value={search} type="text" placeholder="검색 내용을 입력해주세요." />
                            <div onClick={doSearch} className="svg_img">
                                <img src="/img/svg/search_icon.svg" alt="search icon" />
                                <button />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="con_bottom">

                {!isProdView && <div>
                    {/* 여행상품만 노출 */}
                    <SearchList
                        listQueryVariables={listFilters}
                        listQuery={useProductList as any}
                        title="Product"
                        onClickViewMore={() => {
                            router.push("tour/list")
                        }}
                    />

                    {/* QnA만 노출 */}
                    <SearchList
                        title="QnA"
                        onClickViewMore={() => {
                            router.push("member/qna")
                        }}
                        listQueryVariables={listFilters}

                        listQuery={useQnaList as any}
                    />

                    {/* News만 노출  */}
                    <SearchList
                        title="News"
                        onClickViewMore={() => {
                            router.push("member/qna")
                        }}
                        listQueryVariables={listFilters}

                        listQuery={useQnaList as any}
                    />

                    {/* Portfolio만 노출 */}
                    <SearchList
                        title="Portfolio"
                        onClickViewMore={() => {
                            router.push("portfolio")
                        }}
                        listQueryVariables={listFilters}

                        listQuery={usePortfolioList as any}
                    />

                    {/* Question만 노출 */}
                    <SearchList
                        listQueryVariables={listFilters}

                        title="Question"
                        onClickViewMore={() => {
                            router.push("member/question")
                        }}
                        listQuery={useQuestionList as any}
                    />
                </div>
                }

                {!isEmpty(filteredProducts) && isProdView &&
                    <div className="alignment2">
                        <div className="left_div">총 <strong>{getTotalCount()}</strong>건의 검색결과가 있습니다.</div>
                    </div>
                }

                {/* Product만 노출 */}
                {isProdView && <div id="ProductViewer" className="con_box">
                    <div className="alignment">
                        <div className="left_div">
                            <h5>Product<strong>{getTotalCount()}</strong></h5>
                        </div>
                        <div className="right_div">
                            <SortSelect onChange={setSort} sort={sort} />
                            <ViewCount value={viewCount} onChange={setViewCount} />
                            <ViewSelect select={view} onChange={setView} />
                        </div>
                    </div>
                    {isProdView && <div>

                        {/*검색결과가 없을때*/}
                        {noProduct && <div className="no_search">
                            <i className="jandaicon-info3" />
                            <div>검색결과 없음</div>
                        </div>}
                        {/*리스트로 보기*/}
                        {view === "line" && <div className="list selectViewList">
                            <ul className="list_ul">
                                {filteredProducts.map(product =>
                                    <ProductListBlock key={product._id} product={product} />
                                )}
                            </ul>
                        </div>}
                        {/*이미지로 보기*/}
                        {view === "gal" &&
                            <div className="list selectViewImg">
                                <ul className="list_ul line3">
                                    {filteredProducts.map(product =>
                                        <ProductPhotoBlock key={product._id} item={product} />
                                    )}
                                </ul>
                            </div>}
                    </div>}
                    {/*   <Paginater setPage={setBoardPage} pageInfo={paging} />
                    <Paginater setPage={setPage} pageInfo={pageInfo} /> */}
                    <div className="Allsearch__plusBtn">
                        Product 더보기 <i className="jandaicon-arr4-right plus "></i>
                    </div>
                </div>}
            </div>
        </div>
        <DayPickerModal defaultRange={filterToRange(filter, "startDate")} onSubmit={(range) => {
            closeModal("#dayPickerModal")()
            const data = rangeToFilter(range, "startDate")
            setFilter({
                ...filter,
                ...data,
            })
        }} >
            * 출발날짜 기준 검색
        </DayPickerModal>
    </div>
}


export default Search;