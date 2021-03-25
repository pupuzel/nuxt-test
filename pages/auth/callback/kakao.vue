<template>
  <v-layout column> </v-layout>
</template>

<script>
export default {
  layout: 'layout_login',
    async asyncData({ $axios, query, store }){

      const config = {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            'Authorization': 'Bearer '
          }
      };
      const param = {
          grant_type: 'authorization_code',
          client_id: '865a4e3f0990f09ca5780259fd6d8687',
          redirect_uri: 'http://127.0.0.1:3000/auth/callback/kakao',
          code: query.code,
      };

      const queryString = await store.dispatch('queryString', param)

      try {
        const tokenInfo = await $axios.post('https://kauth.kakao.com/oauth/token?' + queryString, {}, config)
        config.headers.Authorization += tokenInfo.data.access_token

        const userInfo = await $axios.post('https://kapi.kakao.com/v2/user/me', {}, config)

        const info = {
          id: userInfo.data.id,
          age: userInfo.data.kakao_account.age_range,
          gender: userInfo.data.kakao_account.gender,
          nickname: userInfo.data.properties.nickname,
          profile_image: userInfo.data.properties.profile_image,
        }
        
        console.log(info)

      } catch (e) {
        console.log(e)
      }
    
    },
}
</script>