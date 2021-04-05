import React, { useState } from 'react';
import { IUseModal } from '../../hook/useModal';
import { IDiv } from '../../types/interface';

const style: React.CSSProperties = {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    position: "fixed",
    display: "none",
    justifyContent: "center",
    alignItems: "center"
}

export interface IPromptInfo {
    title: string;
    messageLabel?: string;
    callBack: (message: string) => void;
}

interface IProp extends IDiv {
    modalHook: IUseModal<IPromptInfo>
}
export const PormptModal: React.FC<IProp> = ({ modalHook, className, ...props }) => {
    const { callBack, title, messageLabel } = modalHook.info || {};
    const [submitData, setSubmitData] = useState("")


    return <div className={className || `popup_bg_mini`} style={{
        ...style,
        display: modalHook.isOpen ? "flex" : "none"
    }}   {...props}>
        <div className={`in_txt`}>
            <a onClick={modalHook.closeModal} className="close_icon"><i className="flaticon-multiply" /></a>
            <div className="page">
                <h3 className="popup__tittle">{title}</h3>
                <div className="con">
                    <div className="promptinput__label">{messageLabel}</div>
                    <div className="promptinput__inputWrap">
                        <input type="password" className="promptinput__input" value={submitData} onChange={(e) => {
                            setSubmitData(e.currentTarget.value)
                        }} />
                        <button className="promptinput__btn btn small" onClick={() => {
                            callBack?.(submitData);
                            modalHook.closeModal()
                        }}>확인</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
};
