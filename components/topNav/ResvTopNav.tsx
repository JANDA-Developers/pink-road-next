import Link from 'next/link';
import React from 'react';

interface IProp { }

export const ResvTopNav: React.FC<IProp> = () => {
    return <div className="tab-nav">
        <ul>
            <li><Link href="/master/reservation"><a>예약·결제관리</a></Link></li>
            <li><Link href="/master/reservation/reservation1-2"><a>취소·환불관리</a></Link></li>
            {/* <li className="on"><Link href="/master/reservation/reservation1-4"><a>예약수기등록관리</a></Link></li> */}
        </ul>
    </div>;
};

