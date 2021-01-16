import Link from 'next/link';
import React, { useContext } from 'react';
import { Bg } from '../../components/Img/img';
import { IUsePageEdit, usePageEdit } from '../../hook/usePageEdit';
import { z } from '../../pages/_app';

interface IProp {
    pageTools: IUsePageEdit;
    imgKey?: string;
    titleKey?: string;
    descKey?: string;
}

//subTop_desc
//subTop_title
//subTop_img
export const SubTopNav: React.FC<IProp> = ({ descKey = "subTop_desc", imgKey = "subTop_img", titleKey = "subTop_title", pageTools: { imgKit, edit }, children }) => {

    return <div className="top_visual">
        <Bg
            className="sub_header sub_bg"
            {...imgKit(imgKey)}
        >
            <div className="w1200">
                <h2 {...edit(titleKey)} className="title" />
                <p {...edit(descKey)} className="text" />
            </div>
        </Bg>
        <div className="header_nav">
            <ul>
                <li className="home">
                    <Link href="/">
                        <a />
                    </Link>
                </li>
                {children}
            </ul>
        </div>
    </div>;
};

export default SubTopNav;