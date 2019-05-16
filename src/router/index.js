import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ALL from '@/components/All'
import NEWS from '@/components/News'
import Duanzi from '@/components/Duanzi'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hw',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'ALL',
      component: ALL
    },
    {
      path: '/news',
      name: 'NEWS',
      component: NEWS
    },
    {
      path: '/duanzi',
      name: 'Duanzi',
      component: Duanzi
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
