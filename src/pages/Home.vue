<template>
  <div id="home">
    <div id="home-header">
      <div id="home-header-left" class="home-header-item">
        <img :src="logo" id="logo" @click="$router.push('/')">
      </div>
      <div class="home-header-item"></div>
      <div class="home-header-item home-header-right">
        <noti></noti>
        <el-dropdown @command="handleCommand">
          <avatar size="middle" id="avatar" :avatar="my.avatar"></avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item disabled>{{my.name}}</el-dropdown-item>
              <el-dropdown-item divided command="/setting"><i class="iconfont icon-shezhi"></i> 个人设置</el-dropdown-item>
            <el-dropdown-item command="/login"><i class="iconfont icon-tuichudenglu"></i> 退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div id="home-container">

      <transition name="router-fade2" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import logo from '@/assets/images/logo.png'
  import Avatar from 'COMPONENTS/Avatar.vue'
  import Noti from 'COMPONENTS/header/Noti.vue'
  import { mapGetters, mapActions } from 'vuex'
  import { LOADTITLES } from 'MODULE/title'
  export default {
    data () {
      return {
        logo
      }
    },
    computed: {
      ...mapGetters(['updated', 'my'])
    },
    components: {
      Avatar,
      Noti
    },
    mounted () {
      this.loadTitles()
    },
    methods: {
      ...mapActions({
        loadTitles: LOADTITLES
      }),
      handleCommand (command) {
        if (command === '/login') {
          localStorage.removeItem('token')
        }
        this.$router.push(command)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  #home-container {
    height: calc(100vh - 112px);
    overflow-y: auto;
    overflow-x: hidden;
    background: #e6f1fe;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  i {
    font-size: 24px;
  }

  #home-header {
    height: 72px;
    background: #1D8CE0;
    line-height: 72px;
    font-size: 32px;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 60px;
    padding-right: 60px;
  }

  #logo {
    margin-top: 18px;
    cursor: pointer;
  }

  .home-header-item {

  }

  .home-header-right {
    display: flex;
    flex-direction: row;
  }

  #avatar {
    margin-top: 16px;
    margin-left: 20px;
  }

  .home-menu-item :hover {

  }


  .home-menu > i:hover {

  }

  .router-fade2-enter-active {
    animation: bounce-in-page2 .5s;
  }
  .router-fade2-leave-active {
    animation: bounce-in-page-reverse2 .5s;
  }
  @keyframes bounce-in-page2 {
    0% {
      opacity: 0;
      transform: translateY(-500px);

    }
    100% {
    }
  }
  @keyframes bounce-in-page-reverse2 {
    0% {
    }
    100% {
      opacity: 0;
      transform: translateY(-500px);
    }
  }


</style>
