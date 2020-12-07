import React from 'react';
import { IDiv } from '../../types/interface';
import { closeModal } from '../../utils/popUp';

interface IProp extends IDiv {
    id: string;
    title: string;
}

export const Modal: React.FC<IProp> = ({ id, children, title, ...props }) => {
    return <div className="modal" style={{
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        position: "fixed",
        display: "none",
        justifyContent: "center",
        alignItems: "center"
    }} id={id}>
        <div className="popup_bg_mini"  {...props}>
            <a onClick={closeModal(`#${id}`)} className="close_icon"><i className="flaticon-multiply" /></a>
            <div className="in_txt">
                <h3>{title}</h3>
                <div className="con">
                    {children}
                </div>
            </div>
        </div>
        <div style={{
            display: "block"
        }} className="fade" />
    </div>
};
