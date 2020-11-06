import React, { useEffect, useState } from 'react';
import EditorJs from 'react-editor-js';
import { EditorJsProps } from 'react-editor-js/dist/EditorJs';

interface IProp extends EditorJS.EditorConfig {
}

export const Editor: React.FC<IProp> = (props) => {
    const [editorTools, setTools] = useState<any>(undefined);

    useEffect(() => {
        const fetch = async () => {
            const editorTools = (await import('components/editor/tools.js')).default;
            setTools(editorTools);
        }

        fetch()
    }, [])


    if (!editorTools) {
        return <div />
    }

    return <EditorJs {...props} tools={editorTools} />;
};

export default Editor;