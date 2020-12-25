import dynamic from 'next/dynamic';
import React from 'react';

interface IProp { }

export const EditorLoading: React.FC<IProp> = () => {
    return <div>...에디터로딩</div>;
};

export const LoadEditor = () => dynamic(() => import("components/edit/CKE2"), { ssr: false, loading: () => <EditorLoading /> });
