import React, { useContext } from 'react';
import pageInfoDefault from 'info/main.json';
import { Meta } from 'components/common/meta/Meta';
import { Upload } from 'components/common/Upload';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { useProductList } from 'hook/useProduct';
import { useRouter } from 'next/router';
import { getStaticPageInfo } from '../utils/page';
import { EditContext } from './_app';
import Slider from "react-slick";
import { IUsePageEdit } from '../hook/usePageEdit';

export const Main: React.FC = () => {
  const { items } = useProductList({ initialPageIndex: 1, initialViewCount: 8 });
  const { imgEdit, edit, bg } = useContext<IUsePageEdit<typeof pageInfoDefault>>(EditContext);
  const router = useRouter()

  const toProductBoard = (id: string) => {
    router.push(id);
  }

  edit

  return <div className="body main" id="main" >
    <Meta title="메인페이지" description="ㅁㄴㅇㄴ" />



    <div className="main_con_box1 Slider_box">

      <Slider
        autoplay
        prevArrow={<div className="rev"><img src="/img/svg/arr_left_w.svg" alt="이전" /></div>}
        nextArrow={<div className="next"><img src="/img/svg/arr_right_w.svg" alt="다음" /></div>}
        arrows={true}
        dots={false}
        infinite={true}
        className="">
        <div>
          <div className="main_top_images" style={bg("m_01_mainBg1")}>
            <Upload onUpload={imgEdit("m_01_mainBg1")} />
            <div className="w1200">
              <strong {...edit("m_01_title1")} />
              <span {...edit('m_01_subtitle1')}>
              </span>
              <div className="btn_list onepick2">
                <Link href="/guide">
                  <a className="link" {...edit("m_01_mainLink1_1")} />
                </Link>
                <Link href="/tour">
                  <a className="link" {...edit("m_01_mainLink1_2")} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="main_top_images img2" style={bg("m_01_mainBg2")}>
            <Upload onUpload={imgEdit("m_01_mainBg2")} />
            <div className="w1200">
              <strong {...edit("m_01_title2")} />
              <span {...edit('m_01_subtitle2')}>
              </span>
              <div className="btn_list onepick">
                <Link href="/pinkroader_company_introduction_letter.pdf">
                  <a className="link" {...edit("m_01_mainLink2_1")} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </Slider>
    </div >



    <div className="main_con_box2">
      <div className="w1200">
        <div className="top_txt">
          <h2 {...edit("purposeTitle")} />
          <span {...edit("purposeSubTitle")}></span>
        </div>
        <ul className="infolist">
          <li className="infolist__01" style={bg("purposeCircle1_bg")}>
            <div className="pack">
              <div className="img" style={bg("purposeCircle1_bg")}><Upload onUpload={imgEdit("purposeCircle1_bg")} /></div>
              <strong  {...edit("purposeCircle1")} />
              <span {...edit("purposeCircle1_en")} />
            </div>

          </li>
          <li className="infolist__02" style={bg("purposeCircle2_bg")}>
            <div className="pack">

              <div className="img" style={bg("purposeCircle2_bg")}><Upload onUpload={imgEdit("purposeCircle2_bg")} /></div>
              <strong  {...edit("purposeCircle2")} />
              <span {...edit("purposeCircle2_en")} />
            </div>
          </li>
          <li className="infolist__03" style={bg("purposeCircle3_bg")}>
            <div className="pack">
              <div className="img" style={bg("purposeCircle3_bg")}><Upload onUpload={imgEdit("purposeCircle3_bg")} /></div>
              <strong  {...edit("purposeCircle3")} />
              <span {...edit("purposeCircle3_en")} />
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div className="main_con_box6">
      <ul className="mainbn">
        <li className="mainbn__01"></li>
        <li className="mainbn__02"></li>
        <li className="mainbn__03"></li>
        <li className="mainbn__04"></li>
        <li className="mainbn__05"></li>
      </ul>
    </div>

    <div className="main_con_box3">
      <div>
        <div className="top_txt">
          <h2 {...edit("busi_area_title")} />
        </div>
        <ul>
          <li className="img01" style={bg("busi_area1_bg")}><Upload onUpload={imgEdit("busi_area1_bg")} />
            <div className="bgtxt">
              <strong {...edit("busi_area1_title")} />
              <span {...edit("busi_area1_desc")} />
            </div>
          </li>
          <li className="img02" style={bg("busi_area2_bg")}><Upload onUpload={imgEdit("busi_area2_bg")} />
            <div className="bgtxt">
              <strong {...edit("busi_area2_title")} />
              <span {...edit("busi_area2_desc")} />
            </div>
          </li>
          <li className="img03" style={bg("busi_area3_bg")}><Upload onUpload={imgEdit("busi_area3_bg")} />
            <div className="bgtxt">
              <strong {...edit("busi_area3_title")} />
              <span {...edit("busi_area3_desc")} />
            </div>
          </li>
          <li className="img04" style={bg("busi_area4_bg")}><Upload onUpload={imgEdit("busi_area4_bg")} />
            <div className="bgtxt">
              <strong  {...edit("busi_area4_title")} />
              <span {...edit("busi_area4_desc")} />
            </div>
          </li>
        </ul >
      </div >
    </div >

    <div className="main_con_box4">
      <div className="w100">
        <div className="photo_box">
          <ul className="photo_ul line3 main_photo_ul">
            <li className="top_txt">
              <h2 {...edit("valuable_exp")} />
              <span className="txt" {...edit("valuable_exp_sub")} />
              <div className="btn_list">
                <span><Link href="/tour"><a>공정여행</a></Link></span>
                <span><Link href="/tour?exp=true"><a>더많은체험</a></Link></span>
              </div>
              <i><svg><polygon points="69.22 12.71 0 12.71 0 10.71 64.33 10.71 54.87 1.43 56.27 0 69.22 12.71" /></svg></i>

            </li>
            {items.map((item) =>
              <Link key={item._id} href={`/tour/view/${item._id}`}>
                <li className="list_in">
                  <div className="img" onClick={() => { toProductBoard(item._id) }} style={{
                    backgroundImage: `url(${item?.images?.[0]?.uri})`
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
    </div>
    <div className="main_con_box5">
      <div className="txt w1200">
        <h2 {...edit('bottom_title')} />
        <p {...edit('bottom_desc')} />
        <div className="ovj" style={bg("bottom_ovj")}><Upload onUpload={imgEdit("bottom_ovj")} /></div>
      </div>
      {/* <div
        className="main_bg_img"
        style={{ ...bg("bottom_bg_img") }}
      />
      <Upload onUpload={imgEdit("bottom_bg_img")} /> */}
    </div>
    <div>
      <div className="col-md-6">
        <div ui-view></div>
      </div>
    </div>
  </div >
};

interface IGetProps {
  pageInfo: typeof pageInfoDefault | "",
}


export const getStaticProps: GetStaticProps<IGetProps> = getStaticPageInfo("main", pageInfoDefault);
export default Main;
