<template>
  <div class="container">
    <Intro/>
    <Service/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

import Intro from './components/Intro.vue'
import Service from './components/Service.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Intro,
    Service,
  }
})
</script>
<style>
  body {
    background: #343233;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .container {
    height: 1000px;
  }
</style>

