import React from 'react';
import { Fproduct } from '../types/api';
import { closeModal } from '../utils/popUp';
import { Modal } from './modal/Modal';
import ProductSearcher from './productSearcher/ProductSearcher2';

interface IProp {
    onSelect: (pd: Fproduct) => void;
}

export const ProductSelectModal: React.FC<IProp> = ({ onSelect }) => {
    return <Modal title="상품선택" id="ProductSearchModal" className="popup_bg" inClassName="master_popup">
        <ProductSearcher onSelectProduct={(product) => {
            onSelect(product);
        }} />
    </Modal>
};
