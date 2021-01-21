import React from 'react';
import { useBookingFindByCode } from '../../hook/useBooking';
import { PaymentStatus } from '../../types/api';
import { determinedKr, genderToKR, payMethodToKR, productStatus } from '../../utils/enumToKr';
import { autoComma, autoHypenPhone } from '../../utils/formatter';
import { closeModal } from '../../utils/popUp';
import { yyyymmdd } from '../../utils/yyyymmdd';
import { BookingStatusBadge } from '../Status/StatusBadge';

interface IProp {
    code: string;
}

export const BookingModal: React.FC<IProp> = ({ code }) => {
    const { item: booking } = useBookingFindByCode(code);


    const print = () => {
        window.print();
    }


    if (!booking) return null;
    const { product, payment } = booking;
    return <div id="BookingModal" className="popup_bg_full">
        <div className="in_txt master_popup">
            <a className="close_icon" onClick={closeModal("#BookingModal")}>
                <i className="flaticon-multiply"></i>
            </a>
            <div className="page">
                <h3>예약 상세정보</h3>
                <div className="info_txt">
                    <span className="r-number">예약번호: <i>{booking.code}</i></span>
                    <span className="r-day">예약일: {yyyymmdd(booking.createdAt)}</span>
                    {booking.payment && <span className="pay-day">결제일: {yyyymmdd(booking.payment?.createdAt)}</span>}
                    <button onClick={print} className="btn"><i className="flaticon-print mr5"></i>프린터</button>
                </div>

                <div className="info_table goodsinfo">
                    <div className="tr">
                        <div className="top01">
                            <div className="img" style={{ backgroundImage: 'url(/img/store_01.jpg)' }} ></div>
                            <div className="info">
                                <span className="ct">{product.category?.label}</span><span className="g-number">상품번호: {product.code}</span>
                                <strong className="title">{product.title}</strong>
                                <div className="txt">
                                    <span className="goods-state1">확정여부: {determinedKr(product.determined)}({product.compeltePeopleCnt}/{product.maxMember})</span>
                                    <span className="goods-state2">상품상태: {productStatus(product.status)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="top02">
                            <div className="align">
                                <span className="s-day">출발일: {yyyymmdd(product.startDate)}</span>
                                <span className="where">출발장소: {product.startPoint}</span>
                            </div>
                        </div>
                        <div className="top03">
                            <div className="align">
                                <BookingStatusBadge status={booking.status!} />
                                <span><i className="jandaicon-info2"></i>예약은 걸었으나 입금이 되지 않았습니다. 1일 이내에 입금을 하지 않으시면 예약대기가 풀립니다.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {booking.payment &&
                    <div className="info_page">
                        <div className="left_div">
                            <h4>결제 정보</h4>
                            <div className="info_table w50">
                                <div className="tr">
                                    <div className="th01">
                                        결제금액
                            </div>
                                    <div className="td01">
                                        <span>{autoComma(payment?.price || 0)}</span>
                                    </div>
                                    <div className="th02">
                                        결제방법
                            </div>
                                    <div className="td02">
                                        <span>{payMethodToKR(payment?.payMethod)}</span>
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
                                        <span>{yyyymmdd(booking.cancelDate)}</span>
                                    </div>
                                    <div className="th02">
                                        {payment?.status === PaymentStatus.CANCEL ? "환불완료" : "-"}
                                    </div>
                                    <div className="td02">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="tr">
                                    <div className="th01">
                                        환불형태
                                    </div>
                                    <div className="td01">
                                        <span>{payment?.isPartialCancel ? "부분취소" : "전체취소"}</span>
                                    </div>
                                    <div className="th02">
                                        환불금액
                                    </div>
                                    <div className="td02">
                                        <span>{autoComma(payment?.totalCancelPrice)}원</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="info_page">
                    <div className="full_div">
                        <h4>예약자 정보</h4>
                        <div className="info_table peoplelist">
                            <div className="top_info">
                                <span className="tt">선택된 예약 인원</span>
                                <span>총 {booking.totalCount}명 ( 성인{booking.adultCount} / 소아{booking.kidCount} / 유아{booking.babyCount} )</span>
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
                                    <span>{booking.name}</span>
                                </div>
                                <div className="re04">
                                    연락처
                            </div>
                                <div className="re05">
                                    <a href={`tel:${autoHypenPhone(booking.phoneNumber)}`}>{autoHypenPhone(booking.phoneNumber)}</a>
                                </div>
                                <div className="re06">
                                    성별
                                </div>
                                <div className="re07">
                                    <span>{genderToKR(booking.gender)}</span>
                                </div>
                                <div className="re08">
                                    나이
                                </div>
                                <div className="re09">
                                    <span>{booking.age}</span>
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
    </div>;
};
