import { CSSProperties } from "react";
import $ from "jquery"
import { ISet } from "../types/interface";
import isEmpty from "./isEmpty";
import sanitizeHtml from 'sanitize-html';
import { IEditKit } from "../components/Img/Img";
import { ILinkEditProps } from "../components/A/A";

interface Style {
    style?: CSSProperties,
}
interface TInfoCell extends Style {
    [key: string]: any
}
export type TWebPageInfo = {
    [key: string]: TInfoCell
}

const keyDownUlManage = (e: any,) => {
    const $this = $(e.currentTarget);
    if (!$this.html()) {
        const $li = $('<li></li>');

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
        const $nonLI = $this.find(':not(li, br)');

        if ($nonLI.length) {
            $this.contents().replaceWith(function () {
                //we create a fake div, add the text, then get the html in order to strip out html code. we then clean up a bit by replacing nbsp's with real spaces
                return '<li>' + $('<div />').text($(this).text()).html().replace(/&nbsp;/g, ' ') + '</li>';
            });
            //we could make this better by putting the caret at the end of the last LI, or something similar
        }
    }
}




type TCommand = "bold"

export const effectDoc = (command: TCommand) => {
    document.execCommand(command)
}


export interface IGetEditUtilsResult<Page> {
    page: Page;
    setPage: React.Dispatch<any>;
    lang: string;
    set: (key: keyof Page, value: any, index?: number, key2?: string) => void
    edit: (key: keyof Page, index?: number) => any;
    ulEdit: (key: keyof Page) => any;
    imgEdit: (key: keyof Page) => (url: string) => void;
    linkEdit: (key: keyof Page) => ILinkEditProps
    editArray: (key: keyof Page, index: number, value: any, key2?: string) => void;
    addArray: (key: keyof Page, value: any) => void;
    removeArray: (key: keyof Page, index: number) => void
    bg: (key: keyof Page) => {
        backgroundImage: string;
    } | undefined;
    src: (key: keyof Page) => {
        src: any;
        "data-imgkey": keyof Page;
        "data-img": string;
    } | undefined;
    get: (key: keyof Page) => any;
    imgKit: (key: keyof Page) => IEditKit<Page>;
    arrayImgKit: (index: number, key: keyof Page, arrayOrigin: any) => {
        src: {
            "data-edit": string;
            "data-img": string;
            "data-imgkey": string;
            src: any;
        };
        upload: (url: string) => void;
    }
}


export const getEditUtils = <T extends { [key: string]: any }>(editMode: boolean, page: T, setPage: ISet<any>, lang = "kr"): IGetEditUtilsResult<T> => {

    class EditError extends Error {
        constructor(message: string) {
            // Pass remaining arguments (including vendor specific ones) to parent constructor
            super(message)

            // Maintains proper stack trace for where our error was thrown (only available on V8)
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, EditError)
            }

            this.name = 'EditError'
            if (isEmpty(page)) {
                // location.reload();
            }
            const retry = localStorage.getItem("ERR_RE_TRY");
            if (retry !== "T") {
                console.error("ERR")
                localStorage.setItem("ERR_RE_TRY", "T");
                // location.reload();
            } else {
                console.error("ERR")
                localStorage.removeItem("ERR_RE_TRY");
            }
        }
    }

    const validateKey = (key: string | keyof T, array?: number | true) => {
        const target = page[key];
        if (!target) throw Error(`키값 ${key}은 존재하지 않습니다.`);
        if (target.value === undefined)
            if (target[lang] === undefined) throw Error(`언어 ${lang}은 ${key}에 없으며 value 또한 없습니다..`);

        if (array !== undefined) {
            if (!Array.isArray(target.value))
                if (!Array.isArray(target[lang])) throw Error(`the ${key} object is not array!!`);
            // if (array !== true) {
            //     if (target.value[array] === undefined && target[lang][array] === undefined) throw Error(`the object key ${key} dose not  have index ${array}!!`)
            // }
        }
    }


    const onSingleBlur = (e: React.FocusEvent<HTMLElement>, key: string, index?: number) => {
        const text = e.currentTarget.innerHTML;
        validateKey(key, index)

        set(key, text || "", index)
    }

    const editable: "true" | undefined = editMode === true ? "true" : undefined;

    const singleBlur = onSingleBlur.bind(onSingleBlur);

    const editArray = (key: keyof T, index: number, value: any, key2?: string) => {
        validateKey(key, index)
        set(key, value, index, key2)
    }

    const addArray = (key: keyof T, value: any) => {
        validateKey(key, true)
        get(key).push(value);
        setPage({ ...page });
    }

    const removeArray = (key: keyof T, index: number) => {
        validateKey(key, index)
        get(key).splice(index, 1)
        setPage({ ...page });
    }

    type Data = {
        dangerouslySetInnerHTML: {
            __html: T[keyof T];
        };
    }

    const data = (key: keyof T, index?: number) => {
        validateKey(key, index);
        const html = index === undefined ? get(key) : get(key)[index];
        return {
            dangerouslySetInnerHTML: {
                __html: sanitizeHtml(html)
            }
        }
    }

    const edit = (key: keyof T, index?: number): any => {

        const editObj = {
            onBlur: (e: any) => {
                if (typeof key === "string")
                    singleBlur(e, key, index)
            },
            contentEditable: editable ? "plaintext-only" : undefined,
            suppressContentEditableWarning: true,
            onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                if (editMode)
                    e.preventDefault();
            },
            ...data(key, index) as Data
        }

        return editObj

    }

    const ulEdit = (key: keyof T) => ({
        onKeyDown: keyDownUlManage,
        onKeyUp: keyDownUlManage,
        ...edit(key)
    })

    const onImgUpload = (key: keyof T, url: string) => {
        validateKey(key)
        set(key, url)
    }

    const imgEdit = (key: keyof T) => onImgUpload.bind(onImgUpload, key);
    const bg = (key: keyof T) => {
        validateKey(key)
        return ({ backgroundImage: `url(${get(key)})`, "data-edit": editable ? "bg" : "" })
    }

    const src = (key: keyof T) => {
        validateKey(key)
        return ({ "data-edit": editable ? "img" : "", src: get(key), "data-imgkey": key, "data-img": "img" })
    }

    const imgKit = (key: string): IEditKit<any> => {
        validateKey(key)
        const upload = imgEdit.bind(imgEdit, key)();
        const _bg = bg.bind(bg, key)();
        const _src = src.bind(src, key)();

        return {
            upload,
            bg: _bg,
            src: _src
        }
    }

    const arrayImgKit = (index: number, key: keyof T, arrayOrigin: any) => {
        validateKey(key, index);
        const src = page[key][lang][index]["img"];
        if (!src) throw Error(`img proeprty not exsit ${key}`);
        return {
            src: {
                "data-edit": editable ? "img" : "",
                "data-img": "img",
                "data-imgkey": "partner",
                src: page[key][lang][index]["img"]
            },
            upload: (url: string) => {
                editArray("partners", index, { ...arrayOrigin, img: url })
            },
        }
    }

    const set = (key: keyof T, value: any, index?: number, key2?: string) => {
        validateKey(key, index)


        const setPageData = () => {
            const isArray = index !== undefined
            const hasKey2 = !!key2;
            const target = page[key];
            const hasValue = target.value !== undefined;

            if (isArray && !hasKey2) {
                if (hasValue) {
                    target.value[index] = value;
                } else {
                    target[lang][index] = value;
                }
            }

            if (isArray && hasKey2) {
                if (hasValue) {
                    target.value[index][key2] = value;
                } else {
                    target[lang][index][key2] = value;
                }
            }

            if (!isArray) {
                if (hasValue) {
                    target.value = value
                } else {
                    target[lang] = value;
                }
            }
        }

        setPageData();
        setPage({ ...page })

    }

    const get = (key: keyof T, index?: number) => {
        validateKey(key)

        if (index !== undefined) {
            if (page[key].value) {
                return page[key].value[index]
            } else {
                return page[key][lang][index];
            }
        }

        if (page[key].value) {
            return page[key].value
        } else {
            return page[key][lang];
        }
    }

    const linkEdit = (key: keyof T) => {
        validateKey(key);
        const link = get(key);

        return {
            link,
            editable: !!editable,
            editLink: (link: string) => {
                set(key, link)
            }
        }
    }

    // 에디터 모드이거나 값이 있으면 출력함
    const view = (key: keyof T) => editMode || get(key)

    return {
        get,
        set,
        page,
        setPage,
        lang,
        edit,
        ulEdit,
        imgEdit,
        editArray,
        addArray,
        linkEdit,
        removeArray,
        arrayImgKit,
        bg,
        src,
        imgKit: imgKit as any,
    }
}
