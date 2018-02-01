import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from "@/components/Hello"
import Guanli from "@/components/Guanli"
import Fabu from "@/components/Fabu"
import Side from "@/components/Side"
import Fabu1 from "@/components/Fabu1"
import Fabu2 from "@/components/Fabu2"
import Fabu3 from "@/components/Fabu3"
import Fabu4 from "@/components/Fabu4"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: "/hello",
      component: Hello,
      
    }, {
      path: '/side',
      component: Side,
      children: [{
        path:"fabu",
        component : Fabu,
        children: [{
            path:'step1',
            component : Fabu1
        },
          {
          path: 'step2',
          component: Fabu2
        },{
          path: "step3",
          component: Fabu3
        },{
          path: 'step4',
          component: Fabu4
        }]
      },{
        path: "guanli",
        component: Guanli
      }]
    }
  ]
})
