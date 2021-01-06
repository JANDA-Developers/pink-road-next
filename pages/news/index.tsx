import React, { useState } from 'react';
import { PhotoNewsView } from 'components/news/PhotoView';
import SubTopNav from 'layout/components/SubTop';
import { LineNewsView } from '../../components/news/LineView';
import { useNewsList } from "hook/useNews"
import { NEWS_TYPE } from '../../types/api';
import { getQueryIndex } from '../../utils/page';
import BoardList from '../../components/board/List';
import { useRouter } from 'next/router';

interface IProp {
}

export const News: React.FC<IProp> = () => {
    const [view, setView] = useState<"line" | "gal">("line");
    const { setSort, sort, filter, setPage, setFilter, pageInfo, viewCount, setViewCount, items: news } = useNewsList();
    const { totalCount } = pageInfo;
    const router = useRouter();
    const type = filter?.type_eq;

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
            setPage={setPage}
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
    </div>
};

export default News;