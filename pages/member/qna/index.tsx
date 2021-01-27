import React, { useContext } from 'react';
import Link from "next/link";
import SubTopNav from '../../../layout/components/SubTop';
import { usePageEdit } from '../../../hook/usePageEdit';
import { getStaticPageInfo, Ipage } from '../../../utils/page';
import defaultPageInfo from "../../../info/qna.json"
import { AppContext } from '../../_app';
import { useRouter } from 'next/router';


export const getStaticProps = getStaticPageInfo("main");
export const Qna: React.FC<Ipage> = (pageInfo) => {
    const router = useRouter();
    const { isManager } = useContext(AppContext)
    const pageTools = usePageEdit(pageInfo, defaultPageInfo);

    const handleGoTo = () => {
        router.push("/")
    }
    return <div>
        <SubTopNav pageTools={pageTools} >
            <li><Link href="/member/notice"><a>공지사항</a></Link></li>
            <li className="on"><Link href="/member/qna"><a>자주하는 질문</a></Link></li>
            <li><Link href="/member/inquiry"><a>고객문의</a></Link></li>
        </SubTopNav>
        <div className="qna_box w1200">
            <ul className="subtop_nav">
                <li><Link href="/member/notice"><a>공지사항</a></Link></li>
                <li className="on"><Link href="/member/qna"><a>자주하는 질문</a></Link></li>
                <li><Link href="/member/inquiry"><a>고객문의</a></Link></li>
            </ul>
            <div className="board_qna">
                <div className="alignment">
                    <div className="left_div">
                        <ul className="board_option">
                            <li className="on"><a href="/">전체<strong>46</strong></a></li>
                            <li><a href="/">여행<strong>23</strong></a></li>
                            <li><a href="/">체험<strong>23</strong></a></li>
                            <li><a href="/">회원<strong>23</strong></a></li>
                        </ul>
                    </div>
                    <div className="right_div">
                    </div>
                </div>
                <div className="dl">
                    <div className="dt"><span><i className="Q"></i>여행</span>문의는 어디서 하죠? <i className="jandaicon-arr4-bottom"></i></div>
                    <div className="dd panel-collapse collapse in">
                        <div className="form">
                            <i className="A"></i>
                            <p>문의는 고객문의 게시판에서 해주세요.문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요</p>
                        </div>
                    </div>
                </div>

                <div className="dl active">{/* active 추가시 열림 이벤트 */}
                    <div className="dt"><span><i className="Q"></i>여행</span>문의는 어디서 하죠? <i className="jandaicon-arr4-bottom"></i></div>
                    <div className="dd panel-collapse collapse in">
                        <div className="form">
                            <i className="A"></i>
                            <p>문의는 고객문의 게시판에서 해주세요.문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요문의는 고객문의 게시판에서 해주세요</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fin mt30 mb100">
                <div className="float_left">
                    {isManager && <button onClick={handleGoTo} type="submit" className="btn medium">새글쓰기</button>}
                </div>
                <div className="float_right">
                </div>
            </div>
        </div>
    </div>
}


export default Qna; usePageEdit