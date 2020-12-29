import Link from 'next/link';
import React from 'react';

interface IProp { }

export const Profile: React.FC<IProp> = () => {



    return <div className="in profile_box">
        <div className="member_details_in w100">
            <div className="top_bg" style={{ backgroundImage: "url(/its/main_bg_001.jpg)" }}>
                <div className="w1200">
                    <div className="left_btn">
                        <a href="/">채널톡 문의하기</a>
                    </div>
                    <div className="right_btn">
                        <a href="/">공유하기</a>
                    </div>
                </div>

            </div>
            <div className="member_box">
                <div className="w1200">
                    <div className="profile">
                        <div className="photo"><span>프로필사진</span></div>
                        <div className="name"><i>G</i>김행자</div>
                        <div className="tag">
                            <a href="/">#부산가이드</a>
                            <a href="/">#여성가이드</a>
                            <a href="/">#뚜벅이여행</a>
                            <a href="/">#꽃놀이</a>
                            <a href="/">#버스투어</a>
                            <a href="/">#운전가능</a>
                            <a href="/">#일본어</a>
                            <a href="/">#영어</a>
                            <a href="/">#중국어</a>
                        </div>
                    </div>
                    <div className="profile_txt">
                        <div className="con01">
                            <h3 className="title">소개글</h3>
                            <div className="txt">
                                1990년 관광통역가이드 취득 15년 패키지 여행안내후 프리랜서로 독립 , 한국인의 일본여행 인솔로 일본 오키나와~홋카이도까지 인솔겸 가이드,로 활동, 이후 여행사를 오픈하여 부산과 서울등 대도시에서 출발 지방으로가서 여러가지 체험과 숨겨진 관광지를 직접 기획하고 안내하는 오더메이드형 기획여행, 건강여행을 리드하고 있습니다.
                               <br /> <br />
                                    현재까지 일본인가이드로써 서울을 비롯 제주도까지가이드 . 한국인인솔자로써 일본방문 100회이상. 일본 지상파TV TBS한국특집 한국총괄코디네이트(요리방송. 한옥 과 한방체험. 피부과 찰영등) 교류회매칭. 유네스코지정 사찰등 불교관련 답사 및 순례. .JATA박람회부스운영. 한국산후조리원 일본소개 및 제휴. 등 다양한활동
                               <br /> <br />
                                        유명한 관광지도 좋지만 소모성으로 피곤한 여행이 아닌, 나자신이 즐거운, 생활에 재충전이 되는 여행을 체험과 함께 즐기며 가이드하고 싶습니다.
                               <br /> <br />
                                            저와 함께 하시면 웰니스(Wellness)투어 즉 명상. 템플스테이. 아름다운경치를 바라보며 산책. 요트. 한방의 정보와 건강한 맛집탐방으로 편안하고 즐거운 체험으로 힐링 하실수 있을것입니다.

                            </div>
                        </div>
                        <div className="con02 mt50">
                            <h3 className="title">가이드 정보</h3>
                            <div className="txt">
                                <ul className="ul_info">
                                    <li>
                                        <strong>총 가이드</strong>
                                        <span>209</span>
                                    </li>
                                    <li>
                                        <strong>총 가이드 인원</strong>
                                        <span>2092</span>
                                    </li>
                                    <li>
                                        <strong>가이드 리뷰</strong>
                                        <span>8</span>
                                    </li>
                                    <li>
                                        <strong>가이드 상품</strong>
                                        <span>22</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="review_board mt50">
                            <div className="alignment">
                                <div className="left_div"><h3>가이드 리뷰 <strong>232</strong></h3></div>
                                <div className="right_div">
                                    <span className="goto_page"><a href="/">바로가기<i className="flaticon-menu-1"></i></a></span>
                                </div>
                            </div>
                            <div className="board_view">
                                <div className="thumbnail" style={{ backgroundImage: "url(/its/tem_bg_03.jpg)" }} >
                                    <div className="in_black">
                                        <h4>떠나요~ 제주도~ 푸른바다로~</h4>
                                    </div>
                                </div>
                                <div className="thumbnail" style={{ backgroundImage: "url(/its/tem_bg_03.jpg)" }} >
                                    <div className="in_black">
                                        <h4>떠나요~ 제주도~ 푸른바다로~</h4>
                                    </div>
                                </div>
                                <div className="thumbnail" style={{ backgroundImage: "url(/its/tem_bg_03.jpg)" }} >
                                    <div className="in_black">
                                        <h4>떠나요~ 제주도~ 푸른바다로~</h4>
                                    </div>
                                </div>
                                <div className="thumbnail" style={{ backgroundImage: "url(/its/tem_bg_03.jpg)" }} >
                                    <div className="in_black">
                                        <h4>떠나요~ 제주도~ 푸른바다로~</h4>
                                    </div>
                                </div>
                                <div className="thumbnail" style={{ backgroundImage: "url(/its/tem_bg_03.jpg)" }} >
                                    <div className="in_black">
                                        <h4>떠나요~ 제주도~ 푸른바다로~</h4>
                                    </div>
                                </div>
                                <div className="thumbnail" style={{ backgroundImage: "url(/its/tem_bg_03.jpg)" }} >
                                    <div className="in_black">
                                        <h4>떠나요~ 제주도~ 푸른바다로~</h4>
                                    </div>
                                </div>
                                <div className="thumbnail" style={{ backgroundImage: "url(/its/tem_bg_03.jpg)" }} >
                                    <div className="in_black">
                                        <h4>떠나요~ 제주도~ 푸른바다로~</h4>
                                    </div>
                                </div>
                                <div className="thumbnail" style={{ backgroundImage: "url(/its/tem_bg_03.jpg)" }} >
                                    <div className="in_black">
                                        <h4>떠나요~ 제주도~ 푸른바다로~</h4>
                                    </div>
                                </div>
                                <div className="thumbnail" style={{ backgroundImage: "url(/its/tem_bg_03.jpg)" }} >
                                    <div className="in_black">
                                        <h4>떠나요~ 제주도~ 푸른바다로~</h4>
                                    </div>
                                </div>
                                <div className="thumbnail" style={{ backgroundImage: "url(/its/tem_bg_03.jpg)" }} >
                                    <div className="in_black">
                                        <h4>떠나요~ 제주도~ 푸른바다로~</h4>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="mt50">
                            <div className="alignment">
                                <div className="left_div"><h3>등록된 상품 <strong>23</strong></h3></div>
                                <div className="right_div">
                                    <span className="goto_page"><a href="/">바로가기<i className="flaticon-menu-1"></i></a></span>
                                </div>
                            </div>
                            <ul className="list_ul line4">
                                <li className="list_in">
                                    <div className="img" style={{ backgroundImage: "url(/its/tem_bg_02.jpg)" }}>상품이미지</div>
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
                                    <div className="img" style={{ backgroundImage: "url(/its/tem_bg_06.jpg)" }}>상품이미지</div>
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
                                    <div className="img" style={{ backgroundImage: "url(/its/tem_bg_03.jpg)" }}>상품이미지</div>
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
                                    <div className="img" style={{ backgroundImage: "url(/its/tem_bg_07.jpg)" }}>상품이미지</div>
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
                                <li className="list_in">
                                    <div className="img" style={{ backgroundImage: "url(/its/tem_bg_02.jpg)" }}>상품이미지</div>
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
                                    <div className="img" style={{ backgroundImage: "url(/its/tem_bg_06.jpg)" }}>상품이미지</div>
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
                                    <div className="img" style={{ backgroundImage: "url(/its/tem_bg_03.jpg)" }}>상품이미지</div>
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
                                    <div className="img" style={{ backgroundImage: "url(/its/tem_bg_07.jpg)" }}>상품이미지</div>
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
                            <div className="boardNavigation">
                                <div className="float_left">
                                    <div className="pagenate_mini">
                                        <div className="page_btn first"><i className="jandaicon-arr4-left"></i></div>
                                        <div className="count"><strong>1</strong> / 10</div>
                                        <div className="page_btn end"><i className="jandaicon-arr4-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
};

export default Profile;