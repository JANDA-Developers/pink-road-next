import React from "react";
import { TUseBookingBoard } from "../../hook/useBookingBoard";
import { BG } from "../../types/const";
import {
    determinedKr,
    payMethodToKR,
    personCountBracket,
    productStatus,
} from "../../utils/enumToKr";
import { autoComma, autoHypenPhone } from "../../utils/formatter";
import { yyyymmdd } from "../../utils/yyyymmdd";
import { BookingStatusBadge } from "../Status/StatusBadge";

interface IProp extends TUseBookingBoard {}

export const CompleteReservationTable: React.FC<IProp> = ({
    bookingListHook,
    bookingModalHook,
    checkOnStatus,
    dateFilterHook,
    doSearch,
    filterType,
    getLoading,
    handleDetail,
    idSelecterHook,
    isTimeOverExcept,
    setFilterType,
    setIsTimeOverExcept,
    setType,
    singleSortHook,
    children,
}) => {
    const { items } = bookingListHook;
    const { isAllSelected, selectAll, isChecked, check } = idSelecterHook;
    return (
        <div className="master__table">
            <div className="th">
                <div className="t01">
                    <span className="checkbox">
                        <input
                            checked={isAllSelected}
                            onClick={selectAll}
                            type="checkbox"
                            name="agree"
                            id="agree0"
                            title="전체선택"
                        />
                        <label htmlFor="agree0" />
                    </span>
                </div>
                <div className="t02">예약번호</div>
                <div className="t04">상품정보</div>
                <div className="t05">예약자</div>
                <div className="t06">금액</div>
                <div className="t07">상태</div>
            </div>
            {items.map((item, i) => (
                <div key={item._id} className="td">
                    <div className="t01">
                        <span
                            onClick={() => {
                                check(item._id);
                            }}
                            className="checkbox"
                        >
                            <input
                                checked={isChecked(item._id)}
                                type="checkbox"
                                name="agree"
                                id={`agree${i}`}
                                title="개별선택"
                            />
                            <label htmlFor={`agree${i}`} />
                        </span>
                    </div>
                    <div className="t02">
                        <div className="align">
                            <span className="r-number">
                                <i className="m_title">예약번호:</i>
                                {item.code}
                            </span>
                        </div>
                    </div>
                    <div className="t04 MypageGoods__infoBox">
                        <div
                            className="MypageGoods__img img"
                            style={BG(item?.product?.images?.[0]?.uri || "")}
                        ></div>
                        <div className="info goods__info_title">
                            <span className="ct">
                                {item.product.category?.label}
                            </span>
                            <span className="g-number">
                                상품번호: {item.product.code}
                            </span>
                            <strong className="title">
                                {item.product.title}
                            </strong>
                            <div className="txt">
                                <span className="s-day">
                                    출발일: {yyyymmdd(item.product.startDate)}
                                </span>
                                <span className="where">
                                    출발장소: {item.product.startPoint}
                                </span>
                                <span className="s-day">
                                    예약일: {yyyymmdd(item.createdAt)}
                                </span>
                                <span className="s-day">
                                    확정여부:{" "}
                                    {determinedKr(item.product.determined)} (
                                    {item.product.peopleCount}/
                                    {item.product.maxMember})
                                </span>
                                <span className="s-day">
                                    상품상태:{" "}
                                    {productStatus(item.product.status)}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="t05">
                        <div className="align">
                            <span className="name">
                                <i className="m_title">예약자:</i>
                                {item.name}
                            </span>
                            <span className="ph">
                                {autoHypenPhone(item.phoneNumber)}
                            </span>
                            <span className="men">
                                예약인원: 총 {item.totalCount}명<br />
                                {personCountBracket(item)}
                            </span>
                        </div>
                    </div>
                    <div className="t06">
                        <div className="align">
                            <strong className="money">
                                <i className="m_title">금액:</i>
                                {autoComma(item.bookingPrice)}원
                            </strong>
                            {item.payment && (
                                <span className="pay">
                                    결제종류:{" "}
                                    {payMethodToKR(item.payment?.payMethod)}
                                </span>
                            )}
                            {item.payment && (
                                <span className="pay-day">
                                    결제일: {yyyymmdd(item.payment?.createdAt)}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="t07 MypageGoods__btn">
                        <div className="align">
                            <BookingStatusBadge status={item.status!} />
                            <span
                                className="btn"
                                onClick={() => {
                                    handleDetail(item.code);
                                }}
                            >
                                상세보기
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
