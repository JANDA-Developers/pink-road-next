import React from 'react';
import Head from 'next/head';
import RCDayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { ISet } from 'types/interface';

type Range = {
    from?: Date,
    to?: Date
}
type ThandleSate = (range: Range) => void;
interface IProps {
    from?: Date,
    to?: Date,
    onRangeChange: ThandleSate
}

export const DayRangePicker: React.FC<IProps> = ({ from = new Date(), to = new Date(), onRangeChange }) => {
    const defaultProps = {
        numberOfMonths: 2,
    };

    function handleDayClick(day: any) {
        const range = DateUtils.addDayToRange(day, { from, to });
        onRangeChange(range);
    }

    function handleResetClick() {
        onRangeChange({ from: undefined, to: undefined });
    }

    const modifiers = { start: from, end: to };

    return (
        <div className="RangeExample">
            <RCDayPicker
                className="Selectable"
                selectedDays={[from, { from, to }]}
                modifiers={modifiers}
                onDayClick={handleDayClick}
                {...defaultProps}
            />
            <Head>
                <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
            </Head>
            {/*<ul className="info_txt">
                <li>- ������ ����ϱ� ���� ���� ���� �޷¿��� �ش� ��ǰ�� [���۳�¥]�� [���ᳯ¥]�� �Է��� �ּ���.</li>
                <li>- ���õ� ��¥ �� ��ŭ �Ʒ��� ���� ������ �˴ϴ�.</li>
                <li>- �Ʒ��� ������ ��¥�� ���� ���Դϴ�.</li>
            </ul> ���ڰ� ���� �ФФ� */}
        </div>
    );
}

export default DayRangePicker;