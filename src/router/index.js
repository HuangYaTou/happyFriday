import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import list from '@/components/list'
import score from '@/components/score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      /* name: 'HelloWorld',
      component: HelloWorld */
      redirect: '/home'
    }, {
      path: '/home',
      component: home
    }, {
      path: '/list',
      component: list
    }, {
      path: '/score',
      component: score
    }
  ]
})
