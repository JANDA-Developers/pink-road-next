import { MasterLayout } from 'layout/MasterLayout';
import { SearcfInfoBox } from 'components/common/SearcfInfoBox';
import React, { useState } from 'react';
import Link from "next/link";
import { UserModal } from '../../../components/userModal/UserModal';
import { useUserList } from '../../../hook/useUser';
import { MasterAlignMent } from '../../../components/master/MasterAlignMent';
import { MasterSearchBar } from '../../../components/master/MasterSearchBar';
import { useIdSelecter } from '../../../hook/useIdSelecter';
import { useSingleSort } from '../../../hook/useSort';
import { useSettlementList } from '../../../hook/useSettlement';
import { useDateFilter } from '../../../hook/useSearch';
import { useCustomCount } from '../../../hook/useCount';
import { _UserFilter } from "../../../types/api";
import { SingleSortSelect } from '../../../components/common/SortSelect';
import { useQuestionList } from '../../../hook/useQuestion';
import { autoComma, autoHypenPhone } from '../../../utils/formatter';
import { foreginKR, genderToKR } from '../../../utils/enumToKr';
import { yyyymmdd } from '../../../utils/yyyymmdd';
import { BoardModal } from '../../../components/boardModal/BoardModal';
import { openModal } from '../../../utils/popUp';
import { Paginater } from '../../../components/common/Paginator';


interface IProp { }


export const popupOpen1 = () => {
    $('#Popup01').css({
        'display': 'flex'
    });
}
const popupClose1 = () => {
    $('#Popup01').css({
        'display': 'none'
    });
}
const popupOpen3 = () => {
    $('#Popup03').css({
        'display': 'flex'
    });
}
const popupClose3 = () => {
    $('#Popup03').css({
        'display': 'none'
    });
}

type TuniqSearch = keyof Pick<_UserFilter, "name_eq" | "email_eq" | "phoneNumber_eq">


export const MsMemberA: React.FC<IProp> = () => {
    const [popupEmail, setPopupEmail] = useState("");
    const { items: questions } = useQuestionList();
    const { totalIndiMemeberCount, koreanMemberCount, foreginMemeberCount } = useCustomCount(["totalPartnerMemberCount", "koreanMemberCount", "foreginMemeberCount", "totalIndiMemeberCount"])
    const [searchType, setSearchType] = useState<TuniqSearch>("name_eq");
    const { items: users, filter, setFilter, viewCount, setViewCount, sort, setSort, setUniqFilter, pageInfo: userPageInfo, setPage } = useUserList();
    const { filterEnd, filterStart, hanldeCreateDateChange, setDateKey } = useDateFilter({ filter, setFilter });
    const { selecteAll, isChecked } = useIdSelecter(users.map(user => user._id));
    const singleSort = useSingleSort(sort, setSort);
    const [popUserId, setPopUserId] = useState("");

    const handleViewDetailUser = (id: string) => () => {
        setPopUserId(id)
        setTimeout(() => {
            openModal("#UserModal")();
        }, 100)
    }



    const handleViewUserBoard = (email: string) => () => {
        setPopupEmail(email)
        setTimeout(() => {
            openModal("#BoardModal")();
        }, 100)
    }

    const doSearch = (search: string) => {
        setUniqFilter(searchType, ["name_eq", "email_eq", "phoneNumber_eq"], search);
    }

    return <MasterLayout>
        <div className="in partner">
            <h4>회원관리</h4>
            <div className="in_content">
                <div className="tab-nav">
                    <ul>
                        <li className="on"><Link href="/master/member"><a>개인회원</a></Link></li>
                        <li><Link href="/master/member/member1-2"><a>기업파트너 회원</a></Link></li>
                        <li><Link href="/master/member/member1-3"><a>개인파트너 회원</a></Link></li>
                        <li><Link href="/master/member/member1-4"><a>탈퇴회원</a></Link></li>
                    </ul>
                </div>
                <div className="con family">
                    <div className="con_box_top pb5">
                        <MasterSearchBar
                            filterEnd={filterEnd}
                            filterStart={filterStart}
                            onDateChange={hanldeCreateDateChange}
                            defaultRange={{}}
                            doSearch={doSearch}
                            Option={
                                <select value={searchType} onChange={(e) => {
                                    const type = e.currentTarget.value;
                                    setSearchType(type as TuniqSearch);
                                }} className="option">
                                    <option value={undefined}>전체</option>
                                    <option value={"name_eq" as TuniqSearch}>이름</option>
                                    <option value={"email_eq" as TuniqSearch}>아이디</option>
                                    <option value={"phoneNumber_eq" as TuniqSearch}>휴대폰</option>
                                </select>
                            }
                        />

                        <MasterAlignMent
                            Sort={
                                <SingleSortSelect {...singleSort} >
                                    <option>가입일 &uarr;</option>
                                    <option>가입일 &darr;</option>
                                    <option>접속일 &uarr;</option>
                                    <option>접속일 &darr;</option>
                                    <option>이름 오름순</option>
                                    <option>이름 내림순</option>
                                </SingleSortSelect>
                            }
                            setViewCount={setViewCount}
                            viewCount={viewCount}
                            handleSelectAll={selecteAll}
                            LeftDiv={
                                <ul className="board_option">
                                    <li className="on"><a >전체<strong>{totalIndiMemeberCount}</strong></a></li>
                                    <li><a >내국인<strong>{koreanMemberCount}</strong></a></li>
                                    <li><a >외국인<strong>{foreginMemeberCount}</strong></a></li>
                                </ul>
                            }
                        />
                    </div>

                    <div className="con_box_body">
                        <div className="list_head">
                            <div className="td01">
                                <i className="checkbox">
                                    <input type="checkbox" name="agree" id="agree0" title="전체선택" />
                                    <label htmlFor="agree0" />
                                </i>
                            </div>
                            <div className="td02">이름</div>
                            <div className="td03">아이디</div>
                            <div className="td04">휴대폰</div>
                            <div className="td05">성별</div>
                            <div className="td06">국적</div>
                            <div className="td07">가입일</div>
                            <div className="td08">가입경로</div>
                            <div className="td09">상세보기</div>
                        </div>
                        {users.map(user =>
                            <div className="list_line">
                                <div className="td01">
                                    <i className="checkbox">
                                        <input type="checkbox" name="agree" id="agree0" title="선택" />
                                        <label htmlFor="agree0" />
                                    </i>
                                </div>
                                <div className="td02">{user.nickName}</div>
                                <div className="td03">{user.email}</div>
                                <div className="td04"><i className="m_title">휴대폰:</i><a href={`tel:${user.phoneNumber}`}>{autoComma(user.phoneNumber)}</a></div>
                                <div className="td05"><i className="m_title">성별:</i>{genderToKR(user.gender)}</div>
                                <div className="td06"><i className="m_title">국적:</i>{foreginKR(user.is_froreginer)}</div>
                                <div className="td07"><i className="m_title">가입일:</i>{yyyymmdd(user.createdAt)}</div>
                                <div className="td08"><i className="m_title">주소:</i>{user.address.slice(0, 10) + "..."}</div>
                                <div className="td09">
                                    <i className="btn small" onClick={handleViewDetailUser(user._id)}>상세보기</i>
                                    <i className="btn small" onClick={handleViewUserBoard(user.email)}>작성한 게시글</i>
                                </div>
                            </div>
                        )}
                        <Paginater setPage={setPage} pageInfo={userPageInfo} />
                        <div className="fin ifMobile">
                            <div className="float_left">
                                <button type="submit" className="btn medium">전체선택</button>
                            </div>
                            <div className="float_right">
                                <button type="submit" className="btn medium mr5">탈퇴</button>
                                <button type="submit" className="btn medium">활동정지</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SearcfInfoBox />
            {/* popup-작성한 게시글 보기 */}
            <BoardModal email={popupEmail} />
        </div>
    </MasterLayout >
};

export default MsMemberA;