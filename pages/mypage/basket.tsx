import dayjs from 'dayjs';
import React, { useState } from 'react';
import { BasketModal } from '../../components/basketModal/BasketModal';
import { useproductList } from '../../hook/useProductList';
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
    products: Fproduct[];
    getLoading: boolean;
}

export const MyPageBasket: React.FC<IProp> = ({ getLoading, products }) => {
    const [popUpProduct, setPopProduct] = useState<Fproduct & IBasketItem>();
    const { updateComponent } = useUpdate();
    const [selectedIds, setSelecteds] = useState<string[]>([]);

    const _items = getBracket() || [];


    const removeUnMatchItem = (id: string) => {
        alert("unExisst id catch")
        removeItem(id);
        updateComponent();
    }

    const items = getLoading ? [] : _items.map(item => {
        const product = products?.find(p => p._id === item._id);
        if (!product)
            removeUnMatchItem(item._id);
        return Object.assign(item, product);
    })

    const allIds = items.map(i => i._id);

    const totalPrice = arraySum(items.map(item => item.price));
    const priceLines = items.map(item => autoComma(item.price)).join(" + ");

    const handleModify = (product: Fproduct & IBasketItem) => () => {
        setPopProduct(product);
        openModal("popup_bg_mini")()
    }

    const toggleCheck = (id: string) => () => {
        const index = selectedIds.findIndex(_id => id === _id);
        if (index !== -1) {
            selectedIds.splice(index, 1)
            setSelecteds([...selectedIds]);
        } else {
            setSelecteds([...selectedIds, id]);
        }
    }

    const handleSelectAll = () => {
        setSelecteds([...allIds]);
    }
    const handleCancelAll = () => {
        setSelecteds([]);
    }

    const handleDeleteSelects = () => {
        selectedIds.forEach((id) => {
            removeItem(id);
        })
        updateComponent();
    }

    const handleDeleteAll = () => {
        if (confirm("정말로 장바구니 내역을 초기화 하시겠습니까?")) {
            removeBracket()
            updateComponent()
        }
    }

    const handleTooggleAll = () => {
        if (isEmpty(selectedIds)) {
            handleSelectAll();
        } else {
            handleCancelAll();
        }
    }


    const handleOrder = () => {
        // 지금은 통일하기 힘듬 그냥 ㄱ (정리 되어야 할수 있음). => 결제용 모달이 생겨야할듯
        // CreateBooking 하면됨.

        // PC 플로우
        //1 어쓰를 받아옴
        //2 결제창을 뛰움
        //3 결제를 완료함
        //4 결제완료 내역을 서버로 전송
    }

    const isCheckedAll = items.length === selectedIds.length;

    return <MypageLayout>
        <div className="in basket_box">
            <h4>장바구니</h4>
            <div className="paper_div">
                <div className="top_info">
                    <ul>
                        <li>장바구니 상품은 최대 30일간 저장됩니다.</li>
                        <li>가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.</li>
                    </ul>
                </div>
                <div className="basket_list">
                    <div className="th">
                        <div className="t01">
                            <span className="checkbox">
                                <input onClick={handleTooggleAll} checked={isCheckedAll} type="checkbox" name="agree" id="agree0" title="전체선택" />
                                <label htmlFor="agree0" />
                            </span>
                        </div>
                        <div className="t02">상품정보</div>
                        <div className="t03">옵션</div>
                        <div className="t04">상품금액</div>
                        <div className="t05">상태</div>
                    </div>
                    {getLoading || items.map(item =>
                        <div key={item._id} className="td">
                            <div className="t01">
                                <span className="checkbox">
                                    <input checked={selectedIds.includes(item._id)} onChange={toggleCheck(item._id)} type="checkbox" name="agree" id="agree1" title="개별선택" />
                                    <label htmlFor="agree1" />
                                </span>
                            </div>
                            <div className="t02">
                                <div className="img" style={BG(item.images?.[0]?.uri)}></div>
                                <div className="right">
                                    <div className="ct">{item.category?.label}</div><div className="code">{item.code}</div>
                                    <div className="title"><a href="/">{item.title}</a></div>
                                    <div className="subtitle">{item.subTitle}</div>
                                </div>
                                <span className="del">
                                    <img src="/img/svg/del.svg" alt="삭제" className="svg_del" />
                                    <button />
                                </span>
                            </div>
                            <div className="t03">
                                <div className="day">출발일 : <strong>{dayjs(item.startDate).format("MM.DD (W)")}</strong></div>
                                <div className="start_where">출발장소 : {item.startPoint}</div>
                                <div className="tour_mode">여행방식 :{getTypeTextOfProduct(item)}</div>
                                <div className="men">선택인원 : <strong>총 {getTotalCount(item.count)}명</strong>{` - 성인${item.count.adult}, 소인${item.count.kids}, 유아${item.count.baby}`}</div>
                                <button onClick={handleModify(item)} className="btn option_btn">조건 추가/변경</button>
                            </div>
                            <div className="t04">
                                <div className="money"><strong>{autoComma(item.price)} 원</strong></div>
                                <button className="btn hit">주문하기</button>
                            </div>
                            <div className="t05">
                                <div className="day_cunt">출발 D-{item.Dday}</div>
                                <div className="men_cunt">모집 인원 : <strong>{item.minMember}</strong> / {item.maxMember}</div>
                                <div className="state onsale">{item.status}</div>
                            </div>

                        </div>
                    )}

                    <div className="baket_bottom">
                        <div className="sum01"><strong>합계금액</strong></div>
                        <div className="sum02">상품금액<strong>{autoComma(totalPrice)}원</strong></div>
                        <div className="sum03">=</div>
                        <div className="sum04"><strong>{priceLines}원</strong></div>
                    </div>

                    <div className="baket_check">
                        <div className="left">
                            <button onClick={handleSelectAll} className="btn"><input type="checkbox" />전체선택</button>
                            <button onClick={handleDeleteSelects} className="btn">선택삭제</button>
                            <button onClick={handleDeleteAll} className="btn">전체삭제</button>
                        </div>

                    </div>
                    <div className="baket_btn">
                        <div className="left">
                            <button className="btn">쇼핑 계속하기</button>
                            <button onClick={handleOrder} className="btn orders">주문하기</button>
                        </div>

                    </div>
                </div>
            </div>
            {/* popup은 언제나 class fade와 함께 있어야 한다. */}
            {popUpProduct && <BasketModal
                key={popUpProduct._id}
                product={popUpProduct}
                updateComponent={updateComponent}
            />}
            <div className="fade"></div>
        </div>
    </MypageLayout>
};

export const MyPageBasketWrap = () => {
    const items = getBracket() || [];
    const ids = items.map(i => i._id).filter(item => item);
    const { items: products, getLoading } = useproductList({
        initialFilter: {
            _id_in: ids
        }
    })

    return <MyPageBasket products={products} getLoading={getLoading} />
}

export default MyPageBasketWrap;