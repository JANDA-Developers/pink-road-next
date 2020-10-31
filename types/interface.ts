import { productFindById_ProductFindById_data, productFindById_ProductFindById_data_itineraries, productList_ProductList_data, productList_ProductList_page } from "../types/api";

export interface Iitineraries extends productFindById_ProductFindById_data_itineraries {}
export interface IProductFindById  extends productFindById_ProductFindById_data {}
export interface IProduct extends productList_ProductList_data { };
export interface IPageInfo extends  productList_ProductList_page {}
export interface ILi extends React.HTMLAttributes<HTMLLIElement> {
}


export type TCount = {
    name: string;
    value: number
}

export type TBracketItem = {
    id: string;
    name: string;
    price: number;
    count: TCount[]
}

export interface IHumanCount {
    adult: number;
    kids: number;
    baby: number;
}

export enum QStatus {
    "PROCESSING" = "PROCESSING",
    "DONE" = "DONE"
}