import { MasterLayout } from 'layout/MasterLayout';
import { Paginater } from 'components/common/Paginator';
import CalendarIcon from 'components/common/icon/CalendarIcon';
import React from 'react';
import Link from "next/link";
// import ReactTooltip from 'react-tooltip';
import { ALLOW_ADMINS } from '../../../types/const';
import { auth } from '../../../utils/with';

interface IProp { }

export const MsGoodsct: React.FC<IProp> = () => {
    return <MasterLayout>
        <div>
            <div className="in ">
                <h4>상품관리</h4>
                <div className="in_content">
                    <div className="tab-nav">
                        <ul>
                            <li><Link href="/master/goods"><a>상품관리</a></Link></li>
                            <li className="on"><Link href="/master/goods/goods1-2"><a>카테고리설정</a></Link></li>
                        </ul>
                    </div>
                    <div className="con goods2">
                        <div className="table">
                            <div className="body-hang">
                                <div className="option-A">Tour</div>
                                <div className="option-C">
                                    <div className="switch">
                                        <input className="tgl tgl-skewed" id="cb3" type="checkbox" />
                                        <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor="cb3"></label>
                                    </div>
                                </div>
                                <div className="option-B">
                                    <ul>
                                        <li>
                                            <i className="number">1</i><input type="text" placeholder="카테고리를 입력해주세요." />
                                            <span className="btn_list">
                                                <button className="btn_mini flaticon-substract"></button>
                                            </span>
                                        </li>
                                        <li>
                                            <i className="number">2</i><input type="text" placeholder="카테고리를 입력해주세요." />
                                            <span className="btn_list">
                                                <button className="btn_mini flaticon-substract"></button>
                                            </span>
                                        </li>
                                        <li>
                                            <i className="number">3</i><input type="text" placeholder="카테고리를 입력해주세요." />
                                            <span className="btn_list">
                                                <button className="btn_mini flaticon-substract"></button>
                                                <button className="btn_mini flaticon-add"></button>
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="body-hang">
                                <div className="option-A">Experience</div>
                                <div className="option-C">
                                    <div className="switch">
                                        <input className="tgl tgl-skewed" id="cb3" type="checkbox" />
                                        <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor="cb3"></label>
                                    </div>
                                </div>
                                <div className="option-B">
                                    <ul>
                                        <li>
                                            <i className="number">1</i><input type="text" placeholder="카테고리를 입력해주세요." />
                                            <span className="btn_list">
                                                <button className="btn_mini flaticon-substract"></button>
                                            </span>
                                        </li>
                                        <li>
                                            <i className="number">1</i><input type="text" placeholder="카테고리를 입력해주세요." />
                                            <span className="btn_list">
                                                <button className="btn_mini flaticon-substract"></button>
                                                <button className="btn_mini flaticon-add"></button>
                                            </span>
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
        </div>
    </MasterLayout >
};

export default auth(ALLOW_ADMINS)(MsGoodsct);