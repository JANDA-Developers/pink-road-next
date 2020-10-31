import React from 'react';
import { IProduct, ILi } from '../../types/interface';

export interface IProductComponentProp extends Partial<IProduct>, ILi {
}

export const Product: React.FC<IProductComponentProp> = ({ id, category, subTitle, title, keyWards, ...props }) => {

    const image = "as";
    return <li className="list_in" {...props}>
        <div className="img" style={image ? {
            backgroundImage: `url(${image})`
        } : undefined}>상품이미지</div>
        <div className="box">
            <div className="category"><span>{"category?.label"}</span></div>
            <div className="title">{title}</div>
            <div className="bottom_txt">
                <div className="subtitle">
                    {subTitle}
                </div>
                {keyWards?.map((tag, i) =>
                    <span key={`${id}tag${i}`}>{tag}</span>
                )}
            </div>
        </div>
    </li >;
};
