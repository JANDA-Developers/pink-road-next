import classNames from "classnames";
import React from "react";
import ReactDOM from "react-dom";
import { IUseModal } from "../../hook/useModal";
import { IDiv, TElements } from "../../types/interface";
import { closeModal } from "../../utils/popUp";

interface IProp extends IDiv {
    id: string;
    title: string;
    inClassName?: string;
}

export const Modal: React.FC<IProp> = ({
    id,
    className,
    inClassName,
    children,
    title,
    ...props
}) => {
    return (
        <div
            className={className || `popup_bg_mini`}
            style={{
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                position: "fixed",
                display: "none",
                justifyContent: "center",
                alignItems: "center",
            }}
            id={id}
            {...props}
        >
            <div className={`in_txt ${inClassName}`}>
                <div className="page">
                    <h3 className="popup__tittle">{title}</h3>
                    <a
                        onClick={closeModal(`#${id}`)}
                        className="close_icon mini"
                    >
                        <i className="flaticon-multiply" />
                    </a>
                    <div className="con mini">{children}</div>
                </div>
            </div>
        </div>
    );
};

interface IModalReNewProp extends IUseModal, IDiv {
    title?: string;
    inClassName?: string;
    UpCon?: TElements;
}

export const Modal2: React.FC<IModalReNewProp> = ({
    openModal,
    closeModal,
    inClassName,
    isOpen,
    className,
    UpCon,
    title,
    children,
    ...props
}) => {
    if (typeof window === "undefined") return null;
    const el = document.getElementById("portal");
    if (!el) return null;

    return ReactDOM.createPortal(
        <div
            className={className || `popup_bg_mini`}
            style={{
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                position: "fixed",
                display: isOpen ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
            }}
            {...props}
        >
            <div className={`in_txt ${inClassName}`}>
                {title && <h3 className="popup__tittle">{title}</h3>}
                <a onClick={closeModal} className="close_icon">
                    <i className="flaticon-multiply" />
                </a>
                <div className="page">
                    {UpCon}
                    <div className="con">{children}</div>
                </div>
            </div>
        </div>,
        el
    );
};
