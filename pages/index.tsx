import React, { useContext } from 'react';
import pageInfoDefault from 'info/main.json';
import { Meta } from 'components/common/meta/Meta';
import { Upload } from 'components/common/Upload';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { useProductList } from 'hook/useProduct';
import { useRouter } from 'next/router';
import { getStaticPageInfo } from '../utils/page';
import { GoodsListAPI } from '../components/common/GoodsListAPI';
import { IEditPage } from '../utils/with';
import { EditContext } from './_app';

export const Main: React.FC = () => {
  const { items } = useProductList({ initialPageIndex: 1, initialViewCount: 8 });
  const { imgEdit, edit, bg } = useContext<IEditPage<typeof pageInfoDefault>>(EditContext as any);
  const router = useRouter()

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

    <div className="main_con_box4">
      <div className="w1200">
        <div className="deal_list">
          <div className="alignment">
            <div className="left_div"><h2>BEST</h2></div>
            <div className="right_div">
              <span className="goto_page"><a href="/tour">바로가기<i className="flaticon-menu-1"></i></a></span>
            </div>
          </div>
          <GoodsListAPI />
        </div>


        <div className="deal_list">
          <div className="alignment">
            <div className="left_div"><h2>DM추천</h2></div>
            <div className="right_div">
              <span className="goto_page"><a href="/tour">바로가기<i className="flaticon-menu-1"></i></a></span>
            </div>
          </div>
          <GoodsListAPI />
        </div>

      </div>
    </div>

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
                <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</span>
                <div className="name"><i>G</i>김행자</div>
              </li>
              <li>
                <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</span>
                <div className="name"><i>G</i>김행자</div>
              </li>
              <li>
                <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</span>
                <div className="name"><i>G</i>김행자</div>
              </li>
              <li>
                <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</span>
                <div className="name"><i>G</i>김행자</div>
              </li>
              <li>
                <span className="photo" style={{ backgroundImage: 'url(/its/people01.jpg)' }}>프로필사진</span>
                <div className="name"><i>G</i>김행자</div>
              </li>

            </ul>
          </div>
          <a className="right_mov"><i className="jandaicon-arr2-right"></i></a>
        </div>

        <div className="goods_list">
          <GoodsListAPI />

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
  </div >

};

interface IGetProps {
  pageInfo: typeof pageInfoDefault | "",
}


export const getStaticProps: GetStaticProps<IGetProps> = getStaticPageInfo("main", pageInfoDefault);
export default Main;
