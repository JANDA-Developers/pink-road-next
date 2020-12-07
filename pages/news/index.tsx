import { Paginater } from 'components/common/Paginator';
import SearchMini from 'components/common/SearchMini';
import SortSelect from 'components/common/SortMethod';
import { ViewCount } from 'components/common/ViewCount';
import { PhotoNewsView } from 'components/news/PhotoView';
import SubTopNav from 'layout/components/SubTop';
import React, { useEffect, useState } from 'react';
import { LineNewsView } from '../../components/news/LineView';
import { useNewsList, IUseNewsList } from "hook/useNews"
import { getFromUrl } from '../../utils/url';
import { NEWS_TYPE } from '../../types/api';
import { autoComma } from '../../utils/formatter';
import { getQueryIndex } from '../../utils/page';
import { ViewSelect } from '../../components/common/ViewSelect';
import BoardList from '../../components/board/List';
import { useRouter } from 'next/router';


interface IProp {
    context: INewsContext
}

export const News: React.FC<IProp> = ({ context }) => {
    const [view, setView] = useState<"line" | "gal">("line");
    const { setSort, sort, filter, setFilter, pageInfo, viewCount, setViewCount, items: news } = context;
    const { totalCount } = pageInfo;
    const router = useRouter();
    const type = filter.type_eq;

    const gotoWrite = () => {
        router.push("news/write")
    }

    const typeOn = (_type: NEWS_TYPE) => {
        return type === _type ? "on" : ""
    }

    const handleType = (type: NEWS_TYPE) => () => {
        setFilter({
            type_eq: type
        })
    }

    return <div>
        <SubTopNav title="언론보도" desc="업데이트되는 최신 정보를 확인하세요." >
            <li className="homedeps1"><a href="../sub/experience_main.html">Experience</a></li>
            <li className="homedeps2"><a href="../sub/experience_list.html">상품리스트</a></li>
        </SubTopNav>
        <BoardList
            Categories={
                <div id="sub_tap_nav" className="subtop_nav">
                    <ul>
                        <li className={typeOn(NEWS_TYPE.TRAVEL)}><a onClick={handleType(NEWS_TYPE.TRAVEL)}>여행이야기</a></li>
                        <li className={typeOn(NEWS_TYPE.CULTURE)}><a onClick={handleType(NEWS_TYPE.CULTURE)}>문화이야기</a></li>
                        <li className={typeOn(NEWS_TYPE.MEDIA)}><a onClick={handleType(NEWS_TYPE.MEDIA)} >언론보도</a></li>
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
            onWrite={gotoWrite}
            pageInfo={pageInfo}
            addBtnLabel="뉴스 등록하기"
        >
            {view === "gal" && <div className="tourstory_box  betatest">
                <div className="board_list st02">
                    <ul className="boardlist_ul line3">
                        {news.map((n) =>
                            <PhotoNewsView key={n._id} news={n} />
                        )}
                    </ul>
                </div>
            </div>}
            {view === "line" && <div className="board_list st03   betatest">
                <div className="tbody">
                    <ul>
                        {news.map((n, index) =>
                            <LineNewsView news={n} index={getQueryIndex(index, pageInfo)} key={n._id} />
                        )}
                    </ul>
                </div>
            </div>}
        </BoardList>
        {/* <div className="w1200 board_box news_box">
            <div>

                <div className="alignment">
                    <div className="left_div"><span className="infotxt">총 <strong>{autoComma(totalCount)}</strong>개</span></div>
                    <div className="right_div">
                        <SortSelect onChange={setSort} sort={sort} />
                        <ViewCount value={viewCount} onChange={setViewCount} />
                        <ViewSelect select={view} onChange={setView} />
                    </div>
                </div>

                <Paginater pageInfo={pageInfo} />
                <div className="tl list_bottom">
                    <div className="btn_footer">
                        <span className="xet_btn medium gray">상품 등록하기</span>
                    </div>
                    <SearchMini onSubmit={(value) => {
                        setFilter({
                            title_contains: value ? value : undefined
                        })
                    }} />
                </div>
            </div>
        </div> */}
    </div>
};

interface INewsContext extends IUseNewsList { }

const NewsWrap = () => {
    const initType = getFromUrl("type")?.toUpperCase() || NEWS_TYPE.MEDIA;
    const newListHook = useNewsList({
        initialFilter: {
            type_eq: initType
        }
    })

    useEffect(() => {
        newListHook.setFilter({
            type_eq: initType
        })

    }, [initType])


    const context: INewsContext = { ...newListHook };
    return <News context={context} />

}

export default NewsWrap;