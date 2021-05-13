import React, { useRef, useState } from "react";
import { IDiv } from "../../types/interface";

interface IProp extends IDiv {
    defaultPos: {
        x: number;
        y: number;
    };
    Handler: (
        hanldeMouseDown: (
            e: React.MouseEvent<HTMLDivElement, MouseEvent>
        ) => void
    ) => JSX.Element;
}

export const Draggable: React.FC<IProp> = ({
    Handler,
    defaultPos,
    children,
    style: _style,
    ...props
}) => {
    const [pos, setPos] = useState(defaultPos);
    const [anchor, setAchor] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });

    function hanldeMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        // @ts-ignore
        e = e || window.event;
        e.preventDefault();
        setAchor({
            x: pos.x - e.clientX,
            y: pos.y - e.clientY,
        });
        console.log("mouseDownAttached");
        document.onmouseup = closeDragElement;
        document.onmousemove = hanldeMouseMove;
    }

    function hanldeMouseMove(e) {
        e = e || window.event;
        e.preventDefault();

        setPos({
            x: e.clientX + anchor.x,
            y: e.clientY + anchor.y,
        });
    }

    const style: React.CSSProperties = {
        ..._style,
        left: pos.x,
        top: pos.y,
    };

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    return (
        <div style={style} {...props}>
            {Handler(hanldeMouseDown)}
            {children}
        </div>
    );
};
