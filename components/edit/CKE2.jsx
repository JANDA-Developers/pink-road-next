import React, { Component } from 'react';
import Editor from 'pinkloader-ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'


function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new UploadAdapter(loader)
    }
  }

const editorConfiguration = {
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
            'alignment',
            'fontColor',
            'fontSize',
            'fontFamily',
            'highlight',
            'horizontalLine',
            'specialCharacters',
            'imageInsert',
            'underline',
            'strikethrough'
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
            'mergeTableCells',
            'tableProperties'
        ]
    },
    licenseKey: '',
  } 


  const CKEDITOR = ({data,onChange}) => {
      return (
          <div className="myckeditor">
              <CKEditor
                  editor={ Editor }
                  config={ editorConfiguration }
                  data={data}
                  onReady={ editor => {
                      // You can store the "editor" and use when it is needed.
                      console.log( 'Editor is ready to use!', editor );
                  } }
                  onChange={ ( event, editor ) => {
                      const data = editor.getData();
                      onChange(data);
                      console.log(data);
                  } }
                  onBlur={ ( event, editor ) => {
                      console.log( 'Blur.', editor );
                  } }
                  onFocus={ ( event, editor ) => {
                      console.log( 'Focus.', editor );
                  } }
              />
          </div>
      );

  }


export default CKEDITOR;