import Head from "next/head";
import { useEffect } from "react";

export const getEditorData = (globalKey) => {
  if(window[globalKey])
    return window[globalKey].getData()
  else return ""
}

export const destroyEditor = (globalKey) => {
  if(window[globalKey]?.destroy)
     window[globalKey].destroy()
}

class UploadAdapter {
  constructor(loader) {
      this.loader = loader;
  }

  upload() {
      return this.loader.file.then( file => new Promise(((resolve, reject) => {
          this._initRequest();
          this._initListeners( resolve, reject, file );
          this._sendRequest( file );
      })))
  }

  _initRequest() {
      const xhr = this.xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://3.35.164.252:4000/upload_ckEditor', true);
      xhr.responseType = 'json';
  }

  _initListeners(resolve, reject, file) {
      const xhr = this.xhr;
      const loader = this.loader;
      const genericErrorText = '파일을 업로드 할 수 없습니다.'

      xhr.addEventListener('error', () => {reject(genericErrorText)})
      xhr.addEventListener('abort', () => reject())
      xhr.addEventListener('load', () => {
          const response = xhr.response
          if(!response || response.error) {
              return reject( response && response.error ? response.error.message : genericErrorText );
          }

          resolve({
              default: response.url //업로드된 파일 주소
          })
      })
  }

  _sendRequest(file) {
      const data = new FormData()
      console.log("file");
      console.log(file);
      data.append('upload',file)
      this.xhr.send(data)
  }
}

function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new UploadAdapter(loader)
  }
}

const RENDER = (globalKey,defaultData) => {
  if(window.globalKey) return;
  if(window.defaultData) return;
  if(!window.ClassicEditor) {
    setTimeout(()=>{RENDER(globalKey,defaultData)},200)
    return
  }
  ClassicEditor
  .create( document.querySelector( `#${globalKey}` ), {
    extraPlugins: [MyCustomUploadAdapterPlugin],
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'indent',
        'outdent',
        '|',
        'imageUpload',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'undo',
        'redo',
        'fontBackgroundColor',
        'fontColor',
        'fontSize'
      ]
    },
    language: 'ko',
    image: {
      toolbar: [
        'imageTextAlternative',
        'imageStyle:full',
        'imageStyle:side'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells'
      ]
    },
    licenseKey: '',
  } )
  .then( editor => {
    window[globalKey] = editor;
    editor.setData(defaultData || "")
  })
  .catch( error => {
    console.error( 'Oops, something went wrong!' );
    console.error( 'Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:' );
    console.warn( 'Build id: ke2d316hebru-8o65j7c6blw0' );
    console.error( error );
  } );
}


const MJJJ = ({globalKey,defaultData}) => {



  useEffect(()=>{
    RENDER(globalKey,defaultData);
    return () => {
      destroyEditor(globalKey);
    }
  },[defaultData]);

  return  <div id={globalKey}>

    </div>
}
export default MJJJ;