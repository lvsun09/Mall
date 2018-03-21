import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList'
import Tittle from '@/views/Tittle'
import Image from '@/views/Image'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods/:goodsId',
      name: 'GoodsList',
      component: GoodsList,
      children:[
      {
      	path:'tittle',
      	name:'tittle',
      	component:Tittle
      },
      {
      	path:'image',
      	name:'image',
      	component:Image
      }
      ]
    }
  ]
})
