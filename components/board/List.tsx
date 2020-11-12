

interface IProps { }

const List: React.FC<IProps> = () => {
    return <div className="board_box">
        <div className="w1200">
            <div className="xe_content">
                <div className="xe_top">
                    <div className="h3_top"><span className="category ct_02">안내</span></div>
                    <h3>
                        이번주 행사 안내드립니다.
                </h3>
                    <div className="footer_txt">
                        <span>작성자<strong> 관리자</strong></span>
                        <span>2020.02.02 11:00</span>
                        <span>댓글 <strong>0</strong>건</span>{/* 댓글기능 열렷을 때 */}
                        <span>조회수 <strong>3423</strong>회</span>
                    </div>
                    {/*<div class="menu">
      <span><i class="flaticon-more-1"></i></span>
      <ul class="option_box">
          <li><span onclick="location.href = '';">공유하기</span></li>
          <li><span onclick="location.href = '';">비공개 전환하기</span></li>
      </ul>
  </div>*/}
                </div>
                <div className="in_box">
                    <p>
                        안녕하세요~ 핑크로더 여러분~~~!!!!<br />
                  이번주에 열리는 "모두함께해요!!"행사를 사전에 알려드립니다.
                  <br /><br />
                        <img src="../img/detail_img01.jpg" alt="??" />
                    </p>
                    <div className="download_box">
                        <ul>
                            <li><a href="/"><i className="flaticon-folder-15" />다운_받아_가세요.jpg<i className="end jandaicon-check" /></a></li>
                        </ul>
                    </div>
                </div>
                {/* 댓글 */}
                <div className="comment_box">
                    {/* 댓글리스트 */}
                    <div className="list_comment">
                        <h3>댓글 <strong>4</strong> </h3>
                        <ul>
                            <li>
                                <div className="title"><i className="profile" style={{ backgroundImage: 'url(../img/profile_f.png)' }} />부산아주머니</div>
                                <p>모두가 함께 보는 댓글입니다. 모두가 함께 보는 댓글입니다. 모두가 함께 보는 댓글입니다. 모두가 함께 보는 댓글입니다. 모두가 함께 보는 댓글입니다.</p>
                                <span className="date">2020.9.22. 12:12</span>
                                <div className="btn_bottom">
                                    <button className="comment_btn mini">답글</button>
                                    <button className="comment_btn mini">삭제</button>
                                </div>
                            </li>
                            <li className="re">
                                <div className="title"><i className="profile" style={{ backgroundImage: 'url(../img/profile_f.png)' }} />부산아주머니</div>
                                <p>모두가 함께 보는 댓글입니다. 모두가 함께 보는 댓글입니다. 모두가 함께 보는 댓글입니다. 모두가 함께 보는 댓글입니다. 모두가 함께 보는 댓글입니다.</p>
                                <span className="date">2020.9.22. 12:12</span>
                                <div className="btn_bottom">
                                    <button className="comment_btn mini">답글</button>
                                    <button className="comment_btn mini">삭제</button>
                                </div>
                            </li>
                            <li className="re">
                                <div className="title"><i className="profile" style={{ backgroundImage: 'url(../img/profile_f.png)' }} />부산아주머니</div>
                                <p>모두가 함께 보는 댓글입니다. 모두가 함께 보는께 보는 댓글입니다. 모두가 함께 보는께 보는 댓글입니다. 모두가 함께 보는께 보는 댓글입니다. 모두가 함께 보는께 보는 댓글입니다. 모두가 함께 보는께 보는 댓글입니다. 모두가 함께 보는 댓글입니다. 모두가 함께 보는 댓글입니다. 모두가 함께 보는 댓글입니다. 모두가 함께 보는 댓글입니다.</p>
                                <span className="date">2020.9.22. 12:12</span>
                                <div className="btn_bottom">
                                    <button className="comment_btn mini">답글</button>
                                    <button className="comment_btn mini">삭제</button>
                                </div>
                            </li>
                            <li>
                                <div className="title"><i className="profile" style={{ backgroundImage: 'url(../img/profile_f.png)' }} />부산아주머니</div>
                                <p>모두가 함께 보는 댓글입니다. 모두가 함께 보는 댓글입니다. 모두가 함께 보는 댓글입니다. 모두가 함께 보는 댓글입니다. 모두가 함께 보는 댓글입니다.</p>
                                <span className="date">2020.9.22. 12:12</span>
                                <div className="btn_bottom">
                                    <button className="comment_btn mini">답글</button>
                                    <button className="comment_btn mini">삭제</button>
                                </div>
                            </li>
                        </ul>
                        <div className="boardNavigation tc">
                            <div className="pagenate_mini">
                                <div className="page_btn first"><i className="jandaicon-arr4-left" /></div>
                                <div className="count"><strong>1</strong> / 10</div>
                                <div className="page_btn end"><i className="jandaicon-arr4-right" /></div>
                            </div>
                        </div>
                    </div>
                    {/* 댓글쓰기 */}
                    <div className="write_comment">
                        <div className="comment_layout">
                            <ul className="text_box">
                                <li>
                                    <div className="title"><i className="profile" style={{ backgroundImage: 'url(../img/profile_f.png)' }} />부산아주머니</div>
                                </li>
                                <li>
                                    <div className="txta w100">
                                        <textarea style={{ height: '100px' }} placeholder="모두가 함께 보는 댓글입니다." defaultValue={""} />
                                    </div>
                                </li>
                                <li className="tr count">0/3000</li>
                            </ul>
                            <div className="text_box_bottom">
                                <div className="float_left w50">
                                    <span className="on"><i className="flaticon-locked" />비밀댓글</span>
                                    <span><i className="flaticon-locked" />비밀댓글</span>
                                </div>
                                <div className="btn_send float_right"><button className="comment_btn">등록</button> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="boardNavigation">
                    <div className="float_left">
                        <button type="button" className="btn medium">목록</button>
                    </div>
                    <div className="float_right">
                        <button type="submit" className="btn medium pointcolor">수정</button>
                        <button type="submit" className="btn medium">삭제</button>
                    </div>
                </div>
                <div className="board_list_mini">
                    <ul>
                        <li className="first"><span><i className="flaticon-cloud-computing" />이전글<i className="flaticon-command" /></span><div>행사를 합니다~!!!!!</div></li>
                        <li><span><i className="flaticon-cloud-computing" />다음글<i className="flaticon-command" /></span><div>입금자 확인중입니다.</div></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}

export default List;