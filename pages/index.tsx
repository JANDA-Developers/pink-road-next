import React, { useContext, useEffect, useState } from 'react';
import defaultPageInfo from 'info/main.json';
import { Meta } from 'components/common/meta/Meta';
import { Upload } from 'components/common/Upload';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { openListFilter, useProductList } from 'hook/useProduct';
import { useRouter } from 'next/router';
import { getStaticPageInfo, Ipage } from '../utils/page';
import Slider from "react-slick";
import { usePageEdit } from '../hook/usePageEdit';
import { Bg } from '../components/Img/img';
import { PageEditor } from '../components/common/PageEditer';
import { useGroupFind } from '../hook/useGroup';
import isEmpty from '../utils/isEmpty';
import { cloneObject } from '../utils/clone';
import { useHomepage } from '../hook/useHomepage';
import { AppContext } from './_app';
import { openAutos, usePopups } from '../hook/usePopups';
import { ThreePhoneNumberInput } from '../components/phoneNumberInput/PhoneNumberInput';
import { usePhoneInput } from '../hook/usePhoneInput';

export const Main: React.FC<Ipage> = (pageInfo) => {
  const { item } = useGroupFind("Main");
  const { homepage } = useContext(AppContext);

  const { items, setFilter, filter } = useProductList({
    initialPageIndex: 1, initialViewCount: 8, initialFilter: {
      _id_in: item?.members
    }
  }, { skip: !item });

  const pageTools = usePageEdit(pageInfo, defaultPageInfo);
  const { imgKit, edit } = pageTools;
  const router = useRouter()

  const toProductBoard = (id: string) => {
    router.push(id);
  }

  const sortedItems = item ? items.slice().sort((a, b) => item.members.indexOf(a._id) - item.members.indexOf(b._id)) : [];

  useEffect(() => {
    if (item) {
      filter._id_in = item.members
      setFilter({
        ...filter
      })
    }
  }, [item?.members.length])

  useEffect(() => {
    if (homepage?.modal) {
      openAutos(homepage?.modal)
    }
  }, [homepage?.modal])

  const { setValue, value } = usePhoneInput("");

  return <div className="body main" id="main" >
    <PageEditor pageTools={pageTools} />
    <Meta title="Pinkroader" description="사람과 시간이 공존하는 여행플랫폼 핑크로더입니다." />
    <div className="main_con_box1 Slider_box">
      <Slider
        autoplay
        prevArrow={<div className="rev"><img src="/img/svg/arr_left_w.svg" alt="이전" /></div>}
        nextArrow={<div className="next"><img src="/img/svg/arr_right_w.svg" alt="다음" /></div>}
        arrows={true}
        dots={false}
        infinite={true}
        className="mainSlider">
        <div>
          <Bg className="main_top_images"  {...imgKit("m_01_mainBg1")}>
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
          </Bg>
        </div>
        <div>
          <Bg className="main_top_images img2" {...imgKit("m_01_mainBg2")}>
            <div className="w1200">
              <strong {...edit("m_01_title2")} />
              <span {...edit('m_01_subtitle2')}>
              </span>
              <div className="btn_list onepick">
                <a target="_blank" href="/pinkroader_company_introduction_letter.pdf" className="link" {...edit("m_01_mainLink2_1")} />
              </div>
            </div>
          </Bg>

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
          <li className="infolist__01" >
            <div className="pack">
              <p {...edit("purposeCircle1_ct")} />
              <strong  {...edit("purposeCircle1")} />
              <span {...edit("purposeCircle1_en")} />
            </div>
          </li>
          <li className="infolist__02" >
            <div className="pack">
              <p {...edit("purposeCircle2_ct")} />
              <strong  {...edit("purposeCircle2")} />
              <span {...edit("purposeCircle2_en")} />
            </div>
          </li>
          <li className="infolist__03">
            <div className="pack">
              <p {...edit("purposeCircle3_ct")} />
              <strong  {...edit("purposeCircle3")} />
              <span {...edit("purposeCircle3_en")} />
            </div>
          </li>
        </ul>
      </div>
    </div>
    {/* <ThreePhoneNumberInput onChange={setValue} value={value} /> */}

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
        <ul className="busiAreaList">
          <Bg tag="li" className="img01 busiAreaList__li" {...imgKit("busi_area1_bg")} >
            <div className="bgtxt">
              <strong {...edit("busi_area1_title")} />
              <span style={{ position: "absolute" }} {...edit("busi_area1_desc")} />
            </div>
          </Bg>
          <Bg tag="li" className="img02 busiAreaList__li" {...imgKit("busi_area2_bg")}>
            <div className="bgtxt">
              <strong {...edit("busi_area2_title")} />
              <span style={{ position: "absolute" }} {...edit("busi_area2_desc")} />
            </div>
          </Bg>
          <Bg tag="li" className="img03 busiAreaList__li" {...imgKit("busi_area3_bg")}>
            <div className="bgtxt">
              <strong {...edit("busi_area3_title")} />
              <span style={{ position: "absolute" }} {...edit("busi_area3_desc")} />
            </div>
          </Bg>
          <Bg tag="li" className="img04 busiAreaList__li" {...imgKit("busi_area4_bg")}>
            <div className="bgtxt">
              <strong  {...edit("busi_area4_title")} />
              <span style={{ position: "absolute" }} {...edit("busi_area4_desc")} />
            </div>
          </Bg>
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
            {sortedItems.map((item) =>
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
        {/* <Bg className="ovj" {...imgKit("bottom_ovj")} /> */}
      </div>
      {/* <div
        className="main_bg_img"
        style={{ ...bg("bottom_bg_img") }}
      />
      <Upload onUpload={imgEdit("bottom_bg_img")} /> */}
    </div>
    <div>
      <div className="col-md-6">
        <div ></div>
      </div>
    </div>
  </div >
};

export const getStaticProps = getStaticPageInfo("main");
export default Main;
