<template>
  <v-layout column> </v-layout>
</template>

<script>
export default {
  layout: 'layout_login',
  mounted() {
    const _this = this
    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'KHtQ1qhApsGNyLx7_uKg'
    })
    naverLogin.init()
    naverLogin.getLoginStatus(function(status) {
      if (status) {
        const info = {
          id: naverLogin.user.id,
          access_token: naverLogin.accessToken.accessToken,
          auth_type: 'naver',
          age: naverLogin.user.age,
          gender: naverLogin.user.gender,
          nick_name: naverLogin.user.nickname,
          profile_image: naverLogin.user.profile_image,
        }

        console.log(info)
        
        _this.setSession(info)
      } else {
        console.log('AccessToken이 올바르지 않습니다.') 
      }

      //that.$router.push({ name: 'login' })
    })
  },

  methods: {
    setSession(info){
        const authenticate = this.$axios.post('http://127.0.0.1:7000/authenticate/login', info)
        authenticate.then(function(res){
          if(res.data.result === 'Y'){
            window.location.replace('/')
          }else{
            console.log(res.data.message)
          }
        })
    }
  }
}
</script>