import Vue from 'vue'
import Router from 'vue-router'

import notFoundPage from 'PAGES/NotFoundPage'
import home from 'PAGES/Home'
import club from 'PAGES/Club'
import login from 'PAGES/Login'
import register from 'PAGES/Register'
import setting from 'PAGES/Setting'

import notiBox from 'PAGES/NotiBox'
import notiDetail from 'PAGES/NotiDetail'
import newNoti from 'PAGES/NewNoti'

import budgetPage from 'PAGES/club/BudgetPage'
import indexPage from 'PAGES/club/IndexPage'
import otherPage from 'PAGES/club/OtherPage'
import posterPage from 'PAGES/club/PosterPage'
import settingPage from 'PAGES/club/SettingPage'
import sitePage from 'PAGES/club/SitePage'
import newOther from 'PAGES/club/NewOther'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    component: login
  },
  {
    path: '/register/:code',
    component: register
  },
  {
    path: '/',
    component: home,
    redirect: '/club',
    children: [{
      path: '/setting',
      component: setting
    }, {
      path: '/404',
      component: notFoundPage
    }, {
      path: '/club',
      component: club,
      redirect: '/club/index',
      children: [
        {
          path: '/club/index',
          name: 'index',
          component: indexPage
        },
        {
          path: '/club/budget',
          name: 'budget',
          component: budgetPage
        },
        {
          path: '/club/poster',
          name: 'poster',
          component: posterPage
        },
        {
          path: '/club/setting',
          name: 'setting',
          component: settingPage
        },
        {
          path: '/club/site',
          name: 'site',
          component: sitePage
        },
        {
          path: '/club/other',
          name: 'other',
          component: otherPage
        },
        {
          path: '/club/other/new',
          name: 'other',
          component: newOther
        }
      ]
    }, {
      path: '/noti',
      component: notiBox,
      children: [{
        path: '/notification/:nid',
        name: 'notiDetail',
        component: notiDetail
      }, {
        path: '/send',
        component: newNoti
      }
      ]
    }]
  }, {
    path: '*',
    redirect: '/404'
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
