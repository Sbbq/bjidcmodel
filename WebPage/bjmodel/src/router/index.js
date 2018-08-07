import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NavHeader from '@/components/NavHeader'
import carCount from '@/Views/carCount'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',
    name: 'login',
    component: r => require.ensure([], () => r(require('@/Views/login')), 'login')
  },
  {
    path: '/home',
    name: 'NavHeader',
    component: NavHeader,
    children: [
    {
      path: "carOrder",
      component: r => require.ensure([], () => r(require('@/Views/carOrder')), 'carOrder')
    },
    {
      path: "carCount",
      component: carCount
    }
    ]
  }
  ]
})
