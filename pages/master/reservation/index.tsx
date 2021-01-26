import { MasterLayout } from 'layout/MasterLayout';
import { SearcfInfoBox } from 'components/common/SearcfInfoBox';
import React, { useState } from 'react';
import { useBookingCancel, useBookingList } from '../../../hook/useBooking';
import { useDateFilter } from '../../../hook/useSearch';
import { useIdSelecter } from '../../../hook/useIdSelecter';
import { useSingleSort } from '../../../hook/useSort';
import { ResvTopNav } from '../../../components/topNav/MasterTopNav';
import { useQueryFilter } from '../../../hook/useQueryFilter';
import { useCustomCount } from '../../../hook/useCount';
import { MasterSearchBar } from '../../../components/master/MasterSearchBar';
import { SingleSortSelect } from '../../../components/common/SortSelect';
import { getExcelByBookings } from '../../../utils/getExcelData';
import { MasterAlignMent } from '../../../components/master/MasterAlignMent';
import { yyyymmdd } from '../../../utils/yyyymmdd';
import { bookingStatus, determinedKr, itemTypeToKr, payMethodToKR, productStatus } from '../../../utils/enumToKr';
import { autoComma } from '../../../utils/formatter';
import { bookingList_BookingList_data, BookingStatus, Fproduct, ProductStatus, _BookingFilter, _ProductFilter } from '../../../types/api';
import { Prompt } from '../../../components/promptModal/Prompt';
import { openModal, openModalTimeSet } from '../../../utils/popUp';
import { Change } from '../../../components/loadingList/LoadingList';
import { Modal } from 'components/modal/Modal';
import ProductSearcher from 'components/productSearcher/ProductSearcher2';
import { ProductSelectModal } from 'components/ProductSelectModal';


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
export const MsReservationMain: React.FC<IProp> = () => {
    const { totalBookingCountMaster, readyBookingCountMaster, compeltedBookingCountMaster } = useCustomCount(["totalBookingCountMaster", "readyBookingCountMaster", "compeltedBookingCountMaster"])
    const { items, filter, setFilter, pageInfo, sort, setSort, viewCount, setViewCount, page, setPage, getLoading } = useBookingList()
    const { setUniqFilter } = useQueryFilter<_ProductFilter>({})
    const { filterStart, filterEnd, hanldeCreateDateChange } = useDateFilter({ filter, setFilter })
    const { check, isChecked, toggle, isAllSelected, selectAll, selectedIds, setSelectedIds, unCheck, unSelectAll } = useIdSelecter(items.map(i => i._id));
    const singleSort = useSingleSort(sort, setSort);
    const [bookingCancel] = useBookingCancel();
    const [popupItem, setPopupItem] = useState<bookingList_BookingList_data>()

    const doSearch = (search: string) => {
        setUniqFilter(
            "title_contains",
            ["title_contains"],
            search
        )
    }

    const handleSatus = (status?: BookingStatus) => () => {
        setFilter({
            ...filter,
            status_eq: status
        })
    }

    const checkStatusOn = (status?: BookingStatus) => filter.status_eq === status ? "check on" : ""

    const handleCancel = (reason: string) => {
        if (!popupItem) throw Error
        bookingCancel({
            variables: {
                reason,
                bookingId: popupItem._id,
            }
        })
    }

    const openCacnelPrompt = (item: bookingList_BookingList_data) => () => {
        setPopupItem(item);
        openModalTimeSet("BookingCancelModal", 100)
    }


    return <MasterLayout>
        <div className="in ">
            <h4>예약관리</h4>
            <div className="in_content">
                <ResvTopNav />
                <div className="con reservation">
                    <div className="con_box_top pb5">
                        <div className="top_info_number">
                            <ul className="ln3">
                                <li>
                                    <strong>{totalBookingCountMaster}</strong>
                                    <span>전체</span>
                                </li>
                                <li>
                                    <strong>{readyBookingCountMaster}</strong>
                                    <span>예약대기</span>
                                </li>
                                <li>
                                    <strong>{compeltedBookingCountMaster}</strong>
                                    <span>예약완료</span>
                                </li>
                            </ul>
                        </div>

                        <MasterSearchBar onDateChange={hanldeCreateDateChange} Option={
                            <select className="option">
                                <option value={undefined}>전체</option>
                                <option value={"title_contains" as keyof _ProductFilter}>상품명</option>
                                <option value={"code_eq" as keyof _ProductFilter}>상품번호</option>
                                <option value={"code_eq" as keyof _ProductFilter}>예약번호</option>
                                {/* <option value={"" as keyof _ProductFilter}>예약자명</option> */}
                                <option value={"name" as keyof _BookingFilter}>여행자명</option>
                                {/* <option value={"" as keyof _BookingFilter}>휴대번호</option> */}
                                <option value={"code_eq" as keyof _ProductFilter}>상품상태</option>
                                <option value={"code_eq" as keyof _ProductFilter}>출발여부</option>
                            </select>
                        } defaultRange={{}} doSearch={doSearch} filterEnd={filterEnd} filterStart={filterStart} />
                        <MasterAlignMent
                            LeftDiv={
                                <div>
                                    <ul className="board_option">
                                        <li className="on"><a href="/">전체<strong>46</strong></a></li>
                                        <li><a href="/">여행<strong>23</strong></a></li>
                                        <li><a href="/">체험<strong>23</strong></a></li>
                                    </ul>
                                    <ul className="board_option">
                                        <li className="on"><a href="/">전체<strong>46</strong></a></li>
                                        <li><a href="/">온라인예약<strong>46</strong></a></li>
                                        <li><a >수기등록<strong>46</strong></a></li>
                                    </ul>
                                </div>
                            }
                            Sort={
                                <SingleSortSelect {...singleSort} />
                            }
                            excelData={getExcelByBookings(items)}
                            viewCount={viewCount}
                            setViewCount={setViewCount}
                            handleSelectAll={selectAll}
                        />
                    </div>
                    <div className="reservation_list ln07">
                        <div className="thead">
                            <div className="t01">
                                <span className="checkbox">
                                    <input checked={isAllSelected} onClick={selectAll} type="checkbox" name="agree" id="agree0" title="전체선택" />
                                    <label htmlFor="agree0" />
                                </span>
                            </div>
                            <div className="t02">예약번호/결제일/유형</div>
                            <div className="t03">상품정보</div>
                            <div className="t04">예약자/파트너명</div>
                            <div className="t05">상태</div>
                            <div className="t06">금액</div>
                            <div className="t07">관리</div>
                        </div>
                        <Change change={!getLoading}>
                            {items.map(item =>
                                <div key={item._id} className="tbody">
                                    <div className="t01">
                                        <span onClick={() => { toggle(item._id) }} className="checkbox">
                                            <input checked={isChecked(item._id)} onChange={() => { }} type="checkbox" name="agree" id="agree1" title="개별선택" />
                                            <label htmlFor="agree1" />
                                        </span>
                                    </div>
                                    <div className="t02">
                                        <div className="align">
                                            <strong className="r-number"><i className="m_title">예약번호:</i>{item.code}</strong>
                                            <span className="pay-day"><i className="m_title">예약일:</i>{yyyymmdd(item.createdAt)}</span>
                                            <span className="goods-ct"><i className="m_title">유형:</i>{itemTypeToKr(item.product.type)}</span>
                                        </div>
                                    </div>
                                    <div className="t03">
                                        <div className="info goods__info_title">
                                            <span className="ct">문화</span>   <span className="g-number">상품번호: {item.product.code}</span>
                                            <strong className="title">{item.product.title}</strong>
                                            <div className="txt">
                                                <span className="s-day">출발일: {yyyymmdd(item.product.startDate)}</span>
                                                <span className="where">출발장소: {item.product.startPoint}</span>
                                                <span className="men">인원: 총 {item.totalCount}명 (성인:{item.adultCount}/소아:{item.kidCount}/유아:{item.babyCount})</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="t04">
                                        <div className="align">
                                            <strong className="name"><i className="m_title">예약자명:</i>{item.name}</strong>
                                            <span className="patner-name"><i className="m_title">파트너명:</i>{item.product.author?.name}</span>
                                        </div>
                                    </div>
                                    <div className="t05">
                                        <div className="align">
                                            <strong><i className="m_title">상품상태:</i>{productStatus(item.product.status)}</strong>
                                            <span className="member"><i className="m_title">진행여부:</i>{determinedKr(item.product.determined)}<br />(인원 : 10/10 )</span>
                                        </div>
                                    </div>
                                    <div className="t06">
                                        <div className="align">
                                            <strong className="money"><i className="m_title">금액:</i>{autoComma(item.bookingPrice)}원</strong>
                                            <span className="pay-option"><i className="m_title">결제종류:</i>{payMethodToKR(item.payment?.payMethod)}</span>
                                            <span className="r-btn stand"><i className="m_title">예약상태:</i>{bookingStatus(item.status)}</span>
                                        </div>
                                    </div>
                                    <div className="t07">
                                        <div className="align">
                                            <button className="btn small" onClick={popupOpen}>상세보기</button>
                                            <button onClick={openCacnelPrompt(item)} className="btn small">예약취소</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Change>

                        {/* <Paginater pageNumber={10} totalPageCount={20} /> */}

                        <div className="fin ifMobile">
                            <div className="float_left">
                                <button type="submit" className="btn medium">전체선택</button>
                            </div>
                            <div className="float_right">
                                <button type="submit" className="btn medium">입금확인</button>
                                <button type="submit" className="btn medium">예약취소</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SearcfInfoBox />
            <Prompt onSubmit={handleCancel} title="예약 취소하기" id="BookingCancelModal" />
        </div>

        <Modal title="예약 수기등록" inClassName="master_popup handwritten_registration" className="popup_bg_full" id="HandwrittenRegistration">
            <div className="box">
                <h3>예약 수기등록</h3>
                <div className="info_page">
                    <div className="full_div">
                        <h4>상품선택</h4>
                        <div className="goodsall__choice">
                            {/* 상품 선택시에 아래 goodsall__choice_info 노출됨 */}
                            <div className="goodsall__choice_touch">
                                <button><i className="flaticon-add"></i>추가</button>
                            </div>
                            {/* goodsall__choice_info 노출됨과 동시에 goodsall__choice_touch 숨김*/}
                            <div className="goodsall__choice_info">
                                <a className="close_icon"><i className="flaticon-multiply"></i></a>
                                <div className="goodsall__list__img">
                                    <img src="https://pink-loader-storage.s3.amazonaws.com/1606957945551_thum_01.jpg" alt="상품이미지" />
                                </div>
                                <div className="goodsall__list__text">
                                    <div className="title">선진지 답사, 순천-담양편 1박2일</div>
                                    <div className="date">2020.12.30 ~ 2020.12.31</div>
                                </div>
                            </div>
                        </div>

                        <h4>상품 정보</h4>
                        <div className="info_table w100">
                            <div className="tr">
                                <div className="th01">상품타입</div>
                                <div className="td01">투어(연일)</div>
                                <div className="th02">카테고리</div>
                                <div className="td02">교육·답사여행</div>
                            </div>
                            <div className="tr">
                                <div className="th01">상품명</div>
                                <div className="td01">선진지 답사, 순천-담양편 1박2일</div>
                                <div className="th02">부제목</div>
                                <div className="td02">순천과 담양의 도시재생사례를 알아보는 여행</div>
                            </div>
                            <div className="tr">
                                <div className="th01">최소인원/최대인원</div>
                                <div className="td01">20/40</div>
                                <div className="th02">장소</div>
                                <div className="td02">순천/ 담양</div>
                            </div>
                            <div className="tr">
                                <div className="th01">출발장소</div>
                                <div className="td01">부산지하철1호선 부산역 4번출구</div>
                                <div className="th02">여행기간</div>
                                <div className="td02">
                                    2020.12.30 ~ 2020.12.31 (1박2일)
                                </div>
                            </div>
                        </div>

                        <h4>예약 정보</h4>
                        <div className="info_table w100">
                            <div className="tr">
                                <div className="th01">예약자명</div>
                                <div className="td01"><input type="text" className="w80" placeholder="" /></div>
                                <div className="th02">연락처</div>
                                <div className="td02"><input type="text" className="w80" placeholder="" /></div>
                            </div>
                            <div className="tr">
                                <div className="th01">예약자명</div>
                                <div className="td01"><input type="text" className="w80" placeholder="" /></div>
                                <div className="th02">연락처</div>
                                <div className="td02"><input type="text" className="w80" placeholder="" /></div>
                            </div>
                            <div className="tr">
                                <div className="th01">이메일</div>
                                <div className="td01"><input type="text" className="w80" placeholder="" /></div>
                                <div className="th02">성별</div>
                                <div className="td02">
                                    {/* <ul className="gender_check">
                                        <li className={`female ${data.gender == GENDER.FEMALE ? "on" : ""}`}
                                            onClick={handleGender(GENDER.FEMALE)}>여</li>
                                        <li className={`men ${data.gender == GENDER.MAIL ? "on" : ""}`}
                                            onClick={handleGender(GENDER.MAIL)}>남</li>
                                    </ul> */}
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">메모</div>
                                <div className="td01"><input type="text" className="w100" placeholder="" /></div>
                            </div>
                        </div>


                        <h4>결제 정보</h4>
                        <div className="info_table w100">
                            <div className="tr">
                                <div className="th01">인원선택</div>
                                <div className="td01">
                                    <div className="option__div">
                                        <div className="option__div_people">
                                            <strong>대인</strong>
                                            <span>30,000원</span>
                                            <div className="Number__box">
                                                <span className="left_btn">
                                                    <i className="flaticon-substract"></i>
                                                </span><span className="number">0</span>
                                                <span className="right_btn">
                                                    <i className="flaticon-add"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="option__div_people">
                                            <strong>소인</strong>
                                            <span>30,000원</span>
                                            <div className="Number__box">
                                                <span className="left_btn">
                                                    <i className="flaticon-substract"></i>
                                                </span><span className="number">0</span>
                                                <span className="right_btn">
                                                    <i className="flaticon-add"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="option__div_people">
                                            <strong>유아</strong>
                                            <span>30,000원</span>
                                            <div className="Number__box">
                                                <span className="left_btn">
                                                    <i className="flaticon-substract"></i>
                                                </span><span className="number">0</span>
                                                <span className="right_btn">
                                                    <i className="flaticon-add"></i>
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="tr">
                                <div className="th01">합계금액</div>
                                <div className="td01">
                                    <strong className="color02">30,000</strong>원
                                </div>
                                <div className="th02">결제방법</div>
                                <div className="td02">
                                    <select className="w50">
                                        <option>
                                            가상계좌
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">메모</div>
                                <div className="td01"><input type="text" className="w100" placeholder="" /></div>
                            </div>


                        </div>
                    </div>
                </div>
                <button className="btn">등록하기</button>
            </div>
        </Modal>
    </MasterLayout >
};

export default MsReservationMain;