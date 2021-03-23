
import { useRouter } from "next/router";
import React, { useContext, useEffect } from 'react';
import { initStorage, Storage } from '../../../utils/Storage';
import "react-day-picker/lib/style.css";
import { BoardWrite, TCategory } from "components/board/Write";
import { IUseBoardData, nullcehck, useBoard } from "hook/useBoard";
import { usePortfolioFind, useProtfolioCreate, useProtfolioDelete, useProtfolioUpdate } from "../../../hook/usePortfolio";
import { IProps } from "../../../components/toast/Toast";
import { AppContext } from "../../_app";
import { omits } from "../../../utils/omit";
import { auth } from "../../../utils/with";
import { ALLOW_ADMINS } from "../../../types/const";


export const PortFolioWrite: React.FC<IProps> = () => {
    const router = useRouter();
    const id = router.query.id?.[0] as string | undefined;
    const { item: portfolio } = usePortfolioFind(id);
    const { categoriesMap } = useContext(AppContext);
    const mode = id ? "edit" : "create";


    const categoryList = categoriesMap?.PORTPOLIO.map((cat): TCategory => ({
        _id: cat._id,
        label: cat.label
    }))

    const boardHook = useBoard({
        ...portfolio,
        categoryId: portfolio?.category?._id
    })

    const goToView = (id: string) => {
        router.push(`/portfolio/view/${id}`)
    }

    const { boardData, loadKey, loadKeyAdd, setBoardData, validater: { validate } } = boardHook

    const [create] = useProtfolioCreate({
        onCompleted: ({ PortfolioCreate }) => {
            if (PortfolioCreate.ok) {
                const id = PortfolioCreate.data!._id;
                goToView(id)
            }
        }
    });

    const [deleteMu] = useProtfolioDelete({
        onCompleted: ({ PortfolioDelete }) => {
            if (PortfolioDelete.ok) {
                router.push("/portfolio")
            }
        }
    });

    const [update] = useProtfolioUpdate(
        {
            onCompleted: ({ PortfolioUpdate }) => {
                if (PortfolioUpdate.ok) {
                    const id = PortfolioUpdate.data!._id;
                    goToView(id)
                }
            }
        }
    );

    const handleUpdate = () => {
        if (validate())
            update({
                variables: {
                    id: id!,
                    params: {
                        ...omits(boardData, ["files" as any])
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
                        ...omits(boardData, ["files" as any])
                    }
                }
            })
    }

    const handleTempSave = () => {
        Storage?.saveLocal("portfolioWrite", boardData);
        alert("저장완료");
    }

    const handleCancel = () => {
        router.push("/portfolio")
    }

    const handleLoad = () => {
        const saveData = Storage?.getLocalObj<IUseBoardData>("portfolioWrite");

        if (!saveData) {
            alert("저장된 데이터가 없습니다.");
            return;
        }

        setBoardData(saveData);
        loadKeyAdd();
    }

    useEffect(() => {
        initStorage()
    }, [])

    useEffect(() => {
        if (portfolio) {
            setBoardData({ ...portfolio as any, categoryId: portfolio.category?._id })
        }
    }, [portfolio])

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
            open: true,
            category: true,
            files: false,
            subTitle: false,
            thumb: true,
            title: true
        }} />
};

export default auth(ALLOW_ADMINS)(PortFolioWrite);