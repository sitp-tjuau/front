/**
* Created by dustar on 2017/10/4.
*/

<template>
  <div id="container">
    <user-card :user="user">
      <div slot="more" v-if="power >= 1">
        <user-card-manage :userid="user.user_id" :power="power"></user-card-manage>
      </div>
      <div id="item">
        <avatar :avatar="user.avatar" size="middle"></avatar>
        <span id="name">&nbsp;{{ user.name }} <title-tag :title="user.title_id"></title-tag></span>
      </div>
    </user-card>

  </div>
</template>

<script>
  import UserCard from 'COMPONENTS/UserCard.vue'
  import Avatar from 'COMPONENTS/Avatar.vue'
  import TitleTag from 'COMPONENTS/TitleTag.vue'
  import UserCardManage from 'COMPONENTS/UserCardManage.vue'
  import { mapGetters } from 'vuex'
  export default {
    props: ['user'],
    computed: {
      ...mapGetters(['power'])
    },
    components: {
      UserCard,
      Avatar,
      TitleTag,
      UserCardManage
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #container {
    overflow: hidden;
    padding: 10px 10px 10px 15px;
    width: 100%;
    height: 45px;
    cursor: pointer;
  }
  #container:hover {
    background: white;
  }
  #item {
    line-height: 45px;
    display: flex;
    font-size: 16px;
    flex-direction: row;
  }
  #name {
    color: #58B7FF;
  }

  #name:hover {
    color:#1D8CE0;
  }

</style>

