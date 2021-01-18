import Link from 'next/link';
import React, { useState } from 'react';
import { useProductFindByIdForSeller, useProductUpdate } from '../../hook/useProduct';
import { generateSearchLink } from '../../pages/search';
import { Fbooking, PaymentStatus, BookingStatus } from '../../types/api';
import { BG } from '../../types/const';
import { bookingStatus, productStatus } from '../../utils/enumToKr';
import { autoComma, autoHypenPhone } from '../../utils/formatter';
import { getExcelByBookings } from '../../utils/getExcelData';
import { arraySum } from '../../utils/math';
import { closeModal, openModal } from '../../utils/popUp';
import { yyyymmdd } from '../../utils/yyyymmdd';
import { BookingCancelModal } from '../cacnelModal/BookingCancelModal';
import Excel from '../excel/Execel';
import { SmsSendModal } from '../smsSnedModal/SmsSendModal';

interface IProp {
    id: string;
}

export const DetailproductModal: React.FC<IProp> = ({ id }) => {
    const { item: product } = useProductFindByIdForSeller(id);
    const { productUpdate } = useProductUpdate()
    if (!product) return <div />
    const { title, code, createdAt, keyWards, status, bookings, _id, adminMemo: _adminMemo } = product;
    const [selectedBookings, setSelectedBookings] = useState<Fbooking[]>([]);
    const [adminMemo, setAdminMemo] = useState(_adminMemo);

    const seller = product.author;

    const readyBookings = bookings.filter(bk => bk.status === BookingStatus.READY);
    const cancelBookings = bookings.filter(bk => bk.status === BookingStatus.CANCEL);
    const completeBookings = bookings.filter(bk => bk.status === BookingStatus.COMPLETE);
    const payments = bookings.map(b => b.payment);
    const completes = payments.filter(p => p?.status === PaymentStatus.COMPLETE);
    const cancles = payments.filter(p => p?.status === PaymentStatus.CANCEL);
    const payCount = completes.length;
    const payAmt = completes.map(c => c?.price || 0);
    const cancelCount = cancles.length;
    const cancelAmt = cancles.map(c => c?.totalCancelPrice || 0);
    const totalCacnelPeopleCount = arraySum(cancelBookings.map(cb => cb.totalCount));
    const readyBookingsPeopleCount = arraySum(readyBookings.map(cb => cb.totalCount));
    const completeBookingsTotalCount = arraySum(completeBookings.map(cb => cb.totalCount));

    const print = () => {
        window.print();
    }

    const handleSendSMS = () => {
        openModal("#SMSsendModal")();
    }


    const handleSelectAll = () => {
        setSelectedBookings(bookings);
    }

    const handleSelectComplete = () => {
        setSelectedBookings(completeBookings);
    }

    //하나씩만됨
    const handleCancel = () => {
        openModal("#CancelModal")()
    }

    const handleSave = () => {
        productUpdate({
            _id, params: {
                adminMemo
            }
        })
    }

    const handleSettlementReject = () => {

    }

    const handleSettlementComplete = () => {

    }


    return < div id="Popup01" className="popup_bg_full" >
        <div className="in_txt master_popup">
            <a className="close_icon" onClick={closeModal("#Popup01")}>
                <i className="flaticon-multiply"></i>
            </a>
            <div className="page">
                <h3>상세정보</h3>
                <div className="info_txt">
                    <span className="g-number">상품명: {title}</span>
                    <span className="g-number">상품번호: PK-{product.code}</span>
                    <span className="goods-state1 st01">확정여부: <i>{productStatus(product.status)}</i></span>{/* 출발확정/출발미정 */}
                    <span className="r-day">출발일: {yyyymmdd(createdAt)}</span>
                    <span className="goods-state2">상품상태: {productStatus(status)}</span>
                    <button onClick={print} className="btn"><i className="flaticon-print mr5"></i>프린터</button>
                    <Excel data={getExcelByBookings(bookings)} element={
                        <button className="btn mr5"><i className="flaticon-download mr5"></i>엑셀저장</button>
                    } />
                </div>

                <div className="info_table goodsinfo">
                    <div className="tr">
                        <div className="top04">
                            <div className="img" style={BG(product?.images?.[0]?.uri || "")} ></div>
                            <div className="info">
                                <span className="ct">{product.category?.label}</span>
                                <strong className="title"><Link href={generateSearchLink({ title: product.title })}><a>{product.title}</a></Link></strong>
                                <div className="txt">
                                    <div className="subTitle">{product.subTitle}</div>
                                    <ul className="tag">
                                        {product.keyWards?.map((key, index) =>
                                            <li key={product._id + index + "keyward"}>#{key}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="top05">
                            <div className="align">
                                <span className="s-day">출발일: {yyyymmdd(product.startDate)}</span>
                                <span className="where">출발장소: {product.startPoint}</span>
                                <span className="people">인원: {product.compeltePeopleCnt}</span>
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
                                    결제건수
                                </div>
                                <div className="td01">
                                    <span>{payCount}</span>
                                </div>
                                <div className="th02">
                                    결제금액
                                </div>
                                <div className="td02">
                                    <span className="blue_font">{autoComma(arraySum(payAmt))}원</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="right_div">
                        <h4>환불 정보</h4>
                        <div className="info_table w50">
                            <div className="tr">
                                <div className="th01">
                                    환불건수
                                </div>
                                <div className="td01">
                                    <span>{cancelCount}</span>
                                </div>
                                <div className="th02">
                                    환불금액
                                </div>
                                <div className="td02">
                                    <span className="red_font">- {autoComma(arraySum(cancelAmt))}원</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="info_page">
                    <div className="full_div">
                        <h4>
                            파트너 정보
                        </h4>
                        <div className="info_table partnerinfo">
                            <div className="tr">
                                <div className="th01">
                                    파트너명
                                    </div>
                                <div className="td01">
                                    <span>{seller?.nickName}</span>
                                </div>
                                <div className="th02">
                                    아이디
                                </div>
                                <div className="td02">
                                    <span>{seller?.email}</span>
                                </div>
                                <div className="th03">
                                    담당자
                                </div>
                                <div className="td03">
                                    <span>{seller?.busi_name || seller?.name} (<a href="tel:">{autoHypenPhone(seller?.phoneNumber)}</a> )</span>
                                </div>
                                <div className="th04">
                                    정산계좌
                                </div>
                                <div className="td04">
                                    <span>({seller?.bank_name}){seller?.account_number} / {seller?.name}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="info_page">
                    <div className="full_div">
                        <h4>
                            예약자 정보
                            <span className="full_div__right__btn">
                                <button onClick={handleSelectAll} className="btn topside">전체선택</button>
                                <button onClick={handleSelectComplete} className="btn topside">예약완료 선택</button>
                                <button onClick={handleSendSMS} className="btn topside">SMS보내기</button>
                            </span>
                        </h4>
                        <div className="info_table peoplelist">
                            <div className="top_info">
                                <span className="tt">예약인원</span>
                                <span>총 {product.peopleCount}명</span>
                                <span className="float_right">예약완료 {completeBookingsTotalCount}명 / 예약취소 {totalCacnelPeopleCount}명 / 예약대기 {readyBookingsPeopleCount}명</span>
                            </div>
                            {bookings.map(bk =>
                                <div key={bk._id} className="tr first">
                                    <div className="pp01">
                                        <span className="checkbox">
                                            <input checked={ } type="checkbox" name="agree" id="agree1" title="개별선택" />
                                            <label htmlFor="agree1" />
                                        </span>
                                    </div>
                                    <div className="th">예약번호</div>
                                    <div className="td"><span>R-{code}</span></div>
                                    <div className="th">예약상태</div>
                                    <div className="td"><span className="blue_font">{bookingStatus(bk.status)}</span></div>
                                    <div className="th">예약자명</div>
                                    <div className="td"><span>{bk.name}</span></div>
                                    <div className="th">연락처</div>
                                    <div className="td"><a href={`tel:${autoHypenPhone(bk.phoneNumber)}`}>{autoHypenPhone(bk.phoneNumber)}</a></div>
                                    <div className="th">성별</div>
                                    <div className="td"><span>{bk}</span></div>
                                    <div className="th">메모</div>
                                    <div className="td"><span>{bk.memo}</span></div>
                                </div>
                            )}
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
                                        <textarea onChange={(e) => {
                                            const val = e.currentTarget.value;
                                            setAdminMemo(val);
                                        }} value={adminMemo} style={{ height: "100px;" }} placeholder="메모는 꼼꼼하게 체크는 정확하게"></textarea>
                                    </div>
                                </li>
                                <li className="tr count">{setAdminMemo.length}/3000</li>
                            </ul>
                            <div className="text_box_bottom">
                                <div className="float_left w50">
                                    <span><i className="jandaicon-info2"></i>기존의 메모를 삭제하시면 되돌릴 수 없습니다. 신중하게 입력해 주세요.</span>
                                </div>
                                <div className="btn_send float_right"><button onClick={handleSave} className="comment_btn">저장</button> </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fin ifMobile">
                    <div className="float_left">
                        <button onClick={handleSettlementComplete} type="submit" className="btn medium">정산완료</button>
                        <button onClick={handleSettlementReject} type="submit" className="btn medium">지급보류</button>

                        <button disabled={selectedBookings.length !== 1} type="submit" onClick={handleCancel} className="btn medium">예약취소</button>
                    </div>
                    <div className="float_right">
                        <Link href={`/tour/write/${_id}`}><a className="btn medium">상품수정 하러가기</a></Link>{/* 상품수정폼 가기 */}
                    </div>
                </div>
            </div>
        </div>
        {selectedBookings[0] && <BookingCancelModal booking={selectedBookings[0]} />}
        <SmsSendModal receivers={[...selectedBookings.map(bk => bk.phoneNumber)]} />
    </div>
};
