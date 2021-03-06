import {
    AddtionalFeesStatus,
    AgeType,
    AnnounceType,
    BoardType,
    bookingFindByCode_BookingFindByCode_data_bankTransInfo,
    BookingStatus,
    CategoryType,
    ERR_CODE,
    Fbooking,
    feePolicyFindOne_FeePolicyFindOne_data_addtionalFees,
    Fproduct,
    Fuser,
    GENDER,
    getContext_GetProfile_data,
    KakaoTemplateInspStatus,
    KakaoTemplateStatus,
    MethodType,
    NEWS_TYPE,
    PaymentStatus,
    PayMethod,
    ProductReOpenReq,
    ProductStatus,
    ProductType,
    QuestionAS,
    QuestionStatus,
    RequestStatus,
    SettlementStatus,
    UserRole,
    UserStatus,
} from "../types/api";

export const bookingStatus = (status?: BookingStatus | null) => {
    if (status === BookingStatus.CANCEL) return "예약취소";
    if (status === BookingStatus.COMPLETE) return "예약완료";
    if (status === BookingStatus.READY) return "예약대기";
    return "";
};

export const productStatus = (status?: ProductStatus | null) => {
    if (status === ProductStatus.CANCELD) return "취소";
    if (status === ProductStatus.COMPLETED) return "완료";
    if (status === ProductStatus.EXPIRED) return "만료";
    if (status === ProductStatus.OPEN) return "판매중";
    if (status === ProductStatus.READY) return "생성요청";
    if (status === ProductStatus.REFUSED) return "생성거절됨";
    if (status === ProductStatus.UPDATE_REQ) return "업데이트요청";
    if (status === ProductStatus.UPDATE_REQ_REFUSED) return "업데이트요청거절";
    return status || "";
};

export const paymentStatus = (status?: PaymentStatus | null) => {
    if (status === PaymentStatus.CANCEL) return "환불완료";
    if (status === PaymentStatus.COMPLETE) return "결제완료";
    if (status === PaymentStatus.READY) return "결제대기중";
    return "";
};

export const paymentStatus2 = (obj?: any | null) => {
    if (!obj) return "미결제";
    const { status } = obj;
    if (status === PaymentStatus.CANCEL) return "환불완료";
    if (status === PaymentStatus.COMPLETE) return "완료";
    if (status === PaymentStatus.READY) return "대기중";
    return "";
};

export const settlementStatus = (
    status?: SettlementStatus | null,
    productStatus?: ProductStatus | null
) => {
    if (productStatus && productStatus !== ProductStatus.COMPLETED)
        return "요청불가";
    if (status === SettlementStatus.REQUEST) return "요청";
    if (status === SettlementStatus.COMPLETE) return "완료";
    if (status === SettlementStatus.READY) return "요청가능";
    if (status === SettlementStatus.CANCELED) return "취소";
    return "";
};

export const foreginKR = (isForegin: boolean) => {
    return isForegin ? "외국인" : "내국인";
};

export const confirmKr = (flag: boolean) => {
    return flag ? "승인" : "미승인";
};

export const questionSatus = (status: QuestionStatus) => {
    if (status === QuestionStatus.COMPLETE) return "답변";
    if (status === QuestionStatus.READY) return "미답변";
    return "";
};
export const questionSatusKr = questionSatus;

export const itemTypeToKr = (type: ProductType) => {
    if (type === ProductType.EXPERIENCE) return "체험";
    if (type === ProductType.TOUR) return "체험";
    return "";
};

export const BoardTypeKr: Record<BoardType, string> = {
    ANNOUNCE: "공지사항",
    News: "뉴스",
    PORTFOLIO: "포트폴리오",
    PRODUCT: "상품",
    PRODUCT_REVIEW: "리뷰",
    QNA: "자주하는질문",
    QUESTION: "문의글",
};
export const questionAsKr = (type: QuestionAS) => {
    if (type === QuestionAS.NORMAL) return "일반문의";
    if (type === QuestionAS.PARTNER) return "파트너문의";
    return "";
};

export const determinedKr = (isDetermined: boolean) => {
    if (isDetermined) return "출발확정";
    if (!isDetermined) return "미확정";
    return "";
};

export const categoryToKR: Record<CategoryType, string> = {
    EXPERIENCE: "체험",
    PORTPOLIO: "포트폴리오",
    QNA: "자주하는질문",
    QNA_FOR_PARTNER: "파트너 문의하기",
    QUESTION: "문의하기",
    QUESTION_FOR_PARTNER: "파트너 문의하기",
    REGION: "지역",
    TOUR: "투어",
};

export const payMethodToKR = (paymethod?: PayMethod) => {
    if (paymethod === PayMethod.BANK) return "무통장입금";
    if (paymethod === PayMethod.HAND) return "수기등록(무통장)";
    if (paymethod === PayMethod.NICEPAY_CARD) return "카드결제";
    return "";
};

export const userRoleToKR = (role?: UserRole) => {
    if (role === UserRole.partner) return "파트너";
    if (role === UserRole.partnerB) return "기업파트너";
    if (role === UserRole.individual) return "개인회원";
    if (role === UserRole.manager) return "마스터";
    if (role === UserRole.admin) return "관리자(JANDA)";
    return "";
};

export const AgeTypeToKR: Record<AgeType, string> = {
    adult: "성인",
    kid: "소인",
    baby: "유아",
};

export const genderToKR = (gender?: GENDER | null) => {
    if (gender === GENDER.FEMALE) return "여성";
    if (gender === GENDER.MAIL) return "남성";
    return "";
};

export function newTypeToKr(type?: any) {
    if (type === NEWS_TYPE.CULTURE) return "문화이야기";
    if (type === NEWS_TYPE.MEDIA) return "언론보도";
    if (type === NEWS_TYPE.TRAVEL) return "여행이야기";
    return "";
}

export const announceTypeKR = (type?: AnnounceType) => {
    if (type === AnnounceType.ACCOUNCE) return "공지";
    if (type === AnnounceType.NOICE) return "알림";
    return "";
};

export const feePresent = (
    addFee: feePolicyFindOne_FeePolicyFindOne_data_addtionalFees
) => {
    let unit = addFee.type === AddtionalFeesStatus.DEFAULT ? "(원)" : "(%)";
    let amt =
        addFee.type === AddtionalFeesStatus.DEFAULT
            ? addFee.fee
            : addFee.feePercent;
    return amt + unit;
};

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
};

export const errorMessage = (code?: ERR_CODE | string) => {
    const result = ErrorCode[code as ERR_CODE];
    if (result) {
        alert(result);
    } else {
    }
};

export const managerVerifiedKR = (managerVerified?: boolean) => {
    return managerVerified ? "승인됨" : "승인요청";
};

export const userStatusKR = (user?: Fuser) => {
    if (user?.isResigned) return "탈퇴유저";
    if (user?.isDenied) return "가입거절";
    if (!user?.isVerifiedManager) return "가입요청";
    if (user?.status === UserStatus.stop) return "활동정지";
    if (user?.status === UserStatus.ok) return "활동중";
    return "";
};

export const requestStatusKr = (req?: RequestStatus) => {
    if (req === RequestStatus.ACCEPT) return "수락";
    if (req === RequestStatus.CANCEL) return "취소";
    if (req === RequestStatus.CANCEL_REQ) return "취소요청";
    if (req === RequestStatus.COMPLETE) return "완료";
    if (req === RequestStatus.DETERMIN) return "출발결정";
    if (req === RequestStatus.EXPIRED) return "만료";
    if (req === RequestStatus.REJECT) return "거절";
    if (req === RequestStatus.REQUEST) return "요청";
    if (req === RequestStatus.WITHDRAWAL) return "출발철회";
    if (req === RequestStatus.ELSE) return "기타수정";
    return "";
};

export const methodTypeKr = (mt?: MethodType) => {
    if (mt === MethodType.BOOKING) return "예약";
    if (mt === MethodType.PRODUCT) return "상품";
    if (mt === MethodType.PRODUCT_CREATE) return "상품생성";
    if (mt === MethodType.PRODUCT_REOPEN) return "상품재개";
    if (mt === MethodType.SETTLEMENT) return "정산";
    if (mt === MethodType.TRAVEL) return "여행";
    return "";
};

export const userStatusReverseKR = (user?: Fuser) => {
    if (user?.isDenied) return "가입승인";
    if (!user?.isVerifiedManager) return "가입거절";
    return "";
};

export const isOpenKr = (isOpen?: boolean) => {
    if (isOpen) return "공개";
    if (!isOpen) return "비공개";
    return "";
};

export const reqToKr = (req?: ProductReOpenReq | null) => {
    if (req === ProductReOpenReq.REOPEN) return "오픈요청";
    return "";
};

interface IReqBadgeProp {
    req?: ProductReOpenReq | null;
}

export const ReqBadge: React.FC<IReqBadgeProp> = ({ req }) => {
    if (req === ProductReOpenReq.REOPEN)
        return <span>{`[${reqToKr(req)}]`}</span>;
    return <span />;
};

interface IBookingInfo {}

export const personCountBracket = (info: Fbooking) => {
    const { adultCount, babyCount, kidCount } = info;

    return `( 성인${adultCount} / 소아${kidCount} / 유아${babyCount} )`;
};

export const peopleCurrentCountBracket = (info: Fproduct) => {
    const { peopleCount, maxMember, minMember } = info;

    return `(인원:${peopleCount} / 최소${minMember} / 최대${maxMember})`;
};
interface Author {
    name: string;
    busi_name: string;
    blueBird?: number;
    [key: string]: any;
}

export const withCompany = (info?: Author | null) => {
    const { name, busi_name, blueBird } = info || {};
    return `${name}${busi_name ? `(${busi_name})` : ""}${
        blueBird ? `(파랑새${blueBird}기)` : ""
    }`;
};

interface Author {}
export const bankrefundTransInfo = (
    bankTransInfo?: bookingFindByCode_BookingFindByCode_data_bankTransInfo
) => {
    const { accountHolder, accountNumber, bankName } = bankTransInfo || {};
    return `${accountHolder} ${accountNumber}(${bankName})`;
};

export const nameOf = (author?: any) => {
    return author?.manageName || author?.name || author?.busi_name || "";
};
export const phoneNumberOf = (author?: getContext_GetProfile_data | null) => {
    return (
        author?.manageContact ||
        author?.phoneNumber ||
        author?.busi_contact ||
        ""
    );
};

export const kakaoInspStatusKr: Record<KakaoTemplateInspStatus, string> = {
    APR: "승인",
    REG: "등록",
    REJ: "반려",
    REQ: "심사요청",
};
export const kakaoStatusKr: Record<KakaoTemplateStatus, string> = {
    ACK: "정상",
    READY: "대기",
    STOP: "멈춤",
};
