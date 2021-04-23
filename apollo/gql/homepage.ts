import { gql } from "@apollo/client";
import { F_FILE } from "./fragments";

export const F_MODAL = gql`
  fragment Fmodal on Modal {
    _id
    link
    useMobile
    usePc
    startDate
    endDate
    content
    linkBehavior
    style
    title
    priority
    createdAt
    open
  }
`

export const F_BANNER = gql`
  fragment Fbanner on Banner {
    img {
      ...Ffile
    }
    link
    target
    use
  }
  ${F_FILE}
`

export const F_HOMEPAGE = gql`
    fragment Fhomepage  on Homepage  {
        logo {
          ...Ffile
        }
        address
        addressUrl
        siteDesc
        siteKeyWards
        contact
        siteName
        signUpRedirect
        blacklist
        compnanyIntoduceFile {
          ...Ffile
        }
        partnerFooter {
          ...Ffile
        }
        instaLink
        blogLink
        facebookLink
        twitterLink
        busiNumber
        email
        ceoName
        openTime
        loginRedirect
        loginOutRedirect
        tourismbusinessNumber

    indiUsePolicy
    partnerUsePolicy
    busiUsePolicy
    indiPrivacyPolicy
    partnerPrivacyPolicy
    busiPartnerPrivacyPolicy
    privacyThirdPolicy
    marketingPolicy
    travelerPolicy
    usePolicy
    krTravelPolicy
    bookingPrivacyPolicy
    bookingThirdPolicy
    refundPolicy

        logoTop {
          ...Ffile
        }
        logoBottom {
          ...Ffile
        }
        bannerA {
          ...Fbanner
        }
        bannerB {
          ...Fbanner
        }
        degitalSalesNumber
        copyRight
        bankInfo {
          accountHolder
          accountNumber
          bankName          
        }
        modal {
          ...Fmodal
        }
    }
    ${F_BANNER}
    ${F_FILE}
    ${F_MODAL}
`

export const HOMEPAGE = gql`
  query homepage {
    Homepage {
      ok
      error {
      location
      severity
      code
      message
    }
      data {
          ...Fhomepage
      }
    }
  }
  ${F_HOMEPAGE}
`


export const HOMEPAGE_UPDATE = gql`
  mutation homepageUpdate(
      $params: HomepageUpdateInput!
    ) {
    HomepageUpdate(params:$params) {
      ok
      error {
      location
      severity
      code
      message
    }
      data {
          ...Fhomepage
      }
    }
  }
  ${F_HOMEPAGE}
`