import React from 'react';
import { ProductStatus } from '../../types/api';
import { productStatus } from "../../utils/enumToKr";

interface IProp {
    status: ProductStatus;
}

export const StatusBadege: React.FC<IProp> = ({ status }) => {

    const getClass = () => {
        if (status === ProductStatus.CANCELD) return "tour-no"
        if (status === ProductStatus.READY) return "tour-yes"
        if (status === ProductStatus.EXPIRED) return "tour-no"
        if (status === ProductStatus.OPEN) return "tour-ok"
        if (status === ProductStatus.REFUSED) return "plainning-no"
        if (status === ProductStatus.SOLD) return "tour-no"
        if (status === ProductStatus.UPDATE_REQ) return "plainning-yes"
        if (status === ProductStatus.UPDATE_REQ_REFUSED) return "plainning-no"
    }

    // <span> </span>
    const _class = getClass();
    return <span className={`state_icon ${_class}`}>{productStatus(status)}</span>
};


// .state_icon.tour-no { // 여행취소
//     color: #f32121;
//     border: 1px solid #f32121;
// }
// .state_icon.tour-ok { //출발확정
//     color: #2196F3;
//     border: 1px solid #2196F3;
// }
// .state_icon.tour-yes { // 출발미확정
//     color: #005394;
//     border: 1px solid #005394;
// }
// .state_icon.plainning-no { //기획반려
//     color: #f38721;
//     border: 1px solid #f38721;
// }
// .state_icon.plainning-yes { // 기획요청
//     color: #059600;
//     border: 1px solid #059600;
// }
// .state_icon.plainning-else { // 기획요청
//     color: #059600;
//     border: 1px solid #059600;
// }