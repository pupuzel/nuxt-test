<template>
  <v-layout column> </v-layout>
</template>

<script>
export default {
  layout: 'layout_login',
  mounted() {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'KHtQ1qhApsGNyLx7_uKg'
    })
    naverLogin.init()
    naverLogin.getLoginStatus(function(status) {
      if (status) {
        const info = {
          id: naverLogin.user.id,
          age: naverLogin.user.age,
          gender: naverLogin.user.gender,
          nickname: naverLogin.user.nickname,
          profile_image: naverLogin.user.profile_image,
        }

        console.log(info)
      } else {
        console.log('AccessToken이 올바르지 않습니다.') 
      }

      //that.$router.push({ name: 'login' })
    })
  }
}
</script>