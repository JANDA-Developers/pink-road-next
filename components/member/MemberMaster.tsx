import { Gender } from "aws-sdk/clients/polly";
import React, { useState } from "react";
import { useCustomCount } from "../../hook/useCount";
import { useIdSelecter } from "../../hook/useIdSelecter";
import { useModal } from "../../hook/useModal";
import { useDateFilter } from "../../hook/useSearch";
import { useSingleSort } from "../../hook/useSort";
import {
    useRestartUsers,
    useSignUpAccept,
    useSignUpDeny,
    useStopUsers,
    useUserList,
    useUserResign,
    useUserUpdate,
} from "../../hook/useUser";
import { MasterLayout } from "../../layout/MasterLayout";
import {
    Fuser,
    GENDER,
    UserRole,
    UserStatus,
    _UserFilter,
    _UserSort,
} from "../../types/api";
import { TElements } from "../../types/interface";
import { closeModal, openModal } from "../../utils/popUp";
import { BoardModal } from "../boardModal/BoardModal";
import { SearcfInfoBox } from "../common/SearcfInfoBox-Mypage";
import { SingleSortSelect } from "../common/SortSelect";
import { Change } from "../loadingList/LoadingList";
import { MasterAlignMent } from "../master/MasterAlignMent";
import { MasterSearchBar } from "../master/MasterSearchBar";
import { Prompt } from "../promptModal/Prompt";
import { ResignModal } from "../resign/ResignModal";
import { MemberTopNav } from "../topNav/MasterTopNav";
import { UserModal } from "../userModal/UserModal";
import { UserHandWriteModalWrap } from "../userWriteModal/UserWriteModal";

export type UserMasterHandler = {
    handleViewDetailUser: (id: string) => () => void;
    handleStopUser: (userids?: string[]) => void;
    handleRestartUser: (userids?: string[]) => void;
    handleResignUser: (userId?: string) => void;
    handleViewUserBoard: (user: Fuser) => () => void;
    handleSignUpAccept: (userIds: string[]) => void;
    handleSignUpDeny: (userIds: string[], reason: string) => void;
    handleDenyPop: (userId: string) => () => void;
};

export interface IMemberTableProp {
    userHook: ReturnType<typeof useUserList>;
    idSelectHook: ReturnType<typeof useIdSelecter>;
    handleUser: UserMasterHandler;
}

type TuniqSearch = keyof Pick<
    _UserFilter,
    "name_eq" | "email_eq" | "phoneNumber_eq"
>;

interface IProp {
    type?: UserRole | "signOut";
    signOut?: boolean;
    BoardOptions?: TElements;
    SortOptions?: TElements;
    Table: React.FC<IMemberTableProp>;
}

export const MemberMaster: React.FC<IProp> = ({
    type,
    Table,
    signOut,
    BoardOptions,
    SortOptions,
}) => {
    const userWriteModal = useModal();
    let role_eq = type;
    const isIndiTap = type === UserRole.individual;
    const isNonBusiPartnerTap = type === UserRole.partnerB;
    const isBusiTap = type === UserRole.partner;
    const isSignOut = type === "signOut";
    const isResigned_eq = signOut;
    let fixedFilter: _UserFilter = { role_eq, isResigned_eq };
    if (isSignOut) {
        fixedFilter = {
            isResigned_eq: true,
        };
    }
    const { totalIndiMemberCount, koreanMemberCount, foreginMemberCount } =
        useCustomCount([
            "totalPartnerMemberCount",
            "koreanMemberCount",
            "foreginMemberCount",
            "totalIndiMemberCount",
        ]);
    const [searchType, setSearchType] = useState<TuniqSearch>("name_eq");
    const [popupUser, setPopupUser] = useState<Fuser>();
    const useHook = useUserList({ initialFilter: fixedFilter });
    const {
        items: users,
        filter,
        setFilter,
        viewCount,
        setViewCount,
        sort,
        setSort,
        setUniqFilter,
        setOR,
        pageInfo: userPageInfo,
        setPage,
        getLoading,
    } = useHook;
    const { filterEnd, filterStart, hanldeCreateDateChange } = useDateFilter({
        filter,
        setFilter,
    });
    const idHooks = useIdSelecter(users.map((user) => user._id));
    const { selectAll, selectedIds } = idHooks;
    const singleSort = useSingleSort(sort, setSort);
    const [popupId, setPopUserId] = useState("");
    const [restartUsers] = useRestartUsers({
        onCompleted: ({ RestartUser }) => {
            if (RestartUser.ok) {
                alert("유저 활동이 재개되었습니다.");
            }
        },
    });
    const [stopUsers] = useStopUsers({
        onCompleted: ({ StopUser }) => {
            if (StopUser.ok) {
                alert("유저 활동이 정지되었습니다.");
            }
        },
    });
    const [resignUser] = useUserResign({
        onCompleted: ({ UserResign }) => {
            if (UserResign.ok) {
                alert("유저 탈퇴완료");
            }
        },
    });
    const [updateUser] = useUserUpdate();
    const [signUpAccept] = useSignUpAccept();
    const [signUpDeny] = useSignUpDeny();
    const [denyPopId, setDenyPopId] = useState("");

    const handleDenyPop = (userId: string) => () => {
        setDenyPopId(userId);
        openModal("#DenyPopup")();
    };

    const handleSignUpAccept = (userIds: string[]) => {
        signUpAccept({
            variables: {
                userIds,
            },
        });
    };

    const handleSignUpDeny = (userIds: string[], reason: string) => {
        signUpDeny({
            variables: {
                userIds,
                reason,
            },
        });
    };

    const setIsForeginer = (foreginer?: boolean) => () => {
        filter.is_froreginer_eq = foreginer;
        setFilter({ ...filter });
    };

    const setGenderFilter = (gender?: Gender) => () => {
        filter.gender_eq = gender;
        setFilter({ ...filter });
    };

    const selected = selectedIds[0];

    const handleResignUser = (userId?: string) => {
        const targetUser = users.find((u) => u._id === userId);
        if (targetUser) {
            const data = prompt(
                `해당 유저를 탈퇴 시킬려면 ${targetUser.name}를 정확히 입력해 주세요.`
            );
            if (!data) return;
            if (data !== targetUser.name) {
                alert("입력값이 정확하지 않습니다.");
                return;
            }
        }
        if (targetUser || confirm("정말로 해당 유저를 삭제하십니까?")) {
            const reason =
                prompt("탈퇴사유를 입력해주세요.") || "매니저에의한 탈퇴";
            resignUser({
                variables: {
                    reason,
                    resignReasonType: "manager",
                    _id: userId || selected,
                    pw: "", //마스터 일때는 안넣어도됨
                },
            });
        }
    };

    const handleStopUser = (userIds?: string[]) => {
        if (!confirm(`정말로 유저를 정지 시키겠습니까?`)) return;
        stopUsers({
            variables: {
                reason: "",
                userIds: userIds || selectedIds,
            },
        }).then(({ data }) => {
            if (data?.StopUser.ok) alert("해당 유저들을 정지 하였습니다.");
        });
    };
    const handleRestartUser = (userIds?: string[]) => {
        restartUsers({
            variables: {
                userIds: userIds || selectedIds,
            },
        }).then(({ data }) => {
            if (data?.RestartUser.ok)
                alert("해당 유저들의 활동이 재개 되었습니다.");
        });
    };

    const handleViewResignReason = () => {
        openModal("#ResignReason")();
    };

    const handleViewDetailUser = (id: string) => () => {
        setPopUserId(id);
        setTimeout(() => {
            openModal("#UserModal")();
        }, 100);
    };

    const handleViewUserBoard = (user: Fuser) => () => {
        setPopupUser(user);
        setTimeout(() => {
            openModal("#BoardModal")();
        }, 100);
    };

    const doSearch = (search: string) => {
        if (searchType) {
            setUniqFilter(
                searchType,
                ["name_eq", "email_eq", "phoneNumber_eq"],
                search
            );
        } else {
            setOR(["name_eq", "email_eq", "phoneNumber_eq"], search);
        }
    };
    const checkOnGender = (gender?: Gender) =>
        gender === filter.gender_eq ? "on" : "";
    const checkOnForeginer = (isForeginer?: boolean) =>
        isForeginer === filter.is_froreginer_eq ? "on" : "";
    const checkOnAllGender = () => (filter.gender_eq === undefined ? "on" : "");
    const checkOnAllForgien = () =>
        filter.is_froreginer_eq === undefined ? "on" : "";

    const handlers: UserMasterHandler = {
        handleViewDetailUser,
        handleRestartUser,
        handleStopUser,
        handleResignUser,
        handleViewUserBoard,
        handleSignUpDeny,
        handleSignUpAccept,
        handleDenyPop,
    };

    return (
        <MasterLayout>
            <div className="in partner">
                <h4>회원관리</h4>
                <div className="in_content">
                    <MemberTopNav />
                    <div className="con family">
                        {isIndiTap && <h5 className="tap__title">개인회원</h5>}
                        {isNonBusiPartnerTap && (
                            <h5 className="tap__title">기업파트너 회원</h5>
                        )}
                        {isBusiTap && (
                            <h5 className="tap__title">개인파트너 회원</h5>
                        )}
                        {isSignOut && <h5 className="tap__title">탈퇴회원</h5>}
                        <div className="con_box_top pb5">
                            <MasterSearchBar
                                filterEnd={filterEnd}
                                filterStart={filterStart}
                                onDateChange={hanldeCreateDateChange}
                                defaultRange={{}}
                                doSearch={doSearch}
                                Option={
                                    <select
                                        value={searchType}
                                        onChange={(e) => {
                                            const type = e.currentTarget.value;
                                            setSearchType(type as TuniqSearch);
                                        }}
                                        className="option"
                                    >
                                        {BoardOptions}
                                        <option value={undefined}>전체</option>
                                        <option
                                            value={"name_eq" as TuniqSearch}
                                        >
                                            이름
                                        </option>
                                        <option
                                            value={"email_eq" as TuniqSearch}
                                        >
                                            아이디
                                        </option>
                                        <option
                                            value={
                                                "phoneNumber_eq" as TuniqSearch
                                            }
                                        >
                                            휴대폰
                                        </option>
                                    </select>
                                }
                            />
                            <MasterAlignMent
                                Sort={
                                    <SingleSortSelect {...singleSort}>
                                        {SortOptions}
                                        <option value={_UserSort.createdAt_asc}>
                                            가입일 &uarr;
                                        </option>
                                        <option
                                            value={_UserSort.createdAt_desc}
                                        >
                                            가입일 &darr;
                                        </option>
                                        <option value={_UserSort.name_asc}>
                                            이름 오름순
                                        </option>
                                        <option value={_UserSort.name_desc}>
                                            이름 내림순
                                        </option>
                                    </SingleSortSelect>
                                }
                                setViewCount={setViewCount}
                                viewCount={viewCount}
                                handleSelectAll={selectAll}
                                LeftDiv={
                                    <div>
                                        <ul className="board_option">
                                            <li
                                                onClick={setIsForeginer(
                                                    undefined
                                                )}
                                                className={checkOnAllForgien()}
                                            >
                                                <a>
                                                    전체
                                                    <strong>
                                                        {totalIndiMemberCount}
                                                    </strong>
                                                </a>
                                            </li>
                                            <li
                                                onClick={setIsForeginer(false)}
                                                className={checkOnForeginer(
                                                    false
                                                )}
                                            >
                                                <a>
                                                    내국인
                                                    <strong>
                                                        {koreanMemberCount}
                                                    </strong>
                                                </a>
                                            </li>
                                            <li
                                                onClick={setIsForeginer(true)}
                                                className={checkOnForeginer(
                                                    true
                                                )}
                                            >
                                                <a>
                                                    외국인
                                                    <strong>
                                                        {foreginMemberCount}
                                                    </strong>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="board_option">
                                            <li
                                                onClick={setGenderFilter(
                                                    undefined
                                                )}
                                                className={checkOnAllGender()}
                                            >
                                                <a>
                                                    전체
                                                    <strong>
                                                        {totalIndiMemberCount}
                                                    </strong>
                                                </a>
                                            </li>
                                            <li
                                                onClick={setGenderFilter(
                                                    GENDER.MAIL
                                                )}
                                                className={checkOnGender(
                                                    GENDER.MAIL
                                                )}
                                            >
                                                <a>
                                                    남
                                                    <strong>
                                                        {koreanMemberCount}
                                                    </strong>
                                                </a>
                                            </li>
                                            <li
                                                onClick={setGenderFilter(
                                                    GENDER.FEMALE
                                                )}
                                                className={checkOnGender(
                                                    GENDER.FEMALE
                                                )}
                                            >
                                                <a>
                                                    녀
                                                    <strong>
                                                        {foreginMemberCount}
                                                    </strong>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="board_option">
                                            <li
                                                onClick={() => {
                                                    userWriteModal.openModal();
                                                }}
                                            >
                                                <a>수기등록</a>
                                            </li>
                                        </ul>
                                    </div>
                                }
                            />
                        </div>
                        <Change change={!getLoading}>
                            <Table
                                handleUser={handlers}
                                idSelectHook={idHooks}
                                userHook={useHook}
                            />
                        </Change>
                    </div>
                </div>
                <SearcfInfoBox />
                <ResignModal />
                {/* popup-작성한 게시글 보기 */}
                {popupUser && <BoardModal user={popupUser} />}
                <UserModal handlers={handlers} userId={popupId} />
                <UserHandWriteModalWrap {...userWriteModal} />
                <Prompt
                    title="회원가입 승인 거절"
                    onSubmit={(reason: string) => {
                        handleSignUpDeny([denyPopId], reason);
                        closeModal("#DenyPopup")();
                    }}
                    id="DenyPopup"
                />
            </div>
        </MasterLayout>
    );
};
