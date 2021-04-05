import React from 'react';
import { CloseIcon } from '../common/icon/CloseIcon';

interface IProp extends React.InputHTMLAttributes<any> {
    wrapProp: any;
    id: string;
    defualtName: string
    onClickDelete: () => void;
}

export const FileInput: React.FC<IProp> = ({ wrapProp, onClickDelete, id, defualtName = "파일없음", ...props }) => {
    return <span {...wrapProp}>
        <label htmlFor={id}>파일업로드</label>
        <span>{defualtName}</span>
        <CloseIcon style={{ width: "10px", height: "10px" }} onClick={onClickDelete} />
        <input type="file" name={id} id={id} {...props} />
    </span>;
};
