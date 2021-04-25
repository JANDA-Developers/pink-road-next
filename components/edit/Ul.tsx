import React from "react";
import { whenDelete } from "../../utils/eventValueExtracter";

export interface IEditableUlProp {
    id: string;
    data: string[];
    contentEditable?: any;
    addArray: (value: any) => void;
    editArray: (index: number, value: any) => void;
    removeArray: (index: number) => void;
    editMode?: boolean;
    ulProp?: React.LiHTMLAttributes<HTMLUListElement>;
    liProp?: React.LiHTMLAttributes<HTMLLIElement>;
}

export const Ul: React.FC<IEditableUlProp> = ({
    liProp,
    ulProp,
    editMode,
    addArray,
    editArray,
    data,
    contentEditable,
    removeArray,
    id,
}) => {
    return (
        <ul data-edit={editMode ? "editUl" : undefined} {...ulProp}>
            {data.map((value, index) => (
                <li
                    onKeyDown={whenDelete((e) => {
                        if (e.currentTarget.innerHTML === "")
                            if (confirm("라인을 삭제 하시겠습니까?"))
                                removeArray(index);
                    })}
                    onBlur={(e) => {
                        editArray(index, e.currentTarget.innerHTML);
                    }}
                    contentEditable={contentEditable}
                    key={id + index}
                    dangerouslySetInnerHTML={{ __html: value }}
                    {...liProp}
                />
            ))}
            {editMode && (
                <button
                    className="btn"
                    onClick={() => {
                        addArray("");
                    }}
                >
                    라인추가
                </button>
            )}
        </ul>
    );
};
