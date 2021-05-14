import React from "react";
import { IUsePageEdit } from "../../hook/usePageEdit";
import { EditBtn } from "./EditBtn";

interface IProp {
    pageTools: IUsePageEdit<any>;
}

export const PageEditor: React.FC<IProp> = ({ pageTools }) => {
    const { editMode, reset, submitEdit, setEditMode } = pageTools;

    const submit = () => {
        if (editMode) {
            if (confirm("변경내용을 저장 하시겠습니까?")) {
                submitEdit();
            } else {
            }
            setEditMode(false);
        } else {
            setEditMode(true);
        }
    };

    return <EditBtn onSubmit={submit} editMode={editMode} />;
};

const hiddenStyle: React.CSSProperties = {
    opacity: 0,
    position: "absolute",
    width: "1px",
    height: "1px",
};
