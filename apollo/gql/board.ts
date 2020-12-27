import { gql } from "@apollo/client";

export const BOARD_FIND_BY_EMAIL = gql`
    query boardFindByEmail($email:String!, $filter:_BoardFilter, $sort: [_BoardSort!]
){
        BoardFindByEmail(email: $email, filter:$filter, sort:$sort) {
        ok
        error
        data {
            _id
            createdAt
            updatedAt
            isDelete
            title
            contents
            isNotice
            isOpen
            summary
            subTitle
            keyWards
            thumb {
                uri
            }
            viewCount
            likeCount
            slug
            questionStatus
            boardType
        }
       } 
   }
`