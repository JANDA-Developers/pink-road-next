import { QueryHookOptions, useQuery } from "@apollo/client";
import { BOARD_FIND_BY_EMAIL } from "../apollo/gql/board";
import { boardFindByEmail, boardFindByEmailVariables } from "../types/api";

export interface IuseBoardFindByEmailProp extends QueryHookOptions<boardFindByEmail,boardFindByEmailVariables> {
}

export const useBoardFindByEmail = (email:string,{
    ...options
}:IuseBoardFindByEmailProp = {}) => {
    const { data, loading } = useQuery<boardFindByEmail, boardFindByEmailVariables>(BOARD_FIND_BY_EMAIL, {
        ...options,
        variables: {
            email
        },
        skip: !email,
        nextFetchPolicy: "network-only",
        onCompleted: ({BoardFindByEmail})=> {
            if(!BoardFindByEmail.ok) {
                console.error(data?.BoardFindByEmail.error);
                alert("잘못된 접근 입니다.");
            }
        }
    })

    const boards = data?.BoardFindByEmail?.data || undefined
    
    return { boards, loading }
}
