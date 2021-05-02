import React, { useRef } from "react";
import { IDiv } from "../../types/interface";
import { getResized } from "../../utils/pageEdit";
import { Upload } from "../common/Upload";

export interface IEditKit<Page = any> {
    upload: (url: string) => void;
    bg?:
        | {
              backgroundImage: string;
          }
        | undefined;
    src?:
        | {
              src: any;
              "data-imgkey": keyof Page;
              "data-img": string;
          }
        | undefined;
}

type Ttag = "div" | "li";

interface IHtmlTag {
    tag?: Ttag;
    [key: string]: any;
}

//태그를 리턴해주는 것
export const HtmlTag: React.FC<IHtmlTag> = ({ tag = "div", ...props }) => {
    if (tag === "div") return <div {...props} />;
    if (tag === "li") return <li {...props} />;
    return <div {...props} />;
};

interface IProp extends IDiv, IEditKit {
    tag?: Ttag;
    hopeSize?: 200 | 500 | 1000 | 2000 | 3000 | 4000;
    editMode?: boolean;
}

export const Img: React.FC<IProp> = ({ children, upload, src }) => {
    const { src: _src, ...imgpp } = src || {};

    return (
        <div {...imgpp}>
            <img src={_src} />
            <Upload onUpload={upload} />
        </div>
    );
};

export const Bg: React.FC<IProp> = ({
    tag,
    children,
    hopeSize,
    bg,
    upload,
    editMode,
    ...props
}) => {
    const { backgroundImage, ...bgpp } = bg || {};
    return (
        <HtmlTag
            tag={tag}
            {...bgpp}
            style={{
                backgroundImage: bg?.backgroundImage,
                hopeSize,
            }}
            {...props}
        >
            {children}
            <Upload
                className={editMode ? "imgEdit--editMode" : ""}
                onUpload={upload}
            />
        </HtmlTag>
    );
};
