import { MasterLayout } from 'layout/MasterLayout';
import { Paginater } from 'components/common/Paginator';
import { SearcfInfoBox } from 'components/common/SearcfInfoBox';
import CalendarIcon from 'components/common/icon/CalendarIcon';
import React from 'react';
import Link from "next/link";
import ReactTooltip from 'react-tooltip';
import { useBookingList } from '../../../hook/useBooking';
import { useDateFilter } from '../../../hook/useSearch';
import { useIdSelecter } from '../../../hook/useIdSelecter';
import { useSingleSort } from '../../../hook/useSort';
import { getUniqFilter } from '../../../utils/filter';
import { BookingStatus } from '../../../types/api';
import { ResvTopNav } from '../../../components/topNav/MasterTopNav';

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

    const { items, filter, setFilter, pageInfo, sort, setSort, viewCount, setViewCount, page, setPage } = useBookingList()
    const { filterStart, filterEnd, hanldeCreateDateChange } = useDateFilter({ filter, setFilter })
    const { check, isChecked, selecteAll, selectedIds, setSelectedIds, unCheck, unSelectAll } = useIdSelecter(items.map(i => i._id));
    const singleSort = useSingleSort(sort, setSort);

    const doSearch = (search: string) => {
        const _filter = getUniqFilter(
            filter,
            "porductName_contains",
            ["porductName_contains"],
            search
        )

        setFilter({
            ..._filter
        })
    }

    const handleSatus = (status?: BookingStatus) => () => {
        setFilter({
            ...filter,
            status_eq: status
        })
    }

    const checkStatusOn = (status?: BookingStatus) => filter.status_eq === status ? "check on" : ""


    return <MasterLayout>
        <div className="in ">
            <h4>예약관리</h4>
            <div className="in_content">
                <ResvTopNav />
                <div className="con reservation">
<<<<<<< HEAD
=======
                    <div className="con_box_top pb5">
                        <div className="top_info_number">
                            <ul className="ln3">
                                <li>
                                    <strong>234</strong>
                                    <span>전체</span>
                                </li>
                                <li>
                                    <strong>234</strong>
                                    <span>예약대기</span>
                                </li>
                                <li>
                                    <strong>234</strong>
                                    <span>예약완료</span>
                                </li>
                            </ul>
                        </div>
                        <div className="search_top">
                            <div className="hang">
                                <ul className="day_ul">
                                    <li className="on">
                                        <span>이번달</span>
                                    </li>
                                    <li className="on">
                                        <span>저번달</span>
                                    </li>
                                    <li>
                                        <span>6개월</span>
                                    </li>
                                    <li>
                                        <span>1년</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="hang">
                                <div className="input_box">
                                    <input type="text" className="day w100" />
                                    <CalendarIcon />
                                </div>
                                    ~
                                    <div className="input_box">
                                    <input type="text" className="day w100" />
                                    <CalendarIcon />
                                </div>
                            </div>
                            <div className="hang fr">
                                <select className="option">
                                    <option>전체</option>
                                    <option>상품명</option>
                                    <option>상품번호</option>
                                    <option>예약번호</option>
                                    <option>예약자명</option>
                                    <option>실여행자명</option>
                                    <option>휴대번호</option>
                                    <option>파트너명</option>
                                    <option>상품상태</option>
                                    <option>진행여부</option>
                                </select>
                                <div className="search_div">
                                    <input className="w100" type="text" placeholder="검색 내용을 입력해주세요." />
                                    <div className="svg_img">
                                        <img src="/img/svg/search_icon.svg" alt="search icon" />
                                        <button />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="alignment">
                            <div className="left_div">
                                <ul className="board_option">
                                    <li className="on"><a href="/">전체<strong>46</strong></a></li>
                                    <li><a href="/">여행<strong>23</strong></a></li>
                                    <li><a href="/">체험<strong>23</strong></a></li>
                                </ul>
                                <ul className="board_option">
                                    <li className="on"><a href="/">전체<strong>46</strong></a></li>
                                    <li><a href="/">온라인예약<strong>46</strong></a></li>
                                    <li><a href="/">수기등록<strong>46</strong></a></li>
                                </ul>
                            </div>
                            <div className="right_div">
                                <ul className="board_option">
                                    <li><a href="/">전체선택</a></li>
                                    <li><a href="/">엑셀파일<i className="jandaicon-info2 tooltip" data-tip="선택된 항목에 한해서 엑셀파일로 저장이 가능합니다." ></i></a></li>
>>>>>>> origin/design

                    <div className="reservation_list ln07">
                        <div className="thead">
                            <div className="t01">
                                <span className="checkbox">
                                    <input type="checkbox" name="agree" id="agree0" title="전체선택" />
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
                        <div className="tbody">
                            <div className="t01">
                                <span className="checkbox">
                                    <input type="checkbox" name="agree" id="agree1" title="개별선택" />
                                    <label htmlFor="agree1" />
                                </span>
                            </div>
                            <div className="t02">
                                <div className="align">
                                    <strong className="r-number"><i className="m_title">예약번호:</i>R-34252</strong>
                                    <span className="pay-day"><i className="m_title">결제일:</i>2020.02.03</span>
                                    <span className="goods-ct"><i className="m_title">유형:</i>여행</span>
                                </div>
                            </div>
                            <div className="t03">
                                <div className="info">
                                    <span className="ct">문화</span>   <span className="g-number">상품번호: PINK-034982</span>
                                    <strong className="title">떠나요~거제도~!!!!!!!!!!!!!!!!</strong>
                                    <div className="txt">
                                        <span className="s-day">출발일: 2020.9.9</span>
                                        <span className="where">출발장소: 부산대학교 앞</span>
                                        <span className="men">인원: 총 10명 (성인:3/소아:3/유아:4)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="t04">
                                <div className="align">
                                    <strong className="name"><i className="m_title">예약자명:</i>홍언니</strong>
                                    <span className="patner-name"><i className="m_title">파트너명:</i>( (주)하나하나 )</span>
                                </div>
                            </div>
                            <div className="t05">
                                <div className="align">
                                    <strong><i className="m_title">상품상태:</i>진행중</strong>
                                    <span className="member"><i className="m_title">진행여부:</i>출발미확정<br />(인원 : 10/10 )</span>
                                </div>
                            </div>
                            <div className="t06">
                                <div className="align">
                                    <strong className="money"><i className="m_title">금액:</i>40,000원</strong>
                                    <span className="pay-option"><i className="m_title">결제종류:</i>신용카드</span>
                                    <span className="r-btn stand"><i className="m_title">예약상태:</i>예약대기</span>
                                </div>
                            </div>
                            <div className="t07">
                                <div className="align">
                                    <button className="btn small" onClick={popupOpen}>상세보기</button>
                                    <button className="btn small">예약취소</button>
                                </div>
                            </div>
                        </div>

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
        </div>

        {/* popup-상세보기 */}
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
                                        취소신청
                                </div>
                                    <div className="td01">
                                        <span>2020.12.12 - 홍언니</span>
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
                                예약취소
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

    </MasterLayout >
};

export default MsReservationMain;