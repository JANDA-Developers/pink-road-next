import { gql } from "@apollo/client";
import { F_FILE } from "./fragments";


export const F_MODAL = gql`
  fragment Fmodal on Modal {
    link
    startDate
    endDate
    content
    linkBehavior
    style
    title
  }
`

export const F_HOMEPAGE = gql`
    fragment Fhomepage  on Homepage  {
        logo {
          ...Ffile
        }
        siteDesc
        siteKeyWards
        siteName
        signUpRedirect
        blacklist
        loginRedirect
        loginOutRedirect
        PrivacyPolicy
        partnerBpolicy
        usePolicy
        travelerPolicy
        partnerPolicy
        marketingPolic
        bannerA {
          ...Ffile
        }
        bannerB {
          ...Ffile
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
      error
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
      error
      data {
          ...Fhomepage
      }
    }
  }
  ${F_HOMEPAGE}
`