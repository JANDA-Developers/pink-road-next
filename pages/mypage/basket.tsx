import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Basket } from '../../components/basket/Basket';
import { BasketModal } from '../../components/basketModal/BasketModal';
import { IUseBasket, useBasket } from '../../hook/useBasket';
import { useProductList } from '../../hook/useProduct';
import { useUpdate } from '../../hook/useUpdater';
import { MypageLayout } from '../../layout/MypageLayout';
import { Fproduct } from '../../types/api';
import { BG } from '../../types/const';
import { autoComma } from '../../utils/formatter';
import isEmpty from '../../utils/isEmpty';
import { arraySum } from '../../utils/math';
import { openModal } from '../../utils/popUp';
import { getTypeTextOfProduct } from '../../utils/product';
import { getBracket, getTotalCount, IBasketItem, removeBracket, removeItem } from '../../utils/Storage';

interface IProp {
    context: IUseBasket
}

export const MyPageBasket: React.FC<IProp> = ({ context }) => {
    const { items, totalPrice, updateComponent } = context;
    const [popUpProduct, setPopProduct] = useState<Fproduct & IBasketItem>();
    const [selectedIds, setSelecteds] = useState<string[]>([]);

    const handleOrder = () => {
        // 결제페이지로 보내버림 ㄱ
    }


    return <MypageLayout>
        <div className="in baskebt_box">
            <h4>장바구니</h4>
            <div className="paper_div">
                <div className="top_info">
                    <ul>
                        <li>장바구니 상품은 최대 30일간 저장됩니다.</li>
                        <li>가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.</li>
                    </ul>
                </div>
                <Basket
                    items={items}
                    updateComponent={updateComponent}
                    Buttons={
                        <div className="baket_btn">
                            <div className="left">
                                <button className="btn">쇼핑 계속하기</button>
                                <button onClick={handleOrder} className="btn orders">주문하기</button>
                            </div>
                        </div>
                    }
                />
            </div>

        </div>
    </MypageLayout>
};

export const MyPageBasketWrap = () => {
    const basketHook = useBasket();
    const context: IUseBasket = basketHook;
    return <MyPageBasket context={context} />
}

export default MyPageBasketWrap;