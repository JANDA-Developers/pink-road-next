import { Paginater } from 'components/common/Paginator';
import { Product } from 'components/product/Product';
import React, { useState } from 'react';

interface IProp {
    context?: any;
}

export const TourList: React.FC<IProp> = ({ context }) => {

    // const { setSort, setFilter, setViewCount, } = context;

    return <div className="mdeal_box">
        <div className="w1200">
            <div className="deal_list">

                <div className="search">
                    <ul>
                        <li className="on"><a href="/tour-list">전체</a></li>
                        <li><a href="/tour-list">문화·예술여행</a></li>
                        <li><a href="/tour-list">교육·답사여행</a></li>
                        <li><a href="/tour-list">역사여행</a></li>
                        <li><a href="/tour-list">팸투어</a></li>
                    </ul>
                </div>
                <div className="alignment">
                    <div className="left_div"><span className="infotxt">총 <strong>22,222</strong>개</span></div>
                    <div className="right_div">
                        <select className="sel01">
                            <option>추천수</option>
                            <option>예약수</option>
                            <option>조회수</option>
                        </select>
                        <select onChange={(e) => {
                        }} className="sel02">
                            <option value={10}>10개 보기</option>
                            <option value={50}>50개 보기</option>
                            <option value={100}>100개 보기</option>
                        </select>
                        <ul className="al_02">
                            <div>
                                <li>
                                    <a href="#" className="view_icon">
                                        <svg>
                                            <rect width={4} height={2} style={{ fill: "#b7b7b7" }} />
                                            <rect x={7} width={13} height={2} style={{ fill: "#b7b7b7" }} />
                                            <rect y={7} width={4} height={2} style={{ fill: "#b7b7b7" }} />
                                            <rect x={7} y={7} width={13} height={2} style={{ fill: "#b7b7b7" }} />
                                            <rect y={15} width={4} height={2} style={{ fill: "#b7b7b7" }} />
                                            <rect x={7} y={15} width={13} height={2} style={{ fill: "#b7b7b7" }} />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="view_icon on">
                                        <svg>
                                            <rect width={9} height={8} style={{ fill: "#b7b7b7" }} />
                                            <rect x={11} width={9} height={8} style={{ fill: "#b7b7b7" }} />
                                            <rect y={10} width={9} height={8} style={{ fill: "#b7b7b7" }} />
                                            <rect x={11} y={10} width={9} height={8} style={{ fill: "#b7b7b7" }} />
                                        </svg>
                                    </a>
                                </li>
                            </div>;
                        </ul>
                    </div>
                </div>
                <ul className="list_ul line4">
                    <Product />
                </ul>
                <Paginater pageNumber={0} totalPageCount={0} />
                <div className="tl list_bottom">
                    <div className="btn_footer">
                        <span className="xet_btn medium gray">상품 등록하기</span>
                    </div>
                    <div className="search_mini">
                        <div className="in">
                            <input type="text" placeholder="검색 내용을 입력해주세요." />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.94 31.44">
                                <path className="cls-5" d="M313.17,433.49l-4.86-5.31a14.48,14.48,0,0,0-1-19.41,14.55,14.55,0,0,0-10.24-4.21,14.47,14.47,0,0,0,0,28.94,14.17,14.17,0,0,0,1.72-.1,1.5,1.5,0,1,0-.35-3,11.47,11.47,0,1,1-1.38-22.86h0a11.48,11.48,0,0,1,8.14,19.56,1.49,1.49,0,0,0,0,2.12.91.91,0,0,0,.13.08,1.2,1.2,0,0,0,.15.24l5.45,5.95a1.46,1.46,0,0,0,1.1.49,1.53,1.53,0,0,0,1-.39A1.5,1.5,0,0,0,313.17,433.49Z" transform="translate(-282.62 -404.56)"></path>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
};

export default TourList;