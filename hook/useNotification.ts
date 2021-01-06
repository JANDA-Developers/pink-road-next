
// template CRUD
// History R
import {SMSTEMPLATE_CREATE, SMSTEMPLATE_UPDATE, SMSTEMPLATE_DELETE, NOTIFICATION_HISTORY} from "../apollo/gql/notification"
import { notificationHistory, notificationHistoryVariables, notificationHistory_NotificationHistory_data, smstemplateCreate, smstemplateCreateVariables, smstemplateDelete, smstemplateDeleteVariables, smsTemplateUpdate, smsTemplateUpdateVariables, _INotificationHistoryItemFilter, _INotificationHistoryItemSort } from "../types/api";
import { getRefetch } from "../utils/api";
import { generateListQueryHook, generateMutationHook } from "../utils/query";

// Manager
export const useSmsTemplateCreate = generateMutationHook<smstemplateCreate,smstemplateCreateVariables>(SMSTEMPLATE_CREATE, {
    ...getRefetch(NOTIFICATION_HISTORY)
});
export const useSmsTemplateUpdate = generateMutationHook<smsTemplateUpdate,smsTemplateUpdateVariables>(SMSTEMPLATE_UPDATE, {
    ...getRefetch(NOTIFICATION_HISTORY)
});
export const useSmsTemplateDelete = generateMutationHook<smstemplateDelete,smstemplateDeleteVariables>(SMSTEMPLATE_DELETE, {
    ...getRefetch(NOTIFICATION_HISTORY)
});
export const useBookingList = generateListQueryHook<_INotificationHistoryItemFilter,_INotificationHistoryItemSort,notificationHistory,notificationHistoryVariables,notificationHistory_NotificationHistory_data>(NOTIFICATION_HISTORY,{initialSort:[_INotificationHistoryItemSort.createdAt_desc]});

