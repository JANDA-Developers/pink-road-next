import React, { useEffect, useRef, useState } from 'react';
import { EditorConfig } from '@editorjs/editorjs';
import EditorJs from 'react-editor-js';
import { EditorJsProps } from 'react-editor-js/dist/EditorJs';
import RER from "react-editorjs-renderer"
interface IProp extends EditorConfig {
}

export const Editor: React.FC<IProp> = (props) => {
    const [editorTools, setTools] = useState<any>(undefined);

    useEffect(() => {
        const fetch = async () => {
            const editorTools = (await import('./tools.js'))
            setTools(editorTools);
        }

        fetch()
    }, [])


    if (!editorTools) {
        return <RER data={props.data} />
    }

    return <EditorJs {...props} tools={editorTools} />;
};

export default Editor;