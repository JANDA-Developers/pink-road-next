import React, { useState, useContext } from 'react';
import pageInfo from 'info/main.json';
import { getEditUtils } from 'utils/pageEdit';
import { AppContext } from './_app'
import { Meta } from 'components/common/meta/Meta';
import { PhotoLi } from 'components/main/PhotoLi';

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

interface IProp { }

export const Main: React.FC<IProp> = () => {

  const { editMode } = useContext(AppContext);
  const [page, setPage] = useState(pageInfo);
  const { edit } = getEditUtils(editMode, page, setPage)


  return <div className="body main" id="main" >
    <Meta title="메인페이지" description="ㅁㄴㅇㄴ" />
    <div className="main_con_box1">
          <div
            className="main_top_images"
              style={{ backgroundImage: `url(/img/main_bg_03.jpg)` }}
          >
                <div className="w1200">
                      <strong {...edit("title")} />
                      <span {...edit('subtitle')}>
                      </span>
                      <div className="btn_list">
                        <a className="tourLink" href="/tour">투어</a>
                        <a href="/experience_main">체험</a>
                      </div>
                </div>
          </div>
    </div>
    <div className="main_con_box2">
          <div className="w1200">
                <div className="top_txt">
                    <h2>Purpose and Vision</h2>
                    <span>목표로 삼고 나아가는 가치있는 생각 3가지</span>
                </div>
                <ul>
                      <li>
                            <i class="icon_01"></i>
                            <strong>지속가능한<br className="no" />공간을 그리다</strong>
                            <span>sustainable space</span>
                      </li>
                      <li>
                            <i class="icon_02"></i>
                            <strong>잊히지 않는<br className="no" />시대를 그리다</strong>
                             <span>unforgettable period</span>
                      </li>
                      <li>
                            <i class="icon_03"></i>
                            <strong>
                              상생하는<br className="no" />사람을 그리다 </strong>
                            <span>co-prosperity person</span>

                      </li>
                </ul>
          </div>
    </div>
    <div className="main_con_box3">
          <div className="w1200">
                <div className="top_txt">
                  <h2>Business Area</h2>
                </div>
                <ul>
                    <li className="img01">
                        <i></i>
                        <strong>Brand Consulting</strong>
                        <span>
                        진정성 있고 마음으로 공감할 수 있는
                          브랜드 컨텐츠 스토리를 만듭니다.
                          풍부한 사전 조사와 짜임새 있는 기획,
                          업계 동향과 트렌드 분석 및 각계 전문가
                          인터뷰 등을 통한 경험과 노하루를 바탕
                          으로 공감할 수 있는 스토리텔링 기반
                          종합 브랜드 컨설팅을 진행합니다.
                        </span>
                    </li>
                    <li className="img02">
                        <i></i>
                        <strong>Content R&D</strong>
                        <span>
                        지역의 가치있는 문화를 발굴하고 연구
                          하여 그에 맞는 새로운 컨텐츠를 개발
                          하고 제작합니다. 지역사회와 사람을
                          모두 생각하는 연구 시스템을 운영하며
                          차별화된 컨텐츠를 탄생시키기 위해
                          고민합니다. 나아가 보존과 응용을 통해
                          컨 텐 츠 에 비 전 을 담 습 니 다 .
                        </span>
                    </li>
                    <li className="img03">
                        <i></i>
                        <strong>Co-prosperity</strong>
                        <span>
                        경제적, 환경적, 사회문화적 지속
                          가능성을 모두 충족하는 여행컨텐츠를
                          지향합니다. 지역민에게 여행수익이
                          환원될 수 있는 구조로 지역사회 경제에
                          직·간접적으로 기여하는 착한여행을
                          만듭니다. 자연을 보전하며 커뮤니티를
                          통해 사람과 지역 모두가 상생합니다.
                        </span>
                    </li>
                    <li className="img04">
                        <i></i>
                        <strong>Social Design</strong>
                        <span>
                        사회와 지역을 중심으로 한 디자인
                          굿즈 및 기념품 등을 제작·진행합니다.
                          지역의 알려지지 않은 젊은 작가들과
                          컨셉회의 및 제작까지 함께 진행하며
                          지역에서 활동하고 있는 신진 작가들의
                          활동기반과 커리어를 만들어 줍니다.
                        </span>
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
                            <h2>
                            Valuable<br />
                            Experience
                            </h2>
                              <span>가치있는 체험</span>
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
                <h2><strong>우리는</strong>새로운 변화속에서 <strong>사회적 가치</strong>를 지키며 서로 <strong>상생</strong>하는 일을 합니다.</h2>
                <p>We keep our social values in new changes and work together</p>
          </div>
          <div
            className="main_bg_img"
              style={{ backgroundImage: `url(/img/main_bg_04.jpg)` }}
          />;
            </div>
    </div >
};

export default Main;