import React, { useState, useContext, useEffect } from 'react';
import pageInfoDefault from 'info/main.json';
import { getEditUtils } from 'utils/pageEdit';
import { AppContext } from './_app'
import { Meta } from 'components/common/meta/Meta';
import { Upload } from 'components/common/Upload';
import Link from 'next/link';
import { HiddenSubmitBtn } from 'components/common/HiddenSubmitBtn';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { usePageInfo } from 'hook/usePageInfo';
import { IuseProductList, useProductList } from 'hook/useProduct';
import { useRouter } from 'next/router';

const DummyPhoto = [{
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}, {
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}, {
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}, {
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}, {
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}, {
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}, {
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}, {
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}, {
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}, {
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}, {
  category: "문화/예술",
  subTitle: "더운날 수목원으로 오세요~!!!!!!!!!!!!!!",
  title: "골목길따가 추억을 걷는 여행!!!!!!!!!!!!!!!!!!!!!!"
}];


interface IProps {
  context: IMainWrapContext
}
export const Main: React.FC<IProps> = ({ context }) => {
  console.log("AWESOME")
  const { items, sitePageInfo } = context;
  const { editMode } = useContext(AppContext);
  const original = sitePageInfo || pageInfoDefault;
  const [page, setPage] = useState(original);
  const { edit, imgEdit, bg } = getEditUtils(editMode, page, setPage)
  const [model, setModel] = useState();
  const router = useRouter()


  const toProductBoard = (id: string) => {
    router.push(id);
  }


  return <div className="body main" id="main" >
    <Meta title="메인페이지" description="ㅁㄴㅇㄴ" />
    <div className="main_con_box1">
      <div
        className="main_top_images"
        style={{ ...bg("m_01_mainBg") }}
      >
        <Upload onUpload={imgEdit("m_01_mainBg")} />
        <div className="ovj"><img src="/its/main_top_ovj.png" /></div>
        <div className="w1200">
          <strong {...edit("m_01_title")} />
          <span {...edit('m_01_subtitle')}>
          </span>
          <div className="btn_list">
            <Link href="/guide">
              <a className="tourLink" {...edit("m_01_mainLink1")} />
            </Link>
            <Link href="/tour">
              <a  {...edit("m_01_mainLink2")} />
            </Link>
          </div>
        </div>

      </div>
    </div>
    <div className="main_con_box2">
      <div className="w1200">
        <div className="top_txt">
          <h2 {...edit("m_02_title")} />
          <strong {...edit("m_02_number")} />
        </div>
        <ul className="pr_list">
          <li style={{ ...bg("m_02_photo01") }}><Upload onUpload={imgEdit("m_02_photo01")} />프로필사진</li>
          <li style={{ ...bg("m_02_photo02") }}><Upload onUpload={imgEdit("m_02_photo02")} />프로필사진</li>
          <li style={{ ...bg("m_02_photo03") }}><Upload onUpload={imgEdit("m_02_photo03")} />프로필사진</li>
          <li style={{ ...bg("m_02_photo04") }}><Upload onUpload={imgEdit("m_02_photo04")} />프로필사진</li>
          <li style={{ ...bg("m_02_photo05") }}><Upload onUpload={imgEdit("m_02_photo05")} />프로필사진</li>
          <li style={{ ...bg("m_02_photo06") }}><Upload onUpload={imgEdit("m_02_photo06")} />프로필사진</li>
          <li style={{ ...bg("m_02_photo07") }}><Upload onUpload={imgEdit("m_02_photo07")} />프로필사진</li>
          <li className="plus"><Link href="/guide"><a>+</a></Link></li>
        </ul>
      </div>

    </div>

    {/* <div className="main_con_box2">
      <div className="w1200">
        <div className="top_txt">
          <h2 {...edit("purposeTitle")} />
          <span {...edit("purposeSubTitle")}></span>
        </div>
        <ul>
          <li>
            <i className="icon_01"></i>
            <strong  {...edit("purposeCircle1")} />
            <span {...edit("purposeCircle1_en")} />
          </li>
          <li>
            <i className="icon_02"></i>
            <strong {...edit("purposeCircle2")} />
            <span {...edit("purposeCircle2_en")} />
          </li>
          <li>
            <i className="icon_03"></i>
            <strong {...edit("purposeCircle3")} />
            <span {...edit("purposeCircle3_en")} />
          </li>
        </ul>
      </div>
    </div> */}
    <div className="main_con_box3">
      <div className="w1200">
        <div className="top_txt">
          <span className="sidetxt" {...edit("m_02_title")} />
          <h2 {...edit("m_03_title")} />
        </div>
        <ul>
          <li><a href="/tour" {...edit("m_03_link01")} /></li>
          <li><a href="/tour" {...edit("m_03_link02")} /></li>
          <li><a href="/tour" {...edit("m_03_link03")} /></li>
          <li><a href="/tour" {...edit("m_03_link04")} /></li>
          <li><a href="/tour" {...edit("m_03_link05")} /></li>
          <li><a href="/tour" {...edit("m_03_link06")} /></li>
          <li><a href="/tour" {...edit("m_03_link07")} /></li>
          <li><a href="/tour" {...edit("m_03_link08")} /></li>
          <li><a href="/tour" {...edit("m_03_link09")} /></li>
          <li><a href="/tour" {...edit("m_03_link10")} /></li>
          <li><a href="/tour" {...edit("m_03_link11")} /></li>
          <li><a href="/tour" {...edit("m_03_link12")} /></li>
          <li><a href="/tour" {...edit("m_03_link13")} /></li>
        </ul>
      </div>
    </div>

    {/* <div className="main_con_box4">
      <div className="w100">
        <div className="photo_box">
          <ul className="photo_ul line3 main_photo_ul">
            <li className="top_txt">
              <h2 {...edit("valuable_exp")} />
              <span className="txt" {...edit("valuable_exp_sub")} />
              <div className="btn_list">
                <span><Link href="/tour"><a>공정여행</a></Link></span>
                <span><Link href="/tour"><a>더많은체험</a></Link></span>
              </div>
              <i><svg><polygon points="69.22 12.71 0 12.71 0 10.71 64.33 10.71 54.87 1.43 56.27 0 69.22 12.71" /></svg></i>
            </li>
            {items.map((item) =>
              <Link key={item._id} href={`/tour/view/${item._id}`}>
                <li className="list_in">
                  <div className="img" onClick={() => { toProductBoard(item._id) }} style={{
                    backgroundImage: `url(${item.images[0]?.uri})`
                  }}></div>
                  <div className="box">
                    <div className="category"><span>{item.category?.label}</span></div>
                    <div className="title">{item.title}</div>
                    <div className="subTitle">
                      {item.subTitle}
                    </div>
                  </div>
                </li >
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div> */}

    <div className="main_con_box4">
      <div className="w1200">
        <div className="deal_list">
          <div className="alignment">
            <div className="left_div"><h2>BEST</h2></div>
            <div className="right_div">
              <span className="goto_page"><a href="/tour">바로가기<i className="flaticon-menu-1"></i></a></span>
            </div>
          </div>
          <ul className="list_ul line4">
            <li className="list_in">
              <div className="img" style={{ backgroundImage: 'url(/its/store_01.jpg' }}>상품이미지</div>
              <div className="box">
                <div className="category"><span>당일여행</span></div>
                <div className="title">꽃길만 걸으실 분들을 모집합니다.</div>
                <div className="bottom_txt">
                  <div className="tag2">
                    <span>#당일여행</span>
                    <span>#버스투어</span>
                    <span>#부산근교</span>
                  </div>
                  <div className="rating-stars">
                    <ul id="stars">
                      <li className="star" title="Poor" data-value="1">
                        <i className="fa fa-star fa-fw"></i>
                      </li>
                      <li className="star" title="Fair" data-value="2">
                        <i className="fa fa-star fa-fw"></i>
                      </li>
                      <li className="star" title="Good" data-value="3">
                        <i className="fa fa-star fa-fw"></i>
                      </li>
                      <li className="star" title="Excellent" data-value="4">
                        <i className="fa fa-star fa-fw"></i>
                      </li>
                      <li className="star" title="WOW!!!" data-value="5">
                        <i className="fa fa-star fa-fw"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="cash"><strong>70,000</strong>원</div>
                </div>
              </div>
            </li>
            <li className="list_in">
              <div className="img" style={{ backgroundImage: 'url(/its/store_01.jpg' }}>상품이미지</div>
              <div className="box">
                <div className="category"><span>당일여행</span></div>
                <div className="title">진해로 소풍 가실분들 모집중</div>
                <div className="bottom_txt">
                  <div className="tag2">
                    <span>#뚜벅이여행</span>
                    <span>#소풍</span>
                    <span>#진해</span>
                  </div>
                  <div className="cash"><strong>30,000</strong>원</div>
                </div>
              </div>
            </li>
            <li className="list_in">
              <div className="img" style={{ backgroundImage: 'url(/its/store_01.jpg' }}>상품이미지</div>
              <div className="box">
                <div className="category"><span>1박2일</span></div>
                <div className="title">제주도 꽃구경 가실분?!</div>
                <div className="bottom_txt">
                  <div className="tag2">
                    <span>#1박2일</span>
                    <span>#제주도</span>
                    <span>#꽃놀이</span>
                  </div>
                  <div className="cash"><strong>230,000</strong>원</div>
                </div>
              </div>
            </li>
            <li className="list_in">
              <div className="img" style={{ backgroundImage: 'url(/its/store_01.jpg' }}>상품이미지</div>
              <div className="box">
                <div className="category"><span>1박2일</span></div>
                <div className="title">양떼목장으로 떠나요~!!</div>
                <div className="bottom_txt">
                  <div className="tag2">
                    <span>#1박2일</span>
                    <span>#버스관광</span>
                    <span>#평창</span>
                  </div>
                  <div className="cash"><strong>250,000</strong>원</div>
                </div>
              </div>
            </li>
          </ul>
        </div>


        <div className="deal_list">
          <div className="alignment">
            <div className="left_div"><h2>DM추천</h2></div>
            <div className="right_div">
              <span className="goto_page"><a href="/tour">바로가기<i className="flaticon-menu-1"></i></a></span>
            </div>
          </div>
          <ul className="list_ul line4">


            <li className="list_in">
              <div className="img" style={{ backgroundImage: 'url(/its/store_01.jpg' }}>상품이미지</div>
              <div className="box">
                <div className="category"><span>당일여행</span></div>
                <div className="title">꽃길만 걸으실 분들을 모집합니다.</div>
                <div className="bottom_txt">
                  <div className="tag2">
                    <span>#당일여행</span>
                    <span>#버스투어</span>
                    <span>#부산근교</span>
                  </div>
                  <div className="cash"><strong>70,000</strong>원</div>
                </div>
              </div>
            </li>
            <li className="list_in">
              <div className="img" style={{ backgroundImage: 'url(/its/store_01.jpg' }}>상품이미지</div>
              <div className="box">
                <div className="category"><span>당일여행</span></div>
                <div className="title">진해로 소풍 가실분들 모집중</div>
                <div className="bottom_txt">
                  <div className="tag2">
                    <span>#뚜벅이여행</span>
                    <span>#소풍</span>
                    <span>#진해</span>
                  </div>
                  <div className="cash"><strong>30,000</strong>원</div>
                </div>
              </div>
            </li>
            <li className="list_in">
              <div className="img" style={{ backgroundImage: 'url(/its/store_01.jpg' }}>상품이미지</div>
              <div className="box">
                <div className="category"><span>1박2일</span></div>
                <div className="title">제주도 꽃구경 가실분?!</div>
                <div className="bottom_txt">
                  <div className="tag2">
                    <span>#1박2일</span>
                    <span>#제주도</span>
                    <span>#꽃놀이</span>
                  </div>
                  <div className="cash"><strong>230,000</strong>원</div>
                </div>
              </div>
            </li>
            <li className="list_in">
              <div className="img" style={{ backgroundImage: 'url(/its/store_01.jpg' }}>상품이미지</div>
              <div className="box">
                <div className="category"><span>1박2일</span></div>
                <div className="title">양떼목장으로 떠나요~!!</div>
                <div className="bottom_txt">
                  <div className="tag2">
                    <span>#1박2일</span>
                    <span>#버스관광</span>
                    <span>#평창</span>
                  </div>
                  <div className="cash"><strong>250,000</strong>원</div>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>


    {/* <div className="main_con_box5">
      <div className="txt">
        <h2 {...edit('bottom_title')} />
        <p {...edit('bottom_desc')} />
      </div>
      <div
        className="main_bg_img"
        style={{ ...bg("bottom_bg_img") }}
      />
      <Upload onUpload={imgEdit("bottom_bg_img")} />
    </div>
    <HiddenSubmitBtn original={original} setData={setPage} path="main" data={page} />
  </div > */}
    <div className="main_con_box5">
      <div className="w1200">
        <div className="txt">
          <h2>
            GUIDE<span {...edit("m_05_subtitle")} />
          </h2>
        </div>
        <div className="man_list">
          <a className="left_mov"><i className="jandaicon-arr2-left"></i></a>
          <div className="man_box">
            <ul>
              <li className="on">
                <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg' }}>프로필사진</span>
                <div className="name"><i>G</i>김행자</div>
              </li>
              <li>
                <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg' }}>프로필사진</span>
                <div className="name"><i>G</i>김행자</div>
              </li>
              <li>
                <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg' }}>프로필사진</span>
                <div className="name"><i>G</i>김행자</div>
              </li>
              <li>
                <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg' }}>프로필사진</span>
                <div className="name"><i>G</i>김행자</div>
              </li>
              <li>
                <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg' }}>프로필사진</span>
                <div className="name"><i>G</i>김행자</div>
              </li>

            </ul>
          </div>
          <a className="right_mov"><i className="jandaicon-arr2-right"></i></a>
        </div>
        <div className="goods_list">
          <ul className="line4">
            <li>
              <div className="img" style={{ backgroundImage: 'url(/its/store_01.jpg' }}>상품이미지</div>
              <div className="title">꽃길만 걸으실 분들을 모집합니다.</div>
              <div className="tag">
                <span>#1박2일</span>
                <span>#제주도</span>
                <span>#꽃놀이</span>
              </div>
              <div className="cash"><strong>70,000</strong>원</div>
            </li>
            <li>
              <div className="img" style={{ backgroundImage: 'url(/its/store_01.jpg' }}>상품이미지</div>
              <div className="title">진해로 소풍 가실분들 모집중</div>
              <div className="tag">
                <span>#1박2일</span>
                <span>#제주도</span>
                <span>#꽃놀이</span>
              </div>
              <div className="cash"><strong>30,000</strong>원</div>
            </li>
            <li>
              <div className="img" style={{ backgroundImage: 'url(/its/store_01.jpg' }}>상품이미지</div>
              <div className="title">제주도 꽃구경 가실분?!</div>
              <div className="tag">
                <span>#1박2일</span>
                <span>#제주도</span>
                <span>#꽃놀이</span>
              </div>
              <div className="cash"><strong>230,000</strong>원</div>
            </li>
            <li>
              <div className="img" style={{ backgroundImage: 'url(/its/store_01.jpg' }}>상품이미지</div>
              <div className="title">양떼목장으로 떠나요~!!</div>
              <div className="tag">
                <span>#1박2일</span>
                <span>#제주도</span>
                <span>#꽃놀이</span>
              </div>
              <div className="cash"><strong>250,000</strong>원</div>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <div className="main_con_box6">
      <div className="w1200">
        <h2>추천 테마 여행</h2>
        <div className="theme_deal">
          <ul>
            <li className="top_01">
              <Upload onUpload={imgEdit("m_06_link01_bgimg")} />
              <div className="top_01__bg" style={{ ...bg("m_06_link01_bgimg") }} />
              <span className="first" {...edit("m_06_link01_text")} /><br />
              <span className="tag" {...edit("m_06_link01_tage")} />
            </li>
            <li className="top_02">
              <Upload onUpload={imgEdit("m_06_link02_bgimg")} />
              <div className="top_01__bg" style={{ ...bg("m_06_link02_bgimg") }} />
              <span className="title" {...edit("m_06_link02_text")} />
            </li>
            <li className="top_03">
              <Upload onUpload={imgEdit("m_06_link03_bgimg")} />
              <div className="top_01__bg" style={{ ...bg("m_06_link03_bgimg") }} />
              <span className="title" {...edit("m_06_link03_text")} />
            </li>
            <li className="top_04">
              <Upload onUpload={imgEdit("m_06_link04_bgimg")} />
              <div className="top_01__bg" style={{ ...bg("m_06_link04_bgimg") }} />
              <span className="title" {...edit("m_06_link04_text")} />
            </li>
            <li className="top_05">
              <Upload onUpload={imgEdit("m_06_link05_bgimg")} />
              <div className="top_01__bg" style={{ ...bg("m_06_link05_bgimg") }} />
              <span className="title" {...edit("m_06_link05_text")} />
            </li>
            <li className="top_06">
              <Upload onUpload={imgEdit("m_06_link06_bgimg")} />
              <div className="top_01__bg" style={{ ...bg("m_06_link06_bgimg") }} />
              <span className="title" {...edit("m_06_link06_text")} />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="main_con_box7">
      <div className="box01">
        <div className="w1200">
          <span className="sidetxt" {...edit("m_07_box01_subtitle")} />
          <h2 {...edit("m_07_box01_title")} />
          <div className="link"><a href="/member/join" {...edit("m_07_box01_link")}></a></div>
        </div>
        <div className="ovj" {...edit("m_07_box01_ovj")} />
      </div>
      <div className="box02">
        <div className="left">
          <h3 {...edit("m_07_box02_title")} />
          <p {...edit("m_07_box02_text")} />
        </div>
        <div className="right" style={{ ...bg("m_07_box02_rigthbg") }}>
          <Upload onUpload={imgEdit("m_07_box02_rigthbg")} />
          <div className="txt">
            <strong {...edit("m_07_box02_rigthnumber")} />
            <p {...edit("m_07_box02_rigthtitle")} />
          </div>
        </div>
      </div>
      <div className="box03">
        <div className="left" style={{ ...bg("m_07_box03_rigthbg") }}>
          <Upload onUpload={imgEdit("m_07_box03_rigthbg")} />
          <div className="txt">
            <strong {...edit("m_07_box03_rigthnumber")} />
            <p {...edit("m_07_box03_rigthtitle")} />
          </div>
        </div>
        <div className="right">
          <h3 {...edit("m_07_box03_title")} />
          <p {...edit("m_07_box03_text")} />
        </div>
      </div>
    </div>




  </div>

};


interface IGetProps {
  sitePageInfo: typeof pageInfoDefault | "",
}
export const getStaticProps: GetStaticProps<IGetProps> = async (context) => {
  const { data } = await usePageInfo("main");
  return {
    props: {
      sitePageInfo: data?.value || "",
      revalidate: 10
    }, // will be passed to the page component as props
  }
}

interface IMainWrapContext extends IuseProductList, IGetProps {
}

const MainWrap: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ sitePageInfo }) => {
  const productList = useProductList({ initialPageIndex: 1, initialViewCount: 8 });
  const context: IMainWrapContext = {
    ...productList,
    sitePageInfo
  }

  return <Main context={context} />
  // }
}
export default MainWrap;