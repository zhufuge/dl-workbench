import Vue from "vue"
import VueRouter from "vue-router"
import router from "./router"
import ElementUI from 'element-ui'
import App from "./App.vue"

Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.prototype.$message = ElementUI.Message
Vue.prototype.$bus = new Vue()

let v = new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
})