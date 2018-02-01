<template>
    <div class="hello">
       <header>
           <ul id="list">
               <li><router-link to="/haha">高级插件</router-link></li>
               <li><router-link to="/haha">在线商城</router-link></li>
               <li><router-link to="/haha">客户管理</router-link></li>
               <li><router-link to="/haha">系统设置</router-link></li>
               <li><router-link to="/side">活动发布</router-link></li>               
           </ul>
       </header>

       
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }
    ul {
        list-style: none; 
    } 
    header {
        width: 100%;
        height: 60px;
        background: #eff2f7;
    }
    #list {
         padding-left: 300px;
    }
    
     #list li {
            
            padding: 0 20px;
            height: 60px;
            line-height: 60px;
            margin: 0;
            cursor: pointer;
            position: relative;
            box-sizing: border-box;
            border-bottom: 5px solid transparent;
            float: left;
     }
     #list li:hover {
         border-bottom: 5px solid #20a0ff;
     }
     li a {
            color: #475669;
            text-decoration: none;
     }
     .router-link-active {
         color: #20a0ff;
     }

    
</style>
