import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NavHeader from '@/components/NavHeader'
import carOrder from '@/Views/carOrder'
import carCount from '@/Views/carCount'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/home',
    name: 'NavHeader',
    component: NavHeader,
    children: [
    {
      path: "carOrder",
      component: carOrder
    },
    {
      path: "carCount",
      component: carCount
    }
    ]
  }
  ]
})
