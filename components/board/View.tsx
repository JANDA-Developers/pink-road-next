import { UserRole } from "aws-sdk/clients/quicksight";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Ffile } from "types/api"
import { AppContext } from "../../pages/_app";
import { IDiv, TElements } from "../../types/interface";
import { ContentViewer } from "../contentViewer/ContentViewer";

export interface IBoardMoveData {
    _id: string;
    title: string;
    [key: string]: any
}

interface IProps extends IDiv {
    authorId: string;
    catName?: string;
    title: string;
    writer: string;
    isOpen?: boolean;
    thumb?: Ffile | null;
    createAt: string;
    comments?: {
        count: 0,
    }
    handleRole?: UserRole
    viewCount?: number
    subTitle?: string | null;
    files?: Ffile[]
    next?: IBoardMoveData;
    prev?: IBoardMoveData;
    onList?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
    content?: string;
    Buttons?: TElements
}


export const BoardView: React.FC<IProps> = (data) => {
    const { isManager, myProfile } = useContext(AppContext);
    const { authorId, isOpen, className, catName, createAt, title = "", writer, comments, files, viewCount, content = "", onEdit, onList, next, prev, onDelete, subTitle, Buttons } = data;
    const isMyBoard = myProfile?._id === data.authorId;
    const router = useRouter();
    const move = (id: string) => {
        const splited = router.pathname.split("/");
        splited[splited.length - 1] = id;
        router.push(splited.join("/"));
    }

    const handleList = () => {
        onList?.();
    }

    const handleEdit = () => {
        onEdit?.();
    }

    const handleDelete = () => {
        onDelete?.();
    }

    return <div className={`board_box edtiorView ${className}`}>
        <div className="w1200">
            <div className="xe_content">
                <div className="xe_top">
                    {catName && <div className="h3_top"><span className="category ct_02">{catName}</span></div>}
                    <h3>
                        {title}
                    </h3>
                    <div className="footer_txt">
                        <span>작성자<strong>{writer}</strong></span>
                        <span>{dayjs(createAt).format('YYYY.MM.DD HH:mm')}</span>
                        {isOpen ? <span /> : <span>비밀글</span>}{/* 댓글기능 열렷을 때 */}
                        {comments?.count && <span>댓글 <strong>0</strong>건</span>}{/* 댓글기능 열렷을 때 */}
                        {viewCount && <span>조회수 <strong>{viewCount}</strong>회</span>}
                    </div>
                </div>
                <div className="in_box">

                    {/*본문시작*/}
                    {subTitle && subTitle}
                    <br /><br />
                    {/*thumb && <img src={thumb.uri} alt={thumb.name} /> 섬네일이미지 안보여줘도됨...*/}
                    <ContentViewer data={content} />
                    {files &&
                        <div className="download_box">
                            <ul>
                                {files?.map((file, i) =>
                                    <li key={`file${i}`}><a href={file.uri} download><i className="flaticon-folder-15" />{file.name}<i className="end jandaicon-check" /></a></li>
                                )}
                            </ul>
                        </div>
                    }
                </div>
                {/* 댓글 */}


                {(next || prev) && <div className="board_list_mini">
                    <ul>
                        {prev && <li onClick={() => {
                            move(prev._id)
                        }} className="first"><span><i className="flaticon-cloud-computing" />이전글<i className="flaticon-command" /></span><div>{prev.title}</div></li>}
                        {next && <li onClick={() => {
                            move(next._id)
                        }}><span><i className="flaticon-cloud-computing" />다음글<i className="flaticon-command" /></span><div>{next.title}</div></li>}
                    </ul>
                </div>}

                <div className="boardNavigation">
                    <div className="float_left">
                        {handleList && <button onClick={handleList} type="button" className="btn medium">목록</button>}
                    </div>
                    {(isMyBoard || isManager) && <div className="float_right">
                        <button onClick={handleEdit} type="submit" className="btn medium pointcolor">수정</button>
                        <button onClick={handleDelete} type="submit" className="btn medium">삭제</button>
                        {Buttons}
                    </div>}
                </div>
            </div>
        </div>
    </div>
}
