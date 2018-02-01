<template>
    <div>
        <info-header class="head"></info-header>
        <div class="info">
            <div class="public"></div>
            <div class="back">
                <div class="photo">
                    <div class="photo-left">
                        头像
                    </div>
                    <div class="photo-right">
                        <img src="../../../static/photo/head.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="back1">
                <div class="work" @click="changeName">
                    <div class="work-left">昵称</div>
                    <div class="work-right">{{name}}</div>
                </div>
            </div>
             <div class="back1">
                <div class="work">
                    <div class="work-left">微信号</div>
                    <div class="work-right">LJS0404</div>
                </div>
            </div>
             <div class="back1" @click="more">
                <div class="work">
                    <div class="work-left">更多</div>
                    <div class="work-right"></div>
                </div>
            </div>
            <div class="back1" @click="exit">
                <div class="work">
                    <div class="work-left">
                        <mt-button type="danger">退出登录</mt-button>
                    </div>
                    <div class="work-right"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InfoHeader from "./InfoHeader"
import {MessageBox} from "mint-ui"
export default {
  components : {
      InfoHeader
  },
  data() {
      return {
          name : "Mr.Lu"
      }
  },
  methods : {
      more() {
          this.$router.push("/more");
      },
      changeName() {
          MessageBox({
              title : "更改名字"
          })
          MessageBox.prompt("好的名字可以让你的朋友更容易记住你").then(({value,action})=>{
                this.name = value;
          }).catch(()=>{
                console.log("取消修改");
          })
      },
      exit() {
         
          this.$router.push("/login");
      }
  }
}
</script>

<style scoped>
    .info {
       margin: 54px 0;
       position: absolute;
       top: 0;
       left: 0;
       bottom: 0;
       right: 0;
       background: #ccc; 
       color: rgb(56, 55, 55);
    }
    .head {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
    }
    .public {
        width: 100%;
        height: 15px;
        background: #ccc;
    }
    .back {
        height: 80px;
        width: 100%;
        background:#fff;
    }
    .photo {
        height: 79px;
        border-bottom: 1px solid red;
        margin: 0 10px;
       background: #fff;
    }
    .photo div {
        float: left;
        
    }
    .photo-left {
        height: 80px;
        width: 60%;
        line-height: 80px;
        font-size: 20px;  
        
    }
    .photo-right {
       width: 40%;
        height: 80px;
       position: relative;
        
      
        /* position: relative; */
    }
    .photo-right img {
        height: 58px;
        border: 1px solid #333;
        position: absolute;
        right: 0;
        top: 10px;
        /* position: absolute; */
       
    }
    .back1 {
        width: 100%;
        height: 50px;
        background: #fff;
    }
    .work {
        height: 49px;
        margin: 0 10px;
        border-bottom: 1px solid red;
    }
    .work div {
        float: left;
    }
    .work-left {
        width: 50%;
        height: 50px;
        line-height: 50px;
    }
    .work-right {
        line-height: 50px;
        height: 50px;
        width: 50%;
        text-align: right;
    }
     @media screen and (min-width:1024px) {
        .info{
            margin: 100px 0;
        }
    }
</style>
