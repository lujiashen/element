<template>
    <div>
         <mt-header title="欢迎加入">
             <router-link to="/login" slot="left">
                <mt-button icon="back">返回</mt-button>
             </router-link>
        </mt-header>
        <div class="regeist">
            <div class="line">
                <div class="line-left">用户名</div>
                <div class="line-right">
                    <input type="text" v-model="username" placeholder="请输入用户名">
                </div>
            </div>
            <div class="line">
                <div class="line-left">密码</div>
                <div class="line-right">
                    <input type="password" v-model="password" placeholder="请输入密码" >

                </div>
            </div>
             <div class="line">
                <div class="line-left">确认密码
                  
                </div>
                <div class="line-right" >
                    <input type="password" v-model="repeat" placeholder="请再次输入密码"   @blur="blur1">

                </div>
            </div>
             <div class="line">
                <div class="line-left">网址</div>
                <div class="line-right">
                    <input type="email" v-model="website" placeholder="请输入网址">
                </div>
            </div>
             <div class="line">
                <div class="line-left">邮箱</div>
                <div class="line-right">
                    <input type="email" v-model="email" placeholder="请输入邮箱"  @blur="blur2">
                </div>
            </div>
            
            <mt-field label="生日" placeholder="" type="date" v-model="birthday" ></mt-field>
          
            <div class="all-btn">
                <mt-button type="primary" @click="sure" >确认注册</mt-button>
                <mt-button type="default" @click="fanhui">返回</mt-button>
            </div>
        </div>
    </div>

   
</template>

<script>
import {MessageBox} from "mint-ui"
export default {
    data() {
        return {
            username : "",
            password : "",
            repeat : "",
            email : "",
            website : "",
            birthday : "",
            error: "",
            timer : "",
            
           
        }
    },
    methods : {
        blur1() {
            console.log(this.password);
            console.log(this.repeat);
            if(this.password != this.repeat) {
                MessageBox.alert("两次密码输入不一致");
            }
           
        },
        sure() {
            if(this.username!=""&&this.password!="") {
                localStorage.setItem("name",this.username);
            localStorage.setItem("password",this.password);
             MessageBox.alert("注册成功").then(()=>{
                   
               })
                clearInterval(this.timer);
           
            this.timer=setTimeout(()=>{
                            this.$router.push("/login");
                           
                        },1500)
           
            }
            else {
                MessageBox.alert("注册不成功,请完善信息");
            }
            
        },
        blur2() {
            console.log("失去焦点");
            var regEmail =new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$");
            console.log(this.email);
           if(this.email=="") {
               console.log("Kong");
               MessageBox.alert("邮箱为空，请输入");
           }
           else if(regEmail.test(this.email)) {
                console.log("ok");
                MessageBox.alert("邮箱格式正确");
               
            }else {
                console.log("邮箱格式不正确");
                MessageBox.alert("邮箱格式不正确");
            }
        },
       fanhui() {
           this.$router.push("/login");
       }
    }
}
</script>

<style scoped>
    .regeist {
        margin: 20px 0 0 0;
    }
    .line {
        height: 48px;
        padding: 0 10px;
        border-bottom: 1px solid #ccc;
        display: flex;
    }
    .line-left {
       width: 30%;
        height: 48px;
        line-height: 48px;
        
    }
    .line-right {
        width: 70%;
        height: 48px;
    }
    .line-right input {
        display: block;
        outline: none;
        border: none;
        width: 100%;
        height: 100%;
        
    }
    .all-btn {
        margin-top: 15px;
    }
</style>


