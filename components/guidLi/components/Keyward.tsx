import React, { useContext } from 'react';
import { AppContext } from '../../../pages/_app';
import { IDiv } from '../../../types/interface';

interface IProp extends IDiv {
    keywardId: string;
}

export const Keyward: React.FC<IProp> = ({ keywardId, ...props }) => {
    const { categoriesMap } = useContext(AppContext);
    const catg = categoriesMap.GUIDE_KEYWARD.find(key => key._id === keywardId)
    return <div className="keyward" {...props} >{catg.label}</div>;
};
