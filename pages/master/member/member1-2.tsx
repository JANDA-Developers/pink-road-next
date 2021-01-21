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
                    <div className="con_box_body master__table">
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


// import { MasterLayout } from 'layout/MasterLayout';
// import { Paginater } from 'components/common/Paginator';
// import { SearcfInfoBox } from 'components/common/SearcfInfoBox';
// import CalendarIcon from 'components/common/icon/CalendarIcon';
// import React from 'react';
// import Link from "next/link";

// interface IProp { }

// const popupOpen = () => {
//     $('#Popup01').css({
//         'display': 'flex'
//     });

// }
// const popupClose = () => {
//     $('#Popup01').css({
//         'display': 'none'
//     });
// }
// export const MsMemberB: React.FC<IProp> = () => {
//     return <MasterLayout>
//         <div className="in ">
//             <h4>회원관리</h4>
//             <div className="in_content">
//                 <div className="tab-nav">
//                     <ul>
//                         <li><Link href="/master/member"><a>개인회원</a></Link></li>
//                         <li className="on"><Link href="/master/member/member1-2"><a>기업파트너 회원</a></Link></li>
//                         <li><Link href="/master/member/member1-3"><a>개인파트너 회원</a></Link></li>
//                         <li><Link href="/master/member/member1-4"><a>탈퇴회원</a></Link></li>
//                     </ul>
//                 </div>
//                 <div className="con partner">
//                     <div className="con_box_top pb5">
//                         <div className="search_top">
//                             <div className="hang">
//                                 <ul className="day_ul">
//                                     <li className="on">
//                                         <span>이번달</span>
//                                     </li>
//                                     <li className="on">
//                                         <span>저번달</span>
//                                     </li>
//                                     <li>
//                                         <span>6개월</span>
//                                     </li>
//                                     <li>
//                                         <span>1년</span>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="hang">
//                                 <div className="input_box">
//                                     <input type="text" className="day w100" />
//                                     <CalendarIcon />
//                                 </div>
//                                     ~
//                                     <div className="input_box">
//                                     <input type="text" className="day w100" />
//                                     <CalendarIcon />
//                                 </div>
//                             </div>
//                             <div className="hang fr">
//                                 <select className="option">
//                                     <option>전체</option>
//                                     <option>파트너명</option>
//                                     <option>아이디</option>
//                                     <option>연락처</option>
//                                     <option>담당자</option>
//                                     <option>휴대폰</option>
//                                     <option>승인상태</option>
//                                 </select>
//                                 <div className="search_div">
//                                     <input className="w100" type="text" placeholder="검색 내용을 입력해주세요." />
//                                     <div className="svg_img">
//                                         <img src="/img/svg/search_icon.svg" alt="search icon" />
//                                         <button />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="alignment">
//                             <div className="left_div">
//                                 <ul className="board_option">
//                                     <li className="on"><a href="/">전체<strong>46</strong></a></li>
//                                     <li><a href="/">대기<strong>23</strong></a></li>
//                                     <li><a href="/">승인<strong>23</strong></a></li>
//                                     <li><a href="/">미승인<strong>23</strong></a></li>
//                                 </ul>
//                             </div>
//                             <div className="right_div">
//                                 <ul className="board_option">
//                                     <li><a href="/">전체선택</a></li>
//                                     <li><a href="/">엑셀파일<i className="jandaicon-info2 tooltip" data-tip="선택된 항목에 한해서 엑셀파일로 저장이 가능합니다." ></i></a></li>
//                                     <li><a href="/">신규회원등록</a></li>
//                                 </ul>
//                                 <select className="sel01">
//                                     <option>가입일 &uarr;</option>
//                                     <option>가입일 &darr;</option>
//                                     <option>접속일 &uarr;</option>
//                                     <option>접속일 &darr;</option>
//                                     <option>이름 오름순</option>
//                                     <option>이름 내림순</option>
//                                 </select>
//                                 <select className="sel02">
//                                     <option>10개 보기</option>
//                                     <option>50개 보기</option>
//                                     <option>100개 보기</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="con_box_body">
//                         <div className="list_head">
//                             <div className="td01">
//                                 <i className="checkbox">
//                                     <input type="checkbox" name="agree" id="agree0" title="전체선택" />
//                                     <label htmlFor="agree0" />
//                                 </i>
//                             </div>
//                             <div className="td02">파트너명</div>
//                             <div className="td03">아이디</div>
//                             <div className="td04">연락처</div>
//                             <div className="td05">담당자</div>
//                             <div className="td06">승인여부</div>
//                             <div className="td07">가입일</div>
//                             <div className="td08">판매상품</div>
//                             <div className="td09">상세보기</div>
//                         </div>
//                         <div className="list_line">
//                             <div className="td01">
//                                 <i className="checkbox">
//                                     <input type="checkbox" name="agree" id="agree0" title="선택" />
//                                     <label htmlFor="agree0" />
//                                 </i>
//                             </div>
//                             <div className="td02">하나투어</div>
//                             <div className="td03"><a href="mailto:">gogo@gamail.com</a></div>
//                             <div className="td04"><i className="m_title">연락처:</i><a href="tel:">051-555-5555</a></div>
//                             <div className="td05"><i className="m_title">담당자:</i>김김김<br /><a href="tel:">(010-2222-2222)</a></div>
//                             <div className="td06"><i className="m_title">승인여부:</i><i className="approval stand">승인대기</i></div>
//                             <div className="td07"><i className="m_title">가입일:</i>2020.11.22</div>
//                             <div className="td08"><i className="m_title">판매상품:</i><strong>총 9건</strong><br />(여행<strong>2</strong>/체험<strong>7</strong>)</div>
//                             <div className="td09"><button className="btn small" onClick={popupOpen}>상세보기</button></div>
//                         </div>

//                         <div className="list_line">
//                             <div className="td01">
//                                 <i className="checkbox">
//                                     <input type="checkbox" name="agree" id="agree0" title="선택" />
//                                     <label htmlFor="agree0" />
//                                 </i>
//                             </div>
//                             <div className="td02">하나투어</div>
//                             <div className="td03"><a href="mailto:">gogo@gamail.com</a></div>
//                             <div className="td04"><i className="m_title">연락처:</i><a href="tel:">051-555-5555</a></div>
//                             <div className="td05"><i className="m_title">담당자:</i>김김김<br /><a href="tel:">(010-2222-2222)</a></div>
//                             <div className="td06"><i className="m_title">승인여부:</i><i className="approval ok">승인</i></div>
//                             <div className="td07"><i className="m_title">가입일:</i>2020.11.22</div>
//                             <div className="td08"><i className="m_title">판매상품:</i><strong>총 9건</strong><br />(여행<strong>2</strong>/체험<strong>7</strong>)</div>
//                             <div className="td09"><button className="btn small" onClick={popupOpen}>상세보기</button></div>
//                         </div>

//                         <div className="list_line">
//                             <div className="td01">
//                                 <i className="checkbox">
//                                     <input type="checkbox" name="agree" id="agree0" title="선택" />
//                                     <label htmlFor="agree0" />
//                                 </i>
//                             </div>
//                             <div className="td02">하나투어</div>
//                             <div className="td03"><a href="mailto:">gogo@gamail.com</a></div>
//                             <div className="td04"><i className="m_title">연락처:</i><a href="tel:">051-555-5555</a></div>
//                             <div className="td05"><i className="m_title">담당자:</i>김김김<br /><a href="tel:">(010-2222-2222)</a></div>
//                             <div className="td06"><i className="m_title">승인여부:</i><i className="approval no" data-tip="미승인사유 : 서류보완">미승인</i></div>
//                             <div className="td07"><i className="m_title">가입일:</i>2020.11.22</div>
//                             <div className="td08"><i className="m_title">판매상품:</i><strong>총 9건</strong><br />(여행<strong>2</strong>/체험<strong>7</strong>)</div>
//                             <div className="td09"><button className="btn small" onClick={popupOpen}>상세보기</button></div>
//                         </div>
//                         {/* <Paginater pageNumber={10} totalPageCount={20} /> */}
//                         <div className="fin ifMobile">
//                             <div className="float_left">
//                                 <button type="submit" className="btn medium">전체선택</button>
//                             </div>
//                             <div className="float_right">
//                                 <button type="submit" className="btn medium mr5">탈퇴</button>
//                                 <button type="submit" className="btn medium">활동정지</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <SearcfInfoBox />

//             {/* popup-상세보기[UserModal] */}

//         </div>
//     </MasterLayout >
// };

// export default MsMemberB;