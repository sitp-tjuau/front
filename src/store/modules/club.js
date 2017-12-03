import {addNamespace} from '@/util/commonUtil'

const namespace = addNamespace('club')

export const LOADCLUB = namespace('LOADCLUB')
export const INITCLUB = namespace('INITCLUB')
export const LOADCLUBMEMBERS = namespace('LOADCLUBMEMBERS')
export const INITCLUBMEMBERS = namespace('INITCLUBMEMBERS')
export const LOADCLUBS = namespace('LOADCLUBS')
export const INITCLUBS = namespace('INITCLUBS')
export const SETCLUB = namespace('SETCLUB')

const state = {
  club: {
    club_id: 0,
    content: '<h1>和谐社会</h1>',
    name: '和谐社团1',
    description: '你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮',
    logo: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
    created_at: '2017年8月24日'
  },
  members: [
    {
      user_id: 0,
      name: 'DuSt3ark',
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
      title_id: 1
    },
    {
      user_id: 1,
      name: 'DuSt2ark',
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
      title_id: 0
    },
    {
      user_id: 2,
      name: 'DuSta1rk',
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
      title_id: 1
    },
    {
      user_id: 3,
      name: 'DuStark',
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
      title_id: 2
    }
  ],
  clubs: [
  ]
}

const getters = {
  club: state => state.club,
  club_members: state => state.members,
  clubs: state => state.clubs
}

const mutations = {
  [INITCLUB] (state, value) {
    state.club = value
  },
  [INITCLUBS] (state, value) {
    state.clubs = value
  },
  [INITCLUBMEMBERS] (state, value) {
    state.members = value
  }
}

const actions = {
  [LOADCLUB] ({commit, state}, pId) {
    // console.log('initdata' + pId)
  },
  [LOADCLUBS] ({commit, state}, pId) {
    // console.log('initdata' + pId)
  },
  [LOADCLUBMEMBERS] ({commit, state}, pId) {
    // console.log('initdata' + pId)
  },
  [SETCLUB] ({commit, state}, pId) {
    // console.log('initdata' + pId)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

