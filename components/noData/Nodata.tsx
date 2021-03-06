import React from 'react';

interface IProp {
    label?: string;
    show?: boolean;
}

export const Nodata: React.FC<IProp> = ({ show, label = "게시글이 없습니다." }) => {
    return show ? <li className="no_data">
        {/*게시글이 없을때*/}
        <i className="jandaicon-info3" />
        <span>{label}</span>
    </li> : null
};
