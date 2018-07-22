import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/Home').default
    },
    {
      path: '/sprint',
      name: 'sprint',
      component: require('@/components/Sprint').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
