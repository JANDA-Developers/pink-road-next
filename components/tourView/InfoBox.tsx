import React from 'react';
import { IDiv } from 'types/interface';

interface IProp extends IDiv {
    title: string
    content?: any
}

export const InfoBox: React.FC<IProp> = ({ title, content, children, ...props }) => {
    return <div {...props}>
        <h4>{title}</h4>
        {/* <Output data={content} /> */}
        {children}
    </div>;
};

export default InfoBox;
