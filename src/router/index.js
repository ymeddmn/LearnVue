import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const vmodel = r => require.ensure([], () => r(require('../page/vmodel')), 'vmodel')
const home = r => require.ensure([], () => r(require('../page/home')), 'home')
const login = r => require.ensure([], () => r(require('../page/login')), 'login')
const vhtml = r => require.ensure([], () => r(require('../page/vhtml')), 'vhtml')
const watch = r => require.ensure([], () => r(require('../page/watch')), 'watch')
const vifelse = r => require.ensure([], () => r(require('../page/vifelse')), 'vifelse')
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/vmodel',
      name: 'vmodel',
      component: vmodel
    },
    {
      path: '/vhtml',
      name: 'vhtml',
      component: vhtml
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/watch',
      name: 'watch',
      component: watch
    },
    {
      path: '/vifelse',
      name: 'vifelse',
      component: vifelse
    }
  ]
})
