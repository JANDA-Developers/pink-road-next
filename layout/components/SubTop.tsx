import Link from 'next/link';
import React, { useContext } from 'react';
import { Bg } from '../../components/Img/img';
import { usePageEdit } from '../../hook/usePageEdit';
import { EditContext } from '../../pages/_app';

interface IProp {
}

//subTop_desc
//subTop_title
//subTop_img
export const SubTopNav: React.FC<IProp> = ({ children }) => {
    const { edit, imgKit } = useContext(EditContext);
    return <div className="top_visual">
        <Bg
            className="sub_header sub_bg"
            {...imgKit("subTop_img")}
        >
            <div className="w1200">
                <h2 {...edit("subTop_title")} className="title" />
                <p {...edit("subTop_desc")} className="text" />
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