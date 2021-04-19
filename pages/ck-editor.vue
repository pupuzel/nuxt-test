<template>
    <div>
       <ckeditor :editor="editor" :value="editorData" :config="editorConfig"/>
    </div>
</template>

<script>
    import CKEditor from '@ckeditor/ckeditor5-vue2'
    import CustomBuild from '~/modules/ckeditor5-build-custom/build/ckeditor'
    
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

