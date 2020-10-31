import React from 'react';

interface IProp {
    onClickImg: () => void;
}

export const PhotoView: React.FC<IProp> = ({ onClickImg }) => {
    return <li className="list_in">
        <div
            className="img"
            onClick={onClickImg}
            style={{ backgroundImage: "url(/src/img/detail_img01.jpg)" }}
        >
            사진이미지
        </div>;
        <div className="title">더운날 수목원으로 오세요~!!</div>
        <div className="txt">더운 여름에는 우거진 산림으로 이해 산듯한 산바람이 불어오는 수목원으로 떠나세요. 청명한 새소리와 졸졸 흐르는 계곡물만으로 더위가 한풀 꺽이는듯합니다.</div>
    </li>;
};