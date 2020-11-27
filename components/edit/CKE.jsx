import Head from "next/head";
import { useEffect } from "react";


const RENDER = () => {
  if(!window.ClassicEditor) {
    setTimeout(RENDER,200)
    return
  }
  ClassicEditor
  .create( document.querySelector( '#editor' ), {
    
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
        'redo'
      ]
    },
    language: 'ko',
    image: {
      toolbar: [
        'imageTextAlternative',
        'imageStyle:full',
        'imageStyle:side',
        'linkImage'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        'tableCellProperties'
      ]
    },
    licenseKey: '',
    
  } )
  .then( editor => {
    // @ts-ignore
    window.editor = editor;
  } )
  .catch( error => {
    console.error( 'Oops, something went wrong!' );
    console.error( 'Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:' );
    console.warn( 'Build id: ke2d316hebru-8o65j7c6blw0' );
    console.error( error );
  } );
}
const MJJJ = () => {

  useEffect(()=>{
    RENDER();
  },[])

  return <div>
    <Head>
      <script src="/build/ckeditor.js"></script>
    </Head>
    <div id="editor">

    </div>
    </div>
}
export default MJJJ;