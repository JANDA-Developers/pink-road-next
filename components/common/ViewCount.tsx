import React from 'react';

interface IProp {
    value: 10 | 50 | 100;
    onChange: (value: number) => void;
}

export const ViewCount: React.FC<IProp> = ({
    onChange,
    value
}) => {
    return <select onChange={(e) => {
        const count = parseInt(e.currentTarget.value);
        onChange(count)
    }} value={value} className="sel02">
        <option value={10}>10개 보기</option>
        <option value={50}>50개 보기</option>
        <option value={100}>100개 보기</option>
    </select>;
};
