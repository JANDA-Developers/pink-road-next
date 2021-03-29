import { MasterLayout } from 'layout/MasterLayout';
import React, { useContext, useState } from 'react';
import Link from "next/link";
import { AppContext } from '../../_app';
import { useCategoryCreate, useCategoryDelete, useCategoryList, useCategoryUpdate, useCategoryUpdates } from '../../../hook/useCategory';
import { CategoryType, CategoryUpdatesInput, Fcategory } from '../../../types/api';
import { CategoryEitdor } from '../../../components/categoryEditor/CategoryEdiotr';
import { categoryMap } from '../../../utils/categoryMap';
import { categoryToKR } from '../../../utils/enumToKr';
import { HomepageTopNav } from '../../../components/topNav/MasterTopNav';
import { auth } from '../../../utils/with';
import { ALLOW_ADMINS } from '../../../types/const';
import isEmpty from '../../../utils/isEmpty';
import { omits } from '../../../utils/omit';
import { Change } from '../../../components/loadingList/LoadingList';

interface IProp { }

export const MsHomepageA: React.FC<IProp> = () => {
    const { data, getLoading } = useCategoryList();
    const categoriesMap = categoryMap(data || []);
    const [deleteMu] = useCategoryDelete();
    const [create] = useCategoryCreate();
    const [update] = useCategoryUpdate();
    const [updates] = useCategoryUpdates();


    if (!categoriesMap) throw Error("categoriesMap is not exsist");
    const cats = Object.entries(categoriesMap);


    const handleAdd = (type: CategoryType) => (label: string) => {
        create({
            variables: {
                params: {
                    label: label, type
                }
            }
        })
    }

    const handleDelete = (cat: Fcategory) => {
        if (confirm(`정말로 카테고리 ${cat.label}을 삭제 하시겠습니까?`))
            deleteMu({ variables: { id: cat._id } })
    }

    const handleUpdate = (cat: Fcategory, label: string) => {
        update({ variables: { id: cat._id, params: { label } } })
    }

    const handleUpdates = (params: CategoryUpdatesInput[]) => {
        if (!isEmpty(params))
            updates({
                variables: {
                    params: params.map(p => ({ _id: p._id, label: p.label, order: p.order }))
                }
            })
    }

    return <MasterLayout>
        <div className="in ">
            <h4>홈페이지 설정</h4>
            <div className="in_content">
                <HomepageTopNav />
                <div className="con homepage board">
                    <div className="design_table">
                        <div className="block_box">
                            <h5>게시판 카테고리 설정</h5>
                            <Change change={!getLoading} >
                                {cats.map((catWrap) =>
                                    <CategoryEitdor onUpdates={handleUpdates} onDelete={handleDelete} onEdit={handleUpdate} key={catWrap[0]} onAdd={handleAdd(catWrap[0] as CategoryType)} wrapLabel={categoryToKR(catWrap[0] as CategoryType)} categories={catWrap[1]} />
                                )}
                            </Change>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MasterLayout >
};

export default auth(ALLOW_ADMINS)(MsHomepageA);