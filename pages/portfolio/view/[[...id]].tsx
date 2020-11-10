import { useQuery } from '@apollo/client';
import React from 'react';
import EditorRendererProvider from 'react-editorjs-renderer';

interface IProp { }

export const PorfolioDetail: React.FC<IProp> = () => {
    return <div>
        <h3>제목임시로 만들어둠</h3>
        <span>서브타이틀 임시로 만들어둠</span>
        <img src="" alt="썸내일 임시" />
        <EditorRendererProvider data={data} />
    </div>
};

export const PorfolioDetailWrap: React.FC<IProp> = () => {

    return <PorfolioDetail />
}

export default PorfolioDetailWrap;