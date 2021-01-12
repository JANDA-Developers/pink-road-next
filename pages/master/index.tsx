import { MasterLayout } from 'layout/MasterLayout';
import Link from 'next/link';
import React from 'react';
import { MaseterBookingLi } from '../../components/bookingLi/MasterBookingLi';
import { useBookingList } from '../../hook/useBooking';
import { useCount, useCountManager } from '../../hook/useCount';
import { useMyBoardList } from '../../hook/useMyBoardList';
import { useProductList } from '../../hook/useProduct';
import { useQuestionList } from '../../hook/useQuestion';
import { useSettlementList } from '../../hook/useSettlement';
import { useUserList } from '../../hook/useUser';
import { BookingStatus, ProductStatus, UserRole } from '../../types/api';
import { ALLOW_ADMINS } from '../../types/const';
import { bookingStatus, confirmKr, paymentStatus, productStatus, questionSatus, settlementStatus } from '../../utils/enumToKr';
import { autoComma, autoHypenPhone } from '../../utils/formatter';
import { auth } from '../../utils/with';
import { yyyymmdd } from '../../utils/yyyymmdd';

interface IProp { }

export const MsIndex: React.FC<IProp> = () => {
    const { items: questions } = useQuestionList({ initialViewCount: 4 });
    const { items: products } = useProductList({ initialViewCount: 4 });
    const { items: bookings } = useBookingList({ initialViewCount: 4 })
    const { items: settlements } = useSettlementList({ initialViewCount: 4 })
    const { items: indiUsers } = useUserList({
        initialViewCount: 4, initialFilter: {
            role_eq: UserRole.individual
        }
    });
    const { items: parterUsers } = useUserList({
        initialViewCount: 4, initialFilter: {
            role_eq: UserRole.partner
        }
    });
    const { items: busiPartnerUsers } = useUserList({
        initialViewCount: 4, initialFilter: {
            role_eq: UserRole.partnerB
        }
    });
    const { data: count, getLoading } = useCountManager()
    const {
        totalExpCount,
        totalProdCount,
        totalTourCount,
        readyBookingCountMaster,
        cancelRequestCountMaster,
        productRegistCount,
        totalBookingCountMaster,
        createRequestCountMaster,
        determiendProductCountMaster,
        undeterMinedProductCountMaster,
        cancelProductCountMaster,
        compeltedProductCountMaster,
        totalProductCountMaster,
        cancelBookingCompleteCount,
        cancelBookingCountMaster,
        compeltedBookingCountMaster,
        confimedBusiPartnerCount,
        confimedPartnerCount,
        unConfimedBusiPartnerCount,
        unConfimedPartnerCount,
        settlementRequestCountMaster,
        expBookingCountMaster,
        settleUnsolvedRequestCount,
        settlementCompleteCountMaster,
        settlementReadyCountMater,
        koreanMemberCount,
        foreginMemeberCount,
        buyTotalCount,
        totalSettlementCount,
        tourBookingCountMaster,
        busiPartnerBCountMaster,
        totalPartnerMemberCount,
        busiPartnerCountMaster,
        totalIndiMemeberCount,
        answeredQuestionCount,
        unAnsweredQuestionCount
    } = count || {};
    // const { } = useQuestionList();

    // const { } = use


    //하나씩 채우자 아자아자!

    return <MasterLayout>
        <div className="in">
            <div className="main_paper_div">
                <div className="hang div01">
                    <div className="head">
                        <h5>상품</h5>
                        <ul className="board_option">
                            <li className="on"><a href="/">여행<strong>{totalTourCount}</strong></a></li>
                            <li><a href="/">체험<strong>{totalExpCount}</strong></a></li>
                        </ul>
                        <Link href="/master/goods"><a className="more">더보기<i className="jandaicon-arr4-right"></i></a></Link>
                    </div>
                    <ul className="view">
                        <li>
                            <strong>{totalProdCount}</strong>
                            <span>전체</span>
                        </li>
                        <li>
                            <strong>{cancelProductCountMaster}</strong>
                            <span>판매중지</span>
                        </li>
                        <li>
                            <strong className="red_font">{undeterMinedProductCountMaster}</strong>
                            <span>출발미정</span>
                        </li>
                        <li>
                            <strong className="sky_font">{determiendProductCountMaster}</strong>
                            <span>출발확정</span>
                        </li>
                    </ul>
                    <ul className="table typeA">
                        <li className="head">
                            <div className="td01">상품명</div>
                            <div className="td02">판매여부</div>
                            <div className="td03">판매누적</div>
                            <div className="td04">판매자</div>
                            <div className="td05">상세정보</div>
                        </li>
                        {products.map(pd =>
                            <li className="body">
                                <div className="td01">
                                    <strong>{pd.title}</strong>
                                    <span>(성인 {autoComma(pd.adult_price)}&nbsp;&frasl;&nbsp;소아 {autoComma(pd.kids_price)}&nbsp;&frasl;&nbsp;유아 {autoComma(pd.baby_price)})</span>
                                </div>
                                <div className="td02"><strong>{productStatus(pd.status)}</strong></div>
                                <div className="td03">
                                    <span>예약 <strong>{pd.bookings.length}</strong></span>&nbsp;&frasl;&nbsp;
                                    <span>완료 <strong>{pd.bookings.map(bk => bk.status === BookingStatus.COMPLETE)}</strong></span>&nbsp;&frasl;&nbsp;
                                    <span>취소 <strong>{pd.bookings.map(bk => bk.status === BookingStatus.CANCEL)}</strong></span>
                                </div>
                                <div className="td04">
                                    <strong>{pd.author?.busi_name}</strong>
                                    <span>({pd.author?.name})</span>
                                </div>
                                <div className="td05"><Link href="/"><a className="btn">상세보기</a></Link></div>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="hang div02">
                    <div className="head">
                        <h5>예약&middot;결제</h5>
                        <ul className="board_option">
                            <li className="on"><a href="/">여행<strong>{tourBookingCountMaster}</strong></a></li>
                            <li><a href="/">체험<strong>{expBookingCountMaster}</strong></a></li>
                        </ul>
                        <Link href="/master/reservation"><a className="more">더보기<i className="jandaicon-arr4-right"></i></a></Link>
                    </div>
                    <ul className="view">
                        <li>
                            <strong>{totalBookingCountMaster}</strong>
                            <span>전체</span>
                        </li>
                        <li>
                            <strong>{readyBookingCountMaster}</strong>
                            <span>입금준비중</span>
                        </li>
                        <li>
                            <strong>{compeltedBookingCountMaster}</strong>
                            <span>결제완료</span>
                        </li>
                        <li>
                            <strong>{cancelBookingCountMaster}</strong>
                            <span>취소</span>
                        </li>
                    </ul>
                    <ul className="table typeA">
                        <li className="head">
                            <div className="td01">상품명</div>
                            <div className="td02">출발일</div>
                            <div className="td03">진행여부</div>
                            <div className="td04">예약상태</div>
                            <div className="td05">상세정보</div>
                        </li>
                        {bookings.map(bk => <MaseterBookingLi booking={bk} key={bk._id} />)}
                    </ul>
                </div>
                <div className="hang div03">
                    <div className="head">
                        <h5>취소&middot;환불</h5>
                        <ul className="board_option">
                            <li className="on"><a href="/">여행<strong>{totalTourCount}</strong></a></li>
                            <li><a href="/">체험<strong>{totalExpCount}</strong></a></li>
                        </ul>
                        <Link href="/master/reservation"><a className="more">더보기<i className="jandaicon-arr4-right"></i></a></Link>
                    </div>
                    <ul className="view">
                        <li>
                            <strong>{cancelBookingCountMaster! + cancelBookingCompleteCount!}</strong>
                            <span>전체</span>
                        </li>
                        <li>
                            <strong>{cancelBookingCountMaster}</strong>
                            <span>취소요청</span>
                        </li>
                        <li>
                            <strong>{cancelBookingCompleteCount}</strong>
                            <span>취소완료</span>
                        </li>
                    </ul>
                    <ul className="table typeA">
                        <li className="head">
                            <div className="td01">상품명</div>
                            <div className="td02">출발일</div>
                            <div className="td03">진행여부</div>
                            <div className="td04">예약상태</div>
                            <div className="td05">상세정보</div>
                        </li>
                        {bookings.filter(bk => bk.status === BookingStatus.CANCEL).map(bk =>
                            <MaseterBookingLi booking={bk} key={bk._id} />
                        )}
                    </ul>
                </div>
                <div className="hang div04">
                    <div className="head">
                        <h5>매출&middot;정산</h5>
                        <ul className="board_option">
                            <li className="on"><a href="/">여행<strong>{totalTourCount}</strong></a></li>
                            <li><a href="/">체험<strong>{totalExpCount}</strong></a></li>
                        </ul>
                        <Link href="/master/reservation"><a className="more">더보기<i className="jandaicon-arr4-right"></i></a></Link>
                    </div>
                    <ul className="view">
                        <li>
                            <strong>{totalSettlementCount}</strong>
                            <span>전체</span>
                        </li>
                        <li>
                            <strong>{settlementRequestCountMaster}</strong>
                            <span>정산요청</span>
                        </li>
                        <li>
                            <strong>{settlementCompleteCountMaster}</strong>
                            <span>정산완료</span>
                        </li>
                        <li>
                            <strong>{settlementReadyCountMater}</strong>
                            <span>지급보류</span>
                        </li>
                    </ul>
                    <ul className="table typeA">
                        <li className="head">
                            <div className="td01">상품명</div>
                            <div className="td02">정산요청일</div>
                            <div className="td03">정산금액</div>
                            <div className="td04">정산여부</div>
                            <div className="td05">상세정보</div>
                        </li>
                        {settlements.map(st =>
                            <li key={st._id} className="body">
                                <div className="td01">
                                    <strong>{st.product.title}</strong>
                                    <span>(성인 {autoComma(st.product.adult_price)}&nbsp;&frasl;&nbsp;소아 {autoComma(st.product.kids_price)}&nbsp;&frasl;&nbsp;유아 {autoComma(st.product.baby_price)})</span>
                                </div>
                                <div className="td02"><span>{yyyymmdd(st.requestDate)}</span></div>
                                <div className="td03">
                                    <span>{autoComma(st.totalPrice)}원</span>
                                </div>
                                <div className="td04">
                                    <strong>{settlementStatus(st.status)}</strong>
                                </div>
                                <div className="td05"><Link href="/"><a className="btn">상세보기</a></Link></div>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="hang div05">
                    <div className="head">
                        <h5>개인회원</h5>
                        <ul className="board_option">
                            <li className="on"><a href="/">전체<strong>{totalIndiMemeberCount}</strong></a></li>
                            <li><a href="/">내국인<strong>{koreanMemberCount}</strong></a></li>
                            <li><a href="/">외국인<strong>{foreginMemeberCount}</strong></a></li>
                        </ul>
                        <Link href="/master/member"><a className="more">더보기<i className="jandaicon-arr4-right"></i></a></Link>
                    </div>
                    <ul className="table typeB">
                        <li className="head">
                            <div className="td01">이름</div>
                            <div className="td02">국적</div>
                            <div className="td03">주소</div>
                            <div className="td04">가입날짜</div>
                        </li>
                        {indiUsers.map(u =>
                            <li key={u._id} className="body">
                                <div className="td01">
                                    <span>{u.name}</span>
                                    <span>{autoHypenPhone(u.phoneNumber)}</span>
                                </div>
                                <div className="td02"><span>{u.is_froreginer}</span></div>
                                <div className="td03">
                                    <span>{u.address}</span>
                                </div>
                                <div className="td04">
                                    <span>{yyyymmdd(u.createdAt)}</span>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="hang div06">
                    <div className="head">
                        <h5>기업파트너회원</h5>
                        <ul className="board_option">
                            <li className="on"><a href="/">전체<strong>{(unConfimedBusiPartnerCount || 0) + (confimedBusiPartnerCount || 0)}</strong></a></li>
                            <li><a href="/">승인<strong>{unConfimedBusiPartnerCount}</strong></a></li>
                            <li><a href="/">미승인<strong>{confimedBusiPartnerCount}</strong></a></li>
                        </ul>
                        <Link href="/master/member"><a className="more">더보기<i className="jandaicon-arr4-right"></i></a></Link>
                    </div>
                    <ul className="table typeC">
                        <li className="head">
                            <div className="td01">파트너명/아이디</div>
                            <div className="td02">가입날짜</div>
                            <div className="td03">승인</div>
                        </li>
                        {busiPartnerUsers.map(pu =>
                            <li key={pu._id} className="body">
                                <div className="td01">
                                    <span>{pu.name}</span>
                                    <span>{pu.email}</span>
                                </div>
                                <div className="td02">
                                    <span>{yyyymmdd(pu.createdAt)}</span>
                                </div>
                                <div className="td03">
                                    <span>{confirmKr(pu.isVerifiedManager)}</span>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="hang div07">
                    <div className="head">
                        <h5>개인파트너회원</h5>
                        <ul className="board_option">
                            <li className="on"><a href="/">전체<strong>{(confimedPartnerCount || 0) + (unConfimedBusiPartnerCount || 0)}</strong></a></li>
                            <li><a href="/">승인<strong>{confimedPartnerCount}</strong></a></li>
                            <li><a href="/">미승인<strong>{unConfimedBusiPartnerCount}</strong></a></li>
                        </ul>
                        <Link href="/master/member"><a className="more">더보기<i className="jandaicon-arr4-right"></i></a></Link>
                    </div>
                    <ul className="table typeC">
                        <li className="head">
                            <div className="td01">파트너명/아이디</div>
                            <div className="td02">가입날짜</div>
                            <div className="td03">승인</div>
                        </li>
                        {parterUsers.map(pu =>
                            <li key={pu._id} className="body">
                                <div className="td01">
                                    <span>{pu.name}</span>
                                    <span>{pu.email}</span>
                                </div>
                                <div className="td02">
                                    <span>{yyyymmdd(pu.createdAt)}</span>
                                </div>
                                <div className="td03">
                                    <span>{confirmKr(pu.isVerifiedManager)}</span>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="hang div08">
                    <div className="head">
                        <h5>고객문의</h5>
                        <ul className="board_option">
                            <li className="on"><a href="/">전체<strong>{(answeredQuestionCount || 0) + (unAnsweredQuestionCount || 0)}</strong></a></li>
                            <li><a href="/">답변<strong>{answeredQuestionCount}</strong></a></li>
                            <li><a href="/">미답변<strong>{unAnsweredQuestionCount}</strong></a></li>
                        </ul>
                        <Link href="/member/inquirylist"><a className="more">더보기<i className="jandaicon-arr4-right"></i></a></Link>
                    </div>
                    <ul className="table typeD">
                        <li className="head">
                            <div className="td01">제목</div>
                            <div className="td02">넘버</div>
                            <div className="td03">답변여부</div>
                            <div className="td04">작성일</div>
                            <div className="td05">글쓴이</div>
                        </li>
                        {questions.map(q =>
                            <li key={q._id} className="body">
                                <div className="td01">
                                    <strong>{q.title}</strong>
                                </div>
                                <div className="td02">
                                    <span>{q.no}</span>
                                </div>
                                <div className="td03">
                                    <span>{questionSatus(q.status)}</span>
                                </div>
                                <div className="td04">
                                    <span>{yyyymmdd(q.createdAt)}</span>
                                </div>
                                <div className="td05">
                                    <span>{q.author?.nickName}</span>
                                </div>
                            </li>)}
                    </ul>
                </div>

                <div className="hang div09">
                    <ul>
                        <li><Link href="/"><a><span><img src="/img/svg/search_icon.svg" alt="icon" /></span><strong>사업자입점매뉴얼</strong></a></Link></li>
                        <li><Link href="/"><a><span><img src="/img/svg/search_icon.svg" alt="icon" /></span><strong>상세페이지기본폼</strong></a></Link></li>
                        <li><Link href="/"><a><span><img src="/img/svg/search_icon.svg" alt="icon" /></span><strong>스마트스토어</strong></a></Link></li>
                        <li><Link href="/"><a><span><img src="/img/svg/search_icon.svg" alt="icon" /></span><strong>맞춤견적관리</strong></a></Link></li>
                        <li><Link href="/"><a><span><img src="/img/svg/search_icon.svg" alt="icon" /></span><strong>카페24 SMS관리</strong></a></Link></li>
                        <li><Link href="/"><a><span><img src="/img/svg/search_icon.svg" alt="icon" /></span><strong>카카오비즈톡관리</strong></a></Link></li>

                    </ul>
                </div>


            </div>
        </div>

    </MasterLayout>
};

export default auth(ALLOW_ADMINS)(MsIndex);