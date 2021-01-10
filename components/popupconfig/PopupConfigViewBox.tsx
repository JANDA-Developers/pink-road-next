import React, { useState } from 'react';
import { IPopup, PopupBox, Tpos, Tszie } from './PopupBox';




interface IProp {
    views: IPopup[]
    setViews: (views: IPopup[]) => void;
}

//이 컴포넌트의 역할은 무엇인가요? 
//이 컴포넌트는 위치를 그려주고  좌표값을 계산하고 상위로 돌려줌
//상대좌표는 어떻게 찾지? 바로 hook으로 
export const PopupConfigViewBox: React.FC<IProp> = ({ views, setViews }) => {

    const handleMove = (index: number) => (pos: Tpos) => {
        const target = views[index];
        target.left = pos.x;
        target.top = pos.y;
        setViews([...views]);
    }

    const handleResize = (index: number) => (size: Tszie) => {
        const target = views[index];
        target.width = size.width;
        target.height = size.height;
        if (size.height !== undefined && size.width !== undefined) {
            setViews([...views]);
        }
    }
    //모바일에서는 항상 가득차게 나오게 그리고
    // 모바일일때 끄기 옵션 


    return <div style={{ width: "500px", height: "500px", border: "1px solid red" }} className="hang_view">
        {views.map((view, index) =>
            <PopupBox key={index + "PopUpBox"} {...view} onMove={handleMove(index)} onResize={handleResize(index)} />
        )}
    </div>;
};


const HeadDeco = <div className="head">
    <ul className="top">
        <li><i className="flaticon-multiply"></i></li>
    </ul>
    <div className="bottomnav">
        <div className="tap"></div>
        <div className="input">
            <i className="flaticon-menu"></i>
            <i className="flaticon-menu-1"></i>
            <span></span>
        </div>
    </div>
</div>
