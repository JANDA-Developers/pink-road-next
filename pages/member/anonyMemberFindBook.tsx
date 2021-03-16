import React, { useState } from 'react';
import defaultPageInfo from 'info/anonyFindBook.json';
import { useRouter } from 'next/router';
import { usePageEdit } from '../../hook/usePageEdit';
import { PageEditor } from '../../components/common/PageEditer';
import { getStaticPageInfo, Ipage } from '../../utils/page';
import { useBookingFindByInfo } from '../../hook/useBooking';
import { useVerification } from '../../hook/useVerification';
import { VerifiEamilModal } from '../../components/verifiModal/VerifiEmailModal';
import { closeModal, openModal } from '../../utils/popUp';
import { VERIFICATION_COMPLETE } from '../../apollo/gql/user';
import { VerificationTarget } from '../../types/api';
import { autoComma, autoHypenPhone } from '../../utils/formatter';

export const AnonymouseFindBook: React.FC<Ipage> = (pageInfo) => {
    const pageTools = usePageEdit(pageInfo, defaultPageInfo);

    const verifiHook = useVerification();

    const [info, setInfo] = useState({
        name: "",
        phoneNumber: ""
    })
    const router = useRouter()
    const { getData, data } = useBookingFindByInfo({
        fetchPolicy: "network-only",
        variables: {
            name: info.name,
            phoneNumber: info.phoneNumber,
            verificationId: verifiHook.verifiData?._id || "",
        }
    })

    const handleSearch = () => {
        if (!verifiHook.verifiData?._id) {
            alert("본인인증을 진행 해주새요.")
        }
        alert("getData occured");
        getData();
    }

    const toProductBoard = (id: string) => {
        router.push(id);
    }

    return <div className="body AnonymouseFindBook" id="AnonymouseFindBook" >
        <div className="top_visual">
            <div
                className="sub_header sub_bg"
                style={{ backgroundImage: `url(/img/pr_img_02.jpg)` }}
            >
                <div className="w1200">
                    <h2 className="title">비회원 예약조회</h2>
                </div>
            </div>
            <div className="header_nav">
                <ul>
                    <li className="home">
                        <a href="/index"></a>
                    </li>
                    <li className="homedeps1">Member</li>
                    <li className="homedeps2">
                        <a href="/">비회원 예약조회</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="w1200 con_box">
            <h3>비회원 예약 조회하기</h3>
            <span>
                예약을 하셨나요? 예약을 하시면 예약완료 SMS가 발송이 됩니다. 통신상태가 좋지 못하거나 스팸으로 들어 갔을 경우 확인이 어려울 수 있습니다.
                 <br />아래에 예약시 입력한 성함과 전화번호를 입력해 주세요. <br />
            </span>
            <div className="ReInput__box">

                <PageEditor pageTools={pageTools} />
                <div className="mb20">
                    <div className="ReInput__box_in">
                        {/* 성함 */}
                        <input type="text" placeholder="성함입력" onChange={(e) => {
                            const val = e.currentTarget.value;
                            info.name = val;
                            setInfo({
                                ...info
                            })
                        }} value={info.name} />
                    </div>
                    <div className="ReInput__box_in">
                        {/* 번호 */}
                        <input
                            type="text"
                            readOnly={verifiHook.verifiData?.isVerified}
                            placeholder="전화번호입력" onChange={(e) => {
                                const val = e.currentTarget.value;
                                info.phoneNumber = val;
                                setInfo({
                                    ...info
                                })
                            }}
                            value={autoHypenPhone(info.phoneNumber)}
                        />
                    </div>
                    <button className="btn mr5" onClick={() => {
                        openModal("#PhoneVerifi")();
                    }}>인증하기</button>
                    <button className="btn" disabled={!verifiHook.verifiData?.isVerified} onClick={handleSearch}>검색하기</button>
                </div>
                {/* 결과 */}
                {data?.map(data =>
                    <div className="ReInput__box_list">
                        <div className="ReInput__box_line" key={data._id} >
                            <div className="t01">
                                <span>{data.name}</span>
                                <span>010-2324-2324</span>
                            </div>
                            <div className="t02 MypageGoods__infoBox">
                                <div className="info goods__info_title">
                                    <span className="ct">문화</span><span className="g-number">상품번호: wefwef</span>
                                    <strong className="title">부산 서구 & 중구투어 1박2일</strong>
                                    <div className="txt">
                                        <span className="s-day">출발일: 2020.03.03</span>
                                        <span className="where">출발장소: 부산역앞</span>
                                        <span className="s-day">예약일: 2020.03.03</span>
                                        <span className="s-day">확정여부: 예약확정 (22/30)</span>
                                        <span className="s-day">상품상태: 판매중</span>
                                    </div>
                                </div>
                                {/* <div className="info goods__info_title">
                                    <span className="ct">{item.product.category?.label}</span><span className="g-number">상품번호: {item.product.code}</span>
                                    <strong className="title">{item.product.title}</strong>
                                    <div className="txt">
                                        <span className="s-day">출발일: {yyyymmdd(item.product.startDate)}</span>
                                        <span className="where">출발장소: {item.product.startPoint}</span>
                                        <span className="s-day">예약일: {yyyymmdd(item.createdAt)}</span>
                                        <span className="s-day">확정여부: {determinedKr(item.product.determined)} ({item.product.peopleCount}/{item.product.maxMember})</span>
                                        <span className="s-day">상품상태: {productStatus(item.product.status)}</span>
                                    </div>
                                </div> */}
                            </div>
                            <div className="t03">
                                <span>결제금액 : 230,000원</span>
                                <span>결제일 : 2332.32.32</span>
                            </div>
                            <div className="t03">
                                <button className="btn small">상품보기</button>
                            </div>
                        </div>
                    </div>
                )}
                <VerifiEamilModal id="PhoneVerifi" key={info.phoneNumber} defaultPayload={info.phoneNumber} target={VerificationTarget.PHONE} onSuccess={() => {
                    closeModal("#PhoneVerifi")();
                }} verifiHook={verifiHook} />
            </div>
            <div className="info__txt">
                <dl>
                    <dt>찾으시는 예약이<br /> 없으신가요?</dt>
                    <dd>
                        <ul className="bul_list">
                            <li><span className="dot_arr">전화번호와 성함이 일치해야만 조회가 가능합니다.</span></li>
                            <li><span className="dot_arr">회원이신가요? 회원은 로그인을 하셔야 조회가 가능합니다. [Mypage > 예약조회]에서 조회를 해주세요.</span></li>
                            <li><span className="dot_arr">비회원 예약만 조회가 가능합니다.</span></li>
                        </ul>
                    </dd>
                </dl>
            </div>
        </div>
    </div >
};

export const getStaticProps = getStaticPageInfo("anonymouseFindBook");
export default AnonymouseFindBook;
