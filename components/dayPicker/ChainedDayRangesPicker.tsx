import React from "react";
import Head from "next/head";
import RCDayPicker, { DayPickerProps } from "react-day-picker";
import "react-day-picker/lib/style.css";
import { TElements } from "types/interface";
import dayjs from "dayjs";

type ThandleSate = (froms: Date[]) => void;
interface IProps extends DayPickerProps {
    singleDay?: boolean;
    isFixedDate: (date: Date) => boolean;
    startDateClass?: Date[];
    startDays: Date[];
    length: number;
    onRangeChange: ThandleSate;
}

export const getAllDaysFromRange = (startDays: Date[], range: number) => {
    const allDays = startDays
        ?.map((startDay, index) => {
            const dayRanges = new Array(range).fill(null).map((_, i) => {
                return dayjs(startDay).add(i, "day");
            });
            return dayRanges;
        })
        .flat();

    return allDays;
};

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const ChainedDayRangesPicker: React.FC<IProps> = ({
    singleDay,
    isFixedDate,
    onRangeChange,
    startDays,
    length,
    children,
    ...props
}) => {
    const defaultProps = {
        numberOfMonths: 2,
    };

    function handleDayClick(day: any) {
        if (singleDay) {
            onRangeChange([day]);
            return;
        }
        const hasSameDay = !!startDays?.find((date) =>
            dayjs(day).isSame(date, "day")
        );
        let nextDays = [];
        if (hasSameDay) {
            const toggledDays =
                startDays?.filter((date) => !dayjs(day).isSame(date, "day")) ||
                [];
            nextDays = [...toggledDays];
        } else {
            startDays.push(day);
            nextDays = [...startDays];
        }
        nextDays.sort((day1: Date, day2: Date) => {
            return day1.valueOf() - day2.valueOf();
        });
        onRangeChange([...nextDays]);
        return;
    }

    return (
        <div className="RangeExample">
            {/* @ts-ignore */}
            <RCDayPicker
                className="Selectable"
                selectedDays={(day) => {
                    const allDays = getAllDaysFromRange(startDays, length);
                    return !!allDays?.find((_day) =>
                        dayjs(_day).isSame(day, "day")
                    );
                }}
                modifiers={{
                    start: (day) => {
                        return !!startDays?.find((_day) =>
                            dayjs(_day).isSame(day, "day")
                        );
                    },
                    end: (day) => {
                        return !!startDays?.find(
                            (_day) =>
                                dayjs(_day).isSame(day, "day") && length === 1
                        );
                    },
                    fixed: isFixedDate,
                }}
                locale="ko"
                months={[
                    "1월",
                    "2월",
                    "3월",
                    "4월",
                    "5월",
                    "6월",
                    "7월",
                    "8월",
                    "9월",
                    "10월",
                    "11월",
                    "12월",
                ]}
                weekdaysShort={weekDays}
                weekdaysLong={weekDays}
                onDayClick={handleDayClick}
                {...defaultProps}
                {...props}
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
    border-top-left-radius: 5px !important;
    border-bottom-left-radius: 5px !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 5px !important;
    border-bottom-right-radius: 5px !important;
  }
`}</style>
            </Head>
            {children}
        </div>
    );
};

export default ChainedDayRangesPicker;
