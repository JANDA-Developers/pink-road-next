import React, { useContext } from "react";
import Link from "next/link";
import SubTopNav from "../../../layout/components/SubTop";
import { usePageEdit } from "../../../hook/usePageEdit";
import { getStaticPageInfo, Ipage } from "../../../utils/page";
import defaultPageInfo from "../../../info/question.json";
import { useQuestionList } from "../../../hook/useQuestion";
import { questionSatus } from "../../../utils/enumToKr";
import { yyyymmdd, yyyymmddHHmm } from "../../../utils/yyyymmdd";
import { Paginater } from "../../../components/common/Paginator";
import { useRouter } from "next/router";
import SearchMini from "../../../components/common/SearchMini";
import { useCustomCount } from "../../../hook/useCount";
import { SingleSortSelect } from "../../../components/common/SortSelect";
import { useSingleSort } from "../../../hook/useSort";
import { ViewCount } from "../../../components/common/ViewCount";
import {
    questionList_QuestionList_data,
    QuestionStatus,
} from "../../../types/api";
import { MemberTopNav } from "../../../components/topNav/MemberTopNav";
import { Change } from "../../../components/loadingList/LoadingList";
import { LockIcon } from "../../../components/common/icon/LockIcon";
import dayjs from "dayjs";
import { AppContext } from "../../_app";
import { Prompt } from "../../../components/promptModal/Prompt";
import { PageEditor } from "../../../components/common/PageEditer";
import display from "pages/master/design/display";
import { LoginModal } from "../../../components/loginModal/LoginModal";
import { useModal } from "../../../hook/useModal";
import {
    IPromptInfo,
    PormptModal,
} from "../../../components/promptModal/PromptModal";
import {
    updateURLParameter,
    updateURLParameters,
} from "../../../utils/getUpdateUrlParam";

export const getStaticProps = getStaticPageInfo("question");
export const Question: React.FC<Ipage> = (pageInfo) => {
    const router = useRouter();
    const {
        getLoading,
        filter,
        setFilter,
        viewCount,
        setViewCount,
        items: inquiries,
        pageInfo: pagingInfo,
        setPage,
        setOR,
        sort,
        setSort,
    } = useQuestionList();
    const { isManager, myProfile, isLogin } = useContext(AppContext);
    const pageTool = usePageEdit(pageInfo, defaultPageInfo);
    const { unAnsweredQuestionCount } = useCustomCount([
        "unAnsweredQuestionCount",
    ]);
    const signleSortHook = useSingleSort(sort, setSort);
    const loginModalHook = useModal();
    const passwordModalHook = useModal<IPromptInfo>();

    const handleSetFilter = (status?: QuestionStatus) => () => {
        filter.status_eq = status;
        setFilter({ ...filter });
    };

    const handleWrite = (useAnonyWrite?: boolean) => {
        const shouldOpenModal = !useAnonyWrite && !isLogin;
        if (shouldOpenModal) {
            loginModalHook.openModal();
            return;
        }
        router.push("/member/question/write");
    };

    const handleSearch = (value: string) => {
        setOR(["no_eq", "title_contains", "code_eq"], value);
    };

    const gotoView = (inq: questionList_QuestionList_data) => () => {
        const isMyQuestion =
            myProfile?._id === inq.author?._id && myProfile !== undefined;
        const isMyProductQuestion =
            myProfile?._id === inq.product?.author?._id &&
            myProfile !== undefined;

        const link = updateURLParameter(
            "/member/question/view/" + inq._id,
            "page",
            pagingInfo.page.toString()
        );

        if (!inq.isOpen) {
            if (!isMyProductQuestion && !isManager && !isMyQuestion) {
                passwordModalHook.openModal({
                    callBack: (password) => {
                        updateURLParameter(link, "pw", password);
                    },
                    title: "패스워드를 입력 해주세요",
                    messageLabel: "패스워드",
                });
                return;
            }
        }

        router.push(link);
    };

    const checkOnStatus = (status?: QuestionStatus) =>
        filter.status_eq === status ? "on" : "";

    return (
        <div>
            <SubTopNav pageTools={pageTool}>
                <li className="homedeps1">고객센터</li>
                <li className="homedeps2">
                    <Link href="/member/question">
                        <a>고객문의</a>
                    </Link>
                </li>
            </SubTopNav>
            <PageEditor pageTools={pageTool} />
            <div className="question_box w1200">
                <MemberTopNav />
                <div className="board_box">
                    <h4>고객문의</h4>
                    <div className="alignment">
                        <div className="left_div">
                            <ul className="board_option__btn">
                                <li
                                    onClick={handleSetFilter(undefined)}
                                    className={checkOnStatus(undefined)}
                                >
                                    <a>전체</a>
                                </li>
                                <li
                                    onClick={handleSetFilter(
                                        QuestionStatus.READY
                                    )}
                                    className={checkOnStatus(
                                        QuestionStatus.READY
                                    )}
                                >
                                    <a>
                                        미답변
                                        <strong>
                                            {/*{unAnsweredQuestionCount}*/}
                                        </strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="right_div">
                            <SingleSortSelect {...signleSortHook} />
                            <ViewCount
                                value={viewCount}
                                onChange={setViewCount}
                            />
                        </div>
                    </div>

                    <div className="board_list st01">
                        <div className="thead">
                            <div className="td01">형태</div>
                            <div className="td03">제목</div>
                            <div className="td04">작성자</div>
                            <div className="td05">작성일</div>
                        </div>
                        <div className="tbody">
                            <Change change={!getLoading}>
                                <ul>
                                    {inquiries.map((inq) => (
                                        <li
                                            onClick={gotoView(inq)}
                                            key={inq._id}
                                        >
                                            <div className="td01">
                                                {inq.product
                                                    ? "상품문의"
                                                    : "일반문의"}
                                            </div>
                                            {/* <div className="td02"><Link href={`/question/view/${inq._id}`}><a>{inq.title} {inq. && <LockIcon />} </a></Link></div> */}
                                            <div className="td03">
                                                <i className="icon__lock"></i>
                                                {inq.product
                                                    ? "상품 문의합니다."
                                                    : "일반 문의합니다."}{" "}
                                                {isManager ? inq.title : ""}
                                                {dayjs(inq.createdAt).isAfter(
                                                    dayjs().add(-8, "hour")
                                                ) && (
                                                    <img
                                                        className="new"
                                                        src="../img/svg/new.svg"
                                                        alt="new"
                                                    />
                                                )}
                                                <i className="q_no">
                                                    {questionSatus(inq.status)}
                                                </i>
                                            </div>
                                            <div className="td04">
                                                {inq.author?.name || "익명"}
                                            </div>
                                            <div className="td05">
                                                {yyyymmddHHmm(inq.createdAt)}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </Change>
                        </div>
                    </div>
                    <Paginater pageInfo={pagingInfo} setPage={setPage} />
                    <div className="tl list_bottom">
                        <button
                            onClick={() => {
                                handleWrite(undefined);
                            }}
                            type="submit"
                            className="btn medium footer pointcolor"
                        >
                            문의하기
                        </button>
                        <SearchMini onSubmit={handleSearch} />
                    </div>
                </div>
            </div>
            <PormptModal modalHook={passwordModalHook} />
            <LoginModal
                onLogin={() => {
                    alert("환영합니다.");
                    location.reload();
                }}
                modalHook={loginModalHook}
            >
                <div className="mb10">
                    <button
                        onClick={() => {
                            handleWrite(true);
                        }}
                        type="submit"
                        className="btn medium pointcolor"
                    >
                        비회원 문의하기
                    </button>
                </div>
            </LoginModal>
        </div>
    );
};

export default Question;
