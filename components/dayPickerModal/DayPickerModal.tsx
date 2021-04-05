import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import DayRangePicker from '../dayPicker/DayRangePicker';
import { Modal } from '../modal/Modal';
import { TRange } from '../tourWrite/helper';

export interface IDayPickerModal {
    isRange?: boolean;
    onSubmit: (range: TRange) => void;
    defaultRange: TRange;
}

export const DayPickerModal: React.FC<IDayPickerModal> = ({ children, isRange = true, onSubmit, defaultRange }) => {
    const [{ from, to }, setRange] = useState<TRange>(defaultRange);
    if (typeof window === "undefined") return null;

    const el = document.getElementById('portal');

    const handleSubmit = () => {
        onSubmit({ from, to });
    }
    if (!el) return null;
    return ReactDOM.createPortal(<Modal style={{
        display: "none"
    }} id="dayPickerModal" title="날짜선택">
        {children}
        <DayRangePicker isRange={isRange} from={from} to={to} onRangeChange={setRange} />
        <button onClick={handleSubmit} className="btn w100">변경하기</button>
    </Modal>, el);;

};
