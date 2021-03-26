<template>
  <div>
    <h1>Hello Nuxters! 👋</h1>
    <p v-if="info.user_id">
      This page is rendered on the <strong>{{ rendering }}</strong>
    </p>
    <p v-else>
       Please check Login
    </p>
    <ul>
      <li>{{ info.user_id }}</li>
      <li>{{ info.nick_name }}</li>
      <li>{{ info.auth_type }}</li>
    </ul>
<!-- 
    <p>------------------------</p>
    <ul>
      <li v-for="todo in todos" :key="todo.text">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
      <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
    </ul>

    <NuxtLink to="/inspire">inspire Page</NuxtLink>
   -->  
  </div>
</template>

<script>
export default {

  async asyncData({ $axios, redirect }){
    let info = {}
    try{
      const userinfo = await $axios.get('/api/userinfo')
      info = userinfo.data
    } catch(e){
      console.log(e)
    }


    return {
      info,
      rendering: process.server ? 'server' : 'client'
    }
  },


  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },

  methods: {
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },

    toggle(obj){
      this.$store.commit('todos/toggle', obj)
    }
  },
}
</script>
