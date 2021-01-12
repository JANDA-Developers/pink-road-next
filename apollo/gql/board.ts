import { gql } from "@apollo/client";

export const MY_BOARD_LIST = gql`
    query myBoardList($pageInput: pageInput!, $filter:_BoardFilter, $sort: [_BoardSort!]
){
        MyBoardList(
            sort: $sort
            pageInput: $pageInput
            filter: $filter
        ) {
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