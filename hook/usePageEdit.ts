import { useMutation } from "@apollo/client";
import { useState } from "react";
import PinkClient from "../apollo/client";
import { PAGE_INFO_CREATE, PAGE_INFO_UPDATE } from "../apollo/gql/mutations";
import { pageInfoCreate, pageInfoCreateVariables, pageInfoUpdate, pageInfoUpdateVariables } from "../types/api";
import { ISet } from "../types/interface";
import { cloneObject } from "../utils/clone";
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