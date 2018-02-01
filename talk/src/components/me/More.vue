<template>
    <div>
        <more-header id="moreHeader"></more-header>
        <div class="more">
            <div class="public"></div>
            <div class="back">
                <div class="work" @click="changeSex">
                        <div class="work-left">性别</div>
                        <div class="work-right">{{sex}}</div>
                   <mt-actionsheet :actions="actions" v-model="visibile">

                   </mt-actionsheet>
                    
                </div>
            </div>
            <div class="back">
                <div class="work" @click="changeLocation">
                    <div class="work-left">地区</div>
                    <div class="work-right">{{location}}</div>

                     <mt-actionsheet :actions="actions1" v-model="visibile1">

                   </mt-actionsheet>
                </div>
            </div>
            <div class="back" @click="changeTitle">
                <div class="work" style="border-bottom:none">
                    <div class="work-left" style="width:30%;">个性签名</div>
                    <div class="work-right" style="width:70%;">{{title}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MoreHeader from "./MoreHeader"
import {MessageBox} from "mint-ui"
export default {
  components : {
      MoreHeader
  },
  data() {
      return {
          title : "如花岁月催人老，意气使得少年回",
          visibile : false,
          actions : [{
              name : "男",
              method : this.man
          },{
              name : "女",
              method : this.woman
          }],
          sex : "男",
          visibile1 : false,
          location : "大庆",
          actions1 : [{
              name : "北京",
              method : this.beijing
          },{
              name : "上海",
              method : this.shanghai
          },{
              name : "杭州",
              method : this.hangzhou
          },{
              name : "大庆",
              method : this.daqing
          }]
      }
  },
  methods : {
      changeTitle() {
        MessageBox.prompt("请输入签名").then(({value,action})=>{
            console.log("成功修改签名");
            console.log(action);
            console.log(value);
            this.title=value;
        }).catch(()=>{
            console.log("修改签名失败");
        })
      },
      changeSex() {
          this.visibile= true;
      },
      man() {
          this.sex = "男";
      },
      woman() {
          this.sex = "女";
      },
      daqing() {
          this.location="大庆";
      },
      shanghai() {
          this.location="上海";
      },
      hangzhou() {
          this.location="杭州";
      },
      beijing() {
          this.location="北京";
      },
      changeLocation() {
          this.visibile1 = true;
      }

  }
}
</script>

<style scoped>
    #moreHeader {
        height: 54px;
    }
    .more {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right:0;
        margin: 54px 0 0 0;
        background: rgb(223, 221, 221);
    }
    .public {
        width: 100%;
        height: 20px;
        background: #ccc;
    }
    .back {
        width: 100%;
        height: 50px;
        background: rgb(253, 250, 250);
    }
    .work {
        
        margin: 0 10px;
        height: 49px;
        border-bottom: 1px solid #ccc;
    }
    .work-left {
        width: 50%;
        height: 50px;
        float: left;
        line-height: 50px;
    }
    .work-right {
        width: 50%;
        height: 50px;
        float: left;
        line-height: 50px;
        text-align: right;
        color: #b1b0b0;        
    }
    @media screen and (min-width:1024px) {
        .more{
            margin: 100px 0;
        }
    }
    
</style>
