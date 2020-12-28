import { CSSProperties } from "react";
import $ from "jquery"
import { ISet } from "../types/interface";
import { IEditKit } from "../components/Img/Img";

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



export const onSingleBlur = (data: TWebPageInfo, set: ISet<TWebPageInfo>, lang: string, e: React.FocusEvent<HTMLElement>, key: string) => {
    const text = e.currentTarget.innerHTML;
    if (!key) throw Error("this Element dose not have name property")
    if (data[key] === undefined) throw Error(`the key ${key} dose not exisit on data`);
    if (data[key][lang] === undefined) throw Error(`the key ${key} ${lang} dose not exisit on data`);

    //TODO 이게 올바른 값인지 확인해야함
    data[key][lang] = text || "";
    set({ ...data })
}

type TCommand = "bold"

export const effectDoc = (command: TCommand) => {
    document.execCommand(command)
}


export interface IGetEditUtilsResult<Page> {
    page: Page;
    setPage: React.Dispatch<any>;
    lang: string;
    edit: (key: keyof Page) => any;
    ulEdit: (key: keyof Page) => any;
    imgEdit: (key: keyof Page) => (url: string) => void;
    editArray: (key: keyof Page, index: number, value: any) => void;
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
    editKit: (key: string) => IEditKit
}


export const getEditUtils = <T extends { [key: string]: any }>(editMode: boolean, page: T, setPage: ISet<any>, lang = "kr") => {
    const validateKey = (key: string | keyof T, array?: number | true) => {
        if (!page[key]) throw Error(`키값 ${key}은 존재하지 않습니다.`);
        if (page[key][lang] === undefined) throw Error(`언어 ${lang}은 ${key}에 존재하지 않습니다.`);

        if (array !== undefined) {
            if (!Array.isArray(page[key][lang])) throw Error(`the ${key} object is not array!!`);
            if (array !== true)
                if (!page[key][lang][array]) throw Error(`the object key ${key} dose not  have index ${array}!!`)
        }
    }

    const editable: "true" | undefined = editMode === true ? "true" : undefined;

    const singleBlur = onSingleBlur.bind(onSingleBlur, page, setPage, lang);

    const editArray = (key: keyof T, index: number, value: any) => {
        validateKey(key, index)
        page[key][lang][index] = value
        // @ts-ignore
        setPage({ ...page });
    }

    const addArray = (key: keyof T, value: any) => {
        validateKey(key, true)
        const target = page[key][lang];
        target[target.length] = value;
        setPage({ ...page });
    }

    const removeArray = (key: keyof T, index: number) => {
        validateKey(key, index)
        page[key][lang].splice(index, 1)
        setPage({ ...page });
    }

    type Data = {
        dangerouslySetInnerHTML: {
            __html: T[keyof T];
        };
    }

    const data = (key: keyof T) => {
        validateKey(key)
        return {
            dangerouslySetInnerHTML: {
                __html: page[key][lang]
            }
        }
    }

    const edit = (key: keyof T): any => ({
        onBlur: (e: any) => {
            if (typeof key === "string")
                singleBlur(e, key)
        },
        contentEditable: editable,
        suppressContentEditableWarning: true,
        onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { e.preventDefault(); },
        ...data(key) as Data
    })

    const ulEdit = (key: keyof T) => ({
        onKeyDown: keyDownUlManage,
        onKeyUp: keyDownUlManage,
        ...edit(key)
    })

    const onImgUpload = (key: keyof T, url: string) => {
        validateKey(key)
        page[key][lang] = url
        setPage({ ...page })
    }

    const imgEdit = (key: keyof T) => onImgUpload.bind(onImgUpload, key);
    const bg = (key: keyof T) => {
        validateKey(key)
        return ({ backgroundImage: `url(${page[key][lang]})`, "data-edit": editable ? "bg" : "" })
    }
    const src = (key: keyof T) => {
        validateKey(key)
        return ({ src: page[key][lang], "data-imgkey": key, "data-img": "img" })
    }

    const editKit = (key: string) => {
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


    return {
        page,
        setPage, lang, edit, ulEdit, imgEdit, editArray, addArray, removeArray, bg, src, editKit
    }
}
