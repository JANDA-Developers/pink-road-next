import React, { useState } from 'react';
import { Modal } from '../modal/Modal';

interface IProp {
    id: string;
    title: string;
    onSubmit: (reason: string) => void;
}

export const Prompt: React.FC<IProp> = ({ onSubmit: handleSubmit, title, id }) => {
    const [reason, setReason] = useState("");

    return <Modal title={title} id={id}>
        <div className="write_comment">
            <div className="comment_layout">
                <ul className="text_box">
                    <li>
                        <div className="txta w100">
                            <textarea onChange={(e) => {
                                const val = e.currentTarget.value;
                                setReason(val);
                            }} value={reason} style={{ height: "100px;" }} placeholder="..."></textarea>
                        </div>
                    </li>
                    <li className="tr count">{reason.length}/3000</li>
                </ul>
                <div className="text_box_bottom">
                    <div className="btn_send float_right">
                        <button
                            onClick={() => {
                                handleSubmit(reason)
                            }}
                            className="comment_btn"
                        >제출</button>
                    </div>
                </div>
            </div>
        </div>
    </Modal>
};
