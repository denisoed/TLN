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
      path: '/sprints',
      name: 'sprints',
      component: require('@/components/Sprint').default
    },
    {
      path: '/sprint-single/:id',
      name: 'sprint-single',
      component: require('@/components/SprintSingle').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
