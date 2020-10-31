// @ts-ignore
import Embed from '@editorjs/embed'
// @ts-ignore
import Table from '@editorjs/table'
// @ts-ignore
import Paragraph from '@editorjs/paragraph'
// @ts-ignore
import List from '@editorjs/list'
// @ts-ignore
import Warning from '@editorjs/warning'
// @ts-ignore
import Code from '@editorjs/code'
// @ts-ignore
import LinkTool from '@editorjs/link'
// @ts-ignore
import Image from '@editorjs/image'
// @ts-ignore
import Raw from '@editorjs/raw'
// @ts-ignore
import Header from '@editorjs/header'
// @ts-ignore
import Quote from '@editorjs/quote'
// @ts-ignore
import Marker from '@editorjs/marker'
// @ts-ignore
import CheckList from '@editorjs/checklist'
// @ts-ignore
import Delimiter from '@editorjs/delimiter'
// @ts-ignore
import InlineCode from '@editorjs/inline-code'
// @ts-ignore
import SimpleImage from '@editorjs/simple-image'


const uploadUrl = 'https://kbsjl5pnsi.execute-api.ap-northeast-2.amazonaws.com/dev/upload';

const fileAction = uploadUrl;
const fetchAction = ""

/// TODO file
export const EDITOR_JS_TOOLS = {
    embed: Embed,
    table: Table,
    paragraph: Paragraph,
    list: List,
    warning: Warning,
    code: Code,
    linkTool: LinkTool,
    image: {
        class: Image,
        config: {
            endpoints: {
                byFile: fileAction, // Your backend file uploader endpoint
                byUrl: fetchAction, // Your endpoint that provides uploading by Url
            }
        }
    },
    raw: Raw,
    header: Header,
    quote: Quote,
    marker: Marker,
    checklist: CheckList,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    simpleImage: SimpleImage
}

// attaches: file ?  {
//     class: AttachesTool,
//     config: {
//         endpoint: file.fileAction
//     }
// } : undefined,