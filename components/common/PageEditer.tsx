import React from 'react';
import { IUsePageEdit } from '../../hook/usePageEdit';
import { EditBtn } from './EditBtn';

interface IProp {
    allowToUser?: boolean;
    pageTools: IUsePageEdit<any>;
}

export const PageEditor: React.FC<IProp> = ({ pageTools, allowToUser }) => {
    const { editMode, reset, submitEdit, setEditMode } = pageTools;

    const submit = () => {
        if (editMode) {
            if (confirm("변경내용을 저장 하시겠습니까?")) {
                submitEdit()
            } else {
            }
            setEditMode(false)
        } else {
            setEditMode(true)
        }
    }

    return <div >
        <EditBtn allowToUser={allowToUser} onSubmit={submit} editMode={editMode} />
    </div>;
};


const hiddenStyle: React.CSSProperties = {
    opacity: 0,
    position: "absolute",
    width: "1px",
    height: "1px"
}
