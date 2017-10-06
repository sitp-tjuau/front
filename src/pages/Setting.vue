/**
* Created by dustar on 2017/10/6.
*/

<template>
  <div class="login">
    <div class="login-container">
      <el-tabs  v-model="activeTab"  type="card">
        <el-tab-pane label="个人资料修改">

          <el-form :model="form" ref="form" label-width="0" class="form">
            <el-form-item prop="name">
              <el-input v-model="form.name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item prop="campus">
              <el-radio-group v-model="form.campus">
                <el-radio-button label="所在的[校区]" :disabled="true"></el-radio-button>
                <el-radio-button label="四平路校区"></el-radio-button>
                <el-radio-button label="嘉定校区"></el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item prop="description">
              <el-input v-model="form.description" placeholder="个人简介"></el-input>
            </el-form-item>
            <el-form-item prop="phone">
              <el-input v-model="form.phone" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('form')"
                         class="login-btn"
              >提交</el-button>
            </el-form-item>
          </el-form>

        </el-tab-pane>
        <el-tab-pane label="密码修改">
          <el-form :model="form1" ref="form1" label-width="0" class="form">
            <el-form-item prop="password">
              <el-input type="password" v-model="form1.password" placeholder="新密码"></el-input>
            </el-form-item>
            <el-form-item prop="checkpass">
              <el-input v-model="form1.checkpass" placeholder="确认新密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('form1')"
                         class="login-btn"
              >提交</el-button>
            </el-form-item>
          </el-form>

        </el-tab-pane>

        <el-tab-pane label="头像修改">
          <el-form :model="form2" ref="form2" label-width="0" class="form">
            <el-form-item prop="avatar">
              <avatar-upload :imageUrl="form2.avatar"></avatar-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('form2')"
                         class="login-btn"
              >提交</el-button>
            </el-form-item>
          </el-form>

        </el-tab-pane>
      </el-tabs>

    </div>
  </div>
</template>

<script>
  import AvatarUpload from 'COMPONENTS/AvatarUpload'
  import logo from '@/assets/images/logo.png'
  export default {
    components: {
      AvatarUpload
    },
    data () {
      return {
        logo,
        activeTab: '',
        form: {
          description: '',
          campus: '',
          username: '',
          password: '',
          name: '',
          phone: ''
        },
        form1: {
          password: '',
          checkpass: ''
        },
        form2: {
          avatar: ''
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$router.push('/')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
  }
  .login-container {
    background: white;
    margin-top: calc((100vh - 600px) / 2);
    width: 300px;
    margin-left: calc((100vw - 400px) / 2);
    margin-right: calc((100vw - 400px) / 2);
    padding: 40px;
    border-radius: 20px;
  }
  .logo {
    background: #20A0FF;
    text-align: center;
    padding: 20px;
  }
  img {
    width: 250px;
  }
  .form {
    margin-top: 20px;
  }
  .login-btn {
    width: 300px;
  }
  .code {
    text-align: center;
    margin-top: 20px;
    color:#99A9BF;
  }
  .active {
    color: #58B7FF;
  }
</style>
