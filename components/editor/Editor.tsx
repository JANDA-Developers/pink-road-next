import React from 'react';
import { IEditorProps } from "./EditorWrite";
import dynamic from 'next/dynamic';
const EditorWrite = dynamic(() => import("./EditorWrite"), { ssr: false });
const FroalaEditorView = dynamic(() => import('react-froala-wysiwyg/FroalaEditorView'), { ssr: false });
interface IProp extends IEditorProps {
    readOnly?: boolean;
}

export const Editor: React.FC<IProp> = ({ model, readOnly, ...props }) => {
    if (readOnly) {
        if (typeof window === undefined) return <div dangerouslySetInnerHTML={{ __html: model }} />
        return <FroalaEditorView model={model} />;
    };

    return <EditorWrite model={model} {...props} />;
};

export default Editor;