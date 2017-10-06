/**
* Created by dustar on 2017/10/6.
*/

<template>
    <div class="container">
      <h1>申请其它</h1>
      <div class="form-container">
        <div class="left">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
              <el-input v-model="form.activity_name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="right">
          <annexs :manage="true" :annexs="annexs"></annexs>
        </div>

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
          activity_name: ''
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
  .container {
    padding: 10px;
    color: #324057;
  }
  .form-container {
    display: flex;
    justify-content: space-between;
  }
  .left {
    width: 300px;

  }
  .right {
    width: 400px;
    border-radius: 100px;
  }
</style>
