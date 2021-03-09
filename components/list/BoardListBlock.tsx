import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { BoardList_BoardList_data, BoardType } from '../../types/api';
import { BG } from '../../types/const';

interface IProp {
    board: BoardList_BoardList_data
}

export const BoardListBlock: React.FC<IProp> = ({ board }) => {
    const { _id, title, subTitle, thumb, keyWards, boardType } = board;
    const router = useRouter();

    const getPath = () => {
        if (boardType === BoardType.ANNOUNCE) return "announce";
        if (boardType === BoardType.News) return "news";
        if (boardType === BoardType.PORTFOLIO) return "portfolio";
        if (boardType === BoardType.PRODUCT) return "tour";
        if (boardType === BoardType.QNA) return "qna";
        if (boardType === BoardType.QUESTION) return "question";
    }

    const link = `/${getPath()}/view/${_id}`;

    // return <li className="list_in">
    //     <div onClick={() => {
    //         router.push(link)
    //     }} style={BG(thumb?.uri || "")} className="img" />
    //     <div className="txt1">
    //         <div className="title"><a href={link}>{title}</a></div>
    //         <div className="subtitle">
    //             {subTitle}
    //         </div>
    //         {/* <div className="cash"><strong>{autoComma(product.adult_price)}</strong>원</div> */}
    //     </div>
    //     <div className="txt2">
    //         {/* <span>장소 : {product.address}</span>
    //         <span>모집인원 : {product.bookingCount}/{product.maxMember}</span>
    //         <span>기간 : 당일체험</span>
    //         <Link href={"/tour/view/" + product._id}>
    //             <span className="btn">바로가기</span>
    //         </Link> */}
    //     </div>
    // </li>;

    return <li className="list_in" onClick={() => { router.push(link) }}>
        <div
            className="textbox__img"
            style={BG(thumb?.uri || "")}
        />
        <div className="textbox__01">
            <div className="day">[ 2020-33-33 ]</div>
            <div className="title">{title}</div>
            <div className="txt">{subTitle}</div>
            <div className="keyWards">{keyWards}</div>

        </div>
        <div className="textbox__02">
            <span>장소 : 부산역앞</span>
            <span>모집인원 : 22/50</span>
            <span>기간 : 당일체험</span>
        </div>
    </li>
};
