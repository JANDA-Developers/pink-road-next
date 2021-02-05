import React, { useContext, useState } from 'react';
import Link from "next/link";
import SubTopNav from '../../../layout/components/SubTop';
import { usePageEdit } from '../../../hook/usePageEdit';
import { getStaticPageInfo, Ipage } from '../../../utils/page';
import defaultPageInfo from "../../../info/qna.json"
import { AppContext } from '../../_app';
import { useRouter } from 'next/router';
import { MemberTopNav } from '../../../components/topNav/MemberTopNav';
import { useQnaList } from '../../../hook/useQna';
import { qnaList_QnaList_data } from '../../../types/api';
import sanitizeHtml from 'sanitize-html';


export const getStaticProps = getStaticPageInfo("main");
export const Qna: React.FC<Ipage> = (pageInfo) => {
    const { items, filter, setFilter } = useQnaList({ initialViewCount: 999 })
    const router = useRouter();
    const { isManager, categoriesMap } = useContext(AppContext)
    const pageTools = usePageEdit(pageInfo, defaultPageInfo);
    const [openId, setOpenId] = useState("")

    const gotoWrite = () => {
        router.push("/member/qna/write/")
    }

    const checkCatEq = (catId?: string) => filter.categoryId_eq === catId ? "on" : "";
    const checkCatCount = (catId: string) => items.filter(item => item._id === catId).length;

    const handleToogle = (qna: qnaList_QnaList_data) => () => {
        if (openId === qna._id) {
            setOpenId("");
        } else {
            setOpenId(qna._id);
        }
    }

    return <div>
        <SubTopNav pageTools={pageTools} >
            <li className="homedeps1">Member</li>
            <li className="homedeps2">
                <Link href="/member/qna"><a>자주하는 질문</a></Link>
            </li>
        </SubTopNav>
        <div className="qna_box w1200">
            <MemberTopNav />
            <div className="board_qna">
                <div className="alignment">
                    <div className="left_div">
                        <ul className="board_option">
                            <li className={checkCatEq(undefined)}><a>전체</a></li>
                            {categoriesMap.QNA.map(cat =>
                                <li key={cat._id}><a>{cat.label}<strong>{checkCatCount(cat._id)}</strong></a></li>
                            )}
                        </ul>
                    </div>
                    <div className="right_div">
                    </div>
                </div>
                {items.map(qna =>
                    <div onClick={handleToogle(qna)} key={qna._id} className={`dl ${openId === qna._id && "active"}`}>
                        <div className="dt"><span><i className="Q"></i>{qna.category?.label}</span>{qna.title}

                            <button onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                router.push("/member/qna/write/" + qna._id)
                            }} type="submit" className="btn medium">수정하기</button>
                            <i className="jandaicon-arr4-bottom"></i></div>

                        <div className="dd panel-collapse collapse in">
                            <div className="form">
                                <i className="A" />
                                <p dangerouslySetInnerHTML={{
                                    __html: sanitizeHtml(qna.contents)
                                }} />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="fin mt30 mb100">
                <div className="float_left">
                    {isManager && <button onClick={gotoWrite} type="submit" className="btn medium">새글쓰기</button>}
                </div>
                <div className="float_right">
                </div>
            </div>
        </div>
    </div>
}


export default Qna;