import { MasterLayout } from 'layout/MasterLayout';
import { SearcfInfoBox } from 'components/common/SearcfInfoBox';
import React, { useState } from 'react';
import Link from "next/link";
import { useProductList } from '../../../hook/useProduct';
import { yyyymmdd } from '../../../utils/yyyymmdd';
import { generateSearchLink } from '../../search';
import { getTypeTextOfProduct } from '../../../utils/product';
import { PordStatusBadge } from '../../../components/Status/StatusBadge';
import { useCustomCount } from '../../../hook/useCount';
import { useDateFilter } from '../../../hook/useSearch';
import { MasterSearchBar } from '../../../components/master/MasterSearchBar';
import { openModal } from '../../../utils/popUp';
import { MasterAlignMent } from '../../../components/master/MasterAlignMent';
import { useIdSelecter } from '../../../hook/useIdSelecter';
import { getExcelByProduct } from '../../../utils/getExcelData';
import { ProductModal } from '../../../components/productModal/ProductModal';
import { GoodsTopNav } from '../../../components/topNav/MasterTopNav';
import { BookingStatus, ProductElseReq, productElseReq, ProductStatus } from '../../../types/api';
import { SingleSortSelect } from '../../../components/common/SortSelect';
import { useSingleSort } from '../../../hook/useSort';
import { ALLOW_ADMINS } from '../../../types/const';
import { auth } from '../../../utils/with';
import { Paginater } from '../../../components/common/Paginator';
import { ReqBadge, reqToKr } from '../../../utils/enumToKr';

interface IProp { }

const popupOpen = () => {
    $('#Popup01').css({
        'display': 'flex'
    });

}
const popupClose = () => {
    $('#Popup01').css({
        'display': 'none'
    });
}
const popupOpen1 = () => {
    $('#MiniPopup01').css({
        'display': 'flex'
    });

}
const popupClose1 = () => {
    $('#MiniPopup01').css({
        'display': 'none'
    });
}

const popupOpen2 = () => {
    $('#MiniPopup02').css({
        'display': 'flex'
    });

}
const popupClose2 = () => {
    $('#MiniPopup02').css({
        'display': 'none'
    });
}
export const MsGoodsMain: React.FC<IProp> = () => {
    const { items, filter, setFilter, setSort, sort, viewCount, setViewCount, setUniqFilter, setPage, pageInfo } = useProductList();
    const { filterEnd, filterStart, hanldeCreateDateChange } = useDateFilter({ filter, setFilter });
    const { selectAll, toggleAll, isAllSelected, isChecked, toggle } = useIdSelecter(items.map((item, i) => item._id));
    const singleSort = useSingleSort(sort, setSort)
    const [popProductId, setPopProductId] = useState("");

    const {
        elseReqCount,
        totalProductCountMaster,
        openProductCountMaster,
        cancelProductCountMaster,
        compeltedProductCountMaster,
        refusedCountMaster,
        productRegistCount,
        updateRequestRefuseCountMaster,
        compeltedBookingCountMaster,
        undeterMinedProductCountMaster,
        determiendProductCountMaster,
        createRequestCountMaster,
        updateRequestCountMaster
    } = useCustomCount([
        "elseReqCount",
        "createRequestCountMaster",
        "totalProductCountMaster",
        "refusedCountMaster",
        "compeltedProductCountMaster",
        "totalProductCountMaster",
        "openProductCountMaster",
        "cancelProductCountMaster",
        "compeltedProductCountMaster",
        "updateRequestCountMaster",
        "updateRequestRefuseCountMaster"
    ]);

    const handleOpen = (id: string) => () => {
        setPopProductId(id);
        setTimeout(() => {
            openModal("#ProductModal")()
        }, 100)
    }

    const handleOpenWrite = () => {

    }

    const doSearch = () => {

    }

    const setType = (status?: ProductStatus) => () => {
        setUniqFilter("status_eq", ["status_eq", "determined_eq"], status)
    }

    const setElseReq = (req?: productElseReq) => () => {
        setFilter({
            elseReq_not_eq: undefined
        })

    }

    const setDetermine = (isDetermined: boolean) => () => {
        setUniqFilter("determined_eq", ["status_eq", "determined_eq"], isDetermined)
    }

    const checkOnDetermined = (isDetermined: boolean) => isDetermined === filter.determined_eq ? "on" : "";
    const checkOnStatus = (status?: ProductStatus) => status === filter.status_eq ? "on" : "";
    const checkOnElseReq = (req?: ProductElseReq) => req === filter.elseReq_not_eq ? undefined : ""

    return <MasterLayout>
        <div className="in ">
            <h4>상품관리</h4>
            <div className="in_content">
                <GoodsTopNav />
                <div className="con goods">
                    <div className="con_box_top pb5">
                        <div className="top_info_number">
                            <ul className="ln4">
                                <li>
                                    <strong>{totalProductCountMaster}</strong>
                                    <span>전체</span>
                                </li>
                                <li>
                                    <strong>{openProductCountMaster || 0}</strong>
                                    <span>판매중</span>
                                </li>
                                <li>
                                    <strong>{cancelProductCountMaster}</strong>
                                    <span>판매중지</span>
                                </li>
                                <li>
                                    <strong>{compeltedProductCountMaster}</strong>
                                    <span>판매완료</span>
                                </li>
                            </ul>
                        </div>
                        <MasterSearchBar onDateChange={hanldeCreateDateChange} Option={
                            <select className="option">
                                <option>상품명</option>
                                <option>상품번호</option>
                            </select>
                        } defaultRange={{}} doSearch={doSearch} filterEnd={filterEnd} filterStart={filterStart} />
                        <MasterAlignMent
                            LeftDiv={
                                <ul className="board_option">
                                    <li onClick={setType(undefined)} className={checkOnStatus(undefined)}><a>전체<strong>{totalProductCountMaster}</strong></a></li>
                                    <li onClick={setDetermine(true)} className={checkOnDetermined(true)}><a>출발확정<strong>{determiendProductCountMaster}</strong></a></li>
                                    <li onClick={setDetermine(false)} className={checkOnDetermined(false)}><a>미확정<strong>{undeterMinedProductCountMaster}</strong></a></li>
                                    <li onClick={setType(ProductStatus.OPEN)} className={checkOnStatus(ProductStatus.OPEN)}><a>판매중<strong>{openProductCountMaster}</strong></a></li>
                                    <li onClick={setType(ProductStatus.CANCELD)} className={checkOnStatus(ProductStatus.CANCELD)}><a>여행취소<strong>{cancelProductCountMaster}</strong></a></li>
                                    <li onClick={setType(ProductStatus.READY)} className={checkOnStatus(ProductStatus.READY)}><a>기획요청<strong>{createRequestCountMaster}</strong></a></li>
                                    <li onClick={setType(ProductStatus.REFUSED)} className={checkOnStatus(ProductStatus.REFUSED)}><a>기획반려<strong>{refusedCountMaster}</strong></a></li>
                                    <li onClick={setType(ProductStatus.UPDATE_REQ)} className={checkOnStatus(ProductStatus.UPDATE_REQ)}><a>수정요청<strong>{updateRequestCountMaster}</strong></a></li>
                                    <li onClick={setType(ProductStatus.UPDATE_REQ_REFUSED)} className={checkOnStatus(ProductStatus.UPDATE_REQ_REFUSED)}><a>수정반려<strong>{updateRequestCountMaster}</strong></a></li>
                                    <li onClick={setElseReq()} className={checkOnElseReq()}><a>기타요청<strong>{elseReqCount}</strong></a></li>
                                </ul>
                            }
                            Sort={
                                <SingleSortSelect {...singleSort} />
                            }
                            excelData={getExcelByProduct(items)}
                            viewCount={viewCount}
                            setViewCount={setViewCount}
                            handleSelectAll={selectAll}
                            rightDiv={
                                <li onClick={handleOpenWrite}><a>신규여행작성</a></li>
                            }
                        />
                    </div>
                    <div className="con_box_body master__table">
                        <div className="list_head">
                            {/* <div className="td01">
                                <i className="checkbox">
                                    <input onChange={toggleAll} checked={isAllSelected} type="checkbox" name="agree" id="agree0" title="전체선택" />
                                    <label htmlFor="agree0" />
                                </i>
                            </div> */}
                            <div className="td02">카테고리</div>
                            <div className="td03">상품번호</div>
                            <div className="td04">상품명</div>
                            <div className="td05">여행일</div>
                            <div className="td06">인원</div>
                            <div className="td07">형태</div>
                            <div className="td08">상태</div>
                            <div className="td09">상세보기</div>
                        </div>

                        {items.map((item, i) =>
                            <div key={item._id} className="list_line">
                                {/* <div className="td01">
                                    <i className="checkbox">
                                        <input onChange={() => { toggle(item._id) }} checked={isChecked(item._id)} type="checkbox" name="agree" id={`agree${i}`} title="선택" />
                                        <label htmlFor={`agree${i}`} />
                                    </i>
                                </div> */}
                                <div className="td02"><i className="m_title">카테고리:</i>{item.category?.label}</div>
                                <div className="td03"><i className="m_title">상품번호:</i>{item.code}</div>
                                <div className="td04"><div className="goods__info_title"><Link href={generateSearchLink({ title: item.title })}><a className="title"> {item.title} <ReqBadge req={item.elseReq} /></a></Link></div></div>
                                <div className="td05"><i className="m_title">여행일:</i>{yyyymmdd(item.createdAt)}</div>
                                <div className="td06"><i className="m_title">인원:</i> {item.compeltePeopleCnt}/{item.maxMember}</div>
                                <div className="td07"><i className="m_title">형태:</i>{getTypeTextOfProduct(item.type, item.dateRange)}</div>
                                <div className="td08"><PordStatusBadge status={item.status} /> </div>
                                <div className="td09"><button onClick={handleOpen(item._id)} className="btn small">상세보기</button></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Paginater setPage={setPage} pageInfo={pageInfo} />
            <SearcfInfoBox />
            <ProductModal productId={popProductId} />
            {/* popup-기획반려 사유 */}
        </div>
    </MasterLayout >
};

export default auth(ALLOW_ADMINS)(MsGoodsMain);