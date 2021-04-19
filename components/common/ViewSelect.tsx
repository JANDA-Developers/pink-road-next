import React from 'react';

interface IProp {
    select: "line" | "gal";
    onChange: (view: "line" | "gal") => void;
}

export const ViewSelect: React.FC<IProp> = ({ onChange, select }) => {

    return <ul className="al_02 option__box">
        <li className="option__list01" onClick={() => {
            onChange("line")
        }}><a className={`view_icon ${select === "line" && "on"}`}></a></li>
        <li className="option__list02" onClick={() => {
            onChange("gal")
        }}><a className={`view_icon ${select === "gal" && "on"}`}></a></li>
    </ul>;
};

