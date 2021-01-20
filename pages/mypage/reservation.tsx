import CalendarIcon from 'components/common/icon/CalendarIcon';
import { MypageLayout } from 'layout/MypageLayout';
import { Paginater } from 'components/common/Paginator';
import React, { useState } from 'react';
import { SearchBar } from '../../components/searchBar/SearchBar';
import { useDateFilter } from '../../hook/useSearch';
import { createOrSearch } from '../../utils/genFilter';
import { BookingStatus, _BookingFilter } from '../../types/api';
import { useBookingList } from '../../hook/useBooking';
import Excel from '../../components/excel/Execel';
import { useIdSelecter } from '../../hook/useIdSelecter';

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

export const MyReservation: React.FC<IProp> = () => {
    const { items, filter, setFilter } = useBookingList();
    const [searchType, setSearchType] = useState<"code" | "title" | "name">("code");
    const { check, isChecked, selectedIds } = useIdSelecter(items.map(i => i._id));

    const { hanldeCreateDateChange, filterEnd, filterStart } = useDateFilter({
        filter,
        setFilter,
        dateKey: "createdAt",
    });

    const doSearch = (search: string) => {
        const OR = createOrSearch<_BookingFilter>(["porductName_contains", "porductKeywards_in"], search);
        setFilter({
            ...filter,
            OR,
        })
    }

    const handleSatus = (status?: BookingStatus) => () => {
        setFilter({
            ...filter,
            status_eq: status
        })
    }

    const checkStatusOn = (status?: BookingStatus) => filter.status_eq === status ? "check on" : ""

    return <MypageLayout>
        <div className="in reservation_div">
            <h4>예약관리</h4>
            <div className="paper_div">
                <div className="con_top">
                    <h6>상세검색</h6>
                    <SearchBar
                        defaultRange={{}}
                        filterStart={filterStart}
                        filterEnd={filterEnd}
                        doSearch={doSearch} Status={
                            <div className="jul4">
                                <div className="title">상태</div>
                                <div className="text">
                                    <span onClick={handleSatus(undefined)} className={checkStatusOn(undefined)}>전체</span>
                                    <span onClick={handleSatus(BookingStatus.READY)} className={checkStatusOn(BookingStatus.READY)}>예약대기</span>
                                    <span onClick={handleSatus(BookingStatus.COMPLETE)} className={checkStatusOn(BookingStatus.COMPLETE)}>예약완료</span>
                                    <span onClick={handleSatus(BookingStatus.CANCEL)} className={checkStatusOn(BookingStatus.CANCEL)}>예약취소</span>
                                </div>
                            </div>
                        }
                        SearchSelect={
                            <select value={searchType} onChange={(e) => {
                                const val = e.currentTarget.value;
                                setSearchType(val as any);
                            }} className="option">
                                <option value={"code"}>상품코드</option>
                                <option value={"title"}>상품명</option>
                                <option value={"name"}>예약자</option>
                            </select>
                        }
                        onDateChange={hanldeCreateDateChange}
                    />
                </div>
                <div className="con_bottom">
                    <div className="con_box">
                        <div className="alignment">
                            <div className="left_div"><span className="infotxt">총 <strong>22,222</strong>건</span></div>
                            <div className="right_div">
                                <ul className="board_option">
                                    <li><a>모두선택</a></li>
                                    <li><a>모두선택 해제</a></li>
                                    <li><Excel data={[]} element={<a>엑셀파일</a>} /></li>
                                </ul>
                                <select className="sel01">
                                    <option>출발일 &uarr;</option>
                                    <option>출발일 &darr;</option>
                                    <option>등록일 &uarr;</option>
                                    <option>등록일 &darr;</option>
                                </select>
                                <select className="sel02">
                                    <option>10개 보기</option>
                                    <option>50개 보기</option>
                                    <option>100개 보기</option>
                                </select>
                            </div>
                        </div>
                        <div className="master__table">
                            <div className="th">
                                <div className="t01">
                                    <span className="checkbox">
                                        <input type="checkbox" name="agree" id="agree0" title="전체선택" />
                                        <label htmlFor="agree0" />
                                    </span>
                                </div>
                                <div className="t02">예약번호</div>
                                <div className="t04">상품정보</div>
                                <div className="t05">예약자</div>
                                <div className="t06">금액</div>
                                <div className="t07">상태</div>
                            </div>
                            <div className="td">
                                <div className="t01">
                                    <span className="checkbox">
                                        <input type="checkbox" name="agree" id="agree1" title="개별선택" />
                                        <label htmlFor="agree1" />
                                    </span>
                                </div>
                                <div className="t02">
                                    <div className="align">
                                        <span className="r-number"><i className="m_title">예약번호:</i>R-34252</span>
                                        <button className="btn" onClick={popupOpen}>상세정보</button>
                                    </div>
                                </div>
                                <div className="t04">
                                    <div className="img" style={{ backgroundImage: 'url(/img/store_01.jpg)' }} ></div>
                                    <div className="info">
                                        <span className="ct">문화</span><span className="g-number">상품번호: PK-034982</span>
                                        <strong className="title">떠나요~거제도~!!!!!!!!!!!!!!!!</strong>
                                        <div className="txt">
                                            <span className="s-day">출발일: 2020.9.9</span>
                                            <span className="where">출발장소: 부산대학교 앞</span>

                                            <span className="r-day">예약일: 2020.08.26</span>

                                            <span className="goods-state1">확정여부: 출발미정(6/10)</span>
                                            <span className="goods-state2">상품상태: 예약진행중</span>

                                        </div>
                                    </div>
                                </div>
                                <div className="t05">
                                    <div className="align">
                                        <span className="name"><i className="m_title">예약자:</i>홍언니</span>
                                        <span className="ph">010-2222-2222</span>
                                        <span className="men">예약인원: 총 4명<br />( 성인2 / 소아2 / 유아0 )</span>
                                    </div>
                                </div>
                                <div className="t06">
                                    <div className="align">
                                        <strong className="money"><i className="m_title">금액:</i>50,000원</strong>
                                        <span className="pay">결제종류: 신용카드</span>
                                        <span className="pay-day">결제일: 2020.08.26</span>
                                    </div>
                                </div>
                                <div className="t07">
                                    <div className="align">
                                        <i className="state re-ok">예약완료</i>
                                    </div>
                                </div>

                            </div>
                            <div className="td">
                                <div className="t01">
                                    <span className="checkbox">
                                        <input type="checkbox" name="agree" id="agree1" title="개별선택" />
                                        <label htmlFor="agree1" />
                                    </span>
                                </div>
                                <div className="t02">
                                    <div className="align">
                                        <span className="r-number"><i className="m_title">예약번호:</i>R-34252</span>
                                        <button className="btn" onClick={popupOpen}>상세정보</button>
                                    </div>
                                </div>
                                <div className="t04">
                                    <div className="img" style={{ backgroundImage: 'url(/img/store_01.jpg)' }} ></div>
                                    <div className="info">
                                        <span className="ct">문화</span> <span className="g-number">상품번호: PK-034982</span>
                                        <strong className="title">떠나요~거제도~!!!!!!!!!!!!!!!!</strong>
                                        <div className="txt">
                                            <span className="s-day">출발일: 2020.9.9</span>
                                            <span className="where">출발장소: 부산대학교 앞</span>

                                            <span className="r-day">예약일: 2020.08.26</span>

                                            <span className="goods-state1">확정여부: 출발미정(6/10)</span>
                                            <span className="goods-state2">상품상태: 예약진행중</span>

                                        </div>
                                    </div>
                                </div>
                                <div className="t05">
                                    <div className="align">
                                        <span className="name"><i className="m_title">예약자:</i>홍언니</span>
                                        <span className="ph">010-2222-2222</span>
                                        <span className="men">예약인원: 총 4명<br />( 성인2 / 소아2 / 유아0 )</span>
                                    </div>
                                </div>
                                <div className="t06">
                                    <div className="align">
                                        <strong className="money"><i className="m_title">금액:</i>50,000원</strong>
                                        <span className="pay">결제종류: 신용카드</span>
                                        <span className="pay-day">결제일: 2020.08.26</span>
                                    </div>
                                </div>
                                <div className="t07">
                                    <div className="align">
                                        <i className="state re-refund">예약취소</i>
                                        <span className="refund-txt">(예약취소대기:부분취소)</span>
                                    </div>
                                </div>

                            </div>
                            <div className="td">
                                <div className="t01">
                                    <span className="checkbox">
                                        <input type="checkbox" name="agree" id="agree1" title="개별선택" />
                                        <label htmlFor="agree1" />
                                    </span>
                                </div>
                                <div className="t02">
                                    <div className="align">
                                        <span className="r-number"><i className="m_title">예약번호:</i>R-34252</span>
                                        <button className="btn" onClick={popupOpen}>상세정보</button>
                                    </div>
                                </div>
                                <div className="t04">
                                    <div className="img" style={{ backgroundImage: 'url(/img/store_01.jpg)' }} ></div>
                                    <div className="info">
                                        <span className="ct">문화</span> <span className="g-number">상품번호: PK-034982</span>
                                        <strong className="title">떠나요~거제도~!!!!!!!!!!!!!!!!</strong>
                                        <div className="txt">
                                            <span className="s-day">출발일: 2020.9.9</span>
                                            <span className="where">출발장소: 부산대학교 앞</span>

                                            <span className="r-day">예약일: 2020.08.26</span>

                                            <span className="goods-state1">확정여부: 출발미정(6/10)</span>
                                            <span className="goods-state2">상품상태: 예약진행중</span>

                                        </div>
                                    </div>
                                </div>
                                <div className="t05">
                                    <div className="align">
                                        <span className="name"><i className="m_title">예약자:</i>홍언니</span>
                                        <span className="ph">010-2222-2222</span>
                                        <span className="men">예약인원: 총 4명<br />( 성인2 / 소아2 / 유아0 )</span>
                                    </div>
                                </div>
                                <div className="t06">
                                    <div className="align">
                                        <strong className="money"><i className="m_title">금액:</i>50,000원</strong>
                                        <span className="pay">결제종류: 신용카드</span>
                                        <span className="pay-day">결제일: 2020.08.26</span>
                                    </div>
                                </div>
                                <div className="t07">
                                    <div className="align">
                                        <i className="state re-stay">예약대기</i>
                                    </div>
                                </div>

                            </div>


                            {/* <Paginater pageNumber={10} totalPageCount={20} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* popup-상세보기 = 마스터>예약관리>예약.결제관리 상세보기와 같음*/}
        <div id="Popup01" className="popup_bg_full">
            <div className="in_txt master_popup">
                <a className="close_icon" onClick={popupClose}>
                    <i className="flaticon-multiply"></i>
                </a>
                <div className="page">
                    <h3>예약 상세정보</h3>
                    <div className="info_txt">
                        <span className="r-number">예약번호: <i>R-34252</i></span>
                        <span className="r-day">예약일: 2020.08.26</span>
                        <span className="pay-day">결제일: 2020.08.26</span>
                        <button className="btn"><i className="flaticon-print mr5"></i>프린터</button>
                        <button className="btn mr5"><i className="flaticon-download mr5"></i>엑셀저장</button>
                    </div>

                    <div className="info_table goodsinfo">
                        <div className="tr">
                            <div className="top01">
                                <div className="img" style={{ backgroundImage: 'url(/img/store_01.jpg)' }} ></div>
                                <div className="info">
                                    <span className="ct">문화</span><span className="g-number">상품번호: PK-034982</span>
                                    <strong className="title">떠나요~거제도~!!!!!!!!!!!!!!!!</strong>
                                    <div className="txt">
                                        <span className="goods-state1">확정여부: 출발미정(6/10)</span>
                                        <span className="goods-state2">상품상태: 예약진행중</span>

                                    </div>
                                </div>
                            </div>
                            <div className="top02">
                                <div className="align">
                                    <span className="s-day">출발일: 2020.9.9</span>
                                    <span className="where">출발장소: 부산대학교 앞</span>
                                </div>
                            </div>
                            <div className="top03">
                                <div className="align">
                                    <i className="state re-stay">예약대기</i>
                                    <span><i className="jandaicon-info2"></i>예약은 걸었으나 입금이 되지 않았습니다. 1일 이내에 입금을 하지 않으시면 예약대기가 풀립니다.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="info_page">
                        <div className="left_div">
                            <h4>결제 정보</h4>
                            <div className="info_table w50">
                                <div className="tr">
                                    <div className="th01">
                                        결제금액
                                </div>
                                    <div className="td01">
                                        <span>50,000</span>
                                    </div>
                                    <div className="th02">
                                        결제방법
                                </div>
                                    <div className="td02">
                                        <span>카드</span>
                                    </div>
                                </div>
                                <div className="tr">
                                    <div className="th01">
                                        환불정보-예금주
                                </div>
                                    <div className="td01">
                                        <span>홍언니</span>
                                    </div>
                                    <div className="th02">
                                        환불정보-계좌
                                </div>
                                    <div className="td02">
                                        <span>(부산은행)000-000-00000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right_div">
                            <h4>환불 정보</h4>
                            <div className="info_table w50">
                                <div className="tr">
                                    <div className="th01">
                                        취소신청일
                                </div>
                                    <div className="td01">
                                        <span>2020.12.12</span>
                                    </div>
                                    <div className="th02">
                                        환불예정일
                                </div>
                                    <div className="td02">
                                        <span>2020.12.13</span>
                                    </div>
                                </div>
                                <div className="tr">
                                    <div className="th01">
                                        환불형태
                                </div>
                                    <div className="td01">
                                        <span>부분취소</span>
                                    </div>
                                    <div className="th02">
                                        환불금액
                                </div>
                                    <div className="td02">
                                        <span>43,000원</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="info_page">
                        <div className="full_div">
                            <h4>예약자 정보</h4>
                            <div className="info_table peoplelist">
                                <div className="top_info">
                                    <span className="tt">선택된 예약 인원</span>
                                    <span>총 4명 ( 성인2 / 소아2 / 유아0 )</span>
                                    <span className="float_right"><i className="menok">예약자-포함</i><i className="menno">예약자-미포함</i></span> {/* 포함 미포함 둘중하나만 표시*/}
                                </div>
                                <div className="tr first">
                                    <div className="re01">
                                        예약자(본인)
                                    </div>
                                    <div className="re02">
                                        예약자명
                                    </div>
                                    <div className="re03">
                                        <span>홍언니</span>
                                    </div>
                                    <div className="re04">
                                        연락처
                                    </div>
                                    <div className="re05">
                                        <a href="tel:010-0000-0000">010-0000-0000</a>
                                    </div>
                                    <div className="re06">
                                        성별
                                </div>
                                    <div className="re07">
                                        <span>여성</span>
                                    </div>
                                    <div className="re08">
                                        나이
                                </div>
                                    <div className="re09">
                                        <span>1988-03-03 (만 32세)</span>
                                    </div>
                                </div>
                                <div className="tr">
                                    <div className="re01">
                                        여행자1
                                    <span className="cut_nev">
                                            <i className="flaticon-substract"></i>
                                            <i className="flaticon-add"></i>
                                        </span>
                                    </div>
                                    <div className="re02">
                                        여행자명
                                </div>
                                    <div className="re03">
                                        <span><input type="text" /></span>
                                    </div>
                                    <div className="re04">
                                        연락처
                                </div>
                                    <div className="re05">
                                        <span><input type="text" /></span>
                                    </div>
                                    <div className="re06">
                                        성별
                                </div>
                                    <div className="re07">
                                        <select>
                                            <option>여성</option>
                                            <option>남성</option>
                                        </select>
                                    </div>
                                    <div className="re08">
                                        나이
                                </div>
                                    <div className="re09">
                                        <span><input type="text" /> (만 --세)</span>{/*input박스 클릭시 달력이 나와야 함, 우측 나이 계산은 자동으로 출력*/}
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>


                    <div className="info_page">
                        <h4>메모</h4>
                        <div className="write_comment">
                            <div className="comment_layout">
                                <ul className="text_box">
                                    <li>
                                        <div className="txta w100">
                                            <textarea style={{ height: "100px;" }} placeholder="메모는 꼼꼼하게 체크는 정확하게"></textarea>
                                        </div>
                                    </li>
                                    <li className="tr count">0/3000</li>
                                </ul>
                                <div className="text_box_bottom">
                                    <div className="float_left w50">
                                        <span><i className="jandaicon-info2"></i>기존의 메모를 삭제하시면 되돌릴 수 없습니다. 신중하게 입력해 주세요.</span>
                                    </div>
                                    <div className="btn_send float_right"><button className="comment_btn">저장</button> </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="fin ifMobile">
                        <div className="float_left">
                            <button type="submit" className="btn medium">
                                예약취소 요청하기
                        </button>
                        </div>
                        <div className="float_right">
                            <button type="submit" className="btn medium mr5">
                                수정하기
                        </button>
                            <button type="submit" className="btn medium">
                                저장하기
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MypageLayout>
};

export default MyReservation;