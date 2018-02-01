<template>
     <div class="one">
         <el-steps :active="active" finish-status="success" space='200px' class="steps">
                <el-step title="活动信息"></el-step>
                <el-step title="报名签到"></el-step>
                <el-step title="分享设置"></el-step>
                <el-step title="个性设置"></el-step>
            </el-steps>
                <el-form size="medium" >
                     <el-form-item label="活动名称" class="label">
                         <br/>
                        <el-input v-model="ipt"></el-input>
                    </el-form-item>


                     <el-form-item label="活动分类" class="label">
                          <br/>
                         <el-radio-group v-model="radio">
                             <el-radio :label="1">
                                 未发布
                             </el-radio>
                             <el-radio :label="2">
                                 测试活动
                             </el-radio>
                             <el-radio :label="3">
                                 精彩活动
                             </el-radio>
                         </el-radio-group>
                    </el-form-item>


                     <el-form-item label="活动标签" class="label">
                             <br/>
                            <el-tag v-for="tag in list" :key="tag" closable disable-transitions class="tag" @close="handleclose(tag)">
                                    {{tag}}
                            </el-tag>
                            <el-input class="input-new-tag" v-model="inputValue"  size="small" v-if="inputVisible" ref="saveTagInput"  @keyup.enter.native="handleInputConfirm"></el-input>
                            <el-button  size="small" @click="showInput" class="button-new-tag" v-else>+ New Tag</el-button>
                        
                           
                    </el-form-item>

                     <el-form-item label="活动时间" class="label">
                          <br/>
                            <el-date-picker  size="small" v-model="value" type="date" placeholder="请选择开始日期">

                            </el-date-picker>
                            <el-time-select  size="small" :picker-options="{
                                        start: '00:00',
                                        step: '00:15',
                                        end: '23:45'
                                    }" placeholder="请选择开始时间">

                            </el-time-select>
                            <span>-</span>
                             <el-date-picker size="small" v-model="value" type="date" placeholder="请选择截止日期">

                            </el-date-picker>
                            <el-time-select size="small" :picker-options="{
                                        start: '00:00',
                                        step: '00:15',
                                        end: '23:45'
                                    }" placeholder="请选择截止时间">

                            </el-time-select>
                    </el-form-item>

                     <el-form-item label="报名时间" class="label">
                          <br/>
                            <el-date-picker  size="small" v-model="value" type="date" placeholder="请选择开始日期">

                            </el-date-picker>
                            <el-time-select  size="small" :picker-options="{
                                        start: '00:00',
                                        step: '00:15',
                                        end: '23:45'
                                    }" placeholder="请选择开始时间">

                            </el-time-select>
                            <span>-</span>
                             <el-date-picker size="small" v-model="value" type="date" placeholder="请选择截止日期">

                            </el-date-picker>
                            <el-time-select size="small" :picker-options="{
                                        start: '00:00',
                                        step: '00:15',
                                        end: '23:45'
                                    }" placeholder="请选择截止时间">

                            </el-time-select>
                    </el-form-item>

                    <el-form-item label="活动地点" class="label">
                         <br/>
                        <el-select v-model="value2">
                            <el-option v-for="city in cityList" :key="city.value" :label="city.label" :value="city.value">
                                <span>{{city.label}}</span>
                                <span>{{city.value}}</span>
                            </el-option>
                        </el-select>
                        <el-input v-model="value3" class="ipt"></el-input>
                    </el-form-item>


                    <el-form-item label="活动人数" class="label">
                         <br/>
                            <el-radio-group v-model="value4" @change="change">
                                <el-radio :label="2" >不限制</el-radio>
                                <el-radio :label="3" >限制</el-radio>
                            </el-radio-group>
                            <el-input class="ipt" placeholder="0" :disabled="dis" id="ipt">
                                <template slot="append">人</template>
                            </el-input>
                    </el-form-item>

                    <el-form-item label="活动封面" class="label">
                         <br/>
                            <el-upload drag  action="https://jsonplaceholder.typicode.com/posts/" multiple>
                                <i class="el-icon-upload"></i>
                                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                            </el-upload>
                    </el-form-item>

                    <el-form-item>
                     t
                        <el-input type="textarea" placeholder="请输入内容" :rows="4">
                            
                        </el-input>
                    </el-form-item>

                    <el-form-item label="报名用户信息展示">
                         <br/>
                        <el-radio-group v-model="value5">
                            <el-radio :label="1">不展示</el-radio> 
                            <el-radio :label="3">展示报名人数</el-radio> 
                            <el-radio :label="5">展示报名清单</el-radio>
                            <el-radio :label="7">报名成功显示用户完整资料</el-radio>
                        </el-radio-group>
                    </el-form-item>


                    <el-form-item label="评论功能">
                         <br/>
                        <el-radio-group v-model="value6">
                            <el-radio :label="1">不开启</el-radio>
                            <el-radio :label="6">实时评论</el-radio>
                            <el-radio :label="2">审核后评论</el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="赞助广告">
                         <br/>
                        <template >
                            <el-button ref="btn" @click="open" type="text" class="ad">开通赞助广告</el-button>
                        </template>
                        <el-upload  class="upload-demo" multiple drag action="https://jsonplaceholder.typicode.com/posts/" >
                             <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            <div class="el-upload__tip" slot="tip">图片尺寸建议比例1；4.18，如160*666像素，且不超过2M</div>
                        </el-upload>
                    </el-form-item>

                </el-form>

                
                <el-button-group>
                            <el-button @click.native.prevent>
                                预览
                            </el-button>
                            <el-button type="primary" @click="next" @click.native.prevent>
                               下一页
                            </el-button>
                        </el-button-group>
            </div>

</template>

<script>
export default {
data() {
        return {
            active : 0,
            ipt : '测试活动',
            radio : 1,
            list: ["活动1","活动2","活动3"],
            inputVisible : false,
            inputValue: "",
            value: "",
            value2: "黑龙江",
            cityList: [{
                value: 'Beijing',
                label: '北京'
                }, {
                value: 'Shanghai',
                label: '上海'
                }, {
                value: 'Nanjing',
                label: '南京'
                }, {
                value: 'Chengdu',
                label: '成都'
                }, {
                value: 'Shenzhen',
                label: '深圳'
                }, {
                value: 'Guangzhou',
                label: '广州'
            }],
            value3 : "黑龙江省哈尔滨市哈尔滨理工大学",
            value4 : 2,
            value5 : 5,
            value6 : 6,
            dis:true
            
        }
    },
    methods : {
        handleclose(tag) {
            this.list.splice(this.list.indexOf(tag),1);
        },
        showInput() {
            this.inputVisible=true;

            this.$nextTick(()=> {
                // console.log(this.$refs.btn);
                console.log(this.$refs.saveTagInput);
               this.$refs.saveTagInput.$refs.input.focus();
            });
            
        },
        handleInputConfirm() {
              let inputValue = this.inputValue;
                if (inputValue) {
                    this.list.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
        },
        open() {
             this.$message('该功能还未开放');
        },
        next() {
          this.$router.push("/side/fabu/step2");
        },
        change() {
           this.dis=!this.dis;

        }
        
     }
    }

    

</script>

<style scoped>
    .one {
        margin-top: 20px;
    }
    .steps {
        margin-bottom: 30px;
    }
    label.el-form-item__label::after {
        content: "*";
        color: #ff4949;
        margin-right: 4px;
    }
    .tag {
        margin-right: 10px;
    }
    .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .ipt {
      width: 300px;
  }
  .ad {
      font-size: 14px;
  }
</style>