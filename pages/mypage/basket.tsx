import React from 'react';
import { MypageLayout } from '../../layout/MypageLayout';

interface IProp { }

export const MyPageBasket: React.FC<IProp> = () => {
    return <div className="in membership_div">
        <h4>장바구니</h4>
        <div className="paper_div">
            <div className="mainbox">
                <strong>회원탈퇴를 원하시나요?</strong>
                <p>한번 탈퇴를 하시면 같은 아이디로 가입이 불가능합니다. </p>
                <div className="fin"><span className="btn">메이전시 탈퇴하기</span></div>
            </div>
        </div>
    </div>
};

export default MyPageBasket;