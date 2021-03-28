<template>
  <div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, redirect }){
    try{
      const logout = await $axios.post('http://localhost:7000/authenticate/logout')
      if(logout.data.result === 'Y'){
        redirect('/')
      }else{
        console.log(logout.data.message)
        redirect('/')
      }
    } catch(e){
      console.log(e)
    }
  },
}
</script>