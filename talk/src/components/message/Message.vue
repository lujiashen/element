<template>
    <div class="message">
        <common-header></common-header>
         <router-view></router-view>
        <common-footer></common-footer>
    </div>
   
</template>


<script>
import CommonHeader from "../../components/common/Header"
import CommonFooter from "../../components/common/Footer"
export default {
   components : {
      CommonHeader ,
      CommonFooter 
  }
}
</script>

<style scoped>
    .message {
        margin: 54px 0;
    }
</style>
