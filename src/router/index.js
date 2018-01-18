import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import myQuestion from '@/components/myQuestion/myQuestion'
import myEarnings from '@/components/myEarnings/myEarnings'
import feedBack from '@/components/feedBack/feedBack'
import account from '@/components/account/account'
import question from '@/components/quesTion/quesTion'
import Login from '@/components/Login/Login'
import reg from '@/components/reg/reg'
import withdraw from '@/components/withdraw/withdraw'
import myFail from '@/components/myQuestion/myFail'
import myWaiting from '@/components/myQuestion/myWaiting'
import myPassing from '@/components/myQuestion/myPassing'
import Register from '@/components/register/register'
import Agreement from '@/components/agreement/agreement'
import getPassword from '@/components/getPassword/getPassword'
import help from '@/components/help/help'
import  App from '../App'

import ue from '@/components/editor/editor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'index',
      component: index,
    }, {
      path: '/help',
      name: 'help',
      component: help
    },
    {
      path: '/ue',
      component: ue
    }, {
      path: '/myQuestion',
      name: 'myQuestion',
      component: myQuestion,
      redirect: '/my',
      children: [
        {
          path: '/my',
          name: 'myWaiting',
          component: myWaiting
        }, {
          path: '/myFail',
          name: 'myFail',
          component: myFail
        }, {
          path: '/myPassing',
          name: 'myPassing',
          component: myPassing
        }
      ]
    }, {
      path: '/myEarnings',
      name: 'myEarnings',
      component: myEarnings
    }, {
      path: '/feedBack',
      name: 'feedBack',
      component: feedBack
    }, {
      path: '/account',
      name: 'account',
      component: account
    }, {
      path: '/question',
      name: 'question',
      component: question
    }, {
      path: '/Login',
      name: 'Login',
      component: Login
    }, {
      path: '/reg',
      name: 'reg',
      component: reg
    }, {
      path: '/withdraw',
      name: 'withdraw',
      component: withdraw
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/agreement',
      name: 'agreement',
      component: Agreement
    }, {
      path: '/getPassword',
      name: 'getPassword',
      component: getPassword
    }
  ]
})
