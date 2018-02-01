<template>
  <div>
      <el-steps :active="active" finish-status="success" space='200px' class="steps">
                <el-step title="活动信息"></el-step>
                <el-step title="报名签到"></el-step>
                <el-step title="分享设置"></el-step>
                <el-step title="个性设置"></el-step>
            </el-steps>
      <el-form class="form">
          <el-form-item label="报名限制">
              <br/>
              <el-radio-group v-model="value1">
                    <el-radio :label="1">无限制</el-radio>
                    <el-radio :label="2">必须关注公众号才能报名</el-radio>
                    <el-radio :label="3">必须成为会员才能报名</el-radio>
                    <el-radio :label="4">必须分享才能报名</el-radio>                    
              </el-radio-group>
          </el-form-item>

          <el-form-item label="每人可报名限额">
              <br/>
              <el-radio-group v-model="value2">
                    <el-radio :label="1">无限制</el-radio>
                    <el-radio :label="2">限制</el-radio>
                                   
              </el-radio-group>
              <el-input class="ipt" placeholder="0">
                  <template slot="append">人</template>
              </el-input>
          </el-form-item>

          <el-form-item label="付费活动">
              <br/>
              <el-radio-group v-model="value3">
                    <el-radio :label="1">无限制</el-radio>
                    <el-radio :label="2">限制</el-radio>          
              </el-radio-group>
              <el-input class="ipt" placeholder="0">
                  <template slot="append">元</template>
              </el-input>
          </el-form-item>


          <el-form-item label="允许取消报名">
              <br/>
              <el-radio-group v-model="value4">
                    <el-radio :label="1">不允许</el-radio>
                    <el-radio :label="2">允许</el-radio>          
              </el-radio-group>
              <el-input class="ipt" placeholder="活动前几小时">
                  <template slot="append">小时</template>
              </el-input>
          </el-form-item>

          <el-form-item label="报名是否需要审核">
              <br/>
              <el-radio-group v-model="value5">
                    <el-radio :label="1">不需要</el-radio>
                    <el-radio :label="2">需要</el-radio>          
              </el-radio-group>
          </el-form-item>

            <el-form-item label="设置报名表">
                <br/>
                <el-table>
                    <el-table-column>

                    </el-table-column>
                </el-table>
            </el-form-item>


            <el-form-item label="签到条件">
                <br/>
                <el-radio-group v-model="value6">
                    <el-radio :label="1">必须报名</el-radio>
                    <el-radio :label="2">不需要报名</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="签到方式">
                <br/>
                <el-radio-group v-model="value7">
                    <el-radio :label="1">签到二维码</el-radio>
                    <el-radio :label="2">入场二维码</el-radio>
                    <el-radio :label="3">会员二维码</el-radio>
                    <el-radio :label="4">手机号</el-radio>
                    <el-radio :label="5">暗号</el-radio>
                </el-radio-group>
                <el-input disabled placeholder="请填写您的暗号" class="ipt"></el-input>
            </el-form-item>


            <el-form-item label="生成签到二维码">
                <br/>
                <img alt="二维码" class="img">
                <el-button @click="create" plain>生成</el-button>
            </el-form-item>
      </el-form>

      <el-button @click="previous">上一页</el-button>
      <el-button type="primary" @click="next">下一页</el-button>
  </div>
</template>

<script>
export default {
  data() {
      return {
          active:1,
          value1 : 1,
          value2 : 1,
          value3 : 1,
          value4 : 1,
          value5 : 1,
          value6 : 1,
          value7 : 1
      }
  },
  methods : {
      create() {
        const h = this.$createElement;
        console.log(h);
        this.$notify({
          title: '消息',
          message: h('i', { style: 'color: skyblue'}, '该功能正在完善中'),
          iconClass: 'el-icon-message'
        });
        // this.$notify.info({
        //   title: '消息',
        //   message: '这是一条消息的提示消息'
        // });
      },
      next() {
          this.$router.push("/side/fabu/step3");
    },
     previous() {
            this.$router.push("/side/fabu/step1");
        },
  }
}
</script>

<style scoped>
    .form {
        margin-top: 20px;
    }
    .ipt {
        width: 230px;
        margin-left: 80px;
    }
    .img {
        width: 100px;
        height: 100px;
        display: block;
        border: 1px solid #333;
        margin-bottom: 20px;
    }
</style>
