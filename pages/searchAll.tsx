import React, { useState } from 'react';
import { Paginater } from '../components/common/Paginator';
import { DayPickerModal } from '../components/dayPickerModal/DayPickerModal';
import { filterToRange, rangeToFilter } from '../utils/filter';
import { closeModal } from '../utils/popUp';
import SubTopNav from '../layout/components/SubTop';
import { whenEnter } from '../utils/eventValueExtracter';
import { getFromUrl } from '../utils/url';
import { getStaticPageInfo, Ipage } from '../utils/page';
import { usePageEdit } from '../hook/usePageEdit';
import pageInfoDefault from "info/searchAll.json";
import { PageEditor } from '../components/common/PageEditer';
import { useBoardList } from '../hook/useMyBoardList';
import { generateClientPaging } from '../utils/generateClientPaging';

type TSearchParam = {
    keyward?: string;
    title?: string;
}
export const generateSearchLink = (param: TSearchParam) => {
    let link = `/search`

    const attach = (key: string, value: string) => {
        if (!link.includes("?")) {
            link = link + "?" + key + "=" + value
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

//전체 보드 리스트 검색... 
//모든 보드를 가져온후
// 여기서 처리

export const getStaticProps = getStaticPageInfo("searchAll");
export const ProductSearch: React.FC<Ipage> = (_pageInfo) => {
    const defaultSearch = getFromUrl("search") || "";
    const [search, setSearch] = useState(defaultSearch);
    const { items, filter, setFilter } = useBoardList({
        initialFilter: {
            isOpen_eq: true
        }
    })
    const pageTools = usePageEdit(_pageInfo, pageInfoDefault);

    // const typeOn = (type?: ProductType) => {
    //     return filter.type_eq === type ? "on" : "";
    // }

    const reset = () => {
        setFilter({
            isOpen_eq: true
        });
    }

    // const openDayPicker = () => {
    //     openModal("#dayPickerModal")()
    // }

    const doSearch = () => {
        setFilter({
            title_contains: search
        })
    }

    const { setPage, paging, slice } = generateClientPaging(items, 10);


    // const filterStart = filter.startDate_gte ? dayjs(filter.startDate_gte).format("YYYY.MM.DD") : "";
    // const filterEnd = filter.startDate_lte ? dayjs(filter.startDate_lte).format("YYYY.MM.DD") : "";


    return <div>
        <SubTopNav pageTools={pageTools} >
            <li className="homedeps1">Member</li>
            <li className="homedeps2">
                <a href="/">상품검색</a>
            </li>
        </SubTopNav>
        <PageEditor pageTools={pageTools} />
        <div className="search_in w1200">
            <div className="con_top">
                <h4>상세검색</h4>
                <div className="search_box">
                    <div className="jul0">
                        <span onClick={reset}>검색조건 초기화</span>
                    </div>
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
                <div id="ProductViewer" className="con_box">
                    {slice.map(item =>
                        <div key={item._id}>
                            {item.thumb && <img src={item.thumb.uri} />}
                            {item.title}
                        </div>
                    )}
                    <Paginater setPage={setPage} pageInfo={paging} />
                </div>
            </div>
        </div>
        <DayPickerModal defaultRange={filterToRange(filter, "startDate")} onSubmit={(range) => {
            closeModal("#dayPickerModal")()
            const data = rangeToFilter(range, "startDate")
            setFilter({
                ...filter,
                ...data,
            })
        }} />
    </div>
}


export default ProductSearch;