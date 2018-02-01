<template>
    <div>
        <hello></hello>
        <main>
           <div class="main-left">
               <ul>
                   <li @click="fabu">活动发布</li>
                   <li @click="guanli">活动管理</li>
               </ul>
           </div>
           <div class="main-right">
               <router-view></router-view>
           </div>
       </main>
    </div>
</template>

<script>
import Hello from "./Hello"
export default {
    components : {
        Hello
    },
    methods: {
        fabu() {
            this.$router.push("/side/fabu/step1");
        },
        guanli() {
            this.$router.push("/side/guanli");
        }
        
    }
}
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }
    ul {
        list-style: none;
        padding: 0;
    }
     main {
         border: 40px solid rgb(233, 236, 241);
         overflow: hidden;
         
     }
     .main-left {
         width: 200px;
        float: left;
        height: 100%;
     }
     .main-left li {
         width: 160px;
         padding: 0 20px;
         height: 56px;
         text-align: center;
         line-height: 56px;
         cursor: pointer;
         
     }
     .main-left li:hover {
         background: #ccc;
         
     }
     .main-right {
        float: left;
        width: 1000px;
        padding: 50px 70px;
        height: 100%;
     }
      .router-link-active {
         color: #20a0ff;
     }
</style>
