<template>
    <div class="four">
        <el-steps :active="active" finish-status="success" space='200px' class="steps">
                <el-step title="活动信息"></el-step>
                <el-step title="报名签到"></el-step>
                <el-step title="分享设置"></el-step>
                <el-step title="个性设置"></el-step>
            </el-steps>
        <el-form :label-position="labelPosition">
            <el-form-item label="消息推送">
                <br>
                <div>
                    <el-radio v-model="value1" :label="1" size="medium" border>报名成功</el-radio>
                    <el-input type="textarea" row="4" class="ipt" v-model="ipt1"></el-input>
                </div>     
                <div>
                     <el-radio v-model="value2" :label="1" size="medium" border>审核通过</el-radio>
                     <el-input type="textarea" row="4" class="ipt" v-model="ipt2"></el-input>
                </div>
               <div>
                        <el-radio v-model="value3" :label="1" size="medium" border>审核失败</el-radio>
                        <el-input type="textarea" row="4" class="ipt" v-model="ipt3"></el-input>
                                        
               </div>
               <div>
                        <el-radio v-model="value4" :label="1" size="medium" border>签到成功</el-radio>
                        <el-input type="textarea" row="4" class="ipt" v-model="ipt4"></el-input>
               </div>
                 <div>
                        <el-radio v-model="value5" :label="1" size="medium" border>签到失败</el-radio>
                        <el-input type="textarea" row="4" class="ipt" v-model="ipt5"></el-input>
                 </div>
                <div>
                    <el-radio v-model="value6" :label="1" size="medium" border>重复签到</el-radio>
                    <el-input type="textarea" row="4" class="ipt" v-model="ipt6"></el-input>
                </div>
                
            </el-form-item>
            <el-form-item label="微信提醒">
                <br>
                <el-radio-group >
                    <el-radio :label="1">
                        不提醒
                    </el-radio>
                    <el-radio :label="2">
                        提醒
                    </el-radio>
                </el-radio-group>
                <span class="time">
                    <el-select v-model="val">
                        <el-option v-for="time in list" :key="time" :label="time" :value="time" placholder="提前几小时"></el-option>
                    </el-select>
                    <el-input class="ipt1" placeholder="请输入微信提醒"></el-input>
                </span>
                
            </el-form-item>
            <el-form-item label="活动报名使用积分">
                <el-button type="text" @click="open">了解积分规则</el-button>
               
                <br>
                <span class="one">
                    <el-radio-group >
                        <el-radio :label="1">
                            不使用
                        </el-radio>
                        <el-radio :label="2">
                            使用
                        </el-radio>
                    </el-radio-group>
                </span>
                <span>
                     <el-input class="ipt" placeholder="0">
                        <template slot="append">积分</template>
                    </el-input>
                </span>
               
            </el-form-item>
            <el-form-item label="活动报名获得积分">
                <br>
                <span >
                     <el-radio-group >
                        <el-radio :label="1">
                            无积分
                        </el-radio>
                        <el-radio :label="2">
                            获得积分
                        </el-radio>
                    </el-radio-group>
                </span>
               <span>
                    <el-input class="ipt" placeholder="0">
                        <template slot="append">积分</template>
                    </el-input>
               </span>
               
            </el-form-item>
            <el-form-item label="分享活动获得积分">
                <br>
                <el-radio-group >
                    <el-radio :label="1">
                        无积分
                    </el-radio>
                    <el-radio :label="2">
                        获得积分
                    </el-radio>
                </el-radio-group>
                <el-input class="ipt" placeholder="0">
                    <template slot="append">积分</template>
                </el-input>
            </el-form-item>

            <el-form-item label="配置截屏分享图片">
                <el-button type="text" @click="open1">了解截屏分享图片</el-button>
                <br/>
                <el-radio-group>
                    <el-radio :label="1">不配置</el-radio>
                    <el-radio :label="2">配置</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <el-button @click="previous">
            上一步
        </el-button>
        <el-button type='primary'>
            发布活动
        </el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active : 3,
            labelPosition: 'right',
            val : "",
            ipt1 : '您已成功报名***(默认活动标题名)活动',
            ipt2 : '您报名的***(默认活动标题名)活动，已审核通过',
            ipt3 : "您报名的***(默认活动标题名)活动，审核不通过",
            ipt4 : '***(默认用户名)您好！恭喜您签到成功！',
            ipt5 : '抱歉，签到失败',
            ipt6 : '请勿重复签到！',
            value1:1,
            value2:1,
            value3:1,
            value4:1,
            value5:1,
            value6:1,
            
            list : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
           
        }
    },
    methods : {
       
    open() {
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('div', { style: 'color: black' }, 
`积分使用: 
(1) 用户可以使用积分进行指定活动的报名优惠抵扣。 
(2) 单个积分可抵扣的相应的优惠值由活动方自己定义。例如：1个积分抵扣2元报名费。 
   
积分获取: 
(1) 活动参与者通过分享活动，报名活动，或由分享后带来的好友阅读量，好友报名数等途径获得积分。 
(2) 一次活动获得的积分只对本次活动可用。`),
        
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
         
         
        })
      },
      open1() {
          const a = this.$createElement;
          this.$msgbox({
              title : '消息',
              message : a('div',{style: 'color:skyblue'},'该功能正在完善~'),
              showCancelButton : true,
              confirmButtonText : '确定',
              cancelButtonText : "取消"
          })
      },
       previous() {
            this.$router.push("/side/fabu/step3");
        },
        
}
}   
</script>

<style scoped>
    .four {
        margin-top: 20px;
    }
    .ipt {
        width: 500px;
        margin-left: 50px;
       
    }
    .ipt1 {
        width: 300px;
        margin-left: 20px;
    }
    div {
        vertical-align: middle;
        margin-bottom: 20px;
    }
    .time {
        margin-left: 20px;
    }
    span {
        display: inline-block;
    }
    .one {
        width: 185px;
    }
</style>
