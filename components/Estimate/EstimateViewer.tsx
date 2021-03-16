import React from 'react';
import { Estimate } from '../../pages/customquotation';
import { FestimateItem } from '../../types/api';
import { autoComma } from '../../utils/formatter';
import { arraySum } from '../../utils/math';

interface IProp {
    estimate: Estimate[]
}

export const EstimateViewer: React.FC<IProp> = ({ estimate }) => {
    const integratedOptions = estimate.map(estimate => estimate.options.map(op => ({
        ...estimate,
        ...op,
    }))).flat();
    const optionPrices = integratedOptions.map(op => op.calculatedPrice).flat()
    const totalPrice = arraySum(optionPrices);

    return <div className="quotation__sumbox">
        <div className="quotation__sumbox_calculation">
            <ul>
                {integratedOptions.map((item, index) =>
                    <li key={item._id + index + "option"}><i></i><strong>{item.title}-{item.optionName}({item.option})</strong><span>{autoComma(totalPrice)}원</span></li>
                )}
            </ul>
        </div>
        <div className="quotation__sumbox_sum">
            = <strong>{autoComma(totalPrice)}</strong>원
    </div>
    </div>;
};
