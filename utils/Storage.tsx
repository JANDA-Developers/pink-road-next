import { IHumanCount, IProduct } from "types/interface";

export type LocalManagerConfig = {
    readonly storage: 'localStorage' | 'sessionStorage';
};


export class LocalManager<T extends string> {
    storage

    constructor(config: LocalManagerConfig) {
        if (typeof window === "undefined") return;
        if (config.storage === 'sessionStorage')
            this.storage = sessionStorage;
        else this.storage = localStorage;
    }

    saveLocal(key: T, value: string | number | Object): void {
        let _value = value;

        if (typeof value === 'number') {
            _value = value.toString();
        }

        if (typeof value === 'object') {
            try {
                _value = JSON.stringify(value);
            } catch (e) {
                this.storage?.removeItem(key);
                console.error('LocalManager::saveLocal:stringFyFailed');
                console.error(e);
            }
        }

        if (typeof _value === 'string') this.storage?.setItem(key, _value);
    }

    getLocalObj<O>(key: T, or?: O): O | undefined {
        const value = this.storage?.getItem(key) || '';
        let result = or;

        try {
            result = JSON.parse(value);
        } catch (e) {
            this.storage?.removeItem(key);
            console.error('LocalManager::getLocalOj:parseFailed');
            console.error(e);
        }

        return result;
    }

    getLocal(key: T, or: string): string {
        const item = this.storage?.getItem(key) || '';
        return item || or;
    }

    getLocalNum(key: T, or: number): number {
        const item = this.storage?.getItem(key) || '';
        return parseInt(item) || or;
    }
}


type TStoreKeys = "write" | "bracket" | "saveid" | "saveSession?" | "saveId?" | "portfolioWrite" | "jwt";

export let Storage: LocalManager<TStoreKeys> | null = null;

export const initStorage = () => {
    Storage = new LocalManager<TStoreKeys>({
        storage: "localStorage"
    });
}
Storage = new LocalManager<TStoreKeys>({
    storage: "localStorage"
});



type TItem = {
    productId: string;
    name: string;
    price: number;
    count: IHumanCount[]
}



export const getBracket = () => {
    return Storage?.getLocalObj<TItem[]>("bracket", []);
}

export const haveItem = (_id: string): boolean => {
    const products = getBracket() || []
    return !!products.find(prod => prod.productId === _id)
}

export const humanCountToCount = (count: IHumanCount): TCount[] => {
    return [{ key: "kid", label: "성인", value: count.adult },
    { key: "kid", label: "소아", value: count.kids },
    { key: "baby", label: "유아", value: count.baby }]
}


export const countToHumanCount = (count: TCount[]): IHumanCount => {
    return {
        adult: count[0].value,
        kids: count[1].value,
        baby: count[2].value,
    }
}


export const overrideItem = (_id: string, product: Partial<TItem>) => {
    const products = getBracket() || []
    const targetIndex = products.findIndex(prod => prod.productId === _id);
    if (targetIndex === -1) throw Error(`these is no item ${_id} in bracket`);
    products[targetIndex] = {
        ...products[targetIndex],
        ...product
    }

    saveBracket(products);
}

export const removeItem = (_id: string) => {
    const products = getBracket() || []
    const targetIndex = products.findIndex(prod => prod.productId === _id);
    products.splice(targetIndex, 1);
    saveBracket(products);
}

export const addItem = (product) => {
    const products = getBracket() || []
    const updateProducts: TItem[] = [product, ...products];
    saveBracket(updateProducts);
}

export const getItem = (_id: string) => {
    const products = getBracket() || []
    if (!haveItem(_id)) throw Error(`these is no item ${_id} in bracket`);
    return products.find((prod) => prod.productId === _id)!;
}

export const saveBracket = (products: TItem[]) => {
    Storage?.saveLocal("bracket", products)
}




