import { addNamespace } from '@/util/commonUtil'

const namespace = addNamespace('noti')

export const INITNOTI = namespace('INITNOTI')
export const LOADNOTI = namespace('LOADNOTI')
export const SETNOTI = namespace('SETNOTI')
export const SENDNOTI = namespace('SENDNOTI')
export const QUICKREPLY = namespace('QUICKREPLY')
export const SETNOTISTATE = namespace('SETNOTISTATE')
export const SWITCHNOTISTATE = namespace('SWITCHNOTISTATE')
export const REFRESHNEWNOTI = namespace('REFRESHNEWNOTI')
export const INITNOTIS = namespace('INITNOTIS')
export const LOADNOTIS = namespace('LOADNOTIS')

const state = {
  notis: [
    {
      sender_name: '王昌龄',
      notification_id: 0,
      avatar: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4137574537,1797912673&fm=173&s=52353DC010E0651FC0153C030300B09A&w=218&h=146&img.JPG',
      sender_id: 2,
      type: 0,
      title: '我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你',
      content: '你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。',
      created_at: '2017/11/27 03:57',
      state: 1
    },
    {
      sender_name: '王昌龄',
      notification_id: 1,
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
      sender_id: 2,
      type: 2,
      title: '我为何还咬着你',
      content: '你让我沉醉。',
      created_at: '2017/11/28 03:57',
      state: 1
    },
    {
      sender_name: '王昌龄',
      notification_id: 2,
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
      sender_id: 2,
      type: 2,
      title: '我为何还咬着你',
      content: '你让我沉醉。',
      created_at: '2017/11/24 01:57',
      state: 0
    },
    {
      sender_name: '王昌龄',
      notification_id: 3,
      sender_id: 2,
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
      type: 2,
      title: '我为何还咬着你',
      content: '你让我沉醉。',
      created_at: '2017/09/27 03:57',
      state: 2
    },
    {
      sender_name: '王昌龄',
      notification_id: 4,
      sender_id: 2,
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
      type: 2,
      title: '我为何还咬着你',
      content: '你让我沉醉。',
      created_at: '2007/11/27 03:57',
      state: 2
    },
    {
      sender_name: '王昌龄',
      notification_id: 5,
      sender_id: 2,
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
      type: 2,
      title: '我为何还咬着你',
      content: '你让我沉醉。',
      created_at: '2017/11/27 03:57',
      state: 2
    },
    {
      sender_name: '王昌龄',
      notification_id: 6,
      sender_id: 2,
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
      type: 2,
      title: '我为何还咬着你',
      content: '你让我沉醉。',
      created_at: '2017/11/27 03:57',
      state: 2
    },
    {
      sender_name: '王昌龄',
      notification_id: 7,
      sender_id: 2,
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
      type: 2,
      title: '我为何还咬着你',
      content: '你让我沉醉。',
      created_at: '2017/11/27 03:57',
      state: 2
    }
  ],
  current: {
    send_by_me: true,
    receiver_count: 2,
    first_receiver_id: 1,
    receivers_name: ['王昌龄', '孔乙己', '毛景涛', '黄金档'],
    sender_name: '王昌龄',
    notification_id: 0,
    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
    sender_id: 2,
    type: 1,
    title: '我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你',
    content1: '<p>hi</p>',
    content: '<p><code>flex-basis</code>属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为<code>auto</code>，即项目的本来大小。</p><p>它可以设为跟<code>width</code>或<code>height</code>属性一样的值（比如350px），则项目将占据固定空间。</p><h3>4.5 flex属性</h3><h3>4.5 flex属性</h3><h3>4.5 flex属性</h3><h3>4.5 flex属性</h3><h3>4.5 flex属性</h3><p>如果所有项目的<code>flex-grow</code>属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的<code>flex-grow</code>属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。</p><h3>4.3 flex-shrink属性</h3><p><code>flex-shrink</code>属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</p>',
    created_at: '2017/03/16 17:38',
    state: 0
  }
}

const getters = {
  notis: state => state.notis.filter(e => e.state !== 0),
  noti: state => state.current
}

const mutations = {
  [INITNOTI] (state, value) {
    state.current = value
  },
  [INITNOTIS] (state, value) {
    state.notis = value
  },
  [SETNOTISTATE] (state, {nid, value}) {
    console.log(nid + ' has state ' + value)
    state.notis.forEach(e => {
      if (e.notification_id === nid) {
        e.state = value
      }
    })
    if (state.current.notification_id === nid) {
      state.current.state = value
    }
  },
  [SETNOTI] (state, value) {
    state.current = value
    state.current = state.my // debug
    if (state.my.user_id === value.userid) {
      state.my = state.current
    }
  }
}

const actions = {
  [REFRESHNEWNOTI] ({commit, state}, pId) {
    // console.log('initdata' + pId)
  },
  [LOADNOTIS] ({commit, state}, pId) {
    // console.log('initdata' + pId)
  },
  [LOADNOTI] ({commit, state}, nid) {
    console.log('initdata' + nid)
  },
  [SENDNOTI] ({commit, state}, pId) {
    // console.log('initdata' + pId)
  },
  [QUICKREPLY] ({commit, state}, pId) {
    // console.log('initdata' + pId)
  },
  [SWITCHNOTISTATE] ({commit, state}, {nid, value}) {
    // console.log('initdata' + pId)
    commit(SETNOTISTATE, {nid, value})
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

