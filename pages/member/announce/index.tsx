import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { getStaticPageInfo, Ipage } from "../../../utils/page";
import { usePageEdit } from "../../../hook/usePageEdit";
import defaultPageInfo from "../../../info/announce.json";
import SubTopNav from "../../../layout/components/SubTop";
import { MemberTopNav } from "../../../components/topNav/MemberTopNav";
import { useAnnounceList } from "../../../hook/useAnnounce";
import { announceTypeKR } from "../../../utils/enumToKr";
import { yyyymmddHHmm } from "../../../utils/yyyymmdd";
import { NewBadge } from "../../../components/newBadge/NewBadge";
import { Paginater } from "../../../components/common/Paginator";
import { useCustomCount } from "../../../hook/useCount";
import { SingleSortSelect } from "../../../components/common/SortSelect";
import { ViewCount } from "../../../components/common/ViewCount";
import SearchMini from "../../../components/common/SearchMini";
import { useSingleSort } from "../../../hook/useSort";
import {
  announceList_AnnounceList_data,
  _AnnounceSort,
} from "../../../types/api";
import { useRouter } from "next/router";
import { AppContext } from "../../_app";
import { AnnotationBadge } from "../../../components/Status/StatusBadge";
import { Change } from "../../../components/loadingList/LoadingList";
import { PageEditor } from "../../../components/common/PageEditer";
import dayjs from "dayjs";

export const getStaticProps = getStaticPageInfo("announce");
export const Announce: React.FC<Ipage> = (page) => {
  const { isManager } = useContext(AppContext);
  const pageTools = usePageEdit(page, defaultPageInfo);
  const {
    items,
    pageInfo,
    setPage,
    filter,
    setFilter,
    sort,
    setSort,
    viewCount,
    setViewCount,
    getLoading,
  } = useAnnounceList({
    fixingFilter: {
      isOpen_eq: isManager ? undefined : true,
    },
  });
  const singleSortHook = useSingleSort(sort, setSort, [
    _AnnounceSort.isNotice_desc,
  ]);
  const router = useRouter();

  const doSearch = (search: string) => {
    filter.title_contains = search;
    setFilter({ ...filter });
  };
  const toWrite = () => {
    router.push("/member/announce/write/");
  };

  const toView = (item: announceList_AnnounceList_data) => () => {
    const itemId = item._id;
    router.push("/member/announce/view/" + itemId);
  };

  return (
    <div>
      <SubTopNav pageTools={pageTools}>
        <li className="homedeps1">고객센터</li>
        <li className="homedeps2">
          <Link href="/member/announce">
            <a>공지사항</a>
          </Link>
        </li>
      </SubTopNav>
      <PageEditor pageTools={pageTools} />
      <div className="announce_box w1200">
        <MemberTopNav />
        <div className="board_box">
          <h4>공지사항</h4>
          <div className="alignment">
            <div className="left_div">
              {/* <span className="infotxt">총 <strong>{pageInfo.totalCount}</strong>개</span> */}
            </div>
            <div className="right_div">
              <SingleSortSelect {...singleSortHook} />
              <ViewCount value={viewCount} onChange={setViewCount} />
            </div>
          </div>

          <div className="board_list st01">
            <div className="thead">
              <div className="td01">No.</div>
              <div className="td02">유형</div>
              <div className="td03">제목</div>
              <div className="td04">작성일</div>
            </div>
            <div className="tbody">
              <Change change={!getLoading}>
                <ul>
                  {items.map((item, i) => (
                    <li
                      onClick={toView(item)}
                      key={item._id}
                      className="fix__top"
                    >
                      <div className="td01">{item.no}</div>
                      <div className="td02">
                        <AnnotationBadge type={item.type} />
                      </div>
                      <div className="td03">
                        <i className="icon__fix"></i>
                        {item.title} {!item.isOpen && "[비공개(관리자노출)]"}
                        <NewBadge createdAt={item.createdAt} />
                      </div>
                      <div className="td04">
                        {dayjs(item.createdAt).format("YYYY년MM월DD일")}
                      </div>
                    </li>
                  ))}
                  {items.map((item, i) => (
                    <li onClick={toView(item)} key={item._id}>
                      <div className="td01">{item.no}</div>
                      <div className="td02">
                        <AnnotationBadge type={item.type} />
                      </div>
                      <div className="td03">
                        <i className="icon__fix"></i>
                        {item.title} {!item.isOpen && "[비공개(관리자노출)]"}
                        <NewBadge createdAt={item.createdAt} />
                      </div>
                      <div className="td04">
                        {dayjs(item.createdAt).format("YYYY년MM월DD일")}
                      </div>
                    </li>
                  ))}
                </ul>
              </Change>
            </div>
          </div>
          <Paginater pageInfo={pageInfo} setPage={setPage} />

          <div className="tl list_bottom">
            <button
              onClick={toWrite}
              type="submit"
              className="btn medium footer pointcolor"
            >
              글쓰기
            </button>
            {/* {isManager && <div className="btn_footer"></div>} */}
            <SearchMini onSubmit={doSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announce;
