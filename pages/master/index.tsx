import { MasterLayout } from 'layout/MasterLayout';
import Link from 'next/link';
import React from 'react';
import { useProductList } from '../../hook/useProduct';
import { useUserList } from '../../hook/useUser';

interface IProp { }

export const MsIndex: React.FC<IProp> = () => {
    const { items: products } = useProductList();
    const { items: users } = useUserList();
    // const { } = useQuestionList();

    // const { } = use

    return <MasterLayout>
        <div className="in">
            <div className="main_paper_div">
                <div className="hang div01">
                    <div className="head">
                        <h5>상품</h5>
                        <ul className="board_option">
                            <li className="on"><a href="/">여행<strong>46</strong></a></li>
                            <li><a href="/">체험<strong>23</strong></a></li>
                        </ul>
                        <Link href="/master/goods"><a className="more">더보기<i className="jandaicon-arr4-right"></i></a></Link>
                    </div>
                    <ul className="view">
                        <li>
                            <strong>234</strong>
                            <span>전체</span>
                        </li>
                        <li>
                            <strong>234</strong>
                            <span>판매중</span>
                        </li>
                        <li>
                            <strong>234</strong>
                            <span>판매중지</span>
                        </li>
                        <li>
                            <strong>234</strong>
                            <span>판매완료</span>
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
                        <li className="body">
                            <div className="td01">
                                <strong>복닥복닥 원도심 No.1 서구중구일대코스</strong>
                                <span>(성인 25,000&nbsp;&frasl;&nbsp;소아 15,000&nbsp;&frasl;&nbsp;유아 10,000)</span>
                            </div>
                            <div className="td02"><strong>판매중</strong></div>
                            <div className="td03">
                                <span>예약 <strong>22</strong></span>&nbsp;&frasl;&nbsp;
                                <span>취소 <strong>22</strong></span>&nbsp;&frasl;&nbsp;
                                <span>환불 <strong>22</strong></span>
                            </div>
                            <div className="td04">
                                <strong>(주)행복나라</strong>
                                <span>(개인파트너)</span>
                            </div>
                            <div className="td05"><Link href="/"><a className="btn small">상세보기</a></Link></div>
                        </li>
                        <li className="body">
                            <div className="td01">
                                <strong>복닥복닥 원도심 No.1 서구중구일대코스</strong>
                                <span>(성인 25,000&nbsp;&frasl;&nbsp;소아 15,000&nbsp;&frasl;&nbsp;유아 10,000)</span>
                            </div>
                            <div className="td02"><strong>판매중</strong></div>
                            <div className="td03">
                                <span>예약 <strong>22</strong></span>&nbsp;&frasl;&nbsp;
                                <span>취소 <strong>22</strong></span>&nbsp;&frasl;&nbsp;
                                <span>환불 <strong>22</strong></span>
                            </div>
                            <div className="td04">
                                <strong>(주)행복나라</strong>
                                <span>(개인파트너)</span>
                            </div>
                            <div className="td05"><Link href="/"><a className="btn small">상세보기</a></Link></div>
                        </li>
                        <li className="body">
                            <div className="td01">
                                <strong>복닥복닥 원도심 No.1 서구중구일대코스</strong>
                                <span>(성인 25,000&nbsp;&frasl;&nbsp;소아 15,000&nbsp;&frasl;&nbsp;유아 10,000)</span>
                            </div>
                            <div className="td02"><strong>판매중</strong></div>
                            <div className="td03">
                                <span>예약 <strong>22</strong></span>&nbsp;&frasl;&nbsp;
                                <span>취소 <strong>22</strong></span>&nbsp;&frasl;&nbsp;
                                <span>환불 <strong>22</strong></span>
                            </div>
                            <div className="td04">
                                <strong>(주)행복나라</strong>
                                <span>(개인파트너)</span>
                            </div>
                            <div className="td05"><Link href="/"><a className="btn small">상세보기</a></Link></div>
                        </li>
                    </ul>

                </div>
                <div className="hang div02">
                    <div className="head">
                        <h5>예약&middot;결제</h5>
                        <ul className="board_option">
                            <li className="on"><a href="/">여행<strong>46</strong></a></li>
                            <li><a href="/">체험<strong>23</strong></a></li>
                        </ul>
                        <Link href="/master/reservation"><a className="more">더보기<i className="jandaicon-arr4-right"></i></a></Link>
                    </div>
                    <ul className="view">
                        <li>
                            <strong>234</strong>
                            <span>전체</span>
                        </li>
                        <li>
                            <strong>234</strong>
                            <span>입금준비중</span>
                        </li>
                        <li>
                            <strong>234</strong>
                            <span>결제완료</span>
                        </li>
                        <li>
                            <strong className="red_font">234</strong>
                            <span>출발미정</span>
                        </li>
                        <li>
                            <strong className="sky_font">234</strong>
                            <span>출발확정</span>
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
                        <li className="body">
                            <div className="td01">
                                <strong>복닥복닥 원도심 No.1 서구중구일대코스</strong>
                                <span><i>3명</i> (성인 2&nbsp;&frasl;&nbsp;소아 1&nbsp;&frasl;&nbsp;유아 0)</span>
                            </div>
                            <div className="td02"><span>2020.01.10</span></div>
                            <div className="td03">
                                <strong>출발확정</strong>
                                <span>(10/10)</span>
                            </div>
                            <div className="td04">
                                <strong>예약완료</strong>
                                <span>(결제완료)</span>
                            </div>
                            <div className="td05"><Link href="/"><a className="btn small">상세보기</a></Link></div>
                        </li>

                        <li className="body">
                            <div className="td01">
                                <strong>복닥복닥 원도심 No.1 서구중구일대코스</strong>
                                <span><i>3명</i> (성인 2&nbsp;&frasl;&nbsp;소아 1&nbsp;&frasl;&nbsp;유아 0)</span>
                            </div>
                            <div className="td02"><span>2020.01.10</span></div>
                            <div className="td03">
                                <strong>출발확정</strong>
                                <span>(10/10)</span>
                            </div>
                            <div className="td04">
                                <strong>예약완료</strong>
                                <span>(결제완료)</span>
                            </div>
                            <div className="td05"><Link href="/"><a className="btn small">상세보기</a></Link></div>
                        </li>
                        <li className="body">
                            <div className="td01">
                                <strong>복닥복닥 원도심 No.1 서구중구일대코스</strong>
                                <span><i>3명</i> (성인 2&nbsp;&frasl;&nbsp;소아 1&nbsp;&frasl;&nbsp;유아 0)</span>
                            </div>
                            <div className="td02"><span>2020.01.10</span></div>
                            <div className="td03">
                                <strong>출발확정</strong>
                                <span>(10/10)</span>
                            </div>
                            <div className="td04">
                                <strong>예약완료</strong>
                                <span>(결제완료)</span>
                            </div>
                            <div className="td05"><Link href="/"><a className="btn small">상세보기</a></Link></div>
                        </li>
                    </ul>
                </div>
                <div className="hang div03">
                    <div className="head">
                        <h5>취소&middot;환불</h5>
                        <ul className="board_option">
                            <li className="on"><a href="/">여행<strong>46</strong></a></li>
                            <li><a href="/">체험<strong>23</strong></a></li>
                        </ul>
                        <Link href="/master/reservation"><a className="more">더보기<i className="jandaicon-arr4-right"></i></a></Link>
                    </div>
                    <ul className="view">
                        <li>
                            <strong>234</strong>
                            <span>전체</span>
                        </li>
                        <li>
                            <strong>234</strong>
                            <span>취소요청</span>
                        </li>
                        <li>
                            <strong>234</strong>
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
                        <li className="body">
                            <div className="td01">
                                <strong>복닥복닥 원도심 No.1 서구중구일대코스</strong>
                                <span><i>3명</i> (성인 2&nbsp;&frasl;&nbsp;소아 1&nbsp;&frasl;&nbsp;유아 0)</span>
                            </div>
                            <div className="td02"><span>2020.01.10</span></div>
                            <div className="td03">
                                <strong>출발확정</strong>
                                <span>(10/10)</span>
                            </div>
                            <div className="td04">
                                <strong>예약완료</strong>
                                <span>(결제완료)</span>
                            </div>
                            <div className="td05"><Link href="/"><a className="btn small">상세보기</a></Link></div>
                        </li>

                        <li className="body">
                            <div className="td01">
                                <strong>복닥복닥 원도심 No.1 서구중구일대코스</strong>
                                <span><i>3명</i> (성인 2&nbsp;&frasl;&nbsp;소아 1&nbsp;&frasl;&nbsp;유아 0)</span>
                            </div>
                            <div className="td02"><span>2020.01.10</span></div>
                            <div className="td03">
                                <strong>출발확정</strong>
                                <span>(10/10)</span>
                            </div>
                            <div className="td04">
                                <strong>예약완료</strong>
                                <span>(결제완료)</span>
                            </div>
                            <div className="td05"><Link href="/"><a className="btn small">상세보기</a></Link></div>
                        </li>
                        <li className="body">
                            <div className="td01">
                                <strong>복닥복닥 원도심 No.1 서구중구일대코스</strong>
                                <span><i>3명</i> (성인 2&nbsp;&frasl;&nbsp;소아 1&nbsp;&frasl;&nbsp;유아 0)</span>
                            </div>
                            <div className="td02"><span>2020.01.10</span></div>
                            <div className="td03">
                                <strong>출발확정</strong>
                                <span>(10/10)</span>
                            </div>
                            <div className="td04">
                                <strong>예약완료</strong>
                                <span>(결제완료)</span>
                            </div>
                            <div className="td05"><Link href="/"><a className="btn small">상세보기</a></Link></div>
                        </li>
                    </ul>
                </div>
                <div className="hang div04">
                    <div className="head">
                        <h5>매출&middot;정산</h5>
                        <ul className="board_option">
                            <li className="on"><a href="/">여행<strong>46</strong></a></li>
                            <li><a href="/">체험<strong>23</strong></a></li>
                        </ul>
                        <Link href="/master/reservation"><a className="more">더보기<i className="jandaicon-arr4-right"></i></a></Link>
                    </div>
                    <ul className="view">
                        <li>
                            <strong>234</strong>
                            <span>전체</span>
                        </li>
                        <li>
                            <strong>234</strong>
                            <span>정산대기</span>
                        </li>
                        <li>
                            <strong>234</strong>
                            <span>정산완료</span>
                        </li>
                        <li>
                            <strong>234</strong>
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
                        <li className="body">
                            <div className="td01">
                                <strong>복닥복닥 원도심 No.1 서구중구일대코스</strong>
                                <span>(성인 25,000&nbsp;&frasl;&nbsp;소아 15,000&nbsp;&frasl;&nbsp;유아 10,000)</span>
                            </div>
                            <div className="td02"><span>2020.01.10</span></div>
                            <div className="td03">
                                <span>23,323,333원</span>
                            </div>
                            <div className="td04">
                                <strong>완료</strong>
                            </div>
                            <div className="td05"><Link href="/"><a className="btn small">상세보기</a></Link></div>
                        </li>

                        <li className="body">
                            <div className="td01">
                                <strong>복닥복닥 원도심 No.1 서구중구일대코스</strong>
                                <span>(성인 25,000&nbsp;&frasl;&nbsp;소아 15,000&nbsp;&frasl;&nbsp;유아 10,000)</span>
                            </div>
                            <div className="td02"><span>2020.01.10</span></div>
                            <div className="td03">
                                <span>23,323,333원</span>
                            </div>
                            <div className="td04">
                                <strong>완료</strong>
                            </div>
                            <div className="td05"><Link href="/"><a className="btn small">상세보기</a></Link></div>
                        </li>
                        <li className="body">
                            <div className="td01">
                                <strong>복닥복닥 원도심 No.1 서구중구일대코스</strong>
                                <span>(성인 25,000&nbsp;&frasl;&nbsp;소아 15,000&nbsp;&frasl;&nbsp;유아 10,000)</span>
                            </div>
                            <div className="td02"><span>2020.01.10</span></div>
                            <div className="td03">
                                <span>23,323,333원</span>
                            </div>
                            <div className="td04">
                                <strong>완료</strong>
                            </div>
                            <div className="td05"><Link href="/"><a className="btn small">상세보기</a></Link></div>
                        </li>
                    </ul>
                </div>

                <div className="hang div05">
                    <div className="head">
                        <h5>개인회원</h5>
                        <ul className="board_option">
                            <li className="on"><a href="/">전체<strong>46</strong></a></li>
                            <li><a href="/">내국인<strong>46</strong></a></li>
                            <li><a href="/">외국인<strong>23</strong></a></li>
                        </ul>
                        <Link href="/master/member"><a className="more">더보기<i className="jandaicon-arr4-right"></i></a></Link>
                    </div>
                    <ul className="table typeB">
                        <li className="head">
                            <div className="td01">이름</div>
                            <div className="td02">국적</div>
                            <div className="td03">가입방법</div>
                            <div className="td04">가입날짜</div>
                        </li>
                        <li className="body">
                            <div className="td01">
                                <span>김김김</span>
                                <span>010-2222-2222</span>
                            </div>
                            <div className="td02"><span>내국인</span></div>
                            <div className="td03">
                                <span>카카오연동</span>
                            </div>
                            <div className="td04">
                                <span>2020.01.10</span>
                            </div>
                        </li>
                        <li className="body">
                            <div className="td01">
                                <span>김김김</span>
                                <span>010-2222-2222</span>
                            </div>
                            <div className="td02"><span>내국인</span></div>
                            <div className="td03">
                                <span>카카오연동</span>
                            </div>
                            <div className="td04">
                                <span>2020.01.10</span>
                            </div>
                        </li>
                        <li className="body">
                            <div className="td01">
                                <span>김김김</span>
                                <span>010-2222-2222</span>
                            </div>
                            <div className="td02"><span>내국인</span></div>
                            <div className="td03">
                                <span>카카오연동</span>
                            </div>
                            <div className="td04">
                                <span>2020.01.10</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="hang div06">
                    <div className="head">
                        <h5>기업파트너회원</h5>
                        <ul className="board_option">
                            <li className="on"><a href="/">전체<strong>46</strong></a></li>
                            <li><a href="/">승인<strong>46</strong></a></li>
                            <li><a href="/">미승인<strong>23</strong></a></li>
                        </ul>
                        <Link href="/master/member"><a className="more">더보기<i className="jandaicon-arr4-right"></i></a></Link>
                    </div>
                    <ul className="table typeC">
                        <li className="head">
                            <div className="td01">파트너명/아이디</div>
                            <div className="td02">가입날짜</div>
                            <div className="td03">승인</div>
                        </li>
                        <li className="body">
                            <div className="td01">
                                <span>하나하나</span>
                                <span>zozo@gmail.com</span>
                            </div>
                            <div className="td02">
                                <span>2020.01.10</span>
                            </div>
                            <div className="td03">
                                <span>승인</span>
                            </div>
                        </li>
                        <li className="body">
                            <div className="td01">
                                <span>하나하나</span>
                                <span>zozo@gmail.com</span>
                            </div>
                            <div className="td02">
                                <span>2020.01.10</span>
                            </div>
                            <div className="td03">
                                <span>승인</span>
                            </div>
                        </li>
                        <li className="body">
                            <div className="td01">
                                <span>하나하나</span>
                                <span>zozo@gmail.com</span>
                            </div>
                            <div className="td02">
                                <span>2020.01.10</span>
                            </div>
                            <div className="td03">
                                <span>승인</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="hang div07">
                    <div className="head">
                        <h5>개인파트너회원</h5>
                        <ul className="board_option">
                            <li className="on"><a href="/">전체<strong>46</strong></a></li>
                            <li><a href="/">승인<strong>46</strong></a></li>
                            <li><a href="/">미승인<strong>23</strong></a></li>
                        </ul>
                        <Link href="/master/member"><a className="more">더보기<i className="jandaicon-arr4-right"></i></a></Link>
                    </div>
                    <ul className="table typeC">
                        <li className="head">
                            <div className="td01">파트너명/아이디</div>
                            <div className="td02">가입날짜</div>
                            <div className="td03">승인</div>
                        </li>
                        <li className="body">
                            <div className="td01">
                                <span>하나하나</span>
                                <span>zozo@gmail.com</span>
                            </div>
                            <div className="td02">
                                <span>2020.01.10</span>
                            </div>
                            <div className="td03">
                                <span>승인</span>
                            </div>
                        </li>
                        <li className="body">
                            <div className="td01">
                                <span>하나하나</span>
                                <span>zozo@gmail.com</span>
                            </div>
                            <div className="td02">
                                <span>2020.01.10</span>
                            </div>
                            <div className="td03">
                                <span>승인</span>
                            </div>
                        </li>
                        <li className="body">
                            <div className="td01">
                                <span>하나하나</span>
                                <span>zozo@gmail.com</span>
                            </div>
                            <div className="td02">
                                <span>2020.01.10</span>
                            </div>
                            <div className="td03">
                                <span>승인</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="hang div08">
                    <div className="head">
                        <h5>고객문의</h5>
                        <ul className="board_option">
                            <li className="on"><a href="/">전체<strong>46</strong></a></li>
                            <li><a href="/">답변<strong>46</strong></a></li>
                            <li><a href="/">미답변<strong>23</strong></a></li>
                        </ul>
                        <Link href="/member/inquirylist"><a className="more">더보기<i className="jandaicon-arr4-right"></i></a></Link>
                    </div>
                    <ul className="table typeD">
                        <li className="head">
                            <div className="td01">제목</div>
                            <div className="td02">유형</div>
                            <div className="td03">답변여부</div>
                            <div className="td04">작성일</div>
                            <div className="td05">글쓴이</div>
                        </li>
                        <li className="body">
                            <div className="td01">
                                <strong>제목제모ㅣㅇ리아르ㅠㅣㅏ으ㅠㅣㅇㅋ</strong>
                            </div>
                            <div className="td02">
                                <span>PK-923012</span>
                            </div>
                            <div className="td03">
                                <span>미답변</span>
                            </div>
                            <div className="td04">
                                <span>2020.01.10</span>
                            </div>
                            <div className="td05">
                                <span>김하나</span>
                            </div>
                        </li>

                        <li className="body">
                            <div className="td01">
                                <strong>제목제모ㅣㅇ리아르ㅠㅣㅏ으ㅠㅣㅇㅋ</strong>
                            </div>
                            <div className="td02">
                                <span>PK-923012</span>
                            </div>
                            <div className="td03">
                                <span>미답변</span>
                            </div>
                            <div className="td04">
                                <span>2020.01.10</span>
                            </div>
                            <div className="td05">
                                <span>김하나</span>
                            </div>
                        </li>

                        <li className="body">
                            <div className="td01">
                                <strong>제목제모ㅣㅇ리아르ㅠㅣㅏ으ㅠㅣㅇㅋ</strong>
                            </div>
                            <div className="td02">
                                <span>PK-923012</span>
                            </div>
                            <div className="td03">
                                <span>미답변</span>
                            </div>
                            <div className="td04">
                                <span>2020.01.10</span>
                            </div>
                            <div className="td05">
                                <span>김하나</span>
                            </div>
                        </li>

                    </ul>
                </div>

                <div className="hang div09">
                    <ul>
                        <li><Link href="/"><a><strong>사업자입점매뉴얼</strong><i className="jandaicon-arr4-right"></i></a></Link></li>
                        <li><Link href="/"><a><strong>상세페이지기본폼</strong><i className="jandaicon-arr4-right"></i></a></Link></li>
                        <li><Link href="/"><a><strong>스마트스토어</strong><i className="jandaicon-arr4-right"></i></a></Link></li>
                        <li><Link href="/"><a><strong>맞춤견적관리</strong><i className="jandaicon-arr4-right"></i></a></Link></li>
                        <li><Link href="/"><a><strong>카페24 SMS관리</strong><i className="jandaicon-arr4-right"></i></a></Link></li>
                        <li><Link href="/"><a><strong>카카오비즈톡관리</strong><i className="jandaicon-arr4-right"></i></a></Link></li>

                    </ul>
                </div>


            </div>
        </div>

    </MasterLayout>
};

export default MsIndex;