import React from 'react';
import { IDiv } from '../../../types/interface';

interface IProp extends IDiv {
    nickName: string;
}

export const GuideBadge: React.FC<IProp> = ({ nickName, ...props }) => {
    return <div className="guideBadge" {...props}><i className="guideBadge__mark">G</i><span className="guideBadge__name">{nickName || "닉네임 없음"}</span></div>
        ;
};
