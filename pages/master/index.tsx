import { MasterLayout } from 'layout/MasterLayout';
import React from 'react';

interface IProp { }

export const MsIndex: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in ">
            <div className="main_paper_div">
                <div className="hang div01">
                    <h5>TODAY</h5>
                    <div>
                        <strong>234</strong>
                        <span>접속자</span>
                    </div>
                    <div>
                        <strong>3</strong>
                        <span>신규가입자</span>
                    </div>
                    <div>
                        <strong>32</strong>
                        <span>정산신청</span>
                    </div>
                    <div>
                        <strong>32</strong>
                        <span>신규예약</span>
                    </div>
                </div>
                <div className="hang div02">
                    <h5>바로가기</h5>
                    <ul>
                        <li><a href="/">예약관리시스템</a></li>
                        <li><a href="/">잔다 채널톡</a></li>
                    </ul>
                </div>
                <div className="hang div03">
                    <h5>신규 게시글</h5>

                </div>
                <div className="hang div04">
                    <h5>TODAY 알림</h5>
                </div>
            </div>
        </div>

    </MasterLayout>
};

export default MsIndex;