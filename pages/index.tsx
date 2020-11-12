import React, { useState, useContext, useEffect } from 'react';
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
import dynamic from 'next/dynamic';
const EditorJs = dynamic(() => import('components/editor2/Ediotr2'), { ssr: false })


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
  const { editMode } = useContext(AppContext);
  const original = pageInfo || pageInfoDefault;
  const [page, setPage] = useState(original);
  const { edit, imgEdit, bg } = getEditUtils(editMode, page, setPage)
  const [model, setModel] = useState();

  console.log("model");
  console.log(model);


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
    <div dangerouslySetInnerHTML={{
      __html: '<ol><li style="text-align: justify;"><h1><strong>zxczxczx</strong></h1></li><li style="text-align: justify;"><h1><strong><img src="blob:http://localhost:3000/5ba01d7b-815a-4e98-8e45-0e2bc9e91cac" style="width: 300px;" class="fr-fic fr-dii"></strong></h1></li><li style="text-align: justify;"><h1><strong>asasd</strong></h1></li><li style="text-align: justify;"><h1><strong>asdasd</strong></h1></li><li style="text-align: justify;"><h1><strong>a</strong></h1></li></ol><h1 style="text-align: right;"><strong>sdasd</strong></h1><ol><li style="text-align: justify;"><h1><strong>asd</strong></h1></li><li style="text-align: justify;"><h1><strong>zxc</strong></h1><ol><li style="text-align: justify;"><h1><strong>ㅁㄴㅇㅁㄴㅇ</strong></h1></li><li style="text-align: justify;"><h1><strong>ㅋㅌㅊ</strong></h1></li><li style="text-align: justify;"><h1><strong>ㅁㄴㅇ</strong></h1></li></ol></li></ol><p style="text-align: center;"><strong>casdasdaqweqwe1231231</strong></p>'
    }}></div>
    {/* <div dangerouslySetInnerHTML={model}/> */}
    <EditorJs onModelChange={setModel} model={model} config={{
       fontFamily: {
        "Roboto,sans-serif": 'Roboto',
        "Oswald,sans-serif": 'Oswald',
        "Montserrat,sans-serif": 'Montserrat',
        "'Open Sans Condensed',sans-serif": 'Open Sans Condensed',
        "montserrat": "기본글꼴"
      },
      fontFamilySelection: true,
      language: 'ko'
    }}/>
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
          <ul className="photo_ul line3">
            <li className="top_txt">
                          <h2 {...edit("valuable_exp")} />
                          <span className="txt" {...edit("valuable_exp_sub")} />
                <div className="btn_list">
                    <span><Link href="/news"><a>공정여행</a></Link></span>
                    <span><Link href="/news"><a>더많은체험</a></Link></span>
                </div>
                <i><svg><polygon points="69.22 12.71 0 12.71 0 10.71 64.33 10.71 54.87 1.43 56.27 0 69.22 12.71" /></svg></i>
          
            </li>
            <PhotoLi onClickImg={() => {
            }} id={"12"} key={1 + "photo"} {...DummyPhoto[0]} />
            <PhotoLi onClickImg={() => {
            }} id={"12"} key={2 + "photo"} {...DummyPhoto[1]} />
          </ul>
          <ul className="photo_ul line3">
            <PhotoLi onClickImg={() => {
            }} id={"12"} key={5 + "photo"} {...DummyPhoto[0]} />
            <PhotoLi onClickImg={() => {
            }} id={"12"} key={6 + "photo"} {...DummyPhoto[1]} />
            <PhotoLi onClickImg={() => {
            }} id={"12"} key={7 + "photo"} {...DummyPhoto[3]} />
            </ul>
            <ul className="photo_ul line3">
            <PhotoLi onClickImg={() => {
            }} id={"12"} key={5 + "photo"} {...DummyPhoto[0]} />
            <PhotoLi onClickImg={() => {
            }} id={"12"} key={6 + "photo"} {...DummyPhoto[1]} />
            <PhotoLi onClickImg={() => {
            }} id={"12"} key={7 + "photo"} {...DummyPhoto[3]} />
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