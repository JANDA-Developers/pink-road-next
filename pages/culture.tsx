import { Paginater } from 'components/common/Paginator';
import SearchMini from 'components/common/SearchMini';
import SortSelect from 'components/common/SortMethod';
import { ViewCount } from 'components/common/ViewCount';
import { PhotoView } from 'components/news/PhotoView';
import SubTopNav from 'layout/components/SubTop';
import React, { useState } from 'react';
import { ISet } from 'types/interface';
import { LineView } from '../components/news/LineView';

export enum NewsTypes {
    "tour" = "tour",
    "culture" = "culture",
    "news" = "news"
}

interface IProp {
    type: NewsTypes;
    search: string;
    setSearch: ISet<string>
}

export const Culture: React.FC<IProp> = ({ type, search, setSearch }) => {

    const [view, setView] = useState<"line" | "gall">("line");

    return <div>
        <div className="top_visual">
            <div
                className="sub_header sub_bg"
                style={{ backgroundImage: `url(/img/work_top_bg2.jpg)` }}
            >
                <div className="w1200">
                    <h2 className="title">문화이야기</h2>
                    <p className="text">지금 여행을 떠나세요~!~~!!!!!</p>
                </div>
            </div>
            <div className="header_nav">
                <ul>
                    <li className="home">
                        <a href="/index"></a>
                    </li>
                    <li className="homedeps1">News</li>
                    <li className="homedeps2">
                        <a href="/">문화이야기</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="culture_box w1200">
            <div id="sub_tap_nav" className="subtop_nav">
                <ul>
                    <li className={type === NewsTypes.tour ? "on" : undefined}><a href={"/tourstory"}>여행이야기</a></li>
                    <li className={type === NewsTypes.culture ? "on" : undefined}><a href={"/culture"}>문화이야기</a></li>
                    <li className={type === NewsTypes.news ? "on" : undefined}><a href={"/news"}>언론보도</a></li>
                </ul>
            </div>
            <div className="alignment">
                <div className="left_div"><span className="infotxt">총 <strong>22,222</strong>개</span></div>
                <div className="right_div">
                    <SortSelect />
                    <ViewCount value={10} onChange={() => { }} />
                </div>
            </div>
            <div>준비중</div>
        </div>

    </div>
}

export default Culture