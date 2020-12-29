import Link from 'next/link';
import React, { useEffect } from 'react';
import { useSystemNotiHide, useSystemNotiList, useSystemNotiRead } from '../../hook/useSystemNoti';
import { MypageLayout } from '../../layout/MypageLayout';
import { groupDateArray } from '../../utils/group';

interface IProp { }

export const ProfilePage: React.FC<IProp> = () => {


    return <MypageLayout>
        <div className="in profilepage_box">
            <h4>프로필관리</h4>
            <div className="mypage_page">
                <div className="box2">
                    <div className="box_left">
                        <div className="title">
                            <h5>기본정보</h5>
                        </div>
                    </div>
                    <div className="box_right">
                        <ul>
                            <li>
                                <div className="title">프로필 공개 여부</div><div className="txt">
                                    <div className="input_relative">
                                        <div className="switch">
                                            <input className="tgl tgl-skewed" id="cb3" type="checkbox" />
                                            <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor="cb3" />
                                        </div>
                                        <p className="infotxt_gray ml10">원하지 않으면 잠깐 노출을 꺼둬도 괜찮아요.</p>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="title">프로필 배경이미지</div>
                                <div className="txt">
                                    <div className="input_relative">
                                        <span className="w80 upload_out_box"></span><button type="button" className="btn btn_mini">업로드</button>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="title">채널톡 연결</div>
                                <div className="txt">
                                    <div className="input_relative">
                                        <input type="text" className="form-control w100" placeholder="http://" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="title">키워드</div>
                                <div className="txt">
                                    <div className="input_relative">
                                        <input type="text" className="form-control w100" placeholder="" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="title">총 가이드 수</div>
                                <div className="txt">
                                    <div className="input_relative">
                                        <input type="text" className="form-control w100" placeholder="숫자만 입력해주세요." />
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="title">총 가이드 인원</div>
                                <div className="txt">
                                    <div className="input_relative">
                                        <input type="text" className="form-control w100" placeholder="숫자만 입력해주세요." />
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="title">소개글</div>
                                <div className="txt">
                                    <div className="input_relative">
                                        <textarea></textarea>
                                    </div>
                                </div>
                            </li>

                        </ul>




                    </div>

                </div>
                <div className="fin">
                    <div className="float_left">
                        <Link href="/mypage/profile"><a className="btn">나의 프로필 바로가기</a></Link>
                    </div>
                    <div className="float_right">
                        <button type="submit" className="btn medium">저장하기</button>
                    </div>
                </div>
            </div>
        </div>
    </MypageLayout >
};

export default ProfilePage;