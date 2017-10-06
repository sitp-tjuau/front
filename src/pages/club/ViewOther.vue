/**
* Created by dustar on 2017/10/6.
*/

<template>
  <div class="form-container">
    <div class="left">
      <div class="item">
        <el-tag class="q">活动名称</el-tag> <div class="a">{{form.activity_name }}</div>
      </div>

    </div>
    <div class="right">
      <annexs :manage="false" :annexs="annexs"></annexs>
    </div>

  </div>

</template>

<script>
  import Annexs from 'COMPONENTS/annexs/Annexs'
  export default {
    components: {
      Annexs
    },
    data () {
      return {
        form: {
          app_other_id: '',
          club_id: 0,
          club_name: '魔鬼社团',
          user_id: 1,
          activity_name: '皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球'
        },
        annexs: [
          {
            path: 'http://www.baidu.com',
            file_name: '我是中国人.doc',
            file_type: 'zip'
          },
          {
            path: 'http://www.baidu.com',
            file_name: '我是中国人333333333333333331.doc',
            file_type: 'jpg'
          },
          {
            path: 'http://www.baidu.com',
            file_name: '我是中国人2.doc',
            file_type: 'mp4'
          }
        ]
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-container {
    display: flex;
    justify-content: space-between;
  }
  .left {
    width: 500px;

  }
  .btn {
    width: 500px;
  }
  .right {
    width: 400px;
    border-radius: 10px;
    overflow: hidden;
  }
  .item {
    display: flex;
  }
  .q {
    line-height: 20px;
  }
  .a {
    margin-left: 10px;
    line-height: 20px;
    font-size: 14px;
    margin-bottom: 5px;
  }
</style>
