import { Meta } from 'components/common/meta/Meta';
import SubTopNav from 'layout/components/SubTop';
import pageInfoDefault from 'info/guideMain.json';
import Link from 'next/link';
import React, { useContext } from 'react';
import { GoodsListAPI } from '../../components/common/GoodsListAPI';
import { EditContext } from '../_app';
import { IEditPage } from '../../utils/with';
import { useProductList } from 'hook/useProduct';
import { useRouter } from 'next/router';

interface IProp { }
export const GuideMain: React.FC<IProp> = () => {
    // const { items } = useProductList({ initialPageIndex: 1, initialViewCount: 8 });
    // const { imgEdit, edit, bg } = useContext<IEditPage<typeof pageInfoDefault>>(EditContext as any);
    // const router = useRouter()
    return <div >
        <Meta />
        <SubTopNav title="temp" desc="temp" >
            <li className="homedeps1">
                <Link href="/tour/main?exp=true">
                    <a>It's가이드</a>
                </Link>
            </li>
        </SubTopNav>
        {/* <div className="goods_box">
            <div className="w1200">
                <div id="sub_tap_nav" className="subtop_nav betatest">
                    <ul>
                        <li className="on"><a href="/tour/list">전체</a></li>
                        <li><a href="/tour/list">문화·예술여행</a></li>

                        <li className="on">
                            <Link href="/tour/list">
                                <a >전체</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tour/list">
                                <a >문화·예술여행</a>
                            </Link>
                        </li>
                        <li><a href="/tour/list">교육·답사여행</a></li>
                        <li><a href="/tour/list">역사여행</a></li>
                        <li><a href="/tour/list">팸투어</a></li>
                    </ul>
                </div>
            </div>
        </div> */}


        <div className="guide_box">
            <div className="w100">
                <div className="guide_top_bn w100" style={{ backgroundImage: 'url(/its/main_bg_001.jpg)' }}>
                    <div className="w1200">
                        <div className="txt">
                            <h3>
                                당신의 비즈니스를 서포트하는 전문가이드<br />
                                당신의 여행을 서포트하는 안심가이드
                            </h3>
                            <span>
                                마음편한 가이드를 찾으세요. 어려워하지마세요.<br />
                                잇츠가이드가 해결 해줄게요.
                            </span>
                            <ul className="btn_list">
                                <li><a href="../sub/guide_list.html">여행가이드</a></li>
                                <li><a href="../sub/guide_list.html">비지니스통역가이드</a></li>
                                <li><a href="../sub/guide_list.html">의료관광가이드</a></li>
                                <li><a href="../sub/guide_list.html">전체보기</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="guide_content w1200">
                    <div className="con01">
                        <div className="top_txt">
                            <h2>등록된 가이드</h2>
                            <strong>1244</strong>
                        </div>
                        <ul className="pr_list">
                            <li style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</li>
                            <li style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</li>
                            <li style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</li>
                            <li style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</li>
                            <li style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</li>
                            <li style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</li>
                            <li style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</li>
                            <li className="plus"><a href="/">+</a></li>
                        </ul>
                    </div>
                    <div className="con02">
                        <div className="deal_list">
                            <div className="alignment">
                                <div className="left_div"><h2>#오늘어디가지?</h2></div>
                                <div className="right_div">
                                    <span className="goto_page"><a href="/">바로가기<i className="flaticon-menu-1"></i></a></span>
                                </div>
                            </div>
                            <GoodsListAPI />
                        </div>
                        <div className="deal_list">
                            <div className="alignment">
                                <div className="left_div"><h2>DM추천</h2></div>
                                <div className="right_div">
                                    <span className="goto_page"><a href="../sub/tour_list.html">바로가기<i className="flaticon-menu-1"></i></a></span>
                                </div>
                            </div>
                            <GoodsListAPI />
                        </div>
                        <div className="deal_list">
                            <div className="alignment">
                                <div className="left_div"><h2>외국인가이드</h2></div>
                                <div className="right_div">
                                    <span className="goto_page"><a href="/">바로가기<i className="flaticon-menu-1"></i></a></span>
                                </div>
                            </div>
                            <GoodsListAPI />
                        </div>
                    </div>

                </div>

                <div className="main_con_box5">
                    <div className="w1200">
                        <div className="txt">
                            <div className="alignment">
                                <div className="left_div">
                                    <h2>
                                        GUIDE<span>볼수록 매력있는 가이드만 모았어요!</span>
                                    </h2>
                                </div>
                                <div className="right_div">
                                    <span className="goto_page"><a href="/">바로가기<i className="flaticon-menu-1"></i></a></span>
                                </div>
                            </div>
                        </div>
                        <div className="man_list">
                            <a className="left_mov"><i className="jandaicon-arr2-left"></i></a>
                            <div className="man_box">
                                <ul>
                                    <li className="on">
                                        <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</span>
                                        <div className="name"><i>G</i>김행자</div>
                                    </li>
                                    <li>
                                        <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</span>
                                        <div className="name"><i>G</i>김행자</div>
                                    </li>
                                    <li>
                                        <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</span>
                                        <div className="name"><i>G</i>김행자</div>
                                    </li>
                                    <li>
                                        <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</span>
                                        <div className="name"><i>G</i>김행자</div>
                                    </li>
                                    <li>
                                        <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</span>
                                        <div className="name"><i>G</i>김행자</div>
                                    </li>

                                </ul>
                            </div>
                            <a className="right_mov"><i className="jandaicon-arr2-right"></i></a>
                        </div>
                        <div className="goods_list">
                            <GoodsListAPI />
                        </div>

                    </div>

                </div>


                <div className="main_con_box7">
                    <div className="box01">
                        <div className="w1200">
                            <span className="sidetxt">recruiting new guide</span>
                            <h2>잇츠가이드 플랫폼에서<br /><strong>더 많은 <i>활동영역</i>을 넓혀보시기 바랍니다.</strong></h2>
                            <div className="link"><a href="/member/join">가이드지원<i></i></a></div>

                        </div>
                        <div className="ovj">IT'S GUIDE</div>
                    </div>
                </div>


            </div>
        </div>
    </div >;
};

export default GuideMain;