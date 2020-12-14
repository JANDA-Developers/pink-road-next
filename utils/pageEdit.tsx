import React from "react";
import $ from "jquery"
import { ISet, TStieInfo } from "types/interface";

const keyDownUlManage = (e: any,) => {
    var $this = $(e.currentTarget);
    if (!$this.html()) {
        var $li = $('<li></li>');

        var sel = window.getSelection()!;

        var range = sel.getRangeAt(0);

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
        var $nonLI = $this.find(':not(li, br)');

        if ($nonLI.length) {
            $this.contents().replaceWith(function () {
                //we create a fake div, add the text, then get the html in order to strip out html code. we then clean up a bit by replacing nbsp's with real spaces
                return '<li>' + $('<div />').text($(this).text()).html().replace(/&nbsp;/g, ' ') + '</li>';
            });
            //we could make this better by putting the caret at the end of the last LI, or something similar
        }
    }
}



export const onSingleBlur = (data: TStieInfo, set: ISet<TStieInfo>, e: React.FocusEvent<HTMLElement>, key: string) => {
    const text = e.currentTarget.innerHTML;
    console.log("text");
    console.log(text);
    if (!key) throw Error("this Element dose not have name property")
    if (data[key] === undefined) throw Error(`the key ${key} dose not exisit on data`);
    if (data[key]["kr"] === undefined) throw Error(`the key ${key} ${"kr"} dose not exisit on data`);

    data[key]["kr"] = text || "";
    set({ ...data })
}

type TCommand = "bold"

export const effectDoc = (command: TCommand) => {
    document.execCommand(command)
}

export const editUl = (e: React.KeyboardEvent<HTMLUListElement>) => {

}


export const getEditUtils = <T extends { [key: string]: any }>(editMode: boolean, page: T, setPage: ISet<any>) => {
    const lang = "kr";
    const editable: "true" | undefined = editMode === true ? "true" : undefined;

    const singleBlur = onSingleBlur.bind(onSingleBlur, page, setPage);

    const editArray = (key: keyof T, index: number, value: any) => {
        if (!page[key]['kr']) throw Error("this Element dose not have name property")
        if (Array.isArray(!page[key]['kr'])) throw Error(`the ${key} object is not array!!`)
        if (!page[key]['kr'][index]) throw Error(`the object key ${key} dose not  have index ${index}!!`)
        page[key]['kr'][index] = value
        // @ts-ignore
        setPage({ ...page });
    }

    const addArray = (key: keyof T, value: any) => {
        if (!page[key]['kr']) throw Error("this Element dose not have name property")
        if (!Array.isArray(page[key]['kr'])) throw Error(`the ${key} object is not array!!`)
        const target = page[key]['kr'];
        // @ts-ignore
        target[target.length] = value;
        // @ts-ignore
        setPage({ ...page });
    }

    const removeArray = (key: keyof T, index: number) => {
        if (!page[key]) throw Error("this Element dose not have name property")
        if (!Array.isArray(page[key]['kr'])) throw Error(`the ${key} object is not array!!`)
        if (page[key]['kr'][index] === undefined) throw Error(`the object key ${key} dose not  have index ${index}!!`)
        page[key]['kr'].splice(index, 1)
        // @ts-ignore
        setPage({ ...page });
    }

    type Data = {
        dangerouslySetInnerHTML: {
            __html: T[keyof T];
        };
    }

    const data = (key: keyof T) => {
        return {
            dangerouslySetInnerHTML: {
                __html: page[key]["kr"]
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
        if (!page[key]) throw Error(`there is no key ${key} in page`)
        //TODO
        //값이 스트링값이 아니라면 style 
        // @ts-ignore
        page[key]["kr"] = url
        setPage({ ...page })
    }

    const imgEdit = (key: keyof T) => onImgUpload.bind(onImgUpload, key);

    const bg = (key: keyof T) => ({ backgroundImage: `url(${page[key]["kr"]})` })


    return { edit, ulEdit, imgEdit, editArray, addArray, removeArray, bg }
}
