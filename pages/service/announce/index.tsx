import React, { useContext } from 'react';
import Link from "next/link";
import { getStaticPageInfo, Ipage } from '../../../utils/page';
import { usePageEdit } from '../../../hook/usePageEdit';
import defaultPageInfo from "../../../info/announce.json"
import SubTopNav from '../../../layout/components/SubTop';
import { MemberTopNav } from '../../../components/topNav/MemberTopNav';
import { useAnnounceList } from '../../../hook/useAnnounce';
import { announceTypeKR } from '../../../utils/enumToKr';
import { yyyymmddHHmm } from '../../../utils/yyyymmdd';
import { NewBadge } from '../../../components/newBadge/NewBadge';
import { Paginater } from '../../../components/common/Paginator';
import { useCustomCount } from '../../../hook/useCount';
import { SingleSortSelect } from '../../../components/common/SortSelect';
import { ViewCount } from '../../../components/common/ViewCount';
import SearchMini from '../../../components/common/SearchMini';
import { useSingleSort } from '../../../hook/useSort';
import { announceList_AnnounceList_data, _AnnounceSort } from '../../../types/api';
import { useRouter } from 'next/router';
import { AppContext } from '../../_app';

export const getStaticProps = getStaticPageInfo("announce");
export const Announce: React.FC<Ipage> = (page) => {
    const { isAdmin, isManager } = useContext(AppContext);
    const pageTools = usePageEdit(page, defaultPageInfo);
    const { items, pageInfo, setPage, filter, setFilter, sort, setSort, viewCount, setViewCount } = useAnnounceList();
    const singleSortHook = useSingleSort(sort, setSort, [_AnnounceSort.isNotice_desc]);
    const router = useRouter();

    const doSearch = (search: string) => {
        filter.title_contains = search;
        setFilter({ ...filter });
    }
    const toWrite = () => {
        router.push("/service/announce/write/")
    }

    const toView = (item: announceList_AnnounceList_data) => () => {
        const itemId = item._id;
        router.push("/service/announce/view/" + itemId)
    }

    return <div>
        <SubTopNav pageTools={pageTools}>
            <li className="homedeps1">Member</li>
            <li className="homedeps2">
                <Link href="/service/announce"><a>공지사항</a></Link>
            </li>
        </SubTopNav>
        <div className="announce_box w1200">
            <MemberTopNav />
            <div>
                <div className="alignment">
                    <div className="left_div">
                        <span className="infotxt">총 <strong>{pageInfo.totalCount}</strong>개</span>
                    </div>
                    <div className="right_div">
                        <SingleSortSelect {...singleSortHook} />
                        <ViewCount value={viewCount} onChange={setViewCount} />
                    </div>
                </div>

                <div className="board_list st01">
                    <div className="tbody">
                        <ul>
                            {items.map(item =>
                                <li onClick={toView(item)} key={item._id}>
                                    <div className="td01">{item.no}</div>
                                    <div className="td02"><span className="ct_01">{announceTypeKR(item.type)}</span></div>
                                    <div className="td03">
                                        {item.title}
                                        <NewBadge createdAt={item.createdAt} />
                                    </div>
                                    <div className="td04">{yyyymmddHHmm(item.createdAt)}</div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <Paginater pageInfo={pageInfo} setPage={setPage} />

                <div className="tl list_bottom">
                    {isManager && <div className="btn_footer">
                        <button onClick={toWrite} type="submit" className="btn medium pointcolor">글쓰기</button>
                    </div>}
                    <SearchMini onSubmit={doSearch} />
                </div>
            </div>
        </div>
    </div >;
};

export default Announce;