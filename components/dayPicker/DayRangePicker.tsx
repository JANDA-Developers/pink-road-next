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

export const DayRangePicker: React.FC<IProps> = ({ from, to, setState }) => {
    const defaultProps = {
        numberOfMonths: 2,
    };

    function handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, { from, to });
        setState(range);
    }

    function handleResetClick() {
        setState({ from: undefined, to: undefined });
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
                <li>- 일정을 등록하기 위해 먼저 왼쪽 달력에서 해당 상품의 [시작날짜]와 [종료날짜]를 입력해 주세요.</li>
                <li>- 선택된 날짜 수 만큼 아래에 폼이 생성이 됩니다.</li>
                <li>- 아래의 폼에서 날짜는 고정 값입니다.</li>
            </ul> 글자가 깨짐 ㅠㅠㅠ */}
        </div>
    );
}

export default DayRangePicker;