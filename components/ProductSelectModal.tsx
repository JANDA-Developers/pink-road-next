import React from 'react';
import { Fproduct } from '../types/api';
import { closeModal } from '../utils/popUp';
import ProductSearcher from './productSearcher/ProductSearcher2';

interface IProp {
    onSelect: (pd: Fproduct) => void;
}

export const ProductSelectModal: React.FC<IProp> = ({ onSelect }) => {

    return <div id="ProductSearchModal" className="popup_bg">
        <div className="in_txt master_popup">
            <a className="close_icon" onClick={closeModal("#ProductSearchModal")}>
                <i className="flaticon-multiply"></i>
            </a>
            <div className="goodsall">
                <h3>상품선택</h3>
                <ProductSearcher onSelectProduct={(product) => {
                    alert("?")
                    onSelect(product);
                }} />
            </div>
        </div>
    </div>
};
