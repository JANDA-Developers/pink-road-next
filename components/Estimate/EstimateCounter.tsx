import React from 'react';
import { EstimateOption } from '../../pages/customquotation';
import { Bracket } from '../../utils/formatter';

interface IProp {
    needtoGrow?: boolean;
    option: EstimateOption
    onChange: (option: EstimateOption) => void;
}

export const EstimateCounter: React.FC<IProp> = ({ needtoGrow, onChange, option }) => {

    if (!option.isUse) return null;

    const handleCount = (isUp: boolean) => () => {
        let count = option.count;
        count = count + (isUp ? 1 : -1);
        if (count < 0) count = 0;

        option.count = count;
        option.calculatedPrice = count * option.price;
        onChange({ ...option })
    }


    return <div style={needtoGrow ? {
        width: "100%"
    } : undefined} className="content">
        <div>{option.optionName}{Bracket(option.option)}</div>
        <div>
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
