/**
* Created by dustar on 2017/10/4.
*/

<template>
    <div id="panel">
      <div id="header">
        当前社团入驻 <el-badge class="mark" :value="club_members.length" /> 人
      </div>
      <div id="container">
      <club-member v-for="user in club_members" :user="user" :key="user.user_id"></club-member>
      </div>
      <div id="footer">
        <modal-add-new-member v-if="power > 0"></modal-add-new-member>
        <el-button type="text" v-if=""@click="sendToAll()"><i class="iconfont icon-xinxi"></i> 群发消息</el-button>
      </div>
    </div>
</template>

<script>
  import ClubMember from 'COMPONENTS/club/ClubMember.vue'
  import ModalAddNewMember from 'COMPONENTS/club/ModalAddNewMember.vue'
  import { mapGetters, mapActions } from 'vuex'
  import { LOADCLUBMEMBERS } from 'MODULE/club'
  export default {
    components: {
      ClubMember,
      ModalAddNewMember
    },
    data () {
      return {
        dialogVisible: false
      }
    },
    computed: {
      ...mapGetters(['power', 'club_members'])
    },
    methods: {
      ...mapActions({
        initClubMembers: LOADCLUBMEMBERS
      }),
      sendToAll () {
        this.$router.push({ name: 'send', query: { to: this.club_members.map(e => e.user_id).join(',') } })
        // this.$router.push('/send?to=' +
      }
    },
    mounted () {
      this.initClubMembers()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #panel {

  }
  #header {
    padding: 15px 10px 10px 20px;
    font-size: 14px;
    color: #324057;
  }
  .mark {
    padding-top: 5px;
  }
  #container {
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100vh - 260px);
  }
  #footer {
    padding-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

  }
</style>
