import Vue from 'vue'
import Router from 'vue-router'

import Default from '@/layouts/default'
import DogsLayout from '@/layouts/dogs'

import Home from '@/pages/Home'
import DogsPage from '@/pages/Dogs'
import DogProfile from '@/pages/DogProfile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  //each level-1 route is a layout
  routes: [
    //default layout
    {
      //catch all
      path: '/',
      component: Default,
      //each child is a page
      children: [{
        path: '/',
        component: Home,
        name: 'home'
      },
      {
        path: '/dogs/:id',
        component: DogProfile
      }]
    },
    //dogs layout
    {
      path: '/',
      component: DogsLayout,
      children: [{
        path: '/dogs',
        component: DogsPage,
        name: 'dogs'
      }]
    },

  ]
})
