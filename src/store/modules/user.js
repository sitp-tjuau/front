import { addNamespace } from '@/util/commonUtil'

const namespace = addNamespace('user')

export const LOGIN = namespace('LOGIN')
export const LOGOUT = namespace('LOGOUT')
export const REGISTER = namespace('REGISTER')
export const INITMYDATA = namespace('INITMYDATA')
export const RELOADMYDATA = namespace('RELOADMYDATA')
export const INITDATA = namespace('INITDATA')
export const SAVEDATA = namespace('SAVEDATA')
export const SETTINGMY = namespace('SETTINGMY')
export const SETTINGUSER = namespace('SETTINGUSER')
export const SETDATA = namespace('SETDATA')
export const INITUSERLIST = namespace('INITUSERLIST')
export const LOADUSERLIST = namespace('LOADUSERLIST')
export const LOADUSERCARD = namespace('LOADUSERCARD')
export const INITUSERCARD = namespace('INITUSERCARD')
export const LOADUSERSUMMARY = namespace('LOADUSERSUMMARY')
export const INITUSERSUMMARY = namespace('INITUSERSUMMARY')

const state = {
  isMyUpdated: false,
  my: {
    user_id: 3,
    name: '吕岩松',
    avatar: 'https://tvax1.sinaimg.cn/crop.397.0.500.500.50/736ae2b2ly8fellm6xdchj20p00gn425.jpg',
    campus: '嘉定校区',
    club_id: 1,
    title_id: 1,
    power: 2,
    description: '爱谁谁，谁怕谁',
    phone_number: '13819201929',
    created_at: '2017/07/13 23:55',
    username: 'admin',
    password: 'admin'
  },
  current: {},
  cardUser: {},
  userlist: [
    {
      user_id: 1,
      name: '许琨',
      club_name: '上海上港同济球迷会',
      title_id: 3
    }, {
      user_id: 2,
      name: '许申花',
      club_name: '同济羽毛球协会',
      title_id: 2
    }, {
      user_id: 3,
      name: '许国安',
      club_name: '甜品社',
      title_id: 0
    }, {
      user_id: 4,
      name: '黄什么哲',
      club_name: '社团联',
      title_id: 1
    }, {
      user_id: 0,
      name: '尤什么什么什么什么',
      club_name: '社团联',
      title_id: 4
    }, {
      user_id: 5,
      name: '北看台分子',
      club_name: '社团联',
      title_id: 5
    }
  ]
}

const getters = {
  userlist: state => state.userlist,
  my: state => state.my,
  power: state => state.my.power,
  updated: state => state.isMyUpdated,
  card_user: state => state.cardUser,
  getUser: (state, getters) => (id) => state.userlist.find(e => e.user_id === id)
}

const mutations = {
  [LOGOUT] (state) {
    state.my = {}
    state.isMyUpdated = false
  },
  [RELOADMYDATA] (state) {
    state.my = localStorage.getItem('my')
  },
  [INITMYDATA] (state, value) {
    state.isMyUpdated = true
    state.my = value
    localStorage.setItem('my', {
      user_id: state.my.user_id,
      name: state.my.name,
      power: state.my.name.power,
      title_id: state.my.title_id,
      avatar: state.my.avatar,
      club_id: state.my.club_id
    })
  },
  [INITDATA] (state, value) {
    state.current = value
    state.current = state.my // debug
    if (state.my.user_id === value.userid) {
      state.my = state.current
    }
  },
  [SETDATA] (state, key, value) {
    state.current[key] = value
  },
  [INITUSERLIST] (state, value) {
    state.userlist = value
  },
  [INITUSERCARD] (state, value) {
    state.cardUser = value
  },
  [INITUSERSUMMARY] (state, value) {
    state.userlist[state.userlist.findIndex(e => e.user_id === value.user_id)] = value
  }
}

const actions = {
  [LOGIN] ({commit, state}, pId) {
    // console.log('initdata' + pId)
  },
  [SAVEDATA] ({commit, state}, pId) {
    // console.log('initdata' + pId)
  },
  [REGISTER] ({commit, state}, pId) {
    // console.log('initdata' + pId)
  },
  [SETTINGMY] ({commit, state}, pId) {
    // console.log('initdata' + pId)
  },
  [SETTINGUSER] ({commit, state}, pId) {
    // console.log('initdata' + pId)
  },
  [LOADUSERLIST] ({commit, state}) {
    // console.log('initdata' + pId)
    commit(INITUSERLIST, {})
  },
  [LOADUSERCARD] ({commit, state}, uid) {
    // console.log('initdata' + pId)
    commit(INITUSERCARD, state.my)
  },
  [LOADUSERSUMMARY] ({commit, state}, uid) {
    // console.log('initdata' + pId)
    // commit(INITUSERCARD, state.my)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

