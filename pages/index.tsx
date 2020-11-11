import React, { useState, useContext } from 'react';
import pageInfoDefault from 'info/main.json';
import { getEditUtils } from 'utils/pageEdit';
import { AppContext } from './_app'
import { Meta } from 'components/common/meta/Meta';
import { PhotoLi } from 'components/main/PhotoLi';
import { Upload } from 'components/common/Upload';
import Link from 'next/link';
import { HiddenSubmitBtn } from 'components/common/HiddenSubmitBtn';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { usePageInfo } from 'hook/usePageInfo';

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

type TGetProps = {
  pageInfo: typeof pageInfoDefault | "",
}
export const getStaticProps: GetStaticProps<TGetProps> = async (context) => {
  const { data } = await usePageInfo("main");
  return {
    props: {
      pageInfo: data?.value || "",
      revalidate: 10
    }, // will be passed to the page component as props
  }
}

export const Main: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ pageInfo }) => {

  console.log('pageInfo');
  console.log(pageInfo);
  const { editMode } = useContext(AppContext);
  const original = pageInfo || pageInfoDefault;
  const [page, setPage] = useState(original);
  const { edit, imgEdit, bg } = getEditUtils(editMode, page, setPage)

  console.log(bg("mainBg"));

  return <div className="body main" id="main" >
    <Meta title="메인페이지" description="ㅁㄴㅇㄴ" />
    <div className="main_con_box1">
      <div
        className="main_top_images"
        style={{ ...bg("mainBg") }}
      >
        <Upload onUpload={imgEdit("mainBg")} />
        <div className="w1200">
          <strong {...edit("title")} />
          <span {...edit('subtitle')}>
          </span>
          <div className="btn_list">
            <Link href="/tour">
              <a className="tourLink" {...edit("mainLink1")} />
            </Link>
            <Link href="/tour?exp=true">
              <a  {...edit("mainLink2")} />
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="main_con_box2">
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
    </div>
    <div className="main_con_box3">
      <div className="w1200">
        <div className="top_txt">
          <h2 {...edit("busi_area_title")} />
        </div>
        <ul>
          <li className="img01">
            <i></i>
            <strong {...edit("busi_area1_title")} />
            <span {...edit("busi_area1_desc")} />
          </li>
          <li className="img02">
            <i></i>
            <strong {...edit("busi_area2_title")} />
            <span {...edit("busi_area2_desc")} />
          </li>
          <li className="img03">
            <i></i>
            <strong {...edit("busi_area3_title")} />
            <span {...edit("busi_area3_desc")} />
          </li>
          <li className="img04">
            <i></i>
            <strong  {...edit("busi_area4_title")} />
            <span {...edit("busi_area4_desc")} />
          </li>
        </ul>
      </div>
    </div>
    <div className="main_con_box4">
      <div className="w100">
        <div className="photo_box">
          <ul className="photo_ul line4">
            <li className="top_txt">
              <a href="/tour-list">
                <h2 {...edit("valuable_exp")} />
                <span {...edit("valuable_exp_sub")} />
                <i><svg><polygon points="69.22 12.71 0 12.71 0 10.71 64.33 10.71 54.87 1.43 56.27 0 69.22 12.71" /></svg></i>
              </a>
            </li>
            <PhotoLi onClickImg={() => {
            }} id={"12"} key={1 + "photo"} {...DummyPhoto[0]} />
            <PhotoLi onClickImg={() => {
            }} id={"12"} key={2 + "photo"} {...DummyPhoto[1]} />
            <PhotoLi onClickImg={() => {
            }} id={"12"} key={3 + "photo"} {...DummyPhoto[3]} />
          </ul>
          <ul className="photo_ul line4">
            <PhotoLi onClickImg={() => {
            }} id={"12"} key={5 + "photo"} {...DummyPhoto[0]} />
            <PhotoLi onClickImg={() => {
            }} id={"12"} key={6 + "photo"} {...DummyPhoto[1]} />
            <PhotoLi onClickImg={() => {
            }} id={"12"} key={7 + "photo"} {...DummyPhoto[3]} />
            <PhotoLi onClickImg={() => {
            }} id={"12"} key={8 + "photo"} {...DummyPhoto[4]} />
          </ul>
        </div>
      </div>
    </div>
    <div className="main_con_box5">
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
  </div >
};

export default Main;