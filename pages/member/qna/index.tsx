import React, { useContext, useState } from "react";
import Link from "next/link";
import SubTopNav from "../../../layout/components/SubTop";
import { usePageEdit } from "../../../hook/usePageEdit";
import { getStaticPageInfo, Ipage } from "../../../utils/page";
import defaultPageInfo from "../../../info/qna.json";
import { AppContext } from "../../_app";
import { useRouter } from "next/router";
import { MemberTopNav } from "../../../components/topNav/MemberTopNav";
import { useQnaList } from "../../../hook/useQna";
import {
    CategoryType,
    qnaList_QnaList_data,
    QnaTarget,
} from "../../../types/api";
import sanitizeHtml from "sanitize-html";
import { Change } from "../../../components/loadingList/LoadingList";
import { generateClientPaging } from "../../../utils/generateClientPaging";
import { Paginater } from "../../../components/common/Paginator";
import { PageEditor } from "../../../components/common/PageEditer";

export const getStaticProps = getStaticPageInfo("qna");
export const Qna: React.FC<Ipage> = (pageInfo) => {
    const { isManager, categoriesMap, myProfile, isSeller } =
        useContext(AppContext);
    const { items, getLoading, filter, setFilter } = useQnaList({
        initialViewCount: 999,
        initialFilter: {
            target_eq: QnaTarget.ALL,
        },
    });
    const target = filter.target_eq;
    const isTargetAll = filter.target_eq === QnaTarget.ALL;
    const [filterCat, setFilterCat] = useState<string>();
    const router = useRouter();
    const pageTools = usePageEdit(pageInfo, defaultPageInfo);
    const [openId, setOpenId] = useState("");

    const gotoWrite = () => {
        router.push("/member/qna/write/");
    };

    const checkCatEq = (catId?: string) => (filterCat === catId ? "on" : "");
    const checkCatCount = (catId: string) =>
        items.filter((item) => item.category?._id === catId).length;

    const handleToogle = (qna: qnaList_QnaList_data) => () => {
        if (openId === qna._id) {
            setOpenId("");
        } else {
            setOpenId(qna._id);
        }
    };

    const handleCatFilter = (catId?: string) => () => {
        setFilterCat(catId);
    };

    const filteredItems = filterCat
        ? items.filter((item) => item.category?._id === filterCat)
        : items;

    const { slice, paging, setPage } = generateClientPaging(
        filteredItems || [],
        10
    );

    const handleTargetChange = () => {
        filter.target_eq = isTargetAll ? QnaTarget.SELLER : QnaTarget.ALL;
        setFilter({ ...filter });
    };

    return (
        <div>
            <SubTopNav pageTools={pageTools}>
                <li className="homedeps1">고객센터</li>
                <li className="homedeps2">
                    <Link href="/member/qna">
                        <a>자주하는 질문</a>
                    </Link>
                </li>
            </SubTopNav>
            <PageEditor pageTools={pageTools} />
            <div className="qna_box w1200">
                <MemberTopNav />
                <div className="board_qna board_box">
                    <h4>자주하는 질문</h4>
                    {isSeller && (
                        <button
                            className="btn samll mb10"
                            onClick={handleTargetChange}
                        >
                            {isTargetAll ? "파트너" : "일반"}
                        </button>
                    )}
                    <div className="alignment">
                        <div className="center_div">
                            <ul className="board_option__btn">
                                <li
                                    onClick={handleCatFilter(undefined)}
                                    className={checkCatEq(undefined)}
                                >
                                    <a>전체</a>
                                </li>
                                {categoriesMap[
                                    target === QnaTarget.ALL
                                        ? CategoryType.QNA
                                        : CategoryType.QNA_FOR_PARTNER
                                ].map((cat) => (
                                    <li
                                        className={checkCatEq(cat._id)}
                                        onClick={handleCatFilter(cat._id)}
                                        key={cat._id}
                                    >
                                        <a>{cat.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Change change={!getLoading}>
                        {slice.map((qna) => (
                            <div
                                onClick={handleToogle(qna)}
                                key={qna._id}
                                className={`dl ${
                                    openId === qna._id && "active"
                                }`}
                            >
                                <div className="dt">
                                    <span>
                                        <i className="Q"></i>
                                        {qna.category?.label}
                                    </span>
                                    {qna.title}

                                    <i className="jandaicon-arr4-bottom"></i>

                                    {isManager && (
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                router.push(
                                                    "/member/qna/write/" +
                                                        qna._id
                                                );
                                            }}
                                            type="submit"
                                            className="btn mini mr15"
                                        >
                                            수정하기
                                        </button>
                                    )}
                                </div>

                                <div className="dd panel-collapse collapse in">
                                    <div className="form">
                                        <i className="A" />
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: sanitizeHtml(
                                                    qna.contents
                                                ),
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Change>
                </div>
                <Paginater setPage={setPage} pageInfo={paging} />
                {isSeller && (
                    <button
                        className="btn samll mb10"
                        onClick={() => {
                            router.push("/member/question/write");
                        }}
                    >
                        더 궁금하신 내용이 있으신가요?
                    </button>
                )}
                <div className="list_bottom mt30 mb100">
                    {isManager && (
                        <button
                            onClick={gotoWrite}
                            type="submit"
                            className="btn medium footer"
                        >
                            글쓰기
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Qna;
