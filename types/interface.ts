import { QueryHookOptions } from "@apollo/client";
import { CSSProperties, Dispatch } from "react";
import { ListInitOptions } from "../hook/useListQuery";
import {  portfolioFindById_PortfolioFindById_data, productFindById_ProductFindById_data, productFindById_ProductFindById_data_itinerary, productList_ProductList_data, productList_ProductList_page} from "../types/api";

export interface Iitineraries extends productFindById_ProductFindById_data_itinerary {}
export interface IproductFindById  extends productFindById_ProductFindById_data {}
export interface IProduct extends productList_ProductList_data { };
export interface IPortfolio extends portfolioFindById_PortfolioFindById_data {};
export interface IPageInfo extends  productList_ProductList_page {}
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


export type TPageKeys = "site-info" | "main" | "portfolio" | "tourMain"


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


export type E_INPUT = React.ChangeEvent<HTMLInputElement>;


export interface IlistQueryInit<F,S,Q,V> extends Partial<ListInitOptions<F, S>> {
    options?: QueryHookOptions<Q, V>
}

export enum ReplaceString {
    //예약자명
    "BOOKERNMAE" = "[%%BOOKERNMAE%%]",
    //여행 년월일
    "TRAVEL_DATE_YMD" = "[%%TRAVEL_DATE_YMD%%]",
    //여행 총인원
    "PEOPLE" = "[%%PEOPLE%%]",
    //여행 총가격
    "PRICE" = "[%%PRICE%%]",
    //상품명
    "PORD_NMAE" = "[%%PORD_NAME%%]"
}
