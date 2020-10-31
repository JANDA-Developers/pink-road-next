import React from 'react';

export type TPhotoLi = {
    id: string;
    category: string;
    title: string;
    subTitle: string;
    [key: string]: any;
}

interface IProp extends TPhotoLi {
    onClickImg: () => void;
}

export const PhotoLi: React.FC<IProp> = ({ category, title, subTitle, onClickImg }) => {
    return <li className="list_in">
        <div className="img" onClick={onClickImg} style={{
            backgroundImage: `url(/img/keyword_img4.jpg)`
        }}></div>
        <div className="box">
            <div className="category"><span>{category}</span></div>
            <div className="title">{title}</div>
            <div className="subtitle">
                {subTitle}
            </div>
        </div>
    </li >;
};
