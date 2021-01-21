import { useEffect, useState } from "react";
import { Fproduct } from "../types/api";
import { IHumanCount } from "../types/interface";
import { arraySum } from "../utils/math";
import { getBracket, IBasketItem, removeItem } from "../utils/Storage";
import { useProductList } from "./useProduct";
import { useUpdate } from "./useUpdater";


interface IPrices {
    baby_price: number
    adult_price: number
    kids_price: number
    defaultCount?: IHumanCount;
}

const DEFAULT_COUNT: IHumanCount = {
    adult: 0,
    baby: 0,
    kids: 0
}

export const useBasketCount = ({
    adult_price = 0,
    baby_price = 0,
    kids_price = 0,
    defaultCount = DEFAULT_COUNT
}: Partial<IPrices> = { adult_price: 0, baby_price: 0, kids_price: 0 }) => {
    const [count, setCount] = useState<IHumanCount>(defaultCount);
    const [totalPrice, setPrice] = useState(0);
    const handleCount = (key: keyof IHumanCount, isUp: boolean) => () => {
        let val = count[key];
        val = val + (isUp ? 1 : -1);
        if (val < 0) val = 0;
        count[key] = val;

        setCount({ ...count })
    }

    useEffect(() => {
        const totalPrice =
            (count.adult * adult_price) +
            (count.baby * baby_price) +
            (count.kids * kids_price);
        setPrice(totalPrice)
    }, [count])

    return { count, totalPrice, handleCount, setCount, setPrice }
}


export interface IUseBasket {
    updateComponent: () => void;
    totalPrice: number;
    items: (IBasketItem & Fproduct)[];
    getLoading: boolean
}
export const useBasket = () => {
    const { updateComponent } = useUpdate();

    const _items = getBracket() || [];
    const ids = _items.map(i => i._id);

    const { items: products, getLoading } = useProductList({
        initialFilter: {
            _id_in: ids
        }
    })

    const mappingItemWithProduct = (): any => {
        return _items.map(item => {
            const product = products?.find(p => p._id === item._id);
            if (!product)
                return null;
            return Object.assign(item, product);
        }).filter((item) => item);
    }

    const items: (IBasketItem & Fproduct)[] = getLoading ? [] : mappingItemWithProduct();
    const totalPrice = arraySum(items.map(item => item.price));
    return { updateComponent, totalPrice, items, getLoading }
}