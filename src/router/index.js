import Vue from 'vue'
import Router from 'vue-router'
import VueCookies from 'vue-cookies'
import HelloWorld from '@/components/HelloWorld'
import ViewLogin from '@/components/View-Login'
import specialList from '@/components/View-specialList'

Vue.use(Router)
Vue.use(VueCookies)

export default new Router({
  routes: [
    {
      path: '/0',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'login',
      component: ViewLogin
    },
    {
      path: '/specialList',
      name: 'specialList',
      component: specialList
    }
  ]
})
