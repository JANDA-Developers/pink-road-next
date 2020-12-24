import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Paginater } from '../../components/common/Paginator';
import { DayPickerModal } from '../../components/dayPickerModal/DayPickerModal';
import { ProductPhotoBlock } from '../../components/list/ProductPhoto';
import { IuseProductList, useProductList } from '../../hook/useProduct';
import { ProductType } from '../../types/api';
import isEmpty from '../../utils/isEmpty';
import dayjs from "dayjs";
import { filterToRange } from '../../utils/filter';
import { ProductListBlock } from '../../components/list/ProductList';
import { ViewCount } from '../../components/common/ViewCount';
import SortSelect from '../../components/common/SortMethod';

interface IProp {
    context: ISearchContext
}

export const Search: React.FC<IProp> = ({ context }) => {
    const { items: products, filter, getLoading, pageInfo, setFilter, sort, setSort, viewCount, setViewCount } = context;
    const [view, setView] = useState<"line" | "gall">("line");
    const router = useRouter();
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

    const noProduct = isEmpty(products);
    return <div>
        <div className="top_visual">
            <div
                className="sub_header sub_bg"
                style={{ backgroundImage: `url(/img/pr_img_05.jpg)` }}
            >
                <div className="w1200">
                    <h2 className="title">통합검색</h2>
                    <p className="text">지금 여행을 떠나세요~!~~!!!!!</p>
                </div>
            </div>
            <div className="header_nav">
                <ul>
                    <li className="home">
                        <a href="/index"></a>
                    </li>
                    <li className="homedeps1">Member</li>
                    <li className="homedeps2">
                        <a href="/">통합검색</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="search_in w1200">
            <div className="con_top">
                <h4>상세검색</h4>
                <div className="search_box">
                    <div className="jul0">
                        <span>검색조건 초기화</span>
                    </div>
                    <div className="jul2">
                        <div className="title">유형</div>
                        <div className="in">
                            <span className={`check ${typeOn()}`}>ALL</span>
                            <span className={`check ${typeOn(ProductType.TOUR)}`}>여행</span>
                            <span className={`check ${typeOn(ProductType.TOUR)}`}>체험</span>
                        </div>
                    </div>
                    <div className="jul3">
                        <div className="title">지역</div>
                        <div className="in">
                            <span onClick={onClickDistrict()} className={`check ${districtOn()}`}>전국</span>
                            <span onClick={onClickDistrict('서울')} className={`check ${districtOn('서울')}`}>서울</span>
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
                                <input type="text" className="day" />
                                <span className="calendar">
                                    <img src="/img/svg/CalendarIcon.svg" className="svg_calendar" />
                                    <button />
                                </span>
                            </div>
                            <div className="ovj">~</div>
                            <div className="inf">
                                <input type="text" className="day" />
                                <span className="calendar">
                                    <img src="/img/svg/CalendarIcon.svg" className="svg_calendar" />
                                    <button />
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="jul1">
                        <div>
                            <input type="text" placeholder="검색 내용을 입력해주세요." />
                            <div className="svg_img">
                                <img src="/img/svg/search_icon.svg" alt="검색아이콘" />
                                <button />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="con_bottom">
                {/*검색시에만 노출*/}
                <div className="alignment2">
                    <div className="left_div">총 <strong>{totalCount}</strong>건의 검색결과가 있습니다.</div>
                </div>

                <div className="con_box">
                    <div className="alignment">
                        <div className="left_div">
                            <h5>여행상품<strong>{totalCount}</strong></h5>
                        </div>
                        <div className="right_div">
                            <SortSelect onChange={setSort} sort={sort} />
                            <ViewCount value={viewCount} onChange={(val) => {
                                setViewCount(val);
                            }} />
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
                    {view === "gall" &&
                        <div className="list selectViewImg">
                            <ul className="list_ul line3">
                                {products.map(product =>
                                    <ProductPhotoBlock key={product._id} item={product} />
                                )}
                            </ul>
                        </div>}
                    <Paginater pageInfo={pageInfo} />
                </div>
            </div>
        </div>
        <DayPickerModal defaultRange={filterToRange(filter, "startDate")} onSubmit={() => { }} />
    </div>
}


interface ISearchContext extends IuseProductList { }

const SearchWrap = () => {
    const productListHook = useProductList()

    return <Search context={productListHook} />
}



export default SearchWrap