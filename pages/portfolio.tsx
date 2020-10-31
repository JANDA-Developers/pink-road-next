import React from 'react';
import PIcon from "/img/p_icon.png"
interface IProp { }

export const PortFolio: React.FC<IProp> = () => {
    return <div className="portfolio_in">
        <div className="top_bg w100">
            <div className="w1200">
                <h3>
                    What we do
                </h3>
                <span>
                    경험하고, 느끼고, 생각을 나누는
                 </span>
            </div>
        </div>

        <div className="con02 con_block">
            <div className="w1200">

                <h4>
                    핑크로더는 사라져가는 가치 있는 것들을 되살리는 일을 하고 있습니다.<br />
                    사람과 상생할 수 있는 지역콘텐츠를 개발하며 여행/디자인/ 교육등의
                다양한 방식으로 소통하는법을 <br className="no" />창출하고 더 나은 새로운 것을 제안합니다.
            </h4>
                <ul>
                    <li className="img01">
                        <div className="img"></div>
                        <h5>Brand Consulting</h5>
                        <span>
                            브랜드 컨설팅
                    </span>
                    </li>
                    <li className="img02">
                        <div className="img"></div>
                        <h5>Content R&D</h5>
                        <span>
                            컨텐츠연구개발
                    </span>
                    </li>
                    <li className="img03">
                        <div className="img"></div>
                        <h5>Co-prosperity</h5>
                        <span>
                            상생커뮤니티
                    </span>
                    </li>
                    <li className="img04">
                        <div className="img"></div>
                        <h5>Social Design</h5>
                        <span>
                            소셜디자인
                    </span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="w100 con03 con_block">
            <h4>
                Portfolio
            </h4>
            <span>
                디테일한 스토리텔링을 통해 다양한 컨텐츠를 만들어 갑니다.
            </span>
        </div>
        <div className="w100 con04 con_block">
            <div className="photo_tap_div">
                <input id="tab-1" type="radio" name="radio-set" className="tab-selector-1" checked></input>
                <label htmlFor="tab-1" className="tab-label-1 photo_tap">ALL</label>
                <input id="tab-2" type="radio" name="radio-set" className="tab-selector-2"></input>
                <label htmlFor="tab-2" className="tab-label-2 photo_tap">지역컨텐츠연구</label>
                <input id="tab-3" type="radio" name="radio-set" className="tab-selector-3"></input>
                <label htmlFor="tab-3" className="tab-label-3 photo_tap">테마프로그램</label>
                <input id="tab-4" type="radio" name="radio-set" className="tab-selector-4"></input>
                <label htmlFor="tab-4" className="tab-label-4 photo_tap">디자인</label>
                <input id="tab-5" type="radio" name="radio-set" className="tab-selector-5"></input>
                <label htmlFor="tab-5" className="tab-label-5 photo_tap">교육 및 강의</label>
                <input id="tab-6" type="radio" name="radio-set" className="tab-selector-6"></input>
                <label htmlFor="tab-6" className="tab-label-6 photo_tap">사회공헌</label>

                <div className="tap_nav_bg"></div>

                <div className="portfolio_box box01" id="portfolio_box_1">
                    <ul>
                        <li>
                            <div className="box">
                                <i className="category">디자인</i>
                                <strong className="title">제목제목</strong>
                                <span className="txt">내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</span>
                            </div>
                        </li>

                        <li>
                            <div className="box">
                                <i className="category">디자인</i>
                                <strong className="title">제목제목</strong>
                                <span className="txt">내용내용내용</span>
                            </div>
                        </li>
                        <li>
                            <div className="box">
                                <i className="category">디자인</i>
                                <strong className="title">제목제목</strong>
                                <span className="txt">내용내용내용</span>
                            </div>
                        </li>
                        <li>
                            <div className="box">
                                <i className="category">디자인</i>
                                <strong className="title">제목제목</strong>
                                <span className="txt">내용내용내용</span>
                            </div>
                        </li>
                        <li>
                            <div className="box">
                                <i className="category">디자인</i>
                                <strong className="title">제목제목</strong>
                                <span className="txt">내용내용내용</span>
                            </div>
                        </li>
                    </ul>
                    <div className="boardNavigation">
                        <div className="center">
                            <div className="pagenate_mini">
                                <div className="page_btn first"><i className="jandaicon-arr4-left"></i></div>
                                <div className="count"><strong>1</strong> / 10</div>
                                <div className="page_btn end"><i className="jandaicon-arr4-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio_box box02" id="portfolio_box_2">
                    <ul>
                        <li>
                            <div className="box">
                                <i className="category">디자인</i>
                                <strong className="title">제목제목</strong>
                                <span className="txt">내용내용내용</span>
                            </div>
                        </li>
                    </ul>
                    <div className="boardNavigation">
                        <div className="center">
                            <div className="pagenate_mini">
                                <div className="page_btn first"><i className="jandaicon-arr4-left"></i></div>
                                <div className="count"><strong>1</strong> / 10</div>
                                <div className="page_btn end"><i className="jandaicon-arr4-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio_box box03" id="portfolio_box_3">
                    <ul>
                        <li>
                            <div className="box">
                                <i className="category">디자인</i>
                                <strong className="title">제목제목</strong>
                                <span className="txt">내용내용내용</span>
                            </div>
                        </li>
                    </ul>
                    <div className="boardNavigation">
                        <div className="center">
                            <div className="pagenate_mini">
                                <div className="page_btn first"><i className="jandaicon-arr4-left"></i></div>
                                <div className="count"><strong>1</strong> / 10</div>
                                <div className="page_btn end"><i className="jandaicon-arr4-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio_box box04" id="portfolio_box_4">
                    <ul>
                        <li>
                            <div className="box">
                                <i className="category">디자인</i>
                                <strong className="title">제목제목</strong>
                                <span className="txt">내용내용내용</span>
                            </div>
                        </li>
                    </ul>
                    <div className="boardNavigation">
                        <div className="center">
                            <div className="pagenate_mini">
                                <div className="page_btn first"><i className="jandaicon-arr4-left"></i></div>
                                <div className="count"><strong>1</strong> / 10</div>
                                <div className="page_btn end"><i className="jandaicon-arr4-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio_box box05" id="portfolio_box_5">
                    <ul>
                        <li>
                            <div className="box">
                                <i className="category">디자인</i>
                                <strong className="title">제목제목</strong>
                                <span className="txt">내용내용내용</span>
                            </div>
                        </li>
                    </ul>
                    <div className="boardNavigation">
                        <div className="center">
                            <div className="pagenate_mini">
                                <div className="page_btn first"><i className="jandaicon-arr4-left"></i></div>
                                <div className="count"><strong>1</strong> / 10</div>
                                <div className="page_btn end"><i className="jandaicon-arr4-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio_box box06" id="portfolio_box_6">
                    <ul>
                        <li>
                            <div className="box">
                                <i className="category">디자인</i>
                                <strong className="title">제목제목</strong>
                                <span className="txt">내용내용내용</span>
                            </div>
                        </li>
                    </ul>
                    <div className="boardNavigation">
                        <div className="center">
                            <div className="pagenate_mini">
                                <div className="page_btn first"><i className="jandaicon-arr4-left"></i></div>
                                <div className="count"><strong>1</strong> / 10</div>
                                <div className="page_btn end"><i className="jandaicon-arr4-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    </div>;
    ;
};

export default PortFolio;