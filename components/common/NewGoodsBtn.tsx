import React, { useContext } from 'react';
import { AppContext } from 'pages/_app';
import Link from 'next/link';

interface IProp {

}

export const NewGoodsBtn: React.FC<IProp> = ({ }) => {
    const { isManager, isParterB } = useContext(AppContext)
    if (!isParterB) return null;
    return <Link href="/tour/write">
        <a>
            <div id="registering_link" ><i className="flaticon-add"></i>상품등록</div>
        </a>
    </Link>
};
