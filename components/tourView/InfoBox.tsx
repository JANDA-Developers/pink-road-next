import React from 'react';
// @ts-ignore
import Output from 'editorjs-react-renderer';
import { IDiv } from '@janda-com/front/dist/types/interface';

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
