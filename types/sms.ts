import { NotificationTriggerEvent } from "./api";



//이건 서버와 일치해야한다 서버에 같은 interface명이 있으므로 가져와서 매칭한다.
type SMS_BOOKING = 'BOOKERNMAE' | 'BOOKING_STATUS' | 'TRAVEL_CONFIRMED' | 'TRAVEL_DATE_YMD' | 'PEOPLE' | 'PRICE' | 'PROD_NAME';
export interface REPLACE {
    BANK_TRANSFER_BOOKER: "BOOKERNMAE",
    BANK_TRANSFER_SELLER: 'BOOKERNMAE',
    CALCULATE_REQUEST: 'PARTNERNAME' | "REQUEST_DATE",
    CANCEL_BOOKING_BOOKER: SMS_BOOKING,
    CANCEL_BOOKING_SELLER: SMS_BOOKING | 'PARTNERNAME',
    COMPLETE_BOOKING_BOOKER: SMS_BOOKING,
    COMPLETE_BOOKING_SELLER: SMS_BOOKING | 'PARTNERNAME',
    PRODUCT_CONFIRM_REQUEST: 'PROD_NAME' | 'PARTNERNAME',
    TRAVEL_CANCELED_BOOKER: 'BOOKERNMAE',
    TRAVEL_CANCELED_SELLER: 'BOOKERNMAE',
    TRAVEL_CONFIRMED_BOOKER: 'BOOKERNMAE',
    TRAVEL_CONFIRMED_SELLER: 'BOOKERNMAE',
    SIGNUP_INDI_USER: 'USERNAME',
    SIGNUP_PARNTER_B_USER: 'USERNAME',
    SIGNUP_PARTNER_USER: 'USERNAME'
    SETTLEMENT_REQUEST: "PARTNERNAME" | "REQUEST_DATE"
}

//아래에서 어떤 템플릿 버튼들을 출력할지 정한다 (더 좋은 방법을 찾고 싶었는데 그러지 못했다.);
type Replaces<T extends keyof REPLACE> = Array<REPLACE[T]>
const bookingCommon: SMS_BOOKING[] = ["BOOKERNMAE", "BOOKING_STATUS", "PEOPLE", "PROD_NAME", "PRICE", "TRAVEL_CONFIRMED", "TRAVEL_DATE_YMD"];
const BANK_TRANSFER_BOOKER: Replaces<"BANK_TRANSFER_BOOKER"> = ["BOOKERNMAE"];
const BANK_TRANSFER_SELLER: Replaces<"BANK_TRANSFER_SELLER"> = ["BOOKERNMAE"];
const CANCEL_BOOKING_BOOKER: Replaces<"CANCEL_BOOKING_BOOKER"> = [...bookingCommon];
const CANCEL_BOOKING_SELLER: Replaces<"CANCEL_BOOKING_BOOKER"> = [...bookingCommon];
const COMPLETE_BOOKING_BOOKER: Replaces<"COMPLETE_BOOKING_BOOKER"> = [...bookingCommon];
const COMPLETE_BOOKING_SELLER: Replaces<"COMPLETE_BOOKING_SELLER"> = [...bookingCommon];
const SIGNUP_INDI_USER: Replaces<"SIGNUP_INDI_USER"> = ["USERNAME"];
const SIGNUP_PARNTER_B_USER: Replaces<"SIGNUP_PARNTER_B_USER"> = ["USERNAME"];
const SIGNUP_PARTNER_USER: Replaces<"SIGNUP_PARTNER_USER"> = ["USERNAME"];
const SETTLEMENT_REQUEST: Replaces<"SETTLEMENT_REQUEST"> = ["PARTNERNAME","REQUEST_DATE"];

export const getReplaceListByEvent = <T extends keyof REPLACE>(event: T | null) => {

    switch (event) {
        case NotificationTriggerEvent.BANK_TRANSFER_BOOKER
            : return BANK_TRANSFER_BOOKER
        case NotificationTriggerEvent.BANK_TRANSFER_SELLER
            : return BANK_TRANSFER_SELLER
        case NotificationTriggerEvent.CANCEL_BOOKING_BOOKER
            : return CANCEL_BOOKING_BOOKER
        case NotificationTriggerEvent.CANCEL_BOOKING_SELLER
            : return CANCEL_BOOKING_SELLER
        case NotificationTriggerEvent.COMPLETE_BOOKING_BOOKER
            : return COMPLETE_BOOKING_BOOKER
        case NotificationTriggerEvent.COMPLETE_BOOKING_SELLER
            : return COMPLETE_BOOKING_SELLER
        case NotificationTriggerEvent.SIGNUP_INDI_USER
            : return SIGNUP_INDI_USER
        case NotificationTriggerEvent.SIGNUP_PARNTER_B_USER
            : return SIGNUP_PARNTER_B_USER
        case NotificationTriggerEvent.SIGNUP_PARTNER_USER
            : return SIGNUP_PARTNER_USER
        case NotificationTriggerEvent.SETTLEMENT_REQUEST
            : return SETTLEMENT_REQUEST
    }
    return []
}