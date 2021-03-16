import CalendarIcon from 'components/common/icon/CalendarIcon';
import React from 'react';
import Link from "next/link";

interface IProp { }

export const CustomQuotation: React.FC<IProp> = () => {
    return <div className="w1200 customquotation ">
        <h3>맞춤견적</h3>
        <p>나에게 맞는 여행을 찾으시나요? 핑크로더에서 맞춤견적을 해보세요. <br />최저가로 찾아드립니다.</p>
        <div className="quotation__table">
            <div className="quotation__table_fom">

                <div className="title">차량</div>
                <div className="quotation__table_list">
                    <div className="content">
                        <div>9인승(기사님포함)</div>
                        <div>
                            <div className="Number__box">
                                <span className="left_btn">
                                    <i className="flaticon-substract"></i>
                                </span><span className="number">0</span>
                                <span className="right_btn">
                                    <i className="flaticon-add"></i>
                                </span>
                            </div>
                            {/* <div className="Number__box">
                            <span onClick={handleCount("adultCount", false)} className="left_btn">
                                <i className="flaticon-substract"></i>
                            </span><span className="number">{input.adultCount}</span>
                            <span onClick={handleCount("adultCount", true)} className="right_btn">
                                <i className="flaticon-add"></i>
                            </span>
                        </div> */}
                        </div>
                    </div>
                    <div className="content">
                        <div>11인승(기사님포함)</div>
                        <div>
                            <div className="Number__box">
                                <span className="left_btn">
                                    <i className="flaticon-substract"></i>
                                </span><span className="number">0</span>
                                <span className="right_btn">
                                    <i className="flaticon-add"></i>
                                </span>
                            </div>
                            {/* <div className="Number__box">
                            <span onClick={handleCount("adultCount", false)} className="left_btn">
                                <i className="flaticon-substract"></i>
                            </span><span className="number">{input.adultCount}</span>
                            <span onClick={handleCount("adultCount", true)} className="right_btn">
                                <i className="flaticon-add"></i>
                            </span>
                        </div> */}
                        </div>
                    </div>
                </div>
                <div className="quotation__table_list">
                    <div className="content">
                        <div>25인승(기사님포함)</div>
                        <div>
                            <div className="Number__box">
                                <span className="left_btn">
                                    <i className="flaticon-substract"></i>
                                </span><span className="number">0</span>
                                <span className="right_btn">
                                    <i className="flaticon-add"></i>
                                </span>
                            </div>
                            {/* <div className="Number__box">
                            <span onClick={handleCount("adultCount", false)} className="left_btn">
                                <i className="flaticon-substract"></i>
                            </span><span className="number">{input.adultCount}</span>
                            <span onClick={handleCount("adultCount", true)} className="right_btn">
                                <i className="flaticon-add"></i>
                            </span>
                        </div> */}
                        </div>
                    </div>
                    <div className="content">
                        <div>45인승(기사님포함)</div>
                        <div>
                            <div className="Number__box">
                                <span className="left_btn">
                                    <i className="flaticon-substract"></i>
                                </span><span className="number">0</span>
                                <span className="right_btn">
                                    <i className="flaticon-add"></i>
                                </span>
                            </div>
                            {/* <div className="Number__box">
                            <span onClick={handleCount("adultCount", false)} className="left_btn">
                                <i className="flaticon-substract"></i>
                            </span><span className="number">{input.adultCount}</span>
                            <span onClick={handleCount("adultCount", true)} className="right_btn">
                                <i className="flaticon-add"></i>
                            </span>
                        </div> */}
                        </div>
                    </div>

                </div>




                <div className="quotation__table_line">
                    <div className="title">가이드</div>
                    <div className="quotation__table_list">
                        <div className="content">
                            <div>국내-전문가이드</div>
                            <div>
                                <div className="Number__box">
                                    <span className="left_btn">
                                        <i className="flaticon-substract"></i>
                                    </span><span className="number">0</span>
                                    <span className="right_btn">
                                        <i className="flaticon-add"></i>
                                    </span>
                                </div>
                                {/* <div className="Number__box">
                            <span onClick={handleCount("adultCount", false)} className="left_btn">
                                <i className="flaticon-substract"></i>
                            </span><span className="number">{input.adultCount}</span>
                            <span onClick={handleCount("adultCount", true)} className="right_btn">
                                <i className="flaticon-add"></i>
                            </span>
                        </div> */}
                            </div>
                        </div>
                        <div className="content">
                            <div>국외-영어/일본어/중국어</div>
                            <div>
                                <div className="Number__box">
                                    <span className="left_btn">
                                        <i className="flaticon-substract"></i>
                                    </span><span className="number">0</span>
                                    <span className="right_btn">
                                        <i className="flaticon-add"></i>
                                    </span>
                                </div>
                                {/* <div className="Number__box">
                            <span onClick={handleCount("adultCount", false)} className="left_btn">
                                <i className="flaticon-substract"></i>
                            </span><span className="number">{input.adultCount}</span>
                            <span onClick={handleCount("adultCount", true)} className="right_btn">
                                <i className="flaticon-add"></i>
                            </span>
                        </div> */}
                            </div>
                        </div>

                    </div>

                </div>



                <div className="quotation__table_line">
                    <div className="title">숙박</div>
                    <div className="quotation__table_list">
                        <div className="content">
                            <div>게스트하우스</div>
                            <div>
                                <div className="Number__box">
                                    <span className="left_btn">
                                        <i className="flaticon-substract"></i>
                                    </span><span className="number">0</span>
                                    <span className="right_btn">
                                        <i className="flaticon-add"></i>
                                    </span>
                                </div>
                                {/* <div className="Number__box">
                            <span onClick={handleCount("adultCount", false)} className="left_btn">
                                <i className="flaticon-substract"></i>
                            </span><span className="number">{input.adultCount}</span>
                            <span onClick={handleCount("adultCount", true)} className="right_btn">
                                <i className="flaticon-add"></i>
                            </span>
                        </div> */}
                            </div>
                        </div>
                        <div className="content">
                            <div>비즈니스호텔-1인(2인 1실)</div>
                            <div>
                                <div className="Number__box">
                                    <span className="left_btn">
                                        <i className="flaticon-substract"></i>
                                    </span><span className="number">0</span>
                                    <span className="right_btn">
                                        <i className="flaticon-add"></i>
                                    </span>
                                </div>
                                {/* <div className="Number__box">
                            <span onClick={handleCount("adultCount", false)} className="left_btn">
                                <i className="flaticon-substract"></i>
                            </span><span className="number">{input.adultCount}</span>
                            <span onClick={handleCount("adultCount", true)} className="right_btn">
                                <i className="flaticon-add"></i>
                            </span>
                        </div> */}
                            </div>
                        </div>

                    </div>
                    <div className="quotation__table_list">
                        <div className="content">
                            <div>비즈니스호텔(패밀리룸)-1인(4인1실)</div>
                            <div>
                                <div className="Number__box">
                                    <span className="left_btn">
                                        <i className="flaticon-substract"></i>
                                    </span><span className="number">0</span>
                                    <span className="right_btn">
                                        <i className="flaticon-add"></i>
                                    </span>
                                </div>
                                {/* <div className="Number__box">
                            <span onClick={handleCount("adultCount", false)} className="left_btn">
                                <i className="flaticon-substract"></i>
                            </span><span className="number">{input.adultCount}</span>
                            <span onClick={handleCount("adultCount", true)} className="right_btn">
                                <i className="flaticon-add"></i>
                            </span>
                        </div> */}
                            </div>
                        </div>


                    </div>
                </div>






                <div className="quotation__table_line">
                    <div className="title">여행자보험</div>
                    <div className="quotation__table_list">
                        <div className="content">
                            <div>성인</div>
                            <div>
                                <div className="Number__box">
                                    <span className="left_btn">
                                        <i className="flaticon-substract"></i>
                                    </span><span className="number">0</span>
                                    <span className="right_btn">
                                        <i className="flaticon-add"></i>
                                    </span>
                                </div>
                                {/* <div className="Number__box">
                            <span onClick={handleCount("adultCount", false)} className="left_btn">
                                <i className="flaticon-substract"></i>
                            </span><span className="number">{input.adultCount}</span>
                            <span onClick={handleCount("adultCount", true)} className="right_btn">
                                <i className="flaticon-add"></i>
                            </span>
                        </div> */}
                            </div>
                        </div>
                        <div className="content">
                            <div>소아</div>
                            <div>
                                <div className="Number__box">
                                    <span className="left_btn">
                                        <i className="flaticon-substract"></i>
                                    </span><span className="number">0</span>
                                    <span className="right_btn">
                                        <i className="flaticon-add"></i>
                                    </span>
                                </div>
                                {/* <div className="Number__box">
                            <span onClick={handleCount("adultCount", false)} className="left_btn">
                                <i className="flaticon-substract"></i>
                            </span><span className="number">{input.adultCount}</span>
                            <span onClick={handleCount("adultCount", true)} className="right_btn">
                                <i className="flaticon-add"></i>
                            </span>
                        </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <h4>최종결제금액</h4>
            <div className="quotation__sumbox">

                <div className="quotation__sumbox_calculation">
                    <ul>
                        <li><i></i><strong>예약 금액</strong><span>555,555원</span></li>
                        <li className="pink_font"><i></i><strong>결제한 금액</strong><span>555,555원</span></li>
                        <li className="pink_font"><i></i><strong>혜택-마일리지</strong><span>555,555원</span></li>
                        <li className="pink_font"><i></i><strong>혜택-상품권</strong><span>555,555원</span></li>
                    </ul>
                </div>
                <div className="quotation__sumbox_sum">
                    = <strong>234234,4324325</strong>원
                </div>
            </div>


            <div className="quotation__info">
                <strong>주의</strong><br />
                사실과 다를 수 있음
            </div>



        </div>





    </div>
};

export default CustomQuotation;