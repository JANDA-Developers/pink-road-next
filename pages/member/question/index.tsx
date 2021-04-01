import React, { useContext } from 'react';
import Link from "next/link";
import SubTopNav from '../../../layout/components/SubTop';
import { usePageEdit } from '../../../hook/usePageEdit';
import { getStaticPageInfo, Ipage } from '../../../utils/page';
import defaultPageInfo from "../../../info/question.json"
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
import { questionList_QuestionList_data, QuestionStatus } from '../../../types/api';
import { MemberTopNav } from '../../../components/topNav/MemberTopNav';
import { Change } from '../../../components/loadingList/LoadingList';
import { LockIcon } from '../../../components/common/icon/LockIcon';
import dayjs from 'dayjs';
import { AppContext } from '../../_app';
import { Prompt } from '../../../components/promptModal/Prompt';
import { PageEditor } from '../../../components/common/PageEditer';
import display from 'pages/master/design/display';


export const getStaticProps = getStaticPageInfo("question")
export const Question: React.FC<Ipage> = (pageInfo) => {
    const router = useRouter();
    const { getLoading, filter, setFilter, viewCount, setViewCount, items: inquiries, pageInfo: pagingInfo, setPage, setOR, sort, setSort } = useQuestionList()
    const { isManager, myProfile } = useContext(AppContext);
    const pageTool = usePageEdit(pageInfo, defaultPageInfo);
    const { unAnsweredQuestionCount } = useCustomCount(["unAnsweredQuestionCount"])
    const signleSortHook = useSingleSort(sort, setSort)


    const handleSetFilter = (status?: QuestionStatus) => () => {
        filter.status_eq = status;
        setFilter({ ...filter })
    }

    const handleWrite = () => {
        router.push("/member/question/write")
    }

    const handleSearch = (value: string) => {
        setOR(["no_eq", "title_contains", "code_eq"], value)
    }

    const gotoView = (inq: questionList_QuestionList_data) => () => {
        const isMyQuestion = myProfile?._id === inq.author?._id;
        const isMyProductQuestion = myProfile?._id === inq.product?.author?._id;

        if (!inq.isOpen) {
            if (!isMyProductQuestion && !isManager && !isMyQuestion) return;
        }

        router.push("/member/question/view/" + inq._id)
    }

    const checkOnStatus = (status?: QuestionStatus) => filter.status_eq === status ? "on" : ""

    return <div>
        <SubTopNav pageTools={pageTool}>
            <li className="homedeps1">Member</li>
            <li className="homedeps2">
                <Link href="/member/question"><a>고객문의</a></Link>
            </li>
        </SubTopNav>
        <PageEditor pageTools={pageTool} />
        <div className="question_box w1200">
            <MemberTopNav />
            <div className="board_box">
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
                        <Change change={!getLoading}  >
                            <ul>
                                {inquiries.map(inq =>
                                    <li onClick={gotoView(inq)} key={inq._id}>
                                        <div className="td01">{inq.product ? "상품문의" : "일반문의"}</div>
                                        {/* <div className="td02"><Link href={`/question/view/${inq._id}`}><a>{inq.title} {inq. && <LockIcon />} </a></Link></div> */}
                                        <div className="td03">
                                            {isManager ? inq.title : '[문의합니다.]'}
                                            {dayjs(inq.createdAt).isAfter(dayjs().add(-8, "hour")) && <img className="new" src="../img/svg/new.svg" alt="new" />}
                                            <i className="q_no">{questionSatus(inq.status)}</i>
                                        </div>
                                        <div className="td04">{inq.author?.name}</div>
                                        <div className="td05">{yyyymmddHHmm(inq.createdAt)}</div>
                                    </li>
                                )}
                            </ul>
                        </Change>
                    </div>
                </div>
                <Paginater pageInfo={pagingInfo} setPage={setPage} />
                <div className="tl list_bottom">
                    <div className="btn_footer">
                        <button onClick={handleWrite} type="submit" className="btn medium pointcolor">글쓰기</button>
                    </div>
                    <SearchMini onSubmit={handleSearch} />
                </div>


                {/* 팝업 - 비회원 글쓰기 로그인 */}
                <div className="popup_bg_mini" style={{ display: "flex" }}>
                    <div className="in_txt login_popup">
                        <a className="close_icon"><i className="flaticon-multiply"></i></a>
                        <div className="page">
                            <h3 className="popup__tittle">로그인</h3>

                            <div className="con ">
                                <div className="login_page">
                                    <input
                                        id="tab-1"
                                        type="radio"
                                        name="radio-set"
                                        className="tab-selector-1"
                                    />
                                    <label htmlFor="tab-1" className="tab-label-1 login_tap tap_01 ">
                                        <b>개인</b>
                                    </label>
                                    {/* <input
                                        id="tab-1"
                                        type="radio"
                                        name="radio-set"
                                        className="tab-selector-1"
                                        value={UserRole.individual}
                                        checked={UserRole.individual === userType}
                                        onChange={() => { handleUserType(UserRole.individual) }}
                                    />
                                    <label htmlFor="tab-1" className="tab-label-1 login_tap tap_01 ">
                                        <b>개인</b>
                                    </label> */}
                                    <input
                                        id="tab-2"
                                        type="radio"
                                        name="radio-set"
                                        className="tab-selector-2"
                                    />
                                    <label htmlFor="tab-2" className="tab-label-2 login_tap tap_02">
                                        <b>기업파트너</b>
                                    </label>
                                    {/* <input
                                        id="tab-2"
                                        type="radio"
                                        name="radio-set"
                                        className="tab-selector-2"
                                        value={UserRole.partnerB}
                                        checked={UserRole.partnerB === userType}
                                        onChange={() => { handleUserType(UserRole.partnerB) }}
                                    />
                                    <label htmlFor="tab-2" className="tab-label-2 login_tap tap_02">
                                        <b>기업파트너</b>
                                    </label> */}
                                    <input
                                        id="tab-3"
                                        type="radio"
                                        name="radio-set"
                                        className="tab-selector-3"
                                    />
                                    <label htmlFor="tab-3" className="tab-label-3 login_tap tap_03">
                                        <b>개인파트너</b>
                                    </label>
                                    {/* <input
                                        id="tab-3"
                                        type="radio"
                                        name="radio-set"
                                        className="tab-selector-3"
                                        value={UserRole.partner}
                                        checked={UserRole.partner === userType}
                                        onChange={() => { handleUserType(UserRole.partner) }}
                                    />
                                    <label htmlFor="tab-3" className="tab-label-3 login_tap tap_03">
                                        <b>개인파트너</b>
                                    </label> */}
                                    <input
                                        id="tab-4"
                                        type="radio"
                                        name="radio-set"
                                        className="tab-selector-4"
                                    />
                                    <label htmlFor="tab-4" className="tab-label-4 login_tap tap_03">
                                        <b>마스터</b>
                                    </label>
                                    {/* <input
                                        id="tab-4"
                                        type="radio"
                                        name="radio-set"
                                        className="tab-selector-4"
                                        value={UserRole.manager}
                                        checked={UserRole.manager === userType}
                                        onClick={() => { handleUserType(UserRole.manager) }}
                                    />
                                    <label htmlFor="tab-4" className="tab-label-4 login_tap tap_03">
                                        <b>마스터</b>
                                    </label> */}

                                    <div className="login_wrap white_box">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="user_id"
                                                id="uid"
                                                required
                                                placeholder="아이디"
                                                className="txt_id"
                                                title="아이디"
                                            />
                                        </div>
                                        <div className="form-group mt10">
                                            <input
                                                type="password"
                                                name="password"
                                                id="upw"
                                                required
                                                placeholder="비밀번호"
                                                title="비밀번호"
                                                className="form-txt_pw"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="keepid_opt" className="checkbox-inline">
                                                <input
                                                    type="checkbox"
                                                    name="keep_signed"
                                                    id="keepid_opt"
                                                />
                                        로그인 유지
                                    </label>
                                            <label htmlFor="keepid_opt2" className="checkbox-inline">
                                                <input
                                                    type="checkbox" id="keepid_opt2" />{" "}
                                        아이디 기억
                                    </label>
                                        </div>
                                        <button type="submit" className="sum">
                                            <span >로그인</span>
                                        </button>
                                        <div className="sign_in_form">
                                            <span>
                                                <Link href="/member/join">
                                                    <a>회원가입<i className="jandaicon-arr4-right"></i></a>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link href="/findmembers">
                                                    <a>아이디/비밀번호찾기<i className="jandaicon-arr4-right"></i></a>
                                                </Link>
                                            </span>
                                        </div>

                                        <div className="login__snslink2">
                                            <ul>
                                                <li className="login__snslink2_k">
                                                    <a href={process.env.NEXT_PUBLIC_SERVER_URI + "/login/kakao"}>
                                                        <span className="login__snslink2_icon"><i className="jandaicon-kakaotalk"></i></span>
                                                        <span className="login__snslink2_txt">카카오톡 로그인</span>
                                                    </a>
                                                </li>
                                                <li className="login__snslink2_n">
                                                    <a href={process.env.NEXT_PUBLIC_SERVER_URI + "/login/naver"}>
                                                        <span className="login__snslink2_icon"><i></i></span>
                                                        <span className="login__snslink2_txt">네이버 로그인</span>
                                                    </a>
                                                </li>
                                                <li className="login__snslink2_g">
                                                    <a href={process.env.NEXT_PUBLIC_SERVER_URI + "/login/google"}>
                                                        <span className="login__snslink2_icon"><i className="jandaicon-google1"></i></span>
                                                        <span className="login__snslink2_txt">구글 로그인</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>



                            </div>
                            {/* <div className="con">
                                <div className="form-group">
                                    <input
                                        value={userId}
                                        type="text"
                                        name="user_id"
                                        id="uid"
                                        required
                                        placeholder="아이디"
                                        className="txt_id"
                                        title="아이디"
                                        onChange={(e) => { handleId(e.target.value) }}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        value={userPw}
                                        type="password"
                                        name="password"
                                        id="upw"
                                        required
                                        placeholder="비밀번호"
                                        title="비밀번호"
                                        className="form-txt_pw"
                                        onChange={(e) => { handlePw(e.target.value) }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="keepid_opt" className="checkbox-inline">
                                        <input
                                            type="checkbox"
                                            name="keep_signed"
                                            id="keepid_opt"
                                            onClick={sessionSave}
                                            checked={saveSession}
                                        />
                                    로그인 유지
                                </label>
                                    <label htmlFor="keepid_opt2" className="checkbox-inline">
                                        <input
                                            onClick={handleSaveId}
                                            checked={saveId}
                                            type="checkbox" id="keepid_opt2" />{" "}
                                    아이디 기억
                                </label>
                                </div>
                                <button type="submit" className="sum" onClick={handleLogin}>
                                    <span >로그인</span>
                                </button>
                                <div className="sign_in_form">
                                    <span>
                                        <Link href="/member/join">
                                            <a>회원가입<i className="jandaicon-arr4-right"></i></a>
                                        </Link>
                                    </span>
                                    <span>
                                        <Link href="/findmembers">
                                            <a>아이디/비밀번호찾기<i className="jandaicon-arr4-right"></i></a>
                                        </Link>
                                    </span>
                                </div>



                                {userType === UserRole.individual &&
                                    <div className="login__snslink2">
                                        <ul>
                                            <li className="login__snslink2_k">
                                                <a href={process.env.NEXT_PUBLIC_SERVER_URI + "/login/kakao"}>
                                                    <span className="login__snslink2_icon"><i className="jandaicon-kakaotalk"></i></span>
                                                    <span className="login__snslink2_txt">카카오톡 로그인</span>
                                                </a>
                                            </li>
                                            <li className="login__snslink2_n">
                                                <a href={process.env.NEXT_PUBLIC_SERVER_URI + "/login/naver"}>
                                                    <span className="login__snslink2_icon"><i></i></span>
                                                    <span className="login__snslink2_txt">네이버 로그인</span>
                                                </a>
                                            </li>
                                            <li className="login__snslink2_g">
                                                <a href={process.env.NEXT_PUBLIC_SERVER_URI + "/login/google"}>
                                                    <span className="login__snslink2_icon"><i className="jandaicon-google1"></i></span>
                                                    <span className="login__snslink2_txt">구글 로그인</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                }


                            </div> */}
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <Prompt title={"글 작성시 사용한 비밀번호를 입력 해주세요"} onSubmit={(password) => {
        }} id="BoardPasswordChecker" />
    </div >;
};

export default Question;