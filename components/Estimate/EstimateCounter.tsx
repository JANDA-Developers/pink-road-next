import React from 'react';
import { Estimate, EstimateOption } from '../../pages/customquotation';
import { estimateItemList_EstimateItemList_data_options } from '../../types/api';
import { ISet } from '../../types/interface';
import { autoComma } from '../../utils/formatter';

interface IProp {
    option: EstimateOption
    onChange: (option: EstimateOption) => void;
}

export const EstimateCounter: React.FC<IProp> = ({ onChange, option }) => {

    const handleCount = (isUp: boolean) => () => {
        let count = option.count;
        count = count + (isUp ? 1 : -1);
        if (count < 0) count = 0;

        option.count = count;
        option.price = count * option.price;
        onChange({ ...option })
    }


    return <div className="content">
        <div>{option.optionName}({option.option})</div>
        <div>
            <div className="Number__box">
                <span className="left_btn">
                    <i className="flaticon-substract"></i>
                </span><span className="number">{autoComma(option.price)}</span>
                <span className="right_btn">
                    <i className="flaticon-add"></i>
                </span>
            </div>
            <div className="Number__box">
                <span onClick={handleCount(false)} className="left_btn">
                    <i className="flaticon-substract"></i>
                </span><span className="number">{option.count}</span>
                <span onClick={handleCount(true)} className="right_btn">
                    <i className="flaticon-add"></i>
                </span>
            </div>
        </div>
    </div>;
};
