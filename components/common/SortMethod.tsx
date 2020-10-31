import React from 'react';

interface IProp { }

export const SortSelect: React.FC<IProp> = () => {
    return <select className="sel01">
        <option>최신&uarr;</option>
        <option>최신&darr;</option>
        <option>조회수</option>
    </select>;
};

export default SortSelect;