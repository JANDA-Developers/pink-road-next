import { Annotation } from "aws-sdk/clients/configservice";
import React from "react";
import {
    AnnounceType,
    BookingStatus,
    Fbooking,
    ProductStatus,
    SettlementStatus,
} from "../../types/api";
import {
    announceTypeKR,
    bookingStatus,
    productStatus,
    settlementStatus,
} from "../../utils/enumToKr";
import { Tip } from "../tip/Tip";

interface IProp {
    status: ProductStatus;
    Tag?: any;
    className?: string;
}

export const PordStatusBadge: React.FC<IProp> = ({
    Tag = "span",
    status,
    className,
}) => {
    const getClass = () => {
        if (status === ProductStatus.CANCELD) return "tour-no";
        if (status === ProductStatus.READY) return "tour-yes";
        if (status === ProductStatus.EXPIRED) return "tour-no";
        if (status === ProductStatus.OPEN) return "tour-ok";
        if (status === ProductStatus.REFUSED) return "plainning-no";
        if (status === ProductStatus.UPDATE_REQ) return "plainning-yes";
        if (status === ProductStatus.UPDATE_REQ_REFUSED) return "plainning-no";
    };

    // <span> </span>
    const _class = getClass();
    return (
        <Tag className={`state_icon ${_class} ${className}`}>
            {productStatus(status)}
        </Tag>
    );
};

interface IProductStatusTooltip {
    status: ProductStatus;
    Tag?: any;
    className?: string;
}

export const ProductStatusTooltip: React.FC<IProductStatusTooltip> = ({
    status,
    Tag,
    children,
}) => {
    const productStatusMessage: Record<ProductStatus, string> = {
        CANCELD: "여행이 취소되었습니다.",
        COMPLETED: "여행이 마무리 되었습니다.",
        EXPIRED: "출발일까지 출발확정이 되지않아 취소되었습니다.",
        OPEN: "상품이 판매중 입니다.",
        READY: "핑크로드 마스터  오픈승인을 대기중입니다.",
        REFUSED:
            "오픈요청이 거절되었습니다. 상세보기를 통해 거절 사유를 확인하세요.",
        UPDATE_REQ: "업데이트 승인을 대기중입니다.",
        UPDATE_REQ_REFUSED: "상세보기를 통해 거절 사유를 확인 후 수정해주세요.",
    };

    return (
        <Tip style={{}} Tag={Tag} message={productStatusMessage[status]}>
            {children}
        </Tip>
    );
};

interface IBookingStatusBadgeProp {
    status: BookingStatus | null;
    square?: boolean;
    [key: string]: any;
}

export const BookingStatusBadge: React.FC<IBookingStatusBadgeProp> = ({
    status,
    square,
    ...props
}) => {
    const getClass = () => {
        if (status === BookingStatus.COMPLETE) return "re-ok";
        if (status === BookingStatus.READY) return "re-stay";
        if (status === BookingStatus.CANCEL) return "re-refund";
    };

    if (square)
        return (
            <span className={`status_square ${getClass()}`} {...props}>
                {bookingStatus(status)}
            </span>
        );

    return (
        <i {...props} className={`state ${getClass()}`}>
            {bookingStatus(status)}
        </i>
    );
};

export const RequestBadge: React.FC<any> = ({ isCancelRequest, className }) => {
    const getClass = () => {
        if (status === BookingStatus.COMPLETE) return "re-ok";
        if (status === BookingStatus.READY) return "re-stay";
        if (status === BookingStatus.CANCEL) return "re-refund";
    };

    if (isCancelRequest)
        return (
            <span className={`requestBadge` + " " + className}>취소요청</span>
        );
    else return null;
};

export const AnnotationBadge: React.FC<any> = ({ type }) => {
    const getClass = (type: AnnounceType) => {
        if (type === AnnounceType.ACCOUNCE) return "up";
        if (type === AnnounceType.NOICE) return "-";
    };

    return (
        <span className={`annotationBadge` + " " + getClass(type)}>
            {announceTypeKR(type)}
        </span>
    );
};

interface ISettlementStatusProp {
    status: SettlementStatus;
    productStatus?: ProductStatus;
}
export const SettlementStatusBadge: React.FC<ISettlementStatusProp> = ({
    status,
    productStatus,
}) => {
    const getClass = () => {
        if (productStatus !== ProductStatus.COMPLETED) return "not-ready";
        if (status === SettlementStatus.COMPLETE) return "complete";
        if (status === SettlementStatus.READY) return "ready";
        if (status === SettlementStatus.REQUEST) return "request";
    };

    const SettlementStatusMessage: Record<SettlementStatus, string> = {
        ACCEPT: "정산이 진행중입니다.",
        CANCELED:
            "정산이 취소되었습니다. 상세보기를 통해 사유를 확인해 보세요.",
        COMPLETE: "정산이 완료되었습니다.",
        READY: "정산 요청이 가능합니다. 상세보기를 통해 정산을 요청하세요. ",
        REQUEST: "정산이 요청중입니다. 관리자 확인을 기다려 주세요.",
    };

    let message = SettlementStatusMessage[status];

    if (productStatus !== ProductStatus.COMPLETED) {
        message = "여행이끝난 상품만 정산요청이 가능합니다.";
    }

    return (
        <Tip message={message} className={`settlementStatus ${getClass()}`}>
            {settlementStatus(status, productStatus)}
        </Tip>
    );
};

// .state_icon.tour-no { // 여행취소
//     color: #f32121;
//     border: 1px solid #f32121;
// }
// .state_icon.tour-ok { //출발확정
//     color: #2196F3;
//     border: 1px solid #2196F3;
// }
// .state_icon.tour-yes { // 출발미확정
//     color: #005394;
//     border: 1px solid #005394;
// }
// .state_icon.plainning-no { //기획반려
//     color: #f38721;
//     border: 1px solid #f38721;
// }
// .state_icon.plainning-yes { // 기획요청
//     color: #059600;
//     border: 1px solid #059600;
// }
// .state_icon.plainning-else { // 기획요청
//     color: #059600;
//     border: 1px solid #059600;
// }
