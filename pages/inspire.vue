<template>
  <v-row>
    <v-col class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
      <p>
        This page is rendered on the <strong>{{ rendering }}</strong>
      </p>
        <footer>
          <small>
            <em>&mdash;Jock Jock</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
export default {
  asyncData() {
    return {
      rendering: process.server ? 'server' : 'client'
    }
  }
}
</script>
