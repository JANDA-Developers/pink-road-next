import React, { useState } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import ResizeObserver, { useResizeDetector } from 'react-resize-detector';


export interface IPopup {
    left: number;
    top: number;
    width: number;
    height: number;
    backgroundImage?: string;
    content?: string // html
}

export type Tpos = {
    x: number;
    y: number;
}

export type Tszie = {
    width: number;
    height: number;
}

interface IProp extends IPopup {
    onMove: (pos: Tpos) => void;
    onResize: (width: number, height: number) => void;
}

// 이동과 리사이즈만함, 비례 거리는  부모가 계산함
export const PopupBox: React.FC<IProp> = ({ height, left, onMove, onResize, top, width, backgroundImage, content }) => {
    const { ref } = useResizeDetector({ onResize });
    const handleDrag: DraggableEventHandler = (e, ui) => {
        onMove({ x: ui.x, y: ui.y })
    }

    return <Draggable defaultClassName="dragBox" handle=".dragBox__handle" position={{ x: left, y: top }} onStop={handleDrag} bounds="parent">
        <div ref={ref as any} style={{ border: "1px solid blue", left, top, width: width + "px", height: height + "px", resize: "both", overflow: "auto" }} className="box">
            <div className="dragBox__handle">나를당기시오</div>
        </div>
    </Draggable>
};
