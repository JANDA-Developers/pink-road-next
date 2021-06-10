import dayjs from "dayjs";
import { url } from "inspector";
import { useRouter } from "next/router";
import React from "react";
import { Fnews } from "../../types/api";
import { BG } from "../../types/const";
import { getSize } from "../../utils/pageEdit";

interface IProp {
    news: Fnews;
    index: number;
}

export const LineNewsView: React.FC<IProp> = ({ news, index }) => {
    const { title, author, createdAt, viewCount, thumb } = news;
    const router = useRouter();

    const handleToView = () => {
        router.push("/news/view/" + news._id);
    };

    return (
        <li onClick={handleToView}>
            <div className="td01">{index}</div>
            <div className="td02">
                <span className="img" style={BG(getSize(thumb.uri, 500))} />
            </div>
            <div className="td03">
                <span className="title">{title}</span>
                {/* <span className="id">{author?.name}</span> */}
                <span className="count">조회[{viewCount}]</span>
            </div>
            <div className="td04">
                {dayjs(createdAt).format("YYYY.MM.DD hh:mm")}
            </div>
        </li>
    );
};
