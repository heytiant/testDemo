import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/page/Content'
import Home from "@/page/home"
import From from "@/components/from"
import Main from "@/components/main"
import Luru from "@/components/luru"


import Login from "@/page/login"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Content',
      component:Content, 
      children:[
        {
          path:"/",
          redirect:"/home",
          component:Home
          
        },
        {
          path:"/login",
          name:"login",
          component:Login
        },

        {
          path:"/home",
          name:"home",
          component:Home,

           children:[
                {
                  path:"/home/mine",
                  name:"mine",
                  component:From
                },
                {
                  path:"/home/content",
                  name:"content",
                  component:Main
                }, 
                {
                  path:"/home/luru",
                  name:"luru",
                  component:Luru
                },   
              

           ] 


        },
       
     
       
       
      ]

    },
   
  ]
})
