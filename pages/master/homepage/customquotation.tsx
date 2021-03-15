import React, { useEffect, useState } from 'react';
import { MasterLayout } from 'layout/MasterLayout';
import { HomepageTopNav } from 'components/topNav/MasterTopNav';
import { useEstimateList } from '../../../hook/useEstimate';
import { EstimateItemOptionsUpdateInput, FestimateItem, FestimateItem_options } from '../../../types/api';
import { useCopy } from '../../../hook/useUpdate';
import { generateRandomStringCode } from '../../../utils/codeGenerator';

interface IProp { }

export const CustomQuotationMaster: React.FC<IProp> = () => {
    const { items } = useEstimateList()
    const [data, setData] = useCopy(items);

    const addGroup = () => {
        const defaultOption: FestimateItem_options = {
            __typename: "EstimateOption",
            isUse: false,
            option: "",
            optionName: "",
            price: 0
        }

        const defaultGroup: FestimateItem = {
            __typename: "EstimateItem",
            _id: generateRandomStringCode(),
            createdAt: new Date(),
            isDelete: false,
            options: [defaultOption],
            title: "",
            updatedAt: new Date()
        }
        data.push(defaultGroup);
        setData([...data]);
    }

    const deleteGroup = () => {

    }

    const deleteOption = () => {

    }

    const addOption = () => {

    }

    const updateOption = () => {

    }

    return <MasterLayout>
        <div className="in ">
            <h4>맞춤견적관리</h4>
            <div className="in_content">
                <HomepageTopNav />
                <div className="con homepage customquotationmaster">
                    <div className="design_table">
                        {items.map(item =>
                            <div className="block_box">
                                <h5>{item.title}<button className="btn add_btn right"><i className="flaticon-add"></i>그룹추가</button></h5>
                                <div className="tbody categoryEditer">
                                    <div className="t01">
                                        <div className="title">{item.title}</div>
                                    </div>
                                    <div className="t02">
                                        <div className="txt">
                                            <input className="w30" placeholder="" type="text" value="" />
                                        </div>
                                    </div>
                                </div>
                                {item.options.map((option, index) =>
                                    <div key={item._id + index} className="tbody categoryEditer">
                                        <div className="t01">
                                            <div className="title">
                                                <input value={option.optionName} />
                                            </div>
                                            <div className="title">
                                                <input value={option.option} />
                                            </div>
                                            <div className="t02">
                                                <div className="txt">
                                                    <input className="w30 mr10" placeholder="항목 타이틀" type="text" value="" />
                                                    <input className="w30 mr10" placeholder="항목 옵션" type="text" value="" />
                                                    <input className="w30" placeholder="금액" type="text" value="" />
                                                    <button className="btn add_btn right"><i className="flaticon-add"></i>항목추가</button>
                                                    <p className="infotxt_gray">1개에 대한 금액을 설정해주세요. 최대 선택 가능한 갯수는 99개 입니다.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </MasterLayout>
};

export default CustomQuotationMaster;