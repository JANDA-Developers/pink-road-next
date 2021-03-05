import Link from 'next/link';
import React from 'react';
import { checkOn } from '../topNav/MasterTopNav';

interface IProp { }

export const PolicyTopNav: React.FC<IProp> = () => {
    return <ul className="subtop_nav">
        <li className={checkOn("/member/rule", true)}><Link href="/member/rule"><a>이용약관</a></Link></li>
        <li className={checkOn("/member/privacy-policy", true)}><Link href="/member/privacy-policy"><a>개인정보처리방침</a></Link></li>
        <li className={checkOn("/member/kr-terms", true)}><Link href="/member/kr-terms"><a>국내여행약관</a></Link></li>
        <li className={checkOn("/member/refund-policy", true)}><Link href="/member/refund-policy"><a>취소 및 환불 정책</a></Link></li>
    </ul>
};
