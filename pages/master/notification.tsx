import { MasterLayout } from 'layout/MasterLayout';
import React from 'react';

interface IProp { }

export const Notification: React.FC<IProp> = () => {
    return <MasterLayout>
        <div className="in notification_box">
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
                                <strong className="blue">시스템알림</strong>
                                <span>비밀번호가 변경이 완료 되었습니다. </span>
                                <div className="time">2시간전</div>
                                <span className="del">
                                    <img src="/img/svg/del.svg" alt="삭제" className="svg_del" />
                                    <button></button>
                                </span>
                            </div>
                            <div className="hang">
                                <strong className="blue">시스템알림</strong>
                                <span>오늘 출발하는 상품이 <i>[3건]</i>이 있습니다. </span>
                                <div className="time">5시간전</div>
                                <span className="del">
                                    <img src="/img/svg/del.svg" alt="삭제" className="svg_del" />
                                    <button></button>
                                </span>
                            </div>
                            <div className="hang">
                                <strong className="pink">예약완료</strong>
                                <span><i>김하은</i>님이 <i>[떠나요~거제도~~!!!]</i> 상품에서 <i>2020.11.12</i>에 <i>성인 1명 / 소인 2명</i>이 예약완료가 되었습니다. </span>
                                <div className="time">8시간전</div>
                                <span className="del">
                                    <img src="/img/svg/del.svg" alt="삭제" className="svg_del" />
                                    <button></button>
                                </span>
                            </div>
                            <div className="hang">
                                <strong className="red">예약취소</strong>
                                <span><i>고봉봉</i>님이 <i>[떠나요~거제도~~!!!]</i> 예약상품을 취소하셨습니다. <i>(카드취소)</i></span>
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
                                <strong className="green">Member</strong>
                                <span><i>나라여행</i>님이 여행기획 <i>1건</i>을 결제요청 하셨습니다.</span>
                                <div className="time">5시간전</div>
                                <span className="del">
                                    <img src="/img/svg/del.svg" alt="삭제" className="svg_del" />
                                    <button></button>
                                </span>
                            </div>
                            <div className="hang">
                                <strong className="green">Member</strong>
                                <span><i>홍나라</i>님이 회원가입(파트너-가이드)을 요청 하셨습니다. 가입승인 대기중입니다. 확인해주세요~!!</span>
                                <div className="time">5시간전</div>
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

    </MasterLayout >
};

export default Notification;