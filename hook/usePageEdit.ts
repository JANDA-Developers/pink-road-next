import { useMutation } from "@apollo/client";
import { useState } from "react";
import PinkClient from "../apollo/client";
import { PAGE_INFO_CREATE, PAGE_INFO_UPDATE } from "../apollo/gql/mutations";
import { pageInfoCreate, pageInfoCreateVariables, pageInfoUpdate, pageInfoUpdateVariables } from "../types/api";
import { ISet } from "../types/interface";
import { cloneObject } from "../utils/clone";
import isEmpty from "../utils/isEmpty";
import {  mergeDeepOnlyExsistProperty } from "../utils/merge";
import { getEditUtils, IGetEditUtilsResult } from "../utils/pageEdit";
export interface IUsePageEdit<Page> extends IGetEditUtilsResult<Page> {
    setPage: ISet<Page>
    page: Page
    submitEdit: (key: string, value: any) => void
    editMode: boolean;
    setEditMode: ISet<boolean>;
}

export const usePageEdit = <Page>(originPage:any, defaultPage:Page, ln = "kr") => {
    const [lang, setLang] = useState(ln);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [page, setPage] = useState(cloneObject(mergeDeepOnlyExsistProperty(cloneObject(defaultPage), originPage)));
 
    //page는 이전 값을 조회하고있음 왜 ? => state니까 
    //페이지가 바뀌면 setPage는 초기화 되어야함. 
    //useEffect를 통해서 바꾸는게 좋을까? 아마도..
    //하지만 한번의 렌더는 일어나고 맘
    // 여기서 state를 사용하는데 구조적 문제가있음 
    //_app에서 state를 사용하는것이 위험함
    // 어떻게든 값을 업데이트 할 필요는 있어보임
        console.log("index2")
        // console.log(page)
        console.log("index3")
        // console.log(defaultPage)
    const editUtils = getEditUtils<Page>(editMode, page, setPage,lang);

    const [pageInfoCreateMu] = useMutation<pageInfoCreate, pageInfoCreateVariables>(PAGE_INFO_CREATE, {
        client: PinkClient
    })

    const [pageInfoUpdateMu] = useMutation<pageInfoUpdate, pageInfoUpdateVariables>(PAGE_INFO_UPDATE, {
    client: PinkClient
    })

    const submitEdit = (key: string, value: any) => {
        const params = {
            key,
            value
        };
        pageInfoCreateMu({
            variables: {
                params
            }
        }).then((data) => {
            pageInfoUpdateMu({
            variables: {
                key,
                params: {
                    key,
                    value
                }
            }
            })
        })
    }


    return {...editUtils,page,editMode,setPage, setLang, submitEdit, setEditMode}
}

export interface IEditPage<T> extends IUsePageEdit<T> { }