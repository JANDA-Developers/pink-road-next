import React from 'react';

interface IProp { }

export const PortfolioLoading: React.FC<IProp> = () => {
    return <li style={{ backgroundImage: `url(${portfolio.thumb?.uri})` }}>
        <div className="box">
        </div>
    </li>;
};
