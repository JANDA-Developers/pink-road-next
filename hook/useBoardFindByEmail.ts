import { QueryHookOptions, useQuery } from "@apollo/client";
import { useState } from "react";
import { BOARD_FIND_BY_EMAIL } from "../apollo/gql/board";
import { boardFindByEmail, boardFindByEmailVariables, boardFindByEmail_BoardFindByEmail_data, _BoardFilter, _BoardSort } from "../types/api";

export interface IuseBoardFindByEmailProp extends QueryHookOptions<boardFindByEmail, boardFindByEmailVariables> {
}

export interface IuseBoardFindByEmail {
    boards: boardFindByEmail_BoardFindByEmail_data[] | undefined;
    loading: boolean;
    sort: _BoardSort[];
    filter: _BoardFilter;
    setSort: React.Dispatch<React.SetStateAction<_BoardSort[]>>;
    setFilter: React.Dispatch<_BoardFilter>;
}

export const useBoardFindByEmail = (email:string,{
    ...options
}:IuseBoardFindByEmailProp = {}):IuseBoardFindByEmail => {
    const [filter, setFilter] = useState<_BoardFilter>();
    const [sort, setSort] = useState<_BoardSort[]>([]);
    const { data, loading } = useQuery<boardFindByEmail, boardFindByEmailVariables>(BOARD_FIND_BY_EMAIL, {
        ...options,
        variables: {
            email,
            filter,
            sort,
            ...options.variables,
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
    
    return { sort, filter, boards, loading, setSort, setFilter }
}
