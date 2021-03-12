import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { ListInitOptions } from '../../hook/useListQuery';
import { openListFilter } from '../../hook/useProduct';
import { usePublicSellerList } from '../../hook/useUser';
import { tourSearchLink } from '../../pages/search';
import { sellerListPublic_SellerListPublic_data, _SellerFilter, _SellerSort, _UserSort } from '../../types/api';
import { BG, BGprofile } from '../../types/const';
import { GoodsListAPI } from './GoodsListAPI';

interface IProp {
    mode?: "wide" | "short"
    listQueryFilter?: Partial<ListInitOptions<_SellerFilter, _SellerSort>>;
    selectedSeller?: sellerListPublic_SellerListPublic_data;
    setSelectedSeller?: React.Dispatch<React.SetStateAction<sellerListPublic_SellerListPublic_data | undefined>>
}

export const ProfileListAPI: React.FC<IProp> = ({ selectedSeller, setSelectedSeller, listQueryFilter, mode = "wide" }) => {
    const router = useRouter();
    const guidesRef = useRef<HTMLDivElement>(null)
    const { items } = usePublicSellerList({
        ...listQueryFilter,
        initialSort: [_SellerSort.profileImg_desc]
    });

    const handleSelectUser = (user: sellerListPublic_SellerListPublic_data) => () => {
        setSelectedSeller?.(user);
    }


    const handleScrollArrowClick = (plus: boolean) => () => {
        if (!guidesRef?.current) return;
        const guidesLeft = guidesRef.current.scrollLeft;
        let nextLeft = guidesLeft + (plus ? 500 : -500);
        guidesRef.current.scroll({ left: nextLeft, behavior: "smooth" })
    }

    useEffect(() => {
        if (items?.[0] && !selectedSeller) {
            setSelectedSeller?.(items[0])
        }
    }, [items.length])

    const isShort = mode === "short"

    const toGuidePage = (code: string) => {
        router.push("/itsguid/" + code)
    }

    if (isShort) return <ul className="pr_list">
        {items.map(item =>
            <li className="pr_list__li" onClick={() => {
                toGuidePage(item._id)
            }} key={item._id} style={BGprofile(item.profileImg)} />
        )}
        <li className="plus"><a href="/guide-search">+</a></li>
    </ul>

    return <div className="man_list">
        <a onClick={handleScrollArrowClick(false)} className="left_mov"><i className="jandaicon-arr2-left"></i></a>
        <div ref={guidesRef} className="man_box">
            <ul>
                {items.map((item, i) =>
                    <li key={item._id + "guid"} className={selectedSeller?._id === item._id ? "on" : ""}>
                        <span className="photo" onClick={handleSelectUser(item)} style={BG(item.profileImg?.uri || "/img/profile_default160.gif")} />
                        <div className="home" onClick={() => {
                            toGuidePage(item._id)
                        }}></div>
                        <div className="name" onClick={handleSelectUser(item)}><i>G</i>{item.nickName}</div>

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
                        ...openListFilter,
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
