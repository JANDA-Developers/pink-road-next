import React, { useContext } from 'react';
import { AppContext } from 'pages/_app';
import { TPageKeys } from 'types/interface';

interface IProp {
    data: any;
    path: TPageKeys;
}

export const HiddenSubmitBtn: React.FC<IProp> = ({ data, path }) => {
    const { submitEdit } = useContext(AppContext)
    const submit = () => {
        alert("submmited");
        if (submitEdit)
            submitEdit(path, data)
    }
    return <div onClick={submit} id="PageSubmitBtn" style={{
        opacity: 0,
        position: "absolute",
        width: "1px",
        height: "1px"
    }} hidden />;
};
