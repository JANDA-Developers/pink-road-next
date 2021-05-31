import dayjs from "dayjs";
import React from "react";
import { InfoText } from "../infoText/InfoText";

interface IProp {
    date: Date;
    index?: number;
    range: number;
    nextDate?: Date;
    nextIndex?: number;
    nextRange?: number;
    fixed?: boolean;
}

export const TourWriteDateViewer: React.FC<IProp> = ({
    range,
    date,
    index,
    fixed,
}) => {
    return (
        <div
            key={dayjs(date).format("YYYYMMDD")}
            className={`tourWrite__Choiceday ${
                fixed && "tourWrite__Choiceday--fixed"
            }`}
        >
            {index !== undefined && <strong>[{index + 1}회차]</strong>}
            {dayjs(date).format("YYYY.MM.DD")} ~{" "}
            {dayjs(date).add(range, "day").format("YYYY.MM.DD")}
        </div>
    );
};

export const TourWriteDateViewerCurrentModify: React.FC<IProp> = ({
    range,
    date,
    index,
    nextDate,
    nextIndex,
    nextRange,
}) => {
    return (
        <div
            key={dayjs(date).format("YYYYMMDD")}
            className="tourWrite__Choiceday tourWrite__Choiceday--currentModify"
        >
            {(!dayjs(nextDate).isSame(date, "day") || range !== nextRange) && (
                <span className="tourWrite__ChoicedayPreview mr20">
                    {index !== undefined && <strong>[{index + 1}회차]</strong>}
                    {dayjs(date).format("YYYY.MM.DD")} ~{" "}
                    {dayjs(date).add(range, "day").format("YYYY.MM.DD")}
                </span>
            )}
            <span className="tourWrite__ChoicedayCurrent">
                {dayjs(nextDate).format("YYYY.MM.DD")} ~{" "}
                {dayjs(nextDate).add(nextRange, "day").format("YYYY.MM.DD")}
                <InfoText>수정이후 회차는 날짜순으로 재정렬 됩니다.</InfoText>
            </span>
        </div>
    );
};
