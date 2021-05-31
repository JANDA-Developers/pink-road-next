import { useEffect, useState } from "react";
import { moveToQuestionTap } from "../pages/tour/view/[id]";
import { AgeType, Fproduct, Ftraveler } from "../types/api";
import { DEFAULT_TRAVLER } from "../types/const";
import { IHumanCount } from "../types/interface";
import { arraySum } from "../utils/math";
import {
    bracketVergionChange,
    deleteExpireBracket,
    getBracket,
    IBasketItem,
    removeItem,
} from "../utils/Storage";
import { useProductList } from "./useProduct";
import { useUpdate } from "./useUpdater";

interface IPrices {
    baby_price: number;
    adult_price: number;
    kids_price: number;
    defaultCount?: IHumanCount;
    capacity?: number;
}

const DEFAULT_COUNT: IHumanCount = {
    adult: 0,
    baby: 0,
    kids: 0,
};

export const useBasketCount = (
    {
        adult_price = 0,
        baby_price = 0,
        kids_price = 0,
        defaultCount = DEFAULT_COUNT,
        capacity = 0,
    }: Partial<IPrices> = { adult_price: 0, baby_price: 0, kids_price: 0 }
) => {
    const [travelers, settravelers] = useState<Ftraveler[]>([]);
    const [count, setCount] = useState<IHumanCount>(defaultCount);
    const [totalPrice, setPrice] = useState(0);

    const handleCount = (key: keyof IHumanCount, isUp: boolean) => () => {
        const totalCount = count.adult + count.baby + count.kids;

        if (totalCount > 10 && isUp) {
            alert("10명 초과 예약은 고객센터로 별도 문의해주세요.");
            moveToQuestionTap();
            return;
        }

        let typeHuman = count[key];
        typeHuman = typeHuman + (isUp ? 1 : -1);
        if (typeHuman < 0) typeHuman = 0;

        if (isUp && capacity <= totalCount) {
            alert("상품의 최대 인원을 확인하세요.");
            return;
        }

        count[key] = typeHuman;

        setCount({ ...count });
    };

    useEffect(() => {
        const nexttravelers: Ftraveler[] = [];

        const genTravler = (count: number, type: AgeType) => {
            Array(count)
                .fill(null)
                .forEach((_, i) => {
                    const PrevTravlerData = travelers.filter(
                        (tv) => tv.ageType === type
                    )[i];
                    nexttravelers.push({
                        ...DEFAULT_TRAVLER,
                        ...PrevTravlerData,
                        ageType: type,
                    });
                });
        };

        genTravler(count.adult, AgeType.adult);
        genTravler(count.kids, AgeType.kid);
        genTravler(count.baby, AgeType.baby);
        settravelers(nexttravelers);

        const totalPrice =
            count.adult * adult_price +
            count.baby * baby_price +
            count.kids * kids_price;
        setPrice(totalPrice);
    }, [count]);

    return {
        travelers,
        settravelers,
        count,
        totalPrice,
        handleCount,
        setCount,
        setPrice,
    };
};

export interface IUseBasket {
    updateComponent: () => void;
    totalPrice: number;
    items: (IBasketItem & Fproduct)[];
    getLoading: boolean;
}
export const useBasket = () => {
    const { updateComponent } = useUpdate();

    const _items = getBracket() || [];
    const ids = _items.map((i) => i._id);

    const { items: products, getLoading } = useProductList({
        initialFilter: {
            _id_in: ids,
        },
    });

    const mappingItemWithProduct = (): any => {
        return _items
            .map((item, i) => {
                const product = products?.find((p) => p._id === item._id);
                if (!product) return null;
                return Object.assign(item, product);
            })
            .filter((item) => item);
    };

    const items: (IBasketItem & Fproduct)[] = getLoading
        ? []
        : mappingItemWithProduct();
    const totalPrice = arraySum(items.map((item, i) => item.price));

    useEffect(() => {
        deleteExpireBracket();
        bracketVergionChange();
    }, []);

    return { updateComponent, totalPrice, items, getLoading };
};
