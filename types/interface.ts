import { CSSProperties, Dispatch } from "react";
import {  portfolioFindById_PortfolioFindById_data, productFindById_productFindById_data, productFindById_productFindById_data_itinerary, productList_productList_data, productList_productList_page} from "../types/api";

export interface Iitineraries extends productFindById_productFindById_data_itinerary {}
export interface IproductFindById  extends productFindById_productFindById_data {}
export interface IProduct extends productList_productList_data { };
export interface IPortfolio extends portfolioFindById_PortfolioFindById_data {};
export interface IPageInfo extends  productList_productList_page {}
export interface ILi extends React.HTMLAttributes<HTMLLIElement> {
}
export declare type TElements = string | JSX.Element | JSX.Element[] | string[];
export interface IDiv extends React.HTMLAttributes<HTMLDivElement> {
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
export declare type ISet<T> = Dispatch<React.SetStateAction<T>>;


export type TPageKeys = "site-info" | "main" | "portfolio"


export type TLangs = "kr" | "en" | string
interface Foo {
    style?:CSSProperties,
}
interface TInfoCell extends Foo {
    [key:string]:any
}
export type TStieInfo = {
    [key:string]:TInfoCell
}

