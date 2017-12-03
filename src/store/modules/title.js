import { addNamespace } from '@/util/commonUtil'

const namespace = addNamespace('title')

export const INITTITLES = namespace('INITTITLES')
export const LOADTITLES = namespace('LOADTITLES')

const state = {
  titles: [
    {
      title_id: 3,
      content: '副社长',
      power: 0
    }, {
      title_id: 4,
      content: '宣传部部长',
      power: 0
    },
    {
      title_id: 0,
      content: '社长',
      power: 1
    },
    {
      title_id: 1,
      content: '社团联负责人',
      power: 2
    },
    {
      title_id: 2,
      content: '指导老师',
      power: 2
    },
    {
      title_id: 5,
      content: '超级管理员',
      power: 3
    }
  ]
}

const getters = {
  titles: state => state.titles,
  getTitle: (state, getters) => (id) => state.titles.find(e => e.title_id === id)
}

const mutations = {
  [INITTITLES] (state, value) {
    // state.titles = value
    console.log('init titles')
  }
}

const actions = {
  [LOADTITLES] ({commit, state}) {
    // console.log('initdata' + pId)
    commit(INITTITLES, {})
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

