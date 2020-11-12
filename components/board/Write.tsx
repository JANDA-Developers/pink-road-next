import { OutputData } from "@editorjs/editorjs";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Ffile, FileCreateInput, PortfolioCreateInput } from "types/api"
import { EMPTY_EDITOR } from "types/const";
import { TElements } from "types/interface";
import React from "react";
import { useUpload } from "hook/useUpload";

const EditorJs = dynamic(() => import('components/editor/Editor'), { ssr: false })

export interface IBoard {
    categoryList: TCategory[]
    category: TCategory
    categoryId: string;
    author: string;
    title: string;
    isOpen: boolean;
    files: Ffile[]
    content: OutputData;
    subTitle: string;
    summary: string;
    thumb: FileCreateInput;
}

interface IOpen {
    title: boolean
    subTitle: boolean;
    category: boolean;
    files: boolean;
    summary: boolean;
    thumb: boolean;
}

type TCategory = { _id: string, label: string };
interface IProps {
    WriteInjection: TElements;
    defaults?: Partial<IBoard>;
    mode: "create" | "edit"
    onSave?: (data: Partial<IBoard>) => void;
    onDelete?: () => void;
    onEdit?: (data: Partial<IBoard>) => void;
    onCreate?: (data: Partial<IBoard>) => void;
    onLoad?: () => void;
    onCancel?: () => void;
    opens: IOpen
}

export const BoardWrite: React.FC<IProps> = ({ defaults = {}, opens, mode, WriteInjection, onCancel, onCreate, onDelete, onEdit, onLoad, onSave }) => {
    const isCreateMode = mode === "create";
    console.log('defaults.summary');
    console.log(defaults.summary);
    const { signleUpload } = useUpload();
    const [isOpen, setIsOpen] = useState<boolean>(defaults.isOpen);
    const [title, setTitle] = useState<string>(defaults.title)
    const [category, setCategory] = useState<string>(defaults.category?._id);
    const [subTitle, setSubTitle] = useState<string>(defaults.subTitle);
    const [summary, setSummary] = useState<string>(defaults.summary);
    const [files, setFiles] = useState<Ffile[]>([]);
    const [thumb, setThumb] = useState<FileCreateInput>(defaults.thumb)
    const [content, setContent] = useState<OutputData>(defaults.content)
    const { categoryList, author } = defaults;
    const hiddenFileInput = React.useRef<HTMLInputElement>(null);


    const data: Partial<IBoard> = {
        categoryId: category,
        content,
        // files,
        isOpen,
        subTitle,
        summary,
        title,
        thumb,
    }

    const handleCatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const nextCat = e.currentTarget.value
        setCategory(nextCat)
    }

    const handleChangeOpen = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsOpen(e.currentTarget.value === "true")
    }

    const handleAddFile = () => {
    }

    const handleCancel = () => {
        onCancel()
    }

    const handleCreate = () => {
        
        onCreate(data)
    }

    const handleDelete = () => {
        onDelete()
    }

    const handleSave = () => {
        onSave(data)
    }

    const handleLoad = () => {
        onLoad()
    }
    const handleEdit = () => {
        onEdit(data)
    }

    const handleUploadClick = () => {
        hiddenFileInput.current.click();
    }

    const handleChangeSumbNail = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const fileUploaded = event.target.files;
        const onUpload = (url, data: Ffile) => {
            setThumb(data)
        }

        signleUpload(fileUploaded, onUpload);
        // data.images[FILE_SELECT_INDEX] = fileUploaded;
    };


    return (
        <div className="writing_in w100 board_write">
            <div className="w1200">
                <div className="write_box">
                    {opens.category && <div className="write_type">
                        <div className="title">카테고리</div>
                        <div className="input_form">
                            <span className="category r3">
                                <select onChange={handleCatChange} value={category} name="category_srl">
                                    {categoryList.map(cat =>
                                        <option key={cat._id}>
                                            {cat.label}
                                        </option>
                                    )}
                                </select>
                            </span>
                        </div>
                    </div>
                    }
                    <div className="write_type">
                        <div className="title">작성자</div>
                        <div className="input_form">
                            <input readOnly value={author} type="text" name="title" className="inputText w50 fix" />{/* 자동출력 고정 */}
                        </div>
                    </div>
                    <div className="write_type">
                        <div className="title">제목</div>
                        <div className="input_form">
                            <input id="title" onChange={(e) => {
                                setTitle(e.currentTarget.value)
                            }} value={title} type="text" name="title" className="inputText w100" />
                        </div>
                    </div>
                    {opens.thumb &&
                        <div className="write_type">
                            <div className="title">썸네일</div>
                            <div className="img_box_add">
                                <ul className="img_add">
                                    {thumb ? (
                                        <li onClick={handleUploadClick} className="on_file">{thumb.name}</li>) :
                                        (<li onClick={handleUploadClick}>이미지추가<i className="flaticon-add icon_plus"></i></li>)
                                    }
                                    <input onChange={handleChangeSumbNail} multiple={false} ref={hiddenFileInput} hidden type="file" />
                                </ul>
                                <p className="input_form info_txt">- 썸네일 이미지사이즈 400px * 400px</p>
                            </div>
                        </div>
                    }
                    {opens.subTitle &&
                        <div className="write_type">
                            <div className="title">부제목</div>
                            <div className="input_form">
                                <input onChange={(e) => {
                                    setSubTitle(e.currentTarget.value)
                                }} value={subTitle} type="text" name="subTitle" className="inputText w100" />
                            </div>
                        </div>
                    }
                    {opens.summary &&
                        <div className="write_type">
                            <div className="title">요약</div>
                            <div className="input_form">
                                <input onChange={(e) => {
                                    setSummary(e.currentTarget.value)
                                }} value={summary} type="text" name="summary" className="inputText w100" />
                            </div>
                        </div>
                    }
                    <div className="write_type">
                        <div className="title">글 설정</div>
                        <div className="input_form">
                            <ul>
                                <li><input onChange={handleChangeOpen} type="radio" name="status" id="status-open" value={"true"} checked={isOpen} className="radio" /><label htmlFor="status-open">공개</label></li>
                                <li><input onChange={handleChangeOpen} type="radio" name="status" id="status-sold" value={"false"} checked={!isOpen} className="radio" /><label htmlFor="status-sold">비공개</label></li>
                            </ul>
                        </div>
                    </div>
                    {WriteInjection}
                </div>
                {/* 첨부파일 */}
                {opens.files &&
                    <div className="write_type bottom_write">
                        <div className="write_type">
                            <div className="title">첨부파일</div>
                            <div className="img_box_add">
                                <ul className="img_add">
                                    <li onClick={handleAddFile}>파일추가<i className="flaticon-add icon_plus" /></li>
                                </ul>
                                <p className="input_form info_txt">- 20MB 제한이 있습니다.</p>
                            </div>
                        </div>
                    </div>
                }
                {/* 내용 */}
                <div className="write_con">
                    <EditorJs holder="content" data={content} onChange={(api: any, data?: OutputData) => {
                        setContent(data || EMPTY_EDITOR);
                    }} />
                    <div id="content" />
                </div>
                {/* 하단메뉴 */}
                <div className="boardNavigation">
                    <div className="float_left">
                        <button onClick={handleSave} type="button" className="btn medium">임시 저장</button>
                        <button onClick={handleLoad} type="button" className="btn medium">불러오기</button>
                    </div>
                    <div className="float_right">
                        {isCreateMode || <button onClick={handleEdit} type="submit" className="btn medium pointcolor">수정</button>}
                        {isCreateMode && <button onClick={handleCreate} type="submit" className="btn medium pointcolor">등록</button>}
                        <button onClick={handleCancel} type="button" className="btn medium impact">취소</button>
                        <button onClick={handleDelete} type="submit" className="btn medium">삭제</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardWrite;
