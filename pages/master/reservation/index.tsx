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
import { bookingList_BookingList_data, BookingStatus, ProductStatus, _BookingFilter, _ProductFilter } from '../../../types/api';
import { Prompt } from '../../../components/promptModal/Prompt';
import { openModal, openModalTimeSet } from '../../../utils/popUp';
import { Change } from '../../../components/loadingList/LoadingList';
import { Modal } from 'components/modal/Modal';


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
                                        <div className="info">
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
                        <h4>회원정보</h4>
                        <div className="info_table w100">
                            <div className="tr">
                                <div className="th01">회원</div>
                                <div className="td01">
                                    <select className="w30">
                                        <option>개인</option>
                                        <option>기업파트너</option>
                                        <option>개인파트너</option>
                                    </select>
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">이메일</div>
                                <div className="td01"><input type="text" className="w80" placeholder="이메일을 입력해주세요." /></div>
                                <div className="th02">닉네임</div>
                                <div className="td02"><input type="text" className="w50" placeholder="" /></div>
                            </div>
                            <div className="tr">
                                <div className="th01">비밀번호</div>
                                <div className="td01"><input type="text" className="w80" placeholder="" /></div>
                                <div className="th02">비밀번호 확인</div>
                                <div className="td02"><input type="text" className="w80" placeholder="" /></div>
                            </div>
                            <div className="tr">
                                <div className="th01">이름</div>
                                <div className="td01"><input type="text" className="w50" placeholder="" /></div>
                                <div className="th02">국적</div>
                                <div className="td02">
                                    {/* <ul className="country_check">
                                        <li className={`c_in ${!data.is_froreginer ? "on" : ""}`}
                                            onClick={handleNationality(true)}>내국인</li>
                                        <li className={`c_out ${data.is_froreginer ? "on" : ""}`}
                                            onClick={handleNationality(false)}>외국인</li>
                                    </ul> */}
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">성별</div>
                                <div className="td01">
                                    {/* <ul className="gender_check">
                                        <li className={`female ${data.gender == GENDER.FEMALE ? "on" : ""}`}
                                            onClick={handleGender(GENDER.FEMALE)}>여</li>
                                        <li className={`men ${data.gender == GENDER.MAIL ? "on" : ""}`}
                                            onClick={handleGender(GENDER.MAIL)}>남</li>
                                    </ul> */}
                                </div>
                                <div className="th02">연락처</div>
                                <div className="td02"><input type="text" className="w80" placeholder="'-'없이 입력해주세요." /></div>
                            </div>
                        </div>

                        <h4>파트너 정보</h4>
                        <div className="info_table w100">
                            <div className="tr">
                                <div className="th01">파트너명(회사명)</div>
                                <div className="td01"><input type="text" className="w50" placeholder="" /></div>
                                <div className="th02">사업자번호</div>
                                <div className="td02">
                                    <select className="w20 mr10">
                                        <option>개인</option>
                                        <option>법인</option>
                                    </select>
                                    <input type="text" className="w50" placeholder="" />
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">대표 전화번호</div>
                                <div className="td01"><input type="text" className="w80" placeholder="" /></div>
                                <div className="th02">사업자등록증</div>
                                <div className="td02"><input type="text" className="w50" placeholder="" /><button type="button" className="btn small">업로드</button></div>
                            </div>
                            <div className="tr">
                                <div className="th01">주소</div>
                                <div className="td01 full">
                                    <input type="text" className="w50" placeholder="" /><button type="button" className="btn small">주소찾기</button><br />
                                    <input type="text" className="w80" placeholder="상세주소를 입력해주세요." />
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">담당자</div>
                                <div className="td01"><input type="text" className="w50" placeholder="" /></div>
                                <div className="th02">담당자 연락처</div>
                                <div className="td02"><input type="text" className="w50" placeholder="" /></div>
                            </div>
                            <div className="tr">
                                <div className="th01">정산계좌</div>
                                <div className="td01">
                                    <select className="w20 mr10">
                                        <option>=은행명=</option>
                                        <option>부산은행</option>
                                    </select>
                                    <input type="text" className="w50" placeholder="" />
                                </div>

                            </div>
                        </div>


                        <h4>
                            기타 정보
                            <div className="full_div__right">
                                <span className="checkbox mr5">
                                    <input type="checkbox" id="agree1" title="동의" /><label htmlFor="agree1" />
                                </span>
                                모두 동의합니다.
                            </div>
                        </h4>
                        <div className="info_table w100">
                            <div className="tr">
                                <div className="th01">SNS 수신동의</div>
                                <div className="td01">
                                    <span className="checkbox mr5">
                                        <input type="checkbox" id="agree1" title="동의" /><label htmlFor="agree1" />
                                    </span>
                                    동의합니다.
                                </div>
                                <div className="th02">E-mail 수신동의</div>
                                <div className="td02">
                                    <span className="checkbox mr5">
                                        <input type="checkbox" id="agree1" title="동의" /><label htmlFor="agree1" />
                                    </span>
                                    동의합니다.
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">개인정보 수집 및 이용 동의</div>
                                <div className="td01">
                                    <span className="checkbox mr5">
                                        <input type="checkbox" id="agree1" title="동의" /><label htmlFor="agree1" />
                                    </span>
                                    동의합니다.
                                </div>
                                <div className="th02">개인정보처리 위탁</div>
                                <div className="td02">
                                    <span className="checkbox mr5">
                                        <input type="checkbox" id="agree1" title="동의" /><label htmlFor="agree1" />
                                    </span>
                                    동의합니다.
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">여행자약관</div>
                                <div className="td01">
                                    <span className="checkbox mr5">
                                        <input type="checkbox" id="agree1" title="동의" /><label htmlFor="agree1" />
                                    </span>
                                    동의합니다.
                                </div>
                                <div className="th02">개인정보 제3자 제공</div>
                                <div className="td02">
                                    <span className="checkbox mr5">
                                        <input type="checkbox" id="agree1" title="동의" /><label htmlFor="agree1" />
                                    </span>
                                    동의합니다.
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">마케팅정보 수신동의</div>
                                <div className="td01">
                                    <span className="checkbox mr5">
                                        <input type="checkbox" id="agree1" title="동의" /><label htmlFor="agree1" />
                                    </span>
                                    동의합니다.
                                </div>
                                <div className="th02">파트너약관</div>
                                <div className="td02">
                                    <span className="checkbox mr5">
                                        <input type="checkbox" id="agree1" title="동의" /><label htmlFor="agree1" />
                                    </span>
                                    동의합니다.
                                </div>
                            </div>
                            <div className="tr">
                                <div className="th01">이용약관</div>
                                <div className="td01">
                                    <span className="checkbox mr5">
                                        <input type="checkbox" id="agree1" title="동의" /><label htmlFor="agree1" />
                                    </span>
                                    동의합니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn">수기 등록하기</button>
            </div>
        </Modal>
    </MasterLayout >
};

export default MsReservationMain;