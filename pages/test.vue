<template>
  <div>
    <h1>Hello Nuxters! 👋</h1>
    <p>
      This page is rendered on the <strong>{{ rendering }}</strong>
    </p>
    <ul>
      <li>{{ info.name }}</li>
      <li>{{ info.age }}</li>
    </ul>
    <p>------------------------</p>
    <ul>
      <li v-for="todo in todos" :key="todo.text">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
      <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
    </ul>

    <NuxtLink to="/inspire">inspire Page</NuxtLink>
  </div>
</template>

<script>
export default {

  async asyncData({ $axios }){
    const data = (await $axios.get('/api/test/json')).data
    return {
      info: data,
      rendering: process.server ? 'server' : 'client'
    }
  },

  data(){
    return {
      myname: 'jock'
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
