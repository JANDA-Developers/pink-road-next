import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { generateSearchLink } from "../../pages/search[drepreacted]";
import { BoardList_BoardList_data, BoardType } from "../../types/api";
import { BG } from "../../types/const";
import { productStatus } from "../../utils/enumToKr";
import { autoComma } from "../../utils/formatter";
import { yyyymmdd } from "../../utils/yyyymmdd";

interface IProp {
    board: BoardList_BoardList_data;
}

function stripHtml(html: string) {
    let doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
}

export const BoardListBlock: React.FC<IProp> = ({ board }) => {
    const {
        _id,
        images,
        boardType,
        status,
        maxMember,
        adult_price,
        address,
        title,
        contents,
        thumb,
        keyWards,
        createdAt,
    } = board;
    const router = useRouter();

    const getPath = () => {
        if (boardType === BoardType.ANNOUNCE) return "announce";
        if (boardType === BoardType.News) return "news";
        if (boardType === BoardType.PORTFOLIO) return "portfolio";
        if (boardType === BoardType.PRODUCT) return "tour";
        if (boardType === BoardType.QNA) return "qna";
        if (boardType === BoardType.QUESTION) return "question";
    };

    const isProduct = boardType === BoardType.PRODUCT;

    const link = `/${getPath()}/view/${_id}`;
    const img = images?.[0]?.uri;
    const thumbImg = img || thumb?.uri;
    const toProd = () => {
        router.push(link);
    };

    return (
        <li className="list_in">
            {thumbImg && (
                <div
                    onClick={toProd}
                    className="textbox__img"
                    style={BG(thumbImg || "")}
                />
            )}
            <div className="textbox__01">
                <div className="textbox__01_top">
                    <div className="location">공지사항</div>
                    <div className="day">{yyyymmdd(createdAt)}</div>
                </div>

                <div onClick={toProd} className="title">
                    {title}
                </div>
                <div className="txt">
                    {stripHtml(contents).substr(0, 200)}...
                </div>
                <div className="tag">
                    {keyWards?.map((keyward, index) => (
                        <Link
                            href={generateSearchLink({ keyward })}
                            key={_id + index + "keyward"}
                        >
                            <a>#{keyward}</a>
                        </Link>
                    ))}
                </div>
                {isProduct && (
                    <div className="cash">
                        <strong>{autoComma(adult_price || 0)}</strong>원
                    </div>
                )}
            </div>
            {isProduct && (
                <div className="textbox__02">
                    <span>장소 : {address}</span>
                    <span>{productStatus(status as any)}</span>
                    {/* <span>모집인원 : {compeltePeopleCnt}/{maxMember}</span> */}
                    {/* <span>기간 : {dateRange}</span> */}
                </div>
            )}
        </li>
    );
};
