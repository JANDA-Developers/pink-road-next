import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { closeModal } from '../../utils/popUp';
import { Modal } from '../modal/Modal';

interface IProp {
    id: string;
    title: string;
    onSubmit: (reason: string) => void;
}

export const Prompt: React.FC<IProp> = ({ onSubmit: handleSubmit, title, id }) => {
    const [submitData, setSubmitData] = useState("");


    if (typeof window === "undefined") return null;
    const el = document.getElementById('portal');
    if (!el) return null;

    return ReactDOM.createPortal(<Modal title={title} id={id}>
        <div className="write_comment">
            <div className="comment_layout">
                <ul className="text_box">
                    <li>
                        <div className="txta w100">
                            <textarea onChange={(e) => {
                                const val = e.currentTarget.value;
                                if (val.length > 3000) return;
                                setSubmitData(val);
                            }} value={submitData} style={{ height: "100px;" }} placeholder="..."></textarea>
                        </div>
                    </li>
                    <li className="tr count">{submitData.length}/3000</li>
                </ul>
                <div className="text_box_bottom">
                    <div className="btn_send float_right">
                        <button
                            onClick={() => {
                                handleSubmit(submitData)
                            }}
                            className="comment_btn"
                        >제출</button>
                    </div>
                </div>
            </div>
        </div>
    </Modal>, el)
};


export const PromptInput: React.FC<IProp> = ({ onSubmit: handleSubmit, title, id }) => {
    const [submitData, setSubmitData] = useState("");

    return <Modal title={title} id={id}>
        <input className="emailVerifi__input" value={submitData} onChange={(e) => {
            setSubmitData(e.currentTarget.value)
        }} />
        <button className="btn small" onClick={() => { handleSubmit(submitData); closeModal("#" + id)() }}>확인</button>
    </Modal>
};
