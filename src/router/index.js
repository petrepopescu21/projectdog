import Vue from 'vue'
import Router from 'vue-router'

import Default from '@/layouts/default'
import DogsLayout from '@/layouts/dogs'
import DogsProfileLayout from '@/layouts/dogprofile'
import DogsTwoLayout from '@/layouts/dogs2'

import Home from '@/pages/Home'
import DogsPage from '@/pages/Dogs'
import DogsPageTwo from '@/pages/Dogs2'
import DogProfile from '@/pages/DogProfile'
import DonatePage from '@/pages/Donate'

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
      }]
    },
    //dogs layout
    {
      path: '/',
      component: DogsLayout,
      children: [{
        path: '/caini',
        component: DogsPage,
        name: 'caini'
      }]
    },
    //dogsv2 layout
    {
      path: '/',
      component: DogsTwoLayout,
      children:[
        {
          path: '/dogs',
          component: DogsPageTwo,
          name: 'dogs'
        },
        {
          path: '/dogs/:id',
          component: DogProfile
        },
        {
          path: '/donate',
          component: DonatePage
        }
      ]
    }

  ]
})
