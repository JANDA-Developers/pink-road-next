import { OutputData } from "@editorjs/editorjs";
import dayjs from "dayjs";
import React from "react";
import { Ffile } from "types/api"
import EditorRendererProvider from 'react-editorjs-renderer';

interface IProps {
    catName: string;
    title: string;
    writer: string;
    thumb?: Ffile;
    createAt: string;
    comments?: {
        count: 0,
    }
    viewCount?: number
    summary?: string;
    files?: Ffile[]
    handleNext: () => void;
    handlePrev: () => void;
    handleList: () => void;
    handleEdit: () => void;
    content?: OutputData;
}

const View: React.FC<IProps> = (data) => {
    const { catName, createAt, title, writer, comments, files, summary, viewCount, thumb, content } = data;
    return <div className="board_box">
        <div className="w1200">
            <div className="xe_content">
                <div className="xe_top">
                    <div className="h3_top"><span className="category ct_02">{catName}</span></div>
                    <h3>
                        {title}
                    </h3>
                    <div className="footer_txt">
                        <span>작성자<strong>{writer}</strong></span>
                        <span>{dayjs(createAt).format('YYYY.MM.DD HH:mm')}</span>
                        {comments.count && <span>댓글 <strong>0</strong>건</span>}{/* 댓글기능 열렷을 때 */}
                        {viewCount && <span>조회수 <strong>3423</strong>회</span>}
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
                        {title}
                        <br /><br />
                        <img src={thumb.uri} alt={thumb.name} />
                    </p>
                    {files &&
                        <div className="download_box">
                            <ul>
                                {files.map((file, i) =>
                                    <li key={`file${i}`}><a href="/"><i className="flaticon-folder-15" />{file.name}<i className="end jandaicon-check" /></a></li>
                                )}
                            </ul>
                        </div>
                    }
                </div>
                {/* 댓글 */}
                <EditorRendererProvider data={content} />
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
