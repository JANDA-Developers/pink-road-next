import { MasterLayout } from 'layout/MasterLayout';
import React, { useContext, useState } from 'react';
import Link from "next/link";
import { AppContext } from '../../_app';
import { useCategoryCreate, useCategoryDelete, useCategoryList, useCategoryUpdate } from '../../../hook/useCategory';
import { CategoryType, Fcategory } from '../../../types/api';
import { CategoryEitdor } from '../../../components/categoryEditor/CategoryEdiotr';
import { categoryMap } from '../../../utils/categoryMap';

interface IProp { }

export const MsHomepageA: React.FC<IProp> = () => {
    const { data } = useCategoryList();
    const categoriesMap = categoryMap(data || []);
    const [deleteMu] = useCategoryDelete();
    const [create] = useCategoryCreate();
    const [update] = useCategoryUpdate();



    if (!categoriesMap) throw Error("categoriesMap is not exsist");
    const cats = Object.entries(categoriesMap);

    const categoryToKR: Record<CategoryType, string> = {
        CUSTOMER_QNA: "유저QNA",
        PORTPOLIO: "포트폴리오",
        QNA: "QNA"
    }

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

    return <MasterLayout>
        <div className="in ">
            <h4>홈페이지 설정</h4>
            <div className="in_content">
                <div className="tab-nav">
                    <ul>
                        <li><Link href="/master/homepage"><a>기본설정</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-2"><a>SMS설정</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-3"><a>카카오비즈톡</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-4"><a>약관설정</a></Link></li>
                        <li className="on"><Link href="/master/homepage/homepage1-5"><a>게시판설정리</a></Link></li>
                        <li><Link href="/master/homepage/homepage1-6"><a>정산설정</a></Link></li>
                    </ul>
                </div>
                <div className="con homepage board">
                    <div className="design_table">
                        <div className="block_box">
                            <h5>게시판 카테고리 설정</h5>
                            {cats.map((catWrap) =>
                                <CategoryEitdor onDelete={handleDelete} onEdit={handleUpdate} key={catWrap[0]} onAdd={handleAdd(catWrap[0] as CategoryType)} wrapLabel={categoryToKR[catWrap[0] as CategoryType]} categories={catWrap[1]} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MasterLayout >
};

export default MsHomepageA;