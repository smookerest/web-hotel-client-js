import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Booking from '@/components/Booking'
import Room from '@/components/Rooms'
import Costumer from '@/components/Costumers'
import User from '@/components/Users'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/booking',
      name: 'booking',
      component: Booking
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: Room
    },
    {
      path: '/costumers',
      name: 'costumers',
      component: Costumer
    },
    {
      path: '/users',
      name: 'users',
      component: User
    }
  ]
})
