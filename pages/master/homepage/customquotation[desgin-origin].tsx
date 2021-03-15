import React from 'react';
import { MasterLayout } from 'layout/MasterLayout';
import Link from "next/link";
import { GoodsTopNav, HomepageTopNav } from 'components/topNav/MasterTopNav';

interface IProp { }

export const CustomQuotationMaster: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in ">
            <h4>맞춤견적관리</h4>
            <div className="in_content">
                <HomepageTopNav />
                <div className="con homepage customquotationmaster">
                    <div className="design_table">
                        <div className="block_box">
                            <h5>그룹1<button className="btn add_btn right"><i className="flaticon-add"></i>그룹추가</button></h5>
                            <div className="tbody categoryEditer">
                                <div className="t01">
                                    <div className="title">그룹 타이틀</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30" placeholder="" type="text" value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="tbody categoryEditer">
                                <div className="t01">
                                    <div className="title">항목1</div>
                                </div>
                                <div className="t02">
                                    <div className="txt">
                                        <input className="w30 mr10" placeholder="항목 타이틀" type="text" value="" />
                                        <input className="w30" placeholder="금액" type="text" value="" />
                                        <button className="btn add_btn right"><i className="flaticon-add"></i>항목추가</button>
                                        <p className="infotxt_gray">1개에 대한 금액을 설정해주세요. 최대 선택 가능한 갯수는 99개 입니다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MasterLayout >
};

export default CustomQuotationMaster;