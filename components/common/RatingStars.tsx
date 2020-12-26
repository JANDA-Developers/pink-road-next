import React from 'react';

interface IProp {
}

export const RatingStars: React.FC<IProp> = () => {
    return <div className="rating-stars">
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
    </div>;
};
