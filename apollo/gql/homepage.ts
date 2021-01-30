import { gql } from "@apollo/client";
import { F_FILE } from "./fragments";


export const F_MODAL = gql`
  fragment Fmodal on Modal {
    _id
    link
    startDate
    endDate
    content
    linkBehavior
    style
    title
    priority
    createdAt
  }
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
        PrivacyPolicy
        partnerBpolicy
        usePolicy
        travelerPolicy
        partnerPolicy
        marketingPolic
        logoTop {
          ...Ffile
        }
        logoBottom {
          ...Ffile
        }
        bannerA {
          ...Ffile
        }
        bannerB {
          ...Ffile
        }
        degitalSalesNumber
        copyRight
        bankInfo {
          accountHolder
          accountNumber
          bankName          
        }
        bannerBlink
        bannerAlink
        thirdPolicy
        modal {
          ...Fmodal
        }
    }
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