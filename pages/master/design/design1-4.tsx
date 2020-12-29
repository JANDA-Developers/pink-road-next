import { MasterLayout } from 'layout/MasterLayout';
import CalendarIcon from 'components/common/icon/CalendarIcon';
import React from 'react';
import Link from "next/link";
import { auth } from 'utils/with';
import { ADMINS } from 'types/const';

interface IProp { }

const popupOpen = () => {
    $('#Popup01').css({
        'display': 'flex'
    });
}
const popupClose = () => {
    $('#Popup01').css({
        'display': 'none'
    });
}
export const MsDesignC: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in ">
            <h4>디자인 설정</h4>
            <div className="in_content">
                <div className="tab-nav">
                    <ul>
                        <li><Link href="/master/design"><a>기본설정</a></Link></li>
                        <li><Link href="/master/design/design1-2"><a>배너관리</a></Link></li>
                        <li><Link href="/master/design/design1-3"><a>팝업관리</a></Link></li>
                        <li className="on"><Link href="/master/design/design1-4"><a>노출상품관리</a></Link></li>
                    </ul>
                </div>
                <div className="con design goodslist_setting">
                    <div className="fin">
                        <div className="float_left">
                        </div>
                        <div className="float_right">
                            <button type="submit" className="btn medium">저장하기</button>
                        </div>
                    </div>


                    {/* 메인화면 상품진열 */}
                    <div className="block_box">
                        <div className="head">
                            <h5>메인화면 상품진열</h5>
                            <div className="float_right">
                                <div className="switch">
                                    <input className="tgl tgl-skewed" id="cb3" type="checkbox" />
                                    <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor="cb3"></label>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="body-list">
                                <ul>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="add"><button><i className="flaticon-add"></i>추가</button></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Tour 문화·예술여행 */}
                    <div className="block_box">
                        <div className="head">
                            <h5>Tour-상품진열1</h5>
                            <div className="float_right">
                                <div className="switch">
                                    <input className="tgl tgl-skewed" id="cb3" type="checkbox" />
                                    <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor="cb3"></label>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="body-title">
                                <div className="th">타이틀</div>
                                <div className="td"><input type="text" className="w50" placeholder="문화·예술여행" /></div>
                            </div>
                            <div className="body-list">
                                <ul>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="add"><button><i className="flaticon-add"></i>추가</button></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Tour 교육·답사여행 */}
                    <div className="block_box">
                        <div className="head">
                            <h5>Tour-상품진열2</h5>
                            <div className="float_right">
                                <div className="switch">
                                    <input className="tgl tgl-skewed" id="cb3" type="checkbox" />
                                    <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor="cb3"></label>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="body-title">
                                <div className="th">타이틀</div>
                                <div className="td"><input type="text" className="w50" placeholder="교육·답사여행" /></div>
                            </div>
                            <div className="body-list">
                                <ul>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="add"><button><i className="flaticon-add"></i>추가</button></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    {/* Tour 역사여행 */}
                    <div className="block_box">
                        <div className="head">
                            <h5>Tour-상품진열3</h5>
                            <div className="float_right">
                                <div className="switch">
                                    <input className="tgl tgl-skewed" id="cb3" type="checkbox" />
                                    <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor="cb3"></label>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="body-title">
                                <div className="th">타이틀</div>
                                <div className="td"><input type="text" className="w50" placeholder="역사여행" /></div>
                            </div>
                            <div className="body-list">
                                <ul>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="add"><button><i className="flaticon-add"></i>추가</button></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    {/* Tour 팸투어 */}
                    <div className="block_box">
                        <div className="head">
                            <h5>Tour-상품진열4</h5>
                            <div className="float_right">
                                <div className="switch">
                                    <input className="tgl tgl-skewed" id="cb3" type="checkbox" />
                                    <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor="cb3"></label>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="body-title">
                                <div className="th">타이틀</div>
                                <div className="td"><input type="text" className="w50" placeholder="팸투어" /></div>
                            </div>
                            <div className="body-list">
                                <ul>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="add"><button><i className="flaticon-add"></i>추가</button></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    {/* Experience 원데이클래스 */}
                    <div className="block_box">
                        <div className="head">
                            <h5>Experience-상품진열1</h5>
                            <div className="float_right">
                                <div className="switch">
                                    <input className="tgl tgl-skewed" id="cb3" type="checkbox" />
                                    <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor="cb3"></label>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="body-title">
                                <div className="th">타이틀</div>
                                <div className="td"><input type="text" className="w50" placeholder="원데이클래스" /></div>
                            </div>
                            <div className="body-list">
                                <ul>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="add"><button><i className="flaticon-add"></i>추가</button></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Experience 체험학습 */}
                    <div className="block_box">
                        <div className="head">
                            <h5>Experience-상품진열2</h5>
                            <div className="float_right">
                                <div className="switch">
                                    <input className="tgl tgl-skewed" id="cb3" type="checkbox" />
                                    <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor="cb3"></label>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="body-title">
                                <div className="th">타이틀</div>
                                <div className="td"><input type="text" className="w50" placeholder="체험학습" /></div>
                            </div>
                            <div className="body-list">
                                <ul>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="add"><button><i className="flaticon-add"></i>추가</button></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    {/* Experience 한달살기 */}
                    <div className="block_box">
                        <div className="head">
                            <h5>Experience-상품진열3</h5>
                            <div className="float_right">
                                <div className="switch">
                                    <input className="tgl tgl-skewed" id="cb3" type="checkbox" />
                                    <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor="cb3"></label>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="body-title">
                                <div className="th">타이틀</div>
                                <div className="td"><input type="text" className="w50" placeholder="한달살기" /></div>
                            </div>
                            <div className="body-list">
                                <ul>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="add"><button><i className="flaticon-add"></i>추가</button></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    {/* Experience 두달살기 */}
                    <div className="block_box">
                        <div className="head">
                            <h5>Experience-상품진열4</h5>
                            <div className="float_right">
                                <div className="switch">
                                    <input className="tgl tgl-skewed" id="cb3" type="checkbox" />
                                    <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor="cb3"></label>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="body-title">
                                <div className="th">타이틀</div>
                                <div className="td"><input type="text" className="w50" placeholder="두달살기" /></div>
                            </div>
                            <div className="body-list">
                                <ul>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="img" style={{ backgroundImage: "url(/img/sample_01.gif)" }}></div>
                                        <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                        <div className="date">2020.03.13 ~ 2020.03.15</div>
                                    </li>
                                    <li onClick={popupOpen}>
                                        <div className="add"><button><i className="flaticon-add"></i>추가</button></div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="fin">
                        <div className="float_left">
                        </div>
                        <div className="float_right">
                            <button type="submit" className="btn medium">저장하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* popup-상세보기 */}
        <div id="Popup01" className="popup_bg">
            <div className="in_txt master_popup">
                <a className="close_icon" onClick={popupClose}>
                    <i className="flaticon-multiply"></i>
                </a>
                <div className="goodsall">
                    <h3>상품선택</h3>
                    <div className="goodsall__search search_top">
                        <div className="search_div">
                            <input className="w100" type="text" placeholder="검색할 상품명을 입력해주세요." />
                            <div className="svg_img">
                                <img src="/img/svg/search_icon.svg" alt="검색아이콘" />
                                <button />
                            </div>
                        </div>
                    </div>
                    <div className="goodsall__list">
                        <p>검색결과 <strong>22건</strong></p>
                        <ul>
                            <li>
                                <div className="goodsall__list__img">
                                    <img src="/img/sample_01.gif" alt="상품이미지" />
                                </div>
                                <div className="goodsall__list__text">
                                    <div className="title">떠나요~제떠나요~제떠나요~제떠나요~제떠나요~제주도~~~!!!~!~#@!#</div>
                                    <div className="date">2020.03.13 ~ 2020.03.15</div>
                                </div>
                            </li>
                            <li>
                                <div className="goodsall__list__img">
                                    <img src="/img/sample_01.gif" alt="상품이미지" />
                                </div>
                                <div className="goodsall__list__text">
                                    <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                    <div className="date">2020.03.13 ~ 2020.03.15</div>
                                </div>
                            </li>
                            <li>
                                <div className="goodsall__list__img">
                                    <img src="/img/sample_01.gif" alt="상품이미지" />
                                </div>
                                <div className="goodsall__list__text">
                                    <div className="title">떠나요~제주도~~~!!!~!~#@!#</div>
                                    <div className="date">2020.03.13 ~ 2020.03.15</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </MasterLayout >
};

export default auth(ADMINS)(MsDesignC);

