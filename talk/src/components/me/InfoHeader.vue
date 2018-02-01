<template>
    <mt-header title="个人信息" id="infoHeader">
        <router-link to="/me/meList" slot="left">
             <mt-button icon="返回">返回</mt-button>
        </router-link>
       
    </mt-header>
</template>

<script>
export default {
  
}
</script>

<style scoped>
    #infoHeader {
        height: 54px;

    }
     @media screen and (min-width:1024px) {
        #infoHeader {
            height: 100px;
        }
        
    }
</style>
