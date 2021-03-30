import dynamic from 'next/dynamic';
import React, { useContext, useState } from 'react';
import { AppContext } from '../../pages/_app';
import { BG, BGprofile } from '../../types/const';
import { LoadEditor } from '../edit/EdiotrLoading';


const Editor = LoadEditor();

interface IProp {
    title: string;
    defaultContent: string;
    onSubmit: (content: string) => void;
}

export const CommentWrite: React.FC<IProp> = ({ onSubmit, defaultContent, title }) => {
    const { myProfile } = useContext(AppContext);
    const [content, setContent] = useState<string>(defaultContent);
    const length = content.length;

    const validate = (): boolean => {
        if (length > 3000) {
            alert("3000글자 까지만 적을 수 있습니다.");
            return false;
        }
        return true;
    }

    return <div className="comment_box">
        <div className="write_comment">
            <div className="comment_layout">
                <ul className="text_box">
                    <li>
                        <div className="title">
                            <i
                                className="profile"
                                style={BGprofile(myProfile?.profileImg)}
                            />
                            {title}
                        </div>
                    </li>
                    <li>
                        <Editor onChange={setContent} data={content} />
                    </li>
                    <li className="tr count">{content.length}/3000</li>
                </ul>
                <div className="text_box_bottom">
                    {/* <div className="float_left w50">
                    <span onClick={() => {
                        setIsSecret(!isSecret);
                    }} className={isSecret ? `on` : undefined}>
                        <i className="flaticon-locked" />
                        비밀댓글
                    </span>
                </div> */}
                    <div className="btn_send float_right">
                        <button onClick={() => {
                            if (validate()) onSubmit(content)
                        }} className="comment_btn">등록</button>{" "}
                    </div>
                </div>
            </div>
        </div>
    </div>
};
