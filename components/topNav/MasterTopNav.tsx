import Link from 'next/link';
import React from 'react';

interface IProp { }

const check = (key: string, exact?: boolean) => {
    if (typeof window === "undefined") return false;
    const pathname = window.location.pathname;
    return exact ? pathname === key : pathname.includes(key);
}

const checkOn = (key: string, exact?: boolean) => check(key, exact) ? "on" : ""

export const ResvTopNav: React.FC<IProp> = () => {
    return <div className="tab-nav">
        <ul>
            <li className={checkOn("/master/reservation", true)}><Link href="/master/reservation"><a>예약·결제관리</a></Link></li>
            <li className={checkOn("reservation1-2")}><Link href="/master/reservation/reservation1-2"><a>취소·환불관리</a></Link></li>
            {/* <li className="on"><Link href="/master/reservation/reservation1-4"><a>예약수기등록관리</a></Link></li> */}
        </ul>
    </div>;
};

export const HomepageTopNav = () => {
    return <div className="tab-nav">
        <ul>
            <li className={checkOn("/master/homepage", true)}><Link href="/master/homepage"><a>기본설정</a></Link></li>
            <li className={checkOn("homepage1-2")}><Link href="/master/homepage/homepage1-2"><a>SMS설정</a></Link></li>
            {/* <li><Link href="/master/homepage/homepage1-3"><a>카카오비즈톡</a></Link></li> */}
            <li className={checkOn("homepage1-4")}><Link href="/master/homepage/homepage1-4"><a>약관설정</a></Link></li>
            <li className={checkOn("homepage1-5")}><Link href="/master/homepage/homepage1-5"><a>게시판설정</a></Link></li>
            <li className={checkOn("homepage1-6")}><Link href="/master/homepage/homepage1-6"><a>정산설정</a></Link></li>
        </ul>
    </div>
}

export const GoodsTopNav = () => {
    return <div className="tab-nav">
        <ul>
            <li className={checkOn("/master/goods", true)}><Link href="/master/goods"><a>상품관리</a></Link></li>
            <li className={checkOn("goods/goods1-3")}><Link href="/master/goods/goods1-3"><a>매출·정산관리</a></Link></li>
        </ul>
    </div>
}

export const MemberTopNav = () => {
    return <div className="tab-nav">
        <ul>
            <li className={checkOn("/master/member", true)}><Link href="/master/member"><a>개인회원</a></Link></li>
            <li className={checkOn("member1-2")}><Link href="/master/member/member1-2"><a>기업파트너 회원</a></Link></li>
            <li className={checkOn("member1-3")}><Link href="/master/member/member1-3"><a>개인파트너 회원</a></Link></li>
            <li className={checkOn("member1-4")}><Link href="/master/member/member1-4"><a>탈퇴회원</a></Link></li>
        </ul>
    </div>
}

export const DesignTopNav = () => {
    return <div className="tab-nav">
        <ul>
            <li className={checkOn("/master/design", true)}><Link href="/master/design"><a>기본설정</a></Link></li>
            <li className={checkOn("/master/design/design1-2")}><Link href="/master/design/design1-2"><a>배너관리</a></Link></li>
            <li className={checkOn("/master/design/design1-3")}><Link href="/master/design/design1-3"><a>팝업관리</a></Link></li>
            <li className={checkOn("/master/design/design1-4")}><Link href="/master/design/design1-4"><a>노출상품관리</a></Link></li>
        </ul>
    </div>
}
