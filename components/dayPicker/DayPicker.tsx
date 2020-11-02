import React from 'react';
import Head from 'next/head';
import RCDayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { ISet } from 'types/interface';

interface IProps {
    from?: Date,
    to?: Date,
    setState: ISet<{
        from?: Date,
        to?: Date
    }>
}

export const DayPicker: React.FC<IProps> = ({ from, to, setState }) => {
    const defaultProps = {
        numberOfMonths: 2,
    };

    function handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.state);
        setState(range);
    }

    function handleResetClick() {
        setState({ from: undefined, to: undefined });
    }

    const modifiers = { start: from, end: to };

    return (
        <div className="RangeExample">
            <p>
                {!from && !to && 'Please select the first day.'}
                {from && !to && 'Please select the last day.'}
                {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                {from && to && (
                    <button className="link" onClick={handleResetClick}>
                        Reset
                    </button>
                )}
            </p>
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
        </div>
    );
}

export default DayPicker;