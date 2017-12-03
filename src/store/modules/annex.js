import { addNamespace } from '@/util/commonUtil'

const namespace = addNamespace('annex')

export const INITANNEXS = namespace('INITANNEXS')
export const UPLOADANNEX = namespace('UPLOADANNEX')
export const ADDANNEX = namespace('ADDANNEX')
export const REMOVEANNEX = namespace('REMOVEANNEX')

const state = {
  annexs: [
    {
      path: 'http://www.baidu.com',
      file_name: '我是中国人111.doc',
      file_type: 'doc'
    },
    {
      path: 'http://www.baidu.com',
      file_name: '我是中国人112.doc',
      file_type: 'jpg'
    },
    {
      path: 'http://www.baidu.com',
      file_name: '我是中国33人.doc',
      file_type: 'mp4'
    },
    {
      path: 'http://www.baidu.com',
      file_name: '我是中国44433人.doc',
      file_type: 'mp4'
    }
  ]
}

const getters = {
  annexs: state => state.annexs,
  annexs_count: state => state.annexs.length
}

const mutations = {
  [INITANNEXS] (state, value) {
    state.annexs = value
  },
  [ADDANNEX] (state, value) {
    state.annexs.push(value)
  },
  [REMOVEANNEX] (state, key) {
    state.annexs.splice(key, 1)
  }
}

const actions = {
  [UPLOADANNEX] ({commit, state}) {
    // console.log('initdata' + pId)
    commit(ADDANNEX, {
      path: 'http://www.baidu.com',
      file_name: '我是中国44433人.doc',
      file_type: 'mp4'
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

