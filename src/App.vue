<template>
  <div class="app-container">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Header,
    Footer,
  }
})
</script>
<style>

</style>

