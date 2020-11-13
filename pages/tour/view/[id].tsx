import { Itinery } from "components/tourView/Itinery";
import dayjs from "dayjs";
import { useProductFindById } from "hook/useProductFindById";
import SubTopNav from "layout/components/SubTop";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { IProductPostFindById } from "types/interface";
import EditorRendererProvider from 'react-editorjs-renderer';
import { autoComma } from "utils/formatter";
import Page404 from "pages/404";
import { AppContext } from "pages/_app";


// <div class="top_visual">
// <div class="sub_header sub_bg" style="background-image:url(../img/su_visual_bg.jpg);">
//     <div class="w1200">
//         <h2 class="title">Tour</h2><p class="text"></p>
//     </div>
// </div>
// <div class="header_nav">
//     <ul>
//         <li class="home">
//             <a href="../main/main.html">
//             </a>
//         </li>
//         <li class="homedeps1"><a href="../sub/tour_main.html">Tour</a></li>
//         <li class="homedeps2"><a href="../sub/tour_list.html">상품리스트</a></li>
//     </ul>
// </div>
// </div>

interface IProps {
    productPost: IProductPostFindById;
}

const TourDetail:React.FC<IProps> = ({productPost}) => {
    const {isManager,isAdmin } = useContext(AppContext);
    const {
        _id,
        address,
        adult_price,
        author,
        baby_price,
        category,
        caution,
        content,
        createdAt,
        images,
        inOrNor,
        info,
        isDelete,
        itinerary,
        keyWards,
        kids_price,
        maxMember,
        minMember,
        startPoint,
        status,
        subTitle,
        title,
        updatedAt
    } = productPost;

    const [tab, setTab] = useState<number>(1);

    const router = useRouter();

    
    const tabOnCheck = (index: number) => tab === index ? "on" : undefined;

    const handleTab = (index: number) => {
        setTab(index)
    }

    const toWrite = () => router.push(`/tour/write/${_id}`)

    const handleEdit = () => {
        toWrite();
    }

    const handleDelete = () => {
        toWrite();
    }


        return     <div>
            <SubTopNav children={
                <>
                 <li className="homedeps1">
                     <Link href="/tour/">
                         <a>Tour</a>
                     </Link></li>
                 <li className="homedeps2">
                     <Link href="/tour/list">
                     <a >상품리스트</a>
                     </Link>
                     </li>
                </>
            } title="Tour" desc="지금 여행을 떠나세요~!~~!!!!!" subTopBg={'/img/su_visual_bg.jpg'}  />
            <div className="tour_details_in w1200">

            
            <div className="Document">
    <div className="Read_box">
      <div className="details_photo">
        <div className="main_photo">
            {images?.[0] && 
                <img src={`${images?.[0].uri}`} alt="선택된 썸네일 이미지" />
            }
        </div>
        <ul className="photo_list">
            {images?.map(img => 
                <li className="on"><span><img src={img?.uri} alt={img.name} /></span></li>
            )}
        </ul>
        <div className="details_info_txt">
          <i className="flaticon-flag-1" /> {info}
        </div>
      </div>
    </div>
    <div id="viewControl">
      <div className="control_box">
        <div className="box2">
          <table cellSpacing={0} summary="Extra Form" className="option_tb mb10 big_pd">
            <tbody>
              <tr>
                <td colSpan={2} className="category bt_no">
                  <span className="pnt">문화/예술</span>
                  <span className="code">상품코드:PINK-0001</span>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="bt_line">
                  <h3 className="maintitle">복닥복닥 원도심 No1 서구 / 중구일대코스 마을여행(1박2일)</h3>
                  <p className="subtitle">골목따라 걷는 여행</p>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="tag bt_line">
                  <div className="tt">키워드</div>
                  <ul>
                      {keyWards.map(keyward =>
                        <li>#{keyward}</li>
                        )}
                  </ul>
                </td>
              </tr>
              <tr>
                <th className="smtitle bt_line">여행기간</th>
                <td className="smtxt bt_line">1박2일</td>
              </tr>
              <tr>
                <th className="smtitle bt_line">최소인원</th>
                <td className="smtxt bt_line">11명</td>
              </tr>
              <tr>
                <th className="smtitle bt_line">최대인원</th>
                <td className="smtxt bt_line">11명</td>
              </tr>
              <tr>
                <th className="smtitle bt_no">출발장소</th>
                <td className="smtxt bt_no">행복복지센터</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="box">
          <table  cellSpacing={0} summary="Extra Form" className="option_tb">
            <tbody>
              <tr>
                <th>대인</th>
                <td>
               <strong>{autoComma(adult_price)}</strong>원
                  <div className="number_box">
                    <span className="left_btn"><i className="flaticon-substract" /></span>
                    <span className="number">0</span>
                    <span className="right_btn"><i className="flaticon-add" /></span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>소인</th>
                <td>
                  <strong>{autoComma(kids_price)}</strong>원
                  <div className="number_box">
                    <span className="left_btn"><i className="flaticon-substract" /></span>
                    <span className="number">0</span>
                    <span className="right_btn"><i className="flaticon-add" /></span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>유아</th>
                <td>
                  <strong>{autoComma(baby_price)}</strong>원
                  <div className="number_box">
                    <span className="left_btn"><i className="flaticon-substract" /></span>
                    <span className="number">0</span>
                    <span className="right_btn"><i className="flaticon-add" /></span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="chash_box">
            <table  cellSpacing={0} summary="Extra Form" className="chash_tb">
              <tbody>
                <tr>
                  <th>총 금액</th>
                  <td>
                    <strong>10,000</strong>원
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* btn */}
        <div className="btn_box">
          <div className="links_wrap">
            <div className="link05">
              <a href="/">
                장바구니 담기
              </a>
            </div>
            <div className="link02">
              <a href="/">
                결제하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* // 본문 출력 // */}
  <div className="boardReadBody">
    <div className="xe_content">
      <div className="con_top_tap">
        <span onClick={() => { handleTab(1) }} className={tabOnCheck(1)}><a>여행상세설명</a></span>
        <span onClick={() => { handleTab(2) }} className={tabOnCheck(2)}><a>안내 및 참고</a></span>
        <span onClick={() => { handleTab(3) }} className={tabOnCheck(3)}><a >포함 및 불포함</a></span>
        <span onClick={() => { handleTab(4) }} className={tabOnCheck(4)}><a >문의하기</a></span>
      </div>
      {/* 여행상세설명 */}
      {tab === 1 && itinerary.map((it) =>  
      <div key={it._id + "itnerary"} className="in_box" id="tap__01">
        <h4>여행일정</h4>
        <div className="hang">
          <div className="top_day">
            <h5>{it.title}</h5>
            <span>{dayjs(it.createdAt).format('YYYY.MM.DD (WW)')}</span>
          </div>
          <div className="tour_list">
            {it.contents.map((con,index) => 
            <p key={index + "con"  + it._id}>{con}</p>
            )}
          </div>
        </div>
      </div>
      )}
      {tab === 2 && <>
                <div className="in_box" id="tap__02">
                <h4>안내 및 참고</h4>
                <p className="text">
                    <EditorRendererProvider data={content} />
                </p>
            </div>
        </>
      }
      {tab === 3 && <>
        {/* 포함 및 불포함 */}
        <div className="in_box" id="tap__03">
            <h4>안내 및 참고</h4>
            <p className="text">
                <EditorRendererProvider data={inOrNor}  />
            </p>
        </div>
      </>
      }
      
      {tab === 4 &&
      <div className="in_box" id="tap__04">
        <h4>문의하기</h4>
        <div className="board_list_mini ln04">
          <div className="thead">
            <div className="th01">No.</div>
            <div className="th02">제목</div>
            <div className="th03">글쓴이</div>
            <div className="th04">날짜</div>
          </div>
          <div className="tbody">
            <ul>
              <li>
                <div className="th01">221</div>
                <div className="th02">궁금한게 있어요 :) <i className="q_ok">답변완료</i></div>
                <div className="th03">뀨이뀨이</div>
                <div className="th04">2020.02.02 11:00</div>
              </li>
              <li>
                <div className="th01">221</div>
                <div className="th02">궁금한게 있어요 :)<i className="q_no">답변중</i></div>
                <div className="th03">뀨이뀨이</div>
                <div className="th04">2020.02.02 11:00</div>
              </li>
              <li>
                <div className="th01">221</div>
                <div className="th02">궁금한게 있어요 :)<i className="q_ok">답변완료</i></div>
                <div className="th03">뀨이뀨이</div>
                <div className="th04">2020.02.02 11:00</div>
              </li>
              <li>
                <div className="th01">221</div>
                <div className="th02">궁금한게 있어요 :)<i className="q_ok">답변완료</i></div>
                <div className="th03">뀨이뀨이</div>
                <div className="th04">2020.02.02 11:00</div>
              </li>
            </ul>
          </div>
          <div className="boardNavigation">
            <div className="float_left">
              <div className="pagenate_mini">
                <div className="page_btn first"><i className="jandaicon-arr4-left" /></div>
                <div className="count"><strong>1</strong> / 10</div>
                <div className="page_btn end"><i className="jandaicon-arr4-right" /></div>
              </div>
            </div>
            <div className="float_right">
              <a href="" className="mini_btn small">고객센터 문의하기</a>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
    <div className="boardNavigation">
      <div className="float_left">
      </div>
     {(isManager || isAdmin) && <div className="float_right">
        <button type="submit" onClick={handleEdit} className="btn medium pointcolor">수정</button>
        <button type="submit" onClick={handleDelete} className="btn medium">삭제</button>
      </div>}
    </div>
    <div className="add_list">
      <h4>핑크로더 추천여행</h4>{/* 랜덤노출 */}
      <ul className="list_ul line3">
        <li className="list_in">
          <div className="img" onClick={()=>{}} style={{backgroundImage: 'url(../img/sample_01.gif)'}}>상품이미지</div>
          <div className="box">
            <div className="category"><span>문화/예술</span></div>
            <div className="title">더운날 수목원으로 오세요~!!</div>
            <div className="bottom_txt">
              <div className="subtitle">
                골목길따가 추억을 걷는 여행
              </div>
              <div className="tag2">
                <span>#1박2일</span>
                <span>#버스투어</span>
                <span>#서구/중구</span>
              </div>
            </div>
          </div>
        </li>
        <li className="list_in">
          <div className="img" onClick={()=>{}} style={{backgroundImage: 'url(../img/sample_01.gif)'}}>상품이미지</div>
          <div className="box">
            <div className="category"><span>문화/예술</span></div>
            <div className="title">더운날 수목원으로 오세요~!!</div>
            <div className="bottom_txt">
              <div className="subtitle">
                골목길따가 추억을 걷는 여행
              </div>
              <div className="tag2">
                <span>#1박2일</span>
                <span>#버스투어</span>
                <span>#서구/중구</span>
              </div>
            </div>
          </div>
        </li>
        <li className="list_in">
          <div className="img" onClick={()=>{}} style={{backgroundImage: 'url(../img/sample_01.gif)'}}>상품이미지</div>
          <div className="box">
            <div className="category"><span>문화/예술</span></div>
            <div className="title">더운날 수목원으로 오세요~!!</div>
            <div className="bottom_txt">
              <div className="subtitle">
                골목길따가 추억을 걷는 여행
              </div>
              <div className="tag2">
                <span>#1박2일</span>
                <span>#버스투어</span>
                <span>#서구/중구</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  </div>
  </div>
}

const TourDetailWrap = () => {
    const {query} = useRouter();
    const id = query.id as string;
    const {loading, productPost} = useProductFindById({
        variables: {
             _id: id
        },
        skip: !id
    });

    if(loading) return null
    if(!productPost) return  <Page404/>

    return <TourDetail productPost={productPost} />
}

export default TourDetailWrap;