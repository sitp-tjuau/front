/**
* Created by dustar on 2017/10/4.
*/

<template>
  <div id="container">
      <user-card :user_id="user_id">
        <div id="item">
        <avatar :avatar="getUser(this.user_id).avatar" size="small"></avatar>
        <span id="name">&nbsp;{{ getUser(this.user_id).name }}</span>
        </div>
      </user-card>

  </div>
</template>

<script>
  const UserCard = resolve => require(['COMPONENTS/UserCard.vue'], resolve)
  import Avatar from 'COMPONENTS/Avatar.vue'
  import { mapGetters, mapActions } from 'vuex'
  import { LOADUSERSUMMARY } from 'MODULE/user'
  export default {
    props: ['user_id'],
    computed: {
      ...mapGetters(['getUser'])
    },
    methods: {
      ...mapActions({
        initSummary: LOADUSERSUMMARY
      })
    },
    mounted () {
      if (!this.getUser(this.user_id).avatar) {
        this.initSummary(this.user_id)
      }
    },
    components: {
      UserCard,
      Avatar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #container {
    width:100px;
    overflow-x: hidden;
    overflow-y: hidden;
    height: 25px;
    cursor: pointer;
  }
  #item {
    line-height: 25px;
    display: flex;
    flex-direction: row;
  }
  #name {
    color: #58B7FF;
  }
  #name:hover {
    color:#1D8CE0;
  }
</style>
