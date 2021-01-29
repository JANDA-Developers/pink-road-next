import dayjs from "dayjs";
import { useProductFindById } from "hook/useProduct";
import SubTopNav from "layout/components/SubTop";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import { autoComma } from "utils/formatter";
import Page404 from "pages/404";
import { AppContext } from "pages/_app";
import { useProductDelete } from "hook/useProduct";
import Slider, { Slide } from "../../../components/slider/Slider";
import SLIDER from "react-slick";
import { useScroll } from "../../../hook/useScroll";
import { handleTab, tabCheck } from "../../../components/tourView/tabUtils";
import { toast } from "react-toastify";
import { addItem } from "../../../utils/Storage";
import { useBasketCount } from "../../../hook/useBasket";
import { getRangeString } from "../../../utils/product";
import { generateClientPaging } from "../../../utils/generateClientPaging";
import { Paginater } from "../../../components/common/Paginator";
import { QnaLi } from "../../../components/qna/QnaLi";
import PageLoading from "../../Loading";
import { getStaticPageInfo, Ipage } from "../../../utils/page";
import { usePageEdit } from "../../../hook/usePageEdit";
import defaultPageInfo from 'info/tourView.json';
import "slick-carousel/slick/slick.css";

export const getStaticProps = getStaticPageInfo("tourView");
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } }
    ],
    fallback: true
  };
}
const TourDetail: React.FC<Ipage> = (pageInfo) => {
  const router = useRouter();
  const pageTools = usePageEdit(pageInfo, defaultPageInfo);
  const id = router.query.id as string;
  const { loading, item: product } = useProductFindById(id);
  const { isManager, isAdmin, myProfile } = useContext(AppContext);
  const isMyProduct = product?.author?._id === myProfile?._id;

  const { paging: questionPageInfo, slice: questionSliced, setPage: setQuestionPage } = generateClientPaging(product?.questions || [], 4);


  const sliderRef = useRef<SLIDER>(null);
  const { count, handleCount, totalPrice } = useBasketCount({
    adult_price: product?.adult_price,
    baby_price: product?.baby_price,
    kids_price: product?.kids_price,
    defaultCount: {
      adult: 0,
      baby: 0,
      kids: 0
    }
  });

  const [sliderIndex, setSlideIndex] = useState(0);
  const { scrollY } = useScroll();
  const tabOnCheck = tabCheck.bind(tabCheck, scrollY);


  const { productDelete } = useProductDelete({
    onCompleted: ({
      ProductDelete
    }) => {
      if (ProductDelete.ok) {
        alert("삭제완료");
        router.push("/")
      }
    }
  })

  const toWrite = () => router.push(`/tour/write/${product?._id}`)

  const handleEdit = () => {
    toWrite();
  }

  const handleDelete = () => {
    productDelete({
      id: product!._id
    })
  }

  const handleSliderMove = (index: number) => () => {
    sliderRef.current?.slickGoTo(index)
    setSlideIndex(index);
  }

  const checkImgOn = (index: number): string => {
    return index === sliderIndex ? "on" : ""
  }

  const handleAddBracket = () => {
    addItem({
      count,
      price: totalPrice,
      name: product!.title,
      _id: product!._id
    })

    if (count.adult + count.baby + count.kids === 0) {
      toast.info("인원을 먼저 선택 해주세요.");
    } else {
      toast.info("장바구니에 저장 되었습니다.")
    }
  }

  const handleQnaClick = (id: string) => () => {
    router.push("/member/qna/view/" + id);
  }

  const handleDoPay = () => {
    handleAddBracket()
    router.push("/payment/")
  }

  useEffect(() => {
    if (!product) return;
  }, [product])


  if (loading) return <PageLoading />
  if (!product) return <Page404 />

  const {
    images,
    keyWards,
    adult_price,
    baby_price,
    kids_price,
    title,
    subTitle,
    info,
    startDate,
    minMember,
    maxMember,
    startPoint,
    itinerary,
    contents,
    inOrNor,
    caution,
    code
  } = product;


  return <div className="edtiorView">
    <SubTopNav
      pageTools={pageTools}
      children={
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
      }
    />
    <div className="tour_details_in w1200">

      <div className="Document">
        <div className="Read_box">
          <div className="details_photo">
            <div className="main_photo">
              <Slider ref={sliderRef} >
                {images?.map((img, i) =>
                  <Slide key={i + "sliderImg"} >
                    <img src={img?.uri} alt={img.name} />
                  </Slide>
                ) || ""}
              </Slider>
            </div>
            <ul className="photo_list">
              {images?.map((img, i) =>
                <li className={checkImgOn(i)} onClick={handleSliderMove(i)} key={i + "sliderImgSub"}><span><img src={img?.uri} alt={img.name} /></span></li>
              )}
            </ul>
            <div className="details_info_txt">
              <div className="ck-content" dangerouslySetInnerHTML={{ __html: info }} />
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
                      <span className="code">상품코드 {code}</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="bt_line">
                      <h3 className="maintitle">{title}</h3>
                      <p className="subtitle">{subTitle}</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="tag bt_line">
                      <div className="tt">키워드</div>
                      <ul>
                        {keyWards?.map((keyward, i) =>
                          <li key={i + "keyward"}>#{keyward}</li>
                        )}
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th className="smtitle bt_line">출발일</th>
                    <td className="smtxt bt_line">{dayjs(startDate).format("YYYY.MM.DD")}</td>
                  </tr>
                  <tr>
                    <th className="smtitle bt_line">여행기간</th>
                    <td className="smtxt bt_line">{getRangeString(product)}</td>
                  </tr>
                  <tr>
                    <th className="smtitle bt_line">최소인원</th>
                    <td className="smtxt bt_line">{minMember}명</td>
                  </tr>
                  <tr>
                    <th className="smtitle bt_line">최대인원</th>
                    <td className="smtxt bt_line">{maxMember}명</td>
                  </tr>
                  <tr>
                    <th className="smtitle bt_no">출발장소</th>
                    <td className="smtxt bt_no">{startPoint}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="box">
              <table cellSpacing={0} summary="Extra Form" className="option_tb">
                <tbody>
                  <tr>
                    <th>대인</th>
                    <td>
                      <strong>{autoComma(adult_price)}</strong>원
                  <div className="Number__box">
                        <span onClick={handleCount("adult", false)} className="left_btn"><i className="flaticon-substract" /></span>
                        <span className="number">{count.adult}</span>
                        <span onClick={handleCount("adult", true)} className="right_btn"><i className="flaticon-add" /></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>소인</th>
                    <td>
                      <strong>{autoComma(kids_price)}</strong>원
                  <div className="Number__box">
                        <span onClick={handleCount("kids", false)} className="left_btn"><i className="flaticon-substract" /></span>
                        <span className="number">{count.kids}</span>
                        <span onClick={handleCount("kids", true)} className="right_btn"><i className="flaticon-add" /></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>유아</th>
                    <td>
                      <strong>{autoComma(baby_price)}</strong>원
                  <div className="Number__box">
                        <span onClick={handleCount("baby", false)} className="left_btn"><i className="flaticon-substract" /></span>
                        <span className="number">{count.baby}</span>
                        <span onClick={handleCount("baby", true)} className="right_btn"><i className="flaticon-add" /></span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="Chash__box">
                <table cellSpacing={0} summary="Extra Form" className="chash_tb">
                  <tbody>
                    <tr>
                      <th>총 금액</th>
                      <td>
                        <strong>{autoComma(totalPrice)}</strong>원
                  </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* btn */}
            <div className="btn_box">
              <div className="links_wrap">
                <div onClick={handleAddBracket} className="link05">
                  <a>
                    장바구니 담기
                  </a>
                </div>
                <div className="link02">
                  <a onClick={handleDoPay}>
                    예약하기
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
            <span onClick={handleTab(1)} className={tabOnCheck(1)}><a>여행상세설명</a></span>
            <span onClick={handleTab(2)} className={tabOnCheck(2)}><a>안내 및 참고</a></span>
            <span onClick={handleTab(3)} className={tabOnCheck(3)}><a >포함 및 불포함</a></span>
            <span onClick={handleTab(4)} className={tabOnCheck(4)}><a >문의하기</a></span>
          </div>
          {/* 여행상세설명 */}
          <div className="in_box" id="tap__01">
            <h4>여행일정</h4>
            {itinerary.map((it) => <div key={it._id} >
              <div className="hang">
                <div className="top_day">
                  <h5>{it.title}</h5>
                  <span>{dayjs(it.date).format('YYYY.MM.DD (dd)')}</span>
                </div>
                <div className="tour_list">
                  {it.contents.map((con, index) => <div key={index + "con" + it._id}>
                    <div className="ck-content" dangerouslySetInnerHTML={{ __html: con }} />
                  </div>
                  )}
                </div>
                {/* <div className="tour_content_img_list">
                  {it.images.map((img, index) => <img key={index} style={{
                    width: "auto",
                    height: "100px",
                    display: "inline-block"
                  }} src={img?.uri} />)}
                </div> */}
              </div>
            </div>
            )}
          </div>
          <div className="in_box" id="tap__02">
            <h4>안내 및 참고</h4>
            <div dangerouslySetInnerHTML={{
              __html: contents
            }} className="text ck-content" />
          </div>
          {/* 포함 및 불포함 */}
          <div className="in_box" id="tap__03">
            <h4>포함 및 불포함 </h4>
            <div dangerouslySetInnerHTML={{
              __html: inOrNor
            }} className="text ck-content" />
          </div>
          <div className="in_box" id="tap__04" >
            <h4>주의사항</h4>
            <div dangerouslySetInnerHTML={{ __html: caution }} className="text" />
          </div>
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
                  {questionSliced.map(qs =>
                    <QnaLi onClick={handleQnaClick(qs._id)} key={qs._id} question={qs} />
                  )}
                </ul>
              </div>
              <div className="boardNavigation">
                <Paginater pageInfo={questionPageInfo} isMini setPage={setQuestionPage} />
                <div className="float_right">
                  <Link href={`/member/qna/write?pid=${id}&name=${title}`}>
                    <a className="mini_btn small">고객센터 문의하기</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
              <div className="img" onClick={() => { }} style={{ backgroundImage: 'url(/img/sample_01.gif)' }}>상품이미지</div>
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
              <div className="img" onClick={() => { }} style={{ backgroundImage: 'url(/img/sample_01.gif)' }}>상품이미지</div>
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
              <div className="img" onClick={() => { }} style={{ backgroundImage: 'url(/img/sample_01.gif)' }}>상품이미지</div>
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
  </div >
}



export default TourDetail;