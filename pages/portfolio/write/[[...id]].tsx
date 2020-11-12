
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import { initStorage, Storage } from '../../../utils/Storage';
import { OutputData } from '@editorjs/editorjs';
import "react-day-picker/lib/style.css";
import { Ffile, portfolioCreate, portfolioCreateVariables, portfolioFindById, portfolioFindByIdVariables, PortfolioCreateInput, FileCreateInput, pcategoryList_pCategoryList_data, portfolioUpdate, portfolioUpdateVariables, PortfolioUpdateInput } from '../../../types/api';
import { IProductDefaultData } from '../../../types/defaults/defaultProduct';
import { useMutation, useQuery } from '@apollo/client';
import { useUpload } from "hook/useUpload";
import { PORTFOLIO_CREATE, PORTFOLIO_UPDAET, } from "apollo/mutations";
import { PORTFOLIO_FIND_BY_ID } from "apollo/queries";
import { getDefault } from "components/portfolio/helper";
import { IPortfolio } from "types/interface";
import { EMPTY_EDITOR } from "types/const";
import dynamic from "next/dynamic";
import { PCategoryAdd } from "components/category/Category";
import { usePcategory } from "hook/usePcatList";
import { usePcategoryDelete } from "hook/usePCategoryDelete";

const EditorJs = dynamic(() => import('components/editor/Editor'), { ssr: false })

interface IProp {
    context: ITourWriteWrapContext;
}

export const PortFolioWrite: React.FC<IProp> = ({ context }) => {
    const { createFn, portfolio, mode, pcategories, updateFn, id } = context;
    const [key, setKey] = useState<boolean>(0);

    const handleCreate = () => {
        createFn(nextPortfolio)
    }

    const handleUpdate = () => {
        updateFn(id, nextPortfolio)
    }

    const handleSave = () => {
        const data: PortfolioCreateInput = nextPortfolio
        Storage.saveLocal("portfolioWrite", data);
        alert("임시 저장 되었습니다. 다음번 같은 기기로 접속하신후 로드 해주세요.")
    }

    const handleLoad = () => {
        const savedData: IPortfolio = Storage.getLocalObj("portfolioWrite", undefined);
        if (!savedData) alert("저장된 내역이 없습니다.");
        setKey(key + 1);
    }

    const handleDeleteCategory = () => {
        catDelete(category)
    }
    useEffect(() => {
        initStorage()
    }, [])


    return <Write />
};


export type TCreateFn = (params: PortfolioCreateInput) => void;
export type TUpdateFn = (id: string, params: PortfolioUpdateInput) => void;

interface IProp {
    isExperience?: boolean;
    mode?: "edit" | "create"
}

interface ITourWriteWrapContext {
    createFn: TCreateFn;
    updateFn: TUpdateFn;
    portfolio: IPortfolio;
    pcategories: pcategoryList_pCategoryList_data[];
    findLoading: boolean;
    createLoading: boolean;
    mode: "create" | "edit"
    id: string;
}


//수정하고 나면 수정한 내용을 그대로 덮어버리면 안됨. 핑크로드의 승인이 필요함.
export const PortFolioWriteWrap: React.FC<IProp> = ({ isExperience }) => {
    const router = useRouter(); // => 넥스트에서는 변경
    const id = router.query.id as string | undefined;

    const [portfoliotUpdateMu, { loading: updateLoading }] = useMutation<portfolioUpdate, portfolioUpdateVariables>(PORTFOLIO_UPDAET, {
        onCompleted: ({ PortfolioUpdate }) => {
            if (PortfolioUpdate.ok) {
                const id = PortfolioUpdate.data._id;
                router.push(`/portfolio/view/${id}`)
            }
        }
    })

    const [portfoliotCreateMu, { loading: createLoading }] = useMutation<portfolioCreate, portfolioCreateVariables>(PORTFOLIO_CREATE, {
        onCompleted: ({ PortfolioCreate }) => {
            if (PortfolioCreate.ok) {
                const id = PortfolioCreate.data._id;
                router.push(`/portfolio/view/${id}`)
            }
        }
    })
    const { data, loading: findLoading } = useQuery<portfolioFindById, portfolioFindByIdVariables>(PORTFOLIO_FIND_BY_ID, {
        variables: {
            id
        },
        skip: !id
    })

    const portfolio = data?.PortfolioFindById?.data;

    const { pcategories } = usePcategory();

    const createFn: TCreateFn = (params: PortfolioCreateInput) => {
        portfoliotCreateMu({
            variables: {
                params
            }
        })
    }

    const updateFn = (id: string, params: PortfolioUpdateInput) => {
        portfoliotUpdateMu({
            variables: {
                params,
                id
            }
        })
    }

    if (createLoading || findLoading) return null;

    const context: ITourWriteWrapContext = {
        createFn,
        updateFn,
        portfolio,
        findLoading,
        createLoading,
        pcategories,
        mode: !id ? "create" : "edit",
        id
    }

    return <PortFolioWrite context={context} />;
};


export default PortFolioWriteWrap;