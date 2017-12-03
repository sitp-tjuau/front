/**
* Created by dustar on 2017/10/5.
*/

<template>
    <div class="page">
      <div id="header">
        <div id="header-left">
          <div class="header-left-item" v-if="noti.send_by_me">我发给&nbsp;&nbsp;&nbsp;</div>
          <username-and-avatar v-if="noti.type!==0" id="avatar"
                               :user_id="noti.sender_id"></username-and-avatar>
          <el-tooltip class="item" effect="dark" :content="receivers_name_str" placement="top" v-if="noti.send_by_me && noti.receiver_count > 1">
            <div class="header-left-item" >等 <span class="receivers">{{noti.receiver_count}}</span> 人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </el-tooltip>
          <div class="header-left-item">{{ noti.created_at | dateTimeFormatter(1) }}</div>
        </div>
        <div class="type" v-if="noti.type===0"><i class="iconfont icon-shezhi"></i> 系统消息</div>
        <div class="type" v-else-if="noti.type===1"><i class="iconfont icon-jingbao"></i> 公共通知</div>
        <div class="type" v-else></div>
      </div>
        <div id="title">
          <el-tooltip class="item" effect="dark" :content="noti.title" placement="top">
            <div id="title-text">{{ noti.title }}</div>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="含附件" placement="right">
            <i @click="this.location.href='#annexs'" id="annex-icon" v-if="annexs" class="iconfont icon-fujian-tianchong"></i>
          </el-tooltip>
        </div>

      <div id="container">
        <div id="content" v-html="noti.content">
          {{ noti.content }}
        </div>
        <annexs :manage="false" v-if="annexs"></annexs>
      </div>

      <div id="footer">
        <el-input
          v-if="!noti.send_by_me"
          type="textarea"
          autosize
          placeholder="快速回复，请输入内容"
          icon="edit"
          resize="none"
          autofocus
          v-model="fast_reply_text"
          class="footer-left"
        >
        </el-input>
        <el-button-group>
          <el-button type="primary" size="small"  v-if="!noti.send_by_me">
            <el-tooltip class="item" effect="dark" content="点击快速回复" placement="top">
              <i class="iconfont icon-xiaoxi"></i>
            </el-tooltip>
          </el-button>
          <el-button type="primary" size="small" @click="rmNoti(noti.notification_id)">
            <i class="iconfont icon-icon_delete"></i> 删除
          </el-button>
          <el-button type="primary" size="small" v-if="!noti.send_by_me" @click="$router.push('/send?to='+noti.sender_id)">
            <i class="iconfont icon-daohang"></i> 回复</el-button>
          <el-button type="primary" size="small" v-else @click="$router.push('/send?to='+noti.first_receiver_id)">
            <i class="iconfont icon-daohang"></i> 再发一条</el-button>
        </el-button-group>

      </div>
    </div>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import { LOADNOTI, SWITCHNOTISTATE } from 'MODULE/noti'
  const Annexs = resolve => require(['COMPONENTS/annexs/Annexs'], resolve)
  import UsernameAndAvatar from 'COMPONENTS/UsernameAndAvatar'
  export default {
    components: {
      UsernameAndAvatar,
      Annexs
    },
    data () {
      return {
        fast_reply_text: '',
        isLoad: true
      }
    },
    computed: {
      ...mapGetters(['noti', 'notis', 'annexs']),
      receivers_name_str () {
        return this.noti.receivers_name.join('、')
      }
    },
    watch: {
      '$route': 'loadNoti'
    },
    methods: {
      ...mapMutations({
      }),
      ...mapActions({
        init: LOADNOTI,
        setState: SWITCHNOTISTATE
      }),
      loadNoti () {
        console.log('INITDATA NOTI')
        if (this.$route.params.nid >= 0) {
          this.init(this.$route.params.nid)
          this.setState({
            nid: this.$route.params.nid,
            value: 2
          })
        } else if (this.notis) {
          this.$router.push({
            name: 'noti',
            params: {
              nid: this.notis[0].notification_id
            }
          })
        } else {
          this.isLoad = false
        }
      },
      rmNoti (nid) {
        let index = -1
        if (this.$route.params.nid === nid) {
          index = this.notis.findIndex(e => nid === e.notification_id)
        }
        this.setState({
          nid: nid,
          value: 0
        })
        if (index !== -1) {
          if (!this.notis[index]) index--
          this.$router.push({
            name: 'noti',
            params: {
              nid: this.notis[index].notification_id
            }
          })
        }
      }
    },
    mounted () {
      this.loadNoti()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 150px);
    overflow: hidden;
  }
  #header {
    flex-shrink: 0;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 25px;
  }
  .type, .type>i{
    font-size: 20px;
    color: #D3DCE6;
  }
  #avatar {
    margin-right: 20px;
  }
  #header-left {
    display: flex;
  }
  .header-left-item {
    color: #D3DCE6;
    font-size: 14px;
  }
  #title {
    flex-shrink: 0;
    padding-left: 20px;
    font-size: 30px;
    color: #99A9BF;
    line-height: 60px;
    font-weight: 800;
    height: 60px;
    overflow: hidden;
    background: #F9FAFC;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  #title:hover {
    color: #324057;
    background: #EFF2F7;
    cursor: text;
  }
  #title-text {

  }
  #annex-icon {
    font-size: 30px;
    margin-right: 10px;
    cursor: pointer;
  }
  .receivers {
    text-decoration: underline;
    color: #324057;
    cursor: pointer;
  }
  #container {
    height: calc(100vh - 240px);
    color: #1F2D3D;
    overflow-x: hidden;
    overflow-y: auto;
  }
  #content {
    margin: 20px;
  }
  #footer {
    border-radius: 5px;
    background: #20A0FF;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .footer-left {
    width: 415px;
  }

</style>
