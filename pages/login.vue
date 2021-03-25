<template>
  <div>
    <a @click="loginWithNaver">
      <img src="https://static.nid.naver.com/oauth/big_g.PNG" width="222">
    </a>

    <a @click="loginWithKakao">
      <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222"/>
    </a>
  </div>
</template>

<script>
export default {
  layout: 'layout_login',
  mounted() {

  },

  data(){
    return {
 
    }
  },

  computed: {

  },

  methods: {
    loginWithKakao() {
      Kakao.init('2cb8c9ef012ae465cdbfbf9a91d2d58f')
      Kakao.Auth.authorize({
        redirectUri: `${window.location.origin}/auth/callback/kakao`
      })
    },

    loginWithNaver() {
      const naverLogin = new naver.LoginWithNaverId({
        clientId: 'KHtQ1qhApsGNyLx7_uKg',
        callbackUrl: `${window.location.origin}/auth/callback/naver`,
        callbackHandle: true
      })
      naverLogin.init()
      naverLogin.reprompt()
    }
  },
}
</script>