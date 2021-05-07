import React, { useContext, useState } from "react";
import { MypageLayout } from "layout/MypageLayout";
import { auth } from "../../utils/with";
import { ALLOW_LOGINED, BG } from "../../types/const";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { useProductList } from "../../hook/useProduct";
import { useDateFilter } from "../../hook/useSearch";
import { useIdSelecter } from "../../hook/useIdSelecter";
import { itemTypeToKr, productStatus, ReqBadge } from "../../utils/enumToKr";
import { yyyymmdd } from "../../utils/yyyymmdd";
import Link from "next/link";
import { getUniqFilter } from "../../utils/filter";
import { MasterAlignMent } from "../../components/master/MasterAlignMent";
import { Paginater } from "../../components/common/Paginator";
import { SingleSortSelect } from "../../components/common/SortSelect";
import { useSingleSort } from "../../hook/useSort";
import { ProductStatus } from "../../types/api";
import { ProductModal } from "../../components/productModal/ProductModal";
import { openModalTimeSet } from "../../utils/popUp";
import { useSettlementsRequest } from "../../hook/useSettlement";
import { HandBookingModal } from "../../components/handBookingModal/HandBookingModal";
import { PordStatusBadge } from "../../components/Status/StatusBadge";
import { AppContext } from "../_app";
import { Change } from "../../components/loadingList/LoadingList";

interface IProp {}

export const Plainning: React.FC<IProp> = () => {
    const { myProfile, isParterNonB, isParterB, isManager } = useContext(
        AppContext
    );
    const {
        items,
        filter,
        setFilter,
        pageInfo,
        sort,
        setSort,
        viewCount,
        setViewCount,
        page,
        setPage,
        getLoading,
    } = useProductList({
        initialFilter: {
            authorEmail_eq: myProfile?.email,
        },
    });
    const { filterStart, filterEnd, hanldeCreateDateChange } = useDateFilter({
        filter,
        setFilter,
    });
    const {
        check,
        isChecked,
        selectAll,
        toggleAll,
        toggle,
        setSelectedIds,
        unCheck,
        unSelectAll,
    } = useIdSelecter(items.map((i) => i._id));
    const singleSort = useSingleSort(sort, setSort);
    const [settlementRquest] = useSettlementsRequest();
    const [popupProductId, setPopupProductId] = useState("");

    const doSearch = (search: string) => {
        const _filter = getUniqFilter(
            filter,
            "title_contains",
            ["title_contains"],
            search
        );

        setFilter({
            ..._filter,
        });
    };

    const handleSatus = (status?: ProductStatus) => () => {
        setFilter({
            ...filter,
            status_eq: status,
        });
    };

    const checkStatusOn = (status?: ProductStatus) =>
        filter.status_eq === status ? "check on" : "check";

    // const handleRequestSettlement = (productId:string) => () => {
    //     settlementRquest({
    //         variables: {
    //             params: [],
    //             settlementId
    //         }
    //     })
    // }

    const handleHandWriteModal = (productId: string) => () => {
        setPopupProductId(productId);
        openModalTimeSet("#HandwrittenRegistration");
    };

    const handleOpenProductModal = (productId: string) => () => {
        setPopupProductId(productId);
        openModalTimeSet("#ProductModal");
    };

    return (
        <MypageLayout>
            <div className="in goods_div">
                <h4>상품관리</h4>
                <div className="paper_div">
                    <div className="con_top">
                        <h6>상세검색</h6>
                        {/* //alt="search icon"  */}
                        <SearchBar
                            Status={
                                <div className="jul2">
                                    <div className="title">상태</div>
                                    <div className="text">
                                        <span
                                            onClick={handleSatus(undefined)}
                                            className={checkStatusOn(undefined)}
                                        >
                                            전체
                                        </span>
                                        <span
                                            onClick={handleSatus(
                                                ProductStatus.CANCELD
                                            )}
                                            className={checkStatusOn(
                                                ProductStatus.CANCELD
                                            )}
                                        >
                                            취소
                                        </span>
                                        <span
                                            onClick={handleSatus(
                                                ProductStatus.OPEN
                                            )}
                                            className={checkStatusOn(
                                                ProductStatus.OPEN
                                            )}
                                        >
                                            판매중
                                        </span>
                                        <span
                                            onClick={handleSatus(
                                                ProductStatus.COMPLETED
                                            )}
                                            className={checkStatusOn(
                                                ProductStatus.COMPLETED
                                            )}
                                        >
                                            완료
                                        </span>
                                        <span
                                            onClick={handleSatus(
                                                ProductStatus.UPDATE_REQ
                                            )}
                                            className={checkStatusOn(
                                                ProductStatus.UPDATE_REQ
                                            )}
                                        >
                                            수정요청
                                        </span>
                                        <span
                                            onClick={handleSatus(
                                                ProductStatus.REFUSED
                                            )}
                                            className={checkStatusOn(
                                                ProductStatus.REFUSED
                                            )}
                                        >
                                            생성반려
                                        </span>
                                        <span
                                            onClick={handleSatus(
                                                ProductStatus.UPDATE_REQ_REFUSED
                                            )}
                                            className={checkStatusOn(
                                                ProductStatus.UPDATE_REQ_REFUSED
                                            )}
                                        >
                                            수정반려
                                        </span>
                                    </div>
                                </div>
                            }
                            defaultRange={{
                                from: filterStart,
                                to: filterEnd,
                            }}
                            filterStart={filterStart}
                            filterEnd={filterEnd}
                            doSearch={doSearch}
                            onDateChange={hanldeCreateDateChange}
                            SearchSelect={
                                <select className="option">
                                    <option>제목</option>
                                </select>
                            }
                        />
                    </div>
                    <Change change={!getLoading}>
                        <div className="con_bottom">
                            <div className="con_box">
                                <MasterAlignMent
                                    handleSelectAll={toggleAll}
                                    LeftDiv={
                                        <span className="infotxt">
                                            총{" "}
                                            <strong>
                                                {pageInfo.totalCount}
                                            </strong>
                                            건
                                        </span>
                                    }
                                    Sort={<SingleSortSelect {...singleSort} />}
                                    setViewCount={setViewCount}
                                    viewCount={viewCount}
                                />
                                <div className="fuction_list_mini ln08">
                                    <div className="thead">
                                        {/* <div className="th01">
                                    <span onClick={selectAll} className="checkbox check2">
                                        <input type="checkbox" name="agree" id="agree0" title="전체선택" />
                                        <label htmlFor="agree0" />
                                    </span>
                                </div> */}
                                        <div className="th02">유형</div>
                                        <div className="th03">개시일</div>
                                        <div className="th04">상품</div>
                                        <div className="th05">출발일</div>
                                        <div className="th06">누적</div>
                                        <div className="th07">상태</div>
                                        <div className="th08">예약상태</div>
                                        <div className="th09">관리</div>
                                    </div>
                                    <div className="tbody">
                                        <ul>
                                            {items.map((item, i) => (
                                                <li key={item._id}>
                                                    {/* <div className="th01">
                                                <span className="checkbox check2">
                                                    <input onChange={() => { toggle(item._id) }} checked={isChecked(item._id)} type="checkbox" name="agree" id={`agree${i}`} title="개별선택" />
                                                    <label htmlFor={`agree${i}`} />
                                                </span>
                                            </div> */}
                                                    <div className="th02">
                                                        <span className="m_title">
                                                            유형:{" "}
                                                        </span>
                                                        {itemTypeToKr(
                                                            item.type
                                                        )}
                                                    </div>
                                                    <div className="th03">
                                                        <span className="m_title">
                                                            개시일:{" "}
                                                        </span>
                                                        {yyyymmdd(
                                                            item.createdAt
                                                        )}
                                                    </div>
                                                    <div className="th04">
                                                        <div
                                                            className="img"
                                                            style={BG(
                                                                item
                                                                    ?.images?.[0]
                                                                    ?.uri || ""
                                                            )}
                                                        ></div>
                                                        <div className="info goods__info_title">
                                                            <span className="ct">
                                                                {
                                                                    item
                                                                        .category
                                                                        ?.label
                                                                }
                                                            </span>
                                                            <span className="g-number">
                                                                상품번호:{" "}
                                                                {item.code}
                                                            </span>
                                                            <strong className="title">
                                                                {item.title}{" "}
                                                                <ReqBadge
                                                                    req={
                                                                        item.elseReq
                                                                    }
                                                                />
                                                            </strong>
                                                        </div>
                                                    </div>
                                                    <div className="th05">
                                                        <span className="m_title">
                                                            출발일:{" "}
                                                        </span>
                                                        {yyyymmdd(
                                                            item.startDate
                                                        )}
                                                    </div>
                                                    <div className="th06">
                                                        {/* 단위 : 명 */}
                                                        <span className="m_title">
                                                            누적:{" "}
                                                        </span>
                                                        <span className="people">
                                                            성인{" "}
                                                            {
                                                                item
                                                                    .bookerSummary
                                                                    .adultCount
                                                            }
                                                        </span>
                                                        <span className="m_title">
                                                            {" "}
                                                            /{" "}
                                                        </span>
                                                        <span className="people">
                                                            소아{" "}
                                                            {
                                                                item
                                                                    .bookerSummary
                                                                    .kidsCount
                                                            }
                                                        </span>
                                                        <span className="m_title">
                                                            {" "}
                                                            /{" "}
                                                        </span>
                                                        <span className="people">
                                                            유아{" "}
                                                            {
                                                                item
                                                                    .bookerSummary
                                                                    .babyCount
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="th07">
                                                        {/* 단위 : 건 */}
                                                        {/* <span className="m_title">
                                                            상태:{" "}
                                                        </span> */}
                                                        <PordStatusBadge
                                                            status={item.status}
                                                        />
                                                    </div>
                                                    <div className="th08">
                                                        {/* 단위 : 건 */}
                                                        <span className="m_title">
                                                            상태:{" "}
                                                        </span>
                                                        <span className="present">
                                                            예약{" "}
                                                            {
                                                                item
                                                                    .bookerSummary
                                                                    .completeBookCount
                                                            }
                                                        </span>
                                                        <span className="m_title">
                                                            {" "}
                                                            /{" "}
                                                        </span>
                                                        <span className="present">
                                                            대기{" "}
                                                            {
                                                                item
                                                                    .bookerSummary
                                                                    .readyBookCount
                                                            }
                                                        </span>
                                                        <span className="m_title">
                                                            {" "}
                                                            /{" "}
                                                        </span>
                                                        <span className="present">
                                                            환불{" "}
                                                            {
                                                                item
                                                                    .bookerSummary
                                                                    .readyBookCount
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="th09">
                                                        <Link
                                                            href={`/tour/write/${item._id}`}
                                                        >
                                                            <a className="btn medium">
                                                                상품수정
                                                            </a>
                                                        </Link>
                                                        {/*글수정으로 가기 */}
                                                        <i
                                                            onClick={handleOpenProductModal(
                                                                item._id
                                                            )}
                                                            className="btn medium"
                                                        >
                                                            상세보기
                                                        </i>
                                                        {/* POPUP */}
                                                        {item.status ===
                                                            ProductStatus.OPEN && (
                                                            <i
                                                                onClick={handleHandWriteModal(
                                                                    item._id
                                                                )}
                                                                className="btn"
                                                            >
                                                                예약등록
                                                            </i>
                                                        )}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Paginater
                                        setPage={setPage}
                                        pageInfo={pageInfo}
                                    />
                                </div>
                                <div className="fin boardNavigation">
                                    <div className="float_left"></div>
                                    <div className="float_right">
                                        {(isParterB ||
                                            isParterNonB ||
                                            isManager) && (
                                            <Link href="/tour/write">
                                                <a className="btn medium pointcolor">
                                                    상품 생성하기
                                                </a>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Change>
                </div>
            </div>
            <HandBookingModal
                key={popupProductId}
                defaultProductId={popupProductId}
            />
            <ProductModal key={popupProductId} productId={popupProductId} />
        </MypageLayout>
    );
};

export default auth(ALLOW_LOGINED)(Plainning);
