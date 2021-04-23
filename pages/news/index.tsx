import React, { useContext, useState } from "react";
import { PhotoNewsView } from "components/news/PhotoView";
import SubTopNav from "layout/components/SubTop";
import { LineNewsView } from "../../components/news/LineView";
import { useNewsList } from "hook/useNews";
import { NEWS_TYPE } from "../../types/api";
import { getQueryIndex, getStaticPageInfo, Ipage } from "../../utils/page";
import BoardList from "../../components/board/List";
import pageInfoDefault from "info/news.json";
import { useRouter } from "next/router";
import { usePageEdit } from "../../hook/usePageEdit";
import { PageEditor } from "../../components/common/PageEditer";
import { getFromUrl } from "../../utils/url";
import { AppContext } from "../_app";
import { newTypeToKr } from "../../utils/enumToKr";

export const getStaticProps = getStaticPageInfo("news");
export const News: React.FC<Ipage> = (_pageInfo) => {
  const urlType = getFromUrl("type") as NEWS_TYPE;
  const [view, setView] = useState<"line" | "gal">("line");
  const { isManager } = useContext(AppContext);
  const pageTools = usePageEdit(_pageInfo, pageInfoDefault);
  const {
    setSort,
    sort,
    filter,
    setPage,
    setFilter,
    pageInfo,
    viewCount,
    setViewCount,
    items: news,
  } = useNewsList({
    initialFilter: { type_eq: urlType || undefined },
    fixingFilter: {
      isOpen_eq: isManager ? undefined : true,
    },
  });
  const { totalCount } = pageInfo;

  console.log({ totalCount });

  const router = useRouter();
  const type = filter?.type_eq;

  const gotoWrite = () => {
    router.push("news/write");
  };

  const typeOn = (_type: NEWS_TYPE) => {
    return type === _type ? "on" : "";
  };

  const handleType = (type: NEWS_TYPE) => () => {
    router.push(
      {
        pathname: "/news",
        query: { type: type },
      },
      undefined,
      { shallow: true }
    );

    setFilter({
      type_eq: type || undefined,
    });
  };

  return (
    <div className="">
      <SubTopNav pageTools={pageTools}>
        <li className="homedeps1">News</li>
        <li className="homedeps2">
          <a href="/news">{newTypeToKr(type)}</a>
        </li>
      </SubTopNav>
      <PageEditor pageTools={pageTools} />
      <BoardList
        className="board_box news_box"
        setPage={setPage}
        Categories={
          <div id="sub_tap_nav" className="subtop_nav">
            <ul>
              <li className={typeOn(NEWS_TYPE.TRAVEL)}>
                <a onClick={handleType(NEWS_TYPE.TRAVEL)}>여행이야기</a>
              </li>
              <li className={typeOn(NEWS_TYPE.CULTURE)}>
                <a onClick={handleType(NEWS_TYPE.CULTURE)}>문화이야기</a>
              </li>
              <li className={typeOn(NEWS_TYPE.MEDIA)}>
                <a onClick={handleType(NEWS_TYPE.MEDIA)}>언론보도</a>
              </li>
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
        addBtnLabel={isManager ? "글쓰기" : undefined}
      >
        {view === "gal" && (
          <div>
            <div className="board_list st02">
              <ul className="boardlist_ul line3">
                {news.map((n) => (
                  <PhotoNewsView key={n._id} news={n} />
                ))}
              </ul>
            </div>
          </div>
        )}
        {view === "line" && (
          <div className="board_list st03">
            <div className="tbody">
              <ul>
                {news.map((n, index) => (
                  <LineNewsView
                    news={n}
                    index={getQueryIndex(index, pageInfo)}
                    key={n._id}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </BoardList>
    </div>
  );
};

export default News;
