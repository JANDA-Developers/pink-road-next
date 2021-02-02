import { Gender } from 'aws-sdk/clients/polly';
import { UserRole } from 'aws-sdk/clients/workmail';
import React, { useState } from 'react';
import { useCustomCount } from '../../hook/useCount';
import { useIdSelecter } from '../../hook/useIdSelecter';
import { useDateFilter } from '../../hook/useSearch';
import { useSingleSort } from '../../hook/useSort';
import { useUserList, useUserResign, useUserUpdate } from '../../hook/useUser';
import { MasterLayout } from '../../layout/MasterLayout';
import { Fuser, GENDER, UserStatus, _UserFilter, _UserSort } from '../../types/api';
import { TElements } from '../../types/interface';
import { openModal } from '../../utils/popUp';
import { BoardModal } from '../boardModal/BoardModal';
import { SearcfInfoBox } from '../common/SearcfInfoBox-Mypage';
import { SingleSortSelect } from '../common/SortSelect';
import { MasterAlignMent } from '../master/MasterAlignMent';
import { MasterSearchBar } from '../master/MasterSearchBar';
import { MemberTopNav } from '../topNav/MasterTopNav';
import { UserModal } from '../userModal/UserModal';

type UserMasterHandler = {
    handleViewDetailUser: (id: string) => () => void;
    handleStopUser: () => void;
    handleResignUser: () => void;
    handleViewUserBoard: (user: Fuser) => () => void;
}

export interface IMemberTableProp {
    userHook: ReturnType<typeof useUserList>
    idSelectHook: ReturnType<typeof useIdSelecter>
    handleUser: UserMasterHandler
}


type TuniqSearch = keyof Pick<_UserFilter, "name_eq" | "email_eq" | "phoneNumber_eq">

interface IProp {
    type: UserRole | "signOut"
    BoardOptions?: TElements;
    SortOptions?: TElements
    Table: React.FC<IMemberTableProp>
}

export const MemberMaster: React.FC<IProp> = ({ Table, type, BoardOptions, SortOptions }) => {
    const role_eq = type !== "signOut" ? type : undefined;
    const isResigned_eq = type === "signOut" ? true : false;
    const fixedFilter: _UserFilter = { role_eq, isResigned_eq };
    const { totalIndiMemberCount, koreanMemberCount, foreginMemberCount } = useCustomCount(["totalPartnerMemberCount", "koreanMemberCount", "foreginMemberCount", "totalIndiMemberCount"])
    const [searchType, setSearchType] = useState<TuniqSearch>("name_eq");
    const [popupUser, setPopupUser] = useState<Fuser>();
    const useHook = useUserList({ initialFilter: fixedFilter });
    const { items: users, filter, setFilter, viewCount, setViewCount, sort, setSort, setUniqFilter, pageInfo: userPageInfo, setPage } = useHook;
    const { filterEnd, filterStart, hanldeCreateDateChange, setDateKey } = useDateFilter({ filter, setFilter });
    const idHooks = useIdSelecter(users.map(user => user._id));
    const { selectAll, selectedIds } = idHooks;
    const singleSort = useSingleSort(sort, setSort);
    const [popupId, setPopUserId] = useState("");
    const [resignUser] = useUserResign();
    const [updateUser] = useUserUpdate();
    const [] = 

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

    const handlers = {
        handleViewDetailUser,
        handleStopUser,
        handleResignUser,
        handleViewUserBoard
    }

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
                                    {BoardOptions}
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
                                    {SortOptions}
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
                                        <li className={checkOnAllForgien()}><a >전체<strong>{totalIndiMemberCount}</strong></a></li>
                                        <li onClick={setIsForeginer(false)} className={checkOnForeginer(false)}><a>내국인<strong>{koreanMemberCount}</strong></a></li>
                                        <li onClick={setIsForeginer(true)} className={checkOnForeginer(true)}><a >외국인<strong>{foreginMemberCount}</strong></a></li>
                                    </ul>
                                    <ul className="board_option">
                                        <li className={checkOnAllGender()}><a >전체<strong>{totalIndiMemberCount}</strong></a></li>
                                        <li onClick={setGenderFilter(GENDER.MAIL)} className={checkOnGender(GENDER.MAIL)}><a>남<strong>{koreanMemberCount}</strong></a></li>
                                        <li onClick={setGenderFilter(GENDER.FEMALE)} className={checkOnGender(GENDER.FEMALE)}><a>녀<strong>{foreginMemberCount}</strong></a></li>
                                    </ul>
                                </div>
                            }
                        />
                    </div>
                    <Table handleUser={handlers} idSelectHook={idHooks} userHook={useHook} />
                </div>
            </div>
            <SearcfInfoBox />
            {/* popup-작성한 게시글 보기 */}
            {popupUser && <BoardModal user={popupUser} />}
            <UserModal userId={popupId} />
        </div>
    </MasterLayout >
};


