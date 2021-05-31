import {
    KAKAO_TEMPLATE_CRATE,
    KAKAO_TEMPLATE_DELETE,
    KAKAO_TEMPLATE_LIST,
    KAKAO_TEMPLATE_LIST_SYNC,
    KAKAO_TEMPLATE_REQUEST,
    KAKAO_TEMPLATE_UPDATE,
} from "../apollo/gql/kakao";
import {
    NOTIFICATION_HISTORY,
    TEMPLATE_LIST,
} from "../apollo/gql/notification";
import {
    notificationHistory,
    notificationHistoryVariables,
    notificationHistory_NotificationHistory_data,
    kakaoTemplateUpdate,
    kakaoTemplateUpdateVariables,
    templateList,
    templateListVariables,
    templateList_TemplateList_data,
    _INotificationHistoryItemFilter,
    _INotificationHistoryItemSort,
    _ITemplateFilter,
    _ITemplateSort,
    kakaoTemplateDelete,
    kakaoTemplateDeleteVariables,
    kakaoTemplateCreate,
    kakaoTemplateCreateVariables,
    kakaoTemplateRequest,
    kakaoTemplateRequestVariables,
    kakaoTemplateList,
    kakaoTemplateList_KakaoTemplateList_data,
    kakaoTemplateListSync,
    kakaoTemplateListSync_KakaoTemplateListSync_data,
} from "../types/api";
import { getRefetch } from "../utils/api";
import {
    generateListQueryHook,
    generateMutationHook,
    generateQueryHook,
} from "../utils/query";

export const useKakaoTemplateCofirm = generateMutationHook<
    kakaoTemplateRequest,
    kakaoTemplateRequestVariables
>(KAKAO_TEMPLATE_REQUEST, {
    ...getRefetch(NOTIFICATION_HISTORY, KAKAO_TEMPLATE_LIST),
});
export const useKakaoTemplateCreate = generateMutationHook<
    kakaoTemplateCreate,
    kakaoTemplateCreateVariables
>(KAKAO_TEMPLATE_CRATE, {
    ...getRefetch(NOTIFICATION_HISTORY, KAKAO_TEMPLATE_LIST),
});
export const useKakaoTemplateUpdate = generateMutationHook<
    kakaoTemplateUpdate,
    kakaoTemplateUpdateVariables
>(KAKAO_TEMPLATE_UPDATE, {
    ...getRefetch(NOTIFICATION_HISTORY, KAKAO_TEMPLATE_LIST),
});
export const useKakaoTemplateDelete = generateMutationHook<
    kakaoTemplateDelete,
    kakaoTemplateDeleteVariables
>(KAKAO_TEMPLATE_DELETE, {
    ...getRefetch(NOTIFICATION_HISTORY, KAKAO_TEMPLATE_LIST),
});

export const useKakaoTemplateList =
    generateQueryHook<
        kakaoTemplateList,
        kakaoTemplateList_KakaoTemplateList_data[]
    >(KAKAO_TEMPLATE_LIST);

export const useKakaoTemplateSync = generateMutationHook<
    kakaoTemplateListSync,
    kakaoTemplateListSync_KakaoTemplateListSync_data[]
>(KAKAO_TEMPLATE_LIST_SYNC, { ...getRefetch(KAKAO_TEMPLATE_LIST) });
