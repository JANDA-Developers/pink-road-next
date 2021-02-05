import { AddtionalFeesStatus, AnnounceType, BookingStatus, CategoryType, ERR_CODE, feePolicyFindOne_FeePolicyFindOne_data_addtionalFees, Fuser, GENDER, PaymentStatus, PayMethod, ProductStatus, ProductType, QuestionStatus, SettlementStatus, UserRole, UserStatus } from "../types/api";

export const bookingStatus = (status?: BookingStatus | null) => {
    if (status === BookingStatus.CANCEL) return "예약취소"
    if (status === BookingStatus.COMPLETE) return "예약완료"
    if (status === BookingStatus.READY) return "예약대기"
    return "";
}

export const productStatus = (status?: ProductStatus | null) => {
    if (status === ProductStatus.CANCELD) return "취소"
    if (status === ProductStatus.EXPIRED) return "만료"
    if (status === ProductStatus.OPEN) return "판매중"
    if (status === ProductStatus.READY) return "생성요청"
    if (status === ProductStatus.REFUSED) return "생성거절됨"
    if (status === ProductStatus.SOLD) return "완판"
    if (status === ProductStatus.UPDATE_REQ) return "업데이트요청"
    if (status === ProductStatus.UPDATE_REQ_REFUSED) return "업데이트요청거절"
    return status || "";
}

export const paymentStatus = (status?: PaymentStatus | null) => {
    if (status === PaymentStatus.CANCEL) return "환불완료"
    if (status === PaymentStatus.COMPLETE) return "완료"
    if (status === PaymentStatus.READY) return "대기중"
    return "";
}

export const settlementStatus = (status?: SettlementStatus | null) => {
    if (status === SettlementStatus.REQUEST) return "요청"
    if (status === SettlementStatus.COMPLETE) return "완료"
    if (status === SettlementStatus.READY) return "보류중"
    if (status === SettlementStatus.ACCEPT) return "승인"
    if (status === SettlementStatus.CANCELED) return "취소"
    return "";
}

export const foreginKR = (isForegin: boolean) => {
    return isForegin ? "외국인" : "내국인"
}

export const confirmKr = (flag: boolean) => {
    return flag ? "승인" : "미승인"
}

export const questionSatus = (status: QuestionStatus) => {
    if (status === QuestionStatus.COMPLETE) return "답변"
    if (status === QuestionStatus.READY) return "미답변"
    return ""
}

export const itemTypeToKr = (type: ProductType) => {
    if (type === ProductType.EXPERIENCE) return "체험"
    if (type === ProductType.TOUR) return "체험"
    return ""
}

export const determinedKr = (isDetermined: boolean) => {
    if (isDetermined) return "출발확정"
    if (!isDetermined) return "미확정"
    return ""
}


export const categoryToKR = (catType?: CategoryType | null) => {
    if (catType === CategoryType.QUESTION) return "문의글"
    if (catType === CategoryType.PORTPOLIO) return "포트폴리오"
    if (catType === CategoryType.QNA) return "QNA"
    if (catType === CategoryType.TOUR) return "투어"
    if (catType === CategoryType.EXPERIENCE) return "체험"
    if (catType === CategoryType.REGION) return "지역"
    return ""
}

export const payMethodToKR = (paymethod?: PayMethod) => {
    if (paymethod === PayMethod.BANK) return "무통장입금"
    if (paymethod === PayMethod.NICEPAY_CARD) return "카드결제"
    return ""
}

export const userRoleToKR = (role?: UserRole) => {
    if (role === UserRole.partner) return "일반파트너"
    if (role === UserRole.partnerB) return "비지니스파트너"
    if (role === UserRole.individual) return "개인유저"
    if (role === UserRole.manager) return "매니저"
    if (role === UserRole.admin) return "관리자(JANDA)"
    return ""
}

export const genderToKR = (gender?: GENDER | null) => {
    if (gender === GENDER.FEMALE) return "여성"
    if (gender === GENDER.MAIL) return "남성"
    return ""
}

export const announceTypeKR = (type?: AnnounceType) => {
    if (type === AnnounceType.ACCOUNCE) return "알림"
    if (type === AnnounceType.NOICE) return "공지"
    return ""
}

export const feePresent = (addFee: feePolicyFindOne_FeePolicyFindOne_data_addtionalFees) => {
    let unit = addFee.type === AddtionalFeesStatus.DEFAULT ? "(원)" : "(%)";
    let amt = addFee.type === AddtionalFeesStatus.DEFAULT ? addFee.fee : addFee.feePercent;
    return amt + unit;
}


export const ErrorCode: Partial<Record<ERR_CODE, string>> = {
    ALEADY_SAME_DATA: "중복 데이터가 존재합니다.",
    AUTHORIZATION: "권한이 없습니다.",
    BOOKING_MEMBER_OVER: "인원이 초과되었습니다.",
    DOC_ALEADY_EXIST: "이미 존재하는 데이터 입니다.",
    DOC_NOT_FOUND: "해당 데이터를 찾을 수 없습니다",
    DOC_RELATED_INVALID: "잘못된 데이터 입니다.",
    EXPECTED_STATUS_NOT: "잘못된 요청입니다.",
    EXPECTED_VALUE_RANGE_NOT: "요청값이 올바르지 않습니다.",
    INVALID_PARAMS: "잘못된 요청입니다.",
    NICKNAME_ALEADY_EXIST: "닉네임",
    PAY_TIME_OVER: "시간이 경과했습니다.",
}


export const errorMessage = (code?: ERR_CODE | string) => {
    const result = ErrorCode[code as ERR_CODE];
    if (result) {
        alert(result)
    } else {
    }
}

export const managerVerifiedKR = (managerVerified?: boolean) => {
    return managerVerified ? "승인됨" : "승인요청"
}

export const userStatusKR = (user?: Fuser) => {
    if (user?.isResigned) return "탈퇴유저"
    if (user?.isDenied) return "가입거절"
    if (!user?.isVerifiedManager) return "가입요청"
    if (user?.status === UserStatus.stop) return "활동정지"
    if (user?.status === UserStatus.ok) return "활동중"
    return ""
}


export const userStatusReverseKR = (user?: Fuser) => {
    if (user?.isDenied) return "가입승인"
    if (!user?.isVerifiedManager) return "가입거절"
    return ""
}
