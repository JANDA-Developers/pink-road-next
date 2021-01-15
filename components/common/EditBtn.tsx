import React, { useContext } from 'react';
import { AppContext } from 'pages/_app';

interface IProp {
    onSubmit: () => void;
}

export const EditBtn: React.FC<IProp> = ({ onSubmit: handleSubmit }) => {
    const { isManager } = useContext(AppContext)
    if (!isManager) return null;
    return <div onClick={handleSubmit} id="setting_link"><i><img src="/img/svg/setting_icon.svg" alt="icon" /></i>{editMode ? "편집모드" : "편집종료"}</div>
};
