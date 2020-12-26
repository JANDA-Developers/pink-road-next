import React from 'react';
import { RatingStars } from 'components/common/RatingStars';

interface IProp {
}

export const GoodsListAPI: React.FC<IProp> = () => {
  return <ul className="list_ul line4">
    <li className="list_in">
      <div className="img" style={{ backgroundImage: 'url(/its/store_01.jpg' }}>상품이미지</div>
      <div className="box">
        <div className="category"><span>당일여행</span></div>
        <div className="title">꽃길만 걸으실 분들을 모집합니다.</div>
        <div className="bottom_txt">
          <div className="tag2">
            <span>#당일여행</span>
            <span>#버스투어</span>
            <span>#부산근교</span>
          </div>
          <RatingStars />
          <div className="cash"><strong>70,000</strong>원</div>
        </div>
      </div>
    </li>
    <li className="list_in">
      <div className="img" style={{ backgroundImage: 'url(/its/store_01.jpg' }}>상품이미지</div>
      <div className="box">
        <div className="category"><span>당일여행</span></div>
        <div className="title">진해로 소풍 가실분들 모집중</div>
        <div className="bottom_txt">
          <div className="tag2">
            <span>#뚜벅이여행</span>
            <span>#소풍</span>
            <span>#진해</span>
          </div>
          <RatingStars />
          <div className="cash"><strong>30,000</strong>원</div>
        </div>
      </div>
    </li>
    <li className="list_in">
      <div className="img" style={{ backgroundImage: 'url(/its/store_01.jpg' }}>상품이미지</div>
      <div className="box">
        <div className="category"><span>1박2일</span></div>
        <div className="title">제주도 꽃구경 가실분?!</div>
        <div className="bottom_txt">
          <div className="tag2">
            <span>#1박2일</span>
            <span>#제주도</span>
            <span>#꽃놀이</span>
          </div>
          <RatingStars />
          <div className="cash"><strong>230,000</strong>원</div>
        </div>
      </div>
    </li>
    <li className="list_in">
      <div className="img" style={{ backgroundImage: 'url(/its/store_01.jpg' }}>상품이미지</div>
      <div className="box">
        <div className="category"><span>1박2일</span></div>
        <div className="title">양떼목장으로 떠나요~!!</div>
        <div className="bottom_txt">
          <div className="tag2">
            <span>#1박2일</span>
            <span>#버스관광</span>
            <span>#평창</span>
          </div>
          <RatingStars />
          <div className="cash"><strong>250,000</strong>원</div>
        </div>
      </div>
    </li>
  </ul>;
};
