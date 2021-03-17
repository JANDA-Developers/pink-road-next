import React, { useEffect } from 'react';
import { MasterLayout } from 'layout/MasterLayout';
import { HomepageTopNav } from 'components/topNav/MasterTopNav';
import { useEstimateFindOne, useEstimateUpdate } from '../../../hook/useEstimate';
import { estimateItemListFindOne_EstimateItemListFindOne_data, EstimateItemOptionsUpdateInput, FestimateItem, FestimateItem_options } from '../../../types/api';
import { useCopy } from '../../../hook/useUpdate';
import { omits } from '../../../utils/omit';
import { toNumber } from '../../../utils/toNumber';
import { autoComma, deepCopy } from '../../../utils/formatter';
import { group } from 'console';

interface IProp {
    items: estimateItemListFindOne_EstimateItemListFindOne_data[]
}

const defaultOption: FestimateItem_options = {
    __typename: "EstimateOption",
    isUse: false,
    option: "",
    optionName: "",
    price: 0
}

const defaultGroup: FestimateItem = {
    __typename: "EstimateItem",
    options: [defaultOption],
    title: "",
    isUse: false
}

export const CustomQuotationMaster: React.FC<IProp> = ({ items = [] }) => {
    const [data, setData] = useCopy(items);
    const [estimateUpdate] = useEstimateUpdate({
        onCompleted: ({ EstimateItemListUpdate }) => {
            if (EstimateItemListUpdate.ok) {
                alert("저장 완료");
            }
        }
    });

    const handleEstimateUpdate = () => {
        estimateUpdate({
            variables: {
                params: omits(data)
            }
        })
    }

    const addGroup = () => {
        data.push(deepCopy(defaultGroup));
        setData([...data]);
    }

    const updateGroup = (index: number, group: FestimateItem) => {
        data[index] = group;
        setData([...data]);
    }


    const deleteGroup = (index: number) => {
        if (confirm("정말로 그룹을 삭제 하시겠습니까?"));
        data.splice(index, 1);
        console.log({ data });
        setData([...data]);
    }

    const deleteOption = (itemIndex: number, index: number) => {
        data[itemIndex].options.splice(index, 1);
        setData([...data]);
    }

    const addOption = (index: number) => {
        data[index].options.push(deepCopy(defaultOption));
        setData([...data]);
    }

    const updateOption = (itemIndex: number, optionIndex: number, option: FestimateItem_options) => {
        data[itemIndex].options[optionIndex] = { ...option };
        setData([...data]);
    }

    return <MasterLayout>
        <div className="in ">
            <h4>맞춤견적관리</h4>
            <div className="in_content">
                <HomepageTopNav />
                <div className="con homepage customquotationmaster">
                    <div className="design_table">
                        <button onClick={addGroup} className="btn add_btn"><i className="flaticon-add"></i>그룹추가</button>
                        {data.map((item, index) =>
                            <div key={index + "estimate"} className="block_box">
                                <h5>그룹{index + 1}
                                    <div className="switch">
                                        <input onChange={() => {
                                            const isUse = !item.isUse
                                            item.isUse = isUse;
                                            updateGroup(index, item);
                                        }} className="tgl tgl-skewed" checked={item.isUse} id={`itemCb${index}`} type="checkbox" />
                                        <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor={`itemCb${index}`}></label>
                                    </div>
                                    <button onClick={() => {
                                        deleteGroup(index)
                                    }} className="btn add_btn right">그룹삭제</button>
                                </h5>
                                <div className="tbody categoryEditer">
                                    <div className="t01">
                                        <div className="title">그룹타이틀</div>
                                    </div>
                                    <div className="t02">
                                        <div className="txt">
                                            <input onChange={(e) => {
                                                const val = e.currentTarget.value;
                                                item.title = val;
                                                updateGroup(index, item);
                                            }} className="w30" placeholder="" type="text" value={item.title} />
                                        </div>
                                    </div>
                                </div>
                                {item.options.map((option, _index) =>
                                    <div key={index + "estimate" + _index} className="tbody categoryEditer">
                                        <div className="t01">
                                            <div className="title">항목{_index + 1}</div>
                                        </div>
                                        <div className="t02">
                                            <div className="txt">
                                                <input onChange={(e) => {
                                                    const title = e.currentTarget.value;
                                                    option.optionName = title;
                                                    updateOption(index, _index, option);
                                                }} className="w30 mr10" placeholder="항목 타이틀" type="text" value={option.optionName} />
                                                <input onChange={(e) => {
                                                    const _option = e.currentTarget.value;
                                                    option.option = _option;
                                                    updateOption(index, _index, option);
                                                }} className="w30 mr10" placeholder="항목 옵션" type="text" value={option.option} />
                                                <input onChange={(e) => {
                                                    const price = e.currentTarget.value;
                                                    option.price = toNumber(price);
                                                    updateOption(index, _index, option);
                                                }} className="w30" placeholder="금액" type="text" value={autoComma(option.price || 0)} />
                                                <div className="switch">
                                                    <input onChange={() => {
                                                        const isUse = !option.isUse;
                                                        option.isUse = isUse;
                                                        updateOption(index, _index, option);
                                                    }} className="tgl tgl-skewed" checked={option.isUse} id={`${index}cb${_index}`} type="checkbox" />
                                                    <label className="tgl-btn" data-tg-off="OFF" data-tg-on="ON" htmlFor={`${index}cb${_index}`}></label>
                                                </div>
                                                <div>
                                                    <button onClick={() => {
                                                        deleteOption(index, _index)
                                                    }} className="btn add_btn right"><i className="flaticon-add"></i>항목삭제</button>
                                                </div>
                                                <p className="infotxt_gray">1개에 대한 금액을 설정해주세요. 최대 선택 가능한 갯수는 99개 입니다.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <button onClick={() => {
                                    addOption(index);
                                }} className="btn add_btn right"><i className="flaticon-add"></i>항목추가</button>
                            </div>
                        )}
                    </div>

                    <button onClick={handleEstimateUpdate} className="btn add_btn right">저장하기</button>
                </div>
            </div>
        </div>
    </MasterLayout>
};

export const CustomQuotationMasterWrap = () => {
    const { data } = useEstimateFindOne()

    return <CustomQuotationMaster key={data?.length} items={data} />
}

export default CustomQuotationMasterWrap;