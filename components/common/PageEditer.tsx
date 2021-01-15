import React from 'react';
import { IUsePageEdit } from '../../hook/usePageEdit';
import { EditBtn } from './EditBtn';
import { HiddenSubmitBtn } from './HiddenSubmitBtn';

interface IProp {
    pageTools: IUsePageEdit<any>;
}

export const PageEditor: React.FC<IProp> = ({ pageTools }) => {
    return <div >
        <HiddenSubmitBtn pageTools={pageTools} />
        <EditBtn pageTools={pageTools} />
    </div>;
};
