import { IUseTourData } from "../hook/useTourWrite";
import { generateRandomStringCode } from "./codeGenerator";
import { Storage, TStoreKeys } from "./Storage";

interface BaseItem {
    _id: string
    version: number;
    pickupAt: Date
}

export class LocalItemStorage<Item extends BaseItem> {

    public key: TStoreKeys;
    public version = 2;

    constructor(key:TStoreKeys) {
        this.key = key;
    }
    
    getItems() {
        return Storage?.getLocalObj<Item[]>(this.key, []) || [];
    }


    deleteExpireItem() {
        const bracket = this.getItems();
        this.saveItems(bracket || []);
    }

    removeItems() {
        return localStorage.removeItem(this.key);
    }

    haveItem(_id: string) {
        const products = this.getItems() || []
        return !!products.find(prod => prod._id === _id)
    }


    overrideItem(_id: string, product: Partial<Item>) {
        const products = this.getItems() || []
        const targetIndex = products.findIndex(prod => prod._id === _id);
        if (targetIndex === -1) throw Error(`these is no item ${_id} in bracket`);
        products[targetIndex] = {
            ...products[targetIndex],
            ...product
        }

        this.saveItems(products);
    }

    removeItem(_id: string) {
        const products = this.getItems() || []
        const targetIndex = products.findIndex(prod => prod._id === _id);
        products.splice(targetIndex, 1);
        this.saveItems(products);
    }

    addItem(_product: Partial<Item>) {
        const product = _product as Item
        if(!product._id) product._id = generateRandomStringCode();
        product.version = this.version
        product.pickupAt = new Date();

        const products = this.getItems() || []
        const duplicated = products.findIndex(p => p._id === product._id);
        let updateProducts: Item[] = [];

        if (duplicated !== -1) {
            updateProducts.splice(duplicated, 1, product);
        } else 
            updateProducts = [product, ...products];

        this.saveItems(updateProducts);
    }

    getItem(_id: string)  {
        const products = this.getItems() || []
        if (!this.haveItem(_id)) throw Error(`these is no item ${_id} in bracket`);
        return products.find((prod) => prod._id === _id)!;
    }

    saveItems(products: Item[]) {
        products.forEach(p => { p.version = this.version });
        Storage?.saveLocal(this.key, products)
    }


    bracketVergionChange = () => {
        const products = this.getItems();
        if (products && products.find(prod => prod.version !== this.version)) {
            this.removeItems();
        }
    }

    getItemCount(): number  {
        const brakcet = this.getItems();
        return brakcet?.length || 0
    }
}


export interface IProductTemp extends IUseTourData, BaseItem {
}

export const ProductTempBoard = new LocalItemStorage<IProductTemp>("productTempBoard");

