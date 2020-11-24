import { MasterLayout } from 'layout/MasterLayout';
import React from 'react';

interface IProp { }

export const MsIndex: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in basket_box">
            <h4>MASTER</h4>
            <div className="paper_div">
                <div className="top_info">
                    <ul>
                        <li>장바구니 상품은 최대 30일간 저장됩니다.</li>
                        <li>가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.</li>
                    </ul>
                </div>


            </div>
        </div>
     
    </MasterLayout>
};

export default MsIndex;