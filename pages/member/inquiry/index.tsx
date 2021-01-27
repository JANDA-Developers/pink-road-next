import React from 'react';
import Link from "next/link";
import SubTopNav from '../../../layout/components/SubTop';
import { usePageEdit } from '../../../hook/usePageEdit';
import { getStaticPageInfo, Ipage } from '../../../utils/page';
import defaultPageInfo from "../../../info/inquiry.json"
import { useQuestionList } from '../../../hook/useQuestion';
import { questionSatus } from '../../../utils/enumToKr';
import { yyyymmdd, yyyymmddHHmm } from '../../../utils/yyyymmdd';
import { Paginater } from '../../../components/common/Paginator';
import { useRouter } from 'next/router';
import SearchMini from '../../../components/common/SearchMini';
import { useCustomCount } from '../../../hook/useCount';
import { SingleSortSelect } from '../../../components/common/SortSelect';
import { useSingleSort } from '../../../hook/useSort';
import { ViewCount } from '../../../components/common/ViewCount';
import { QuestionStatus } from '../../../types/api';


export const getStaticProps = getStaticPageInfo("inquiry")
export const Inquiry: React.FC<Ipage> = (pageInfo) => {
    const router = useRouter();
    const { filter, setFilter, viewCount, setViewCount, items: inquiries, pageInfo: pagingInfo, setPage, setOR, sort, setSort } = useQuestionList()
    const pageTool = usePageEdit(pageInfo, defaultPageInfo);
    const { unAnsweredQuestionCount } = useCustomCount(["unAnsweredQuestionCount"])
    const signleSortHook = useSingleSort(sort, setSort)


    const handleSetFilter = (status?: QuestionStatus) => () => {
        filter.status_eq = status;
        setFilter({ ...filter })
    }

    const handleWrite = () => {
        router.push("/member/inquiry/write")
    }

    const handleSearch = (value: string) => {
        setOR(["no_eq", "title_eq", "code_eq"], value)
    }

    const checkOnStatus = (status?: QuestionStatus) => filter.status_eq === status ? "on" : ""

    return <div>
        <SubTopNav pageTools={pageTool}>
            <li className="homedeps1">Member</li>
            <li className="homedeps2">
                <Link href="/member/inquiry"><a>고객문의</a></Link>
            </li>
        </SubTopNav>
        <div className="inquiry_box w1200">
            <ul className="subtop_nav">
                <li><Link href="/member/notice"><a>공지사항</a></Link></li>
                <li><Link href="/member/qna"><a>자주하는 질문</a></Link></li>
                <li className="on"><Link href="/member/inquiry"><a>고객문의</a></Link></li>
            </ul>
            <div>
                <div className="alignment">
                    <div className="left_div">
                        <ul className="board_option">
                            <li onClick={handleSetFilter(undefined)} className={checkOnStatus(undefined)}><a>전체</a></li>
                            <li onClick={handleSetFilter(QuestionStatus.READY)} className={checkOnStatus(QuestionStatus.READY)}><a>미답변<strong>{unAnsweredQuestionCount}</strong></a></li>
                        </ul>
                    </div>
                    <div className="right_div">
                        <SingleSortSelect {...signleSortHook} />
                        <ViewCount value={viewCount} onChange={setViewCount} />
                    </div>
                </div>

                <div className="board_list st01">
                    <div className="tbody">
                        <ul>
                            {inquiries.map(inq =>
                                <li key={inq._id}>
                                    <div className="td01">{inq.no}</div>
                                    <div className="td02"><Link href={`/inquiry/view/${inq._id}`}><a>{inq.title}</a></Link></div>
                                    <div className="td03">
                                        {inq.title}
                                        <img className="new" src="../img/svg/new.svg" alt="new" />
                                        <i className="q_no">{questionSatus(inq.status)}</i>
                                    </div>
                                    <div className="td04">{inq.author?.nickName}</div>
                                    <div className="td05">{yyyymmddHHmm(inq.createdAt)}</div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <Paginater pageInfo={pagingInfo} setPage={setPage} />
                <div className="tl list_bottom">
                    <div className="btn_footer">
                        <button onClick={handleWrite} type="submit" className="btn medium pointcolor">글쓰기</button>
                    </div>
                    <SearchMini onSubmit={handleSearch} />
                </div>
            </div>
        </div>
    </div >;
};

export default Inquiry;