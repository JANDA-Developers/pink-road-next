import React,{useState, useEffect} from 'react'
import Bxlist from 'components/bxlist/Bxlist'
import {autoComma} from 'utils/formatter'

type TNaviInfo = {
    pageNum:number,
    pagiNaviNum:number
}

const listNumPerPage = 10; 
const naviNumPerPage = 10;

const bxlist = () => {

    const [boardInfo, setBoardInfo] = useState({
        postNum : 2000
    });

    const [naviInfo, setNaviInfo] = useState({
        pageNum:0,
        pagiNaviNum:0,
        sPagi:1,
        ePagi:10
    });

    const [infoList, setInfoList] = useState([
        {
            id:1,
            sort:"안내",
            title:"10월의 여행일정 미리 공지",
            newPost:true,
            date:"2020.02.02 11:00"
        },
        {
            id:2,
            sort:"공지",
            title:"10월의 여행일정 미리 공지",
            newPost:false,
            date:"2020.02.02 11:00"
        },
        {
            id:3,
            sort:"공지",
            title:"10월의 여행일정 미리 공지",
            newPost:false,
            date:"2020.02.02 11:00"
        },
        {
            id:4,
            sort:"안내",
            title:"10월의 여행일정 미리 공지",
            newPost:true,
            date:"2020.02.02 11:00"
        }
    ]);

    useEffect(() => {

        const current_pageNum = Math.ceil(boardInfo.postNum/listNumPerPage); 
        const current_pagiNaviNum = Math.ceil(current_pageNum/naviNumPerPage); 
        
        setNaviInfo(
            {
                ...naviInfo,
                pageNum:current_pageNum,
                pagiNaviNum:current_pagiNaviNum,
            }
        )

      },[]);

    return (
        <>
           <div className="board_box">
             <div className="w1200">
                <div>
                    <span>
                    [aa]  페이지 : {naviInfo.pageNum} 개 [bb] 블록 : {naviInfo.pagiNaviNum}
                    [cc]  s-Pagi : {naviInfo.sPagi} [dd] e-Pagi : {naviInfo.ePagi}
                    </span>
                </div>
                <div className="alignment">
                <div className="left_div">
                    <span className="infotxt">
                    총 <strong>{autoComma(boardInfo.postNum)}</strong>개
                    </span>
                   
                </div>
                <div className="right_div">
                    <select className="sel01">
                    <option>최신↑</option>
                    <option>최신↓</option>
                    <option>조회수</option>
                    </select>
                    <select className="sel02">
                    <option>10개 보기</option>
                    <option>50개 보기</option>
                    <option>100개 보기</option>
                    </select>
                </div>
                </div>
                <div className="board_list st01">
                <div className="tbody">
                    <ul>
                        {
                            infoList.map(function(infoList){
                                return <Bxlist id={infoList.id} sort={infoList.sort} 
                                title={infoList.title} newPost={infoList.newPost} date={infoList.date}
                                />
                            })
                        }
                    </ul>
                </div>
                </div>
                <div className="pagenate">
                <div className="page">
                    <a href="/kor/view.do?no=170" className="page_btn first">
                    처음
                    </a>
                    <a href="/kor/view.do?no=170" className="page_btn prev">
                    이전
                    </a>
                    <a href="#none" className="on">
                    1
                    </a>
                    <a href="/kor/view.do?no=170" className="off">
                    2
                    </a>
                    <a href="/kor/view.do?no=170" className="off">
                    3
                    </a>
                    <a href="/kor/view.do?no=170" className="off">
                    4
                    </a>
                    <a href="/kor/view.do?no=170" className="off">
                    5
                    </a>
                    <a href="/kor/view.do?no=170" className="off">
                    6
                    </a>
                    <a href="/kor/view.do?no=170" className="off">
                    7
                    </a>
                    <a href="/kor/view.do?no=170" className="off">
                    8
                    </a>
                    <a href="/kor/view.do?no=170" className="off">
                    9
                    </a>
                    <a href="/kor/view.do?no=170" className="off">
                    10
                    </a>
                    <a href="/kor/view.do?no=170" className="page_btn next">
                    다음
                    </a>
                    <a href="/kor/view.do?no=170" className="page_btn end">
                    마지막
                    </a>
                </div>
                </div>
                <div className="tl list_bottom">
                {/* member/상품 등록하기 */}
                <div className="btn_footer">
                    <button type="submit" className="btn medium pointcolor">
                    글쓰기
                    </button>
                </div>
                {/* member/상품 등록하기 */}
                {/* 하단 검색창 */}
                <div className="search_mini">
                    <div className="in">
                    <input type="text" placeholder="검색 내용을 입력해주세요." />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.94 31.44">
                        <path
                        className="cls-5"
                        d="M313.17,433.49l-4.86-5.31a14.48,14.48,0,0,0-1-19.41,14.55,14.55,0,0,0-10.24-4.21,14.47,14.47,0,0,0,0,28.94,14.17,14.17,0,0,0,1.72-.1,1.5,1.5,0,1,0-.35-3,11.47,11.47,0,1,1-1.38-22.86h0a11.48,11.48,0,0,1,8.14,19.56,1.49,1.49,0,0,0,0,2.12.91.91,0,0,0,.13.08,1.2,1.2,0,0,0,.15.24l5.45,5.95a1.46,1.46,0,0,0,1.1.49,1.53,1.53,0,0,0,1-.39A1.5,1.5,0,0,0,313.17,433.49Z"
                        transform="translate(-282.62 -404.56)"
                        />
                    </svg>
                    </div>
                </div>
                {/* // 하단 검색창 */}
                </div>
              </div>
            </div>
        </>
    )
}

export default bxlist
