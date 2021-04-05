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
export const NewProfileBtn: React.FC<IProp> = ({ }) => {
    const { isManager, isParterB, myProfile } = useContext(AppContext)
    if (isManager) return null;
    if (!isParterB) return null;
    const { _id } = myProfile;

    return <Link href={`/tour/itsguid/${_id}`}>
        <a>
            <div id="float_profile_link" ><i className="flaticon-add"></i>프로필수정</div>
        </a>
    </Link>
};
