<template>
  <div>
    <div id="naverIdLogin"></div>
  </div>
</template>

<script>
export default {
  layout: 'nolayout',
  head: {
    script: [
      { src: 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js' }
    ]
  },
  mounted() {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'KHtQ1qhApsGNyLx7_uKg',
      callbackUrl: `${window.location.origin}/auth/callback/naver`,
      isPopup: false,
      loginButton: {
        color: 'green',
        type: 3,
        height: 60
      }
    })

    naverLogin.init()

    naverLogin.getLoginStatus(function(status) {
      if (status) {
        console.log(naverLogin)
      } else {
        console.log('AccessToken이 올바르지 않습니다.')
      }

      //that.$router.push({ name: 'login' })
    })
  },

  data(){
    return {
 
    }
  },

  computed: {

  },

  methods: {

  },
}
</script>
