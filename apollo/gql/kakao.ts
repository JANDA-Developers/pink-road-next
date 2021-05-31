import { gql } from "@apollo/client";
import { F_PAGE, F_PAGE_INFO } from "./fragments";
import { F_NOTIFICATION_TRIGGER } from "./notification";

export const F_KAKAO_TEMPLATE_COMMENT = gql`
    fragment FkakaoTemplateCommnet on KakaoTemplateComment {
        id
        commentContent
        name
        cdate
        status
    }
`;

export const F_KAKAO_TEMPLATE_BUTTON = gql`
    fragment FkakaoTemplateButton on KakaoTemplateButton {
        ordering
        name
        linkType
        linkTypeName
        linkMo
        linkPc
        linkIos
        linkAnd
        linkM
        linkP
        linkI
        linkA
    }
`;

export const F_KAKAO_TEMPLATE = gql`
    fragment FkakaoTemplate on KakaoTemplate {
        event
        templtContent
        templtName
        status
        inspStatus
        buttons {
            ...FkakaoTemplateButton
        }
        cdate
        udate
        templtCode
        comments {
            ...FkakaoTemplateCommnet
        }
    }
    ${F_KAKAO_TEMPLATE_BUTTON}
    ${F_KAKAO_TEMPLATE_COMMENT}
`;

export const KAKAO_TEMPLATE_CRATE = gql`
    mutation kakaoTemplateCreate(
        $input: KakaoTemplateCreateInput!
        $event: NotificationTriggerEvent!
    ) {
        KakaoTemplateCreate(input: $input, event: $event) {
            ok
            error {
                location
                severity
                code
                message
            }
        }
    }
`;

export const KAKAO_TEMPLATE_DELETE = gql`
    mutation kakaoTemplateDelete($tpl_code: String!) {
        KakaoTemplateDelete(tpl_code: $tpl_code) {
            ok
            error {
                location
                severity
                code
                message
            }
        }
    }
`;

export const KAKAO_TEMPLATE_UPDATE = gql`
    mutation kakaoTemplateUpdate(
        $input: KakaoTemplateUpdateInput
        $templtCode: String!
        $event: NotificationTriggerEvent!
    ) {
        KakaoTemplateUpdate(
            input: $input
            templtCode: $templtCode
            event: $event
        ) {
            ok
            error {
                location
                severity
                code
                message
            }
        }
    }
`;

export const KAKAO_TEMPLATE_LIST = gql`
    query kakaoTemplateList {
        KakaoTemplateList {
            ok
            error {
                location
                severity
                code
                message
            }
            data {
                ...FkakaoTemplate
            }
        }
    }
    ${F_KAKAO_TEMPLATE}
`;

export const KAKAO_TEMPLATE_REQUEST = gql`
    mutation kakaoTemplateRequest($templtCode: String!) {
        KakaoTemplateRequest(templtCode: $templtCode) {
            ok
            error {
                location
                severity
                code
                message
            }
        }
    }
`;

export const KAKAO_TEMPLATE_LIST_SYNC = gql`
    mutation kakaoTemplateListSync {
        KakaoTemplateListSync {
            ok
            error {
                location
                severity
                code
                message
            }
            data {
                ...FkakaoTemplate
            }
        }
    }
    ${F_KAKAO_TEMPLATE}
`;
