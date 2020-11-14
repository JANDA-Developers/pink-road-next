import { IUseProductList, useProductPostList } from 'hook/useProductPostList';
import React from 'react';
import BoardList from "components/board/List";
import { useRouter } from 'next/router';
import SortSelect from 'components/common/SortMethod';
import dayjs from 'dayjs';
import SubTopNav from 'layout/components/SubTop';
import Link from 'next/link';

interface IProp {
    context?: ITourListWrapContext;
}

export const TourList: React.FC<IProp> = ({ context }) => {
    const { items } = context;

    const router = useRouter();

    const handleWrite = () => {
        router.push("/tour/write")
    }

    return <div>
        <SubTopNav title="Tour" desc="지금 여행을 떠나세요~!~~!!!!!" />
        <div className="tour_box">
            <div className="w1200">
                <div className="deal_list">
                    <div className="search">
                        <ul>
                            <li className="on"><a href="../sub/tour_list.html">전체</a></li>
                            <li><a href="../sub/tour_list.html">문화·예술여행</a></li>
                            <li><a href="../sub/tour_list.html">교육·답사여행</a></li>
                            <li><a href="../sub/tour_list.html">역사여행</a></li>
                            <li><a href="../sub/tour_list.html">팸투어</a></li>
                        </ul>
                    </div>
                    <div className="alignment">
                        <div className="left_div"><span className="infotxt">총 <strong>22,222</strong>개</span></div>
                        <div className="right_div">
                            <select className="sel01">
                                <option>추천수</option>
                                <option>예약수</option>
                                <option>조회수</option>
                            </select>
                            <select className="sel02">
                                <option>10개 보기</option>
                                <option>50개 보기</option>
                                <option>100개 보기</option>
                            </select>
                            <ul className="al_02">
                                <li> <a href="#" className="view_icon"><svg><rect width={4} height={2} style={{ fill: '#b7b7b7' }} /><rect x={7} width={13} height={2} style={{ fill: '#b7b7b7' }} /><rect y={7} width={4} height={2} style={{ fill: '#b7b7b7' }} /><rect x={7} y={7} width={13} height={2} style={{ fill: '#b7b7b7' }} /><rect y={15} width={4} height={2} style={{ fill: '#b7b7b7' }} /><rect x={7} y={15} width={13} height={2} style={{ fill: '#b7b7b7' }} /></svg></a></li>
                                <li><a href="#" className="view_icon on"><svg><rect width={9} height={8} style={{ fill: '#b7b7b7' }} /><rect x={11} width={9} height={8} style={{ fill: '#b7b7b7' }} /><rect y={10} width={9} height={8} style={{ fill: '#b7b7b7' }} /><rect x={11} y={10} width={9} height={8} style={{ fill: '#b7b7b7' }} /></svg></a></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="list_ul line3">
                        {items.map(item =>
                            <Link href={`/tour/view/${item._id}`}>
                                <li key={item._id} className="list_in">
                                    <div className="img" style={{ backgroundImage: `url(${item.images?.[0]?.uri})` }}>상품이미지</div>
                                    <div className="box">
                                        <div className="category"><span>{item.category?.label}</span></div>
                                        <div className="title">{item.title}</div>
                                        <div className="bottom_txt">
                                            <div className="subtitle">
                                                {item.subTitle}
                                            </div>
                                            <div className="tag2">
                                                {item.keyWards.map((keyWard, index) =>
                                                    <span key={index + "keyward"}>#{keyWard}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        )}
                    </ul>
                    {/* 페이지넘버 */}
                    <div className="pagenate">
                        <div className="page">
                            <a href="/kor/view.do?no=170" className="page_btn first">처음</a>
                            <a href="/kor/view.do?no=170" className="page_btn prev">이전</a>
                            <a href="#none" className="on">1</a>
                            <a href="/kor/view.do?no=170" className="off">2</a>
                            <a href="/kor/view.do?no=170" className="off">3</a>
                            <a href="/kor/view.do?no=170" className="off">4</a>
                            <a href="/kor/view.do?no=170" className="off">5</a>
                            <a href="/kor/view.do?no=170" className="off">6</a>
                            <a href="/kor/view.do?no=170" className="off">7</a>
                            <a href="/kor/view.do?no=170" className="off">8</a>
                            <a href="/kor/view.do?no=170" className="off">9</a>
                            <a href="/kor/view.do?no=170" className="off">10</a>
                            <a href="/kor/view.do?no=170" className="page_btn next">다음</a>
                            <a href="/kor/view.do?no=170" className="page_btn end">마지막</a>
                        </div>
                    </div>
                    {/* // 페이지넘버 */}
                    <div className="tl list_bottom">
                        {/* member/상품 등록하기 */}
                        <div className="btn_footer">
                            <span className="xet_btn medium gray">상품 등록하기</span>
                        </div>
                        {/* member/상품 등록하기 */}
                        {/* 하단 검색창 */}
                        <div className="search_mini">
                            <div className="in">
                                <input type="text" placeholder="검색 내용을 입력해주세요." />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.94 31.44">
                                    <path className="cls-5" d="M313.17,433.49l-4.86-5.31a14.48,14.48,0,0,0-1-19.41,14.55,14.55,0,0,0-10.24-4.21,14.47,14.47,0,0,0,0,28.94,14.17,14.17,0,0,0,1.72-.1,1.5,1.5,0,1,0-.35-3,11.47,11.47,0,1,1-1.38-22.86h0a11.48,11.48,0,0,1,8.14,19.56,1.49,1.49,0,0,0,0,2.12.91.91,0,0,0,.13.08,1.2,1.2,0,0,0,.15.24l5.45,5.95a1.46,1.46,0,0,0,1.1.49,1.53,1.53,0,0,0,1-.39A1.5,1.5,0,0,0,313.17,433.49Z" transform="translate(-282.62 -404.56)" />
                                </svg>
                            </div>
                        </div>
                        {/* // 하단 검색창 */}
                    </div>
                </div>
            </div>
        </div>
    </div>


    //리스트뷰
    // return <BoardList onWrite={handleWrite} FilterSort={
    //     <div>
    //         <SortSelect />
    //     </div>} >
    //     <ul className="list_ul line4">
    //         {items.map(item => (
    //             <li key={item._id}>
    //                 <div className="td01">
    //                     <div className="img" style={{
    //                         backgroundImage: `url(${item.images[0]?.uri})`
    //                     }}>상품이미지</div>
    //                 </div>
    //                 <div className="td02"><span className="ct_01">{item.category?.label}</span></div>
    //                 <div className="td03">{item.title}</div>
    //                 <div className="td04">{dayjs(item.createdAt).format("YYYY.MM.DD")}</div>
    //             </li>
    //         ))}
    //     </ul>
    // </BoardList>
};



interface ITourListWrapContext extends IUseProductList {

}

const TourListWrap: React.FC<IProp> = () => {

    const productContext = useProductPostList();

    const context: ITourListWrapContext = {
        ...productContext
    }

    return <TourList context={context} />
}

export default TourListWrap;