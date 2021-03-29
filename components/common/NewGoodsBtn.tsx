import React, { useContext } from 'react';
import { AppContext } from 'pages/_app';

interface IProp {
    allowToUser: boolean;
    onSubmit: () => void;
    editMode: boolean;
}

export const NewGoodsBtn: React.FC<IProp> = ({ onSubmit: handleSubmit, editMode, allowToUser }) => {
    const { isManager } = useContext(AppContext)
    if (!isManager && !allowToUser) return null;
    return <div id="registering_link" ><i className="flaticon-add"></i>상품등록</div>
};
