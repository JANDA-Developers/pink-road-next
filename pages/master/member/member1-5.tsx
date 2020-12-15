import { MasterLayout } from 'layout/MasterLayout';
import { Paginater } from 'components/common/Paginator';
import React from 'react';
import Link from "next/link";

interface IProp { }

export const MsMemberE: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in ">
            <h4>회원관리</h4>
            <div className="in_content">

                <div className="tab-nav">
                    <ul>
                        <li><Link href="/master/member"><a>개인회원</a></Link></li>
                        <li><Link href="/master/member/member1-2"><a>기업파트너 회원</a></Link></li>
                        <li><Link href="/master/member/member1-3"><a>개인파트너 회원</a></Link></li>
                        <li><Link href="/master/member/member1-4"><a>탈퇴회원</a></Link></li>
                    </ul>
                </div>


            </div>
        </div>
    </MasterLayout >
};

export default MsMemberE;