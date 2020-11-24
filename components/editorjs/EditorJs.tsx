import React, { useEffect, useRef, useState } from 'react';
import { EditorConfig, OutputData } from '@editorjs/editorjs';
import RER from "react-editorjs-renderer"
import dynamic from 'next/dynamic';
import { ISet } from 'types/interface.js';
import { EMPTY_EDITOR } from 'types/const';

const ReactEditorJs = dynamic(() => import('react-editor-js'), { ssr: false });
interface IProp extends EditorConfig {
    setData?: ISet<OutputData>
}

export const EditorJs: React.FC<IProp> = ({ setData, ...props }) => {
    const [tools, setTools] = useState<any>(undefined);

    useEffect(() => {
        const fetch = async () => {
            const { default: editorTools } = await import('./tools.js');
            setTools(editorTools);
        }
        fetch()
    }, [])


    if (!tools) {
        return <div />
    }
    if (typeof window == "undefined")
        return <RER data={props.data} />

    return <ReactEditorJs {...props} onChange={(_, data) => {
        setData?.(data || EMPTY_EDITOR)
    }} tools={tools} />;
};

export default EditorJs;