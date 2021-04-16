<template>
  <div>
    <editor 
        :initialValue="editorText" 
        :options="editorOptions" 
        height="500px"
        initialEditType="wysiwyg"
        previewStyle="vertical"
    />
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import { Editor } from '@toast-ui/vue-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';

export default {
  components: {
    editor: Editor
  },


  data(){
    return {
        editorText: '족 테스트',
        editorOptions: {
            hideModeSwitch: true,
            plugins: [colorSyntax, tableMergedCell]
        }
    }
  },

  methods: {

  },
}
</script>

<style lang="scss">
.te-table-selection{background-repeat: none !important;}
</style>
