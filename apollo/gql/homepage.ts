import { gql } from "@apollo/client";



export const F_HOMEPAGE = gql`
    fragment Fhomepage  on Homepage  {
        logi
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
        thirdPolicy
        modal {
          link
          startDate
          endDate
          content
          linkBehavior
          style
        }
    }
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