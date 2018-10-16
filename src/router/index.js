import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Paihang from '@/views/paihang'
import Geshou from '@/views/singer/index.vue'
import Sousuo from '@/views/sousuo'
import RecommendDetail from '@/views/recommend/detail.vue'
import SingerDetail from '@/views/singer/detail.vue'


import Tuicun from '@/views/recommend/'
//vue全局使用Router
Vue.use(Router)
//输出模块
export default new Router({
    //配置路由，数组
  routes: [
  //每一个链接都是一个对象
    {
    //连接路径
      path: '/HelloWorld',
    //路由的名称
      name: 'HelloWorld',
    //页面对应的组件模板
      component: HelloWorld
    },
    {
        path:'/paihang',
        component:Paihang
    },
    {
        path:'/tuicun',
        component:Tuicun,
        children:[
          {
          path:'/tuicun/:id',
          component:RecommendDetail
        }
        ]
    },
    {
        path:'/geshou',
        component:Geshou,
        children:[
          {
          path:'/geshou/:id',
          component:SingerDetail
        }
      ]
    },
    {
        path:'/sousuo',
        component:Sousuo
    },

  ]
})
