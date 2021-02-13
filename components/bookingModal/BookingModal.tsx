import React, { useContext, useEffect, useState } from 'react';
import { useBookingCancelReject, useBookingCancelReq, useBookingFindByCode, useBookingUpdate } from '../../hook/useBooking';
import { IUseModal } from '../../hook/useModal';
import { useBankDepositConfirm, useBankRefund } from '../../hook/usePayment';
import { AppContext } from '../../pages/_app';
import { BookingStatus, PaymentStatus, ProductStatus } from '../../types/api';
import { determinedKr, genderToKR, payMethodToKR, productStatus } from '../../utils/enumToKr';
import { autoComma, autoHypenPhone } from '../../utils/formatter';
import { closeModal, openModal } from '../../utils/popUp';
import { yyyymmdd } from '../../utils/yyyymmdd';
import { cardRefund } from '../nice/refund';
import { Prompt } from '../promptModal/Prompt';
import { IRefundModalSubmit, RefundModal } from '../promptModal/RefundModal';
import { BookingStatusBadge } from '../Status/StatusBadge';

export interface IBookingModalInfo {
    code: string;
}

interface IProp extends IUseModal<IBookingModalInfo> {
}

type promptTarget = "cancelReq" | "cancelReject";

interface IPromptInfo {
    title?: string;
    target: promptTarget;
}


export const BookingModal: React.FC<IProp> = ({ info, isOpen, closeModal }) => {
    const code = info?.code;
    const { isSeller, isManager, myProfile } = useContext(AppContext);
    const { item: booking } = useBookingFindByCode(code);
    const [proptTarget, setPomptTarget] = useState<IPromptInfo>({
        title: "",
        target: "cancelReq"
    });

    const paymentId = booking?.payment?._id

    const [bookingUpdate, { loading: updateLoading }] = useBookingUpdate({
        onCompleted: ({ BookingUpdate }) => {
            if (BookingUpdate.ok) {
                alert("업데이트 완료")
            }
        }
    })
    const [bankRefund, { loading: refundLoading }] = useBankRefund()
    const [cancelReq, { loading: reqLoading }] = useBookingCancelReq()
    const [cancelReject, { loading: rejectLoading }] = useBookingCancelReject()
    const [bankConfirm, { loading: confirmLoading }] = useBankDepositConfirm()
    const [memo, setMemo] = useState("");

    const totalLoading = updateLoading || refundLoading || reqLoading || rejectLoading || confirmLoading;

    const print = () => {
        window.print();
    }

    const handleUpdateBooking = () => {
        if (totalLoading) return;
        bookingUpdate({
            variables: {
                id: booking?._id || "",
                params: {
                    memo
                }
            }
        })
    }

    const handleBankDeposit = () => {
        if (totalLoading) return;
        bankConfirm({
            variables: {
                paymentIds: [paymentId || ""]
            }
        })
    }

    const handleBankRefund = (cancelInfo: IRefundModalSubmit) => {
        if (totalLoading) return;
        bankRefund({
            variables: {
                params: [{
                    bookingId: booking?._id!,
                    ...cancelInfo
                }]
            }
        })
    }

    const handleCancelReject = (reason: string) => {
        if (totalLoading) return;
        cancelReject({
            variables: {
                bookingId: booking?._id!,
                reason
            }
        })
    }

    const handleOpenPrompt = (target: promptTarget, title?: string) => () => {
        if (totalLoading) return;
        setPomptTarget({
            target,
            title
        });
        openModal("#PromptModal")();
    }


    const handleCancelReq = (reason: string) => {
        cancelReq({
            variables: {
                bookingId: booking?._id!,
                reason
            }
        })
    }

    const handleOpenRefundModal = () => {
        openModal("#RefundModal")()
    }

    const rejectHandle = (() => {
        if (proptTarget?.target === "cancelReject") return handleCancelReject
        if (proptTarget?.target === "cancelReq") return handleCancelReq
        return () => { }
    })() as () => void;

    useEffect(() => {
        if (booking) {
            setMemo(booking.memo || "");
        }
    }, [booking])


    if (!booking) {
        return null;
    }
    const { product, payment, bankTransInfo } = booking;

    //  잠깐 판매자가 예약 취소 수락이 가능한가???? 윙?

    // 취소 요청이 가능한가:: COMPLETE 상태일때 아마도 해당 판매자 이거나 본인일때 가능할 것 같다.
    const cancelReqAB = product.author?._id === myProfile?._id && product.status === ProductStatus.COMPLETED;

    // 취소 거절이 가능한가:: CANCEL_REQ 상태일때 이행위는 마스터만 가능하다.
    const cancelDenyAB = isManager && booking?.isCancelRequest;

    // 취소가 가능하가:: 마스터일때는 취소가 가능할 것이다.
    const cancleAB = isManager;

    // 입금 완료처리:: 입금확인은 사실 매니저만 할 수 있는 부분
    const bankDepositAB = isManager && product.status === ProductStatus.READY;

    return <div id="BookingModal" className={`popup_bg_full ${isOpen && "OPEN_MODAL"}`}>
        <div className="BookingModal__in in_txt master_popup">
            <div className="BookingModal__headerWrap">
                <h3 className="BookingModal__headerTitle">예약 상세정보</h3>
                <a className="BookingModal__headerClose close_icon" onClick={closeModal}>
                    <i className="flaticon-multiply"></i>
                </a>
            </div>
            <div className="BookingModal__body">
                <div className="page">
                    <div className="info_txt">
                        <span className="r-number">예약번호: <i>{booking.code}</i></span>
                        <span className="r-day">예약일: {yyyymmdd(booking.createdAt)}</span>
                        {booking.isCancelRequest && <span>[취소요청]</span>}
                        {booking.payment && <span className="pay-day">결제일: {yyyymmdd(booking.payment?.createdAt)}</span>}
                        <button onClick={print} className="btn"><i className="flaticon-print mr5"></i>프린터</button>
                    </div>

                    <div className="info_table goodsinfo">
                        <div className="tr">
                            <div className="top01">
                                <div className="img" style={{ backgroundImage: 'url(/img/store_01.jpg)' }} ></div>
                                <div className="info goods__info_title">
                                    <span className="ct">{product.category?.label}</span><span className="g-number">상품번호: {product.code}</span>
                                    <strong className="title">{product.title}</strong>
                                    <div className="txt">
                                        <span className="goods-state1">확정여부: {determinedKr(product.determined)}({product.peopleCount}/{product.maxMember})</span>
                                        <span className="goods-state2">상품상태: {productStatus(product.status)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="top02 BookingModal__top02">
                                <div className="align BookingModal__top02Align">
                                    <span className="s-day">출발일: {yyyymmdd(product.startDate)}</span>
                                    <span className="where">출발장소: {product.startPoint}</span>
                                </div>
                            </div>
                            <div className="top03">
                                <div className="align">
                                    <BookingStatusBadge status={booking.status!} />
                                    {booking.isCancelRequest && "[취소요청]"}
                                    {BookingStatus.READY && <span><i className="jandaicon-info2"></i>예약은 걸었으나 입금이 되지 않았습니다. 1일 이내에 입금을 하지 않으시면 예약대기가 풀립니다.</span>}
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
                                    {bankTransInfo &&
                                        <div className="tr">
                                            <div className="th01">
                                                환불정보-예금주
                                    </div>
                                            <div className="td01">
                                                <span>{bankTransInfo.accountHolder}</span>
                                            </div>
                                            <div className="th02">
                                                환불정보-계좌
                                    </div>
                                            <div className="td02">
                                                <span>({bankTransInfo.bankName}){bankTransInfo.accountNumber}</span>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                            {payment?.totalCancelPrice && <div className="right_div">
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
                            }
                        </div>
                    }

                    <div className="info_page">
                        <div className="full_div">
                            <h4>예약자 정보</h4>
                            <div className="info_table peoplelist">
                                <div className="top_info">
                                    <span className="tt">선택된 예약 인원</span>
                                    <span>총 {booking.totalCount}명 ( 성인{booking.adultCount} / 소아{booking.kidCount} / 유아{booking.babyCount} )</span>
                                    <span className="float_right">
                                        {booking.bookerInclue ? <i className="menok">예약자-포함</i> :
                                            <i className="menno">예약자-미포함</i>}
                                    </span>
                                </div>
                                <div className="tr first">
                                    <div className="re01">
                                        예약자 {booking.bookerInclue && "(본인)"}
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
                                        <span>{genderToKR(booking.gender) || "정보없음"}</span>
                                    </div>
                                    <div className="re08">
                                        나이
                                </div>
                                    <div className="re09">
                                        <span>{booking.age || "정보없음"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {isSeller && <div className="info_page">
                        <h4>메모(판매자)</h4>
                        <div className="write_comment">
                            <div className="comment_layout">
                                <ul className="text_box">
                                    <li>
                                        <div className="txta w100">
                                            <textarea onChange={(e) => {
                                                const val = e.currentTarget.value;
                                                if (memo.length > 3000) return;
                                                setMemo(val);
                                            }} value={memo || ""} style={{ height: "100px;" }} placeholder="메모는 꼼꼼하게 체크는 정확하게"></textarea>
                                        </div>
                                    </li>
                                    <li className="tr count">{memo.length}/3000</li>
                                </ul>
                                <div className="text_box_bottom">
                                    <div className="float_left w50">
                                        <span><i className="jandaicon-info2"></i>기존의 메모를 삭제하시면 되돌릴 수 없습니다. 신중하게 입력해 주세요.</span>
                                    </div>
                                    <div className="btn_send float_right"><button onClick={handleUpdateBooking} className="comment_btn">저장</button> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    }

                    <div className="fin ifMobile">
                        <div className="float_left">

                            {/* 취소요청 */}
                            {cancelReqAB && <button onClick={handleOpenPrompt("cancelReq", "취소 요청 사유를 입력 해주세요.")} type="submit" className="btn medium">취소요청</button>}

                            {/* 취소완료 */}
                            {cancleAB && <button onClick={handleOpenRefundModal} type="submit" className="btn medium">지급완료</button>}

                            {/* 취소거절 */}
                            {cancelDenyAB && <button onClick={handleOpenPrompt("cancelReject", "취소를 거절 사유를 입력해주세요.")} type="submit" className="btn medium">지급보류</button>}

                            {/* 입금완료 처리 */}
                            {bankDepositAB && <button onClick={handleBankDeposit} type="submit" className="btn medium">입금완료</button>}

                        </div>
                        <div className="float_right">
                            {/* <button type="submit" className="btn medium mr5">
                                수정하기
                                </button>
                            <button type="submit" className="btn medium">
                                저장하기
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
            <RefundModal onSubmit={handleBankRefund} />
            <Prompt title={proptTarget?.title || "거절 사유를 입력 해주세요"} onSubmit={rejectHandle} id="PromptModal" />
        </div>
    </div >;
};
