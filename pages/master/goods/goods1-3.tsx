import { MasterLayout } from 'layout/MasterLayout';
import { Paginater } from 'components/common/Paginator';
import CalendarIcon from 'components/common/icon/CalendarIcon';
import React from 'react';
import Link from "next/link";
import ReactTooltip from 'react-tooltip';

interface IProp { }

export const MsGoodsTerms: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in ">
            <h4>상품관리</h4>
            <div className="in_content">
                <div className="tab-nav">
                    <ul>
                        <li><Link href="/master/goods"><a>상품관리</a></Link></li>
                        <li><Link href="/master/goods/goods1-2"><a>카테고리설정</a></Link></li>
                    </ul>
                </div>
                <div className="con goods2">


                </div>
            </div>



        </div>
    </MasterLayout >
};

export default MsGoodsTerms;