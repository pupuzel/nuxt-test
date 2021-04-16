<template>
    <div>
       <ckeditor :editor="editor" :value="editorData"/>
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
                    // The configuration of the editor.
                }
            };
        }
    }
</script>

