import dayjs from 'dayjs';
import Link from 'next/link';
import { userInfo } from 'os';
import React, { useContext, useRef } from 'react';
import { useUpload } from '../hook/useUpload';
import { useUserUpdate } from '../hook/useUser';
import { AppContext } from '../pages/_app';
import { Ffile, ProductStatus } from '../types/api';
import { BG, BGprofile } from '../types/const';
import { omits } from '../utils/omit';
import { getItemCount, Storage } from '../utils/Storage';

interface IProp { }

export const MypageLayout: React.FC<IProp> = ({ children }) => {
    const [updateuser] = useUserUpdate()
    const { signleUpload } = useUpload();
    const { isSeller, isParterB, isParterNonB, myProfile } = useContext(AppContext);
    const hiddenFileInput = useRef<HTMLInputElement>(null);

    const changeProfile = (file: Ffile) => {
        updateuser({
            variables: {
                _id: myProfile!._id,
                params: {
                    profileImg: omits(file)
                }
            }
        })
    }

    const handleChangeProfile = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const fileUploaded = event.target.files;
        const onUpload = (_: string, data: Ffile) => {
            changeProfile(data)
        }
        signleUpload(fileUploaded, onUpload);
    };


    return <div>
        <div className="top_visual">
            <div
                className="sub_header sub_bg"
                style={{ backgroundImage: `url(/its/su_visual_bg.jpg)` }}
            >
                <div className="w1200">
                    <h2 className="title">My page</h2>
                    <p className="text">지금 여행을 떠나세요~!~~!!!!!</p>
                </div>
            </div>
            <div className="header_nav">
                <ul>
                    <li className="home">
                        <Link href="/" ><a /></Link>
                    </li>
                    <li className="homedeps1">My page</li>
                    <li className="homedeps2">
                        <Link href="/mypage">
                            <a >회원정보</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="w100">
            <ul className="subtop_nav">
                {isSeller || <li className="on"><Link href="/mypage"><a >회원정보</a></Link></li>}{/* 가이드 -*/}
                <li><Link href="/mypage/notification"><a >알림</a></Link></li>{/* 가이드 -*/}
                {isSeller || <li><Link href="/mypage/profilepage"><a >프로필관리</a></Link></li>}{/* 가이드 -*/}
                <li><Link href="/mypage/my-board"><a >나의 게시글</a></Link></li>{/* 가이드 -*/}
                {isSeller && <li><Link href="/mypage/reservation"><a >예약관리</a></Link></li>}{/* 가이드 -*/}
                {isParterB && <li><Link href="/mypage/goods"><a >상품관리</a></Link></li>}{/* 가이드 -*/}
                {isSeller && <li><Link href="/mypage/settlement"><a >매출/정산관리</a></Link></li>}{/* 가이드 -*/}
            </ul>
            <div className="w1200">

                <div className="lnb">
                    <div className="profile_box">
                        <div className="welcome">
                            <span style={BGprofile(myProfile?.profileImg)} onClick={hiddenFileInput.current?.click} className="img"><i className="jandaicon-setting"></i>프로필이미지</span>
                            <input onChange={handleChangeProfile} ref={hiddenFileInput} hidden type="file" />
                            <span className="name1">
                                {isParterNonB && <i className="ct_guide">Partner</i>}{/* 개인파트너 -*/}
                                {isParterB && <i className="ct_partner">Partner</i>}{/* 기업파트너 -*/}
                                {isSeller && <span><strong>새부산관광</strong>님 어서오세요 :)</span>}{/*기업파트너/개인파트너*/}
                                {isSeller && <span className="point"><i>포인트</i><strong>10,000,000</strong>원</span>}{/*기업파트너/개인파트너*/}
                                {isSeller || <span className="name2"><i className="ct_family">Family</i><strong>{myProfile?.name}</strong>님 어서오세요 :)</span>}{/*개인*/}
                                {isSeller || <span className="time"><i>최근접속시간</i> {dayjs(Storage?.getLocalObj<Date>("lastLogin")).format("YYYY.MM.DD hh:mm")} </span>}{/*개인*/}
                                <ul>
                                    <li><a href="/">알림<i>99+</i></a></li>{/* 개인/기업파트너/개인파트너 -*/}
                                    {isSeller || <li><a href="/">구매<i>0</i></a></li>}{/* 개인 -*/}
                                    {isSeller || <li><a href="/">장바구니<i>{getItemCount()}</i></a></li>}{/* 개인 -*/}
                                    {isSeller && <li><a href="/">예약<i>0</i></a></li>}{/* 기업파트너/개인파트너 -*/}
                                    {isSeller && <li><a href="/">정산<i>0</i></a></li>}{/* 기업파트너/개인파트너 -*/}
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </div>
    </div>
};

// 쌍방향 연결포기
// Booking === Product
