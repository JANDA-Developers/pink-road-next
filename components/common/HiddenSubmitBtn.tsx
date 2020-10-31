import React, { useContext } from 'react';
import { AppContext } from 'pages/_app';

interface IProp {
    data: any;
    path: string;
}

export const HiddenSubmitBtn: React.FC<IProp> = ({ data, path }) => {
    const { submitEdit } = useContext(AppContext)
    const submit = () => {
        if (submitEdit)
            submitEdit(path, data)
    }
    return <div id="PageSubmitBtn" style={{
        opacity: 0,
        position: "absolute",
        width: "1px",
        height: "1px"
    }} hidden />;
};
