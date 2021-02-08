
import Embed from "node_modules/@editorjs/embed";
import Table from "node_modules/@editorjs/table";
import List from "node_modules/@editorjs/list";
import LinkTool from "node_modules/@editorjs/link";
import Image from "node_modules/@editorjs/image";
import Raw from "node_modules/@editorjs/raw";
import Header from "node_modules/@editorjs/header";
// import Quote from "@editorjs/quote";
import Marker from "node_modules/@editorjs/marker";
// import CheckList from "@editorjs/checklist";
import Delimiter from "node_modules/@editorjs/delimiter";
import InlineCode from "node_modules/@editorjs/inline-code";
import SimpleImage from "node_modules/@editorjs/simple-image";
const uploadUrl = 'http://ec2-54-180-32-135.ap-northeast-2.compute.amazonaws.com:3000/upload';

const fileAction = uploadUrl;
const fetchAction = ""

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  // warning: Warning,
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
  // quote: Quote,
  // checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
};

export default EDITOR_JS_TOOLS;

