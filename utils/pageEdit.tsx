import { CSSProperties } from "react";
import $ from "jquery";
import { ISet } from "../types/interface";
import isEmpty from "./isEmpty";
import { IEditKit } from "../components/Img/img";
import { IEditableUlProp } from "../components/edit/Ul";
import { getRangeString } from "./product";
import { ImgResizeSizes, ResizeKeys } from "../types/const";
import { fileExtendDivider } from "./fileExtendDivider";
interface Style {
    style?: CSSProperties;
}
interface TInfoCell extends Style {
    [key: string]: any;
}
export type TWebPageInfo = {
    [key: string]: TInfoCell;
};

type TSizes = 200 | 500 | 1000 | 2000 | 3000 | 4000;

const Resizes: TSizes[] = [200, 500, 1000, 2000, 3000, 4000];

const keyDownUlManage = (e: any) => {
    const $this = $(e.currentTarget);
    if (!$this.html()) {
        const $li = $("<li></li>");

        const sel = window.getSelection()!;

        let range = sel.getRangeAt(0);

        range.collapse(false);
        range.insertNode($li.get(0));
        range = range.cloneRange();
        range.selectNodeContents($li.get(0));
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
    } else {
        //are there any tags that AREN'T LIs?
        //this should only occur on a paste
        const $nonLI = $this.find(":not(li, br)");

        if ($nonLI.length) {
            $this.contents().replaceWith(function () {
                //we create a fake div, add the text, then get the html in order to strip out html code. we then clean up a bit by replacing nbsp's with real spaces
                return (
                    "<li>" +
                    $("<div />")
                        .text($(this).text())
                        .html()
                        .replace(/&nbsp;/g, " ") +
                    "</li>"
                );
            });
            //we could make this better by putting the caret at the end of the last LI, or something similar
        }
    }
};

function remove_tags(html: string) {
    return html;
    // if(typeof window === undefined) return html;
    // var html = html.replace("<br>", "||br||");
    // var tmp = document.createElement("DIV");
    // tmp.innerHTML = html;
    // html = tmp.textContent || tmp.innerText;
    // return html.replace("||br||", "<br>");
}

export const stripInlineStyle = (str: string): string => {
    if (typeof str !== "string") {
        console.trace("...!");
        throw Error("");
    }
    const inlineStyleRegex = new RegExp(/style="[^\"]*"/gi);
    const replaced = str.replace(inlineStyleRegex, "");
    return replaced;
};

type TCommand = "bold";

export const effectDoc = (command: TCommand) => {
    document.execCommand(command);
};

export interface IGetEditUtilsResult<Page> {
    page: Page;
    setPage: React.Dispatch<any>;
    lang: string;
    edit: (key: keyof Page, index?: number, key2?: string) => any;
    ulEdit: (key: keyof Page, key2?: string) => IEditableUlProp;
    imgEdit: (key: keyof Page) => (url: string) => void;
    editArray: (key: keyof Page, index: number, value: any) => void;
    addArray: (key: keyof Page, value: any) => void;
    removeArray: (key: keyof Page, index: number) => void;
    unShiftArray: (key: keyof Page, value: any) => void;
    objectArrayUlEdit: (
        key: keyof Page,
        index: number,
        key2: string
    ) => IEditableUlProp;
    bg: (
        key: keyof Page
    ) =>
        | {
              backgroundImage: string;
          }
        | undefined;
    src: (
        key: keyof Page
    ) =>
        | {
              src: any;
              "data-imgkey": keyof Page;
              "data-img": string;
          }
        | undefined;
    get: (key: keyof Page) => any;
    imgKit: (key: keyof Page, hopeSize?: any) => IEditKit<Page>;
    arrayImgKit: (
        index: number,
        key: keyof Page,
        arrayOrigin: any
    ) => {
        src: {
            "data-edit": string;
            "data-img": string;
            "data-imgkey": string;
            src: any;
        };
        upload: (url: string) => void;
    };
}

export const getEditUtils = <T extends { [key: string]: any }>(
    editMode: boolean,
    page: T,
    setPage: ISet<any>,
    lang = "kr"
): IGetEditUtilsResult<T> => {
    class EditError extends Error {
        constructor(message: string) {
            // Pass remaining arguments (including vendor specific ones) to parent constructor
            super(message);

            // Maintains proper stack trace for where our error was thrown (only available on V8)
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, EditError);
            }

            this.name = "EditError";

            const retry = localStorage.getItem("ERR_RE_TRY");
            if (retry !== "T") {
                console.error("ERR");
                localStorage.setItem("ERR_RE_TRY", "T");
                // location.reload();
            } else {
                console.error("ERR");
                localStorage.removeItem("ERR_RE_TRY");
            }
        }
    }

    const validateKey = (key: string | keyof T, array?: number | true) => {
        const target = page[key];
        if (!target) throw Error(`키값 ${key}은 존재하지 않습니다.`);
        if (target.value === undefined)
            if (target[lang] === undefined)
                throw Error(
                    `언어 ${lang}은 ${key}에 없으며 value 또한 없습니다..`
                );

        if (array !== undefined) {
            if (!Array.isArray(target.value))
                if (!Array.isArray(target[lang]))
                    throw Error(`the ${key} object is not array!!`);
            // if (array !== true) {
            //     if (target.value[array] === undefined && target[lang][array] === undefined) throw Error(`the object key ${key} dose not  have index ${array}!!`)
            // }
        }
    };

    const onSingleBlur = (
        e: React.FocusEvent<HTMLElement>,
        key: string,
        index?: number,
        key2?: string
    ) => {
        const text = stripInlineStyle(e.currentTarget.innerHTML);
        validateKey(key, index);
        set(key, text, index, key2);
        setPage({ ...page });
    };

    const editable: "true" | undefined = editMode === true ? "true" : undefined;

    const singleBlur = onSingleBlur.bind(onSingleBlur);

    const set = (key: keyof T, value: any, index?: number, key2?: string) => {
        validateKey(key, index);

        if (value.include("__resized__")) {
            value = value.replace(/---[0-9]{3,4}/, "");
        }

        const setPageData = () => {
            const isArray = index !== undefined;
            const hasKey2 = !!key2;
            const target = page[key];
            const hasValue = target.value !== undefined;

            if (isArray && !hasKey2 && index !== undefined) {
                if (hasValue) {
                    target.value[index] = value;
                } else {
                    target[lang][index] = value;
                }
            }

            if (
                isArray &&
                hasKey2 &&
                index !== undefined &&
                key2 !== undefined
            ) {
                if (hasValue) {
                    target.value[index][key2] = value;
                } else {
                    target[lang][index][key2] = value;
                }
            }

            if (!isArray) {
                if (hasValue) {
                    target.value = value;
                } else {
                    target[lang] = value;
                }
            }
        };

        setPageData();
        setPage({ ...page });
    };

    const editArray = (
        key: keyof T,
        index: number,
        value: any,
        key2?: string
    ) => {
        validateKey(key, index);
        set(key, value, index, key2);
    };

    const addArray = (key: keyof T, value: any) => {
        validateKey(key, true);
        get(key).push(value);
        setPage({ ...page });
    };

    const unShiftArray = (key: keyof T, value: any) => {
        validateKey(key, true);
        get(key).unshift(value);
        setPage({ ...page });
    };

    const removeArray = (key: keyof T, index: number) => {
        validateKey(key, index);
        get(key).splice(index, 1);
        setPage({ ...page });
    };

    type Data = {
        dangerouslySetInnerHTML: {
            __html: T[keyof T];
        };
    };

    const data = (key: keyof T, index?: number, key2?: string) => {
        validateKey(key, index);
        const html = get(key, index, key2);
        return {
            dangerouslySetInnerHTML: {
                __html: stripInlineStyle(html),
            },
        };
    };

    const edit = (key: keyof T, index?: number, key2?: string): any => {
        const editObj = {
            onBlur: (e: any) => {
                if (typeof key === "string") singleBlur(e, key, index, key2);
            },
            contentEditable: editable ? "plaintext-only" : "ready",
            suppressContentEditableWarning: true,
            onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                if (editMode) e.preventDefault();
            },
            ...(data(key, index, key2) as Data),
        };

        return editObj;
    };

    // const ulEdit = (key: keyof T) => ({
    //     onKeyDown: keyDownUlManage,
    //     onKeyUp: keyDownUlManage,
    //     ...edit(key)
    // })
    const ulEdit = (key: keyof T): IEditableUlProp => {
        validateKey(key);
        const _addArray = addArray.bind(addArray, key);
        const _removeArray = removeArray.bind(removeArray, key);
        const editObj = {
            addArray: _addArray,
            editArray: (index: number, value: any) => {
                editArray(key, index, value);
            },
            editMode,
            removeArray: _removeArray,
            data: get(key) as string[],
            contentEditable: editable ? "plaintext-only" : "ready",
            id: key as string,
        };

        return {
            ...editObj,
        };
    };

    const objectArrayUlEdit = (key: keyof T, index: number, key2: string) => {
        const target = get(key, index, key2);

        const editObj = {
            addArray: (val: string) => {
                target.push(val);
                setPage({ ...page });
            },
            editArray: (index: number, value: any) => {
                target[index] = value;
                setPage({ ...page });
            },
            removeArray: (index) => {
                target.splice(index, 1);
                setPage({ ...page });
            },
            editMode,
            data: get(key, index, key2) as string[],
            contentEditable: editable ? "plaintext-only" : "ready",
            id: key as string,
        };

        return {
            ...editObj,
        };
    };

    const onImgUpload = (key: keyof T, url: string) => {
        validateKey(key);
        page[key][lang] = url;
        setPage({ ...page });
    };

    const imgEdit = (key: keyof T) => onImgUpload.bind(onImgUpload, key);

    const bg = (
        key: keyof T,
        hopeSize?: 200 | 500 | 1000 | 2000 | 3000 | 4000
    ) => {
        validateKey(key);
        const src = get(key);
        const resized = getResized(src, hopeSize);
        return {
            backgroundImage: `url(${resized})`,
            "data-edit": editable ? "bg" : "",
        };
    };

    const src = (
        key: keyof T,
        hopeSize?: 200 | 500 | 1000 | 2000 | 3000 | 4000
    ) => {
        validateKey(key);
        const src = get(key);
        const resized = getResized(src, hopeSize);
        return {
            "data-edit": editable ? "img" : "",
            src: resized,
            "data-imgkey": key,
            "data-img": "img",
        };
    };

    const imgKit = (
        key: string,
        hopeSize?: 200 | 500 | 1000 | 2000 | 3000 | 4000
    ): IEditKit<any> => {
        validateKey(key);
        const upload = imgEdit.bind(imgEdit, key)();
        const _bg = bg.bind(bg, key)(hopeSize);
        const _src = src.bind(src, key)(hopeSize);

        return {
            upload,
            bg: _bg,
            src: _src,
        };
    };

    const arrayImgKit = (index: number, key: keyof T, arrayOrigin: any) => {
        validateKey(key, index);
        const src = page[key][lang][index]["img"];
        if (!src) throw Error(`img proeprty not exsit ${key}`);
        return {
            src: {
                "data-edit": editable ? "img" : "",
                "data-img": "img",
                "data-imgkey": "partner",
                src: page[key][lang][index]["img"],
            },
            upload: (url: string) => {
                editArray("partners", index, { ...arrayOrigin, img: url });
            },
        };
    };

    const get = (key: keyof T, index?: number, key2?: string) => {
        validateKey(key, index);

        //인덱스가 있는지 검사하고 인데스를 리턴한다.
        const getIndex = (val: any) => {
            if (index !== undefined) {
                return val[index];
            } else {
                return val;
            }
        };
        const getSecondKey = (val: any) => {
            if (key2 !== undefined) {
                return val[key2];
            } else {
                return val;
            }
        };
        // value가 있는지 검사하고 value를 리턴한데
        const getLangCheck = (val: any) => {
            if (val.value !== undefined) {
                return val.value;
            } else {
                return val[lang];
            }
        };

        return getSecondKey(getIndex(getLangCheck(page[key])));
    };

    const linkEdit = (key: keyof T) => {
        validateKey(key);
        const link = get(key);

        return {
            link,
            editable: !!editable,
            editLink: (link: string) => {
                page[key][lang] = link;
            },
        };
    };

    // 에디터 모드이거나 값이 있으면 출력함
    const view = (key: keyof T) => editMode || get(key);

    arrayImgKit;
    return {
        get,
        page,
        setPage,
        lang,
        edit,
        ulEdit,
        imgEdit,
        editArray,
        addArray,
        unShiftArray,
        removeArray,
        arrayImgKit,
        objectArrayUlEdit,
        bg,
        src,
        imgKit: imgKit as any,
    };
};

export const getResized = (
    src: string,
    hopeSize?: 200 | 500 | 1000 | 2000 | 3000 | 4000
) => {
    let endFix;
    if (src.includes("__resized__")) {
        const windowSize =
            typeof window === "undefined" ? 0 : window.outerWidth;

        console.log({ windowSize });
        const validSizes = Resizes.filter((size) => windowSize * 3 < size);

        if (validSizes.length !== 0) {
            let targetSize = validSizes.find((size) => size === hopeSize);
            if (!targetSize) {
                targetSize = validSizes[0];
            }

            endFix = targetSize;
        }
    }
    const { extend, namePart } = fileExtendDivider(src);
    const endFixStr = endFix ? "---" + endFix : "";
    const ready = true;

    return namePart + (ready ? endFixStr : "") + "." + extend;
};
