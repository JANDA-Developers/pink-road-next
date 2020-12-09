interface IProp { }
import Link from "next/link"
import PaymentLayout from "../layout/PaymentLayout";

export const Payment: React.FC<IProp> = () => {

    return <PaymentLayout>

        <div className="w1200">
            <div className="payment_top">
                <span className="logo">
                    <object type="image/svg+xml" data="/img/svg/junglepay_logo.svg">현재 브라우저는 iframe을 지원하지 않습니다.</object>
                    <button></button>
                </span>
            </div>

            {/* 1.실시간예약디자인 */}
            <div className="payment_box">
                <div className="head">
                    <iframe src="http://www.gwanganli.co.kr/landing/reservation-yacht.html" allowFullScreen={true} scrolling="no" />
                </div>

            </div>

            {/* 2.예약완료 */}
            <div className="payment_box">

                <div className="head">
                    <h2><i>예약</i>이 완료되었습니다.</h2>
                </div>
                <div className="table">
                    <div className="tr">
                        <div className="th">
                            예약상품
                        </div>
                        <div className="td">
                            [PK-389412]
                            거제도로 떠나요~~~~~!!!!!~~!!!!!!!
                        </div>
                    </div>
                    <div className="tr">
                        <div className="th">
                            예약번호
                        </div>
                        <div className="td">
                            R-34948
                        </div>
                    </div>
                    <div className="tr">
                        <div className="th">
                            결제정보
                        </div>
                        <div className="td">
                            <span>카드결제</span>
                            <span>국민(3243-****-****-****)</span>
                            <span>일시불</span>
                            <span>승인일시:2020.09.09 08:32</span>
                        </div>
                    </div>
                    <div className="tr">
                        <div className="th">
                            결제금액
                        </div>
                        <div className="td">
                            <strong>81,000원</strong>
                        </div>
                    </div>
                </div>
                <div className="btn_box">
                    <Link href="/mypage/purchase"><a className="btn">구매내역 확인하기</a></Link>
                    <Link href="/"><a className="btn">홈으로</a></Link>
                </div>
            </div>


        </div>
        <div className="payment_bottom">
            Copyright © JANDA
            </div>

    </PaymentLayout>
};

export default Payment