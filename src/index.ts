import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import router from "./router"

Vue.use(VueRouter)

let v = new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
})