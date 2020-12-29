import { gql } from "@apollo/client";
import { F_PAGE_INFO } from "./fragments";

export const F_SMS_TEMPLATE = gql`
  fragment FsmsTemplate on SmsTemplate {
    name
    description
    content
    trigger
    replacers
    manager
  }
`

export const F_NOTIFICATION_MANAGER = gql`
  fragment FnotificationManager on NotificationManager {
    smsPricingTable
    emailPricing
    currency
    pointRemains
    templates
  }
`

export const F_NOTIFICATION_HISTORY_ITEM = gql`
  fragment FnotificationHistoryItem on INotificationHistoryItem {
    smsPricingTable
    emailPricing
    currency
    pointRemains
    templates
  }
`

export const F_NOTIFICATION_SENDER = gql`
  fragment FnotificationSender  on NotificationSender  {
    type
    sender
    isVerified
    files 
    isRegisteredToAligo
    verification
  }
`
export const F_NOTIFICATION_TRIGGER = gql`
  fragment FnotificationTrigger on NotificationTrigger  {
    _id
    createdAt
    updatedAt
    sender
    event
    isEnabled
    tags
  }
`


export const F_VERIFICATION = gql`
    fragment Fverification on Verification {
        _id
        createdAt
        updatedAt
        payload
        target
        isVerified
        event
        storeCode
        expiresAt
        isExpire
    }
`

export const NOTIFICATIONO_HISTORY = gql`
    query notificationoHistory(
        $sort: [_NotificationoSort!]
        $filter: _NotificationoFilter
        $pageInput: pageInput!
    ) {
    NotificationoHistory(
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
${F_PAGE_INFO}
${F_NOTIFICATION_HISTORY_ITEM}
`


export const SMS_TEMPLATE_MESSAGE_SEND = gql`
  mutation smsTemplateMessageSend(
        $params: ProductCreateInput!
    ) {
    SmsTemplateMessageSend(
        params: $params  
      ) {
      ok
      error 
      data {
        _id
      }
    }
  }
`;

export const SMS_SINGLE_MESSAGE_SEND = gql`
  mutation smsSingleMessageSend(
        $input: SmsSendInput!
    ) {
    SmsSingleMessageSend(
        input: $input
      ) {
      ok
      error 
      data {
        _id
      }
    }
  }
`;

export const PRODUCTS_CREATE = gql`
  mutation ProductCreate(
        $params: ProductCreateInput!
    ) {
    ProductCreate(
        params: $params  
      ) {
      ok
      error 
      data {
        _id
      }
    }
  }
`;


export const SMS_TEMPLAET_CREATE = gql`
  mutation smsTemplateCreate(
        $input: SmsTemplateCreateInput!
    ) {
    SmsTemplateCreate(
        input: $input
      ) {
      ok
      error 
      data {
        _id
      } 
    }
  }
`;

export const SMS_TEMPLAET_DELETE = gql`
  mutation smsTemplateDelete(
        $templateId: String!
    ) {
    SmsTemplateDelete(
        templateId: $templateId
      ) {
      ok
      error 
      data {
        _id
      } 
    }
  }
`;

export const SMS_TEMPLAET_CREATE = gql`
  mutation smsTemplateCreate(
        $input: SmsTemplateCreateInput!
    ) {
    SmsTemplateCreate(
        input: $input
      ) {
      ok
      error 
      data {
        _id
      } 
    }
  }
`;



export const NOTIFICATION_SENDER_PHONE_ADD_START = gql`
    mutation notificationSenderPhoneAddStart(
        $input: VerificationCompleteInput!
    ) {
      NotificationSenderPhoneAddStart(
        input:$input
    ) {
        ok
        error {
            ...FuserError
        }
        data {
          ....Fverification
        }
    }
  }
${F_VERIFICATION}
`


export const NOTIFICATION_SENDER_ADD_COMPLETE = gql`
    mutation notificationSenderAddComplete(
        $input: VerificationCompleteInput!
    ) {
      NotificationSenderAddComplete(
        input:$input
    ) {
        ok
        error {
            ...FuserError
        }
        data {
          ....Fverification
        }
    }
  }
${F_VERIFICATION}
`