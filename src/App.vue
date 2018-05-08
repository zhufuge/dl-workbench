<template>
  <div class="app-container">
    <Intro/>
    <Service/>
    <Model/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

import Intro from './components/Intro.vue'
import Service from './components/Service.vue'
import Model from './components/Model.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Intro,
    Service,
    Model,
  }
})
</script>
<style>
  body {
    background: #343233;
    margin: 0;
    padding: 0;
    color: #efdab9;
    font-weight: 100;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>

