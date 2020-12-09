import { MasterLayout } from 'layout/MasterLayout';
import { Paginater } from 'components/common/Paginator';
import CalendarIcon from 'components/common/icon/CalendarIcon';
import React from 'react';
import Link from "next/link";
import ReactTooltip from 'react-tooltip';

interface IProp { }

export const MsGoodsTerms: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in ">
            <h4>상품관리</h4>
            <div className="in_content">
                <div className="tab-nav">
                    <ul>
                        <li><Link href="/master/goods"><a>상품관리</a></Link></li>
                        <li><Link href="/master/goods/goods1-2"><a>카테고리설정</a></Link></li>
                        <li className="on"><Link href="/master/goods/goods1-3"><a>약관관리</a></Link></li>
                    </ul>
                </div>
                <div className="con goods2">
                    <div className="jul">
                        <h5>국내여행특별약관동의</h5>
                        <div className="textbox">
                            에디터자리
                        </div>
                        <div className="fin">
                            <div className="float_right">
                                <button type="submit" className="btn medium">저장하기</button>
                            </div>
                        </div>
                    </div>
                    <div className="jul">
                        <h5>이용약관</h5>
                        <div className="textbox">
                            에디터자리
                        </div>
                        <div className="fin">
                            <div className="float_right">
                                <button type="submit" className="btn medium">저장하기</button>
                            </div>
                        </div>
                    </div>
                    <div className="jul">
                        <h5>개인정보 수집 및 이용동의</h5>
                        <div className="textbox">
                            에디터자리
                        </div>
                        <div className="fin">
                            <div className="float_right">
                                <button type="submit" className="btn medium">저장하기</button>
                            </div>
                        </div>
                    </div>
                    <div className="jul">
                        <h5>고유식별정보 수집 및 이용동의</h5>
                        <div className="textbox">
                            에디터자리
                        </div>
                        <div className="fin">
                            <div className="float_right">
                                <button type="submit" className="btn medium">저장하기</button>
                            </div>
                        </div>
                    </div>
                    <div className="jul">
                        <h5>개인정보 제3자 제공동의</h5>
                        <div className="textbox">
                            에디터자리
                        </div>
                        <div className="fin">
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

export default MsGoodsTerms;