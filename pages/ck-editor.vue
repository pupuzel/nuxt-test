<template>
    <div>
        <ckeditor :editor="editor" :value="editorData" :config="editorConfig"/>
    </div>
</template>

<script>
let CKEditor
let CustomBuild

if (process.client) {
  CustomBuild = require('~/modules/ckeditor5-build-custom/build/ckeditor')
  CKEditor = require('@ckeditor/ckeditor5-vue2')
} else {
  CKEditor = { component: { template: '<div></div>' } }
}

export default {
    created(){

    },
    components: {
        ckeditor: CKEditor.component
    },
    data() {
        return {
            editor: CustomBuild,
            editorData: '<p>Content of the editor.</p>',
            editorConfig: {
                    toolbar: {
                        items: [
                            'heading',
                            '|',
                            'fontColor',
                            'fontBackgroundColor',
                            'bold',
                            'italic',
                            'link',
                            'bulletedList',
                            'numberedList',
                            '|',
                            'outdent',
                            'indent',
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
            }
        };
    }
}
</script>

