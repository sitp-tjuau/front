import {addNamespace} from '@/util/commonUtil'

const namespace = addNamespace('app')

export const LOADAPP = namespace('LOADAPP')
export const INITAPP = namespace('INITAPP')
export const EDITAPP = namespace('EDITAPP')
export const SAVEAPP = namespace('SAVEAPP')

const state = {
  app: {}
}

const getters = {
  app: state => state.app
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

