import { gql } from "@apollo/client";
import { F_PAGE, F_PAGE_INFO } from "./fragments";

export const F_NOTIFICATION_TRIGGER = gql`
  fragment FnotificationTrigger on NotificationTrigger  {
    _id
    createdAt
    updatedAt
    sender
    event
    isEnabled
    tags {
      key
      value
    }
  }
`

export const F_SMS_TEMPLATE = gql`
  fragment FsmsTemplate on SmsTemplate {
    name
    description
    content
    trigger {
      ...FnotificationTrigger
    }
    replacers
    manager {
      _id
    }
  }
  ${F_NOTIFICATION_TRIGGER}
`

export const F_NOTIFICATION_MANAGER = gql`
  fragment FnotificationManager on NotificationManager {
    smsPricingTable {
      SMS
      LMS
      MMS
    }
    emailPricing
    currency
    pointRemains
    templates {
      ...FsmsTemplate
    }
  }
  ${F_SMS_TEMPLATE}
`

export const F_NOTIFICATION_HISTORY_ITEM = gql`
  fragment FnotificationHistoryItem on INotificationHistoryItem {
    _id
    createdAt
    updatedAt
    isDelete
    method
    sender
    receivers
    title
    content
    count
    successCount
    errorCount
    pointRemains
    pointConsumed
  }
`

export const F_NOTIFICATION_SENDER = gql`
  fragment FnotificationSender  on NotificationSender  {
    type
    sender
    isVerified
    isRegisteredToAligo
  }
`


export const NOTIFICATION_HISTORY = gql`
    query notificationHistory(
        $sort: [_INotificationHistoryItemSort!]
        $filter: _INotificationHistoryItemFilter
        $pageInput: pageInput!
    ) {
    NotificationHistory(
        sort: $sort
        pageInput: $pageInput
        filter: $filter
    ) {
        ok
        error
        page {
            ...Fpage
        }
        data  {
            ...FnotificationHistoryItem
        }
    }
}
${F_PAGE}
${F_NOTIFICATION_HISTORY_ITEM}
`


export const NOTIFICATION_SENDER_PHONE_ADD_START = gql`
    mutation notificationSenderPhoneAddStart(
      $target: VerificationTarget!
      $payload: String!
    ) {
      NotificationSenderPhoneAddStart(
        target: $target
        payload: $payload
    ) {
        ok
        error 
    }
  }
`


export const NOTIFICATION_SENDER_ADD_COMPLETE = gql`
    mutation notificationSenderAddComplete(
      $verificationId: ID!
      $target: VerificationTarget!
      $code: String!
      $payload: String!
    ) {
      NotificationSenderAddComplete(
        verificationId: $verificationId
        target: $target
        code: $code
        payload: $payload
    ) {
        ok
        error 
    }
  }
`


export const SMSTEMPLATE_UPDATE = gql`
    mutation smsTemplateUpdate(
      $input: SmsTemplateUpdateInput!
      $templateId: String!
    ) {
    SmsTemplateUpdate(
        input:$input
        templateId: $templateId
    ) {
        ok
        error 
    }
    }
`

export const SMSTEMPLATE_CREATE = gql`
    mutation smstemplateCreate(
        $input: SmsTemplateCreateInput!
    ) {
        SmsTemplateCreate(
            input:$input
        ) {
            ok
            error 
        }
    }
`

export const SMSTEMPLATE_DELETE = gql`
    mutation smstemplateDelete(
        $templateId: String!
    ) {
    SmsTemplateDelete(
        templateId:$templateId
    ) {
        ok
        error 
    }
}
`

export const SMS_SIGNLE_MESSAGE_SEND = gql`
    mutation smsSingleMessageSend(
        $input: SmsSendInput!
    ) {
    SmsSingleMessageSend(
        input: $input
    ) {
        ok
        error 
    }
}
`

export const SMS_TEMPLATE_MESSAGE_SEND = gql`
    mutation smsTemplateMessageSend(
        $input: SmsTemplateMessageSendInput!
    ) {
    SmsTemplateMessageSend(
        input: $input
    ) {
        ok
        error 
    }
}
`