<template>
  <v-app dark>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  head: {
    script: [
      { src: 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js' },
      { src: 'https://developers.kakao.com/sdk/js/kakao.min.js' }
    ]
  },
  data () {
    return {

    }
  }
}
</script>
