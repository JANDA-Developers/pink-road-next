import React from 'react';
import { MypageLayout } from '../../layout/MypageLayout';

interface IProp { }

export const Notification: React.FC<IProp> = () => {
    return <MypageLayout>
        <div className="in notification_box">
            <h4>알림</h4>
            <div className="paper_div">
                <div className="alignment">
                    <div className="left_div"></div>
                    <div className="right_div">
                        <div className="all_del">
                            <button className="btn">모두삭제</button>
                        </div>
                        <div className="re-set">
                            <button className="btn">새로고침</button>
                        </div>
                    </div>
                </div>

                <div className="notification_list">
                    <div className="date_fom">
                        <div className="ovj">
                            <span><i className="svg"><img src="/img/svg/inform_icon4.svg" alt="" /></i>오늘</span>
                        </div>
                        <div className="right">
                            <div className="hang">
                                <strong>[시스템알림]</strong>
                                <span>비밀번호가 변경이 완료 되었습니다. </span>
                                <div className="time">2시간전</div>
                                <span className="del">
                                    <img src="/img/svg/del.svg" alt="삭제" className="svg_del" />
                                    <button></button>
                                </span> 
                            </div>
                            <div className="hang">
                                <strong>[시스템알림]</strong>
                                <span>오늘 출발하는 상품이 <i>[3건]</i>이 있습니다. </span>
                                <div className="time">5시간전</div>
                                <span className="del">
                                    <img src="/img/svg/del.svg" alt="삭제" className="svg_del" />
                                    <button></button>
                                </span> 
                            </div>
                            <div className="hang">
                                <strong>[예약완료]</strong>
                                <span><i>김하은</i>님이 <i>[떠나요~거제도~~!!!]</i> 상품에서 <i>2020.11.12</i>에 <i>성인 1명 / 소인 2명</i>이 예약완료가 되었습니다. </span>
                                <div className="time">8시간전</div>
                                <span className="del">
                                    <img src="/img/svg/del.svg" alt="삭제" className="svg_del" />
                                    <button></button>
                                </span> 
                            </div>
                            <div className="hang">
                                <strong>[예약취소]</strong>
                                <span><i>고봉봉</i>님이 <i>[떠나요~거제도~~!!!]</i> 예약상품을 취소하셨습니다. <i>[카드취소]</i></span>
                                <div className="time">8시간전</div>
                                <span className="del">
                                    <img src="/img/svg/del.svg" alt="삭제" className="svg_del" />
                                    <button></button>
                                </span> 
                            </div>
                        </div>
                    </div>

                    <div className="date_fom">

                        <div className="ovj">
                            <span><i className="svg"><img src="/img/svg/inform_icon4.svg" alt="" /></i>2020.11.01</span>
                        </div>
                        <div className="right">
                            <div className="hang">
                                <strong>[시스템알림]</strong>
                                <span>비밀번호가 변경이 완료 되었습니다. </span>
                                <div className="time">2시간전</div>
                                <span className="del">
                                    <img src="/img/svg/del.svg" alt="삭제" className="svg_del" />
                                    <button></button>
                                </span> 
                            </div>
                            <div className="hang">
                                <strong>[시스템알림]</strong>
                                <span>오늘 출발하는 상품이 <i>[3건]</i>이 있습니다. </span>
                                <div className="time">5시간전</div>
                                <span className="del">
                                    <img src="/img/svg/del.svg" alt="삭제" className="svg_del" />
                                    <button></button>
                                </span> 
                            </div>
                            <div className="hang">
                                <strong>[예약완료]</strong>
                                <span><i>김하은</i>님이 <i>[떠나요~거제도~~!!!]</i> 상품에서 <i>2020.11.12</i>에 <i>성인 1명 / 소인 2명</i>이 예약완료가 되었습니다. </span>
                                <div className="time">8시간전</div>
                                <span className="del">
                                    <img src="/img/svg/del.svg" alt="삭제" className="svg_del" />
                                    <button></button>
                                </span> 
                            </div>
                            <div className="hang">
                                <strong>[예약취소]</strong>
                                <span><i>고봉봉</i>님이 <i>[떠나요~거제도~~!!!]</i> 예약상품을 취소하셨습니다. <i>[카드취소]</i></span>
                                <div className="time">8시간전</div>
                                <span className="del">
                                    <img src="/img/svg/del.svg" alt="삭제" className="svg_del" />
                                    <button></button>
                                </span> 
                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </div>
       
    </MypageLayout>
};

export default Notification;