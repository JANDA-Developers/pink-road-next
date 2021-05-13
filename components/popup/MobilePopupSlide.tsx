import React from "react";
import { IDiv } from "../../types/interface";

interface IProp extends IDiv {}

export const MobilePopupSlide: React.FC<IProp> = ({ ...props }) => {
    return <div {...props} />;
};

