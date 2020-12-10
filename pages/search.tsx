import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Paginater } from '../components/common/Paginator';
import { DayPickerModal } from '../components/dayPickerModal/DayPickerModal';
import { ProductPhotoBlock } from '../components/list/ProductPhoto';
import { IuseProductList, useProductList } from '../hook/useProduct';
import { ProductType } from '../types/api';
import isEmpty from '../utils/isEmpty';
import dayjs from "dayjs";
import { filterToRange, rangeToFilter } from '../utils/filter';
import { ProductListBlock } from '../components/list/ProductList';
import { ViewCount } from '../components/common/ViewCount';
<<<<<<< Updated upstream
import SortSelect from '../components/common/SortMethod';
import { closeModal, openModal } from '../utils/popUp';
import SubTopNav from '../layout/components/SubTop';
import { ViewSelect } from '../components/common/ViewSelect';
import { getFromUrl } from '../utils/url';
import { integratedProductSearch } from '../utils/genFilter';
import { whenEnter } from '../utils/eventValueExtracter';
=======
import SortSelect from '../components/common/SortSelect';
>>>>>>> Stashed changes

interface IProp {
    context: ISearchContext
    defaultSearch: string
}

export const Search: React.FC<IProp> = ({ context, defaultSearch }) => {
    const { items: products, setPage, filter, getLoading, pageInfo, setFilter, sort, setSort, viewCount, setViewCount } = context;
    const [view, setView] = useState<"line" | "gal">("line");
    const [search, setSearch] = useState(defaultSearch);
    const { totalCount } = pageInfo;

    const onClickDistrict = (district?: string) => () => {
        setFilter({
            address_contains: district
        })
    }

    const districtOn = (district?: string) => {
        return filter.address_contains === district ? "on" : "";
    }

    const handleTypeFilter = (type?: ProductType) => () => {
        setFilter({
            type_eq: type
        })
    }

    const typeOn = (type?: ProductType) => {
        return filter.type_eq === type ? "on" : "";
    }

    const reset = () => {
        setFilter({});
    }

    const openDayPicker = () => {
        alert("?");
        openModal("#dayPickerModal")()
    }

    const doSearch = () => {
        setFilter(integratedProductSearch(search, filter))
    }


    const filterStart = filter.startDate_gte ? dayjs(filter.startDate_gte).format("YYYY.MM.DD") : "";
    const filterEnd = filter.startDate_lte ? dayjs(filter.startDate_lte).format("YYYY.MM.DD") : "";


    const noProduct = isEmpty(products);
    return <div>
        <SubTopNav subTopBg={'/img/pr_img_05.jpg'} title="통합검색" desc="지금 여행을 떠나세요~!~~!!!!!" >
            <li className="homedeps1">Member</li>
            <li className="homedeps2">
                <a href="/">통합검색</a>
            </li>
        </SubTopNav>

        <div className="search_in w1200">
            <div className="con_top">
                <h4>상세검색</h4>
                <div className="search_box">
                    <div className="jul0">
                        <span onClick={reset}>검색조건 초기화</span>
                    </div>
                    <div className="jul2">
                        <div className="title">유형</div>
                        <div className="in">
                            <span className={`check ${typeOn()}`}>ALL</span>
                            <span onClick={handleTypeFilter(ProductType.TOUR)} className={`check ${typeOn(ProductType.TOUR)}`}>여행</span>
                            <span onClick={handleTypeFilter(ProductType.EXPERIENCE)} className={`check ${typeOn(ProductType.EXPERIENCE)}`}>체험</span>
                        </div>
                    </div>
                    <div className="jul3">
                        <div className="title">지역</div>
                        <div className="in">
                            <span onClick={onClickDistrict()} className={`check ${districtOn()}`}>전국</span>
                            <span onClick={onClickDistrict('부산')} className={`check ${districtOn('부산')}`}>부산</span>
                            <span onClick={onClickDistrict('제주')} className={`check ${districtOn('제주')}`}>제주</span>
                            <span onClick={onClickDistrict('경기')} className={`check ${districtOn('경기')}`}>경기도</span>
                            <span onClick={onClickDistrict('강원')} className={`check ${districtOn('강원')}`}>강원도</span>
                            <span onClick={onClickDistrict('충청')} className={`check ${districtOn('충청')}`}>충청도</span>
                            <span onClick={onClickDistrict('전라')} className={`check ${districtOn('전라')}`}>전라도</span>
                            <span onClick={onClickDistrict('경상')} className={`check ${districtOn('경상')}`}>경상도</span>
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
                    <div className="jul1">
                        <div>
                            <input onKeyPress={whenEnter(doSearch)} onChange={(e) => {
                                setSearch(e.currentTarget.value);
                            }} value={search} type="text" placeholder="검색 내용을 입력해주세요." />
                            <div onClick={doSearch} className="svg_img">
                                <img src="/img/svg/search_icon.svg" alt="검색아이콘" />
                                <button />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="con_bottom">
                {isEmpty(products) &&
                    <div className="alignment2">
                        <div className="left_div">총 <strong>{totalCount}</strong>건의 검색결과가 있습니다.</div>
                    </div>
                }

                <div id="ProductViewer" className="con_box">
                    <div className="alignment">
                        <div className="left_div">
                            <h5>여행상품<strong>{totalCount}</strong></h5>
                        </div>
                        <div className="right_div">
                            <SortSelect onChange={setSort} sort={sort} />
                            <ViewCount value={viewCount} onChange={(val) => {
                                setViewCount(val);
                            }} />
                            <ViewSelect select={view} onChange={setView} />
                        </div>
                    </div>

                    {/*검색결과가 없을때*/}
                    {noProduct && <div className="no_search">
                        <i className="jandaicon-info3" />
                        <div>검색결과 없음</div>
                    </div>}
                    {/*리스트로 보기*/}
                    {view === "line" && <div className="list selectViewList">
                        <ul className="list_ul">
                            {products.map(product =>
                                <ProductListBlock key={product._id} product={product} />
                            )}
                        </ul>
                    </div>}
                    {/*이미지로 보기*/}
                    {view === "gal" &&
                        <div className="list selectViewImg">
                            <ul className="list_ul line3">
                                {products.map(product =>
                                    <ProductPhotoBlock key={product._id} item={product} />
                                )}
                            </ul>
                        </div>}
                    <Paginater setPage={setPage} pageInfo={pageInfo} />
                </div>
            </div>
        </div>
        <DayPickerModal defaultRange={filterToRange(filter, "startDate")} onSubmit={(range) => {
            closeModal("#dayPickerModal")()
            const data = rangeToFilter(range)
            setFilter({
                ...filter,
                ...data,
            })
        }} />
    </div>
}


interface ISearchContext extends IuseProductList { }

const SearchWrap = () => {
    const defaultSearch = getFromUrl("search") || "";
    const productListHook = useProductList({
        initialFilter: integratedProductSearch(defaultSearch)
    })

    return <Search defaultSearch={defaultSearch} context={productListHook} />
}



export default SearchWrap