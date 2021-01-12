import Link from 'next/link';
import React from 'react';
import { generateSearchLink } from '../../pages/search';
import { bookingList_BookingList_data, Fbooking, ProductStatus } from '../../types/api';
import { BG } from '../../types/const';
import { bookingStatus } from '../../utils/enumToKr';
import { autoComma } from '../../utils/formatter';
import { getTypeTextOfProduct } from '../../utils/product';

interface IProp {
    item: bookingList_BookingList_data
}

export const PurChasedItem: React.FC<IProp> = ({ item }) => {
    const { product, bookingPrice, _id, status, adultCount, babyCount, kidCount } = item;
    const { images, title, keyWards, status: productStauts } = product;
    const img = images?.[0]?.uri || "";

    return <li className="list_in">
        <div
            className="img"
            onClick={() => {
                //상품 으로 이동
            }}
            style={BG(img)}
        >
            상품이미지
    </div>
        <div className="txt1">
            <div className="title">
                <a href="/">{title}</a>
            </div>
            <div className="tag">
                {keyWards?.map((keyward, index) =>
                    <Link href={generateSearchLink({ keyward })} key={_id + index + "keyward"}><a>#{keyward}</a></Link>
                )}
            </div>
            <div className="data">
                <div className="cash">
                    <strong>{autoComma(bookingPrice)}</strong>원
                </div>
            </div>
            <div className="bottom_info">
                {status && <span className="ok">{bookingStatus(status)}</span>}
                {productStauts === ProductStatus.EXPIRED && <span className="end">사용완료</span>}
            </div>
        </div>
        <div className="txt2">
            {/* 투두! */}
            <span>결제일 : 2020.01.16</span>
            <span>예약일 : 2020.01.16</span>
            <span>집합장소 : {product.startPoint}</span>
            <span>여행방식 : {getTypeTextOfProduct(product.type, product.dateRange)}</span>
            <span>선택인원 : 성인{adultCount}, 소인{kidCount}, 유아{babyCount}</span>
            <span
                className="btn"
                onClick={() => {
                    document.getElementById('detail_box')!.style.display = 'block';
                    document.getElementById('fade')!.style.display = 'block'
                }}
            >
                결제 및 상세내역
        </span>
        </div>
    </li>;
};
