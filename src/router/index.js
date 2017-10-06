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

import editBudget from 'PAGES/club/EditBudget'
import editSite from 'PAGES/club/EditSite'
import editPoster from 'PAGES/club/EditPoster'
import editOther from 'PAGES/club/EditOther'
import viewApp from 'PAGES/club/ViewApp'
import viewBudget from 'PAGES/club/ViewBudget'
import viewSite from 'PAGES/club/ViewSite'
import viewPoster from 'PAGES/club/ViewPoster'
import viewOther from 'PAGES/club/ViewOther'

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
    redirect: '/club/0',
    children: [{
      path: '/setting',
      name: 'mySetting',
      component: setting
    }, {
      path: '/404',
      component: notFoundPage
    }, {
      path: '/club/:clubid',
      name: 'club',
      component: club,
      redirect: 'index',
      children: [
        {
          path: '/club/:clubid/index',
          name: 'index',
          component: indexPage
        },
        {
          path: '/club/:clubid/budget',
          name: 'budget',
          component: budgetPage
        },
        {
          path: '/club/:clubid/poster',
          name: 'poster',
          component: posterPage
        },
        {
          path: '/club/:clubid/setting',
          name: 'setting',
          component: settingPage
        },
        {
          path: '/club/:clubid/site',
          name: 'site',
          component: sitePage
        },
        {
          path: '/club/:clubid/other',
          name: 'other',
          component: otherPage
        },
        {
          path: '/app',
          redirect: 'app/budget',
          component: viewApp,
          children: [
            {
              path: '/app/budget',
              name: 'appBudget',
              component: editBudget
            },
            {
              path: '/app/poster',
              name: 'appPoster',
              component: editPoster
            },
            {
              path: '/app/site',
              name: 'appSite',
              component: editSite
            },
            {
              path: '/app/other',
              name: 'appOther',
              component: editOther
            },
            {
              path: '/app/budget/:appid',
              name: 'viewBudget',
              component: viewBudget
            },
            {
              path: '/app/poster/:appid',
              name: 'viewPoster',
              component: viewPoster
            },
            {
              path: '/app/site/:appid',
              name: 'viewSite',
              component: viewSite
            },
            {
              path: '/app/other/:appid',
              name: 'viewOther',
              component: viewOther
            }
          ]
        }
      ]
    }, {
      path: '/noti',
      component: notiBox,
      children: [
        {
          path: '/notification/:nid',
          name: 'notiDetail',
          component: notiDetail
        },
        {
          path: '/send',
          component: newNoti
        }
      ]
    }]
  }, {
    path: '/hi',
    redirect: '/404'
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
