import React, { useEffect, useRef, useState } from 'react';
import { usePublicSellerList } from '../../hook/useUser';
import { sellerListPublic_SellerListPublic_data } from '../../types/api';
import { BG } from '../../types/const';
import { GoodsListAPI } from './GoodsListAPI';

interface IProp {
    selectedSeller?: sellerListPublic_SellerListPublic_data;
    setSelectedSeller: React.Dispatch<React.SetStateAction<sellerListPublic_SellerListPublic_data | undefined>>
}

export const ProfileListAPI: React.FC<IProp> = ({ selectedSeller, setSelectedSeller }) => {
    const guidesRef = useRef<HTMLDivElement>(null)
    const { items } = usePublicSellerList();

    const handleSelectUser = (user: sellerListPublic_SellerListPublic_data) => () => {
        setSelectedSeller(user);
    }


    const handleScrollArrowClick = (plus: boolean) => () => {
        if (!guidesRef?.current) return;
        const guidesLeft = guidesRef.current.scrollLeft;
        let nextLeft = guidesLeft + (plus ? 500 : -500);
        console.log("nextLeft");
        console.log(nextLeft);
        guidesRef.current.scroll({ left: nextLeft, behavior: "smooth" })
    }

    useEffect(() => {
        if (items?.[0] && !selectedSeller) {
            setSelectedSeller(items[0])
        }
    }, [items.length])

    return <div className="man_list">
        <a onClick={handleScrollArrowClick(false)} className="left_mov"><i className="jandaicon-arr2-left"></i></a>
        <div ref={guidesRef} className="man_box">
            <ul>
                {items.map((item, i) =>
                    <li key={item._id + "guid"} onClick={handleSelectUser(item)} className={selectedSeller?._id === item._id ? "on" : ""}>
                        <span className="photo" style={BG(item.profileImg?.uri || "/img/profile_default160.gif")} />
                        <div className="name"><i>G</i>{item.nickName}</div>
                    </li>
                )}
            </ul>
        </div>
        <a onClick={handleScrollArrowClick(true)} className="right_mov"><i className="jandaicon-arr2-right"></i></a>
    </div>;
};


export const ProfileListAPIwithGoods = () => {
    const [selectedSeller, setSelectedSeller] = useState<sellerListPublic_SellerListPublic_data>()

    return <div>
        <ProfileListAPI selectedSeller={selectedSeller} setSelectedSeller={setSelectedSeller} />
        <div className="goods_list">
            <GoodsListAPI options={{
                variables: {
                    filter: {
                        authorEmail_eq: selectedSeller?.email
                    },
                    pageInput: {
                        cntPerPage: 12,
                        page: 1
                    }
                }
            }} />
        </div>
    </div>
}