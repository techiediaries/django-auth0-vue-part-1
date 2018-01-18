
/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'

import Callback from '@/components/Callback'

Vue.use(Router)

const routes = [
  {
    path: '/callback',
    name: 'Callback',
    component: Callback
  }]

const router = new Router({
  mode: 'history',
  routes
})

export default router
