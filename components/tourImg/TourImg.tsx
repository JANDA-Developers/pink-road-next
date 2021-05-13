import React from "react";
import { productList_ProductList_data } from "../../types/api";
import { BG } from "../../types/const";
import { IDiv } from "../../types/interface";
import { productStatus } from "../../utils/enumToKr";

interface IProp extends IDiv {
    data: productList_ProductList_data;
}

export const TourImg: React.FC<IProp> = ({ data, ...divProp }) => {
    return (
        <div style={BG(data.images?.[0]?.uri || "")} {...divProp}>
            <span className="product__statusIcon">
                {productStatus(data.status)}
            </span>
        </div>
    );
};
