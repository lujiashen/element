<template>
    <div class="login">
        <div class="all-ipt">
             <p><input type="text" class="ipt" v-model="name"  placeholder="请输入用户名"></p>
             <p><input type="password" class="ipt" v-model="password"  placeholder="请输入密码"></p>
            
            <div class="all-btn">
                <mt-button type="primary" @click="login">登录</mt-button>
                <mt-button type="default" @click="regeist">注册</mt-button>
            </div>
        </div>
        <div class="btm">
            <i><strong>天下攘攘皆为友往</strong></i>
            <br/>
            &nbsp; &nbsp;<i><strong>天下熙熙皆为爱来</strong></i>
         </div>
    </div>
</template>

<script>
import {MessageBox} from "mint-ui"
export default {
    data() {
        return {
            password : "",
            name : ""
        }
    },
    methods : {
        regeist() {
            this.$router.push("/regeist");
        },
        login() {
            if(this.name == localStorage.getItem("name") && this.password == localStorage.getItem("password")) {
                this.$router.push("/message/messageList");
            }
            else if(this.name==""||this.password=="") {
                    MessageBox.alert("用户名或密码不能为空");
            }
            else {
                MessageBox.alert("用户名或密码错误，请重新输入");
            }
        }
    }
}
</script>


<style scoped>
    .login {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("../../../static/photo/29.jpg") center no-repeat;
        /* position: relative; */
        display: flex;
        justify-content: center;
        align-items:stretch;
    }
    .btm {
        position: absolute;
        bottom: 10px;
        width: 100%;
        height: 100px;
        font-size: 32px;
        text-align: center;
    }
    .ipt {
        width: 300px;
        height: 50px;
        border: 1px solid #333;
        margin-top: 10px;
        text-indent: 10px;
    }
    .all-btn {
        margin-top: 10px;
    }
</style>
