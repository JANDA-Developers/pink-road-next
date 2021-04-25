import React from "react";

interface IProp extends React.HTMLAttributes<HTMLSpanElement> {}

const CalendarIcon: React.FC<IProp> = ({ ...props }) => {
    return (
        <span className="calendar" {...props}>
            <img src="/img/svg/CalendarIcon.svg" className="svg_calendar" />
            <button />
        </span>
    );
};

export default CalendarIcon;
