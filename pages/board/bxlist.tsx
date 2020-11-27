import React,{useState, useEffect} from 'react'
import Bxlist from 'components/bxlist/Bxlist'
import {autoComma} from 'utils/formatter'

type TNaviInfo = {
    pageNum:number,
    pagiNaviNum:number
}

const bxlist = () => {

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
        },
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
        }
    ]);
    
    const [boardInfo, setBoardInfo] = useState({
        listNumPerPage:10,
        naviNumPerPage:10,
        postNum : 1000,
        listOrder:"recent"
    });

    const [pageNum, setPageNum] = useState<number>();

    const [spage, setSPage] = useState<number>(1);
    const [epage, setEPage] = useState<number>();
    const [currentPage, setCurrentPage] = useState<number>(1);

   

    useEffect(() => {

        const current_pageNum = Math.ceil(boardInfo.postNum/boardInfo.listNumPerPage); 
  
        let current_ePage = spage + (boardInfo.naviNumPerPage-1);
        if(current_ePage >= pageNum) {
            current_ePage = pageNum;
        }
        setPageNum(current_pageNum);
   
        setEPage(current_ePage);

      },[spage]);


      const paginationDisplay = () => {
        let naviList = [];
        let i = spage;
        for(i; i<= epage; i++){
            let pageVal = i;
            naviList.push(
                <a href="#" className={currentPage == pageVal ? "on" : "off"} 
                   onClick={(e)=>{handleNavi(e,pageVal)}}>{i}</a>);
        }
        return naviList;
    }

    const currentPageUpdate = (currentPage:number) =>{
        setCurrentPage(currentPage);
    }

    const handeOrder = (e) => {
        setBoardInfo({
            ...boardInfo,
            listOrder:e.target.value
        })
    }

    const handleListNum = (e) => {
        const newListNum = parseInt(e.target.value); 
        setBoardInfo({
            ...boardInfo,
            listNumPerPage:newListNum
        })
    }

    const handleNavi = (e,naviTarget:number) => {
        e.preventDefault();
        currentPageUpdate(naviTarget);
      }

    const handleFirst = (e) => {
        e.preventDefault();
        setSPage(1);
        currentPageUpdate(1);
      }

      const handleEnd = (e) => {
        e.preventDefault();
        const sNumber = pageNum - (boardInfo.naviNumPerPage-1); 
        setSPage(sNumber);
        currentPageUpdate(sNumber);
      }

      const handlePrev = (e) => {
        e.preventDefault();
        if(spage > 1) {
            const prevPage = spage - boardInfo.naviNumPerPage;  
            setSPage(prevPage);
            currentPageUpdate(prevPage);
        }
      }

      const handleNext = (e) => {
        e.preventDefault();
        if(epage < pageNum) {
            const nextPage = epage + 1;
            setSPage(nextPage);
            currentPageUpdate(nextPage);
        }else{
            alert('마지막 페이지 입니다');
        }
      }

    return (
        <>
            <div className="board_box">
                준비중입니다.
                <div className="w1200 betatest">
                <div>
                    <span>
                    [ 페이지 ] : {pageNum} 개 [ 블록 ] : 
                    [ s-Pagi ] : {spage}  [ e-Pagi ] : {epage}
                    </span>
                </div>
                <div className="alignment">
                <div className="left_div">
                    <span className="infotxt">
                    총 <strong>{autoComma(boardInfo.postNum)}</strong>개
                    </span>
                   
                </div>
                <div className="right_div">
                    <select className="sel01" onChange={(e)=>{handeOrder(e)}}>
                    <option value="recent">최신↑</option>
                    <option value="old">최신↓</option>
                    <option value="viewed">조회수</option>
                    </select>
                    <select className="sel02" onChange={(e)=>{handleListNum(e)}}>
                        <option value="10">10개 보기</option>
                        <option value="50">50개 보기</option>
                        <option value="100">100개 보기</option>
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
                    <a href="/kor/view.do?no=170" className="page_btn first" onClick={handleFirst}>
                    처음
                    </a>
                    <a href="/kor/view.do?no=170" className="page_btn prev" onClick={handlePrev}>
                    이전
                    </a>
                    {
                        paginationDisplay()      
                    }
                    {/* 
                        <a href="#none" className="on">
                        1
                        </a>
                        <a href="/kor/view.do?no=170" className="off">
                        2
                        </a>
                        <a href="/kor/view.do?no=170" className="off">
                        3
                        </a> 
                    */}

                    <a href="/kor/view.do?no=170" className="page_btn next" onClick={handleNext}>
                    다음
                    </a>
                    <a href="/kor/view.do?no=170" className="page_btn end" onClick={handleEnd}>
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
