import React, { useContext } from "react";
import { useBasketCount } from "../../hook/useBasket";
import { AppContext } from "../../pages/_app";
import { Fproduct } from "../../types/api";
import { autoComma } from "../../utils/formatter";
import { closeModal } from "../../utils/popUp";
import { IBasketItem, overrideItem } from "../../utils/Storage";
import { TravlerControlTable } from "../bookingModal/TravelerControlTable";
import { Modal } from "../modal/Modal";

interface IProp {
    product?: Fproduct & IBasketItem;
    updateComponent: () => void;
}

const defaultCountAndPrice = {
    travelers: [],
    includeBooker: false,
    baby_price: 0,
    kids_price: 0,
    adult_price: 0,
    count: {
        adult: 0,
        baby: 0,
        kids: 0,
    },
};

export const BasketModal: React.FC<IProp> = ({ product, updateComponent }) => {
    const { isLogin, myProfile } = useContext(AppContext);
    const {
        includeBooker: defaultBookerInclude,
        travelers: defaultTravelers,
        baby_price,
        kids_price,
        adult_price,
        count: { adult, baby, kids },
    } = product || defaultCountAndPrice;
    product;
    const {
        count,
        handleCount,
        totalPrice,
        travelers,
        settravelers,
        bookerInclude,
        setBookerInclude,
    } = useBasketCount({
        baby_price,
        kids_price,
        adult_price,
        defaultBookerInclude,
        travelers: defaultTravelers,
        capacity: product ? product.maxMember - product.peopleCount : 0,
        defaultCount: {
            adult,
            baby,
            kids,
        },
    });
    const handleBracketSave = () => {
        overrideItem(product!._id, {
            count,
            travelers,
            price: totalPrice,
        });
        updateComponent();
        closeModal("#basketModal")();
    };

    return (
        <Modal
            title="조건 추가/변경"
            id="basketModal"
            className="popup_bg_mini peplelist__popup"
        >
            <div className="box">
                <table className="option_tb">
                    <tbody>
                        <tr>
                            <th>대인</th>
                            <td>
                                <strong>
                                    {autoComma(product?.adult_price)}
                                </strong>
                                원
                                <div className="Number__box">
                                    <span
                                        onClick={handleCount("adult", false)}
                                        className="left_btn"
                                    >
                                        <i className="flaticon-substract"></i>
                                    </span>
                                    <span className="number">
                                        {count.adult}
                                    </span>
                                    <span
                                        onClick={handleCount("adult", true)}
                                        className="right_btn"
                                    >
                                        <i className="flaticon-add"></i>
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>소인</th>
                            <td>
                                <strong>
                                    {autoComma(product?.kids_price)}
                                </strong>
                                원
                                <div className="Number__box">
                                    <span
                                        onClick={handleCount("kids", false)}
                                        className="left_btn"
                                    >
                                        <i className="flaticon-substract"></i>
                                    </span>
                                    <span className="number">{count.kids}</span>
                                    <span
                                        onClick={handleCount("kids", true)}
                                        className="right_btn"
                                    >
                                        <i className="flaticon-add"></i>
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>유아</th>
                            <td>
                                <strong>
                                    {autoComma(product?.baby_price)}
                                </strong>
                                원
                                <div className="Number__box">
                                    <span
                                        onClick={handleCount("baby", false)}
                                        className="left_btn"
                                    >
                                        <i className="flaticon-substract"></i>
                                    </span>
                                    <span className="number">{count.baby}</span>
                                    <span
                                        onClick={handleCount("baby", true)}
                                        className="right_btn"
                                    >
                                        <i className="flaticon-add"></i>
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="Chash__box mb10">
                    <table className="chash_tb">
                        <tbody>
                            <tr>
                                <th>총 금액</th>
                                <td>
                                    <strong>{autoComma(totalPrice)}</strong>원
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h4 className="mt15">실여행자정보</h4>
                <TravlerControlTable
                    className="travelerTableInModal"
                    adultCount={count.adult}
                    babyCount={count.baby}
                    bookerInclue={bookerInclude}
                    bookerName={myProfile?.name || ""}
                    bookerPhoneNumber={myProfile?.phoneNumber || ""}
                    totalCount={count.adult + count.baby + count.kids}
                    kidsCount={count.kids}
                    onChangetravelers={settravelers}
                    withIncludeBooker={isLogin}
                    onChnageBookerInclude={() => {
                        setBookerInclude(!bookerInclude);
                    }}
                    travelers={travelers}
                />
                <button onClick={handleBracketSave} className="btn medium w100">
                    변경하기
                </button>
            </div>
        </Modal>
    );
};
