import { gql } from "@apollo/client"

export const F_ANSWER = gql`
    fragment Fanswer on Answer {
        _id
        createdAt
        updatedAt
        isDelete
        content
        author {
            _id
            name
            profileImg {
                uri
            }
        }
    }
`

export const ANSWER_CREATE = gql`
  mutation answerCreate(
    $params: AnswerCreateInput!
    $questionId: String!
  ) {
    AnswerCreate(
      params:$params
      questionId: $questionId
    ) {
    ok
    error {
      location
      severity
      code
      message
    }
    data {
      ...Fanswer
    }
  }
}
${F_ANSWER}
`
export const ANSWER_DELETE = gql`
  mutation answerDelete(
    $questionId: String!
    $id: String!
  ) {
    AnswerDelete(
      id:$id
      questionId: $questionId 
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
export const ANSWER_UPDAET = gql`
  mutation answerUpdate(
    $params: AnswerUpdateInput!
    $questionId: String!
    $_id: String!
  ) {
  AnswerUpdate(
      params:$params
      questionId: $questionId
      _id: $_id
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
    }
  }
}
`