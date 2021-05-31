import React from "react";

interface IProp {
    change: boolean;
    children: any;
}
interface IPropSkip {
    skip: boolean;
    children: any;
}

export const _Change: React.FC<IProp> = ({ children }) => {
    return children;
};
export const _Skip: React.FC<IPropSkip> = ({ children }) => {
    return children;
};

export const Change = React.memo(_Change, ({}, { change }) => !change);
export const SkipUpdate = React.memo(_Skip, ({}, { skip }) => skip);
