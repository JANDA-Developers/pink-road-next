import { gql } from "@apollo/client"
import { F_FILE, F_PAGE, F_USER } from "./fragments"

export const F_NEWS = gql`
    fragment Fnews on News {
        _id
        createdAt
        updatedAt
        isDelete
        title
        contents
        author {
            ...Fuser
        }
        isNotice
        isOpen
        summary
        subTitle
        keyWards
        files {
            ...Ffile
        }
        thumb {
            ...Ffile
        }
        viewCount
        type
}
${F_USER}
${F_FILE}
`


export const NEWS_FIND_BY_ID = gql`
query newsFindById(
  $id: String!
) {
  NewsFindById(
    id:$id
  ) {
  ok
  error {
location
        severity
        code
        message
}
  data {
    ...Fnews
  }
  next{
    _id
    title
   }
    before{
      _id
      title
    }
}
}
${F_NEWS}
`
export const NEWS_LIST = gql`
query newsList(
$sort: [_NewsSort!]
$filter: _NewsFilter
$pageInput: pageInput!
) {
NewsList(
sort: $sort
pageInput: $pageInput
filter: $filter
) {
  ok
  error {
      location
      severity
      code
      message
    }
  page {
    ...Fpage
  }
  data  {
    ...Fnews
  }
}
}
${F_PAGE}
${F_NEWS}
`


export const NEWS_CREATE = gql`
  mutation newsCreate(
    $params: NewsCreateInput!
  ) {
    NewsCreate(
      params:$params
    ) {
    ok
    error {
      location
      severity
      code
      message
    }
    data {
      _id
      type
    }
  }
}
`
export const NEWS_DELETE = gql`
  mutation newsDelete(
    $id: String!
  ) {
    NewsDelete(
      id:$id
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
`
export const NEWS_UPDAET = gql`
  mutation newsUpdate(
    $params: NewsUpdateInput!
    $id: String!
  ) {
  NewsUpdate(
      params:$params
      id: $id
    ) {
    ok
    error {
      location
              severity
              code
              message
      }
    data {
      type
      _id
    }
  }
}
`