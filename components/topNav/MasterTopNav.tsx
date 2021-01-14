import Link from 'next/link';
import React from 'react';

interface IProp { }

const check = (key: string) => window.location.pathname.includes(key);
const checkOn = (key: string) => check(key) ? "on" : ""

export const ResvTopNav: React.FC<IProp> = () => {
    return <div className="tab-nav">
        <ul>
            <li className={checkOn("reservation")}><Link href="/master/reservation"><a>예약·결제관리</a></Link></li>
            <li className={checkOn("reservation1-2")}><Link href="/master/reservation/reservation1-2"><a>취소·환불관리</a></Link></li>
            {/* <li className="on"><Link href="/master/reservation/reservation1-4"><a>예약수기등록관리</a></Link></li> */}
        </ul>
    </div>;
};

export const HomepageTopNav = () => {
    return <div className="tab-nav">
        <ul>
            {/* <li><Link href="/master/homepage"><a>기본설정</a></Link></li> */}
            <li className={checkOn("homepage1-2")}><Link href="/master/homepage/homepage1-2"><a>SMS설정</a></Link></li>
            {/* <li><Link href="/master/homepage/homepage1-3"><a>카카오비즈톡</a></Link></li> */}
            <li className={checkOn("homepage1-4")}><Link href="/master/homepage/homepage1-4"><a>약관설정</a></Link></li>
            <li className={checkOn("homepage1-5")}><Link href="/master/homepage/homepage1-5"><a>게시판설정</a></Link></li>
            <li className={checkOn("homepage1-6")}><Link href="/master/homepage/homepage1-6"><a>정산설정</a></Link></li>
        </ul>
    </div>
}