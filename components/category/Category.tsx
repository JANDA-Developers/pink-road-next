import { useMutation } from '@apollo/client';
import { PCATEGORY_CREATAE, PCATEGORY_DELETE } from 'apollo/mutations';
import { usePCategoryCreate } from 'hook/usePCategoryCreate';
import { usePcategory } from 'hook/usePcatList';
import React, { useState } from 'react';
import { pcategoryCreate, pcategoryCreateVariables, pcategoryDelete, pcategoryDeleteVariables } from 'types/api';

interface IProp {
}

export const PCategoryAdd: React.FC<IProp> = () => {
    const [newCat, setNewCat] = useState("");
    const { catCreate } = usePCategoryCreate()

    const handleAddCategory = () => {
        catCreate(newCat);
    }


    return <div>
        <div className="inputText w100">카테고리 추가</div>
        <input onChange={(e) => {
            const v = e.currentTarget.value;
            setNewCat(v);
        }} value={newCat} />
        <div onClick={handleAddCategory}>추가</div>
    </div>;
};
