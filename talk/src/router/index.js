import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/common/HelloWorld'
import Message from "@/components/message/Message"
import MessageList from "@/components/message/MessageList"
import Share from "@/components/share/Share"
import ShareList from "@/components/share/ShareList"
import Me from "@/components/me/Me"
import MeList from "@/components/me/MeList"
import Info from "@/components/me/Info"
import InfoHeader from "@/components/me/InfoHeader"
import More from "@/components/me/More"
import MoreHeader from "@/components/me/MoreHeader"
import Book from "@/components/book/Book"
import BookList from "@/components/book/BookList"
import Chat from "@/components/chat/Chat"
import ChatHeader from "@/components/chat/ChatHeader"
import ChatFooter from "@/components/chat/ChatFooter"
import Login from "@/components/login/Login"
import Regeist from "@/components/regeist/Regeist"
import Add from "@/components/add/Add"
import AddHeader from "@/components/add/AddHeader"
Vue.use(Router);

export default new Router({
  routes: [
    {
      path : "/",
      redirect: "/login"
    },
    {   path: "/message",
        component : Message,
        children: [{
          path : "messageList",
          component : MessageList
        },{
        path: "chat/:name",
        component : Chat ,
      }]
      },
      {
        path: "/book",
        redirect: "/book/bookList",
        component : Book,
        children: [{
          path: "bookList",
          component : BookList
        }]
      }, 
      {
        path: "/share",
        component: Share,
        children : [{
          path : "shareList",
          component : ShareList
        }]
      },{
        path : "/me",
        component : Me,
        children : [{
          path : "meList",
          component : MeList
        },{
          path: "info",
          component : Info,
        }]
    },{
            path: "/more",
            component : More
    },{
      path: "/login",
      component : Login
    },{
      path : "/regeist",
      component : Regeist
    },{
      path : "/add",
      component : Add
    }
  ]
})
