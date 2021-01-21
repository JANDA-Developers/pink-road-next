import { MasterLayout } from 'layout/MasterLayout';
import { SearcfInfoBox } from 'components/common/SearcfInfoBox';
import React, { useState } from 'react';
import Link from "next/link";
import { UserModal } from '../../../components/userModal/UserModal';
import { useUserList, useUserResign, useUserUpdate } from '../../../hook/useUser';
import { MasterAlignMent } from '../../../components/master/MasterAlignMent';
import { MasterSearchBar } from '../../../components/master/MasterSearchBar';
import { useIdSelecter } from '../../../hook/useIdSelecter';
import { useSingleSort } from '../../../hook/useSort';
import { useDateFilter } from '../../../hook/useSearch';
import { useCustomCount } from '../../../hook/useCount';
import { Fuser, GENDER, UserStatus, _UserFilter, _UserSort } from "../../../types/api";
import { SingleSortSelect } from '../../../components/common/SortSelect';
import { autoComma } from '../../../utils/formatter';
import { foreginKR, genderToKR } from '../../../utils/enumToKr';
import { yyyymmdd } from '../../../utils/yyyymmdd';
import { BoardModal } from '../../../components/boardModal/BoardModal';
import { openModal } from '../../../utils/popUp';
import { Paginater } from '../../../components/common/Paginator';
import { MemberTopNav } from '../../../components/topNav/MasterTopNav';
import { Gender } from 'aws-sdk/clients/polly';


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
    const [popupUser, setPopupUser] = useState<Fuser>();
    const { totalIndiMemeberCount, koreanMemberCount, foreginMemeberCount } = useCustomCount(["totalPartnerMemberCount", "koreanMemberCount", "foreginMemeberCount", "totalIndiMemeberCount"])
    const [searchType, setSearchType] = useState<TuniqSearch>("name_eq");
    const { items: users, filter, setFilter, viewCount, setViewCount, sort, setSort, setUniqFilter, pageInfo: userPageInfo, setPage } = useUserList();
    const { filterEnd, filterStart, hanldeCreateDateChange, setDateKey } = useDateFilter({ filter, setFilter });
    const { selectAll, isChecked, toggle, toggleAll, selectedIds, isAllSelected } = useIdSelecter(users.map(user => user._id));
    const singleSort = useSingleSort(sort, setSort);
    const [popupId, setPopUserId] = useState("");
    const [resignUser] = useUserResign();
    const [updateUser] = useUserUpdate();

    const setIsForeginer = (foreginer: boolean) => () => {
        filter.is_froreginer_eq = foreginer;
        setFilter({ ...filter })
    }

    const setGenderFilter = (gender: Gender) => () => {
        filter.gender_eq = gender;
        setFilter({ ...filter });
    }

    const selected = selectedIds[0];

    const handleResignUser = () => {
        if (selectedIds.length > 1) alert("한번에 하나의 유저만 선택 해주세요.")
        else if (selectedIds.length < 1) alert("유저를 선택 해주세요.");
        resignUser({
            variables: {
                _id: selected,
                pw: "" //마스터 일때는 안넣어도됨
            }
        })
    }

    const handleStopUser = () => {
        if (selectedIds.length > 1) alert("한번에 하나의 유저만 선택 해주세요.")
        else if (selectedIds.length < 1) alert("유저를 선택 해주세요.");
        updateUser({
            variables: {
                _id: selected,
                params: {
                    status: UserStatus.stop
                },
            }
        }).then(({ data }) => {
            if (data?.UserUpdate.ok) alert("해당 유저를 정지 하였습니다.");
        })
    }

    const handleViewDetailUser = (id: string) => () => {
        setPopUserId(id)
        setTimeout(() => {
            openModal("#UserModal")();
        }, 100)
    }

    const handleViewUserBoard = (user: Fuser) => () => {
        setPopupUser(user);
        setTimeout(() => {
            openModal("#BoardModal")();
        }, 100)
    }

    const doSearch = (search: string) => {
        setUniqFilter(searchType, ["name_eq", "email_eq", "phoneNumber_eq"], search);
    }
    const checkOnGender = (gender?: Gender) => gender === filter.gender_eq ? "on" : "";
    const checkOnForeginer = (isForeginer?: boolean) => isForeginer === filter.is_froreginer_eq ? "on" : "";
    const checkOnAllGender = () => filter.gender_eq === undefined ? "on" : "";
    const checkOnAllForgien = () => filter.is_froreginer_eq === undefined ? "on" : "";

    return <MasterLayout>
        <div className="in partner">
            <h4>회원관리</h4>
            <div className="in_content">
                <MemberTopNav />
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
                                    <option value={_UserSort.createdAt_asc}>가입일 &uarr;</option>
                                    <option value={_UserSort.createdAt_desc}>가입일 &darr;</option>
                                    <option value={_UserSort.name_asc}>이름 오름순</option>
                                    <option value={_UserSort.name_desc}>이름 내림순</option>
                                </SingleSortSelect>
                            }
                            setViewCount={setViewCount}
                            viewCount={viewCount}
                            handleSelectAll={selectAll}
                            LeftDiv={
                                <div>
                                    <ul className="board_option">
                                        <li className={checkOnAllForgien()}><a >전체<strong>{totalIndiMemeberCount}</strong></a></li>
                                        <li onClick={setIsForeginer(false)} className={checkOnForeginer(false)}><a>내국인<strong>{koreanMemberCount}</strong></a></li>
                                        <li onClick={setIsForeginer(true)} className={checkOnForeginer(true)}><a >외국인<strong>{foreginMemeberCount}</strong></a></li>
                                    </ul>
                                    <ul className="board_option">
                                        <li className={checkOnAllGender()}><a >전체<strong>{totalIndiMemeberCount}</strong></a></li>
                                        <li onClick={setGenderFilter(GENDER.MAIL)} className={checkOnGender(GENDER.MAIL)}><a>남<strong>{koreanMemberCount}</strong></a></li>
                                        <li onClick={setGenderFilter(GENDER.FEMALE)} className={checkOnGender(GENDER.FEMALE)}><a>녀<strong>{foreginMemeberCount}</strong></a></li>
                                    </ul>
                                </div>
                            }
                        />
                    </div>

                    <div className="con_box_body">
                        <div className="list_head">
                            <div className="td01">
                                <i className="checkbox">
                                    <input checked={isAllSelected} type="checkbox" name="agree" id="agree0" title="전체선택" />
                                    <label onClick={toggleAll} htmlFor="agree0" />
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
                            <div key={user._id} className="list_line">
                                <div className="td01">
                                    <i onClick={() => {
                                        toggle(user._id)
                                    }} className="checkbox">
                                        <input onChange={() => { }} checked={isChecked(user._id)} type="checkbox" name="agree" id="agree0" title="선택" />
                                        <label htmlFor="agree0" />
                                    </i>
                                </div>
                                <div className="td02">{user.name}</div>
                                <div className="td03">{user.email}</div>
                                <div className="td04"><i className="m_title">휴대폰:</i><a href={`tel:${user.phoneNumber}`}>{autoComma(user.phoneNumber)}</a></div>
                                <div className="td05"><i className="m_title">성별:</i>{genderToKR(user.gender)}</div>
                                <div className="td06"><i className="m_title">국적:</i>{foreginKR(user.is_froreginer)}</div>
                                <div className="td07"><i className="m_title">가입일:</i>{yyyymmdd(user.createdAt)}</div>
                                <div className="td08"><i className="m_title">주소:</i>{user.address.slice(0, 10) + "..."}</div>
                                <div className="td09">
                                    <i className="btn small" onClick={handleViewDetailUser(user._id)}>상세보기</i>
                                    <i className="btn small" onClick={handleViewUserBoard(user)}>작성한 게시글</i>
                                </div>
                            </div>
                        )}
                        <Paginater setPage={setPage} pageInfo={userPageInfo} />
                        <div className="fin ifMobile">
                            <div className="float_left">
                                <button onClick={selectAll} type="submit" className="btn medium">전체선택</button>
                            </div>
                            <div className="float_right">
                                <button onClick={handleResignUser} type="submit" className="btn medium mr5">탈퇴</button>
                                <button onClick={handleStopUser} type="submit" className="btn medium">활동정지</button>
                                <button onClick={handleStopUser} type="submit" className="btn medium">활동재개</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SearcfInfoBox />
            {/* popup-작성한 게시글 보기 */}
            {popupUser && <BoardModal user={popupUser} />}
            <UserModal userId={popupId} />
        </div>
    </MasterLayout >
};

export default MsMemberA;