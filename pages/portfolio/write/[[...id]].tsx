
import { useRouter } from "next/router";
import React, { useContext, useEffect } from 'react';
import { initStorage, Storage } from '../../../utils/Storage';
import "react-day-picker/lib/style.css";
import { BoardWrite, TCategory } from "components/board/Write";
import { isUnLoaded, IUseBoardData, useBoard } from "hook/useBoard";
import { usePortfolioFind, useProtfolioCreate, useProtfolioDelete, useProtfolioUpdate } from "../../../hook/usePortfolio";
import { IProps } from "../../../components/toast/Toast";
import { AppContext } from "../../_app";


export const PortFolioWrite: React.FC<IProps> = () => {
    const router = useRouter();
    const id = router.query.id?.[0] as string | undefined;
    const { item: portfolio } = usePortfolioFind(id);
    const { categoriesMap } = useContext(AppContext);
    const mode = id ? "create" : "edit";


    const categoryList = categoriesMap?.PORTPOLIO.map((cat): TCategory => ({
        _id: cat._id,
        label: cat.label
    }))

    const boardHook = useBoard({
        ...portfolio,
        categoryId: portfolio?.category?._id
    })


    const { boardData, loadKey, loadKeyAdd, setBoardData, validater: { validate } } = boardHook

    const [create] = useProtfolioCreate();
    const [deleteMu] = useProtfolioDelete();
    const [update] = useProtfolioUpdate();

    const handleUpdate = () => {
        if (validate())
            update({
                variables: {
                    id: id!,
                    params: {
                        ...boardData
                    }
                }
            })
    }


    const handleDelete = () => {
        deleteMu({
            variables: {
                id: id!
            }
        })
    }

    const handleCreate = () => {
        if (validate())
            create({
                variables: {
                    params: {
                        ...boardData
                    }
                }
            })
    }

    const handleTempSave = () => {
        Storage?.saveLocal("portfolioWrite", boardData);
    }

    const handleCancel = () => {
        router.push("/portfolio")
    }

    const handleLoad = () => {
        const saveData = Storage?.getLocalObj<IUseBoardData>("portfolioWrite");
        if (!isUnLoaded(saveData)) {
            setBoardData(saveData);
            loadKeyAdd();
        }
    }

    useEffect(() => {
        initStorage()
    }, [])

    return <BoardWrite
        boardHook={boardHook}
        key={loadKey}
        mode={mode}
        onCancel={handleCancel}
        categoryList={categoryList}
        onCreate={handleCreate}
        onDelete={handleDelete}
        onEdit={handleUpdate}
        onSave={handleTempSave}
        onLoad={handleLoad}
        opens={{
            category: true,
            files: false,
            subTitle: true,
            thumb: true,
            title: true
        }} />
};

export default PortFolioWrite;