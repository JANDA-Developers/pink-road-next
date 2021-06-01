import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { generateSearchLink } from "../../pages/search[drepreacted]";
import { Fproduct } from "../../types/api";
import { BG } from "../../types/const";
import { autoComma } from "../../utils/formatter";

interface IProp {
    product: Fproduct;
}

export const ProductListBlock: React.FC<IProp> = ({ product }) => {
    const router = useRouter();

    return (
        <li className="list_in">
            <div
                onClick={() => {
                    router.push(`/tour/view/${product._id}`);
                }}
                style={BG(product?.images?.[0]?.uri || "")}
                className="img"
            />
            <div className="txt1">
                <div className="title">
                    <Link href={`/tour/view/${product._id}/${product.slug}`}>
                        <a>{product.title}</a>
                    </Link>
                </div>
                <div className="subtitle">{product.subTitle}</div>
                <div className="tag">
                    {product.keyWards?.map((keyward, i) => (
                        <Link
                            key={i + "productKeywards"}
                            href={generateSearchLink({ keyward })}
                        >
                            <a key={product._id + i}>#{keyward}</a>
                        </Link>
                    ))}
                </div>
                <div className="cash">
                    <strong>{autoComma(product.adult_price)}</strong>원
                </div>
            </div>
            <div className="txt2">
                <span>지역 : {product.regionLabel}</span>
                <span>출발장소 : {product.startPoint}</span>
                {/* <span>
                    모집인원 : {product.peopleCount}/{product.maxMember}
                </span> */}
                <Link href={"/tour/view/" + product._id}>
                    <span className="btn">바로가기</span>
                </Link>
            </div>
        </li>
    );
};
