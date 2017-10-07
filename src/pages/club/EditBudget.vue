/**
* Created by dustar on 2017/10/6.
*/

<template>
  <div class="form-container">
    <div class="left">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="form.title" placeholder="在此输入标题"></el-input>
        </el-form-item>
        <el-form-item label="预计总预算">
          <el-input v-model="form.total_budget" placeholder="在此输入预计总预算">
          </el-input>
        </el-form-item><el-form-item>
        <el-button type="primary" @click="calcTotal()">刷新表内所列总预算</el-button>
      </el-form-item>
      </el-form>

      <div v-for="(value, key) in form.activities" :key="key" class="activity">
        <div class="activity-header">
          <div class="activity-name">活动 {{ key+1 }} {{ value.name }} </div>
          <el-button type="text" @click="deleteActivity(key)">
            <i class="iconfont icon-icon_delete"></i> 删除
          </el-button>
        </div>
        <div class="activity-form">
          <div class="activity-left">
            <el-input v-model="value.name" placeholder="活动名" class="activity-input">
              <template slot="prepend"><i class="iconfont icon-yonghuzu"></i></template>
            </el-input>
            <el-input v-model="value.time" placeholder="活动时间"  class="activity-input">
              <template slot="prepend"><i class="iconfont icon-jihua"></i></template>
            </el-input>
            <el-select v-model="value.site_id" filterable placeholder="活动场地" class="activity-input">
              <el-option
                v-for="site in sites"
                :key="site.id"
                :label="site.name"
                :value="site.id">
              </el-option>
            </el-select>
          </div>
          <div class="activity-right">
            <div v-for="(v, k) in value.cost_details" :key="k" class="material">
              <el-input v-model="v.material_name" placeholder="物材名称" class="material-name-input">
                <template slot="prepend"><i class="iconfont icon-wupin"></i></template>
              </el-input>
              <el-input v-model="v.unit_price" placeholder="单价" class="material-input" @change="calcSum(v)">
                <template slot="prepend"><i class="iconfont icon-danjia"></i></template>
              </el-input>
              <el-input v-model="v.quantity" placeholder="数量" class="material-input" @change="calcSum(v)">
                <template slot="prepend"><i class="iconfont icon-shuzi1"></i></template>
              </el-input>
              <el-input v-model="v.total_price" placeholder="总价" class="material-last-input">
                <template slot="prepend"><i class="iconfont icon-yusuanshenhe"></i></template>
                <template slot="append">
                  <el-button type="text" @click="deleteMaterial(value, k)">
                    &nbsp;<i class="iconfont icon-icon_delete"></i>&nbsp;
                  </el-button>
                </template>
              </el-input>
            </div>
            <el-button @click="addMaterial(value)" class="add-m-btn">
              <i class="iconfont icon-zixuan"></i> 添加新物材
            </el-button>
          </div>
        </div>
      </div>
      <el-button @click="addActivity()" type="primary" class="activity">
        <i class="iconfont icon-zixuan"></i> 添加新活动
      </el-button>

    </div>
    <div class="right">
      <annexs :manage="true" :annexs="annexs"></annexs>
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
        pickerOptions0: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        },
        form: {
          title: '某活动',
          total_budget: 700,
          activities: [
            {
              name: '艾滋病宣传',
              time: '2017年3月',
              site_id: 2,
              cost_details: [
                {
                  material_name: '王宝山',
                  unit_price: 100,
                  quantity: 30,
                  total_price: 300
                },
                {
                  material_name: '王宝山',
                  unit_price: 100,
                  quantity: 30,
                  total_price: 300
                }
              ]
            },
            {
              name: '艾滋病宣传',
              time: '2017年3月',
              site_id: 2,
              cost_details: [
                {
                  material_name: '王宝山',
                  unit_price: 100,
                  quantity: 30,
                  total_price: 300
                },
                {
                  material_name: '王宝山',
                  unit_price: 100,
                  quantity: 30,
                  total_price: 300
                }
              ]
            }
          ]
        },
        sites: [
          {
            id: 0,
            name: '嘉定校区F楼307'
          },
          {
            id: 1,
            name: '嘉定校区F楼444'
          },
          {
            id: 2,
            name: '嘉定校区同心楼308'
          },
          {
            id: 3,
            name: '嘉定校区图书馆'
          }
        ],
        annexs: [
          {
            path: 'http://www.baidu.com',
            file_name: '我是中国人你服不服',
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
        ],
        editorOption: {
          placeholder: '请在此输入正文'
        }
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      },
      addMaterial (v) {
        v.cost_details.push({
          material_name: '',
          unit_price: '',
          quantity: '',
          total_price: ''
        })
      },
      deleteMaterial (v, k) {
        v.cost_details.splice(k, 1)
      },
      deleteActivity (k) {
        this.form.activities.splice(k, 1)
      },
      addActivity () {
        this.form.activities.push({
          name: '',
          time: '',
          site_id: null,
          cost_details: [
            {
              material_name: null,
              unit_price: null,
              quantity: null,
              total_price: null
            }
          ]
        })
      },
      calcSum (v) {
        v.total_price = v.unit_price * v.quantity
      },
      calcTotal () {
        let sum = 0
        this.form.activities.forEach(e => {
          e.cost_details.forEach(ee => {
            this.calcSum(ee)
            sum += ee.total_price
          })
        })
        this.form.total_budget = sum
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
    width: 700px;
    font-size: 14px;
  }
  .btn {
    width: 700px;
  }
  .activity-form {
    display: flex;
  }
  .right {
    width: 220px;
    border-radius: 10px;
    overflow: hidden;
  }
  .activity-name {
    color: #20A0FF;
    font-size: 18px;
    line-height: 40px;
  }
  .activity-input {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .activity-left {
    width: 200px;
    margin-right: 20px;
  }
  .activity-right {
    width: 480px;
    background: #EFF2F7;
    padding: 5px 5px 10px 5px;
    border-radius: 5px;
    margin-top: -5px;
  }
  .material {
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .material-name-input {
    width: 165px;
  }
  .material-input {
    width: 95px;
  }
  .material-last-input {
    width: 125px;
  }
  .activity {
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .add-m-btn {
    margin-top: 5px;
  }
  .activity-header {
    display: flex;
    justify-content: space-between;
  }
</style>
