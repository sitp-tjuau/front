import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['PAGES/Login'], resolve)
  },
  {
    path: '/register/:code',
    name: 'register',
    component: resolve => require(['PAGES/Register'], resolve)
  },
  {
    path: '/',
    name: 'home',
    meta: { requiresAuth: true },
    component: resolve => require(['PAGES/Home'], resolve),
    redirect: {
      name: 'adminIndex'
    },
    children: [{
      path: '/setting',
      name: 'mySetting',
      component: resolve => require(['PAGES/Setting'], resolve)
    }, {
      path: '/404',
      component: resolve => require(['PAGES/NotFoundPage'], resolve)
    }, {
      path: '/club',
      name: 'clubDefault',
      beforeEnter (to, from, next) {
        next({
          name: 'index',
          params: { clubid: 0 }
        })
      }
    }, {
      path: '/club/:clubid',
      name: 'club',
      component: resolve => require(['PAGES/Club'], resolve),
      redirect: '/club/:clubid/index',
      children: [
        {
          path: '/club/:clubid/index',
          name: 'index',
          component: resolve => require(['PAGES/club/IndexPage'], resolve)
        },
        {
          path: '/club/:clubid/budget',
          name: 'budget',
          component: resolve => require(['PAGES/club/BudgetPage'], resolve)
        },
        {
          path: '/club/:clubid/poster',
          name: 'poster',
          component: resolve => require(['PAGES/club/PosterPage'], resolve)
        },
        {
          path: '/club/:clubid/setting',
          name: 'setting',
          component: resolve => require(['PAGES/club/SettingPage'], resolve)
        },
        {
          path: '/club/:clubid/site',
          name: 'site',
          component: resolve => require(['PAGES/club/SitePage'], resolve)
        },
        {
          path: '/club/:clubid/other',
          name: 'other',
          component: resolve => require(['PAGES/club/OtherPage'], resolve)
        },
        {
          path: '/club/:clubid/app/',
          redirect: '/club/:clubid/app/budget',
          component: resolve => require(['PAGES/club/ViewApp'], resolve),
          children: [
            {
              path: '/club/:clubid/app/budget',
              name: 'appBudget',
              component: resolve => require(['PAGES/club/EditBudget'], resolve)
            },
            {
              path: '/club/:clubid/app/poster',
              name: 'appPoster',
              component: resolve => require(['PAGES/club/EditPoster'], resolve)
            },
            {
              path: '/club/:clubid/app/site',
              name: 'appSite',
              component: resolve => require(['PAGES/club/EditSite'], resolve)
            },
            {
              path: '/club/:clubid/app/other',
              name: 'appOther',
              component: resolve => require(['PAGES/club/EditOther'], resolve)
            },
            {
              path: '/club/:clubid/app/budget/:appid',
              name: 'viewBudget',
              component: resolve => require(['PAGES/club/ViewBudget'], resolve)
            },
            {
              path: '/club/:clubid/app/poster/:appid',
              name: 'viewPoster',
              component: resolve => require(['PAGES/club/ViewPoster'], resolve)
            },
            {
              path: '/club/:clubid/app/site/:appid',
              name: 'viewSite',
              component: resolve => require(['PAGES/club/ViewSite'], resolve)
            },
            {
              path: '/club/:clubid/app/other/:appid',
              name: 'viewOther',
              component: resolve => require(['PAGES/club/ViewOther'], resolve)
            }
          ]
        }
      ]
    }, {
      path: '/admin',
      component: resolve => require(['PAGES/admin/Admin'], resolve),
      beforeEnter: (to, from, next) => {
        if (!(localStorage.getItem('power') && localStorage.getItem('power') >= 2)) {
          next({
            name: 'clubDefault'
          })
        } else {
          next()
        }
      },
      redirect: '/admin/index',
      children: [
        {
          path: '/admin/index',
          name: 'adminIndex',
          component: resolve => require(['PAGES/admin/AdminIndex'], resolve)
        },
        {
          path: '/admin/apps',
          name: 'adminApps',
          component: resolve => require(['PAGES/admin/AdminApps'], resolve),
          redirect: '/admin/apps/budget',
          children: [
            {
              path: '/admin/apps/budget',
              name: 'adminAppsBudget',
              component: resolve => require(['PAGES/club/BudgetPage'], resolve)
            },
            {
              path: '/admin/apps/site',
              name: 'adminAppsSite',
              component: resolve => require(['PAGES/club/SitePage'], resolve)
            },
            {
              path: '/admin/apps/poster',
              name: 'adminAppsPoster',
              component: resolve => require(['PAGES/club/PosterPage'], resolve)
            },
            {
              path: '/admin/apps/other',
              name: 'adminAppsOther',
              component: resolve => require(['PAGES/club/OtherPage'], resolve)
            }
          ]
        },
        {
          path: '/admin/titles',
          name: 'adminTitles',
          component: resolve => require(['PAGES/admin/AdminTitles'], resolve)
        },
        {
          path: '/admin/logs',
          name: 'adminLogs',
          component: resolve => require(['PAGES/admin/AdminLogs'], resolve)
        },
        {
          path: '/admin/users',
          name: 'adminUsers',
          component: resolve => require(['PAGES/admin/AdminUsers'], resolve)
        },
        {
          path: '/admin/clubs',
          name: 'adminClubs',
          component: resolve => require(['PAGES/admin/AdminClubs'], resolve)
        },
        {
          path: '/admin/sites',
          name: 'adminSites',
          component: resolve => require(['PAGES/admin/AdminSites'], resolve)
        }
      ]
    }, {
      path: '/noti',
      component: resolve => require(['PAGES/NotiBox'], resolve),
      children: [
        {
          path: '/notification/:nid?',
          name: 'noti',
          component: resolve => require(['PAGES/NotiDetail'], resolve)
        },
        {
          path: '/send',
          name: 'send',
          component: resolve => require(['PAGES/NewNoti'], resolve)
        }
      ]
    }]
  }, {
    path: '*',
    name: '404',
    redirect: '/404'
  }
]

const router = new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    if (token) {
      next({path: '/'})
    } else {
      next()
    }
  }
})

export default router

