import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Service from '../views/Service.vue'
import Docs from '../views/Docs.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/service', component: Service },
    { path: '/docs', component: Docs },
  ]
})