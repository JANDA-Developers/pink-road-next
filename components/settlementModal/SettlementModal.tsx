import React, { useContext, useEffect, useState } from "react";
import { useFeePolicy } from "../../hook/useFeePolicy";
import {
    useSettlementFindById,
    useSettlementUpdate,
} from "../../hook/useSettlement";
import { AppContext } from "../../pages/_app";
import { BookingStatus } from "../../types/api";
import {
    bookingStatus,
    feePresent,
    paymentStatus,
    payMethodToKR,
    productStatus,
    settlementStatus,
} from "../../utils/enumToKr";
import { autoComma } from "../../utils/formatter";
import { generateClientPaging } from "../../utils/generateClientPaging";
import { closeModal } from "../../utils/popUp";
import { yyyymmdd } from "../../utils/yyyymmdd";
import { Paginater } from "../common/Paginator";
import { SettlementController } from "../contollers/SettlementContollers";
import { HistoryTable } from "../historyTable/HistoryTable";
import { BookingStatusBadge } from "../Status/StatusBadge";

interface IProp {
    settlementId: string;
}

export const SettlementModal: React.FC<IProp> = ({ settlementId }) => {
    const { isSeller } = useContext(AppContext);
    const { item: settlement } = useSettlementFindById(settlementId);
    const [settlementUpdate] = useSettlementUpdate();
    const { data: policy } = useFeePolicy();
    const [memo, setMemo] = useState(settlement?.memo || "");

    const {
        product,
        bankFee,
        cancelReturnPrice,
        cardFee,
        acceptDate,
        cancelDate,
        totalFee,
        totalPrice,
        payReqPrice,
        jandaFee,
        niceCardFee,
        jandaCardFee,
        cardPrice,
        requestDate,
        bankPrice,
        additionFeeSum,
    } = settlement || {};

    useEffect(() => {
        if (settlement) {
            setMemo(settlement.memo || "");
        }
    }, [settlement?._id]);

    const { bookings, createdAt, startDate } = product || {};
    const canceldBooking = (bookings || []).filter(
        (bk) => bk.status === BookingStatus.CANCEL
    );
    const bookingsPagination = generateClientPaging(bookings || [], 10);
    const cancelBookingsPagination = generateClientPaging(canceldBooking, 10);
    if (!settlement) return <div />;
    if (!product) return <div />;

    const handleMemo = () => {
        settlementUpdate({
            variables: {
                params: {
                    memo,
                },
                settlementId: settlement._id,
            },
        });
    };

    const bookingStatusColor = (status?: BookingStatus | null) => {
        if (status === BookingStatus.CANCEL) return "no";
        if (status === BookingStatus.COMPLETE) return "ok";
        if (status === BookingStatus.READY) return "";
        return "";
    };

    return (
        <div id="SettlementModal" className="popup_bg_full">
            {settlement && (
                <div className="in_txt statement_popup master_popup">
                    <div className="page">
                        <h3>정산계산</h3>
                        <a
                            className="close_icon"
                            onClick={closeModal("#SettlementModal")}
                        >
                            <i className="flaticon-multiply"></i>
                        </a>
                        <div className="statement_popup__topBox info_txt">
                            <span className="r-number">
                                상품명: <i>{product.title}</i>
                            </span>
                            <span className="r-number">
                                상품상태: <i>{productStatus(product.status)}</i>
                            </span>
                            <span className="r-number">
                                정산상태:{" "}
                                <i>
                                    {settlementStatus(
                                        settlement.status,
                                        product.status
                                    )}
                                </i>
                            </span>
                        </div>
                        <div className="info_page">
                            <div className="alignment">
                                <div className="left_div">
                                    <span className="infotxt">
                                        <i className="mr10">
                                            {yyyymmdd(createdAt)} ~{" "}
                                            {yyyymmdd(startDate)}
                                        </i>
                                        예약건 - 총{" "}
                                        <strong>{bookings?.length}</strong>건
                                    </span>
                                </div>
                            </div>
                            <div className="fuction_list_mini">
                                <div className="thead">
                                    <div className="th02">결제방법</div>
                                    <div className="th03">결제상태</div>
                                    <div className="th04">예약자</div>
                                    <div className="th05">예약날짜</div>
                                    <div className="th06">예약금</div>
                                    <div className="th07">상태</div>
                                </div>
                                <div className="tbody">
                                    <ul>
                                        {bookingsPagination.slice.map((bk) => (
                                            <li
                                                className="settlementModal__li"
                                                key={bk._id}
                                            >
                                                <div className="th02">
                                                    {payMethodToKR(
                                                        bk.payMethod
                                                    )}
                                                </div>
                                                <div className="th03">
                                                    {paymentStatus(
                                                        bk.payment?.status
                                                    )}
                                                </div>
                                                <div className="th04">
                                                    {bk.name}
                                                </div>
                                                <div className="th05">
                                                    {yyyymmdd(bk.createdAt)}
                                                </div>
                                                <div className="th06">
                                                    {autoComma(bk.bookingPrice)}
                                                    원
                                                </div>
                                                <div className="th07">
                                                    <BookingStatusBadge
                                                        status={bk.status}
                                                    />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="productModal__paginatorWrap">
                                    <Paginater
                                        isMini
                                        pageInfo={bookingsPagination.paging}
                                        setPage={bookingsPagination.setPage}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="info_page">
                            <div className="alignment">
                                <div className="left_div">
                                    <span className="infotxt">
                                        <span className="mr10">
                                            <i>취소</i>건 - 총{" "}
                                        </span>
                                        <strong>{canceldBooking.length}</strong>
                                        건
                                    </span>
                                </div>
                            </div>
                            <div className="fuction_list_mini">
                                <div className="thead">
                                    <div className="th02">결제방법</div>
                                    <div className="th03">결제상태</div>
                                    <div className="th04">예약자</div>
                                    <div className="th05">예약날짜</div>
                                    <div className="th06">예약금 | 취소금</div>
                                    <div className="th07">상태</div>
                                </div>
                                <div className="tbody">
                                    <ul>
                                        {cancelBookingsPagination.slice.map(
                                            (cb) => (
                                                <li
                                                    className="settlementModal__li"
                                                    key={cb._id + "cancel"}
                                                >
                                                    <div className="th02">
                                                        {payMethodToKR(
                                                            cb.payMethod
                                                        )}
                                                    </div>
                                                    <div className="th03 settlementModal__li-th3">
                                                        {bookingStatus(
                                                            cb.status
                                                        )}{" "}
                                                    </div>
                                                    <div className="th04">
                                                        {cb.name}
                                                    </div>
                                                    <div className="th05">
                                                        {yyyymmdd(cb.createdAt)}
                                                    </div>
                                                    <div className="th06">
                                                        {autoComma(
                                                            cb.bookingPrice
                                                        )}
                                                        원 |{" "}
                                                        {autoComma(
                                                            cb.payment
                                                                ?.totalCancelPrice
                                                        )}{" "}
                                                        [
                                                        {
                                                            cb.payment
                                                                ?.isPartialCancel
                                                        }
                                                        ]
                                                    </div>
                                                    <div className="th07">
                                                        <strong
                                                            className={bookingStatusColor(
                                                                cb.status
                                                            )}
                                                        >
                                                            {bookingStatus(
                                                                cb.status
                                                            )}
                                                        </strong>
                                                    </div>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div className="productModal__paginatorWrap">
                                    <Paginater
                                        isMini
                                        pageInfo={
                                            cancelBookingsPagination.paging
                                        }
                                        setPage={
                                            cancelBookingsPagination.setPage
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        {isSeller && (
                            <div className="info_page">
                                <h4>메모(판매자)</h4>
                                <div className="write_comment">
                                    <div className="comment_layout">
                                        <ul className="text_box">
                                            <li>
                                                <div className="txta w100">
                                                    <textarea
                                                        maxLength={3000}
                                                        onChange={(e) => {
                                                            const val =
                                                                e.currentTarget
                                                                    .value;
                                                            if (
                                                                memo.length >
                                                                3000
                                                            )
                                                                return;
                                                            setMemo(val);
                                                        }}
                                                        value={memo || ""}
                                                        style={{
                                                            height: "100px",
                                                        }}
                                                        placeholder="메모는 꼼꼼하게 체크는 정확하게"
                                                    ></textarea>
                                                </div>
                                            </li>
                                            <li className="tr count">
                                                {memo.length}/3000
                                            </li>
                                        </ul>
                                        <div className="text_box_bottom">
                                            <div className="float_left w50">
                                                <span>
                                                    <i className="jandaicon-info2"></i>
                                                    기존의 메모를 삭제하시면
                                                    되돌릴 수 없습니다. 신중하게
                                                    입력해 주세요.
                                                </span>
                                            </div>
                                            <div className="btn_send float_right">
                                                <button
                                                    onClick={handleMemo}
                                                    className="comment_btn"
                                                >
                                                    저장
                                                </button>{" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <HistoryTable histories={settlement.requestHistory} />
                        <div className="sum_div mt50">
                            <ul className="first_ul">
                                <li>
                                    <div className="title">
                                        <strong>실 판매금액</strong> :{" "}
                                    </div>
                                    <div className="body">
                                        <div>{settlement.totalPrice}원</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="title">
                                        <strong>카드수수료</strong> :{" "}
                                    </div>
                                    <div className="body">
                                        <div>
                                            (-) {autoComma(settlement.cardFee)}
                                            원
                                        </div>
                                    </div>
                                </li>
                                {policy?.addtionalFees.map((addFee, i) => (
                                    <li key={"FeePolicy" + i}>
                                        <div className="title">
                                            <strong>{addFee.feeName}</strong> :{" "}
                                        </div>
                                        <div className="body">
                                            <div>
                                                (-) {feePresent(addFee)}원
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <ul className="last_ul">
                                <li>
                                    <div>
                                        <i>=</i>총 정산 예상금 :{" "}
                                        <strong>
                                            {autoComma(
                                                settlement.settlementPrice
                                            )}
                                        </strong>
                                        원
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="in_fin mt30">
                            <div className="float_left">
                                <SettlementController
                                    settlement={settlement}
                                    product={product}
                                />
                            </div>
                            <div className="right_div" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
